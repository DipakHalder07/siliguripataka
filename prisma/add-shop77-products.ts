import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

export const SHOP_77_PRODUCTS = [
  {
    id: "deluxe-cracking-chain-sound-ladi",
    handle: "deluxe-cracking-chain-sound-ladi",
    title: "Classic Deluxe Sivakasi Cracking Chain Sound Ladi",
    subtitle: "Rapid Cracking Garland Sound Chain · Fiery Flashes & Loud Festive Bang",
    price: 50,
    originalPrice: 80,
    discount: 38,
    rating: 4.8,
    reviewsCount: 86,
    weight: "1 Single Chain",
    weights: ["1 Single Chain", "Full Box of 10 Chains"],
    image: "/assets/shop-77/chain-50rs-1pic-packed-450rs.webp",
    secondaryImage: "/assets/shop-77/chain-50rs-1pic-packed-450rs-part-2.webp",
    galleryImages: [
      "/assets/shop-77/chain-50rs-1pic-packed-450rs.webp",
      "/assets/shop-77/chain-50rs-1pic-packed-450rs-part-2.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    category: "sound-crackers",
    format: "Sound Ladi / Cracker Chain",
    region: "Sivakasi Quality",
    caffeine: "Rapid Cracking",
    inStock: true,
    description: "Traditional Sivakasi red paper cracking sound chain (ladi) delivering high-speed rhythmic pops, bright fiery flashes, and loud festive sound. Can be purchased individually or as a complete value box of 10 chains.",
    variants: [
      { sku: "S77-CHN-1", name: "1 Single Chain", price: 50, compareAtPrice: 80 },
      { sku: "S77-CHN-10", name: "Full Box of 10 Chains", price: 450, compareAtPrice: 750 }
    ],
    status: "active",
    sku: "S77-CHN-1",
    vendor: "Shop 77",
    tags: ["Shop 77", "Sound Crackers", "Ladi", "Cracker Chain", "Diwali Sound"],
    stockQuantity: 150,
    trackInventory: true
  },
  {
    id: "coronation-bee-cee-deluxe-chit-put",
    handle: "coronation-bee-cee-deluxe-chit-put",
    title: "Coronation Bee Cee Deluxe Chit Put Magic Pop-Pop Box",
    subtitle: "Child-Safe Instant Ground Snappers · No Matchstick or Fire Required",
    price: 200,
    originalPrice: 320,
    discount: 38,
    rating: 4.9,
    reviewsCount: 114,
    weight: "1 Mega Box",
    weights: ["1 Mega Box", "Pack of 2 Boxes"],
    image: "/assets/shop-77/coronation-chit-put-200rs.webp",
    secondaryImage: "/assets/burst/kids-fun-1.webp",
    galleryImages: [
      "/assets/shop-77/coronation-chit-put-200rs.webp",
      "/assets/burst/kids-fun-1.webp"
    ],
    category: "kids-special",
    format: "Pop-Pop Snappers",
    region: "Coronation Sivakasi",
    caffeine: "Child-Safe Snappers",
    inStock: true,
    description: "Coronation Bee Cee authentic Sivakasi Chit Put magic pop-pop snappers. Safe, fun crackling pellets that pop instantly on ground impact without any flame, fire, or lighter. 100% child-safe Diwali fun.",
    variants: [
      { sku: "S77-CP-200", name: "1 Mega Box", price: 200, compareAtPrice: 320 },
      { sku: "S77-CP-200-2", name: "Pack of 2 Boxes", price: 380, compareAtPrice: 640 }
    ],
    status: "active",
    sku: "S77-CP-200",
    vendor: "Shop 77",
    tags: ["Shop 77", "Kids Special", "Chit Put", "Pop Pop", "Coronation", "Safe Crackers"],
    stockQuantity: 120,
    trackInventory: true
  },
  {
    id: "puja-traders-festive-chut-put-box",
    handle: "puja-traders-festive-chut-put-box",
    title: "Puja Traders Special Festive Chut Put Snapper Pellets Box",
    subtitle: "Deluxe Crackling Pop-Pop Snappers · Instant Impact Pops for Family Fun",
    price: 170,
    originalPrice: 270,
    discount: 37,
    rating: 4.7,
    reviewsCount: 72,
    weight: "1 Box",
    weights: ["1 Box", "Pack of 2 Boxes"],
    image: "/assets/shop-77/puja-chut-put-170rs.webp",
    secondaryImage: "/assets/burst/kids-fun-1.webp",
    galleryImages: [
      "/assets/shop-77/puja-chut-put-170rs.webp",
      "/assets/burst/kids-fun-1.webp"
    ],
    category: "kids-special",
    format: "Pop-Pop Snappers",
    region: "Puja Traders Sivakasi",
    caffeine: "Pop-Pop Crackle",
    inStock: true,
    description: "Puja Traders Sivakasi festive Chut Put snappers. Simply drop, step, or toss gently onto pavement to enjoy crisp crackling pops. Completely smokeless and sparkless, ideal for young children and playful celebrations.",
    variants: [
      { sku: "S77-CP-170", name: "1 Box", price: 170, compareAtPrice: 270 },
      { sku: "S77-CP-170-2", name: "Pack of 2 Boxes", price: 320, compareAtPrice: 540 }
    ],
    status: "active",
    sku: "S77-CP-170",
    vendor: "Shop 77",
    tags: ["Shop 77", "Kids Special", "Chut Put", "Puja Traders", "Snappers"],
    stockQuantity: 120,
    trackInventory: true
  },
  {
    id: "kuil-deluxe-wonder-colour-tops",
    handle: "kuil-deluxe-wonder-colour-tops",
    title: "Kuil Fireworks Deluxe Wonder Colour Spinning Tops (Box of 10)",
    subtitle: "High-Speed Ground Gyroscope Spinners with Radiant Multi-Colour Halos",
    price: 350,
    originalPrice: 550,
    discount: 36,
    rating: 4.8,
    reviewsCount: 64,
    weight: "Pack of 10 Pcs",
    weights: ["Pack of 10 Pcs", "Pack of 20 Pcs"],
    image: "/assets/shop-77/kuil-deluxe-colour-tops-350rs.webp",
    secondaryImage: "/assets/shop-77/kuil-deluxe-colour-tops-350rs-part-2.webp",
    galleryImages: [
      "/assets/shop-77/kuil-deluxe-colour-tops-350rs.webp",
      "/assets/shop-77/kuil-deluxe-colour-tops-350rs-part-2.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    category: "ground-chakkars",
    format: "Ground Spinner / Tops",
    region: "Kuil Sivakasi",
    caffeine: "High-Speed Luminous Spin",
    inStock: true,
    description: "Kuil Fireworks Industries Thayilpatti Sivakasi deluxe Wonder Colour Spinning Tops. Upon ignition, spins vigorously like a gyroscope across the ground throwing intense rings of red, emerald green, and golden crackling sparks.",
    variants: [
      { sku: "S77-TOP-10", name: "Pack of 10 Pcs", price: 350, compareAtPrice: 550 },
      { sku: "S77-TOP-20", name: "Pack of 20 Pcs", price: 660, compareAtPrice: 1100 }
    ],
    status: "active",
    sku: "S77-TOP-10",
    vendor: "Shop 77",
    tags: ["Shop 77", "Ground Chakkars", "Kuil Fireworks", "Spinning Tops", "Chorki"],
    stockQuantity: 100,
    trackInventory: true
  },
  {
    id: "gokul-crystal-night-28-shots-cake",
    handle: "gokul-crystal-night-28-shots-cake",
    title: "Gokul Crystal Night 28 Shots Multi-Colour Aerial Cake",
    subtitle: "28 High Altitude Multi-Colour Aerial Bursts · Cascading Brocade Finale",
    price: 1000,
    originalPrice: 1800,
    discount: 44,
    rating: 4.9,
    reviewsCount: 142,
    weight: "1 Cake (28 Shots)",
    weights: ["1 Cake (28 Shots)", "Pack of 2 Cakes"],
    image: "/assets/shop-77/gokul-crystal-night-skyshort-1000rs.webp",
    secondaryImage: "/assets/burst/sky-burst-1.webp",
    galleryImages: [
      "/assets/shop-77/gokul-crystal-night-skyshort-1000rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    category: "aerial-shots",
    format: "Multi-Shot Cake",
    region: "Gokul Sivakasi",
    caffeine: "28 Sky Bursts",
    inStock: true,
    description: "Gokul Fireworks Sivakasi 28-shot Crystal Night multi-colour aerial repeater cake. Launches high into the night sky bursting into golden brocade waterfalls, emerald palms, and crackling crimson chrysanthemums with a grand multi-shot finale.",
    variants: [
      { sku: "S77-SKY-28", name: "1 Cake (28 Shots)", price: 1000, compareAtPrice: 1800 },
      { sku: "S77-SKY-28-2", name: "Pack of 2 Cakes", price: 1900, compareAtPrice: 3600 }
    ],
    status: "active",
    sku: "S77-SKY-28",
    vendor: "Shop 77",
    tags: ["Shop 77", "Aerial Shots", "Sky Shots", "Gokul Fireworks", "Crystal Night", "28 Shots"],
    stockQuantity: 80,
    trackInventory: true
  },
  {
    id: "sri-krishna-ping-pong-giant-shells",
    handle: "sri-krishna-ping-pong-giant-shells",
    title: "Sri Krishna Ping Pong Giant Aerial Shells (Pack of 2 Shells)",
    subtitle: "Mega High-Altitude Aerial Shells with Launch Sticks · Massive Golden Willow Palm",
    price: 1500,
    originalPrice: 2600,
    discount: 42,
    rating: 4.9,
    reviewsCount: 98,
    weight: "Pack of 2 Shells",
    weights: ["Pack of 2 Shells", "Pack of 4 Shells"],
    image: "/assets/shop-77/sri-krishna-ping-pong-skyshort-1500rs.webp",
    secondaryImage: "/assets/burst/sky-burst-1.webp",
    galleryImages: [
      "/assets/shop-77/sri-krishna-ping-pong-skyshort-1500rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    category: "aerial-shots",
    format: "Aerial Shell / Sky Shot",
    region: "Karthik Sivakasi",
    caffeine: "Giant Aerial Shells",
    inStock: true,
    description: "Karthik Fireworks / Sri Krishna brand Ping Pong 2-piece giant aerial shells with launch sticks. High-altitude professional shells that soar deep into the midnight sky and explode into massive cascading golden willows and vibrant ruby peonies.",
    variants: [
      { sku: "S77-PNG-2", name: "Pack of 2 Shells", price: 1500, compareAtPrice: 2600 },
      { sku: "S77-PNG-4", name: "Pack of 4 Shells", price: 2850, compareAtPrice: 5200 }
    ],
    status: "active",
    sku: "S77-PNG-2",
    vendor: "Shop 77",
    tags: ["Shop 77", "Aerial Shots", "Sky Shots", "Sri Krishna", "Karthik Fireworks", "Ping Pong"],
    stockQuantity: 60,
    trackInventory: true
  }
];

async function main() {
  console.log("1. Updating data/products.ts with Shop 77 products...");
  const productsFilePath = path.join(process.cwd(), "data/products.ts");
  let content = fs.readFileSync(productsFilePath, "utf8");

  // Read existing PRODUCTS from data/products.ts
  for (const prod of SHOP_77_PRODUCTS) {
    // If not already in data/products.ts, insert before the end of the PRODUCTS array
    if (!content.includes(`"id": "${prod.id}"`)) {
      const serialized = ",\n  " + JSON.stringify(prod, null, 2).replace(/\n/g, "\n  ");
      const insertIdx = content.indexOf("];\n\nexport const COLLECTIONS");
      if (insertIdx !== -1) {
        content = content.slice(0, insertIdx) + serialized + "\n" + content.slice(insertIdx);
      }
    }
  }
  fs.writeFileSync(productsFilePath, content, "utf8");
  console.log("   Successfully wrote Shop 77 products into data/products.ts");

  console.log("2. Upserting Shop 77 products into Neon PostgreSQL database...");
  for (const prod of SHOP_77_PRODUCTS) {
    await prisma.product.upsert({
      where: { id: prod.id },
      create: {
        id: prod.id,
        handle: prod.handle,
        title: prod.title,
        subtitle: prod.subtitle,
        description: prod.description,
        price: prod.price,
        originalPrice: prod.originalPrice,
        image: prod.image,
        secondaryImage: prod.secondaryImage,
        galleryImages: prod.galleryImages,
        category: prod.category,
        format: prod.format,
        estate: prod.region,
        caffeine: prod.caffeine,
        weights: prod.weights,
        variants: prod.variants,
        inStock: prod.inStock,
        status: prod.status,
        sku: prod.sku,
        vendor: prod.vendor,
        tags: prod.tags,
        stockQuantity: prod.stockQuantity,
        trackInventory: prod.trackInventory,
        rating: prod.rating,
        reviewsCount: prod.reviewsCount,
      },
      update: {
        title: prod.title,
        subtitle: prod.subtitle,
        description: prod.description,
        price: prod.price,
        originalPrice: prod.originalPrice,
        image: prod.image,
        secondaryImage: prod.secondaryImage,
        galleryImages: prod.galleryImages,
        category: prod.category,
        format: prod.format,
        estate: prod.region,
        caffeine: prod.caffeine,
        weights: prod.weights,
        variants: prod.variants,
        inStock: prod.inStock,
        status: prod.status,
        sku: prod.sku,
        vendor: prod.vendor,
        tags: prod.tags,
        stockQuantity: prod.stockQuantity,
        trackInventory: prod.trackInventory,
      }
    });
    console.log(`   Upserted: ${prod.title} (₹${prod.price}, ${prod.category})`);
  }

  const shop77Count = await prisma.product.count({ where: { vendor: "Shop 77" } });
  const totalCount = await prisma.product.count();
  console.log(`\nDone! Total products in DB: ${totalCount} (Shop 77 products: ${shop77Count})`);
}

main()
  .catch((e) => {
    console.error("Error applying Shop 77 products:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
