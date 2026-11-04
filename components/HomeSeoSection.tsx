import Link from "next/link";
import { FREE_GIFT, MIN_ORDER_AMOUNT } from "@/lib/orderRules";
import { HOME_FAQS } from "@/lib/seoContent";
import { LEGAL } from "@/lib/legal";

const FACTS = [
  ["Delivers to", "Siliguri only"],
  ["Delivery time", LEGAL.deliveryTime.replace(/^./, (c) => c.toUpperCase())],
  ["Delivery charge", "Free"],
  ["Minimum order", `₹${MIN_ORDER_AMOUNT.toLocaleString("en-IN")}`],
  ["Free with every order", FREE_GIFT],
  ["Payment", "UPI or cash on delivery"],
];

const LINKS = [
  { label: "Mega cracker packs", href: "/collections/mega-packs" },
  { label: "Crackers price list", href: "/pages/cracker-price-list-siliguri" },
  { label: "Sky shots", href: "/collections/aerial-shots" },
  { label: "Gift hampers", href: "/collections/gift-hampers" },
  { label: "Diwali lights and diyas", href: "/collections/home-decor" },
  { label: "Rangoli and diyas", href: "/collections/diyas-decor" },
  { label: "Delivery areas", href: "/delivery-areas" },
  { label: "Firecracker mela guide", href: "/blog/siliguri-firecracker-mela-guide" },
];

/** Plain answers for shoppers and search engines: what the shop sells, where, and on what terms. */
export default function HomeSeoSection() {
  return (
    <section className="w-full bg-[#fff9ef] border-t border-[#f0dfc6] px-4 sm:px-8 lg:px-16 py-6 sm:py-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-stencil text-[22px] sm:text-[28px] font-bold text-[#2b1215] leading-tight">
          Diwali Crackers, Gift Hampers and Decor in Siliguri
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#5c5a52] leading-relaxed mt-2 max-w-4xl">
          Siliguri Pataka is an online Diwali store that delivers only within Siliguri, West Bengal. You can order crackers,
          gift hampers, rangoli, diyas and home decor in one cart for Diwali and Kali Puja.
        </p>

        <dl className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3 mt-4">
          {FACTS.map(([term, value]) => (
            <div key={term} className="bg-white border border-[#f0dfc6] rounded-lg px-3.5 py-2.5">
              <dt className="text-[12px] text-[#5c5a52]">{term}</dt>
              <dd className="text-[14px] sm:text-[14.5px] font-bold text-[#2b1215] mt-0.5 leading-snug">{value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#2b1215] mt-6 mb-2.5">Common questions</h3>
        <div className="space-y-1.5">
          {HOME_FAQS.map((faq) => (
            <details key={faq.q} className="group bg-white border border-[#f0dfc6] rounded-lg px-4 py-2.5">
              <summary className="cursor-pointer font-semibold text-[14.5px] text-[#2b1215]">{faq.q}</summary>
              <p className="text-[14px] text-[#5c5a52] leading-relaxed mt-1.5">{faq.a}</p>
            </details>
          ))}
        </div>

        <nav aria-label="Popular pages" className="flex flex-wrap gap-2 mt-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 bg-white border border-[#f0dfc6] hover:border-[#4a0e14] rounded-full text-[13px] font-semibold text-[#4a0e14] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
