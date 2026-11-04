import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: `Cancellation & Refund Policy | ${LEGAL.brand}, Siliguri`,
    description: `How cancellations, replacements and refunds work for crackers, gift hampers and decor ordered from ${LEGAL.brand} in Siliguri.`,
    path: "/refund-policy",
  }),
};

const sections: LegalSection[] = [
  {
    id: "cancel",
    title: "Cancelling an order",
    body: (
      <p>
        You can cancel free of charge any time before your order is out for delivery.{" "}
        <Link href="/contact?topic=order">Contact us</Link> or WhatsApp {LEGAL.supportPhone} with your order number. If you
        paid by UPI, you get a full refund. Because we deliver {LEGAL.deliveryTime}, please contact us quickly.
      </p>
    ),
  },
  {
    id: "by-product",
    title: "What can be returned",
    body: (
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-[14px] border-collapse min-w-[440px]">
          <thead>
            <tr className="text-left text-[#5c5a52] border-b-2 border-[#f0dfc6]">
              <th className="py-2 pr-3 font-semibold">Product</th>
              <th className="py-2 font-semibold">Our policy</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">Crackers and combos</td>
              <td className="py-2">No change-of-mind returns, for safety. Replaced or refunded if damaged, wrong or missing.</td>
            </tr>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">Gift hampers</td>
              <td className="py-2">Replaced or refunded if damaged, wrong or missing items.</td>
            </tr>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">Rangoli, diyas and decor</td>
              <td className="py-2">Replaced or refunded if damaged or wrong.</td>
            </tr>
            <tr>
              <td className="py-2 pr-3">Free lighter</td>
              <td className="py-2">A free gift with no cash value, so it is not refundable.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "report",
    title: "How to report a problem",
    body: (
      <ol className="list-decimal pl-5 space-y-1.5">
        <li>
          Within <strong>48 hours of delivery</strong>, <Link href="/contact?topic=return">contact us</Link> with your order number.
        </li>
        <li>Send clear photos of the box and the product.</li>
        <li>We reply within one business day and arrange a replacement or a refund.</li>
      </ol>
    ),
  },
  {
    id: "refunds",
    title: "How refunds are paid",
    body: (
      <ul>
        <li>Approved refunds are processed within 5–7 business days.</li>
        <li>UPI payments are refunded to the same UPI account.</li>
        <li>For Cash on Delivery orders, we refund to a UPI ID or bank account you share with us.</li>
        <li>
          Paid but didn&apos;t get an order confirmation? <Link href="/contact?topic=payment">Send us your UTR</Link>. We&apos;ll
          confirm your order or refund the full amount.
        </li>
      </ul>
    ),
  },
  {
    id: "outside",
    title: "Orders outside Siliguri",
    body: (
      <p>
        We deliver only within Siliguri. If an order has an address outside Siliguri, we&apos;ll contact you to cancel it and
        refund any payment in full.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      path="/refund-policy"
      title="Cancellation & Refund Policy"
      intro={
        <p>
          This policy covers everything you order from {LEGAL.brand} in Siliguri. See also our{" "}
          <Link href="/shipping-returns">Delivery &amp; Returns</Link> and <Link href="/terms">Terms + Conditions</Link>.
        </p>
      }
      sections={sections}
    />
  );
}
