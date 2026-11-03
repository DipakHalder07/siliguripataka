import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Keep private pages out of search engines, and point them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/", "/cart", "/checkout", "/order/", "/pay-review/", "/account/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
