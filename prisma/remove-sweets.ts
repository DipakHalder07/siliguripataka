// One-time catalog update: the shop no longer sells mithai or sweets. Run with: npm run db:remove-sweets
//  - hides every sweets product and the two hampers built around mithai ("archived": nothing is deleted,
//    and past orders keep their details)
//  - adds the Pataka + Diya hamper, and rewrites the wording of the hampers that mentioned sweets
// It never changes prices or stock on existing products, and it is safe to run more than once.
import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "../data/products";
import { productRow } from "./productRow";

if (process.env.DATABASE_URL === undefined) process.loadEnvFile(".env");

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL,
});

const REWORDED = ["festive-sweets-diya-gift-hamper", "lakshmi-puja-gift-hamper", "family-diwali-gift-hamper"];

async function main() {
  const hidden = await prisma.product.updateMany({
    where: {
      OR: [{ category: "sweets" }, { id: { in: ["premium-mithai-gift-box", "pataka-mithai-diwali-combo"] } }],
      status: { not: "archived" },
    },
    data: { status: "archived" },
  });

  const hamper = PRODUCTS.find((p) => p.id === "pataka-diya-diwali-hamper");
  if (!hamper) throw new Error("The new hamper is missing from data/products.ts");
  const exists = await prisma.product.findUnique({ where: { id: hamper.id }, select: { id: true } });
  if (!exists) await prisma.product.create({ data: productRow(hamper, 10) });

  let reworded = 0;
  for (const id of REWORDED) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) throw new Error(`${id} is missing from data/products.ts`);
    const { count } = await prisma.product.updateMany({
      where: { id },
      data: {
        handle: product.handle,
        title: product.title,
        subtitle: product.subtitle,
        description: product.description,
        tags: product.tags || [],
      },
    });
    reworded += count;
  }

  // The main admin login is now admin@siliguripataka.com; remove the old brand's login.
  const oldLogin = await prisma.admin.deleteMany({ where: { email: "admin@teabox.com" } });
  await prisma.adminLoginAttempt.deleteMany({ where: { email: "admin@teabox.com" } });
  console.log(`Removed ${oldLogin.count} old admin login.`);

  console.log(`Hid ${hidden.count} products. ${exists ? "New hamper was already there." : "Added the new hamper."} Reworded ${reworded} hampers.`);
}

main()
  .catch((e) => {
    console.error("Catalog update failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
