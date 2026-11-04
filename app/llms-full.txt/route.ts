import { COLLECTIONS } from "@/data/products";
import { Block, POSTS } from "@/lib/blog";
import { getStoreProducts } from "@/lib/catalog";
import { DELIVERY_AREAS, LEGAL } from "@/lib/legal";
import { FREE_GIFT, MIN_ORDER_AMOUNT } from "@/lib/orderRules";
import { productVariants } from "@/lib/productVariants";
import { SITE_URL } from "@/lib/seo";
import { HOME_FAQS, rupees } from "@/lib/seoContent";

/** One guide block as plain text. */
function blockText(block: Block): string {
  switch (block.type) {
    case "h2":
      return `\n### ${block.text}`;
    case "h3":
      return `\n#### ${block.text}`;
    case "p":
    case "tip":
      return block.text;
    case "ul":
    case "ol":
      return block.items.map((item) => `- ${item}`).join("\n");
    case "table":
      return [block.head.join(" | "), ...block.rows.map((row) => row.join(" | "))].join("\n");
    default:
      return "";
  }
}

// The full version of llms.txt: live products and prices, delivery terms and every guide, in plain text.
export async function GET() {
  const products = await getStoreProducts();
  const shop = COLLECTIONS.filter((c) => c.id !== "all").flatMap((collection) => {
    const items = products.filter((p) => p.category === collection.id);
    if (items.length === 0) return [];
    return [
      `\n### ${collection.name}`,
      `${collection.description} ${SITE_URL}/collections/${collection.id}`,
      ...items.map((product) => {
        const sizes = productVariants(product)
          .map((v) => `${v.name}: ${rupees(v.price)}`)
          .join(", ");
        const stock = product.inStock ? "" : " (sold out)";
        return `- ${product.title}${stock}. ${sizes}. ${SITE_URL}/products/${product.handle || product.id}`;
      }),
    ];
  });

  const lines = [
    `# ${LEGAL.brand}`,
    "",
    `> Online Diwali store delivering only within Siliguri, West Bengal, India: crackers, mega cracker packs, gift hampers, rangoli, diyas and Diwali lights.`,
    "",
    "## Key facts",
    `- Website: ${SITE_URL}`,
    `- Delivery area: Siliguri only, including ${DELIVERY_AREAS.join(", ")}`,
    `- Delivery time: ${LEGAL.deliveryTime}`,
    `- Delivery charge: free`,
    `- Minimum order: ${rupees(MIN_ORDER_AMOUNT)}`,
    `- Free with every order: ${FREE_GIFT}`,
    `- Payment: UPI or cash on delivery`,
    `- Contact: ${LEGAL.supportPhone}, ${LEGAL.supportEmail}`,
    "",
    "## Products and current prices (INR)",
    ...shop,
    "",
    "## Common questions",
    ...HOME_FAQS.flatMap((faq) => [`\n### ${faq.q}`, faq.a]),
    "",
    "## Policies",
    `- Delivery and returns: ${SITE_URL}/shipping-returns`,
    `- Cancellation and refunds: ${SITE_URL}/refund-policy`,
    `- Delivery areas: ${SITE_URL}/delivery-areas`,
    `- Terms: ${SITE_URL}/terms`,
    `- Privacy: ${SITE_URL}/privacy`,
    "",
    "## Guides",
    ...POSTS.flatMap((post) => [
      `\n## ${post.title}`,
      `${SITE_URL}/blog/${post.slug}`,
      post.excerpt,
      ...post.body.map(blockText).filter(Boolean),
      ...post.faq.flatMap((faq) => [`\nQ: ${faq.q}`, `A: ${faq.a}`]),
    ]),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
