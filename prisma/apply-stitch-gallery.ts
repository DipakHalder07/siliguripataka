import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import { PRODUCTS, Product } from "../data/products";

if (process.env.DATABASE_URL === undefined) process.loadEnvFile(".env");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
});

// Category-specific Stitch-generated photorealistic action/burst images
// GUARANTEED: Sky shots have ONLY high-altitude night sky explosions, NEVER spinning chakkars!
const STITCH_BURST_MAP: Record<string, string[]> = {
  "aerial-shots": [
    "/assets/burst/sky-burst-1.webp",
    "/assets/burst/sky-burst-2.webp",
    "/assets/burst/sky-burst-3.webp",
  ],
  "flower-pots": [
    "/assets/burst/anar-fountain-1.webp",
    "/assets/burst/anar-fountain-2.webp",
  ],
  "ground-chakkars": [
    "/assets/burst/chakkar-spin-1.webp",
    "/assets/burst/chakkar-spin-2.webp",
  ],
  "sparklers": [
    "/assets/burst/sparkler-glow-1.webp",
    "/assets/burst/sparkler-glow-2.webp",
  ],
  "rockets": [
    "/assets/burst/rocket-launch-1.webp",
    "/assets/burst/sky-burst-1.webp",
  ],
  "sound-crackers": [
    "/assets/burst/sound-ladi-1.webp",
  ],
  "kids-special": [
    "/assets/burst/kids-fun-1.webp",
    "/assets/burst/sparkler-glow-1.webp",
  ],
};

async function main() {
  console.log("Applying Stitch action/burst images across all product galleries...");

  // Update in-memory products array
  const updatedProducts: Product[] = PRODUCTS.map((product) => {
    // We update Shop 84 products, stall-47 products, and starter products that need clean gallery images
    const bursts = STITCH_BURST_MAP[product.category] || ["/assets/burst/sky-burst-1.webp"];
    
    // Retain only genuine box packaging images from existing gallery
    const boxImages = (product.galleryImages || [product.image]).filter((img) => {
      // Exclude old generic action images so we don't duplicate or have wrong spinners
      return !img.startsWith("/assets/action-") && 
             !img.startsWith("/assets/photo-") && 
             !img.startsWith("/assets/burst/") &&
             !img.startsWith("/assets/ck-cake") &&
             !img.startsWith("/assets/ck-anar") &&
             !img.startsWith("/assets/ck-chakkar") &&
             !img.startsWith("/assets/ck-sparkler") &&
             !img.startsWith("/assets/ck-rockets") &&
             !img.startsWith("/assets/ck-ladi") &&
             !img.startsWith("/assets/ck-kids") &&
             !img.startsWith("/assets/siliguri-");
    });

    const cleanBoxImages = boxImages.length > 0 ? boxImages : [product.image];
    const newGallery = [...cleanBoxImages, ...bursts];
    const newSecondary = bursts[0];

    return {
      ...product,
      secondaryImage: newSecondary,
      galleryImages: newGallery,
    };
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
    await prisma.product.update({
      where: { id: product.id },
      data: {
        secondaryImage: product.secondaryImage,
        galleryImages: product.galleryImages,
      },
    });
    dbUpdated++;
  }

  console.log(`Successfully updated ${dbUpdated} products in Neon PostgreSQL database with Stitch imagery!`);
}

main()
  .catch((e) => {
    console.error("Update failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
