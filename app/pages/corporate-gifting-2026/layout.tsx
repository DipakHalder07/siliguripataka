import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Corporate & Bulk Diwali Gifting in Siliguri | Siliguri Pataka",
  description:
    "Bulk Diwali gift boxes for offices, clubs, housing societies and puja committees in Siliguri. Crackers, decor and diyas, delivered within the city.",
  path: "/pages/corporate-gifting-2026",
  image: "/assets/bulk-gifting-banner.webp",
});

const corporateFaqs = [
  {
    q: "What is the minimum order for bulk gifting?",
    a: "Every order on Siliguri Pataka has a minimum value of ₹2,000. For bulk gifting, share the number of gifts you need and we will tailor a quote for you, from 10 gifts to hundreds.",
  },
  {
    q: "Can I add our company name or a message?",
    a: "Yes, on request. We can add a sticker or card with your company or group name, and a short Diwali message. Tell us what you need when you send your inquiry.",
  },
  {
    q: "What occasions do you cater to?",
    a: "Diwali and Kali Puja gifting for staff, clients, club members and housing societies, along with festive events in Siliguri.",
  },
  {
    q: "What is the price range for gift boxes?",
    a: "We have options across budgets, from small kids' packs to grand show boxes. Let us know your budget per gift and the number of gifts, and we'll recommend the best fit.",
  },
  {
    q: "How do I place a bulk order?",
    a: "Fill in the 'Request a Custom Quote' form above, or reach out by email or WhatsApp. We will get back to you with options and pricing.",
  },
  {
    q: "Do you deliver outside Siliguri?",
    a: "No. We deliver only within Siliguri. Delivery to more than one office or address inside Siliguri can be arranged.",
  },
  {
    q: "How early should I order?",
    a: "As early as you can, especially for bigger orders. Stock and delivery slots fill up quickly in the last days before Diwali.",
  },
  {
    q: "What payment methods are accepted?",
    a: "You can pay by UPI or bank transfer. For bigger orders, talk to us about what suits your organisation.",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Corporate Gifting", path: "/pages/corporate-gifting-2026" },
        ])}
      />
      <JsonLd data={faqJsonLd(corporateFaqs)} />
      {children}
    </>
  );
}
