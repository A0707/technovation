import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/tokens";
import { getAllProductSlugs } from "@/lib/woo";

/**
 * Sitemap.
 *
 * Les pages sans contenu publiable (réalisations, tant qu'aucun projet n'est
 * renseigné) sont volontairement absentes : elles sont en `noindex`, les
 * déclarer ici enverrait un signal contradictoire à Google.
 */
const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/boutique", changeFrequency: "daily", priority: 0.9 },
  { path: "/a-propos", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
];

export default async function sitemap() {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Si WooCommerce est injoignable au moment du build, on publie le sitemap
  // sans les produits plutôt que d'échouer : un sitemap partiel vaut mieux
  // qu'aucun sitemap.
  const slugs = await getAllProductSlugs();
  const productEntries = slugs.map((slug) => ({
    url: absoluteUrl(`/boutique/${slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...productEntries];
}
