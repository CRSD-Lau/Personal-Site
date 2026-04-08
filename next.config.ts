import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix workspace root detection on Windows with multiple lockfiles
  outputFileTracingRoot: path.join(__dirname),

  // Enable static export for Vercel (optional, remove if using SSR features)
  // output: 'export',

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
