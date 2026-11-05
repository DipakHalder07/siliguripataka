/** One size/option of a product with its own price (like a Shopify variant). */
export interface Variant {
  name: string; // e.g. "Pack of 10", "500G", "1 Deluxe Box"
  price: number;
  compareAtPrice?: number | null;
  sku?: string | null;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewsCount: number;
  weight: string;
  weights: string[];
  image: string;
  secondaryImage: string;
  galleryImages?: string[];
  category: string;
  format: string;
  region: string;
  caffeine: string;
  badge?: string;
  url?: string;
  inStock: boolean;
  // Managed in Admin → Products (database); missing on the built-in starter catalog below
  description?: string;
  variants?: Variant[];
  status?: "active" | "draft" | "archived";
  sku?: string;
  vendor?: string;
  tags?: string[];
  stockQuantity?: number;
  trackInventory?: boolean;
  updatedAt?: string; // when the product last changed, for the sitemap
}

export const PRODUCTS: Product[] = [
  {
    "id": "sky-king-30-aerial-shots",
    "handle": "sky-king-30-aerial-shots",
    "title": "Sky King 30 Multi-Color Aerial Starburst Shots",
    "subtitle": "30 High Altitude Sky Burst Repeater · 5 Vibrant Colors with Golden Brocade",
    "price": 1299,
    "originalPrice": 2200,
    "discount": 41,
    "rating": 4.9,
    "reviewsCount": 188,
    "weight": "1 Cake (30 Shots)",
    "weights": [
      "1 Cake (30 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/ck-cake-30.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/ck-cake-30.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude Colors",
    "inStock": true,
    "description": "Light up the Siliguri skyline with 30 consecutive high-altitude aerial shots that burst into mesmerizing red, emerald green, royal purple, and sparkling golden brocade crowns.",
    "variants": [
      {
        "sku": "SP-SKY-30",
        "name": "1 Cake (30 Shots)",
        "price": 1299,
        "compareAtPrice": 2200
      },
      {
        "sku": "SP-SKY-60",
        "name": "Pack of 2 Cakes",
        "price": 2399,
        "compareAtPrice": 4400
      }
    ],
    "status": "active",
    "sku": "SP-SKY-30",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Aerial Shots",
      "Sky Shots",
      "Night Celebration"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "deluxe-tri-color-flower-pots",
    "handle": "deluxe-tri-color-flower-pots",
    "title": "Deluxe Tri-Color Jumbo Flower Pots (10 Pcs Pack)",
    "subtitle": "Towering 15-Feet Glittering Fountain of Gold, Crimson & Silver Sparks",
    "price": 499,
    "originalPrice": 899,
    "discount": 44,
    "rating": 4.8,
    "reviewsCount": 215,
    "weight": "Pack of 10",
    "weights": [
      "Pack of 10",
      "Pack of 20 (Mega Savings)"
    ],
    "image": "/assets/ck-anar-tricolor.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/ck-anar-tricolor.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Anar / Flower Pot",
    "region": "Sivakasi Quality",
    "caffeine": "Low Smoke & High Sparks",
    "inStock": true,
    "description": "Traditional terracotta conical flower pots that produce an enchanting tri-color sparkling fountain up to 15 feet in height. Minimal smoke, certified green cracker formulation.",
    "variants": [
      {
        "sku": "SP-ANAR-10",
        "name": "Pack of 10",
        "price": 499,
        "compareAtPrice": 899
      },
      {
        "sku": "SP-ANAR-20",
        "name": "Pack of 20 (Mega Savings)",
        "price": 899,
        "compareAtPrice": 1798
      }
    ],
    "status": "active",
    "sku": "SP-ANAR-10",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Anar",
      "Flower Pots",
      "Green Crackers",
      "Family Favorite"
    ],
    "stockQuantity": 200,
    "trackInventory": true
  },
  {
    "id": "royal-electric-sparklers-30cm",
    "handle": "royal-electric-sparklers-30cm",
    "title": "Royal Electric Sparklers 30cm (Pack of 50 Sticks)",
    "subtitle": "Dazzling Golden Sparks · Long 90-Second Burn Duration · 100% Green Phuljhadi",
    "price": 349,
    "originalPrice": 599,
    "discount": 42,
    "rating": 4.9,
    "reviewsCount": 412,
    "weight": "Pack of 50 Sticks",
    "weights": [
      "Pack of 50 Sticks",
      "Mega Pack of 100 Sticks"
    ],
    "image": "/assets/ck-sparkler-gold.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/ck-sparkler-gold.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "Electric Sparklers",
    "region": "Sivakasi Quality",
    "caffeine": "Zero Residue Sparks",
    "inStock": true,
    "description": "Pure festive joy in your hands! Extra-long 30cm premium electric sparklers with crackling golden stars that burn smoothly for over 90 seconds without hot ash dropout.",
    "variants": [
      {
        "sku": "SP-SPK-50",
        "name": "Pack of 50 Sticks",
        "price": 349,
        "compareAtPrice": 599
      },
      {
        "sku": "SP-SPK-100",
        "name": "Mega Pack of 100 Sticks",
        "price": 629,
        "compareAtPrice": 1198
      }
    ],
    "status": "active",
    "sku": "SP-SPK-50",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Sparklers",
      "Phuljhadi",
      "Kids Safe",
      "Diwali Essential"
    ],
    "stockQuantity": 300,
    "trackInventory": true
  },
  {
    "id": "deluxe-special-spinning-chakkar",
    "handle": "deluxe-special-spinning-chakkar",
    "title": "Deluxe Special Whirling Ground Chakkar (Pack of 20)",
    "subtitle": "High-Speed Spinning Galaxy Rings · Vibrant Emerald Green & Golden Sparks",
    "price": 399,
    "originalPrice": 699,
    "discount": 43,
    "rating": 4.8,
    "reviewsCount": 195,
    "weight": "Pack of 20 Pcs",
    "weights": [
      "Pack of 20 Pcs",
      "Pack of 40 Pcs"
    ],
    "image": "/assets/ck-chakkar.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/ck-saucer.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Continuous Rotation",
    "inStock": true,
    "description": "Watch in wonder as these perfectly balanced ground spinners whiz across the floor, creating continuous luminous halos of emerald green fire and golden sparkle rings.",
    "variants": [
      {
        "sku": "SP-CHK-20",
        "name": "Pack of 20 Pcs",
        "price": 399,
        "compareAtPrice": 699
      },
      {
        "sku": "SP-CHK-40",
        "name": "Pack of 40 Pcs",
        "price": 749,
        "compareAtPrice": 1398
      }
    ],
    "status": "active",
    "sku": "SP-CHK-20",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Chakkar",
      "Ground Spinner",
      "Diwali Joy"
    ],
    "stockQuantity": 180,
    "trackInventory": true
  },
  {
    "id": "kids-fun-fiesta-green-pack",
    "handle": "kids-fun-fiesta-green-pack",
    "title": "Kids Fun Fiesta Safe Green Crackers Box (25 Items)",
    "subtitle": "100% Child-Friendly · Color Smoke, Pop Pops, Whistling Sparklers & Magic Snakes",
    "price": 899,
    "originalPrice": 1499,
    "discount": 40,
    "rating": 5,
    "reviewsCount": 260,
    "weight": "1 Kids Hamper",
    "weights": [
      "1 Kids Hamper",
      "Pack of 2 Kids Hampers"
    ],
    "image": "/assets/ck-kids-box.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/ck-smoke-cans.webp",
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Child-Safe Hamper",
    "region": "Certified Green",
    "caffeine": "No Gunpowder / Child Safe",
    "inStock": true,
    "description": "Specially curated for children with safety first! Includes harmless snapping pop-pops, musical whistling sparklers, non-toxic rainbow color smoke cartridges, and magic snake tablets.",
    "variants": [
      {
        "sku": "SP-KIDS-01",
        "name": "1 Kids Hamper",
        "price": 899,
        "compareAtPrice": 1499
      },
      {
        "sku": "SP-KIDS-02",
        "name": "Pack of 2 Kids Hampers",
        "price": 1699,
        "compareAtPrice": 2998
      }
    ],
    "status": "active",
    "sku": "SP-KIDS-01",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Kids",
      "Eco Friendly",
      "Pop Pops",
      "Smoke Fountains"
    ],
    "stockQuantity": 140,
    "trackInventory": true
  },
  {
    "id": "mega-1000-wala-red-ladi",
    "handle": "mega-1000-wala-red-ladi",
    "title": "1000 Wala Mega Red Garland Crackers (Traditional Ladi)",
    "subtitle": "Rhythmic Celebratory Sound · Traditional Sivakasi Red Paper Crackers",
    "price": 749,
    "originalPrice": 1299,
    "discount": 42,
    "rating": 4.7,
    "reviewsCount": 175,
    "weight": "1 Roll (1000 Wala)",
    "weights": [
      "1 Roll (1000 Wala)",
      "2 Rolls (Save ₹200)"
    ],
    "image": "/assets/ck-ladi-1000.webp",
    "secondaryImage": "/assets/burst/sound-ladi-1.webp",
    "galleryImages": [
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Garland Ladi",
    "region": "Sivakasi Quality",
    "caffeine": "Crisp Festive Sound",
    "inStock": true,
    "description": "The heartbeat of Diwali night! Genuine Sivakasi rolled red paper garland cracker with unbroken, rhythmic bursts and a grand celebratory finale report.",
    "variants": [
      {
        "sku": "SP-LADI-1000",
        "name": "1 Roll (1000 Wala)",
        "price": 749,
        "compareAtPrice": 1299
      },
      {
        "sku": "SP-LADI-2000",
        "name": "2 Rolls (Save ₹200)",
        "price": 1299,
        "compareAtPrice": 2598
      }
    ],
    "status": "active",
    "sku": "SP-LADI-1000",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Ladi",
      "Sound Crackers",
      "Traditional"
    ],
    "stockQuantity": 90,
    "trackInventory": true
  },
  {
    "id": "super-sonic-whistling-sky-rockets",
    "handle": "super-sonic-whistling-sky-rockets",
    "title": "Super Sonic Whistling Sky Rockets (Pack of 10)",
    "subtitle": "High Altitude Whistling Ascent with Brilliant Multi-Color Burst",
    "price": 599,
    "originalPrice": 999,
    "discount": 40,
    "rating": 4.8,
    "reviewsCount": 154,
    "weight": "Pack of 10 Rockets",
    "weights": [
      "Pack of 10 Rockets",
      "Pack of 20 Rockets"
    ],
    "image": "/assets/ck-rockets.webp",
    "secondaryImage": "/assets/burst/rocket-launch-1.webp",
    "galleryImages": [
      "/assets/ck-rockets.webp",
      "/assets/burst/rocket-launch-1.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "rockets",
    "format": "Whistling Rockets",
    "region": "Sivakasi Quality",
    "caffeine": "High Velocity Flight",
    "inStock": true,
    "description": "Ignite and watch them zoom hundreds of feet into the night sky with an exhilarating whistle before concluding in a dazzling glitter explosion.",
    "variants": [
      {
        "sku": "SP-RCK-10",
        "name": "Pack of 10 Rockets",
        "price": 599,
        "compareAtPrice": 999
      },
      {
        "sku": "SP-RCK-20",
        "name": "Pack of 20 Rockets",
        "price": 1099,
        "compareAtPrice": 1998
      }
    ],
    "status": "active",
    "sku": "SP-RCK-10",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Rockets",
      "Aerial",
      "Whistling"
    ],
    "stockQuantity": 110,
    "trackInventory": true
  },
  {
    "id": "imperial-120-shots-mega-cake",
    "handle": "imperial-120-shots-mega-cake",
    "title": "Imperial 120 Shots Grand Finale Aerial Night Cake",
    "subtitle": "Professional Grade 2-Minute Fireworks Show · Brocade Crown, Strobes & Crackling Palm",
    "price": 3999,
    "originalPrice": 6999,
    "discount": 43,
    "rating": 4.9,
    "reviewsCount": 96,
    "weight": "1 Cake (120 Shots)",
    "weights": [
      "1 Cake (120 Shots)"
    ],
    "image": "/assets/ck-cake-120.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/ck-cake-120.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Grand Finale Cake",
    "region": "Sivakasi Quality",
    "caffeine": "Non-Stop Sky Display",
    "inStock": true,
    "description": "Turn your rooftop or terrace into a world-class fireworks spectacle. 120 rapid-fire synchronized shots lighting up the night sky with cascading brocade crowns and glittering crackle effects.",
    "variants": [
      {
        "sku": "SP-FINALE-120",
        "name": "1 Cake (120 Shots)",
        "price": 3999,
        "compareAtPrice": 6999
      }
    ],
    "status": "active",
    "sku": "SP-FINALE-120",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Grand Finale",
      "120 Shots",
      "Skyline Show"
    ],
    "stockQuantity": 40,
    "trackInventory": true
  },
  {
    "id": "rainbow-color-smoke-fountains",
    "handle": "rainbow-color-smoke-fountains",
    "title": "Rainbow Color Smoke Fountains (Set of 5 Colors)",
    "subtitle": "Vivid Day & Evening Photography Fountains · Blue, Red, Yellow, Green & Purple",
    "price": 299,
    "originalPrice": 499,
    "discount": 40,
    "rating": 4.7,
    "reviewsCount": 164,
    "weight": "Pack of 5 Fountains",
    "weights": [
      "Pack of 5 Fountains",
      "Pack of 10 Fountains"
    ],
    "image": "/assets/ck-smoke-tubes.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/ck-smoke-tubes.webp",
      "/assets/ck-smoke-cans.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Day Fountains",
    "region": "Eco Friendly",
    "caffeine": "Zero Sound / Pure Color",
    "inStock": true,
    "description": "Ideal for daytime festivities, Rangoli backgrounds, and social media reels! Produces dense, vivid clouds of non-toxic colored smoke for up to 60 seconds each.",
    "variants": [
      {
        "sku": "SP-SMK-05",
        "name": "Pack of 5 Fountains",
        "price": 299,
        "compareAtPrice": 499
      },
      {
        "sku": "SP-SMK-10",
        "name": "Pack of 10 Fountains",
        "price": 549,
        "compareAtPrice": 998
      }
    ],
    "status": "active",
    "sku": "SP-SMK-05",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Smoke Fountain",
      "Photography",
      "Kids Safe"
    ],
    "stockQuantity": 220,
    "trackInventory": true
  },
  {
    "id": "special-deluxe-golden-anar-koti",
    "handle": "special-deluxe-golden-anar-koti",
    "title": "Special Golden Anar Koti Extra Large (Pack of 5)",
    "subtitle": "Giant 20-Feet Towering Sparkle Height · Traditional Terracotta Base",
    "price": 649,
    "originalPrice": 1099,
    "discount": 41,
    "rating": 4.9,
    "reviewsCount": 182,
    "weight": "Pack of 5 Jumbo Anars",
    "weights": [
      "Pack of 5 Jumbo Anars",
      "Pack of 10 Jumbo Anars"
    ],
    "image": "/assets/ck-anar-jumbo.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/ck-anar-jumbo.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Jumbo Anar",
    "region": "Sivakasi Quality",
    "caffeine": "Giant Shower",
    "inStock": true,
    "description": "Extra large heavyweight flower pots engineered to shoot a massive, dense vertical shower of golden sparks soaring up to 20 feet high with zero crackle danger.",
    "variants": [
      {
        "sku": "SP-ANAR-XL",
        "name": "Pack of 5 Jumbo Anars",
        "price": 649,
        "compareAtPrice": 1099
      },
      {
        "sku": "SP-ANAR-XXL",
        "name": "Pack of 10 Jumbo Anars",
        "price": 1199,
        "compareAtPrice": 2198
      }
    ],
    "status": "active",
    "sku": "SP-ANAR-XL",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Jumbo Anar",
      "Flower Pots",
      "Festive"
    ],
    "stockQuantity": 150,
    "trackInventory": true
  },
  {
    "id": "mega-starter-pack",
    "handle": "mega-starter-pack",
    "title": "Mega Starter Pack",
    "subtitle": "50 Sparklers, 10 Flower Pots, 20 Chakkars, 10 Rockets & 1 Sky Cake",
    "price": 2499,
    "originalPrice": 3145,
    "discount": 21,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/mega-starter.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/mega-starter.webp",
      "/assets/mega-starter-contents.webp",
      "/assets/mega-starter-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For a Small Family",
    "inStock": true,
    "description": "A good mix for one family evening: 50 sparklers, 10 flower pots, 20 ground chakkars, 10 whistling rockets and a 30-shot sky cake for the finish. Costs ₹646 less than buying the same items separately. Delivered the same day or the next day within Siliguri, with 1 lighter free.",
    "variants": [
      {
        "sku": "SP-MEGA-2499",
        "name": "1 Pack",
        "price": 2499,
        "compareAtPrice": 3145
      }
    ],
    "status": "active",
    "sku": "SP-MEGA-2499",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Mega Pack",
      "Crackers",
      "Family Pack"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "mega-family-pack",
    "handle": "mega-family-pack",
    "title": "Mega Family Pack",
    "subtitle": "100 Sparklers, 25 Anars, 40 Chakkars, 20 Rockets, 2 Sky Cakes & Kids Box",
    "price": 4999,
    "originalPrice": 7323,
    "discount": 32,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/mega-family.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/mega-family.webp",
      "/assets/mega-family-contents.webp",
      "/assets/mega-family-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For the Whole Family",
    "inStock": true,
    "description": "Our best value pack for the whole family: 100 sparklers, 20 flower pots, 5 jumbo anars, 40 ground chakkars, 20 whistling rockets, two 30-shot sky cakes and a kids box. Costs ₹2,324 less than buying the same items separately. Delivered the same day or the next day within Siliguri, with 1 lighter free.",
    "variants": [
      {
        "sku": "SP-MEGA-4999",
        "name": "1 Pack",
        "price": 4999,
        "compareAtPrice": 7323
      }
    ],
    "status": "active",
    "sku": "SP-MEGA-4999",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Mega Pack",
      "Crackers",
      "Family Pack",
      "Best Value"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "mega-grand-show-pack",
    "handle": "mega-grand-show-pack",
    "title": "Mega Grand Show Pack",
    "subtitle": "200 Sparklers, 30 Anars, 40 Rockets, 2 Sky Cakes & a 120-Shot Finale",
    "price": 9999,
    "originalPrice": 13600,
    "discount": 26,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/mega-grand.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/mega-grand.webp",
      "/assets/mega-grand-contents.webp",
      "/assets/mega-grand-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For a Grand Show",
    "inStock": true,
    "description": "A proper terrace or ground show: 200 sparklers, 20 flower pots, 10 jumbo anars, 40 ground chakkars, 40 whistling rockets, two 30-shot sky cakes, a kids box and a 120-shot grand finale cake. Costs ₹3,601 less than buying the same items separately. Delivered the same day or the next day within Siliguri, with 1 lighter free.",
    "variants": [
      {
        "sku": "SP-MEGA-9999",
        "name": "1 Pack",
        "price": 9999,
        "compareAtPrice": 13600
      }
    ],
    "status": "active",
    "sku": "SP-MEGA-9999",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Mega Pack",
      "Crackers",
      "Grand Show",
      "Sky Shots"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "pataka-diya-diwali-hamper",
    "handle": "pataka-diya-diwali-hamper",
    "title": "Pataka + Diya Diwali Hamper",
    "subtitle": "Assorted Crackers Box & 12 Clay Diyas",
    "price": 1849,
    "originalPrice": 1849,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Combo",
    "weights": [
      "1 Combo"
    ],
    "image": "/assets/combo-pataka-diyas.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/combo-pataka-diyas.webp",
      "/assets/decor-clay-diyas.webp",
      "/assets/hamper-puja.webp",
      "/assets/combo-pataka-mithai.webp",
      "/assets/decor-diya-steps.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Siliguri Special",
    "caffeine": "Crackers + Diyas",
    "inStock": true,
    "description": "Everything for one Diwali evening in one order: an assorted crackers box and 12 clay diyas. Delivered together within Siliguri, with a free lighter.",
    "variants": [
      {
        "sku": "SP-COMBO-DIYA",
        "name": "1 Combo",
        "price": 1849,
        "compareAtPrice": 1849
      }
    ],
    "status": "active",
    "sku": "SP-COMBO-DIYA",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Hamper",
      "Gift",
      "Crackers",
      "Diyas"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "festive-sweets-diya-gift-hamper",
    "handle": "festive-diya-gift-hamper",
    "title": "Festive Diya Gift Hamper",
    "subtitle": "Diyas, Flowers & Festive Touches in a Gift Box",
    "price": 1499,
    "originalPrice": 1799,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Hamper",
    "weights": [
      "1 Hamper"
    ],
    "image": "/assets/hamper-festive.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/combo-pataka-mithai.webp",
      "/assets/hamper-festive.webp",
      "/assets/sweets-kaju-katli.webp",
      "/assets/sweets-assorted-box.webp",
      "/assets/hamper-family.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Ready to Gift",
    "inStock": true,
    "description": "A ready-to-gift hamper with diyas and festive touches in a box, finished with flowers. A warm gift for family and friends in Siliguri.",
    "variants": [
      {
        "sku": "SP-HAMP-FEST",
        "name": "1 Hamper",
        "price": 1499,
        "compareAtPrice": 1799
      }
    ],
    "status": "active",
    "sku": "SP-HAMP-FEST",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Gift Hamper",
      "Diwali Gift",
      "Diyas"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "lakshmi-puja-gift-hamper",
    "handle": "lakshmi-puja-gift-hamper",
    "title": "Lakshmi Puja Gift Hamper",
    "subtitle": "Puja Essentials in One Box",
    "price": 1199,
    "originalPrice": 1399,
    "discount": 14,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Hamper",
    "weights": [
      "1 Hamper"
    ],
    "image": "/assets/hamper-puja.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hamper-puja.webp",
      "/assets/decor-puja-set.webp",
      "/assets/decor-puja-thali.webp",
      "/assets/decor-clay-diyas.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "For Puja",
    "inStock": true,
    "description": "A thoughtful hamper with puja essentials, for elders and for families preparing for Lakshmi Puja or Kali Puja.",
    "variants": [
      {
        "sku": "SP-HAMP-PUJA",
        "name": "1 Hamper",
        "price": 1199,
        "compareAtPrice": 1399
      }
    ],
    "status": "active",
    "sku": "SP-HAMP-PUJA",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Gift Hamper",
      "Lakshmi Puja",
      "Kali Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "family-diwali-gift-hamper",
    "handle": "family-diwali-gift-hamper",
    "title": "Family Diwali Gift Hamper",
    "subtitle": "Diyas, Decor & Festive Gifts for the Whole Family",
    "price": 2499,
    "originalPrice": 2999,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Hamper",
    "weights": [
      "1 Hamper"
    ],
    "image": "/assets/hamper-family.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hamper-family.webp",
      "/assets/hamper-festive.webp",
      "/assets/combo-pataka-mithai.webp",
      "/assets/mega-starter-contents.webp",
      "/assets/sweets-assorted-box.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "For the Whole Family",
    "inStock": true,
    "description": "A generous hamper for visiting family or sending to someone special this Diwali, with enough for the whole house to share.",
    "variants": [
      {
        "sku": "SP-HAMP-FAM",
        "name": "1 Hamper",
        "price": 2499,
        "compareAtPrice": 2999
      }
    ],
    "status": "active",
    "sku": "SP-HAMP-FAM",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Gift Hamper",
      "Family Gift",
      "Diwali Gift"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "office-diwali-gift-hamper",
    "handle": "office-diwali-gift-hamper",
    "title": "Office Diwali Gift Hamper",
    "subtitle": "Neat Gift Boxes for Staff & Clients",
    "price": 4199,
    "originalPrice": 4999,
    "discount": 16,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "Pack of 5",
    "weights": [
      "Pack of 5",
      "Pack of 10"
    ],
    "image": "/assets/hamper-office.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hamper-office.webp",
      "/assets/hamper-festive.webp",
      "/assets/sweets-gift-box.webp",
      "/assets/sweets-kaju-katli.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Staff & Clients",
    "inStock": true,
    "description": "Simple, neat Diwali gift boxes for staff and clients in Siliguri. Choose a pack, or ask us about bigger bulk orders.",
    "variants": [
      {
        "sku": "SP-HAMP-OFF5",
        "name": "Pack of 5",
        "price": 4199,
        "compareAtPrice": 4999
      },
      {
        "sku": "SP-HAMP-OFF10",
        "name": "Pack of 10",
        "price": 7999,
        "compareAtPrice": 9999
      }
    ],
    "status": "active",
    "sku": "SP-HAMP-OFF5",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Gift Hamper",
      "Corporate Gift",
      "Bulk Gifting"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "hand-painted-clay-diyas",
    "handle": "hand-painted-clay-diyas",
    "title": "Clay Diyas",
    "subtitle": "Traditional Terracotta Diyas · Reusable",
    "price": 149,
    "originalPrice": 199,
    "discount": 25,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "Pack of 12",
    "weights": [
      "Pack of 12",
      "Pack of 24"
    ],
    "image": "/assets/decor-clay-diyas.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-clay-diyas.webp",
      "/assets/decor-diya-steps.webp",
      "/assets/decor-diya-ring.webp",
      "/assets/hd-floating-diyas.webp",
      "/assets/blog-diyas.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Clay Diyas",
    "region": "Festive Decor",
    "caffeine": "Traditional",
    "inStock": true,
    "description": "Traditional terracotta diyas for your balcony, doorway and puja room. Add ghee or oil and a cotton wick.",
    "variants": [
      {
        "sku": "SP-DIYA-12",
        "name": "Pack of 12",
        "price": 149,
        "compareAtPrice": 199
      },
      {
        "sku": "SP-DIYA-24",
        "name": "Pack of 24",
        "price": 279,
        "compareAtPrice": 398
      }
    ],
    "status": "active",
    "sku": "SP-DIYA-12",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Diya",
      "Clay Diya",
      "Diwali Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "festive-diwali-candle-set",
    "handle": "festive-diwali-candle-set",
    "title": "Festive Diwali Candle Set",
    "subtitle": "Candles & Tea Lights for Your Home",
    "price": 249,
    "originalPrice": 329,
    "discount": 24,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Set",
    "weights": [
      "1 Set",
      "2 Sets"
    ],
    "image": "/assets/decor-candles.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-candles.webp",
      "/assets/decor-diya-ring.webp",
      "/assets/hd-glass-tealights.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Candles",
    "region": "Festive Decor",
    "caffeine": "Warm Glow",
    "inStock": true,
    "description": "Candles and tea lights to place among flowers and rangoli, for a warm glow on Diwali night.",
    "variants": [
      {
        "sku": "SP-CANDLE-1",
        "name": "1 Set",
        "price": 249,
        "compareAtPrice": 329
      },
      {
        "sku": "SP-CANDLE-2",
        "name": "2 Sets",
        "price": 469,
        "compareAtPrice": 658
      }
    ],
    "status": "active",
    "sku": "SP-CANDLE-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Candles",
      "Diwali Lights",
      "Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "rangoli-colour-set",
    "handle": "rangoli-colour-set",
    "title": "Rangoli Colour Set",
    "subtitle": "Bright Rangoli Colours · Easy to Use at Home",
    "price": 199,
    "originalPrice": 249,
    "discount": 20,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Set",
    "weights": [
      "1 Set",
      "2 Sets"
    ],
    "image": "/assets/decor-rangoli-set.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-rangoli-set.webp",
      "/assets/decor-rangoli-design.webp",
      "/assets/decor-rangoli-pattern.webp",
      "/assets/blog-rangoli.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Rangoli",
    "region": "Festive Decor",
    "caffeine": "Bright Colours",
    "inStock": true,
    "description": "Bright rangoli colours to decorate your doorstep for Diwali and Kali Puja.",
    "variants": [
      {
        "sku": "SP-RANG-1",
        "name": "1 Set",
        "price": 199,
        "compareAtPrice": 249
      },
      {
        "sku": "SP-RANG-2",
        "name": "2 Sets",
        "price": 379,
        "compareAtPrice": 498
      }
    ],
    "status": "active",
    "sku": "SP-RANG-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Rangoli",
      "Rangoli Colours",
      "Diwali Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "rangoli-design-kit",
    "handle": "rangoli-design-kit",
    "title": "Rangoli Design Kit",
    "subtitle": "Colours & Stencils for Easy Patterns",
    "price": 349,
    "originalPrice": 429,
    "discount": 19,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Kit",
    "weights": [
      "1 Kit"
    ],
    "image": "/assets/decor-rangoli-pattern.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-rangoli-pattern.webp",
      "/assets/decor-rangoli-design.webp",
      "/assets/decor-rangoli-set.webp",
      "/assets/blog-rangoli.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Rangoli",
    "region": "Festive Decor",
    "caffeine": "Easy for Beginners",
    "inStock": true,
    "description": "Colours and simple stencils so that even first-timers can make a neat rangoli at the door.",
    "variants": [
      {
        "sku": "SP-RANGKIT-1",
        "name": "1 Kit",
        "price": 349,
        "compareAtPrice": 429
      }
    ],
    "status": "active",
    "sku": "SP-RANGKIT-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Rangoli",
      "Stencil",
      "Diwali Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "marigold-door-toran",
    "handle": "marigold-door-toran",
    "title": "Marigold Door Toran",
    "subtitle": "Genda Phool Garland for Your Main Door",
    "price": 179,
    "originalPrice": 229,
    "discount": 22,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Toran",
    "weights": [
      "1 Toran",
      "Pack of 3"
    ],
    "image": "/assets/decor-marigold-toran.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-marigold-toran.webp",
      "/assets/decor-marigold-garland.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Door Decor",
    "region": "Festive Decor",
    "caffeine": "Ready to Hang",
    "inStock": true,
    "description": "A marigold toran to hang over your main door, the classic festive welcome for Diwali and Kali Puja.",
    "variants": [
      {
        "sku": "SP-TORAN-1",
        "name": "1 Toran",
        "price": 179,
        "compareAtPrice": 229
      },
      {
        "sku": "SP-TORAN-3",
        "name": "Pack of 3",
        "price": 479,
        "compareAtPrice": 687
      }
    ],
    "status": "active",
    "sku": "SP-TORAN-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Toran",
      "Marigold",
      "Diwali Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "marigold-garland-pack",
    "handle": "marigold-garland-pack",
    "title": "Marigold Garland Pack",
    "subtitle": "Genda Phool Garlands for Puja & Decor",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "Pack of 5",
    "weights": [
      "Pack of 5"
    ],
    "image": "/assets/decor-marigold-garland.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-marigold-garland.webp",
      "/assets/decor-marigold-toran.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/hd-flower-bowl.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Door Decor",
    "region": "Festive Decor",
    "caffeine": "Bright & Festive",
    "inStock": true,
    "description": "Bright marigold garlands for your puja corner, balcony and doorway.",
    "variants": [
      {
        "sku": "SP-GARLAND-5",
        "name": "Pack of 5",
        "price": 249,
        "compareAtPrice": 299
      }
    ],
    "status": "active",
    "sku": "SP-GARLAND-5",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Marigold",
      "Garland",
      "Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "diwali-puja-thali-set",
    "handle": "diwali-puja-thali-set",
    "title": "Diwali Puja Thali Set",
    "subtitle": "Thali, Diya, Kumkum, Haldi, Rice & Incense",
    "price": 399,
    "originalPrice": 499,
    "discount": 20,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Set",
    "weights": [
      "1 Set"
    ],
    "image": "/assets/decor-puja-thali.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/decor-puja-thali.webp",
      "/assets/decor-puja-set.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/blog-puja.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "diyas-decor",
    "format": "Puja Set",
    "region": "Festive Decor",
    "caffeine": "Ready for Puja",
    "inStock": true,
    "description": "A complete puja thali for Lakshmi Puja and Kali Puja, ready to use with the essentials laid out.",
    "variants": [
      {
        "sku": "SP-THALI-1",
        "name": "1 Set",
        "price": 399,
        "compareAtPrice": 499
      }
    ],
    "status": "active",
    "sku": "SP-THALI-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Puja Thali",
      "Lakshmi Puja",
      "Kali Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "titanium-thunder-king-bombs",
    "handle": "titanium-thunder-king-bombs",
    "title": "Titanium Thunder King Mega Aerial Shells (Pack of 10)",
    "subtitle": "Super High Decibel Acoustic Burst · High Altitude Flash Powder Shells",
    "price": 699,
    "originalPrice": 1199,
    "discount": 42,
    "rating": 4.8,
    "reviewsCount": 142,
    "weight": "Pack of 10 Shells",
    "weights": [
      "Pack of 10 Shells"
    ],
    "image": "/assets/ck-shells.webp",
    "secondaryImage": "/assets/burst/sound-ladi-1.webp",
    "galleryImages": [
      "/assets/ck-shells.webp",
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Aerial Sound Shell",
    "region": "Sivakasi Quality",
    "caffeine": "Maximum Decibel Report",
    "inStock": false,
    "description": "Super-charged titanium thunder shell that rockets into the sky before detonating with a concussive shockwave sound report. 2026 batches fully sold out for this festive cycle.",
    "variants": [
      {
        "sku": "SP-THUN-10",
        "name": "Pack of 10 Shells",
        "price": 699,
        "compareAtPrice": 1199
      }
    ],
    "status": "active",
    "sku": "SP-THUN-10",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Sound",
      "Thunder",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "golden-willow-60-shots-cake",
    "handle": "golden-willow-60-shots-cake",
    "title": "Golden Willow Waterfall 60 Shots Sky Cake",
    "subtitle": "Cascading Golden Rain & Brocade Canopy Over Rooftops",
    "price": 2199,
    "originalPrice": 3800,
    "discount": 42,
    "rating": 4.9,
    "reviewsCount": 115,
    "weight": "1 Cake (60 Shots)",
    "weights": [
      "1 Cake (60 Shots)"
    ],
    "image": "/assets/ck-cake-60.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/ck-cake-60.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Waterfall Canopy",
    "inStock": false,
    "description": "Spectacular continuous golden willow effect that drips shimmering metallic sparks across the night sky. Current inventory reserved; restock after Diwali.",
    "variants": [
      {
        "sku": "SP-WILLOW-60",
        "name": "1 Cake (60 Shots)",
        "price": 2199,
        "compareAtPrice": 3800
      }
    ],
    "status": "active",
    "sku": "SP-WILLOW-60",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Aerial",
      "Willow",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "peacock-feather-dancing-flower-pot",
    "handle": "peacock-feather-dancing-flower-pot",
    "title": "Peacock Dancing Fountain (Mayil Jumbo Anar - 5 Pcs)",
    "subtitle": "Stunning Multi-Color Seven Feather Sparkling Fountain",
    "price": 549,
    "originalPrice": 999,
    "discount": 45,
    "rating": 4.9,
    "reviewsCount": 178,
    "weight": "Pack of 5 Pcs",
    "weights": [
      "Pack of 5 Pcs"
    ],
    "image": "/assets/ck-anar-peacock.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/ck-anar-peacock.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Jumbo Fountain",
    "region": "Sivakasi Quality",
    "caffeine": "7-Color Feather Fountain",
    "inStock": false,
    "description": "Famous Mayil-style jumbo flower pot that flares into a majestic peacock plumage of emerald, sapphire, gold and violet sparkles. Sold out for the season.",
    "variants": [
      {
        "sku": "SP-PEACOCK-05",
        "name": "Pack of 5 Pcs",
        "price": 549,
        "compareAtPrice": 999
      }
    ],
    "status": "active",
    "sku": "SP-PEACOCK-05",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Anar",
      "Flower Pots",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "silver-twinkling-star-sparklers-50cm",
    "handle": "silver-twinkling-star-sparklers-50cm",
    "title": "Giant 50cm Silver Twinkling Sparklers (Pack of 30)",
    "subtitle": "Extra Long 120-Second Burn · Mesmerizing Silver Starlight Phuljhadi",
    "price": 449,
    "originalPrice": 799,
    "discount": 44,
    "rating": 4.8,
    "reviewsCount": 210,
    "weight": "Pack of 30 Giant Sticks",
    "weights": [
      "Pack of 30 Giant Sticks"
    ],
    "image": "/assets/ck-sparkler-silver.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/ck-sparkler-silver.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "Electric Sparklers",
    "region": "Sivakasi Quality",
    "caffeine": "120s Silver Twinkle",
    "inStock": false,
    "description": "Our longest jumbo 50cm sparklers with bright diamond silver crackles. Burn time exceeds 2 minutes per stick. All allocated batches claimed.",
    "variants": [
      {
        "sku": "SP-SPK-50CM",
        "name": "Pack of 30 Giant Sticks",
        "price": 449,
        "compareAtPrice": 799
      }
    ],
    "status": "active",
    "sku": "SP-SPK-50CM",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Sparklers",
      "Phuljhadi",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "cyclone-whistling-flying-saucer",
    "handle": "cyclone-whistling-flying-saucer",
    "title": "Cyclone Whistling UFO Flying Saucers (Pack of 10)",
    "subtitle": "High-RPM Spinning Lift-Off With Whistling Green Sparks",
    "price": 349,
    "originalPrice": 599,
    "discount": 42,
    "rating": 4.7,
    "reviewsCount": 165,
    "weight": "Pack of 10 Saucers",
    "weights": [
      "Pack of 10 Saucers"
    ],
    "image": "/assets/ck-saucer.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/ck-saucer.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Aerial Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Whistling Vertical Flight",
    "inStock": false,
    "description": "Begins spinning furiously on the pavement with a shrill whistle before shooting 30 feet straight up into the air with glittering rings.",
    "variants": [
      {
        "sku": "SP-UFO-10",
        "name": "Pack of 10 Saucers",
        "price": 349,
        "compareAtPrice": 599
      }
    ],
    "status": "active",
    "sku": "SP-UFO-10",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Chakkar",
      "UFO",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "color-smoke-grenades-pack",
    "handle": "color-smoke-grenades-pack",
    "title": "Festive Tri-Color Smoke Grenades with Ring Pull (Pack of 6)",
    "subtitle": "Thick Non-Toxic Festive Cloud For Daytime Celebrations & Photos",
    "price": 399,
    "originalPrice": 699,
    "discount": 43,
    "rating": 4.8,
    "reviewsCount": 190,
    "weight": "Pack of 6 Grenades",
    "weights": [
      "Pack of 6 Grenades"
    ],
    "image": "/assets/ck-smoke-cans.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/ck-smoke-cans.webp",
      "/assets/ck-smoke-tubes.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Day Novelty",
    "region": "Eco Friendly",
    "caffeine": "Pure Visual Smoke",
    "inStock": false,
    "description": "Ring-pull dense smoke cartridges generating 60 seconds of bright cinematic color clouds. Ideal for daytime celebrations and reels. Sold out.",
    "variants": [
      {
        "sku": "SP-SMK-GRN",
        "name": "Pack of 6 Grenades",
        "price": 399,
        "compareAtPrice": 699
      }
    ],
    "status": "active",
    "sku": "SP-SMK-GRN",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Smoke",
      "Kids Safe",
      "Photography",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "5000-wala-giant-deluxe-ladi",
    "handle": "5000-wala-giant-deluxe-ladi",
    "title": "5000 Wala Giant Sivakasi Red Garland Ladi",
    "subtitle": "Longest Traditional Celebration Roll · Non-Stop Rhythmic Festive Joy",
    "price": 2899,
    "originalPrice": 4999,
    "discount": 42,
    "rating": 4.9,
    "reviewsCount": 98,
    "weight": "1 Giant Roll (5000 Wala)",
    "weights": [
      "1 Giant Roll (5000 Wala)"
    ],
    "image": "/assets/ck-ladi-5000.webp",
    "secondaryImage": "/assets/burst/sound-ladi-1.webp",
    "galleryImages": [
      "/assets/ck-shop-shelves.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Garland Ladi",
    "region": "Sivakasi Quality",
    "caffeine": "Unbroken Festive Rhythm",
    "inStock": false,
    "description": "The grandest traditional celebration ladi roll manufactured in Sivakasi. Unfolds over 40 feet with relentless rhythmic crackle. Completely sold out.",
    "variants": [
      {
        "sku": "SP-LADI-5000",
        "name": "1 Giant Roll (5000 Wala)",
        "price": 2899,
        "compareAtPrice": 4999
      }
    ],
    "status": "active",
    "sku": "SP-LADI-5000",
    "vendor": "Siliguri Pataka",
    "tags": [
      "5000 Wala",
      "Ladi",
      "Sound Crackers",
      "Sold Out"
    ],
    "stockQuantity": 0,
    "trackInventory": true
  },
  {
    "id": "warm-led-string-lights",
    "handle": "warm-led-string-lights",
    "title": "Warm LED String Lights",
    "subtitle": "Fairy Lights for Balcony, Windows & Walls",
    "price": 349,
    "originalPrice": 349,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 String",
    "weights": [
      "1 String",
      "3 Strings"
    ],
    "image": "/assets/hd-string-lights.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-string-lights.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-fairy-lights.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Lights",
    "region": "Festive Lighting",
    "caffeine": "Warm Glow",
    "inStock": true,
    "description": "Warm white LED string lights for your balcony, windows, stairs and walls. A simple way to make the whole house glow for Diwali and Kali Puja, and they can be stored and used again.",
    "variants": [
      {
        "sku": "SP-LED-1",
        "name": "1 String",
        "price": 349,
        "compareAtPrice": 349
      },
      {
        "sku": "SP-LED-3",
        "name": "3 Strings",
        "price": 949,
        "compareAtPrice": 949
      }
    ],
    "status": "active",
    "sku": "SP-LED-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Lights",
      "LED",
      "Home Decor",
      "Balcony"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "hanging-paper-lantern-kandil",
    "handle": "hanging-paper-lantern-kandil",
    "title": "Hanging Paper Lantern (Kandil)",
    "subtitle": "Traditional Festive Lantern for Doors & Balconies",
    "price": 299,
    "originalPrice": 299,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Lantern",
    "weights": [
      "1 Lantern",
      "2 Lanterns"
    ],
    "image": "/assets/hd-lantern-orange.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-lantern-orange.webp",
      "/assets/hd-lantern-red.webp",
      "/assets/hd-lantern-star.webp",
      "/assets/hd-lights-house.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Lanterns",
    "region": "Festive Lighting",
    "caffeine": "Warm Glow",
    "inStock": true,
    "description": "A traditional hanging paper lantern, also known as an akash kandil. Hang it at your door or balcony with a bulb inside for a warm festive glow. This lantern is for hanging only, not for flying.",
    "variants": [
      {
        "sku": "SP-KANDIL-1",
        "name": "1 Lantern",
        "price": 299,
        "compareAtPrice": 299
      },
      {
        "sku": "SP-KANDIL-2",
        "name": "2 Lanterns",
        "price": 549,
        "compareAtPrice": 549
      }
    ],
    "status": "active",
    "sku": "SP-KANDIL-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Lantern",
      "Kandil",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "colourful-star-lantern",
    "handle": "colourful-star-lantern",
    "title": "Colourful Star Lantern",
    "subtitle": "Multi-Colour Star for Windows & Doors",
    "price": 449,
    "originalPrice": 449,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Lantern",
    "weights": [
      "1 Lantern"
    ],
    "image": "/assets/hd-lantern-star.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-lantern-star.webp",
      "/assets/hd-lantern-orange.webp",
      "/assets/hd-lantern-red.webp",
      "/assets/hd-lights-house.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Lanterns",
    "region": "Festive Lighting",
    "caffeine": "Bright Colours",
    "inStock": true,
    "description": "A bright, multi-colour star lantern for a window, doorway or balcony. It looks its best after dark with a light inside. For hanging only, not for flying.",
    "variants": [
      {
        "sku": "SP-STAR-1",
        "name": "1 Lantern",
        "price": 449,
        "compareAtPrice": 449
      }
    ],
    "status": "active",
    "sku": "SP-STAR-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Lantern",
      "Star",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "brass-lakshmi-lamp",
    "handle": "brass-lakshmi-lamp",
    "title": "Brass Lakshmi Lamp",
    "subtitle": "Traditional Kamatchi Style Oil Lamp",
    "price": 899,
    "originalPrice": 899,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Lamp",
    "weights": [
      "1 Lamp"
    ],
    "image": "/assets/hd-brass-lamp.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/decor-puja-thali.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Traditional",
    "inStock": true,
    "description": "A traditional brass oil lamp with a Lakshmi design, for your puja corner or entrance. Polish it with a soft cloth and use it year after year.",
    "variants": [
      {
        "sku": "SP-BRASS-LAMP",
        "name": "1 Lamp",
        "price": 899,
        "compareAtPrice": 899
      }
    ],
    "status": "active",
    "sku": "SP-BRASS-LAMP",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Brass",
      "Lamp",
      "Puja",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "brass-aarti-diya",
    "handle": "brass-aarti-diya",
    "title": "Brass Aarti Diya",
    "subtitle": "Five-Flame Lamp with Handle for Puja",
    "price": 649,
    "originalPrice": 649,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Piece",
    "weights": [
      "1 Piece"
    ],
    "image": "/assets/hd-brass-aarti.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/decor-puja-set.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Traditional",
    "inStock": true,
    "description": "A five-flame brass aarti diya with a handle, for Lakshmi Puja, Kali Puja and daily prayers. Long-lasting, and easy to clean with a soft cloth.",
    "variants": [
      {
        "sku": "SP-AARTI-1",
        "name": "1 Piece",
        "price": 649,
        "compareAtPrice": 649
      }
    ],
    "status": "active",
    "sku": "SP-AARTI-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Brass",
      "Aarti",
      "Puja",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "brass-flower-bowl-urli",
    "handle": "brass-flower-bowl-urli",
    "title": "Brass Floating Diya Bowl (Urli)",
    "subtitle": "For Floating Diyas & Flower Petals",
    "price": 799,
    "originalPrice": 799,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Bowl",
    "weights": [
      "1 Bowl"
    ],
    "image": "/assets/hd-flower-bowl.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-flower-bowl.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/hd-floating-diyas.webp",
      "/assets/decor-marigold-garland.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Elegant",
    "inStock": true,
    "description": "A wide brass-finish bowl for floating flowers and diyas. Fill it with water, add marigold petals and a few floating candles, and place it at your entrance or on a table.",
    "variants": [
      {
        "sku": "SP-URLI-1",
        "name": "1 Bowl",
        "price": 799,
        "compareAtPrice": 799
      }
    ],
    "status": "active",
    "sku": "SP-URLI-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Urli",
      "Brass",
      "Flowers",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "coloured-glass-tealight-holders",
    "handle": "coloured-glass-tealight-holders",
    "title": "Coloured Glass Tea Light Holders",
    "subtitle": "Crackle Glass Holders for a Soft Glow",
    "price": 499,
    "originalPrice": 499,
    "discount": 0,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "Set of 3",
    "weights": [
      "Set of 3"
    ],
    "image": "/assets/hd-glass-tealights.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-glass-tealights.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/decor-candles.webp",
      "/assets/hd-fairy-lights.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Candles",
    "region": "Festive Lighting",
    "caffeine": "Soft Glow",
    "inStock": true,
    "description": "Coloured crackle glass holders for tea lights. Set them along a table, shelf or window for a soft, safe glow on Diwali night.",
    "variants": [
      {
        "sku": "SP-GLASS-3",
        "name": "Set of 3",
        "price": 499,
        "compareAtPrice": 499
      }
    ],
    "status": "active",
    "sku": "SP-GLASS-3",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Candles",
      "Tea Lights",
      "Glass",
      "Home Decor"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "micro-copper-fairy-rice-lights",
    "handle": "micro-copper-fairy-rice-lights",
    "title": "Diwali Micro LED Copper Wire Fairy Rice Lights (20m)",
    "subtitle": "Warm Amber Golden Rice Lights · Bendable Copper Wire for Mandir, Windows & Balconies",
    "price": 299,
    "originalPrice": 599,
    "discount": 50,
    "rating": 4.9,
    "reviewsCount": 84,
    "weight": "1 Spool (20 Metres)",
    "weights": [
      "1 Spool (20 Metres)",
      "Pack of 2 Spools (40m)"
    ],
    "image": "/assets/hd-fairy-lights.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-fairy-lights.webp",
      "/assets/hd-string-lights.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Lights",
    "region": "Festive Lighting",
    "caffeine": "Warm Amber Glow",
    "inStock": true,
    "description": "Premium 20-metre micro LED copper wire fairy rice lights for Diwali. The bendable copper wire weaves easily around mandirs, curtain rods, plants, glass jars, and balconies with safe, low-voltage glowing warm amber illumination.",
    "variants": [
      {
        "sku": "SP-FAIRY-20M",
        "name": "1 Spool (20 Metres)",
        "price": 299,
        "compareAtPrice": 599
      },
      {
        "sku": "SP-FAIRY-40M",
        "name": "Pack of 2 Spools (40m)",
        "price": 549,
        "compareAtPrice": 1199
      }
    ],
    "status": "active",
    "sku": "SP-FAIRY-20M",
    "vendor": "stall-47",
    "tags": [
      "Fairy Lights",
      "Rice Lights",
      "LED",
      "Home Decor",
      "Diwali Lights"
    ],
    "stockQuantity": 150,
    "trackInventory": false
  },
  {
    "id": "brass-akhand-diya-glass-chimney",
    "handle": "brass-akhand-diya-glass-chimney",
    "title": "Traditional Brass Akhand Diya with Glass Chimney",
    "subtitle": "Solid Engraved Brass Base with Heat-Resistant Glass Chimney & Filigree Crown Lid",
    "price": 699,
    "originalPrice": 1199,
    "discount": 42,
    "rating": 4.9,
    "reviewsCount": 67,
    "weight": "Medium (14cm Height)",
    "weights": [
      "Medium (14cm Height)",
      "Large (18cm Height)"
    ],
    "image": "/assets/hd-akhand-diya.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-akhand-diya.webp",
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/decor-puja-thali.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Puja Decor",
    "caffeine": "Everlasting Flame",
    "inStock": true,
    "description": "Authentic handcrafted solid brass Akhand Diya fitted with a protective borosilicate glass chimney and an ornate brass crown lid. Keeps your sacred Diwali and Kali Puja oil flame burning continuously for 24+ hours protected from winds and breezes.",
    "variants": [
      {
        "sku": "SP-AKHAND-MED",
        "name": "Medium (14cm Height)",
        "price": 699,
        "compareAtPrice": 1199
      },
      {
        "sku": "SP-AKHAND-LRG",
        "name": "Large (18cm Height)",
        "price": 999,
        "compareAtPrice": 1699
      }
    ],
    "status": "active",
    "sku": "SP-AKHAND-MED",
    "vendor": "store-47",
    "tags": [
      "Akhand Diya",
      "Brass Diya",
      "Puja Essentials",
      "Home Decor",
      "Diyas"
    ],
    "stockQuantity": 80,
    "trackInventory": false
  },
  {
    "id": "handcrafted-floating-terracotta-urli-diyas",
    "handle": "handcrafted-floating-terracotta-urli-diyas",
    "title": "Floating Terracotta Floral Clay Diyas (Set of 8)",
    "subtitle": "Water-Floating Hand-Painted Clay Diyas for Entrance & Living Room Urli Decor",
    "price": 349,
    "originalPrice": 599,
    "discount": 42,
    "rating": 4.8,
    "reviewsCount": 52,
    "weight": "Set of 8 Diyas",
    "weights": [
      "Set of 8 Diyas",
      "Set of 16 Diyas"
    ],
    "image": "/assets/hd-floating-diyas.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/hd-floating-diyas.webp",
      "/assets/hd-flower-bowl.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/decor-clay-diyas.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Living Decor",
    "caffeine": "Floating Petals",
    "inStock": true,
    "description": "Set of 8 hand-painted floral terracotta clay floating diyas designed to float gracefully in brass urlis, glass bowls, or water fountains with fresh marigold petals. Creates a serene, traditional Diwali reception glow.",
    "variants": [
      {
        "sku": "SP-FLOAT-8",
        "name": "Set of 8 Diyas",
        "price": 349,
        "compareAtPrice": 599
      },
      {
        "sku": "SP-FLOAT-16",
        "name": "Set of 16 Diyas",
        "price": 599,
        "compareAtPrice": 1099
      }
    ],
    "status": "active",
    "sku": "SP-FLOAT-8",
    "vendor": "stall-47",
    "tags": [
      "Floating Diyas",
      "Clay Diyas",
      "Urli Decor",
      "Home Decor",
      "Diwali Diyas"
    ],
    "stockQuantity": 120,
    "trackInventory": false
  },
  {
    "id": "anil-5-ka-dum-sound-crackers",
    "handle": "anil-5-ka-dum-sound-crackers",
    "title": "Anil 5 Ka Dum Celebratory Sound Crackers",
    "subtitle": "5 Rhythmic Celebratory Sound Bursts · Sivakasi Green Quality",
    "price": 294,
    "originalPrice": 450,
    "discount": 35,
    "rating": 4.8,
    "reviewsCount": 42,
    "weight": "1 Pack (5 Crackers)",
    "weights": [
      "1 Pack (5 Crackers)",
      "Pack of 3"
    ],
    "image": "/assets/product-5-ka-dum.webp",
    "secondaryImage": "/assets/burst/sound-ladi-1.webp",
    "galleryImages": [
      "/assets/product-5-ka-dum.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Sound Crackers",
    "region": "Sivakasi Quality",
    "caffeine": "Celebratory Sound",
    "inStock": true,
    "description": "Experience 5 consecutive high-energy sound bursts in a single cracker string. Manufactured by Anil Fireworks Factory Sivakasi for joyous Diwali and Kali Puja celebrations with authorized green certification.",
    "variants": [
      {
        "sku": "SP-5DUM-1",
        "name": "1 Pack (5 Crackers)",
        "price": 294,
        "compareAtPrice": 450
      },
      {
        "sku": "SP-5DUM-3",
        "name": "Pack of 3",
        "price": 820,
        "compareAtPrice": 1350
      }
    ],
    "status": "active",
    "sku": "SP-5DUM-1",
    "vendor": "stall-47",
    "tags": [
      "Sound Crackers",
      "5 Ka Dum",
      "Anil Fireworks",
      "Diwali"
    ],
    "stockQuantity": 80,
    "trackInventory": true
  },
  {
    "id": "classic-royal-anar-box-of-5",
    "handle": "classic-royal-anar-box-of-5",
    "title": "Classic Royal Anar Flower Pots (Full Pack of 5)",
    "subtitle": "10-12 Feet Golden & Silver Sparkle Fountain · Full Box",
    "price": 94,
    "originalPrice": 160,
    "discount": 41,
    "rating": 4.9,
    "reviewsCount": 89,
    "weight": "1 Box (5 Pcs)",
    "weights": [
      "1 Box (5 Pcs)",
      "Pack of 2 Boxes"
    ],
    "image": "/assets/product-anar-box.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/product-anar-box.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Flower Pot / Anar",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Sparks",
    "inStock": true,
    "description": "Traditional Sivakasi flower pots that erupt into a sparkling 10 to 12-foot fountain of golden and silver sparks. Safe ground fountain perfect for family courtyards and terraces.",
    "variants": [
      {
        "sku": "SP-ANAR-BOX1",
        "name": "1 Box (5 Pcs)",
        "price": 94,
        "compareAtPrice": 160
      },
      {
        "sku": "SP-ANAR-BOX2",
        "name": "Pack of 2 Boxes",
        "price": 179,
        "compareAtPrice": 320
      }
    ],
    "status": "active",
    "sku": "SP-ANAR-BOX1",
    "vendor": "stall-47",
    "tags": [
      "Flower Pots",
      "Anar",
      "Family Special",
      "Ground Fireworks"
    ],
    "stockQuantity": 150,
    "trackInventory": true
  },
  {
    "id": "special-ground-chakkar-single",
    "handle": "special-ground-chakkar-single",
    "title": "Special Ground Chakkar (Single Piece)",
    "subtitle": "High-Speed Spinning Ground Wheel · Golden Sparks",
    "price": 15,
    "originalPrice": 25,
    "discount": 40,
    "rating": 4.7,
    "reviewsCount": 65,
    "weight": "1 Piece",
    "weights": [
      "1 Piece",
      "Pack of 10 Pcs"
    ],
    "image": "/assets/product-chakkar-single.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/product-chakkar-single.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Spinning Rings",
    "inStock": true,
    "description": "Rapid ground-spinning chakkar emitting vivid circular halos of golden sparks on any smooth surface. Offered individually so you can pick your exact count.",
    "variants": [
      {
        "sku": "SP-CHAK-1",
        "name": "1 Piece",
        "price": 15,
        "compareAtPrice": 25
      },
      {
        "sku": "SP-CHAK-10",
        "name": "Pack of 10 Pcs",
        "price": 139,
        "compareAtPrice": 250
      }
    ],
    "status": "active",
    "sku": "SP-CHAK-1",
    "vendor": "stall-47",
    "tags": [
      "Chakkar",
      "Chorki",
      "Ground Spinner",
      "Diwali"
    ],
    "stockQuantity": 300,
    "trackInventory": true
  },
  {
    "id": "prakash-chutput-magic-pop",
    "handle": "prakash-chutput-magic-pop",
    "title": "Prakash Chutput Magic Pop Crackers",
    "subtitle": "Fun Crackling Sound · 100% Child-Safe Novelty Snapper",
    "price": 55,
    "originalPrice": 90,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 51,
    "weight": "1 Pack",
    "weights": [
      "1 Pack",
      "Pack of 3"
    ],
    "image": "/assets/product-chutput-55.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/product-chutput-55.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "inStock": true,
    "description": "Delightful friction-strike pop crackers by Prakash Fireworks Sivakasi. Produces crisp crackling snaps without dangerous flames, making them great fun for kids under adult supervision.",
    "variants": [
      {
        "sku": "SP-CP-55",
        "name": "1 Pack",
        "price": 55,
        "compareAtPrice": 90
      },
      {
        "sku": "SP-CP-55-3",
        "name": "Pack of 3",
        "price": 149,
        "compareAtPrice": 270
      }
    ],
    "status": "active",
    "sku": "SP-CP-55",
    "vendor": "stall-47",
    "tags": [
      "Kids Special",
      "Chutput",
      "Pop Crackers",
      "Child Safe"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "chutput-deluxe-mega-pack",
    "handle": "chutput-deluxe-mega-pack",
    "title": "Chutput Deluxe Mega Crackers (Special Pack)",
    "subtitle": "Extended Crackling Snaps · Low Smoke & Safe Fun",
    "price": 66,
    "originalPrice": 110,
    "discount": 40,
    "rating": 4.9,
    "reviewsCount": 38,
    "weight": "1 Mega Pack",
    "weights": [
      "1 Mega Pack",
      "Pack of 2"
    ],
    "image": "/assets/product-chutput-66.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/product-chutput-66.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "inStock": true,
    "description": "Deluxe sized pack of traditional Indian chutput crackers that pop with crisp, energetic crackling sounds. Green-certified, low smoke, and family friendly.",
    "variants": [
      {
        "sku": "SP-CP-66",
        "name": "1 Mega Pack",
        "price": 66,
        "compareAtPrice": 110
      },
      {
        "sku": "SP-CP-66-2",
        "name": "Pack of 2",
        "price": 125,
        "compareAtPrice": 220
      }
    ],
    "status": "active",
    "sku": "SP-CP-66",
    "vendor": "stall-47",
    "tags": [
      "Kids Special",
      "Chutput",
      "Novelty Crackers",
      "Diwali"
    ],
    "stockQuantity": 100,
    "trackInventory": true
  },
  {
    "id": "penta-5-shot-aerial-cake",
    "handle": "penta-5-shot-aerial-cake",
    "title": "Prakash Penta 5-Shot Multi-Color Aerial Cake",
    "subtitle": "5 Sky Burst Aerial Shots · Multi-Color Starburst Effects",
    "price": 280,
    "originalPrice": 450,
    "discount": 38,
    "rating": 4.8,
    "reviewsCount": 74,
    "weight": "1 Cake (5 Shots)",
    "weights": [
      "1 Cake (5 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/product-penta-5-shot.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-penta-5-shot.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "5 consecutive vertical aerial shells that launch into the evening sky and burst into radiant red, green, and golden starry brocades. Compact and budget-friendly aerial display.",
    "variants": [
      {
        "sku": "SP-PENTA-5",
        "name": "1 Cake (5 Shots)",
        "price": 280,
        "compareAtPrice": 450
      },
      {
        "sku": "SP-PENTA-5-2",
        "name": "Pack of 2 Cakes",
        "price": 530,
        "compareAtPrice": 900
      }
    ],
    "status": "active",
    "sku": "SP-PENTA-5",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "Sky Shots",
      "Penta",
      "Fireworks Cake"
    ],
    "stockQuantity": 90,
    "trackInventory": true
  },
  {
    "id": "royal-peacock-mayur-fountain",
    "handle": "royal-peacock-mayur-fountain",
    "title": "Royal Peacock Mayur Fountain (Grand Display)",
    "subtitle": "Spectacular Peacock Feather Spray · Multicolor Sparkle Wings",
    "price": 889,
    "originalPrice": 1450,
    "discount": 39,
    "rating": 5,
    "reviewsCount": 112,
    "weight": "1 Grand Display Unit",
    "weights": [
      "1 Grand Display Unit"
    ],
    "image": "/assets/product-peacock-fountain.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/product-peacock-fountain.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Speciality Fountain",
    "region": "Sivakasi Quality",
    "caffeine": "Multicolor Display",
    "inStock": true,
    "description": "A show-stopping visual centerpiece that opens into radiant peacock feather plumes of emerald, sapphire, and glittering gold sparks. One of the most sought-after visual fireworks in Siliguri.",
    "variants": [
      {
        "sku": "SP-PEACOCK-1",
        "name": "1 Grand Display Unit",
        "price": 889,
        "compareAtPrice": 1450
      }
    ],
    "status": "active",
    "sku": "SP-PEACOCK-1",
    "vendor": "stall-47",
    "tags": [
      "Flower Pots",
      "Peacock Fountain",
      "Mayur Anar",
      "Diwali Centerpiece"
    ],
    "stockQuantity": 50,
    "trackInventory": true
  },
  {
    "id": "aks-pop-pop-snappers-box",
    "handle": "aks-pop-pop-snappers-box",
    "title": "AKS Pop-Pop Snappers (Child-Safe Box)",
    "subtitle": "No Match Needed · Throw & Pop · 100% Smoke-Free",
    "price": 14,
    "originalPrice": 25,
    "discount": 44,
    "rating": 4.9,
    "reviewsCount": 128,
    "weight": "1 Box (50 Pcs)",
    "weights": [
      "1 Box (50 Pcs)",
      "Pack of 5 Boxes"
    ],
    "image": "/assets/product-pop-pop.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/product-pop-pop.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "inStock": true,
    "description": "Throw on the ground to hear a fun little pop! Requires no lighter or matches, produces zero smoke, and is completely child-friendly for kids and toddlers under adult supervision.",
    "variants": [
      {
        "sku": "SP-POP-1",
        "name": "1 Box (50 Pcs)",
        "price": 14,
        "compareAtPrice": 25
      },
      {
        "sku": "SP-POP-5",
        "name": "Pack of 5 Boxes",
        "price": 60,
        "compareAtPrice": 125
      }
    ],
    "status": "active",
    "sku": "SP-POP-1",
    "vendor": "stall-47",
    "tags": [
      "Kids Special",
      "Pop-Pop",
      "Snappers",
      "Safe Fireworks"
    ],
    "stockQuantity": 200,
    "trackInventory": true
  },
  {
    "id": "papershort-10rs",
    "handle": "papershort-10rs",
    "title": "Paper Short (Magic Paper Shot 10 Rs)",
    "subtitle": "Magic Wrinkle Sound Snappers · Bang, Drop & Snap · 100% Pollution Free (25 Pcs)",
    "price": 10,
    "originalPrice": 20,
    "discount": 50,
    "rating": 4.9,
    "reviewsCount": 96,
    "weight": "1 Box (25 Pcs)",
    "weights": [
      "1 Box (25 Pcs)",
      "Pack of 5 Boxes",
      "Pack of 10 Boxes"
    ],
    "image": "/assets/product-papershot.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/product-papershot.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "inStock": true,
    "description": "Magic Paper Shot (Paper Short 10 Rs) novelty trick snappers with Magic Wrinkle Sound. Bang, drop, throw, step on, or snap them to produce an instant exciting crackle! 100% pollution-free, child-friendly, no fireworks, no crackers, and no matches required.",
    "variants": [
      {
        "sku": "SP-PS-1",
        "name": "1 Box (25 Pcs)",
        "price": 10,
        "compareAtPrice": 20
      },
      {
        "sku": "SP-PS-5",
        "name": "Pack of 5 Boxes",
        "price": 45,
        "compareAtPrice": 100
      },
      {
        "sku": "SP-PS-10",
        "name": "Pack of 10 Boxes",
        "price": 80,
        "compareAtPrice": 200
      }
    ],
    "status": "active",
    "sku": "SP-PS-1",
    "vendor": "stall-47",
    "tags": [
      "Kids Special",
      "Paper Short",
      "Paper Shot",
      "Magic Paper Shot",
      "Snappers",
      "Pop Pop",
      "Safe Fireworks",
      "Diwali"
    ],
    "stockQuantity": 500,
    "trackInventory": true
  },
  {
    "id": "sky-burst-12-shot-aerial-cake",
    "handle": "sky-burst-12-shot-aerial-cake",
    "title": "Sky Burst 12-Shot Multi-Color Aerial Cake",
    "subtitle": "12 High-Altitude Repeater Shots · Golden Palm & Crackling Willow",
    "price": 588,
    "originalPrice": 950,
    "discount": 38,
    "rating": 4.9,
    "reviewsCount": 85,
    "weight": "1 Cake (12 Shots)",
    "weights": [
      "1 Cake (12 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/product-sky-shot-588.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-sky-shot-588.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "Sequential aerial repeater cake launching 12 spectacular bursts of golden glitter palms, ruby red stars, and crackling willow tails high into the Siliguri night sky.",
    "variants": [
      {
        "sku": "SP-SKY-12",
        "name": "1 Cake (12 Shots)",
        "price": 588,
        "compareAtPrice": 950
      },
      {
        "sku": "SP-SKY-12-2",
        "name": "Pack of 2 Cakes",
        "price": 1120,
        "compareAtPrice": 1900
      }
    ],
    "status": "active",
    "sku": "SP-SKY-12",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "Sky Shots",
      "12 Shots",
      "Fireworks Cake"
    ],
    "stockQuantity": 75,
    "trackInventory": true
  },
  {
    "id": "sky-thunder-25-shot-aerial-cake",
    "handle": "sky-thunder-25-shot-aerial-cake",
    "title": "Sky Thunder 25-Shot Multi-Color Aerial Cake",
    "subtitle": "25 High Altitude Shots · Whistling Tail with Chrysanthemum Finale",
    "price": 1188,
    "originalPrice": 1950,
    "discount": 39,
    "rating": 5,
    "reviewsCount": 97,
    "weight": "1 Cake (25 Shots)",
    "weights": [
      "1 Cake (25 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/product-sky-shot-1188.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-sky-shot-1188.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "Deluxe 25-shot aerial cake repeater delivering whistling tail ascents that open into massive multicolored chrysanthemums and a crackling golden brocade finale.",
    "variants": [
      {
        "sku": "SP-SKY-25",
        "name": "1 Cake (25 Shots)",
        "price": 1188,
        "compareAtPrice": 1950
      },
      {
        "sku": "SP-SKY-25-2",
        "name": "Pack of 2 Cakes",
        "price": 2250,
        "compareAtPrice": 3900
      }
    ],
    "status": "active",
    "sku": "SP-SKY-25",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "Sky Shots",
      "25 Shots",
      "Grand Finale"
    ],
    "stockQuantity": 60,
    "trackInventory": true
  },
  {
    "id": "classic-7-shot-aerial-repeater",
    "handle": "classic-7-shot-aerial-repeater",
    "title": "Classic 7-Shot Aerial Sky Repeater Cake",
    "subtitle": "7 High-Flying Aerial Bursts · Emerald & Crimson Colors",
    "price": 420,
    "originalPrice": 700,
    "discount": 40,
    "rating": 4.8,
    "reviewsCount": 63,
    "weight": "1 Cake (7 Shots)",
    "weights": [
      "1 Cake (7 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/product-sky-shot-420.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-sky-shot-420.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "7 sequential high-altitude aerial shots that fill the sky with bright emerald green and crimson red peony bursts. Easy single-fuse lighting for safe backyard shows.",
    "variants": [
      {
        "sku": "SP-SKY-7",
        "name": "1 Cake (7 Shots)",
        "price": 420,
        "compareAtPrice": 700
      },
      {
        "sku": "SP-SKY-7-2",
        "name": "Pack of 2 Cakes",
        "price": 799,
        "compareAtPrice": 1400
      }
    ],
    "status": "active",
    "sku": "SP-SKY-7",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "Sky Shots",
      "7 Shots",
      "Fireworks Cake"
    ],
    "stockQuantity": 85,
    "trackInventory": true
  },
  {
    "id": "grand-6-inch-mega-aerial-shell",
    "handle": "grand-6-inch-mega-aerial-shell",
    "title": "Grand 6-Inch Mega High-Altitude Aerial Shell",
    "subtitle": "Massive 200-Foot Sky Bloom · Professional Brocade Crown Finale",
    "price": 2499,
    "originalPrice": 3999,
    "discount": 38,
    "rating": 5,
    "reviewsCount": 44,
    "weight": "1 Mega Shell (6-Inch)",
    "weights": [
      "1 Mega Shell (6-Inch)"
    ],
    "image": "/assets/product-sky-shot-6inch.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-sky-shot-6inch.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Giant Aerial Shell",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "Our largest single aerial shell featuring an immense 6-inch diameter tube that launches high above Siliguri to produce an enormous 200-foot diameter golden brocade crown.",
    "variants": [
      {
        "sku": "SP-SHELL-6IN",
        "name": "1 Mega Shell (6-Inch)",
        "price": 2499,
        "compareAtPrice": 3999
      }
    ],
    "status": "active",
    "sku": "SP-SHELL-6IN",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "Mega Shell",
      "6 Inch",
      "Grand Finale"
    ],
    "stockQuantity": 35,
    "trackInventory": true
  },
  {
    "id": "grand-50-shot-sky-spectacular-cake",
    "handle": "grand-50-shot-sky-spectacular-cake",
    "title": "Grand 50-Shot Fireworks Spectacular Cake",
    "subtitle": "50 Non-Stop Aerial Bursts · Continuous 90-Second Sky Show",
    "price": 1700,
    "originalPrice": 2800,
    "discount": 39,
    "rating": 5,
    "reviewsCount": 78,
    "weight": "1 Big Cake (50 Shots)",
    "weights": [
      "1 Big Cake (50 Shots)"
    ],
    "image": "/assets/product-sky-shot-big-1700.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/product-sky-shot-big-1700.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "inStock": true,
    "description": "Full 90-second fireworks spectacle with 50 non-stop aerial launches that transition across multi-color strobes, silver flying fish, and a thunderous crackling brocade finale.",
    "variants": [
      {
        "sku": "SP-SKY-50",
        "name": "1 Big Cake (50 Shots)",
        "price": 1700,
        "compareAtPrice": 2800
      }
    ],
    "status": "active",
    "sku": "SP-SKY-50",
    "vendor": "stall-47",
    "tags": [
      "Aerial Shots",
      "50 Shots",
      "Sky Cake",
      "Diwali Grand Show"
    ],
    "stockQuantity": 40,
    "trackInventory": true
  },
  {
    "id": "pawan-electric-golden-sparklers-10s",
    "handle": "pawan-electric-golden-sparklers-10s",
    "title": "Pawan Electric Golden Sparklers (10 Sticks)",
    "subtitle": "Smokeless Golden Sparks · 60-Second Long Burn · Hand-Held Safe",
    "price": 70,
    "originalPrice": 120,
    "discount": 42,
    "rating": 4.8,
    "reviewsCount": 86,
    "weight": "1 Box (10 Sticks)",
    "weights": [
      "1 Box (10 Sticks)",
      "Pack of 3 Boxes"
    ],
    "image": "/assets/product-pawan-sparklers.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/product-pawan-sparklers.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "Sparkler Sticks",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Sparks",
    "inStock": true,
    "description": "High-grade electric golden sparklers by Pawan Fireworks. Made with low-smoke green formulation, safe wire handles, and bright glittering sparks for family celebrations.",
    "variants": [
      {
        "sku": "SP-PAW-10",
        "name": "1 Box (10 Sticks)",
        "price": 70,
        "compareAtPrice": 120
      },
      {
        "sku": "SP-PAW-30",
        "name": "Pack of 3 Boxes",
        "price": 199,
        "compareAtPrice": 360
      }
    ],
    "status": "active",
    "sku": "SP-PAW-10",
    "vendor": "stall-47",
    "tags": [
      "Sparklers",
      "Phuljhadi",
      "Golden Sparklers",
      "Family Safe"
    ],
    "stockQuantity": 150,
    "trackInventory": true
  },
  {
    "id": "supreme-12-shots-flower-garden",
    "handle": "supreme-12-shots-flower-garden",
    "title": "Supreme 12 Bara Awaaz Flower Garden Aerial Cake",
    "subtitle": "12 Consecutive Multi-Colour Aerial Starbursts with Floral Palms",
    "price": 460,
    "originalPrice": 750,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 64,
    "weight": "1 Cake (12 Shots)",
    "weights": [
      "1 Cake (12 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/shop-84/12-skyshort-460rs-part-1img.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/12-skyshort-460rs-part-1img.webp",
      "/assets/shop-84/12-skyshort-460rs-part-2img.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Supreme Sivakasi",
    "caffeine": "12 Aerial Bursts",
    "inStock": true,
    "description": "Supreme Brand 12 Bara Awaaz Flower Garden high altitude repeater cake. Shoots 12 consecutive colourful floral starbursts into the night sky with loud sound and sparkling brocade crowns.",
    "variants": [
      {
        "sku": "S84-SKY-12A",
        "name": "1 Cake (12 Shots)",
        "price": 460,
        "compareAtPrice": 750
      },
      {
        "sku": "S84-SKY-12A-2",
        "name": "Pack of 2 Cakes",
        "price": 899,
        "compareAtPrice": 1500
      }
    ],
    "status": "active",
    "sku": "S84-SKY-12A",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Supreme",
      "Flower Garden",
      "12 Shots"
    ],
    "stockQuantity": 150,
    "trackInventory": true
  },
  {
    "id": "elephant-12-shot-crackling-cake",
    "handle": "elephant-12-shot-crackling-cake",
    "title": "Elephant Brand 12-Shot Crackling Sky Cake",
    "subtitle": "12 High-Altitude Aerial Starbursts with Crisp Golden Crackling",
    "price": 350,
    "originalPrice": 600,
    "discount": 42,
    "rating": 4.8,
    "reviewsCount": 42,
    "weight": "1 Cake (12 Shots)",
    "weights": [
      "1 Cake (12 Shots)"
    ],
    "image": "/assets/shop-84/12skyshort-350rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/12skyshort-350rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Elephant Sivakasi",
    "caffeine": "Crackling Sky Shots",
    "inStock": true,
    "description": "Elephant Brand 12-shot aerial repeater cake featuring open tubes that launch 12 consecutive shells bursting into golden crackling palms and sparkling chrysanthemums.",
    "variants": [
      {
        "sku": "S84-SKY-12B",
        "name": "1 Cake (12 Shots)",
        "price": 350,
        "compareAtPrice": 600
      }
    ],
    "status": "active",
    "sku": "S84-SKY-12B",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Elephant Brand",
      "Crackling",
      "12 Shots"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "sonny-lemon-20-inch-aerial-shells",
    "handle": "sonny-lemon-20-inch-aerial-shells",
    "title": "Sonny Lemon 20-Inch Giant Aerial Shells",
    "subtitle": "20-Inch High-Altitude Sky Shots with Massive Golden Crown Bursts",
    "price": 1700,
    "originalPrice": 2800,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 38,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/shop-84/20inch-skyshort-1700rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/20inch-skyshort-1700rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Giant Aerial Shells",
    "region": "Sonny Fireworks Sivakasi",
    "caffeine": "High Altitude Shells",
    "inStock": true,
    "description": "Sonny Fireworks 20-inch giant multi-stage aerial shells. Produces colossal, dazzling lemon and golden brocade palm umbrellas that light up the entire Siliguri skyline.",
    "variants": [
      {
        "sku": "S84-SKY-20",
        "name": "1 Pack",
        "price": 1700,
        "compareAtPrice": 2800
      }
    ],
    "status": "active",
    "sku": "S84-SKY-20",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Sonny Fireworks",
      "Giant Shells",
      "20 Inch"
    ],
    "stockQuantity": 80,
    "trackInventory": true
  },
  {
    "id": "sri-rr-dilwale-multicolour-aerial-cake",
    "handle": "sri-rr-dilwale-multicolour-aerial-cake",
    "title": "Sri R.R. Dilwale Multi-Colour Aerial Wedding Cake",
    "subtitle": "Grand Wedding Multi-Color Sky Repeater with Dazzling Golden Palm & Brocade Finale",
    "price": 2500,
    "originalPrice": 4200,
    "discount": 40,
    "rating": 4.9,
    "reviewsCount": 55,
    "weight": "1 Mega Cake",
    "weights": [
      "1 Mega Cake"
    ],
    "image": "/assets/shop-84/rr-skyshort-2500rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/rr-skyshort-2500rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sri R.R. Sivakasi",
    "caffeine": "Grand Wedding Finale",
    "inStock": true,
    "description": "Sri R.R. Fireworks Dilwale special celebration mega cake. Engineered for weddings, anniversaries, and grand Diwali nights, producing huge multi-colour bursts with cascading golden willow falls.",
    "variants": [
      {
        "sku": "S84-SKY-RR",
        "name": "1 Mega Cake",
        "price": 2500,
        "compareAtPrice": 4200
      }
    ],
    "status": "active",
    "sku": "S84-SKY-RR",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Wedding Series",
      "Dilwale",
      "Grand Finale"
    ],
    "stockQuantity": 60,
    "trackInventory": true
  },
  {
    "id": "elephant-angry-birds-deluxe-flower-pots",
    "handle": "elephant-angry-birds-deluxe-flower-pots",
    "title": "Elephant Angry Birds Deluxe Novelty Flower Pots Box",
    "subtitle": "Fun Cartoon Character Fountain Set with Multi-Colour Showers & Sparkling Sprays",
    "price": 1000,
    "originalPrice": 1650,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 47,
    "weight": "1 Deluxe Gift Box",
    "weights": [
      "1 Deluxe Gift Box"
    ],
    "image": "/assets/shop-84/angry-pots-1000rs.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/angry-pots-1000rs.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Assorted Flower Pots",
    "region": "Elephant Sivakasi",
    "caffeine": "Child & Family Friendly",
    "inStock": true,
    "description": "Elephant Brand Angry Birds novelty flower pots gift pack. Contains an exciting variety of cartoon-themed sparkling fountain cones that spray vibrant multi-coloured stars, crackling silver beads, and golden geysers.",
    "variants": [
      {
        "sku": "S84-POT-ANG",
        "name": "1 Deluxe Gift Box",
        "price": 1000,
        "compareAtPrice": 1650
      }
    ],
    "status": "active",
    "sku": "S84-POT-ANG",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Angry Birds",
      "Kids Special",
      "Elephant Brand"
    ],
    "stockQuantity": 90,
    "trackInventory": true
  },
  {
    "id": "vadivel-chut-putu-magic-snappers",
    "handle": "vadivel-chut-putu-magic-snappers",
    "title": "Vadivel Chut Putu Magic Friction Snappers",
    "subtitle": "Friction Strike Pop Crackers with Crisp Crackling Snaps · Child Safe Novelty Fun",
    "price": 170,
    "originalPrice": 280,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 61,
    "weight": "1 Box (10 Rolls)",
    "weights": [
      "1 Box (10 Rolls)",
      "Pack of 3 Boxes"
    ],
    "image": "/assets/shop-84/chut-putu-170rs-and-this-part-2-img-.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/shop-84/chut-putu-170rs-and-this-part-2-img-.webp",
      "/assets/shop-84/chut-putu-170rs-and-this-part-1-img-.webp",
      "/assets/burst/kids-fun-1.webp",
      "/assets/burst/sparkler-glow-1.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Safe Friction Pop",
    "inStock": true,
    "description": "Vadivel Pyrotechs Chut Putu friction-strike crackling pop snappers. Strike against any hard surface or friction pad to produce energetic crackles with zero danger.",
    "variants": [
      {
        "sku": "S84-CP-1",
        "name": "1 Box (10 Rolls)",
        "price": 170,
        "compareAtPrice": 280
      },
      {
        "sku": "S84-CP-3",
        "name": "Pack of 3 Boxes",
        "price": 480,
        "compareAtPrice": 840
      }
    ],
    "status": "active",
    "sku": "S84-CP-1",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Kids Special",
      "Chutput",
      "Pop Pop",
      "Snappers",
      "Vadivel"
    ],
    "stockQuantity": 200,
    "trackInventory": true
  },
  {
    "id": "the-aruna-mega-colour-flower-pots",
    "handle": "the-aruna-mega-colour-flower-pots",
    "title": "The Aruna Mega Colour Flower Pots (10 Pcs)",
    "subtitle": "10 Large Cones with Brilliant Multi-Colour Sparkling Fountain Showers",
    "price": 795,
    "originalPrice": 1300,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 52,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/colorfull-pots-795rsrs-part-1img.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/colorfull-pots-795rsrs-part-1img.webp",
      "/assets/shop-84/colorfull-pots-795rs-part-1img.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Colour Cones",
    "region": "The Aruna Fireworks Sivakasi",
    "caffeine": "Multi-Colour Sparks",
    "inStock": true,
    "description": "The Aruna Fireworks Industries Sri Krishna Mega Colour Pots. 10 jumbo size cones shooting brilliant tall showers of red, green, silver, and gold sparkling sparks.",
    "variants": [
      {
        "sku": "S84-POT-ARU",
        "name": "1 Box (10 Pcs)",
        "price": 795,
        "compareAtPrice": 1300
      }
    ],
    "status": "active",
    "sku": "S84-POT-ARU",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Mega Colour",
      "The Aruna Fireworks"
    ],
    "stockQuantity": 110,
    "trackInventory": true
  },
  {
    "id": "corsair-pacquiao-ultraman-match-crackers",
    "handle": "corsair-pacquiao-ultraman-match-crackers",
    "title": "Corsair Pacquiao Ultraman Match Stick Crackers",
    "subtitle": "Friction-Strike Match Crackers with Crisp Loud Bang · Strike on Box to Ignite",
    "price": 20,
    "originalPrice": 35,
    "discount": 43,
    "rating": 4.9,
    "reviewsCount": 89,
    "weight": "1 Box (10 Sticks)",
    "weights": [
      "1 Box (10 Sticks)",
      "1 Carton Pack (10 Boxes)"
    ],
    "image": "/assets/shop-84/dont-no-this-name-and-price-is-210-and-this-part-1-img.webp",
    "secondaryImage": "/assets/burst/sound-ladi-1.webp",
    "galleryImages": [
      "/assets/shop-84/dont-no-this-name-and-price-is-210-and-this-part-1-img.webp",
      "/assets/shop-84/dont-no-this-name-and-price-is-210-and-this-part-2-img.webp",
      "/assets/shop-84/dont-no-this-name-okay-and-20rs.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Match Crackers",
    "region": "Corsair Sivakasi",
    "caffeine": "Crisp Friction Bang",
    "inStock": true,
    "description": "Corsair Leopard King original green match stick crackers (Pacquiao Ultraman edition). Easily ignite by striking against the side friction strip of the matchbox to deliver an immediate, crisp loud sound.",
    "variants": [
      {
        "sku": "S84-MC-1",
        "name": "1 Box (10 Sticks)",
        "price": 20,
        "compareAtPrice": 35
      },
      {
        "sku": "S84-MC-10",
        "name": "1 Carton Pack (10 Boxes)",
        "price": 210,
        "compareAtPrice": 350
      }
    ],
    "status": "active",
    "sku": "S84-MC-1",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Match Crackers",
      "Sound Crackers",
      "Corsair",
      "Pacquiao Ultraman"
    ],
    "stockQuantity": 300,
    "trackInventory": true
  },
  {
    "id": "vadivel-ashoka-flower-pots-10pcs",
    "handle": "vadivel-ashoka-flower-pots-10pcs",
    "title": "Vadivel Ashoka Flower Pots (10 Pcs Anar)",
    "subtitle": "Traditional Golden Sparkling Fountains with Smooth Silver & Gold Spray",
    "price": 335,
    "originalPrice": 550,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 44,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)",
      "Pack of 2 Boxes"
    ],
    "image": "/assets/shop-84/flower-pots-or-aniner-335rs-.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/flower-pots-or-aniner-335rs-.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Traditional Cones",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Golden Showers",
    "inStock": true,
    "description": "Vadivel Pyrotechs Ashoka flower pots. 10 traditional cone anars that erupt into smooth, continuous fountains of brilliant gold and silver sparks.",
    "variants": [
      {
        "sku": "S84-POT-ASH",
        "name": "1 Box (10 Pcs)",
        "price": 335,
        "compareAtPrice": 550
      },
      {
        "sku": "S84-POT-ASH-2",
        "name": "Pack of 2 Boxes",
        "price": 649,
        "compareAtPrice": 1100
      }
    ],
    "status": "active",
    "sku": "S84-POT-ASH",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Ashoka",
      "Vadivel"
    ],
    "stockQuantity": 160,
    "trackInventory": true
  },
  {
    "id": "vadivel-gypsy-rocker-full-colour-sky-shots",
    "handle": "vadivel-gypsy-rocker-full-colour-sky-shots",
    "title": "Vadivel Gypsy Rocker Full Colour Aerial Sky Shots",
    "subtitle": "High Altitude Aerial Shell Repeater with Mesmerizing Multicolor Starbursts",
    "price": 1000,
    "originalPrice": 1650,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 36,
    "weight": "1 Cake",
    "weights": [
      "1 Cake"
    ],
    "image": "/assets/shop-84/full-color-1000rs-skyshort.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/full-color-1000rs-skyshort.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Aerial Shell Cake",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Vibrant Color Stars",
    "inStock": true,
    "description": "Vadivel Pyrotechs Gypsy Rocker aerial repeater cake. Features dazzling high-altitude shell bursts with purple, emerald, and ruby peonies with glittering palm tails.",
    "variants": [
      {
        "sku": "S84-SKY-GYP",
        "name": "1 Cake",
        "price": 1000,
        "compareAtPrice": 1650
      }
    ],
    "status": "active",
    "sku": "S84-SKY-GYP",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Gypsy Rocker",
      "Vadivel"
    ],
    "stockQuantity": 90,
    "trackInventory": true
  },
  {
    "id": "gatling-gun-288-shots-handheld-torch-sparkler",
    "handle": "gatling-gun-288-shots-handheld-torch-sparkler",
    "title": "288-Shot Handheld Gatling Gun Sparkler Torch",
    "subtitle": "Rapid-Fire 288 Shots Handheld Roman Candle Torch with Dazzling Continuous Sparks",
    "price": 1700,
    "originalPrice": 2800,
    "discount": 39,
    "rating": 5,
    "reviewsCount": 49,
    "weight": "1 Giant Torch (288 Shots)",
    "weights": [
      "1 Giant Torch (288 Shots)"
    ],
    "image": "/assets/shop-84/handrtumb-sparkale-1700rs.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/handrtumb-sparkale-1700rs.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "Handheld Gatling Torch",
    "region": "Sivakasi Quality",
    "caffeine": "288 Rapid Sparks",
    "inStock": true,
    "description": "288 Catling Gatling Gun handheld Roman candle sparkler torch. Features an easy-grip safety handle and discharges 288 rapid-fire glowing star shots with whistling crackles.",
    "variants": [
      {
        "sku": "S84-SPK-GAT",
        "name": "1 Giant Torch (288 Shots)",
        "price": 1700,
        "compareAtPrice": 2800
      }
    ],
    "status": "active",
    "sku": "S84-SPK-GAT",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Gatling Torch",
      "Roman Candle",
      "288 Shots"
    ],
    "stockQuantity": 70,
    "trackInventory": true
  },
  {
    "id": "vadivel-badiya-75-shots-multicolour-aerial-cake",
    "handle": "vadivel-badiya-75-shots-multicolour-aerial-cake",
    "title": "Vadivel Badiya 75 Shots Multi-Colour Aerial Cake",
    "subtitle": "75 Consecutive High-Altitude Sky Bursts with Golden Willow & Vibrant Brocade Finale",
    "price": 2300,
    "originalPrice": 3800,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 68,
    "weight": "1 Cake (75 Shots)",
    "weights": [
      "1 Cake (75 Shots)"
    ],
    "image": "/assets/shop-84/img-center-one-okay-badaya-skyshort-75-short-and-2300rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/img-center-one-okay-badaya-skyshort-75-short-and-2300rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "75 Grand Finale Shots",
    "inStock": true,
    "description": "Vadivel Pyrotechs Badiya 75 shots grand celebration cake. Delivers 75 continuous rapid sky bursts culminating in a dazzling multi-layer golden palm crown finale.",
    "variants": [
      {
        "sku": "S84-SKY-BAD75",
        "name": "1 Cake (75 Shots)",
        "price": 2300,
        "compareAtPrice": 3800
      }
    ],
    "status": "active",
    "sku": "S84-SKY-BAD75",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Badiya",
      "75 Shots",
      "Vadivel"
    ],
    "stockQuantity": 50,
    "trackInventory": true
  },
  {
    "id": "vadivel-mega-jumbo-flower-pots",
    "handle": "vadivel-mega-jumbo-flower-pots",
    "title": "Vadivel Mega Jumbo Flower Pots (10 Pcs Tray)",
    "subtitle": "Extra Large Heavy Flower Pots with High Rising Silver & Golden Geyser Fountains",
    "price": 685,
    "originalPrice": 1100,
    "discount": 38,
    "rating": 4.9,
    "reviewsCount": 39,
    "weight": "1 Tray (10 Cones)",
    "weights": [
      "1 Tray (10 Cones)"
    ],
    "image": "/assets/shop-84/mega-pots-685rs.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/mega-pots-685rs.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Jumbo Cones",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "High Altitude Fountain",
    "inStock": true,
    "description": "Vadivel Pyrotechs Mega Jumbo flower pots packaged in a 10-piece presentation tray. Packed with heavy pyro composition for high-shooting fountain sprays and extended burn time.",
    "variants": [
      {
        "sku": "S84-POT-MEG",
        "name": "1 Tray (10 Cones)",
        "price": 685,
        "compareAtPrice": 1100
      }
    ],
    "status": "active",
    "sku": "S84-POT-MEG",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Mega Jumbo",
      "Vadivel"
    ],
    "stockQuantity": 85,
    "trackInventory": true
  },
  {
    "id": "sri-krishna-ming-dynasty-multicolour-aerial-cake",
    "handle": "sri-krishna-ming-dynasty-multicolour-aerial-cake",
    "title": "Sri Krishna Ming Dynasty Multi-Colour Aerial Cake",
    "subtitle": "Vibrant Traditional Multi-Colour Brocade Sky Bursts Repeater with Crackling Pearls",
    "price": 1195,
    "originalPrice": 1950,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 33,
    "weight": "1 Cake",
    "weights": [
      "1 Cake"
    ],
    "image": "/assets/shop-84/multicolor-sky-short-1195.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/multicolor-sky-short-1195.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Karthik Fireworks Sivakasi",
    "caffeine": "Multicolor Brocade",
    "inStock": true,
    "description": "Sri Krishna / Karthik Fireworks Ming Dynasty multi-colour aerial cake. Produces brilliant colour comets that detonate into sparkling ruby, emerald, and gold floral blooms.",
    "variants": [
      {
        "sku": "S84-SKY-MIN",
        "name": "1 Cake",
        "price": 1195,
        "compareAtPrice": 1950
      }
    ],
    "status": "active",
    "sku": "S84-SKY-MIN",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Ming Dynasty",
      "Karthik Fireworks"
    ],
    "stockQuantity": 90,
    "trackInventory": true
  },
  {
    "id": "cock-brand-penta-colour-fountain",
    "handle": "cock-brand-penta-colour-fountain",
    "title": "Cock Brand Penta Colour Fountain (5 Pcs Box)",
    "subtitle": "Sri Kaliswari Fireworks · 5 Distinct Shifting Colour Shower Fountains",
    "price": 1150,
    "originalPrice": 1900,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 41,
    "weight": "1 Box (5 Cones)",
    "weights": [
      "1 Box (5 Cones)"
    ],
    "image": "/assets/shop-84/penta-color-fountain-1150rs.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/penta-color-fountain-1150rs.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Colour Fountain",
    "region": "Cock Brand Sivakasi",
    "caffeine": "5 Color Changing Showers",
    "inStock": true,
    "description": "Sri Kaliswari Fireworks Cock Brand Penta Colour Fountain. Box of 5 heavy color changing fountains that cycle through vibrant shades of red, green, blue, yellow, and silver.",
    "variants": [
      {
        "sku": "S84-POT-PEN",
        "name": "1 Box (5 Cones)",
        "price": 1150,
        "compareAtPrice": 1900
      }
    ],
    "status": "active",
    "sku": "S84-POT-PEN",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Fountain",
      "Cock Brand",
      "Penta Colour"
    ],
    "stockQuantity": 80,
    "trackInventory": true
  },
  {
    "id": "cock-brand-rang-barat-colour-flower-pots",
    "handle": "cock-brand-rang-barat-colour-flower-pots",
    "title": "Cock Brand Rang Barat Colour Flower Pots (10 Pcs)",
    "subtitle": "Sri Kaliswari Fireworks · 14cm Cones with Vivid Multi-Colour Sparks",
    "price": 830,
    "originalPrice": 1350,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 45,
    "weight": "1 Box (10 Cones)",
    "weights": [
      "1 Box (10 Cones)"
    ],
    "image": "/assets/shop-84/rang-barat-pots-830rs.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/rang-barat-pots-830rs.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Colour Cones",
    "region": "Cock Brand Sivakasi",
    "caffeine": "Vivid Colour Sparks",
    "inStock": true,
    "description": "Cock Brand Rang Barat 14cm colour anar flower pots. Emits an energetic high shower of shimmering multicolour stars with smooth crackles.",
    "variants": [
      {
        "sku": "S84-POT-RGB",
        "name": "1 Box (10 Cones)",
        "price": 830,
        "compareAtPrice": 1350
      }
    ],
    "status": "active",
    "sku": "S84-POT-RGB",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Rang Barat",
      "Cock Brand"
    ],
    "stockQuantity": 100,
    "trackInventory": true
  },
  {
    "id": "vadivel-power-play-limited-edition-aerial-shells",
    "handle": "vadivel-power-play-limited-edition-aerial-shells",
    "title": "Vadivel Power Play Limited Edition Aerial Shells",
    "subtitle": "Cricket Special Edition · Massive High Altitude Multi-Colour Aerial Shells",
    "price": 1800,
    "originalPrice": 3000,
    "discount": 40,
    "rating": 4.9,
    "reviewsCount": 37,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/shop-84/skyshort-1800rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-1800rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Aerial Shells",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Massive Shell Bursts",
    "inStock": true,
    "description": "Vadivel Pyrotechs Power Play limited edition aerial shell pack. Massive tube shells launching sky-high before detonating into dramatic brocade crowns and bright flashing comets.",
    "variants": [
      {
        "sku": "S84-SKY-POW",
        "name": "1 Pack",
        "price": 1800,
        "compareAtPrice": 3000
      }
    ],
    "status": "active",
    "sku": "S84-SKY-POW",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Power Play",
      "Vadivel"
    ],
    "stockQuantity": 75,
    "trackInventory": true
  },
  {
    "id": "vadivel-akash-mela-limited-edition-aerial-shells",
    "handle": "vadivel-akash-mela-limited-edition-aerial-shells",
    "title": "Vadivel Akash Mela Limited Edition Aerial Shells",
    "subtitle": "Special Festival Edition · Giant Sky Bursts with Radiant White & Violet Peony",
    "price": 2200,
    "originalPrice": 3600,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 43,
    "weight": "1 Pack",
    "weights": [
      "1 Pack"
    ],
    "image": "/assets/shop-84/skyshort-2200rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-2200rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Aerial Shells",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Festival Sky Bursts",
    "inStock": true,
    "description": "Vadivel Pyrotechs Akash Mela festival edition giant shells. Lights up the night with huge spherical floral peonies in glittering silver, violet, and deep gold.",
    "variants": [
      {
        "sku": "S84-SKY-AKM",
        "name": "1 Pack",
        "price": 2200,
        "compareAtPrice": 3600
      }
    ],
    "status": "active",
    "sku": "S84-SKY-AKM",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Akash Mela",
      "Vadivel"
    ],
    "stockQuantity": 65,
    "trackInventory": true
  },
  {
    "id": "anil-man-pasand-25-shots-multicolour-aerial-cake",
    "handle": "anil-man-pasand-25-shots-multicolour-aerial-cake",
    "title": "Anil Man Pasand 25 Shots Multi-Colour Aerial Cake",
    "subtitle": "Anil Fireworks Factory · 25 Rapid Sky Repeater Shots with Golden Palms",
    "price": 1130,
    "originalPrice": 1900,
    "discount": 41,
    "rating": 4.9,
    "reviewsCount": 58,
    "weight": "1 Cake (25 Shots)",
    "weights": [
      "1 Cake (25 Shots)"
    ],
    "image": "/assets/shop-84/skyshort-25-1130rs-part-1img.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-25-1130rs-part-1img.webp",
      "/assets/shop-84/skyshort-25-1130rs-part-2img.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Anil Fireworks Sivakasi",
    "caffeine": "25 Rapid Sky Shots",
    "inStock": true,
    "description": "Anil Fireworks Factory authentic Man Pasand 25 shots aerial cake. Produces 25 rapid-sequence sky bursts with radiant golden brocades, crackling willows, and rich ruby stars.",
    "variants": [
      {
        "sku": "S84-SKY-MAN25",
        "name": "1 Cake (25 Shots)",
        "price": 1130,
        "compareAtPrice": 1900
      }
    ],
    "status": "active",
    "sku": "S84-SKY-MAN25",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Anil Fireworks",
      "Man Pasand",
      "25 Shots"
    ],
    "stockQuantity": 95,
    "trackInventory": true
  },
  {
    "id": "standard-fireworks-100-shots-multi-colour-grand-finale-cake",
    "handle": "standard-fireworks-100-shots-multi-colour-grand-finale-cake",
    "title": "Standard Fireworks 100 Shots Multi-Colour Aerial Grand Finale Cake",
    "subtitle": "Standard Fireworks Wedding Series · 100 Consecutive Multi-Colour Aerial Bursts",
    "price": 3500,
    "originalPrice": 5800,
    "discount": 40,
    "rating": 5,
    "reviewsCount": 72,
    "weight": "MOM Series (100 Shots)",
    "weights": [
      "MOM Series (100 Shots)",
      "MATRIX Series (100 Shots)"
    ],
    "image": "/assets/shop-84/skyshort-3500-plus-3500rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-3500-plus-3500rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "100-Shot Grand Cake",
    "region": "Standard Fireworks Sivakasi",
    "caffeine": "100 Shot Grand Finale",
    "inStock": true,
    "description": "Standard Fireworks premier 100 Shots Aerial Cake (available in MOM Series & MATRIX Series). The ultimate display centerpiece delivering 100 rapid multi-colour aerial detonations with huge weeping willow waterfalls.",
    "variants": [
      {
        "sku": "S84-SKY-MOM100",
        "name": "MOM Series (100 Shots)",
        "price": 3500,
        "compareAtPrice": 5800
      },
      {
        "sku": "S84-SKY-MAT100",
        "name": "MATRIX Series (100 Shots)",
        "price": 3500,
        "compareAtPrice": 5800
      }
    ],
    "status": "active",
    "sku": "S84-SKY-MOM100",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Standard Fireworks",
      "100 Shots",
      "Grand Finale"
    ],
    "stockQuantity": 45,
    "trackInventory": true
  },
  {
    "id": "standard-pandav-cosmic-series-single-sky-shots",
    "handle": "standard-pandav-cosmic-series-single-sky-shots",
    "title": "Standard Pandav Cosmic Series Single Sky Shots (5 Pcs)",
    "subtitle": "Standard Fireworks · 5 Distinct Single Sky Shots (Red, Purple, Silver, Yellow, White)",
    "price": 367,
    "originalPrice": 600,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 35,
    "weight": "1 Pack (5 Pcs)",
    "weights": [
      "1 Pack (5 Pcs)"
    ],
    "image": "/assets/shop-84/skyshort-367rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-367rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Single Sky Shots",
    "region": "Standard Fireworks Sivakasi",
    "caffeine": "5 Color Shots",
    "inStock": true,
    "description": "Standard Fireworks Pandav Cosmic Series pack of 5 individual aerial sky shot tubes. Each launches high into the sky bursting into separate vibrant shades: Red, Purple, Silver, Yellow, and Brilliant White.",
    "variants": [
      {
        "sku": "S84-SKY-PAN5",
        "name": "1 Pack (5 Pcs)",
        "price": 367,
        "compareAtPrice": 600
      }
    ],
    "status": "active",
    "sku": "S84-SKY-PAN5",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Standard Fireworks",
      "Pandav Cosmic",
      "5 Shots"
    ],
    "stockQuantity": 130,
    "trackInventory": true
  },
  {
    "id": "cock-brand-penta-sky-flash-aerial-shots-cake",
    "handle": "cock-brand-penta-sky-flash-aerial-shots-cake",
    "title": "Cock Brand Penta Sky Flash Aerial Shots Cake",
    "subtitle": "Sri Kaliswari Fireworks · 5 High-Altitude Flash Bursts with Radiant Golden Palms",
    "price": 456,
    "originalPrice": 750,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 40,
    "weight": "1 Cake",
    "weights": [
      "1 Cake"
    ],
    "image": "/assets/shop-84/skyshort-456rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-456rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Cock Brand Sivakasi",
    "caffeine": "Penta Sky Flash",
    "inStock": true,
    "description": "Cock Brand Sri Kaliswari Fireworks Penta Sky Flash cake. Rapid fire 5 high-altitude shell repeaters with intense flash bangs and sparkling golden palms.",
    "variants": [
      {
        "sku": "S84-SKY-PEN5",
        "name": "1 Cake",
        "price": 456,
        "compareAtPrice": 750
      }
    ],
    "status": "active",
    "sku": "S84-SKY-PEN5",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Cock Brand",
      "Penta Flash"
    ],
    "stockQuantity": 110,
    "trackInventory": true
  },
  {
    "id": "supreme-kit-kat-multi-colour-aerial-sky-shots",
    "handle": "supreme-kit-kat-multi-colour-aerial-sky-shots",
    "title": "Supreme Kit Kat Multi-Colour Aerial Sky Shots",
    "subtitle": "Supreme Pyrotechnics · Cascading Multi-Color Starbursts with Crackling Chrysanthemum",
    "price": 820,
    "originalPrice": 1350,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 38,
    "weight": "1 Cake",
    "weights": [
      "1 Cake"
    ],
    "image": "/assets/shop-84/skyshort-820rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/skyshort-820rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Supreme Sivakasi",
    "caffeine": "Cascading Colors",
    "inStock": true,
    "description": "Supreme Pyrotechnics Kit Kat celebration cake. Discharges lively aerial stars that cascade across the night sky in bright festive colors.",
    "variants": [
      {
        "sku": "S84-SKY-KIT",
        "name": "1 Cake",
        "price": 820,
        "compareAtPrice": 1350
      }
    ],
    "status": "active",
    "sku": "S84-SKY-KIT",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Kit Kat",
      "Supreme"
    ],
    "stockQuantity": 95,
    "trackInventory": true
  },
  {
    "id": "mugunth-akilas-3-sound-rockets-pack",
    "handle": "mugunth-akilas-3-sound-rockets-pack",
    "title": "Mugunth Akila's 3-Sound Rocket (Pack of 10)",
    "subtitle": "Triple Sound Stage Aerial Rockets · High Altitude Whistle & 3 Crisp Loud Bangs",
    "price": 389,
    "originalPrice": 650,
    "discount": 40,
    "rating": 4.9,
    "reviewsCount": 53,
    "weight": "1 Box (10 Rockets)",
    "weights": [
      "1 Box (10 Rockets)"
    ],
    "image": "/assets/shop-84/sound-rokate-389rs-part-1-img.webp",
    "secondaryImage": "/assets/burst/rocket-launch-1.webp",
    "galleryImages": [
      "/assets/shop-84/sound-rokate-389rs-part-1-img.webp",
      "/assets/shop-84/sound-rokate-389rs-part-2-img.webp",
      "/assets/burst/rocket-launch-1.webp",
      "/assets/burst/sky-burst-1.webp"
    ],
    "category": "rockets",
    "format": "Sound Rockets",
    "region": "Mugunth Sivakasi",
    "caffeine": "Triple Sound Bangs",
    "inStock": true,
    "description": "Mugunth Akila's 3-sound sky rockets. Shoots swiftly skyward with a loud ascending whistle and detonates into three distinct, powerful cracking sound stages.",
    "variants": [
      {
        "sku": "S84-RCK-3S",
        "name": "1 Box (10 Rockets)",
        "price": 389,
        "compareAtPrice": 650
      }
    ],
    "status": "active",
    "sku": "S84-RCK-3S",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Rockets",
      "Sound Rockets",
      "3 Sound",
      "Mugunth"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "the-aruna-rim-zim-deluxe-twinklings-sparklers-50cm",
    "handle": "the-aruna-rim-zim-deluxe-twinklings-sparklers-50cm",
    "title": "The Aruna Rim-Zim Deluxe Twinklings Sparklers (50cm, 10 Pcs)",
    "subtitle": "Extra Long 50cm Giant Sparklers with Beautiful Twinkling Silver & Gold Stars",
    "price": 130,
    "originalPrice": 220,
    "discount": 41,
    "rating": 4.9,
    "reviewsCount": 67,
    "weight": "1 Pack (10 Pcs)",
    "weights": [
      "1 Pack (10 Pcs)",
      "Pack of 3 Packs"
    ],
    "image": "/assets/shop-84/spakrial-130rs-part-2-img.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/spakrial-130rs-part-2-img.webp",
      "/assets/shop-84/spakrial-130rs-part-1-img.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "50cm Giant Sparklers",
    "region": "The Aruna Fireworks Sivakasi",
    "caffeine": "Long Burning Twinkles",
    "inStock": true,
    "description": "The Aruna Fireworks 50cm Rim-Zim Deluxe Twinklings giant sparklers. Extra long burn time with thousands of sparkling golden twinkling stars, perfect for photography and Diwali joy.",
    "variants": [
      {
        "sku": "S84-SPK-RIM",
        "name": "1 Pack (10 Pcs)",
        "price": 130,
        "compareAtPrice": 220
      },
      {
        "sku": "S84-SPK-RIM-3",
        "name": "Pack of 3 Packs",
        "price": 370,
        "compareAtPrice": 660
      }
    ],
    "status": "active",
    "sku": "S84-SPK-RIM",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "50cm Sparklers",
      "Rim Zim",
      "The Aruna Fireworks"
    ],
    "stockQuantity": 200,
    "trackInventory": true
  },
  {
    "id": "cock-brand-olympic-torches-40cm-pencil-sparklers",
    "handle": "cock-brand-olympic-torches-40cm-pencil-sparklers",
    "title": "Cock Brand Olympic Torches 40cm Pencil Sparklers",
    "subtitle": "Sri Kaliswari Fireworks · 40cm Multi-Colour Flame Handheld Torches",
    "price": 394,
    "originalPrice": 650,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 46,
    "weight": "1 Pack (10 Pcs)",
    "weights": [
      "1 Pack (10 Pcs)"
    ],
    "image": "/assets/shop-84/sparckale-394.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/sparckale-394.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "40cm Torch Sparklers",
    "region": "Cock Brand Sivakasi",
    "caffeine": "Olympic Multi-Colour",
    "inStock": true,
    "description": "Sri Kaliswari Fireworks Cock Brand Olympic Torches. 40cm pencil torches with vivid multi-colour flame changes and sparkling silver aura.",
    "variants": [
      {
        "sku": "S84-SPK-OLY",
        "name": "1 Pack (10 Pcs)",
        "price": 394,
        "compareAtPrice": 650
      }
    ],
    "status": "active",
    "sku": "S84-SPK-OLY",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Pencil Torches",
      "Olympic Torches",
      "Cock Brand"
    ],
    "stockQuantity": 110,
    "trackInventory": true
  },
  {
    "id": "akash-ganga-super-4-colour-light-sparklers",
    "handle": "akash-ganga-super-4-colour-light-sparklers",
    "title": "Akash Ganga Super 4-Colour Light Sparklers",
    "subtitle": "Akash Ganga Brand · Radiant 4-Color Changing Hand Sparklers",
    "price": 344,
    "originalPrice": 550,
    "discount": 37,
    "rating": 4.8,
    "reviewsCount": 39,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/sparkale-344rs.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/sparkale-344rs.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "Colour Sparklers",
    "region": "Akash Ganga Sivakasi",
    "caffeine": "4 Shifting Colours",
    "inStock": true,
    "description": "Akash Ganga Super 4-Colour light sparklers. Displays four consecutive shifting flame colours—green, red, yellow, and silvery gold.",
    "variants": [
      {
        "sku": "S84-SPK-AKG",
        "name": "1 Box (10 Pcs)",
        "price": 344,
        "compareAtPrice": 550
      }
    ],
    "status": "active",
    "sku": "S84-SPK-AKG",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Colour Sparklers",
      "Akash Ganga"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "sree-kaliammal-15cm-green-sparklers",
    "handle": "sree-kaliammal-15cm-green-sparklers",
    "title": "Sree Kaliammal 15cm Green Sparklers",
    "subtitle": "15cm Vibrant Emerald Green Sparkling Flames · Low Smoke Child Friendly",
    "price": 85,
    "originalPrice": 140,
    "discount": 39,
    "rating": 4.8,
    "reviewsCount": 54,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)",
      "Pack of 5 Boxes"
    ],
    "image": "/assets/shop-84/sparkale-85rs.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/sparkale-85rs.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "15cm Sparklers",
    "region": "Sree Kaliammal Sivakasi",
    "caffeine": "Emerald Green Sparks",
    "inStock": true,
    "description": "Sree Kaliammal Sparklers 15cm green sparklers. Emits a clean, bright emerald green light shower with minimal smoke, safe for celebrations.",
    "variants": [
      {
        "sku": "S84-SPK-GRN15",
        "name": "1 Box (10 Pcs)",
        "price": 85,
        "compareAtPrice": 140
      },
      {
        "sku": "S84-SPK-GRN15-5",
        "name": "Pack of 5 Boxes",
        "price": 399,
        "compareAtPrice": 700
      }
    ],
    "status": "active",
    "sku": "S84-SPK-GRN15",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Green Sparklers",
      "15cm",
      "Sree Kaliammal"
    ],
    "stockQuantity": 180,
    "trackInventory": true
  },
  {
    "id": "sree-kaliammal-30cm-crackling-sparklers",
    "handle": "sree-kaliammal-30cm-crackling-sparklers",
    "title": "Sree Kaliammal 30cm Crackling Sparklers",
    "subtitle": "30cm Long Sparkling Wands · Energetic Crackling Sparks & Bright Golden Light",
    "price": 110,
    "originalPrice": 180,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 62,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)",
      "Pack of 3 Boxes"
    ],
    "image": "/assets/shop-84/sparkele-110rs.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/sparkele-110rs.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "30cm Sparklers",
    "region": "Sree Kaliammal Sivakasi",
    "caffeine": "Crackling Gold Sparks",
    "inStock": true,
    "description": "Sree Kaliammal 30cm crackling sparklers. Long burning sparkler rods bursting with popping crackles and radiant golden sparks.",
    "variants": [
      {
        "sku": "S84-SPK-CRK30",
        "name": "1 Box (10 Pcs)",
        "price": 110,
        "compareAtPrice": 180
      },
      {
        "sku": "S84-SPK-CRK30-3",
        "name": "Pack of 3 Boxes",
        "price": 310,
        "compareAtPrice": 540
      }
    ],
    "status": "active",
    "sku": "S84-SPK-CRK30",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Crackling Sparklers",
      "30cm",
      "Sree Kaliammal"
    ],
    "stockQuantity": 170,
    "trackInventory": true
  },
  {
    "id": "sree-kaliswari-7cm-electric-sparklers",
    "handle": "sree-kaliswari-7cm-electric-sparklers",
    "title": "Sree Kaliswari 7cm Electric Sparklers",
    "subtitle": "7cm Safe Electric Sparklers with Quick Golden Sparkle · Ideal for Young Children",
    "price": 35,
    "originalPrice": 60,
    "discount": 42,
    "rating": 4.8,
    "reviewsCount": 44,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)",
      "Pack of 5 Boxes"
    ],
    "image": "/assets/shop-84/sparkele-35rs.webp",
    "secondaryImage": "/assets/burst/sparkler-glow-1.webp",
    "galleryImages": [
      "/assets/shop-84/sparkele-35rs.webp",
      "/assets/burst/sparkler-glow-1.webp",
      "/assets/burst/sparkler-glow-2.webp"
    ],
    "category": "sparklers",
    "format": "7cm Electric Sparklers",
    "region": "Sree Kaliswari Sivakasi",
    "caffeine": "Little Kids Safe",
    "inStock": true,
    "description": "Sree Kaliswari 7cm small electric sparklers. Fast lighting, child-safe, and generates fine golden electric sparks with very low heat and smoke.",
    "variants": [
      {
        "sku": "S84-SPK-ELE7",
        "name": "1 Box (10 Pcs)",
        "price": 35,
        "compareAtPrice": 60
      },
      {
        "sku": "S84-SPK-ELE7-5",
        "name": "Pack of 5 Boxes",
        "price": 160,
        "compareAtPrice": 300
      }
    ],
    "status": "active",
    "sku": "S84-SPK-ELE7",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Sparklers",
      "Electric Sparklers",
      "7cm",
      "Kids Safe"
    ],
    "stockQuantity": 250,
    "trackInventory": true
  },
  {
    "id": "supreme-spinner-queen-deluxe-ground-chakkar",
    "handle": "supreme-spinner-queen-deluxe-ground-chakkar",
    "title": "Supreme Spinner Queen Deluxe Ground Chakkar",
    "subtitle": "Supreme Fireworks · Fast High-Speed Ground Spinner with Purple & Golden Fire Ring",
    "price": 349,
    "originalPrice": 550,
    "discount": 37,
    "rating": 4.8,
    "reviewsCount": 39,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/spinner-349rs.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/shop-84/spinner-349rs.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Supreme Sivakasi",
    "caffeine": "Queen Deluxe Spin",
    "inStock": true,
    "description": "Supreme Fireworks Queen Deluxe ground chakkars. Spins at high rotational speed creating a wide radiant wheel of purple, white, and golden sparks.",
    "variants": [
      {
        "sku": "S84-CHK-QUN",
        "name": "1 Box (10 Pcs)",
        "price": 349,
        "compareAtPrice": 550
      }
    ],
    "status": "active",
    "sku": "S84-CHK-QUN",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Chakkar",
      "Chorki",
      "Ground Spinner",
      "Supreme"
    ],
    "stockQuantity": 130,
    "trackInventory": true
  },
  {
    "id": "elephant-hot-wheels-special-ground-spinner-chakkar",
    "handle": "elephant-hot-wheels-special-ground-spinner-chakkar",
    "title": "Elephant Hot Wheels Special Ground Spinner Chakkar",
    "subtitle": "Elephant Brand · High-Torque Ground Chorki with Vibrant Dual-Tone Fire Ring",
    "price": 389,
    "originalPrice": 650,
    "discount": 40,
    "rating": 4.9,
    "reviewsCount": 42,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/spinner-389rs.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/shop-84/spinner-389rs.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Elephant Sivakasi",
    "caffeine": "Hot Wheels Spin",
    "inStock": true,
    "description": "Elephant Brand Hot Wheels Special ground spinner chakkars. High-velocity spin producing a dense fiery halo with crackling edges.",
    "variants": [
      {
        "sku": "S84-CHK-HWSP",
        "name": "1 Box (10 Pcs)",
        "price": 389,
        "compareAtPrice": 650
      }
    ],
    "status": "active",
    "sku": "S84-CHK-HWSP",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Chakkar",
      "Hot Wheels",
      "Ground Spinner",
      "Elephant Brand"
    ],
    "stockQuantity": 140,
    "trackInventory": true
  },
  {
    "id": "supreme-spinner-super-deluxe-ground-chakkar",
    "handle": "supreme-spinner-super-deluxe-ground-chakkar",
    "title": "Supreme Spinner Super Deluxe Ground Chakkar",
    "subtitle": "Supreme Fireworks · Jumbo Size Chakkar with Large Diameter Sparkling Halo",
    "price": 448,
    "originalPrice": 720,
    "discount": 38,
    "rating": 4.9,
    "reviewsCount": 47,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/spinner-448rs.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/shop-84/spinner-448rs.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Supreme Sivakasi",
    "caffeine": "Super Deluxe Ring",
    "inStock": true,
    "description": "Supreme Fireworks Super Deluxe large ground chakkars. Extended diameter spin with multi-colour sparkling trails.",
    "variants": [
      {
        "sku": "S84-CHK-SDX",
        "name": "1 Box (10 Pcs)",
        "price": 448,
        "compareAtPrice": 720
      }
    ],
    "status": "active",
    "sku": "S84-CHK-SDX",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Chakkar",
      "Super Deluxe",
      "Ground Spinner",
      "Supreme"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  },
  {
    "id": "vadivel-whistling-dixie-ground-spinner-chakkar",
    "handle": "vadivel-whistling-dixie-ground-spinner-chakkar",
    "title": "Vadivel Whistling Dixie Ground Spinner Chakkar",
    "subtitle": "Vadivel Pyrotechs · High-Pitched Whistling Sound with Dizzying Fiery Spin",
    "price": 500,
    "originalPrice": 800,
    "discount": 38,
    "rating": 5,
    "reviewsCount": 51,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/spinner-500rs.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/shop-84/spinner-500rs.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Whistling Spinner",
    "region": "Vadivel Pyrotechs Sivakasi",
    "caffeine": "Whistling Fire Spin",
    "inStock": true,
    "description": "Vadivel Pyrotechs Whistling Dixie chakkars. Emits a high-pitched siren whistle while whirling frantically on the ground with orange and gold fire plumes.",
    "variants": [
      {
        "sku": "S84-CHK-WDIX",
        "name": "1 Box (10 Pcs)",
        "price": 500,
        "compareAtPrice": 800
      }
    ],
    "status": "active",
    "sku": "S84-CHK-WDIX",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Chakkar",
      "Whistling Chakkar",
      "Vadivel"
    ],
    "stockQuantity": 110,
    "trackInventory": true
  },
  {
    "id": "elephant-hot-wheels-deluxe-ground-spinner-chakkar",
    "handle": "elephant-hot-wheels-deluxe-ground-spinner-chakkar",
    "title": "Elephant Hot Wheels Deluxe Ground Spinner Chakkar (Jumbo Pack)",
    "subtitle": "Elephant Brand · Extra Heavy Deluxe Ground Chakkars with Extended Spin Time",
    "price": 549,
    "originalPrice": 900,
    "discount": 39,
    "rating": 4.9,
    "reviewsCount": 56,
    "weight": "1 Box (10 Pcs)",
    "weights": [
      "1 Box (10 Pcs)"
    ],
    "image": "/assets/shop-84/spinner-549rs.webp",
    "secondaryImage": "/assets/burst/chakkar-spin-1.webp",
    "galleryImages": [
      "/assets/shop-84/spinner-549rs.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Jumbo Ground Spinner",
    "region": "Elephant Sivakasi",
    "caffeine": "Extended Duration",
    "inStock": true,
    "description": "Elephant Brand Hot Wheels Deluxe Jumbo chakkars. Heavy-duty construction providing long-lasting whirls and wide diameter sparkling sparks.",
    "variants": [
      {
        "sku": "S84-CHK-HWDX",
        "name": "1 Box (10 Pcs)",
        "price": 549,
        "compareAtPrice": 900
      }
    ],
    "status": "active",
    "sku": "S84-CHK-HWDX",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Chakkar",
      "Hot Wheels Deluxe",
      "Jumbo Spinner",
      "Elephant Brand"
    ],
    "stockQuantity": 100,
    "trackInventory": true
  },
  {
    "id": "karthik-fireworks-toofan-rocky-30-shots-aerial-cake",
    "handle": "karthik-fireworks-toofan-rocky-30-shots-aerial-cake",
    "title": "Karthik Fireworks Toofan Rocky 30 Shots Aerial Cake",
    "subtitle": "30 High-Altitude Sky Bursts with Powerful Sound & Radiant Golden Palms",
    "price": 1300,
    "originalPrice": 2100,
    "discount": 38,
    "rating": 4.9,
    "reviewsCount": 48,
    "weight": "1 Cake (30 Shots)",
    "weights": [
      "1 Cake (30 Shots)"
    ],
    "image": "/assets/shop-84/toofan-rocky-30short-sky-short-1300rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-84/toofan-rocky-30short-sky-short-1300rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Karthik Fireworks Sivakasi",
    "caffeine": "30 Thunderous Shots",
    "inStock": true,
    "description": "Karthik Fireworks Toofan Rocky 30-shot repeater cake. Rapidly fires 30 sky bursts that erupt into glittering golden palms, flashing green pearls, and resounding acoustic thumps.",
    "variants": [
      {
        "sku": "S84-SKY-TOF30",
        "name": "1 Cake (30 Shots)",
        "price": 1300,
        "compareAtPrice": 2100
      }
    ],
    "status": "active",
    "sku": "S84-SKY-TOF30",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Aerial Shots",
      "Sky Shots",
      "Toofan Rocky",
      "30 Shots",
      "Karthik Fireworks"
    ],
    "stockQuantity": 85,
    "trackInventory": true
  },
  {
    "id": "om-ganapathi-special-tower-flower-pots",
    "handle": "om-ganapathi-special-tower-flower-pots",
    "title": "Om Ganapathi Special Tower Flower Pots (10 Pcs Box)",
    "subtitle": "Om Ganapathi Brand · Tower Style Vertical Golden Sparkling Fountains",
    "price": 290,
    "originalPrice": 480,
    "discount": 40,
    "rating": 4.8,
    "reviewsCount": 43,
    "weight": "1 Box (10 Cones)",
    "weights": [
      "1 Box (10 Cones)",
      "Pack of 2 Boxes"
    ],
    "image": "/assets/shop-84/touerpots-290rs-10pic.webp",
    "secondaryImage": "/assets/burst/anar-fountain-1.webp",
    "galleryImages": [
      "/assets/shop-84/touerpots-290rs-10pic.webp",
      "/assets/burst/anar-fountain-1.webp",
      "/assets/burst/anar-fountain-2.webp"
    ],
    "category": "flower-pots",
    "format": "Tower Cones",
    "region": "Om Ganapathi Sivakasi",
    "caffeine": "Vertical Tower Geyser",
    "inStock": true,
    "description": "Om Ganapathi Special Tower Flower Pots box of 10 cones. Shoots high vertical columns of glittering gold and silver sparks with calm, stable burning.",
    "variants": [
      {
        "sku": "S84-POT-TOW10",
        "name": "1 Box (10 Cones)",
        "price": 290,
        "compareAtPrice": 480
      },
      {
        "sku": "S84-POT-TOW10-2",
        "name": "Pack of 2 Boxes",
        "price": 550,
        "compareAtPrice": 960
      }
    ],
    "status": "active",
    "sku": "S84-POT-TOW10",
    "vendor": "Shop 84",
    "tags": [
      "Shop 84",
      "Flower Pots",
      "Anar",
      "Tower Pots",
      "Om Ganapathi"
    ],
    "stockQuantity": 140,
    "trackInventory": true
  }
,
  {
    "id": "deluxe-cracking-chain-sound-ladi",
    "handle": "deluxe-cracking-chain-sound-ladi",
    "title": "Classic Deluxe Sivakasi Cracking Chain Sound Ladi",
    "subtitle": "Rapid Cracking Garland Sound Chain · Fiery Flashes & Loud Festive Bang",
    "price": 50,
    "originalPrice": 80,
    "discount": 38,
    "rating": 4.8,
    "reviewsCount": 86,
    "weight": "1 Single Chain",
    "weights": [
      "1 Single Chain",
      "Full Box of 10 Chains"
    ],
    "image": "/assets/shop-77/chain-50rs-1pic-packed-450rs.webp",
    "secondaryImage": "/assets/shop-77/chain-50rs-1pic-packed-450rs-part-2.webp",
    "galleryImages": [
      "/assets/shop-77/chain-50rs-1pic-packed-450rs.webp",
      "/assets/shop-77/chain-50rs-1pic-packed-450rs-part-2.webp",
      "/assets/burst/sound-ladi-1.webp"
    ],
    "category": "sound-crackers",
    "format": "Sound Ladi / Cracker Chain",
    "region": "Sivakasi Quality",
    "caffeine": "Rapid Cracking",
    "inStock": true,
    "description": "Traditional Sivakasi red paper cracking sound chain (ladi) delivering high-speed rhythmic pops, bright fiery flashes, and loud festive sound. Can be purchased individually or as a complete value box of 10 chains.",
    "variants": [
      {
        "sku": "S77-CHN-1",
        "name": "1 Single Chain",
        "price": 50,
        "compareAtPrice": 80
      },
      {
        "sku": "S77-CHN-10",
        "name": "Full Box of 10 Chains",
        "price": 450,
        "compareAtPrice": 750
      }
    ],
    "status": "active",
    "sku": "S77-CHN-1",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Sound Crackers",
      "Ladi",
      "Cracker Chain",
      "Diwali Sound"
    ],
    "stockQuantity": 150,
    "trackInventory": true
  }
,
  {
    "id": "coronation-bee-cee-deluxe-chit-put",
    "handle": "coronation-bee-cee-deluxe-chit-put",
    "title": "Coronation Bee Cee Deluxe Chit Put Magic Pop-Pop Box",
    "subtitle": "Child-Safe Instant Ground Snappers · No Matchstick or Fire Required",
    "price": 200,
    "originalPrice": 320,
    "discount": 38,
    "rating": 4.9,
    "reviewsCount": 114,
    "weight": "1 Mega Box",
    "weights": [
      "1 Mega Box",
      "Pack of 2 Boxes"
    ],
    "image": "/assets/shop-77/coronation-chit-put-200rs.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/shop-77/coronation-chit-put-200rs.webp",
      "/assets/burst/kids-fun-1.webp"
    ],
    "category": "kids-special",
    "format": "Pop-Pop Snappers",
    "region": "Coronation Sivakasi",
    "caffeine": "Child-Safe Snappers",
    "inStock": true,
    "description": "Coronation Bee Cee authentic Sivakasi Chit Put magic pop-pop snappers. Safe, fun crackling pellets that pop instantly on ground impact without any flame, fire, or lighter. 100% child-safe Diwali fun.",
    "variants": [
      {
        "sku": "S77-CP-200",
        "name": "1 Mega Box",
        "price": 200,
        "compareAtPrice": 320
      },
      {
        "sku": "S77-CP-200-2",
        "name": "Pack of 2 Boxes",
        "price": 380,
        "compareAtPrice": 640
      }
    ],
    "status": "active",
    "sku": "S77-CP-200",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Kids Special",
      "Chit Put",
      "Pop Pop",
      "Coronation",
      "Safe Crackers"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  }
,
  {
    "id": "puja-traders-festive-chut-put-box",
    "handle": "puja-traders-festive-chut-put-box",
    "title": "Puja Traders Special Festive Chut Put Snapper Pellets Box",
    "subtitle": "Deluxe Crackling Pop-Pop Snappers · Instant Impact Pops for Family Fun",
    "price": 170,
    "originalPrice": 270,
    "discount": 37,
    "rating": 4.7,
    "reviewsCount": 72,
    "weight": "1 Box",
    "weights": [
      "1 Box",
      "Pack of 2 Boxes"
    ],
    "image": "/assets/shop-77/puja-chut-put-170rs.webp",
    "secondaryImage": "/assets/burst/kids-fun-1.webp",
    "galleryImages": [
      "/assets/shop-77/puja-chut-put-170rs.webp",
      "/assets/burst/kids-fun-1.webp"
    ],
    "category": "kids-special",
    "format": "Pop-Pop Snappers",
    "region": "Puja Traders Sivakasi",
    "caffeine": "Pop-Pop Crackle",
    "inStock": true,
    "description": "Puja Traders Sivakasi festive Chut Put snappers. Simply drop, step, or toss gently onto pavement to enjoy crisp crackling pops. Completely smokeless and sparkless, ideal for young children and playful celebrations.",
    "variants": [
      {
        "sku": "S77-CP-170",
        "name": "1 Box",
        "price": 170,
        "compareAtPrice": 270
      },
      {
        "sku": "S77-CP-170-2",
        "name": "Pack of 2 Boxes",
        "price": 320,
        "compareAtPrice": 540
      }
    ],
    "status": "active",
    "sku": "S77-CP-170",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Kids Special",
      "Chut Put",
      "Puja Traders",
      "Snappers"
    ],
    "stockQuantity": 120,
    "trackInventory": true
  }
,
  {
    "id": "kuil-deluxe-wonder-colour-tops",
    "handle": "kuil-deluxe-wonder-colour-tops",
    "title": "Kuil Fireworks Deluxe Wonder Colour Spinning Tops (Box of 10)",
    "subtitle": "High-Speed Ground Gyroscope Spinners with Radiant Multi-Colour Halos",
    "price": 350,
    "originalPrice": 550,
    "discount": 36,
    "rating": 4.8,
    "reviewsCount": 64,
    "weight": "Pack of 10 Pcs",
    "weights": [
      "Pack of 10 Pcs",
      "Pack of 20 Pcs"
    ],
    "image": "/assets/shop-77/kuil-deluxe-colour-tops-350rs.webp",
    "secondaryImage": "/assets/shop-77/kuil-deluxe-colour-tops-350rs-part-2.webp",
    "galleryImages": [
      "/assets/shop-77/kuil-deluxe-colour-tops-350rs.webp",
      "/assets/shop-77/kuil-deluxe-colour-tops-350rs-part-2.webp",
      "/assets/burst/chakkar-spin-1.webp",
      "/assets/burst/chakkar-spin-2.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner / Tops",
    "region": "Kuil Sivakasi",
    "caffeine": "High-Speed Luminous Spin",
    "inStock": true,
    "description": "Kuil Fireworks Industries Thayilpatti Sivakasi deluxe Wonder Colour Spinning Tops. Upon ignition, spins vigorously like a gyroscope across the ground throwing intense rings of red, emerald green, and golden crackling sparks.",
    "variants": [
      {
        "sku": "S77-TOP-10",
        "name": "Pack of 10 Pcs",
        "price": 350,
        "compareAtPrice": 550
      },
      {
        "sku": "S77-TOP-20",
        "name": "Pack of 20 Pcs",
        "price": 660,
        "compareAtPrice": 1100
      }
    ],
    "status": "active",
    "sku": "S77-TOP-10",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Ground Chakkars",
      "Kuil Fireworks",
      "Spinning Tops",
      "Chorki"
    ],
    "stockQuantity": 100,
    "trackInventory": true
  }
,
  {
    "id": "gokul-crystal-night-28-shots-cake",
    "handle": "gokul-crystal-night-28-shots-cake",
    "title": "Gokul Crystal Night 28 Shots Multi-Colour Aerial Cake",
    "subtitle": "28 High Altitude Multi-Colour Aerial Bursts · Cascading Brocade Finale",
    "price": 1000,
    "originalPrice": 1800,
    "discount": 44,
    "rating": 4.9,
    "reviewsCount": 142,
    "weight": "1 Cake (28 Shots)",
    "weights": [
      "1 Cake (28 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/shop-77/gokul-crystal-night-skyshort-1000rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-77/gokul-crystal-night-skyshort-1000rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Gokul Sivakasi",
    "caffeine": "28 Sky Bursts",
    "inStock": true,
    "description": "Gokul Fireworks Sivakasi 28-shot Crystal Night multi-colour aerial repeater cake. Launches high into the night sky bursting into golden brocade waterfalls, emerald palms, and crackling crimson chrysanthemums with a grand multi-shot finale.",
    "variants": [
      {
        "sku": "S77-SKY-28",
        "name": "1 Cake (28 Shots)",
        "price": 1000,
        "compareAtPrice": 1800
      },
      {
        "sku": "S77-SKY-28-2",
        "name": "Pack of 2 Cakes",
        "price": 1900,
        "compareAtPrice": 3600
      }
    ],
    "status": "active",
    "sku": "S77-SKY-28",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Aerial Shots",
      "Sky Shots",
      "Gokul Fireworks",
      "Crystal Night",
      "28 Shots"
    ],
    "stockQuantity": 80,
    "trackInventory": true
  }
,
  {
    "id": "sri-krishna-ping-pong-giant-shells",
    "handle": "sri-krishna-ping-pong-giant-shells",
    "title": "Sri Krishna Ping Pong Giant Aerial Shells (Pack of 2 Shells)",
    "subtitle": "Mega High-Altitude Aerial Shells with Launch Sticks · Massive Golden Willow Palm",
    "price": 1500,
    "originalPrice": 2600,
    "discount": 42,
    "rating": 4.9,
    "reviewsCount": 98,
    "weight": "Pack of 2 Shells",
    "weights": [
      "Pack of 2 Shells",
      "Pack of 4 Shells"
    ],
    "image": "/assets/shop-77/sri-krishna-ping-pong-skyshort-1500rs.webp",
    "secondaryImage": "/assets/burst/sky-burst-1.webp",
    "galleryImages": [
      "/assets/shop-77/sri-krishna-ping-pong-skyshort-1500rs.webp",
      "/assets/burst/sky-burst-1.webp",
      "/assets/burst/sky-burst-2.webp",
      "/assets/burst/sky-burst-3.webp"
    ],
    "category": "aerial-shots",
    "format": "Aerial Shell / Sky Shot",
    "region": "Karthik Sivakasi",
    "caffeine": "Giant Aerial Shells",
    "inStock": true,
    "description": "Karthik Fireworks / Sri Krishna brand Ping Pong 2-piece giant aerial shells with launch sticks. High-altitude professional shells that soar deep into the midnight sky and explode into massive cascading golden willows and vibrant ruby peonies.",
    "variants": [
      {
        "sku": "S77-PNG-2",
        "name": "Pack of 2 Shells",
        "price": 1500,
        "compareAtPrice": 2600
      },
      {
        "sku": "S77-PNG-4",
        "name": "Pack of 4 Shells",
        "price": 2850,
        "compareAtPrice": 5200
      }
    ],
    "status": "active",
    "sku": "S77-PNG-2",
    "vendor": "Shop 77",
    "tags": [
      "Shop 77",
      "Aerial Shots",
      "Sky Shots",
      "Sri Krishna",
      "Karthik Fireworks",
      "Ping Pong"
    ],
    "stockQuantity": 60,
    "trackInventory": true
  }
];

export const COLLECTIONS = [
  { id: "all", name: "All Collection", seoTitle: "All Diwali Crackers & Gift Hampers in Siliguri", description: "Buy Diwali crackers, gift hampers, lights and diyas online in Siliguri. Same-day or next-day delivery, free lighter, ₹2,000 minimum order.", seoText: "Siliguri Pataka brings everything for Diwali and Kali Puja into one shop: crackers, gift hampers, rangoli colours, lights and diyas. Order from Sevoke Road, Hill Cart Road, Pradhan Nagar, Champasari or anywhere else in Siliguri, and we deliver the same day or the next day.", guide: "buy-diwali-crackers-online-siliguri" },
  { id: "mega-packs", name: "Mega Packs", seoTitle: "Mega Cracker Packs Online in Siliguri: ₹2,499 to ₹9,999", description: "Our 3 mega cracker packs for Diwali in Siliguri. Save up to ₹3,601 compared with buying the items separately. Same-day or next-day delivery, 1 lighter free.", seoText: "A mega pack is the easiest way to buy crackers for Diwali in Siliguri: you get sparklers, flower pots, chakkars, rockets and sky shots at one price, for less than buying them one by one. Compare all 3 packs, and choose the one that suits your family and your space.", guide: "best-cracker-combos-siliguri-budget" },
  { id: "sparklers", name: "Sparklers (Phuljhari)", seoTitle: "Sparklers (Phuljhari) Online in Siliguri", description: "Phuljhari and colour sparklers for the whole family. Order online and get them delivered anywhere in Siliguri the same day or the next day.", seoText: "Sparklers, called phuljhari or phuljhadi at home, are the first thing most families in Siliguri light on Diwali evening. Keep a bucket of water nearby for the used sticks, and keep children with an adult.", guide: "diwali-cracker-safety-guide" },
  { id: "flower-pots", name: "Flower Pots (Anar / Tubri)", seoTitle: "Flower Pots (Anar / Tubri) Online in Siliguri", description: "Anar and tubri flower pots that light up your courtyard or terrace with tall fountains of sparks. Same-day or next-day delivery in Siliguri.", seoText: "Flower pots are called anar in Hindi and tubri in Bengali. Light them on flat, open ground, step back straight away and never lean over one.", guide: "which-crackers-to-buy-diwali" },
  { id: "ground-chakkars", name: "Ground Chakkars (Chorki)", seoTitle: "Ground Chakkars (Chorki) Online in Siliguri", description: "Ground chakkars and chorki spinners for Diwali and Kali Puja nights. Order online for home delivery in Siliguri.", seoText: "Ground chakkars, or chorki, spin across the floor in a ring of sparks. They need a flat, clear surface, so a courtyard or an open terrace works best.", guide: "which-crackers-to-buy-diwali" },
  { id: "rockets", name: "Rockets (Hawai)", seoTitle: "Diwali Rockets (Hawai) Online in Siliguri", description: "Whistling rockets and hawai for open terraces and grounds. Order online for same-day or next-day delivery within Siliguri.", seoText: "Rockets, or hawai, need an open sky, so choose a terrace or a ground away from wires, trees and neighbouring buildings. Stand them in an empty bottle or a stand before lighting.", guide: "diwali-cracker-safety-guide" },
  { id: "aerial-shots", name: "Aerial Shots & Sky Cakes", seoTitle: "Aerial Shots & Sky Cakes Online in Siliguri", description: "Multi-shot sky cakes that turn your terrace into a fireworks show, from 30-shot cakes to grand finales. Delivered within Siliguri.", seoText: "Sky shots make a big finish for your Diwali night. Place the cake on flat, firm ground in an open space, light it once and move well back.", guide: "best-cracker-combos-siliguri-budget" },
  { id: "sound-crackers", name: "Sound Crackers", seoTitle: "Sound Crackers Online in Siliguri", description: "Traditional sound crackers for Diwali and Kali Puja in Siliguri. Please follow the timings and rules set by local authorities.", seoText: "Please check the rules before you buy or burst sound crackers. West Bengal has allowed only green crackers in recent years, within fixed hours on Diwali and Kali Puja night.", guide: "green-crackers-west-bengal-rules" },
  { id: "kids-special", name: "Kids Special", seoTitle: "Kids Crackers for Diwali in Siliguri", description: "Pop pops, magic snakes and colour smoke for children, always to be used with an adult nearby. Delivered within Siliguri.", seoText: "Even small crackers need an adult nearby. Choose an open space, keep water ready, and make sure children wear cotton clothes and closed footwear.", guide: "diwali-cracker-safety-guide" },
    { id: "gift-hampers", name: "Gift Hampers", seoTitle: "Diwali Gift Hampers Online in Siliguri", description: "Ready-to-gift Diwali hampers with diyas, decor and puja essentials for family, friends, staff and clients in Siliguri.", seoText: "A Diwali gift hamper saves you a trip to the market. Choose from diya hampers, puja hampers, crackers with diyas and office gift boxes, with delivery across Siliguri.", guide: "diwali-gift-hampers-siliguri" },
  { id: "diyas-decor", name: "Rangoli, Diyas & Decor", seoTitle: "Rangoli Colours, Diyas & Diwali Decor in Siliguri", description: "Rangoli colours, clay diyas, candles, marigold torans and puja thalis to get your home ready for Diwali in Siliguri.", seoText: "A little rangoli at the door, a marigold toran and a row of clay diyas are all you need to make your home feel festive. Order them with your crackers and get one delivery.", guide: "rangoli-diwali-decoration-ideas" },
  { id: "home-decor", name: "Diwali Home Decor", seoTitle: "Diwali Lights, Lanterns & Diyas for Home in Siliguri", description: "Diwali string lights, paper lanterns, brass diyas, floating diyas and tea light holders to light up your home in Siliguri.", seoText: "Lights and diyas are what make a home feel like Diwali. Start with string lights and a lantern for the outside of your home, then add brass diyas and tea lights inside. All of it can go in the same order as your crackers and gift hampers, with delivery the same day or the next day within Siliguri.", guide: "diwali-home-decor-ideas-siliguri" },
];
