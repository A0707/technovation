// Client WooCommerce Store API — technovation.ma
//
// L'endpoint /wp-json/wc/store/v1 est public et en lecture seule : aucune clé
// d'API n'est nécessaire, donc aucun secret à stocker côté Next.js.
//
// Les produits, prix, stocks et catégories affichés proviennent tous d'ici :
// rien n'est saisi en dur, la vitrine ne peut pas diverger de la boutique.

const BASE = process.env.NEXT_PUBLIC_WOO_BASE || "https://technovation.ma/wp-json/wc/store/v1";

// Revalidation horaire : le catalogue bouge peu, inutile de frapper WordPress
// à chaque visite.
const REVALIDATE = 3600;

/** WooCommerce renvoie des entités HTML (&#8217;) dans les titres. */
export function decode(str = "") {
  return str
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * technovation.ma refuse les requêtes image dont le Referer n'est pas le site
 * lui-même (403). On passe donc par /api/media, qui relaie avec le bon Referer.
 * Une fois le thème installé sur le domaine, ce détour disparaît : les médias
 * sont alors servis en même origine.
 */
export function media(src) {
  if (!src) return null;
  try {
    const url = new URL(src);
    if (!/^(www\.)?technovation\.ma$/.test(url.hostname)) return src;
    return `/api/media${url.pathname}`;
  } catch {
    return src;
  }
}

async function get(path) {
  try {
    const res = await fetch(`${BASE}${path}`, { next: { revalidate: REVALIDATE } });
    if (!res.ok) {
      console.error(`[woo] ${path} → HTTP ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    // Le site ne doit pas tomber si WordPress est injoignable : les composants
    // rendent un état vide plutôt qu'une erreur 500.
    console.error(`[woo] ${path} → ${err.message}`);
    return null;
  }
}

/**
 * Les prix de la Store API sont des entiers exprimés dans l'unité mineure.
 * Le dirham est configuré avec `currency_minor_unit: 0`, mais on lit la valeur
 * plutôt que de la supposer.
 */
function toAmount(prices, key = "price") {
  if (!prices || prices[key] == null) return null;
  const minor = Number(prices.currency_minor_unit ?? 0);
  return Number(prices[key]) / 10 ** minor;
}

function normalizeProduct(p) {
  return {
    id: p.id,
    name: decode(p.name),
    slug: p.slug,
    sku: p.sku || null,
    permalink: p.permalink,
    price: toAmount(p.prices),
    regularPrice: toAmount(p.prices, "regular_price"),
    onSale: Boolean(p.on_sale),
    image: media(p.images?.[0]?.src),
    imageAlt: decode(p.images?.[0]?.alt || "") || decode(p.name),
    category: decode(p.categories?.[0]?.name || ""),
    inStock: Boolean(p.is_in_stock),
  };
}

/** Toutes les catégories non vides, de la plus fournie à la plus rare. */
export async function getCategories() {
  const data = await get("/products/categories?per_page=100");
  if (!Array.isArray(data)) return [];
  return data
    .filter((cat) => cat.count > 0)
    .map((cat) => ({
      id: cat.id,
      name: decode(cat.name),
      slug: cat.slug,
      count: cat.count,
      image: cat.image?.src || null,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getProducts({ category, perPage = 8, orderby = "popularity" } = {}) {
  const params = new URLSearchParams({ per_page: String(perPage), orderby });
  if (category) params.set("category", category);
  const data = await get(`/products?${params}`);
  if (!Array.isArray(data)) return [];
  return data.map(normalizeProduct);
}

/**
 * Onglets « Nos produits phares ».
 *
 * Chaque onglet correspond à une catégorie réellement présente en boutique.
 * Une catégorie inconnue est simplement ignorée : impossible d'afficher un
 * onglet vide ou inventé.
 */
export async function getFeaturedTabs(tabs, perPage = 6) {
  const categories = await getCategories();
  const bySlug = new Map(categories.map((cat) => [cat.slug, cat]));

  const resolved = tabs
    .map((tab) => ({ ...tab, slugs: tab.slugs.filter((s) => bySlug.has(s)) }))
    .filter((tab) => tab.slugs.length > 0);

  return Promise.all(
    resolved.map(async (tab) => {
      const groups = await Promise.all(
        tab.slugs.map((slug) => getProducts({ category: bySlug.get(slug).id, perPage })),
      );
      // Dédoublonnage : un produit peut appartenir à plusieurs catégories
      // regroupées sous le même onglet (ex. imprimantes laser + jet d'encre).
      const seen = new Set();
      const products = groups
        .flat()
        .filter((p) => (seen.has(p.id) ? false : seen.add(p.id)))
        .slice(0, perPage);

      const count = tab.slugs.reduce((sum, slug) => sum + bySlug.get(slug).count, 0);
      return { label: tab.label, slug: tab.slugs[0], count, products };
    }),
  );
}

/**
 * Nombre total de produits correspondant à une requête.
 *
 * WooCommerce le renvoie dans l'en-tête X-WP-Total : inutile de rapatrier les
 * 346 fiches pour en compter le nombre.
 */
async function countProducts(query = "") {
  try {
    const res = await fetch(`${BASE}/products?per_page=1${query}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const total = Number(res.headers.get("x-wp-total"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

/** Total réel du catalogue. */
export const getCatalogueSize = () => countProducts();

/** Produits actuellement en promotion. */
export const getOnSaleCount = () => countProducts("&on_sale=true");
