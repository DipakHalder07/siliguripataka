import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import JsonLd from "@/components/JsonLd";
import { DELIVERY_AREAS, LEGAL } from "@/lib/legal";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Same-Day Diwali Cracker Delivery Areas in Siliguri | Siliguri Pataka",
    description: `Same-day or next-day delivery of Diwali crackers, mithai and gift hampers across Siliguri, including ${DELIVERY_AREAS.slice(0, 3).join(", ")} and more.`,
    path: "/delivery-areas",
  }),
};

const sections: LegalSection[] = [
  {
    id: "areas",
    title: "Areas we deliver to",
    body: (
      <>
        <p>We deliver crackers, local mithai, gift hampers, rangoli and diyas across Siliguri, including:</p>
        <ul className="grid sm:grid-cols-2 gap-x-6">
          {DELIVERY_AREAS.map((area) => (
            <li key={area}>{area}, Siliguri</li>
          ))}
        </ul>
        <p>
          Not sure about your area? <Link href="/contact?topic=order">Contact us</Link> or WhatsApp {LEGAL.supportPhone} before you order.
        </p>
      </>
    ),
  },
  {
    id: "how-fast",
    title: "How fast is delivery?",
    body: (
      <p>
        We deliver <strong>{LEGAL.deliveryTime}</strong>, depending on when you order and how far you are. In the last days
        before Diwali and Kali Puja the roads get busy, so please order early.
      </p>
    ),
  },
  {
    id: "cost",
    title: "What does it cost?",
    body: (
      <ul>
        <li>Minimum order: ₹2,000.</li>
        <li>Delivery: free on every order.</li>
        <li>1 lighter free with every order.</li>
        <li>Cash on delivery, where available, carries a ₹40 fee shown at checkout.</li>
      </ul>
    ),
  },
  {
    id: "receiving",
    title: "Receiving your order",
    body: (
      <ul>
        <li>An adult must receive the delivery, because it can contain crackers and a lighter.</li>
        <li>Please share a landmark and a phone number we can reach.</li>
        <li>Sweets are packed separately from crackers.</li>
      </ul>
    ),
  },
  {
    id: "outside",
    title: "Outside Siliguri",
    body: <p>We don&apos;t deliver outside Siliguri, and crackers are not sent by courier to other cities.</p>,
  },
];

export default function DeliveryAreasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Delivery Areas in Siliguri", path: "/delivery-areas" },
          ]),
          faqJsonLd([
            {
              q: "Which areas of Siliguri do you deliver to?",
              a: `We deliver across Siliguri, including ${DELIVERY_AREAS.join(", ")}.`,
            },
            {
              q: "How fast is delivery in Siliguri?",
              a: `We deliver ${LEGAL.deliveryTime}, depending on when you order and how far you are.`,
            },
            {
              q: "What does delivery cost?",
              a: "Delivery is free on every order. The minimum order is ₹2,000, and 1 lighter comes free with every order.",
            },
            { q: "Do you deliver outside Siliguri?", a: "No. We don't deliver outside Siliguri, and crackers are not sent by courier to other cities." },
          ]),
        ]}
      />
      <LegalPage
        title="Delivery Areas in Siliguri"
        intro={
          <p>
            {LEGAL.brand} delivers only within Siliguri. See the full <Link href="/shipping-returns">delivery and returns details</Link>,
            or <Link href="/collections/all">start shopping</Link>.
          </p>
        }
        sections={sections}
      />
    </>
  );
}
