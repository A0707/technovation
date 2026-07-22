import { SITE_URL, IS_INDEXABLE } from "@/lib/site";

/**
 * robots.txt généré.
 *
 * Hors production — preview Vercel, branches, local — tout est interdit :
 * un déploiement de test indexé crée du contenu dupliqué qui concurrence le
 * domaine final dans les résultats de recherche.
 */
export default function robots() {
  if (!IS_INDEXABLE) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Routes techniques : aucune valeur pour un moteur de recherche.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
