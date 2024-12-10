import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio-site",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
