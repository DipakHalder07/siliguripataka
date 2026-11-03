import type { Product, Variant } from "../data/products";

// Sizes and their prices. Products store their own variant prices. A product without variants
// falls back to its base price, so the shop page and the server-side checkout always agree on
// what a size costs.

function legacyPrice(p: Pick<Product, "id" | "handle" | "price">, _name: string) {
  return p.price;
}

function legacyCompareAt(p: Pick<Product, "id" | "handle" | "price" | "originalPrice">, name: string) {
  const ratio = p.originalPrice > p.price ? p.originalPrice / p.price : 1.25;
  return Math.round(legacyPrice(p, name) * ratio);
}

/** The product's sizes with prices: stored variants, or derived ones for the starter catalog. */
export function productVariants(
  p: Pick<Product, "id" | "handle" | "price" | "originalPrice" | "weight" | "weights" | "variants">
): Variant[] {
  if (p.variants && p.variants.length > 0) return p.variants;
  const names = p.weights && p.weights.length > 0 ? p.weights : [p.weight || "Default"];
  return names.map((name) => ({
    name,
    price: legacyPrice(p, name),
    compareAtPrice: legacyCompareAt(p, name),
  }));
}

/** The size the customer picked, or the first size when it no longer exists. */
export function findVariant(
  p: Pick<Product, "id" | "handle" | "price" | "originalPrice" | "weight" | "weights" | "variants">,
  name: string | null | undefined
): Variant {
  const variants = productVariants(p);
  return variants.find((v) => v.name === name) || variants[0];
}
