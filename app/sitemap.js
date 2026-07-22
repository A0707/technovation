import { absoluteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Les pages sans contenu publiable (réalisations, tant qu'aucun projet n'est
 * renseigné) sont volontairement absentes : elles sont en `noindex`, les
 * déclarer ici enverrait un signal contradictoire à Google.
 *
 * Les fiches produits seront ajoutées avec la route /boutique/[slug].
 */
const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/boutique", changeFrequency: "daily", priority: 0.9 },
  { path: "/a-propos", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
