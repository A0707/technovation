/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
