import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix workspace root detection on Windows with multiple lockfiles
  outputFileTracingRoot: path.join(__dirname),

  // Static HTML export — works on Netlify, GitHub Pages, Cloudflare Pages, etc.
  output: "export",

  // Image optimization must be disabled for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
