// Catalog update: remove all sweet and mithai products from the database. Run with: npm run db:remove-sweets
import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "../data/products";
import { productRow } from "./productRow";

if (process.env.DATABASE_URL === undefined) process.loadEnvFile(".env");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
});

const SWEET_IDS = [
  "assorted-diwali-mithai-box",
  "kaju-katli-box",
  "motichoor-laddu-box",
  "besan-laddu-box",
  "bengali-sandesh-box",
  "bengali-rosogolla-box",
  "kesar-pista-barfi-box",
  "kesar-peda-box",
  "gulab-jamun-box",
  "soan-papdi-festive-box",
  "pataka-mithai-diwali-combo",
  "premium-mithai-gift-box",
];

const REWORDED = [
  "pataka-diya-diwali-hamper",
  "festive-sweets-diya-gift-hamper",
  "lakshmi-puja-gift-hamper",
  "family-diwali-gift-hamper",
  "office-diwali-gift-hamper",
];

async function main() {
  console.log("Checking for orders referencing sweet products...");
  const orderItems = await prisma.orderItem.updateMany({
    where: { productId: { in: SWEET_IDS } },
    data: { productId: null },
  });
  console.log(`Detached productId on ${orderItems.count} past order items (details preserved).`);

  const deleted = await prisma.product.deleteMany({
    where: {
      OR: [{ category: "sweets" }, { id: { in: SWEET_IDS } }],
    },
  });
  console.log(`Deleted ${deleted.count} sweet/mithai products from PostgreSQL database.`);

  const hamper = PRODUCTS.find((p) => p.id === "pataka-diya-diwali-hamper");
  if (hamper) {
    const exists = await prisma.product.findUnique({ where: { id: hamper.id }, select: { id: true } });
    if (!exists) {
      await prisma.product.create({ data: productRow(hamper, 10) });
      console.log("Created Pataka + Diya hamper.");
    }
  }

  let reworded = 0;
  for (const id of REWORDED) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) continue;
    const { count } = await prisma.product.updateMany({
      where: { id },
      data: {
        handle: product.handle,
        title: product.title,
        subtitle: product.subtitle,
        description: product.description,
        tags: product.tags || [],
        galleryImages: product.galleryImages || [],
      },
    });
    reworded += count;
  }
  console.log(`Updated ${reworded} festive hampers with clean non-sweet metadata & gallery images.`);

  // Cleanup old admin accounts if any
  const oldLogin = await prisma.admin.deleteMany({ where: { email: "admin@teabox.com" } });
  await prisma.adminLoginAttempt.deleteMany({ where: { email: "admin@teabox.com" } });
  if (oldLogin.count > 0) console.log(`Removed ${oldLogin.count} old admin logins.`);

  const remainingSweets = await prisma.product.findMany({
    where: {
      OR: [
        { category: "sweets" },
        { id: { in: SWEET_IDS } },
        { title: { contains: "Mithai", mode: "insensitive" } },
        { title: { contains: "Sweet", mode: "insensitive" } },
      ],
    },
  });
  console.log(`Remaining sweet products in DB: ${remainingSweets.length}`);
}

main()
  .catch((e) => {
    console.error("Catalog update failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
