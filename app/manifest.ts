import type { MetadataRoute } from "next";
import { siteMetadata } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.name,
    short_name: siteMetadata.name,
    description: siteMetadata.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#101712",
    theme_color: "#0d4929",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
