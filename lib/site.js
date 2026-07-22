// Identité d'origine du site — source unique de vérité.
//
// Toute URL absolue (canonicals, Open Graph, JSON-LD, sitemap, robots) doit
// être construite à partir d'ici. Une URL en dur ailleurs finit toujours par
// diverger : c'est ce qui faisait pointer les canonicals du déploiement Vercel
// vers technovation.ma, avec un risque de contenu dupliqué.

const FALLBACK = "https://technovation.ma";

/** Retire un éventuel slash final pour éviter les `//` à la concaténation. */
function normalize(url) {
  return url.replace(/\/+$/, "");
}

export const SITE_URL = normalize(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK);

/**
 * Le site n'est indexable que sur le domaine de production.
 *
 * `VERCEL_ENV` vaut "production" uniquement sur le déploiement rattaché au
 * domaine principal ; les preview et les branches valent "preview". En local,
 * la variable est absente : on considère l'environnement comme non indexable.
 */
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

/** Un déploiement *.vercel.app ne doit jamais être indexé, même en prod. */
export const IS_VERCEL_DOMAIN = SITE_URL.includes(".vercel.app");

export const IS_INDEXABLE = IS_PRODUCTION && !IS_VERCEL_DOMAIN;

/** Construit une URL absolue à partir d'un chemin interne. */
export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
