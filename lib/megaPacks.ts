// The 3 mega packs. "Worth" is what the same items cost when bought separately in this shop,
// so the saving shown to customers is real. If you change those prices, update the values here.

export interface MegaPack {
  id: string;
  title: string;
  accent: string;
  price: number;
  weight: string;
  image: string;
  badge?: string;
  nudge: string;
  items: Array<{ label: string; value: number }>;
}

export const MEGA_PACKS: MegaPack[] = [
  {
    id: "mega-starter-pack",
    title: "Mega Starter Pack",
    accent: "For a small family evening",
    price: 2499,
    weight: "1 Pack",
    image: "/assets/mega-starter.webp",
    nudge: "₹2,500 more gets you ₹4,178 more crackers in the Family Pack.",
    items: [
      { label: "50 Sparklers (30 cm)", value: 349 },
      { label: "10 Flower Pots", value: 499 },
      { label: "20 Ground Chakkars", value: 399 },
      { label: "10 Whistling Rockets", value: 599 },
      { label: "1 Sky Shot Cake (30 shots)", value: 1299 },
    ],
  },
  {
    id: "mega-family-pack",
    title: "Mega Family Pack",
    accent: "For the whole family",
    price: 4999,
    weight: "1 Pack",
    image: "/assets/mega-family.webp",
    badge: "BEST VALUE",
    nudge: "The highest discount of all 3 packs: 32% off.",
    items: [
      { label: "100 Sparklers (30 cm)", value: 629 },
      { label: "20 Flower Pots", value: 899 },
      { label: "5 Jumbo Anars", value: 649 },
      { label: "40 Ground Chakkars", value: 749 },
      { label: "20 Whistling Rockets", value: 1099 },
      { label: "2 Sky Shot Cakes (30 shots each)", value: 2399 },
      { label: "1 Kids Fun Fiesta Box", value: 899 },
    ],
  },
  {
    id: "mega-grand-show-pack",
    title: "Mega Grand Show Pack",
    accent: "For a terrace or ground show",
    price: 9999,
    weight: "1 Pack",
    image: "/assets/mega-grand.webp",
    badge: "BIGGEST SHOW",
    nudge: "The only pack with the 120-shot grand finale.",
    items: [
      { label: "200 Sparklers (30 cm)", value: 1258 },
      { label: "20 Flower Pots", value: 899 },
      { label: "10 Jumbo Anars", value: 1199 },
      { label: "40 Ground Chakkars", value: 749 },
      { label: "40 Whistling Rockets", value: 2198 },
      { label: "2 Sky Shot Cakes (30 shots each)", value: 2399 },
      { label: "1 Grand Finale Cake (120 shots)", value: 3999 },
      { label: "1 Kids Fun Fiesta Box", value: 899 },
    ],
  },
];

export const packWorth = (pack: MegaPack) => pack.items.reduce((sum, item) => sum + item.value, 0);

export function findMegaPack(id: string) {
  return MEGA_PACKS.find((pack) => pack.id === id) || null;
}
