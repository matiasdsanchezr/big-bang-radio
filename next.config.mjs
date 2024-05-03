import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/big-bang-radio",
  crossOrigin: "anonymous",
  images: { unoptimized: true },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "src/sw.ts", // add the path where you create sw.ts
  swDest: "public/sw.js",
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // to disable pwa in development
  maximumFileSizeToCacheInBytes: 17 * 1024 * 1024,
});

export default withSerwist(nextConfig);
