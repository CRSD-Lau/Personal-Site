import type { MetadataRoute } from "next";
import { siteMetadata } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteMetadata.name,
    short_name: siteMetadata.name,
    description: siteMetadata.description,
    lang: "en-CA",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111e1a",
    theme_color: "#111b19",
    icons: [
      {
        src: "/icons/install-v2-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/install-v2-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/install-maskable-v2-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
