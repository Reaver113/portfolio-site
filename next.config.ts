import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio-site",
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
