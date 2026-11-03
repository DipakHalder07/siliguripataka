// One-time catalog update for the Siliguri Pataka database. Run with: npm run db:add-diwali
//  - adds the new sweets, decor and combo products that are in data/products.ts but not in the database
//  - on products already in the database, updates ONLY their pictures and sort order
//  - hides the 4 old gift boxes (replaced by the 3 mega packs) by setting them to "archived"
// It never changes titles, prices, stock or orders, and it is safe to run more than once.
import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "../data/products";
import { productRow } from "./productRow";

if (process.env.DATABASE_URL === undefined) process.loadEnvFile(".env");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
});

/** Crackers first, then sweets and decor, with sold-out items at the end of the list. */
function sortOrderFor(category: string, inStock: boolean) {
  if (!inStock) return 50;
  return ["sweets", "diyas-decor", "home-decor", "gift-hampers"].includes(category) ? 10 : 0;
}

async function main() {
  const existingIds = new Set((await prisma.product.findMany({ select: { id: true } })).map((p) => p.id));
  let added = 0;
  let updated = 0;

  for (const product of PRODUCTS) {
    if (existingIds.has(product.id)) {
      await prisma.product.update({
        where: { id: product.id },
        data: {
          image: product.image,
          secondaryImage: product.secondaryImage,
          galleryImages: product.galleryImages || [product.image],
          sortOrder: sortOrderFor(product.category, product.inStock),
        },
      });
      updated++;
    } else {
      await prisma.product.create({ data: productRow(product, sortOrderFor(product.category, product.inStock)) });
      added++;
    }
  }

  const archived = await prisma.product.updateMany({
    where: {
      id: {
        in: [
          "royal-diwali-mega-gift-box",
          "siliguri-super-bumper-family-hamper",
          "siliguri-maharaja-luxury-hamper",
          "emperor-sovereign-grand-show-box",
        ],
      },
    },
    data: { status: "archived" },
  });

  const names = await prisma.admin.updateMany({
    where: { name: "Teabox Admin" },
    data: { name: "Siliguri Pataka Admin" },
  });

  console.log(`Added ${added} new products. Updated pictures on ${updated}. Hid ${archived.count} old gift boxes. Renamed ${names.count} admin display names.`);
}

main()
  .catch((e) => {
    console.error("Catalog update failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
