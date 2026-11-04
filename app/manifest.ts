import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Siliguri Pataka",
    short_name: "Siliguri Pataka",
    description: "Diwali crackers, gift hampers and diyas, delivered only within Siliguri.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9ef",
    theme_color: "#4a0e14",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    lang: "en-IN",
    categories: ["shopping"],
  };
}
