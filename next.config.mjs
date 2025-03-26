/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",

  distDir: "dist",
  reactStrictMode: true,
  trailingSlash: true,

  // https://github.com/vercel/next.js/issues/52050 https://github.com/vercel/next.js/issues/8158
  // assetPrefix: "https://ittuann.github.io",
  // basePath: "/qingshanasd",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
