import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import JsonLd from "@/components/JsonLd";
import { COLLECTIONS, Product } from "@/data/products";
import { getStoreProducts } from "@/lib/catalog";
import { LEGAL } from "@/lib/legal";
import { MIN_ORDER_AMOUNT } from "@/lib/orderRules";
import { productVariants } from "@/lib/productVariants";
import { breadcrumbJsonLd, collectionJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";
import { Faq, priceRange, rupees } from "@/lib/seoContent";

const PATH = "/pages/cracker-price-list-siliguri";
const TITLE = "Crackers Price List 2026 in Siliguri | Siliguri Pataka";
const DESCRIPTION =
  "Diwali crackers price list for Siliguri: sparklers, flower pots, rockets, sky shots and mega packs, with live prices for every pack size. Free delivery.";

export const metadata: Metadata = pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

const CRACKER_IDS = ["mega-packs", "sparklers", "flower-pots", "ground-chakkars", "rockets", "aerial-shots", "sound-crackers", "kids-special"];

function PriceTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[14px] text-left">
        <thead>
          <tr className="border-b border-[#f0dfc6]">
            <th className="py-2 pr-3 font-bold">Product</th>
            <th className="py-2 pr-3 font-bold">Pack</th>
            <th className="py-2 font-bold whitespace-nowrap">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.flatMap((product) =>
            productVariants(product).map((variant) => (
              <tr key={`${product.id}-${variant.name}`} className="border-b border-[#f0dfc6]/60">
                <td className="py-2 pr-3">
                  <Link href={`/products/${product.handle || product.id}`}>{product.title}</Link>
                </td>
                <td className="py-2 pr-3">{variant.name}</td>
                <td className="py-2 font-semibold whitespace-nowrap">
                  {product.inStock ? rupees(variant.price) : "Sold out"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default async function CrackerPriceListPage() {
  const catalog = await getStoreProducts();
  const crackers = catalog.filter((p) => CRACKER_IDS.includes(p.category));
  const range = priceRange(crackers.filter((p) => p.inStock));
  const groups = CRACKER_IDS.map((id) => ({
    collection: COLLECTIONS.find((c) => c.id === id),
    products: crackers.filter((p) => p.category === id),
  })).filter((g) => g.collection && g.products.length > 0);

  const faqs: Faq[] = [
    ...(range
      ? [
          {
            q: "How much do Diwali crackers cost in Siliguri?",
            a: `At Siliguri Pataka, crackers in stock cost from ${rupees(range.min)} to ${rupees(range.max)}, depending on the type and pack size. Prices change with stock, so this page always shows our current prices.`,
          },
        ]
      : []),
    {
      q: "Is it cheaper to buy a mega pack?",
      a: "Each mega pack costs less than buying the same items separately from our shop. The saving for each pack is shown on the mega packs page.",
    },
    {
      q: "Do these prices include delivery?",
      a: `Delivery within Siliguri is free. The minimum order is ${rupees(MIN_ORDER_AMOUNT)}, and cash on delivery, where available, has a small fee shown at checkout.`,
    },
  ];

  const sections: LegalSection[] = [
    ...groups.map(({ collection, products }) => ({
      id: collection!.id,
      title: `${collection!.name} price list`,
      body: (
        <>
          <PriceTable products={products} />
          <p>
            <Link href={`/collections/${collection!.id}`}>See all {collection!.name.toLowerCase()}</Link>
          </p>
        </>
      ),
    })),
    {
      id: "questions",
      title: "Common questions",
      body: (
        <>
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-bold text-[16px] mt-3">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          collectionJsonLd("Crackers Price List in Siliguri", DESCRIPTION, PATH, crackers),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Crackers Price List", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <LegalPage
        title="Crackers Price List in Siliguri"
        intro={
          <p>
            {range && (
              <>
                Crackers at {LEGAL.brand} cost from <strong>{rupees(range.min)}</strong> to <strong>{rupees(range.max)}</strong>.{" "}
              </>
            )}
            These are our current prices for delivery within Siliguri, {LEGAL.deliveryTime}, with a {rupees(MIN_ORDER_AMOUNT)}{" "}
            minimum order. Not sure what to buy? Read our <Link href="/blog/which-crackers-to-buy-diwali">cracker buying guide</Link>.
          </p>
        }
        sections={sections}
      />
    </>
  );
}
