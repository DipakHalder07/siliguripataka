import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { IMAGE_CREDITS } from "@/data/imageCredits";
import { LEGAL } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: `Image Credits | ${LEGAL.brand}`,
    description: `Credits for the photographs used on ${LEGAL.brand} under Creative Commons licences.`,
    path: "/image-credits",
  }),
};

const sections: LegalSection[] = [
  {
    id: "photos",
    title: "Photographs",
    body: (
      <ul>
        {IMAGE_CREDITS.map((c) => (
          <li key={c.source}>
            <a href={c.source} target="_blank" rel="noopener noreferrer nofollow">
              {c.title}
            </a>{" "}
            by {c.author}, {c.license}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function ImageCreditsPage() {
  return (
    <LegalPage
      path="/image-credits"
      title="Image Credits"
      intro={
        <p>
          These photographs are used under their Creative Commons licences. Some have been cropped, resized or combined. Studio-style
          pictures of crackers and mega packs are computer-generated. All pictures show the type of product and may not show the exact item you receive.
        </p>
      }
      sections={sections}
    />
  );
}
