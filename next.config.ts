import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
  turbopack: {
    rules: {
      "*.mp4": {
        type: "asset",
      },
      "*.webm": {
        type: "asset",
      },
      "*.pdf": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
