import type { Product } from "@/data/products";
import { productVariants } from "@/lib/productVariants";
import { FREE_GIFT, MIN_ORDER_AMOUNT } from "@/lib/orderRules";
import { LEGAL } from "@/lib/legal";
import { MEGA_PACKS, packWorth } from "@/lib/megaPacks";

// Plain-language answers shown on the page and repeated in the search-engine data. Keep every answer
// true and visible: Google and AI answers quote these, and hidden or made-up answers get penalised.

export interface Faq {
  q: string;
  a: string;
}

export const rupees = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const isDecorCategory = (category: string) => category === "diyas-decor" || category === "home-decor";

const MINIMUM = rupees(MIN_ORDER_AMOUNT);
const GIFT = FREE_GIFT.toLowerCase();

/** The product name without its pack size, for titles that must stay short. */
export function shortProductName(title: string) {
  return title.split(" (")[0].trim();
}

/** Lowest and highest price in a list of products, counting every size. */
export function priceRange(products: Product[]) {
  const prices = products.flatMap((p) => productVariants(p).map((v) => v.price));
  return prices.length ? { min: Math.min(...prices), max: Math.max(...prices) } : null;
}

export function productSeoTitle(product: Product) {
  const name = shortProductName(product.title);
  const full = `${name} in Siliguri | ${LEGAL.brand}`;
  if (full.length <= 60) return full;
  const noBrand = `${name} in Siliguri`;
  if (noBrand.length <= 60) return noBrand;
  return `${name.slice(0, 48).replace(/\s+\S*$/, "")} in Siliguri`;
}

export function productSeoDescription(product: Product) {
  const name = shortProductName(product.title);
  const lowest = Math.min(...productVariants(product).map((v) => v.price));
  const lead = product.inStock ? `Buy ${name} in Siliguri from ${rupees(lowest)}.` : `${name} in Siliguri (currently sold out).`;
  const tail = `Same-day or next-day delivery, ${GIFT} free, ${MINIMUM} minimum order.`;
  const room = 158 - lead.length - tail.length - 2;
  const middle = product.subtitle.length <= room ? ` ${product.subtitle}.` : "";
  return `${lead}${middle} ${tail}`;
}

const COMMON_PRODUCT_FAQS: Faq[] = [
  {
    q: "Do you deliver outside Siliguri?",
    a: "No. Siliguri Pataka delivers only within Siliguri, so please order only if your delivery address is in Siliguri.",
  },
  {
    q: "How fast is delivery in Siliguri?",
    a: "We deliver the same day or the next day, depending on when you order and where you are in Siliguri. In the last days before Diwali and Kali Puja, please order early.",
  },
  {
    q: "Do I get anything free with my order?",
    a: `Yes. Every order comes with ${GIFT} free. It is packed with your delivery, so there is nothing extra to add to your cart.`,
  },
  {
    q: "What is the minimum order?",
    a: `The minimum order is ${MINIMUM} in total. You can mix crackers, sweets and decor in one order, and delivery within Siliguri is free.`,
  },
  {
    q: "How can I pay?",
    a: "You can pay by UPI (Google Pay, PhonePe, Paytm and others) or choose cash on delivery where it is available. A small COD fee is shown at checkout.",
  },
];

/** The questions shown on a product page. */
export function productFaqs(product: Product): Faq[] {
  if (product.category === "sweets") {
    return [
      {
        q: `How should I store ${product.title}?`,
        a: "Keep sweets in a cool, dry place and refrigerate milk-based sweets. They taste best when eaten soon after delivery, so please check the pack for the best-before date.",
      },
      {
        q: "Are sweets packed together with crackers?",
        a: "No. If your order has both, the sweets are packed separately from the crackers.",
      },
      ...COMMON_PRODUCT_FAQS,
    ];
  }
  if (isDecorCategory(product.category)) {
    return [
      {
        q: "Can I reuse this next year?",
        a: "Brass diyas, clay diyas, lanterns, torans and LED lights can be stored and used again. Keep it dry and packed away after the festival. Fresh flowers and powder colours are for one use.",
      },
      ...COMMON_PRODUCT_FAQS,
    ];
  }
  return [
    {
      q: "How do I use these crackers safely?",
      a: "Read the instructions on the pack first. Light one item at a time in an open space, at arm's length, and step back. Keep a bucket of water or sand nearby, and keep children with an adult.",
    },
    {
      q: "When can crackers be burst?",
      a: "Please follow the timings and rules set by the authorities in Siliguri and West Bengal for Diwali and Kali Puja.",
    },
    {
      q: "Can I return crackers?",
      a: "For safety reasons we can't take back crackers once they are delivered. If an item is damaged or wrong, contact us within 48 hours of delivery.",
    },
    ...COMMON_PRODUCT_FAQS,
  ];
}

function bestValuePack() {
  return [...MEGA_PACKS].sort((a, b) => (packWorth(b) - b.price) / packWorth(b) - (packWorth(a) - a.price) / packWorth(a))[0];
}

const COLLECTION_QUESTIONS: Record<string, Faq[]> = {
  "mega-packs": [
    {
      q: "Which mega pack gives the best value?",
      a: `The ${bestValuePack().title} has the highest discount of our 3 packs, compared with buying the same items separately from our shop.`,
    },
    {
      q: "Which mega pack should I choose for my family?",
      a: "The Starter Pack suits one small family evening, the Family Pack suits a full household, and the Grand Show Pack suits a terrace or open-ground show with a big finale.",
    },
  ],
  sparklers: [
    { q: "What is phuljhari?", a: "Phuljhari is the common name for a hand-held sparkler. It burns with a shower of sparks and is usually the first cracker lit on Diwali." },
    { q: "Are sparklers safe for children?", a: "Children should use sparklers only with an adult beside them. Hold them at arm's length, wear cotton clothes, and drop used sticks into a bucket of water." },
  ],
  "flower-pots": [
    { q: "What is the difference between anar and tubri?", a: "They are two names for the same type of cracker: a flower pot that stands on the ground and throws up a fountain of sparks." },
    { q: "Where should I light a flower pot?", a: "Place it on flat, open ground away from people, cars and anything that can burn, light it at arm's length, and step back." },
  ],
  "ground-chakkars": [
    { q: "What is a chorki?", a: "A chorki, or ground chakkar, is a small wheel that spins on the ground and throws out coloured sparks." },
    { q: "Where should I use ground chakkars?", a: "Use them on a hard, flat surface with no dry leaves or paper nearby. Keep bare feet away while they spin." },
  ],
  rockets: [
    { q: "How do I launch a rocket safely?", a: "Stand it in an empty bottle in an open area, point it away from buildings and wires, light it at arm's length and step back. Never launch from your hand." },
  ],
  "aerial-shots": [
    { q: "What is a sky shot or sky cake?", a: "It is a single box that fires a series of shots into the sky after you light one fuse. The number on the pack tells you how many shots it fires." },
    { q: "How much space do sky shots need?", a: "They need open sky with no wires, trees or buildings overhead. Check the distance printed on the pack, and keep people well behind that line." },
  ],
  "sound-crackers": [
    { q: "Are there rules for sound crackers?", a: "Yes. Authorities set rules on noise and timings for Diwali and Kali Puja. Please check the current notice for Siliguri and West Bengal before you use them." },
  ],
  "kids-special": [
    { q: "Which crackers are suitable for children?", a: "Pick low-noise items such as small fountains and colour smoke, and let an adult light them. No cracker is completely risk-free, so children should always be supervised." },
  ],
  sweets: [
    { q: "Are the sweets packed separately from crackers?", a: "Yes. If your order has both, sweets are packed separately from crackers." },
    { q: "How long do mithai stay fresh?", a: "Milk-based sweets such as sandesh and rosogolla are best eaten soon and kept in the fridge. Dry sweets last longer. Please check the pack for the best-before date." },
  ],
  "gift-hampers": [
    { q: "Can I order hampers for my office?", a: "Yes. See our corporate gifting page for bulk orders, and contact us with the quantity you need." },
    { q: "Can I send a hamper to someone else in Siliguri?", a: "Yes. Enter their address and phone number at checkout. We deliver only within Siliguri." },
  ],
  "diyas-decor": [
    { q: "What do I need to make a rangoli at home?", a: "A set of rangoli colours and a simple stencil or chalk outline is enough. Start with a small design near your door." },
  ],
  "home-decor": [
    { q: "What Diwali decor do I need for my home?", a: "String lights for the outside, one or two hanging lanterns for the door or balcony, and diyas or tea lights for inside are enough to light up a whole home." },
    { q: "Can I use Diwali lights and brass diyas again next year?", a: "Yes. LED lights, lanterns, brass diyas and glass holders can be packed away dry and used again next Diwali." },
  ],
};

/** The questions shown on a collection page, with prices taken from the live catalog. */
export function collectionFaqs(collectionId: string, collectionName: string, products: Product[]): Faq[] {
  const range = priceRange(products);
  const name = collectionName.toLowerCase();
  return [
    ...(range
      ? [
          {
            q: `How much do ${name} cost in Siliguri?`,
            a: `At Siliguri Pataka, ${name} cost from ${rupees(range.min)} to ${rupees(range.max)}, depending on the product and pack size. See the full list on this page.`,
          },
        ]
      : []),
    ...(COLLECTION_QUESTIONS[collectionId] || []),
    {
      q: `Do you deliver ${name} the same day in Siliguri?`,
      a: `We deliver ${LEGAL.deliveryTime} within Siliguri, depending on when you order and where you are. Delivery is free, and every order comes with ${GIFT} free.`,
    },
    {
      q: "Is there a minimum order?",
      a: `Yes, the minimum order is ${MINIMUM}. You can mix crackers, mithai, gift hampers and decor to reach it.`,
    },
  ];
}

export const HOME_FAQS: Faq[] = [
  {
    q: "Can I buy Diwali crackers online in Siliguri?",
    a: `Yes. Siliguri Pataka takes orders online for delivery within Siliguri only. Delivery is ${LEGAL.deliveryTime}, and the minimum order is ${MINIMUM}.`,
  },
  {
    q: "What can I order from Siliguri Pataka?",
    a: "Diwali crackers and mega cracker packs, local mithai, gift hampers, rangoli colours, diyas, puja items and home decor, all in one order.",
  },
  {
    q: "How much does delivery cost in Siliguri?",
    a: `Delivery within Siliguri is free, and every order includes ${GIFT} free. Cash on delivery, where available, has a small fee shown at checkout.`,
  },
  {
    q: "Which areas of Siliguri do you deliver to?",
    a: "We deliver across Siliguri, including Hill Cart Road, Sevoke Road, Burdwan Road, Pradhan Nagar, Hakimpara, Matigara, Salugara and Champasari. Contact us if you are unsure about your area.",
  },
  {
    q: "When is Diwali and Kali Puja in 2026?",
    a: "Diwali and Kali Puja both fall on Sunday, 8 November 2026. Please order early, because the last days before the festival are the busiest.",
  },
  {
    q: "How can I pay for my order?",
    a: "You can pay by UPI with Google Pay, PhonePe, Paytm and other apps, or choose cash on delivery where it is available.",
  },
];
