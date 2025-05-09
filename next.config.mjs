/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,

  // Configurazione per GitHub Pages
  output: "export",
  basePath: "/netprimestreaming", // Usa il nome esatto del repository GitHub
  assetPrefix: "/netprimestreaming/",

  // Impostazioni aggiuntive
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    unoptimized: true,
    domains: ["image.tmdb.org"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
