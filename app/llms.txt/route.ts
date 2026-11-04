import { COLLECTIONS } from "@/data/products";
import { POSTS } from "@/lib/blog";
import { LEGAL } from "@/lib/legal";
import { FREE_GIFT, MIN_ORDER_AMOUNT } from "@/lib/orderRules";
import { SITE_URL } from "@/lib/seo";

// A short plain-text summary of the shop for AI assistants (the llms.txt convention).
export function GET() {
  const lines = [
    `# ${LEGAL.brand}`,
    "",
    `> Online Diwali store delivering only within Siliguri, West Bengal, India: crackers, mega cracker packs, gift hampers, rangoli, diyas and Diwali lights.`,
    "",
    "## Key facts",
    `- Delivery area: Siliguri only`,
    `- Delivery time: ${LEGAL.deliveryTime}`,
    `- Minimum order: ₹${MIN_ORDER_AMOUNT.toLocaleString("en-IN")}`,
    `- Free with every order: ${FREE_GIFT}`,
    `- Payment: UPI or cash on delivery`,
    `- Contact: ${LEGAL.supportPhone}, ${LEGAL.supportEmail}`,
    "",
    "## Shop",
    ...COLLECTIONS.map((c) => `- [${c.name}](${SITE_URL}/collections/${c.id}): ${c.description}`),
    `- [Crackers price list](${SITE_URL}/pages/cracker-price-list-siliguri): current prices for every pack`,
    `- [Delivery areas](${SITE_URL}/delivery-areas): where we deliver in Siliguri`,
    `- [Full details for AI tools](${SITE_URL}/llms-full.txt): every product, price and guide in plain text`,
    "",
    "## Guides",
    ...POSTS.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
