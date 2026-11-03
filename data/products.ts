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
      "/assets/action-sky.webp"
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
      "/assets/action-anar.webp"
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
      "/assets/action-sparkler.webp"
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
      "/assets/action-chakkar.webp"
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
      "/assets/photo-sparkler-kids.webp"
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
      "/assets/action-sound.webp"
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
      "/assets/action-rockets.webp"
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
      "/assets/photo-sky-burst.webp"
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
      "/assets/photo-sparkler-kids.webp"
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
      "/assets/photo-anar-gold.webp"
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
      "/assets/action-sky.webp"
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
      "/assets/action-anar.webp"
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
      "/assets/photo-sky-burst.webp"
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
    "id": "pataka-mithai-diwali-combo",
    "handle": "pataka-mithai-diwali-combo",
    "title": "Pataka + Mithai Diwali Hamper",
    "subtitle": "Crackers Box, 500G Mithai & 12 Clay Diyas",
    "price": 2299,
    "originalPrice": 2799,
    "discount": 18,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "1 Combo",
    "weights": [
      "1 Combo"
    ],
    "image": "/assets/combo-pataka-mithai.webp",
    "secondaryImage": "/assets/sweets-assorted-box.webp",
    "galleryImages": [
      "/assets/combo-pataka-mithai.webp",
      "/assets/sweets-assorted-box.webp",
      "/assets/decor-clay-diyas.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Siliguri Special",
    "caffeine": "Crackers + Sweets + Diyas",
    "badge": "",
    "inStock": true,
    "description": "Everything for one Diwali evening in one order: an assorted crackers box, 500G of mithai and 12 clay diyas. Delivered together within Siliguri, with a free lighter.",
    "variants": [
      {
        "sku": "SP-COMBO-1",
        "name": "1 Combo",
        "price": 2299,
        "compareAtPrice": 2799
      }
    ],
    "status": "active",
    "sku": "SP-COMBO-1",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Hamper",
      "Gift",
      "Crackers",
      "Sweets",
      "Diyas"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "kaju-katli-box",
    "handle": "kaju-katli-box",
    "title": "Kaju Katli Box",
    "subtitle": "Classic Diamond-Cut Cashew Sweet · A Diwali Must-Have",
    "price": 349,
    "originalPrice": 399,
    "discount": 13,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "250G",
    "weights": [
      "250G",
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-kaju-katli.webp",
    "secondaryImage": "/assets/sweets-kaju-basket.webp",
    "galleryImages": [
      "/assets/sweets-kaju-katli.webp",
      "/assets/sweets-kaju-basket.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Rich & Nutty",
    "badge": "🪔 DIWALI FAVOURITE",
    "inStock": true,
    "description": "Soft, melt-in-the-mouth cashew sweet cut into classic diamonds. A favourite on every Diwali plate in Siliguri and an easy gift for family and neighbours.",
    "variants": [
      {
        "sku": "SP-KAJU-250",
        "name": "250G",
        "price": 349,
        "compareAtPrice": 399
      },
      {
        "sku": "SP-KAJU-500",
        "name": "500G",
        "price": 649,
        "compareAtPrice": 749
      },
      {
        "sku": "SP-KAJU-1000",
        "name": "1 KG",
        "price": 1249,
        "compareAtPrice": 1449
      }
    ],
    "status": "active",
    "sku": "SP-KAJU-250",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Kaju Katli",
      "Sweets",
      "Mithai",
      "Diwali Gift"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "motichoor-laddu-box",
    "handle": "motichoor-laddu-box",
    "title": "Motichoor Laddu Box",
    "subtitle": "Soft Boondi Laddus · Perfect for Puja & Gifting",
    "price": 299,
    "originalPrice": 349,
    "discount": 14,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-motichoor-laddu.webp",
    "secondaryImage": "/assets/sweets-motichoor-plate.webp",
    "galleryImages": [
      "/assets/sweets-motichoor-laddu.webp",
      "/assets/sweets-motichoor-plate.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Soft & Sweet",
    "badge": "",
    "inStock": true,
    "description": "Soft, fragrant boondi laddus for your Lakshmi Puja and Kali Puja offerings, and for sharing with guests through the festive days.",
    "variants": [
      {
        "sku": "SP-LADDU-500",
        "name": "500G",
        "price": 299,
        "compareAtPrice": 349
      },
      {
        "sku": "SP-LADDU-1000",
        "name": "1 KG",
        "price": 569,
        "compareAtPrice": 649
      }
    ],
    "status": "active",
    "sku": "SP-LADDU-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Laddu",
      "Sweets",
      "Mithai",
      "Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "besan-laddu-box",
    "handle": "besan-laddu-box",
    "title": "Besan Laddu Box",
    "subtitle": "Roasted Gram Flour Laddus · Homestyle Taste",
    "price": 279,
    "originalPrice": 329,
    "discount": 15,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-besan-laddu.webp",
    "secondaryImage": "/assets/sweets-besan-laddu.webp",
    "galleryImages": [
      "/assets/sweets-besan-laddu.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Nutty & Homestyle",
    "badge": "",
    "inStock": true,
    "description": "Nutty, homestyle besan laddus that keep well through the festive week. A simple sweet that everyone at home enjoys.",
    "variants": [
      {
        "sku": "SP-BESAN-500",
        "name": "500G",
        "price": 279,
        "compareAtPrice": 329
      },
      {
        "sku": "SP-BESAN-1000",
        "name": "1 KG",
        "price": 529,
        "compareAtPrice": 619
      }
    ],
    "status": "active",
    "sku": "SP-BESAN-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Besan Laddu",
      "Sweets",
      "Mithai"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "bengali-sandesh-box",
    "handle": "bengali-sandesh-box",
    "title": "Bengali Sandesh Box",
    "subtitle": "Soft Chhena Sweets · A Bengal Classic",
    "price": 399,
    "originalPrice": 459,
    "discount": 13,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-sandesh.webp",
    "secondaryImage": "/assets/sweets-sandesh.webp",
    "galleryImages": [
      "/assets/sweets-sandesh.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Light & Milky",
    "badge": "🏠 LOCAL FAVOURITE",
    "inStock": true,
    "description": "Delicate chhena sandesh, the Bengali favourite for puja and for guests during Kali Puja and Diwali.",
    "variants": [
      {
        "sku": "SP-SANDESH-500",
        "name": "500G",
        "price": 399,
        "compareAtPrice": 459
      },
      {
        "sku": "SP-SANDESH-1000",
        "name": "1 KG",
        "price": 769,
        "compareAtPrice": 879
      }
    ],
    "status": "active",
    "sku": "SP-SANDESH-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Sandesh",
      "Bengali Sweets",
      "Mithai",
      "Kali Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "bengali-rosogolla-box",
    "handle": "bengali-rosogolla-box",
    "title": "Bengali Rosogolla",
    "subtitle": "Soft Chhena Balls in Light Syrup",
    "price": 229,
    "originalPrice": 269,
    "discount": 15,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-rosogolla.webp",
    "secondaryImage": "/assets/sweets-rosogolla.webp",
    "galleryImages": [
      "/assets/sweets-rosogolla.webp"
    ],
    "category": "sweets",
    "format": "Sweet Tin",
    "region": "Local Mithai",
    "caffeine": "Light & Spongy",
    "badge": "",
    "inStock": true,
    "description": "The Bengali favourite: soft, spongy chhena balls in a light syrup. Serve chilled for family and guests.",
    "variants": [
      {
        "sku": "SP-ROSO-500",
        "name": "500G",
        "price": 229,
        "compareAtPrice": 269
      },
      {
        "sku": "SP-ROSO-1000",
        "name": "1 KG",
        "price": 429,
        "compareAtPrice": 499
      }
    ],
    "status": "active",
    "sku": "SP-ROSO-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Rosogolla",
      "Bengali Sweets",
      "Sweets",
      "Mithai"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "kesar-pista-barfi-box",
    "handle": "kesar-pista-barfi-box",
    "title": "Assorted Barfi Box",
    "subtitle": "Milk, Kesar & Pista Barfi",
    "price": 429,
    "originalPrice": 499,
    "discount": 14,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-barfi.webp",
    "secondaryImage": "/assets/sweets-assorted-box.webp",
    "galleryImages": [
      "/assets/sweets-barfi.webp",
      "/assets/sweets-assorted-box.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Creamy & Rich",
    "badge": "",
    "inStock": true,
    "description": "Creamy barfi cut into neat squares, including kesar and pista varieties that look lovely on a festive thali.",
    "variants": [
      {
        "sku": "SP-BARFI-500",
        "name": "500G",
        "price": 429,
        "compareAtPrice": 499
      },
      {
        "sku": "SP-BARFI-1000",
        "name": "1 KG",
        "price": 829,
        "compareAtPrice": 949
      }
    ],
    "status": "active",
    "sku": "SP-BARFI-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Barfi",
      "Sweets",
      "Mithai"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "kesar-peda-box",
    "handle": "kesar-peda-box",
    "title": "Kesar Peda Box",
    "subtitle": "Soft Milk Peda with a Saffron Finish",
    "price": 399,
    "originalPrice": 449,
    "discount": 11,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-kesar-peda.webp",
    "secondaryImage": "/assets/sweets-peda-plate.webp",
    "galleryImages": [
      "/assets/sweets-kesar-peda.webp",
      "/assets/sweets-peda-plate.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Soft & Fragrant",
    "badge": "",
    "inStock": true,
    "description": "Soft milk peda with a gentle saffron flavour. A simple classic for puja and for guests who drop by during Diwali.",
    "variants": [
      {
        "sku": "SP-PEDA-500",
        "name": "500G",
        "price": 399,
        "compareAtPrice": 449
      },
      {
        "sku": "SP-PEDA-1000",
        "name": "1 KG",
        "price": 769,
        "compareAtPrice": 869
      }
    ],
    "status": "active",
    "sku": "SP-PEDA-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Peda",
      "Sweets",
      "Mithai",
      "Puja"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "gulab-jamun-box",
    "handle": "gulab-jamun-box",
    "title": "Gulab Jamun Box",
    "subtitle": "Soft & Syrupy · Ready to Serve",
    "price": 249,
    "originalPrice": 299,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-gulab-jamun.webp",
    "secondaryImage": "/assets/sweets-gulab-jamun.webp",
    "galleryImages": [
      "/assets/sweets-gulab-jamun.webp"
    ],
    "category": "sweets",
    "format": "Sweet Tin",
    "region": "Local Mithai",
    "caffeine": "Warm & Syrupy",
    "badge": "",
    "inStock": true,
    "description": "Soft gulab jamun soaked in sugar syrup. Warm them for a few seconds and serve after your Diwali dinner.",
    "variants": [
      {
        "sku": "SP-JAMUN-500",
        "name": "500G",
        "price": 249,
        "compareAtPrice": 299
      },
      {
        "sku": "SP-JAMUN-1000",
        "name": "1 KG",
        "price": 469,
        "compareAtPrice": 549
      }
    ],
    "status": "active",
    "sku": "SP-JAMUN-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Gulab Jamun",
      "Sweets",
      "Mithai"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "soan-papdi-festive-box",
    "handle": "soan-papdi-festive-box",
    "title": "Soan Papdi Festive Box",
    "subtitle": "Flaky, Light & Easy to Share",
    "price": 149,
    "originalPrice": 179,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "250G",
    "weights": [
      "250G",
      "500G"
    ],
    "image": "/assets/sweets-soan-papdi.webp",
    "secondaryImage": "/assets/sweets-soan-papdi.webp",
    "galleryImages": [
      "/assets/sweets-soan-papdi.webp"
    ],
    "category": "sweets",
    "format": "Mithai Box",
    "region": "Local Mithai",
    "caffeine": "Flaky & Light",
    "badge": "",
    "inStock": true,
    "description": "Light, flaky soan papdi that keeps well, which makes it a handy sweet for gifting to neighbours and office friends.",
    "variants": [
      {
        "sku": "SP-SOAN-250",
        "name": "250G",
        "price": 149,
        "compareAtPrice": 179
      },
      {
        "sku": "SP-SOAN-500",
        "name": "500G",
        "price": 279,
        "compareAtPrice": 329
      }
    ],
    "status": "active",
    "sku": "SP-SOAN-250",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Soan Papdi",
      "Sweets",
      "Mithai",
      "Diwali Gift"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "assorted-diwali-mithai-box",
    "handle": "assorted-diwali-mithai-box",
    "title": "Assorted Diwali Mithai Box",
    "subtitle": "Barfi, Kaju Katli, Peda & More in One Box",
    "price": 449,
    "originalPrice": 549,
    "discount": 18,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G",
    "weights": [
      "500G",
      "1 KG"
    ],
    "image": "/assets/sweets-assorted-box.webp",
    "secondaryImage": "/assets/sweets-barfi.webp",
    "galleryImages": [
      "/assets/sweets-assorted-box.webp",
      "/assets/sweets-barfi.webp"
    ],
    "category": "sweets",
    "format": "Gift Pack",
    "region": "Local Mithai",
    "caffeine": "Assorted Mix",
    "badge": "🎁 GIFT READY",
    "inStock": true,
    "description": "A mix of Diwali favourites in one neat box. A good choice when you are visiting family or want one box for the whole house.",
    "variants": [
      {
        "sku": "SP-MIX-500",
        "name": "500G",
        "price": 449,
        "compareAtPrice": 549
      },
      {
        "sku": "SP-MIX-1000",
        "name": "1 KG",
        "price": 849,
        "compareAtPrice": 999
      }
    ],
    "status": "active",
    "sku": "SP-MIX-500",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Assorted Mithai",
      "Sweets",
      "Gift Box",
      "Diwali Gift"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "festive-sweets-diya-gift-hamper",
    "handle": "festive-sweets-diya-gift-hamper",
    "title": "Festive Sweets & Diya Gift Hamper",
    "subtitle": "Mithai, Diyas & Festive Touches in a Gift Box",
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
      "/assets/hamper-festive.webp",
      "/assets/hamper-family.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Ready to Gift",
    "badge": "🎁 BESTSELLER HAMPER",
    "inStock": true,
    "description": "A ready-to-gift hamper with mithai and diyas in a festive box, finished with flowers. A warm gift for family and friends in Siliguri.",
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
      "Mithai",
      "Diyas"
    ],
    "stockQuantity": 0,
    "trackInventory": false
  },
  {
    "id": "lakshmi-puja-gift-hamper",
    "handle": "lakshmi-puja-gift-hamper",
    "title": "Lakshmi Puja Gift Hamper",
    "subtitle": "Puja Essentials & Sweets in One Box",
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
      "/assets/decor-puja-set.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "For Puja",
    "badge": "",
    "inStock": true,
    "description": "A thoughtful hamper with puja essentials and sweets, for elders and for families preparing for Lakshmi Puja or Kali Puja.",
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
    "subtitle": "Sweets, Diyas & Festive Treats for the Whole Family",
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
      "/assets/hamper-festive.webp"
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
      "/assets/hamper-family.webp"
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
    "id": "premium-mithai-gift-box",
    "handle": "premium-mithai-gift-box",
    "title": "Premium Mithai Gift Box",
    "subtitle": "Assorted Barfi in a Festive Window Box",
    "price": 999,
    "originalPrice": 1199,
    "discount": 17,
    "rating": 0,
    "reviewsCount": 0,
    "weight": "500G Box",
    "weights": [
      "500G Box",
      "1 KG Box"
    ],
    "image": "/assets/sweets-gift-box.webp",
    "secondaryImage": "/assets/sweets-barfi.webp",
    "galleryImages": [
      "/assets/sweets-gift-box.webp",
      "/assets/sweets-barfi.webp"
    ],
    "category": "gift-hampers",
    "format": "Gift Hamper",
    "region": "Festive Gifting",
    "caffeine": "Assorted Barfi",
    "badge": "",
    "inStock": true,
    "description": "An assorted barfi selection in a festive box, an easy gift when you are visiting someone during Diwali.",
    "variants": [
      {
        "sku": "SP-HAMP-MITH",
        "name": "500G Box",
        "price": 999,
        "compareAtPrice": 1199
      },
      {
        "sku": "SP-HAMP-MITH1",
        "name": "1 KG Box",
        "price": 1899,
        "compareAtPrice": 2299
      }
    ],
    "status": "active",
    "sku": "SP-HAMP-MITH",
    "vendor": "Siliguri Pataka",
    "tags": [
      "Mithai Gift Box",
      "Gift Hamper",
      "Diwali Gift"
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
      "/assets/decor-diya-ring.webp"
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
      "/assets/decor-diya-ring.webp"
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
      "/assets/decor-rangoli-pattern.webp"
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
      "/assets/decor-rangoli-set.webp"
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
      "/assets/decor-marigold-garland.webp"
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
      "/assets/decor-marigold-toran.webp"
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
      "/assets/decor-puja-set.webp"
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
      "/assets/photo-sky-red.webp"
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
      "/assets/photo-sky-gold.webp"
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
      "/assets/photo-anar-tall.webp"
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
      "/assets/photo-sparkler-hand.webp"
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
      "/assets/photo-chakkar-spark.webp"
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
      "/assets/photo-sparkler-kids.webp"
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
      "/assets/action-sound.webp"
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
  }
];

export const COLLECTIONS = [
  { id: "all", name: "All Collection", seoTitle: "All Diwali Crackers, Sweets & Gifts in Siliguri", description: "Buy Diwali crackers, local mithai, gift hampers, rangoli and diyas online in Siliguri. Same-day or next-day delivery, a free lighter with every order and a ₹2,000 minimum order.", seoText: "Siliguri Pataka brings everything for Diwali and Kali Puja into one shop: crackers, local mithai, gift hampers, rangoli colours and diyas. Order from Sevoke Road, Hill Cart Road, Pradhan Nagar, Champasari or anywhere else in Siliguri, and we deliver the same day or the next day.", guide: "buy-diwali-crackers-online-siliguri" },
  { id: "mega-packs", name: "Mega Packs", seoTitle: "Mega Cracker Packs Online in Siliguri: ₹2,499 to ₹9,999", description: "Our 3 mega cracker packs for Diwali in Siliguri. Save up to ₹3,601 compared with buying the same items separately. Same-day or next-day delivery, with 1 lighter free.", seoText: "A mega pack is the easiest way to buy crackers for Diwali in Siliguri: you get sparklers, flower pots, chakkars, rockets and sky shots at one price, for less than buying them one by one. Compare all 3 packs, and choose the one that suits your family and your space.", guide: "best-cracker-combos-siliguri-budget" },
  { id: "sparklers", name: "Sparklers (Phuljhari)", seoTitle: "Sparklers (Phuljhari) Online in Siliguri", description: "Phuljhari and colour sparklers for the whole family. Order online and get them delivered anywhere in Siliguri the same day or the next day.", seoText: "Sparklers, called phuljhari or phuljhadi at home, are the first thing most families in Siliguri light on Diwali evening. Keep a bucket of water nearby for the used sticks, and keep children with an adult.", guide: "diwali-cracker-safety-guide" },
  { id: "flower-pots", name: "Flower Pots (Anar / Tubri)", seoTitle: "Flower Pots (Anar / Tubri) Online in Siliguri", description: "Anar and tubri flower pots that light up your courtyard or terrace with tall fountains of sparks. Same-day or next-day delivery in Siliguri.", seoText: "Flower pots are called anar in Hindi and tubri in Bengali. Light them on flat, open ground, step back straight away and never lean over one.", guide: "which-crackers-to-buy-diwali" },
  { id: "ground-chakkars", name: "Ground Chakkars (Chorki)", seoTitle: "Ground Chakkars (Chorki) Online in Siliguri", description: "Ground chakkars and chorki spinners for Diwali and Kali Puja nights. Order online for home delivery in Siliguri.", seoText: "Ground chakkars, or chorki, spin across the floor in a ring of sparks. They need a flat, clear surface, so a courtyard or an open terrace works best.", guide: "which-crackers-to-buy-diwali" },
  { id: "rockets", name: "Rockets (Hawai)", seoTitle: "Diwali Rockets (Hawai) Online in Siliguri", description: "Whistling rockets and hawai for open terraces and grounds. Order online for same-day or next-day delivery within Siliguri.", seoText: "Rockets, or hawai, need an open sky, so choose a terrace or a ground away from wires, trees and neighbouring buildings. Stand them in an empty bottle or a stand before lighting.", guide: "diwali-cracker-safety-guide" },
  { id: "aerial-shots", name: "Aerial Shots & Sky Cakes", seoTitle: "Aerial Shots & Sky Cakes Online in Siliguri", description: "Multi-shot sky cakes that turn your terrace into a fireworks show, from 30-shot cakes to grand finales. Delivered within Siliguri.", seoText: "Sky shots make a big finish for your Diwali night. Place the cake on flat, firm ground in an open space, light it once and move well back.", guide: "best-cracker-combos-siliguri-budget" },
  { id: "sound-crackers", name: "Sound Crackers", seoTitle: "Sound Crackers Online in Siliguri", description: "Traditional sound crackers for Diwali and Kali Puja in Siliguri. Please follow the timings and rules set by local authorities.", seoText: "Please check the rules before you buy or burst sound crackers. West Bengal has allowed only green crackers in recent years, within fixed hours on Diwali and Kali Puja night.", guide: "green-crackers-west-bengal-rules" },
  { id: "kids-special", name: "Kids Special", seoTitle: "Kids Crackers for Diwali in Siliguri", description: "Pop pops, magic snakes and colour smoke for children, always to be used with an adult nearby. Delivered within Siliguri.", seoText: "Even small crackers need an adult nearby. Choose an open space, keep water ready, and make sure children wear cotton clothes and closed footwear.", guide: "diwali-cracker-safety-guide" },
  { id: "sweets", name: "Local Mithai & Sweets", seoTitle: "Local Mithai & Diwali Sweets Online in Siliguri", description: "Rosogolla, sandesh, kaju katli, laddu, barfi and peda for your Diwali table and gifting. Order local mithai online in Siliguri.", seoText: "From Bengali rosogolla and sandesh to kaju katli and motichoor laddu, our mithai is chosen for Diwali and Kali Puja in Siliguri. Sweets are packed separately from crackers.", guide: "local-mithai-siliguri-diwali" },
  { id: "gift-hampers", name: "Gift Hampers", seoTitle: "Diwali Gift Hampers Online in Siliguri", description: "Ready-to-gift Diwali hampers with mithai, diyas and puja essentials for family, friends, staff and clients in Siliguri.", seoText: "A Diwali gift hamper saves you a trip to the market. Choose from sweets and diya hampers, puja hampers, crackers with mithai and office gift boxes, with delivery across Siliguri.", guide: "diwali-gift-hampers-siliguri" },
  { id: "diyas-decor", name: "Rangoli, Diyas & Decor", seoTitle: "Rangoli Colours, Diyas & Diwali Decor in Siliguri", description: "Rangoli colours, clay diyas, candles, marigold torans and puja thalis to get your home ready for Diwali in Siliguri.", seoText: "A little rangoli at the door, a marigold toran and a row of clay diyas are all you need to make your home feel festive. Order them with your crackers and get one delivery.", guide: "rangoli-diwali-decoration-ideas" },
];
