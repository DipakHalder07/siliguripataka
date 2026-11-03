import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Siliguri Pataka",
    short_name: "Siliguri Pataka",
    description: "Diwali crackers, sweets and diyas, delivered only within Siliguri.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9ef",
    theme_color: "#4a0e14",
    icons: [{ src: "/assets/siliguri-emblem.png", sizes: "256x256", type: "image/png" }],
  };
}
