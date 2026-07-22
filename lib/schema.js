// Constructeurs de données structurées schema.org.
//
// Toutes les URL absolues passent par absoluteUrl() : un JSON-LD qui déclare
// un domaine différent de celui qui le sert est ignoré, voire pénalisé.

import { absoluteUrl, SITE_URL } from "./site";
import { contact, site } from "./tokens";

/** Normalise un numéro marocain « 06 07 173 005 » en « +212607173005 ». */
function toE164(phone) {
  const digits = phone.replace(/\D/g, "");
  return `+212${digits.replace(/^0/, "")}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Technovation",
    description:
      "Matériel informatique professionnel, infrastructure réseau, protection, vidéosurveillance, téléphonie IP et maintenance pour les entreprises au Maroc.",
    url: SITE_URL,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.heroImage || site.logo),
    email: contact.email,
    telephone: contact.phones.map(toE164),
    address: {
      "@type": "PostalAddress",
      streetAddress: "46 Boulevard Zerktouni, 2ème étage, Appartement N° 6",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:30",
      },
    ],
    areaServed: { "@type": "Country", name: "Maroc" },
    // Seul le compte Facebook est vérifié : un sameAs erroné dégrade la
    // confiance que Google accorde à l'entité.
    sameAs: [contact.facebook],
  };
}

/**
 * Fil d'Ariane.
 * `items` : [{ label, href }] — le dernier élément n'a pas besoin de href.
 */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Accueil", href: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.text,
    url: absoluteUrl(service.href),
    serviceType: service.title,
    areaServed: { "@type": "Country", name: "Maroc" },
    provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business` },
  };
}

export function productSchema(product) {
  const offer = {
    "@type": "Offer",
    url: absoluteUrl(`/boutique/${product.slug}`),
    priceCurrency: "MAD",
    availability: product.inStock
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",
    seller: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business` },
  };

  // Un prix nul ou absent invalide l'offre entière : mieux vaut l'omettre.
  if (product.price) offer.price = String(product.price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.name,
    url: absoluteUrl(`/boutique/${product.slug}`),
    ...(product.images?.[0] ? { image: absoluteUrl(product.images[0].src) } : {}),
    ...(product.sku ? { sku: product.sku } : {}),
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    ...(product.categories?.[0] ? { category: product.categories[0].name } : {}),
    offers: offer,
  };
}
