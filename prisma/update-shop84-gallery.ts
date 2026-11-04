import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { PRODUCTS, Product } from "../data/products";

if (process.env.DATABASE_URL === undefined) process.loadEnvFile(".env");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
});

const CATEGORY_BURST_MAP: Record<string, string[]> = {
  "aerial-shots": [
    "/assets/action-sky.webp",
    "/assets/photo-sky-burst.webp",
    "/assets/photo-sky-gold.webp",
    "/assets/photo-sky-red.webp",
  ],
  "flower-pots": [
    "/assets/action-anar.webp",
    "/assets/photo-anar-gold.webp",
    "/assets/photo-anar-tall.webp",
  ],
  "ground-chakkars": [
    "/assets/action-chakkar.webp",
    "/assets/photo-chakkar-spark.webp",
  ],
  "sparklers": [
    "/assets/action-sparkler.webp",
    "/assets/photo-sparkler-hand.webp",
    "/assets/photo-sparkler-kids.webp",
  ],
  "rockets": [
    "/assets/action-rockets.webp",
    "/assets/photo-sky-burst.webp",
    "/assets/photo-sky-red.webp",
  ],
  "sound-crackers": [
    "/assets/action-sound.webp",
  ],
  "kids-special": [
    "/assets/action-sound.webp",
    "/assets/photo-sparkler-kids.webp",
  ],
};

async function main() {
  console.log("Updating galleryImages and secondaryImage for Shop 84 & Paper Short products...");

  // Update in-memory products array
  const updatedProducts: Product[] = PRODUCTS.map((product) => {
    if (product.vendor === "Shop 84" || product.id === "papershort-10rs") {
      const boxImages = (product.galleryImages || [product.image]).filter(
        (img) => img.includes("/assets/shop-84/") || img.includes("product-papershot")
      );
      const cleanBoxImages = boxImages.length > 0 ? boxImages : [product.image];
      const burstImages = CATEGORY_BURST_MAP[product.category] || ["/assets/action-sky.webp"];
      const newGallery = [...cleanBoxImages, ...burstImages];
      const newSecondary = burstImages[0];

      return {
        ...product,
        secondaryImage: newSecondary,
        galleryImages: newGallery,
      };
    }
    return product;
  });

  // Re-serialize data/products.ts
  const productsFilePath = path.join(__dirname, "../data/products.ts");
  const originalFileContent = fs.readFileSync(productsFilePath, "utf8");

  const headerEnd = originalFileContent.indexOf("export const PRODUCTS: Product[] = [");
  const footerStart = originalFileContent.indexOf("export const COLLECTIONS = [");

  if (headerEnd === -1 || footerStart === -1) {
    throw new Error("Could not locate PRODUCTS array bounds in data/products.ts");
  }

  const header = originalFileContent.slice(0, headerEnd + "export const PRODUCTS: Product[] = [\n".length);
  const footer = originalFileContent.slice(footerStart);

  const serializedProducts = updatedProducts
    .map((p) => "  " + JSON.stringify(p, null, 2).replace(/\n/g, "\n  "))
    .join(",\n");

  const newContent = `${header}${serializedProducts}\n];\n\n${footer}`;
  fs.writeFileSync(productsFilePath, newContent, "utf8");
  console.log("Successfully updated data/products.ts!");

  // Update database prisma.product
  let dbUpdated = 0;
  for (const product of updatedProducts) {
    if (product.vendor === "Shop 84" || product.id === "papershort-10rs") {
      await prisma.product.update({
        where: { id: product.id },
        data: {
          secondaryImage: product.secondaryImage,
          galleryImages: product.galleryImages,
        },
      });
      dbUpdated++;
    }
  }

  console.log(`Successfully updated ${dbUpdated} products in Neon PostgreSQL database!`);
}

main()
  .catch((e) => {
    console.error("Update failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
