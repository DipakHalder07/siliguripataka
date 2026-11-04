import type { MetadataRoute } from "next";
import { COLLECTIONS } from "@/data/products";
import { POSTS } from "@/lib/blog";
import { getStoreProducts } from "@/lib/catalog";
import { absoluteUrl, DEFAULT_IMAGE, SITE_URL } from "@/lib/seo";

// Every public page, so search engines can find the whole shop. New products appear automatically.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getStoreProducts();
  const page = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly") => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  });
  return [
    { ...page("", 1, "daily"), images: [absoluteUrl(DEFAULT_IMAGE)] },
    ...COLLECTIONS.map((c) => page(`/collections/${c.id}`, 0.9, "daily")),
    ...products.map((p) => ({
      ...page(`/products/${p.handle || p.id}`, 0.8, "daily"),
      images: Array.from(new Set([p.image, ...(p.galleryImages || [])])).map(absoluteUrl),
      ...(p.updatedAt ? { lastModified: p.updatedAt } : {}),
    })),
    page("/pages/cracker-price-list-siliguri", 0.9, "daily"),
    page("/delivery-areas", 0.7, "weekly"),
    page("/pages/why-siliguri-pataka", 0.6, "monthly"),
    page("/pages/corporate-gifting-2026", 0.7, "weekly"),
    page("/blog", 0.6, "weekly"),
    ...POSTS.map((p) => ({ ...page(`/blog/${p.slug}`, 0.7, "monthly"), lastModified: p.date, images: [absoluteUrl(p.image)] })),
    page("/shipping-returns", 0.5, "monthly"),
    page("/refund-policy", 0.4, "monthly"),
    page("/image-credits", 0.1, "monthly"),
    page("/contact", 0.5, "monthly"),
    page("/terms", 0.2, "monthly"),
    page("/privacy", 0.2, "monthly"),
  ];
}
