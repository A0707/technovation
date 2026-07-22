/** @type {import('next').NextConfig} */

// Un déploiement hors production ne doit jamais être indexé : sans cela, le
// domaine Vercel concurrence le domaine final sur les mêmes contenus.
const IS_PRODUCTION = process.env.VERCEL_ENV === "production";
const NOINDEX = { key: "X-Robots-Tag", value: "noindex, nofollow" };

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Les visuels produits et le logo sont servis par WordPress.
    remotePatterns: [
      { protocol: "https", hostname: "technovation.ma" },
      { protocol: "https", hostname: "www.technovation.ma" },
    ],
    // AVIF d'abord, WebP en repli — next/image négocie selon le navigateur.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    const rules = [];

    if (!IS_PRODUCTION) {
      rules.push({ source: "/:path*", headers: [NOINDEX] });
    }

    // Filet indépendant de l'environnement : même un déploiement marqué
    // "production" reste non indexable tant qu'il répond sur *.vercel.app.
    // Le domaine final, lui, n'est pas concerné.
    rules.push({
      source: "/:path*",
      has: [{ type: "host", value: "(?<host>.*\\.vercel\\.app)" }],
      headers: [NOINDEX],
    });

    return rules;
  },
};

module.exports = nextConfig;
