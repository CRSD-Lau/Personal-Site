import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export keeps the core portfolio available without a server.
  output: "export",

  // Image optimization must be disabled for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
