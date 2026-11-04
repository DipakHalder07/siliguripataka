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
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/ck-cake-30.webp",
      "/assets/action-sky.webp",
      "/assets/photo-sky-burst.webp",
      "/assets/photo-sky-gold.webp",
      "/assets/photo-sky-town.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude Colors",
    "badge": "✨ DAZZLING SKY SHOT",
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
    "secondaryImage": "/assets/action-anar.webp",
    "galleryImages": [
      "/assets/ck-anar-tricolor.webp",
      "/assets/action-anar.webp",
      "/assets/photo-anar-gold.webp",
      "/assets/photo-anar-tall.webp",
      "/assets/ck-anar-jumbo.webp"
    ],
    "category": "flower-pots",
    "format": "Anar / Flower Pot",
    "region": "Sivakasi Quality",
    "caffeine": "Low Smoke & High Sparks",
    "badge": "🌟 FESTIVE FAVORITE",
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
    "secondaryImage": "/assets/action-sparkler.webp",
    "galleryImages": [
      "/assets/ck-sparkler-gold.webp",
      "/assets/action-sparkler.webp",
      "/assets/photo-sparkler-hand.webp",
      "/assets/photo-sparkler-kids.webp",
      "/assets/ck-sparkler-silver.webp"
    ],
    "category": "sparklers",
    "format": "Electric Sparklers",
    "region": "Sivakasi Quality",
    "caffeine": "Zero Residue Sparks",
    "badge": "🌿 100% GREEN CRACKER",
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
    "secondaryImage": "/assets/action-chakkar.webp",
    "galleryImages": [
      "/assets/ck-chakkar.webp",
      "/assets/action-chakkar.webp",
      "/assets/photo-chakkar-spark.webp",
      "/assets/ck-saucer.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Continuous Rotation",
    "badge": "🌀 SUPER SPIN",
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
    "secondaryImage": "/assets/photo-sparkler-kids.webp",
    "galleryImages": [
      "/assets/ck-kids-box.webp",
      "/assets/photo-sparkler-kids.webp",
      "/assets/ck-sparkler-silver.webp",
      "/assets/ck-smoke-cans.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "kids-special",
    "format": "Child-Safe Hamper",
    "region": "Certified Green",
    "caffeine": "No Gunpowder / Child Safe",
    "badge": "👶 100% CHILD SAFE",
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
    "secondaryImage": "/assets/action-sound.webp",
    "galleryImages": [
      "/assets/ck-ladi-1000.webp",
      "/assets/action-sound.webp",
      "/assets/ck-ladi-5000.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "sound-crackers",
    "format": "Garland Ladi",
    "region": "Sivakasi Quality",
    "caffeine": "Crisp Festive Sound",
    "badge": "🔥 CLASSIC DHAMAKA",
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
    "secondaryImage": "/assets/action-rockets.webp",
    "galleryImages": [
      "/assets/ck-rockets.webp",
      "/assets/action-rockets.webp",
      "/assets/photo-sky-burst.webp",
      "/assets/action-sky.webp"
    ],
    "category": "rockets",
    "format": "Whistling Rockets",
    "region": "Sivakasi Quality",
    "caffeine": "High Velocity Flight",
    "badge": "🚀 HIGH FLYER",
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
    "secondaryImage": "/assets/photo-sky-burst.webp",
    "galleryImages": [
      "/assets/ck-cake-120.webp",
      "/assets/photo-sky-burst.webp",
      "/assets/photo-sky-gold.webp",
      "/assets/photo-sky-red.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Grand Finale Cake",
    "region": "Sivakasi Quality",
    "caffeine": "Non-Stop Sky Display",
    "badge": "👑 GRAND FINALE",
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
    "secondaryImage": "/assets/photo-sparkler-kids.webp",
    "galleryImages": [
      "/assets/ck-smoke-tubes.webp",
      "/assets/photo-sparkler-kids.webp",
      "/assets/ck-smoke-cans.webp",
      "/assets/ck-kids-box.webp"
    ],
    "category": "kids-special",
    "format": "Day Fountains",
    "region": "Eco Friendly",
    "caffeine": "Zero Sound / Pure Color",
    "badge": "🌈 RAINBOW COLORS",
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
    "secondaryImage": "/assets/photo-anar-gold.webp",
    "galleryImages": [
      "/assets/ck-anar-jumbo.webp",
      "/assets/photo-anar-gold.webp",
      "/assets/photo-anar-tall.webp",
      "/assets/action-anar.webp"
    ],
    "category": "flower-pots",
    "format": "Jumbo Anar",
    "region": "Sivakasi Quality",
    "caffeine": "Giant Shower",
    "badge": "✨ JUMBO FOUNTAIN",
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
    "secondaryImage": "/assets/mega-starter-contents.webp",
    "galleryImages": [
      "/assets/mega-starter.webp",
      "/assets/mega-starter-contents.webp",
      "/assets/mega-starter-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For a Small Family",
    "badge": "🎆 MEGA PACK",
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
    "secondaryImage": "/assets/mega-family-contents.webp",
    "galleryImages": [
      "/assets/mega-family.webp",
      "/assets/mega-family-contents.webp",
      "/assets/mega-family-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For the Whole Family",
    "badge": "⭐ BEST VALUE",
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
    "secondaryImage": "/assets/mega-grand-contents.webp",
    "galleryImages": [
      "/assets/mega-grand.webp",
      "/assets/mega-grand-contents.webp",
      "/assets/mega-grand-night.webp",
      "/assets/mega-all-three.webp",
      "/assets/ck-cake-120.webp"
    ],
    "category": "mega-packs",
    "format": "Mega Pack",
    "region": "Siliguri Special",
    "caffeine": "For a Grand Show",
    "badge": "👑 BIGGEST SHOW",
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
    "secondaryImage": "/assets/decor-clay-diyas.webp",
    "galleryImages": [
      "/assets/combo-pataka-diyas.webp",
      "/assets/decor-clay-diyas.webp",
      "/assets/hamper-puja.webp",
      "/assets/combo-pataka-mithai.webp",
      "/assets/decor-diya-steps.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Siliguri Special",
    "caffeine": "Crackers + Diyas",
    "badge": "",
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
    "secondaryImage": "/assets/hamper-family.webp",
    "galleryImages": [
      "/assets/combo-pataka-mithai.webp",
      "/assets/hamper-festive.webp",
      "/assets/sweets-kaju-katli.webp",
      "/assets/sweets-assorted-box.webp",
      "/assets/hamper-family.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Ready to Gift",
    "badge": "🎁 BESTSELLER HAMPER",
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
    "secondaryImage": "/assets/decor-puja-set.webp",
    "galleryImages": [
      "/assets/hamper-puja.webp",
      "/assets/decor-puja-set.webp",
      "/assets/decor-puja-thali.webp",
      "/assets/decor-clay-diyas.webp",
      "/assets/hd-akhand-diya.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "For Puja",
    "badge": "",
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
    "secondaryImage": "/assets/hamper-festive.webp",
    "galleryImages": [
      "/assets/hamper-family.webp",
      "/assets/hamper-festive.webp",
      "/assets/combo-pataka-mithai.webp",
      "/assets/mega-starter-contents.webp",
      "/assets/sweets-assorted-box.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "For the Whole Family",
    "badge": "",
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
    "secondaryImage": "/assets/hamper-family.webp",
    "galleryImages": [
      "/assets/hamper-office.webp",
      "/assets/hamper-festive.webp",
      "/assets/sweets-gift-box.webp",
      "/assets/sweets-kaju-katli.webp",
      "/assets/hd-tealight-bar.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Staff & Clients",
    "badge": "",
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
    "secondaryImage": "/assets/decor-diya-steps.webp",
    "galleryImages": [
      "/assets/decor-clay-diyas.webp",
      "/assets/decor-diya-steps.webp",
      "/assets/decor-diya-ring.webp",
      "/assets/hd-floating-diyas.webp",
      "/assets/blog-diyas.webp"
    ],
    "category": "diyas-decor",
    "format": "Clay Diyas",
    "region": "Festive Decor",
    "caffeine": "Traditional",
    "badge": "",
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
    "secondaryImage": "/assets/decor-diya-ring.webp",
    "galleryImages": [
      "/assets/decor-candles.webp",
      "/assets/decor-diya-ring.webp",
      "/assets/hd-glass-tealights.webp",
      "/assets/hd-tealight-bar.webp"
    ],
    "category": "diyas-decor",
    "format": "Candles",
    "region": "Festive Decor",
    "caffeine": "Warm Glow",
    "badge": "",
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
    "secondaryImage": "/assets/decor-rangoli-design.webp",
    "galleryImages": [
      "/assets/decor-rangoli-set.webp",
      "/assets/decor-rangoli-design.webp",
      "/assets/decor-rangoli-pattern.webp",
      "/assets/blog-rangoli.webp"
    ],
    "category": "diyas-decor",
    "format": "Rangoli",
    "region": "Festive Decor",
    "caffeine": "Bright Colours",
    "badge": "",
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
    "secondaryImage": "/assets/decor-rangoli-design.webp",
    "galleryImages": [
      "/assets/decor-rangoli-pattern.webp",
      "/assets/decor-rangoli-design.webp",
      "/assets/decor-rangoli-set.webp",
      "/assets/blog-rangoli.webp"
    ],
    "category": "diyas-decor",
    "format": "Rangoli",
    "region": "Festive Decor",
    "caffeine": "Easy for Beginners",
    "badge": "",
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
    "secondaryImage": "/assets/decor-marigold-garland.webp",
    "galleryImages": [
      "/assets/decor-marigold-toran.webp",
      "/assets/decor-marigold-garland.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-urli-flowers.webp"
    ],
    "category": "diyas-decor",
    "format": "Door Decor",
    "region": "Festive Decor",
    "caffeine": "Ready to Hang",
    "badge": "",
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
    "secondaryImage": "/assets/decor-marigold-toran.webp",
    "galleryImages": [
      "/assets/decor-marigold-garland.webp",
      "/assets/decor-marigold-toran.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/hd-flower-bowl.webp"
    ],
    "category": "diyas-decor",
    "format": "Door Decor",
    "region": "Festive Decor",
    "caffeine": "Bright & Festive",
    "badge": "",
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
    "secondaryImage": "/assets/decor-puja-set.webp",
    "galleryImages": [
      "/assets/decor-puja-thali.webp",
      "/assets/decor-puja-set.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/blog-puja.webp"
    ],
    "category": "diyas-decor",
    "format": "Puja Set",
    "region": "Festive Decor",
    "caffeine": "Ready for Puja",
    "badge": "",
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
    "secondaryImage": "/assets/photo-sky-red.webp",
    "galleryImages": [
      "/assets/ck-shells.webp",
      "/assets/photo-sky-red.webp",
      "/assets/action-sound.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "sound-crackers",
    "format": "Aerial Sound Shell",
    "region": "Sivakasi Quality",
    "caffeine": "Maximum Decibel Report",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/photo-sky-gold.webp",
    "galleryImages": [
      "/assets/ck-cake-60.webp",
      "/assets/photo-sky-gold.webp",
      "/assets/photo-sky-burst.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Waterfall Canopy",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/photo-anar-tall.webp",
    "galleryImages": [
      "/assets/ck-anar-peacock.webp",
      "/assets/photo-anar-tall.webp",
      "/assets/photo-anar-gold.webp",
      "/assets/action-anar.webp"
    ],
    "category": "flower-pots",
    "format": "Jumbo Fountain",
    "region": "Sivakasi Quality",
    "caffeine": "7-Color Feather Fountain",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/photo-sparkler-hand.webp",
    "galleryImages": [
      "/assets/ck-sparkler-silver.webp",
      "/assets/photo-sparkler-hand.webp",
      "/assets/photo-sparkler-kids.webp",
      "/assets/action-sparkler.webp",
      "/assets/ck-sparkler-gold.webp"
    ],
    "category": "sparklers",
    "format": "Electric Sparklers",
    "region": "Sivakasi Quality",
    "caffeine": "120s Silver Twinkle",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/photo-chakkar-spark.webp",
    "galleryImages": [
      "/assets/ck-saucer.webp",
      "/assets/photo-chakkar-spark.webp",
      "/assets/action-chakkar.webp",
      "/assets/ck-chakkar.webp"
    ],
    "category": "ground-chakkars",
    "format": "Aerial Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Whistling Vertical Flight",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/photo-sparkler-kids.webp",
    "galleryImages": [
      "/assets/ck-smoke-cans.webp",
      "/assets/photo-sparkler-kids.webp",
      "/assets/ck-smoke-tubes.webp",
      "/assets/ck-kids-box.webp"
    ],
    "category": "kids-special",
    "format": "Day Novelty",
    "region": "Eco Friendly",
    "caffeine": "Pure Visual Smoke",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/action-sound.webp",
    "galleryImages": [
      "/assets/ck-ladi-5000.webp",
      "/assets/action-sound.webp",
      "/assets/ck-ladi-1000.webp",
      "/assets/ck-shop-shelves.webp"
    ],
    "category": "sound-crackers",
    "format": "Garland Ladi",
    "region": "Sivakasi Quality",
    "caffeine": "Unbroken Festive Rhythm",
    "badge": "❌ SOLD OUT",
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
    "secondaryImage": "/assets/hd-lights-house.webp",
    "galleryImages": [
      "/assets/hd-string-lights.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-fairy-lights.webp",
      "/assets/hd-tealight-bar.webp"
    ],
    "category": "home-decor",
    "format": "Lights",
    "region": "Festive Lighting",
    "caffeine": "Warm Glow",
    "badge": "BEST SELLER",
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
    "secondaryImage": "/assets/hd-lantern-red.webp",
    "galleryImages": [
      "/assets/hd-lantern-orange.webp",
      "/assets/hd-lantern-red.webp",
      "/assets/hd-lantern-star.webp",
      "/assets/hd-lights-house.webp"
    ],
    "category": "home-decor",
    "format": "Lanterns",
    "region": "Festive Lighting",
    "caffeine": "Warm Glow",
    "badge": "",
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
    "secondaryImage": "/assets/hd-lights-house.webp",
    "galleryImages": [
      "/assets/hd-lantern-star.webp",
      "/assets/hd-lantern-orange.webp",
      "/assets/hd-lantern-red.webp",
      "/assets/hd-lights-house.webp"
    ],
    "category": "home-decor",
    "format": "Lanterns",
    "region": "Festive Lighting",
    "caffeine": "Bright Colours",
    "badge": "",
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
    "secondaryImage": "/assets/hd-brass-aarti.webp",
    "galleryImages": [
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/decor-puja-thali.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Traditional",
    "badge": "",
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
    "secondaryImage": "/assets/hd-brass-lamp.webp",
    "galleryImages": [
      "/assets/hd-brass-aarti.webp",
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-akhand-diya.webp",
      "/assets/decor-puja-set.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Traditional",
    "badge": "",
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
    "secondaryImage": "/assets/hd-urli-flowers.webp",
    "galleryImages": [
      "/assets/hd-flower-bowl.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/hd-floating-diyas.webp",
      "/assets/decor-marigold-garland.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Diyas & Lamps",
    "caffeine": "Elegant",
    "badge": "",
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
    "secondaryImage": "/assets/hd-tealight-bar.webp",
    "galleryImages": [
      "/assets/hd-glass-tealights.webp",
      "/assets/hd-tealight-bar.webp",
      "/assets/decor-candles.webp",
      "/assets/hd-fairy-lights.webp"
    ],
    "category": "home-decor",
    "format": "Candles",
    "region": "Festive Lighting",
    "caffeine": "Soft Glow",
    "badge": "",
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
    "secondaryImage": "/assets/hd-string-lights.webp",
    "galleryImages": [
      "/assets/hd-fairy-lights.webp",
      "/assets/hd-string-lights.webp",
      "/assets/hd-lights-house.webp",
      "/assets/hd-tealight-bar.webp"
    ],
    "category": "home-decor",
    "format": "Lights",
    "region": "Festive Lighting",
    "caffeine": "Warm Amber Glow",
    "badge": "BESTSELLER",
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
    "secondaryImage": "/assets/hd-brass-lamp.webp",
    "galleryImages": [
      "/assets/hd-akhand-diya.webp",
      "/assets/hd-brass-lamp.webp",
      "/assets/hd-brass-aarti.webp",
      "/assets/decor-puja-thali.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Puja Decor",
    "caffeine": "Everlasting Flame",
    "badge": "BEST VALUE",
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
    "secondaryImage": "/assets/hd-flower-bowl.webp",
    "galleryImages": [
      "/assets/hd-floating-diyas.webp",
      "/assets/hd-flower-bowl.webp",
      "/assets/hd-urli-flowers.webp",
      "/assets/decor-clay-diyas.webp"
    ],
    "category": "home-decor",
    "format": "Diyas",
    "region": "Living Decor",
    "caffeine": "Floating Petals",
    "badge": "TRENDING",
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
    "subtitle": "5 Rhythmic Celebratory Sound Bursts \u00b7 Sivakasi Green Quality",
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
    "secondaryImage": "/assets/action-sound.webp",
    "galleryImages": [
      "/assets/product-5-ka-dum.webp",
      "/assets/action-sound.webp"
    ],
    "category": "sound-crackers",
    "format": "Sound Crackers",
    "region": "Sivakasi Quality",
    "caffeine": "Celebratory Sound",
    "badge": "\ud83d\udca5 5-IN-1 SOUND",
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
    "subtitle": "10-12 Feet Golden & Silver Sparkle Fountain \u00b7 Full Box",
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
    "secondaryImage": "/assets/action-anar.webp",
    "galleryImages": [
      "/assets/product-anar-box.webp",
      "/assets/action-anar.webp"
    ],
    "category": "flower-pots",
    "format": "Flower Pot / Anar",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Sparks",
    "badge": "\ud83c\udf1f POPULAR ANAR",
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
    "subtitle": "High-Speed Spinning Ground Wheel \u00b7 Golden Sparks",
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
    "secondaryImage": "/assets/action-chakkar.webp",
    "galleryImages": [
      "/assets/product-chakkar-single.webp",
      "/assets/action-chakkar.webp"
    ],
    "category": "ground-chakkars",
    "format": "Ground Spinner",
    "region": "Sivakasi Quality",
    "caffeine": "Spinning Rings",
    "badge": "\ud83c\udf00 TOP VALUE",
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
    "subtitle": "Fun Crackling Sound \u00b7 100% Child-Safe Novelty Snapper",
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
    "secondaryImage": "/assets/action-kids.webp",
    "galleryImages": [
      "/assets/product-chutput-55.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "badge": "\ud83d\udc76 KIDS FAVORITE",
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
    "subtitle": "Extended Crackling Snaps \u00b7 Low Smoke & Safe Fun",
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
    "secondaryImage": "/assets/action-kids.webp",
    "galleryImages": [
      "/assets/product-chutput-66.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "badge": "\u2728 DELUXE POP",
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
    "subtitle": "5 Sky Burst Aerial Shots \u00b7 Multi-Color Starburst Effects",
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
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-penta-5-shot.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\ud83d\ude80 5 SHOT SKY",
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
    "subtitle": "Spectacular Peacock Feather Spray \u00b7 Multicolor Sparkle Wings",
    "price": 889,
    "originalPrice": 1450,
    "discount": 39,
    "rating": 5.0,
    "reviewsCount": 112,
    "weight": "1 Grand Display Unit",
    "weights": [
      "1 Grand Display Unit"
    ],
    "image": "/assets/product-peacock-fountain.webp",
    "secondaryImage": "/assets/action-anar.webp",
    "galleryImages": [
      "/assets/product-peacock-fountain.webp",
      "/assets/action-anar.webp"
    ],
    "category": "flower-pots",
    "format": "Speciality Fountain",
    "region": "Sivakasi Quality",
    "caffeine": "Multicolor Display",
    "badge": "\ud83e\udd9a SHOWSTOPPER",
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
    "subtitle": "No Match Needed \u00b7 Throw & Pop \u00b7 100% Smoke-Free",
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
    "secondaryImage": "/assets/action-kids.webp",
    "galleryImages": [
      "/assets/product-pop-pop.webp"
    ],
    "category": "kids-special",
    "format": "Novelty Snappers",
    "region": "Sivakasi Quality",
    "caffeine": "Child-Friendly",
    "badge": "\ud83d\udc76 100% SAFE",
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
    "id": "sky-burst-12-shot-aerial-cake",
    "handle": "sky-burst-12-shot-aerial-cake",
    "title": "Sky Burst 12-Shot Multi-Color Aerial Cake",
    "subtitle": "12 High-Altitude Repeater Shots \u00b7 Golden Palm & Crackling Willow",
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
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-sky-shot-588.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\u2728 12 SHOT REPEATER",
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
    "subtitle": "25 High Altitude Shots \u00b7 Whistling Tail with Chrysanthemum Finale",
    "price": 1188,
    "originalPrice": 1950,
    "discount": 39,
    "rating": 5.0,
    "reviewsCount": 97,
    "weight": "1 Cake (25 Shots)",
    "weights": [
      "1 Cake (25 Shots)",
      "Pack of 2 Cakes"
    ],
    "image": "/assets/product-sky-shot-1188.webp",
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-sky-shot-1188.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\ud83c\udf86 25 SHOT THUNDER",
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
    "subtitle": "7 High-Flying Aerial Bursts \u00b7 Emerald & Crimson Colors",
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
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-sky-shot-420.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\u2b50 7 SHOT CLASSIC",
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
    "subtitle": "Massive 200-Foot Sky Bloom \u00b7 Professional Brocade Crown Finale",
    "price": 2499,
    "originalPrice": 3999,
    "discount": 38,
    "rating": 5.0,
    "reviewsCount": 44,
    "weight": "1 Mega Shell (6-Inch)",
    "weights": [
      "1 Mega Shell (6-Inch)"
    ],
    "image": "/assets/product-sky-shot-6inch.webp",
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-sky-shot-6inch.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Giant Aerial Shell",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\ud83d\udc51 6-INCH SHELL",
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
    "subtitle": "50 Non-Stop Aerial Bursts \u00b7 Continuous 90-Second Sky Show",
    "price": 1700,
    "originalPrice": 2800,
    "discount": 39,
    "rating": 5.0,
    "reviewsCount": 78,
    "weight": "1 Big Cake (50 Shots)",
    "weights": [
      "1 Big Cake (50 Shots)"
    ],
    "image": "/assets/product-sky-shot-big-1700.webp",
    "secondaryImage": "/assets/action-sky.webp",
    "galleryImages": [
      "/assets/product-sky-shot-big-1700.webp",
      "/assets/action-sky.webp"
    ],
    "category": "aerial-shots",
    "format": "Multi-Shot Cake",
    "region": "Sivakasi Quality",
    "caffeine": "High Altitude",
    "badge": "\ud83c\udf86 50 SHOT FINALE",
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
    "subtitle": "Smokeless Golden Sparks \u00b7 60-Second Long Burn \u00b7 Hand-Held Safe",
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
    "secondaryImage": "/assets/action-sparkler.webp",
    "galleryImages": [
      "/assets/product-pawan-sparklers.webp",
      "/assets/action-sparkler.webp"
    ],
    "category": "sparklers",
    "format": "Sparkler Sticks",
    "region": "Sivakasi Quality",
    "caffeine": "Golden Sparks",
    "badge": "\u2728 BESTSELLER",
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
