import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { DELIVERY_AREAS, LEGAL } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: `Delivery in Siliguri & Returns | ${LEGAL.brand}`,
    description: `Same-day or next-day delivery within Siliguri. Minimum order ₹2,000, free delivery, 1 free lighter, cancellations, returns and refunds at ${LEGAL.brand}.`,
    path: "/shipping-returns",
  }),
};

const sections: LegalSection[] = [
  {
    id: "delivery-area",
    title: "Where we deliver",
    body: (
      <>
        <p>
          We deliver <strong>only within Siliguri</strong>, including {DELIVERY_AREAS.join(", ")}. See all our{" "}
          <Link href="/delivery-areas">delivery areas</Link>. We can&apos;t deliver orders to addresses outside Siliguri, and crackers are not
          sent by courier to other cities. If you enter an address outside Siliguri, we&apos;ll contact you to cancel the
          order and refund any payment.
        </p>
      </>
    ),
  },
  {
    id: "delivery-charges",
    title: "Minimum order and delivery charges",
    body: (
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-[14px] border-collapse min-w-[360px]">
          <thead>
            <tr className="text-left text-[#5c5a52] border-b-2 border-[#f0dfc6]">
              <th className="py-2 pr-3 font-semibold">Order value (before discounts)</th>
              <th className="py-2 font-semibold">Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">₹2,000 or more</td>
              <td className="py-2 font-semibold text-[#b3261e]">Free</td>
            </tr>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">Below ₹2,000</td>
              <td className="py-2">Order can&apos;t be placed (minimum order ₹2,000)</td>
            </tr>
            <tr>
              <td className="py-2 pr-3">Free gift</td>
              <td className="py-2 font-semibold text-[#b3261e]">1 lighter free with every order</td>
            </tr>
            <tr className="border-b border-[#f0ede6]">
              <td className="py-2 pr-3">Cash on Delivery</td>
              <td className="py-2">+ ₹40 COD fee</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "delivery-time",
    title: "When will my order arrive?",
    body: (
      <>
        <ul>
          <li>
            <strong>Packing:</strong> we pack your order within {LEGAL.dispatchTime} after it is confirmed
            (UPI orders are confirmed once your payment is received).
          </li>
          <li>
            <strong>Delivery:</strong> {LEGAL.deliveryTime} within Siliguri, depending on when you order and your area. In the last days
            before Diwali and Kali Puja, please order early.
          </li>
        </ul>
        <p>These are estimates. Festival traffic, weather or local restrictions can occasionally cause delays.</p>
      </>
    ),
  },
  {
    id: "tracking",
    title: "Tracking your order",
    body: (
      <p>
        Once your order is out for delivery, the details appear under <Link href="/account">My Orders</Link> (if you signed in
        with your email) and on the <Link href="/track">Track Your Order</Link> page using your order number or phone
        number.
      </p>
    ),
  },
  {
    id: "address",
    title: "Address and delivery attempts",
    body: (
      <ul>
        <li>Please enter a complete address with a landmark and a phone number our delivery person can reach.</li>
        <li>
          Need to change the address? <Link href="/contact?topic=order">Contact us</Link> before the order is dispatched.
        </li>
        <li>
          If we can&apos;t deliver because the address was incomplete or nobody was available, we&apos;ll contact you to
          arrange another delivery. Crackers are not left unattended at the door.
        </li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    title: "Cancelling an order",
    body: (
      <p>
        You can cancel for free any time <strong>before your order is out for delivery</strong>.{" "}
        <Link href="/contact?topic=order">Contact us</Link> with your order number. If you paid by UPI, you get a full
        refund. After that an order can&apos;t be cancelled, but the return rules below still apply.
      </p>
    ),
  },
  {
    id: "returns",
    title: "Returns and replacements",
    body: (
      <>
        <p>
          For safety and hygiene reasons we can&apos;t take back crackers or sweets once they are delivered, and we can&apos;t
          accept change-of-mind returns. But if something is wrong with your order, we&apos;ll make it right. We replace the item or refund you if
          it arrives:
        </p>
        <ul>
          <li>damaged, leaking or tampered with;</li>
          <li>with a wrong or missing item;</li>
          <li>expired or not fit to eat (sweets).</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-to-return",
    title: "How to report a problem",
    body: (
      <ol className="list-decimal pl-5 space-y-1.5">
        <li>
          Within <strong>48 hours of delivery</strong>, <Link href="/contact?topic=return">contact us</Link> with your order
          number.
        </li>
        <li>Attach clear photos of the outer parcel, the shipping label and the product. An unboxing video helps.</li>
        <li>We reply within one business day. If we need the item back, we arrange the pickup or cover the return cost.</li>
        <li>You choose a replacement or a refund.</li>
      </ol>
    ),
  },
  {
    id: "refunds",
    title: "Refunds",
    body: (
      <ul>
        <li>Approved refunds are processed within 5–7 business days.</li>
        <li>UPI payments are refunded to the same UPI account they came from.</li>
        <li>For Cash on Delivery orders, we refund to a UPI ID or bank account you share with us.</li>
        <li>Your bank may take a few extra days to show the credit.</li>
        <li>
          Paid but didn&apos;t get an order confirmation? <Link href="/contact?topic=payment">Send us your UTR</Link>. We&apos;ll
          confirm your order or refund the full amount.
        </li>
      </ul>
    ),
  },
];

export default function ShippingReturnsPage() {
  return (
    <LegalPage
      title="Delivery & Returns"
      intro={
        <p>
          Everything about getting your Diwali order to you in Siliguri: the minimum order, delivery charges, how long it
          takes, and what to do if something isn&apos;t right. The full rules are in our <Link href="/terms">Terms + Conditions</Link>. Still have a question?{" "}
          <Link href="/contact">Contact us</Link>.
        </p>
      }
      sections={sections}
    />
  );
}
