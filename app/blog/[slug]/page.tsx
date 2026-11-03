import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Lightbulb } from "lucide-react";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";
import { LEGAL } from "@/lib/legal";
import { Block, POSTS, formatPostDate, getPost, headingId } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    ...pageMeta({
      title: `${post.seoTitle} | ${LEGAL.brand}`,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: post.image,
      type: "article",
    }),
    keywords: post.keywords,
  };
}

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={key}
          id={headingId(block.text)}
          className="text-[21px] sm:text-[23px] font-bold text-[#4a0e14] pt-4 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="text-[17px] sm:text-[18px] font-bold text-[#2b1215] pt-1">
          {block.text}
        </h3>
      );
    case "links":
      return (
        <nav key={key} aria-label={block.title} className="bg-white border border-[#f0dfc6] rounded-xl p-4">
          <div className="text-[13px] font-bold uppercase tracking-[1px] text-[#747576] mb-2">{block.title}</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[15px]">
            {block.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-[#4a0e14] underline decoration-[#f9a825] underline-offset-4">
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      );
    case "p":
      return <p key={key}>{block.text}</p>;
    case "ul":
      return (
        <ul key={key} className="list-disc pl-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="list-decimal pl-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div
          key={key}
          className="flex gap-3 bg-[#fff8ec] border border-[#f7dca8] rounded-xl p-4 text-[15px] text-[#4a0e14]"
        >
          <Lightbulb size={20} className="text-[#e08e0b] shrink-0 mt-0.5" />
          <p>{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div key={key} className="overflow-x-auto -mx-1">
          <table className="w-full text-[14.5px] border-collapse min-w-[460px]">
            <thead>
              <tr className="text-left border-b-2 border-[#4a0e14]">
                {block.head.map((h) => (
                  <th
                    key={h}
                    className="py-2.5 pr-3 font-semibold text-[#4a0e14]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-[#f0ede6] align-top">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-2.5 pr-3 ${j === 0 ? "font-semibold text-[#2b1215]" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

type Params = Promise<{ slug: string }>;

// The site frame renders straight away; the article (which needs the URL slug) streams in
// behind a skeleton, so navigating to a post is instant.
export default function BlogPostPage({ params }: { params: Params }) {
  return (
    <SiteLayoutWrapper>
      <div className="bg-[#fff9ef] text-[#2b1215]">
        <Suspense fallback={<ArticleSkeleton />}>
          <BlogArticle params={params} />
        </Suspense>
      </div>
    </SiteLayoutWrapper>
  );
}

function ArticleSkeleton() {
  return (
    <div
      className="max-w-[760px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 animate-pulse"
      aria-busy="true"
      aria-label="Loading article"
    >
      <div className="h-3 w-28 bg-[#f0dfc6] rounded" />
      <div className="h-9 w-4/5 bg-[#f0dfc6] rounded mt-5" />
      <div className="h-9 w-3/5 bg-[#f0dfc6] rounded mt-3" />
      <div className="aspect-[16/9] bg-[#ece8df] rounded-2xl mt-7" />
      <div className="space-y-3 mt-8">
        <div className="h-4 bg-[#f0dfc6] rounded" />
        <div className="h-4 bg-[#f0dfc6] rounded" />
        <div className="h-4 w-2/3 bg-[#f0dfc6] rounded" />
      </div>
    </div>
  );
}

async function BlogArticle({ params }: { params: Params }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="max-w-[760px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12">
        <JsonLd
          data={[
            articleJsonLd(post),
            faqJsonLd(post.faq),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ]}
        />
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] text-[#747576] mb-6"
        >
          <Link href="/" className="text-[#4a0e14] hover:underline">
            Home
          </Link>{" "}
          ›{" "}
          <Link href="/blog" className="text-[#4a0e14] hover:underline">
            Blog
          </Link>
        </nav>

        <div className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#e08e0b]">
          {post.category}
        </div>
        <h1 className="font-stencil text-[30px] sm:text-[40px] font-bold leading-tight text-[#2b1215] mt-2">
          {post.title}
        </h1>
        <div className="text-[13px] text-[#747576] mt-3">
          {formatPostDate(post.date)} · {post.readMinutes} min read
        </div>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#f3f1ec] mt-7">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 768px) 760px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <nav aria-label="In this guide" className="mt-7 bg-[#fff8ec] border border-[#f7dca8] rounded-xl p-4 sm:p-5">
          <div className="text-[13px] font-bold uppercase tracking-[1px] text-[#747576] mb-2">In this guide</div>
          <ol className="space-y-1 text-[14.5px]">
            {post.body.flatMap((block) =>
              block.type === "h2"
                ? [
                    <li key={block.text}>
                      <a href={`#${headingId(block.text)}`} className="text-[#4a0e14] hover:underline">
                        {block.text}
                      </a>
                    </li>,
                  ]
                : []
            )}
            <li>
              <a href="#faq" className="text-[#4a0e14] hover:underline">
                Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-8 space-y-5 text-[16.5px] leading-[1.8] text-[#3a3a36]">
          {post.body.map(renderBlock)}
        </div>

        <section id="faq" className="mt-10 scroll-mt-28">
          <h2 className="text-[21px] sm:text-[23px] font-bold text-[#4a0e14] mb-3">Frequently asked questions</h2>
          <div className="divide-y divide-[#f0dfc6] border-y border-[#f0dfc6]">
            {post.faq.map((item) => (
              <div key={item.q} className="py-3.5">
                <h3 className="font-bold text-[16px] text-[#2b1215]">{item.q}</h3>
                <p className="text-[15px] leading-relaxed text-[#3a3a36] mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 bg-[#4a0e14] text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-bold text-[18px]">Ready for Diwali?</div>
            <div className="text-[14px] text-[#f1dccb]">
              Crackers, mithai and gift hampers, delivered the same day or the next day in Siliguri.
            </div>
          </div>
          <Link
            href="/collections/all"
            className="shrink-0 bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[14px] px-6 py-3 rounded-lg text-center transition-colors"
          >
            Shop now
          </Link>
        </div>
      </article>

      <section className="border-t border-[#f0dfc6] bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-[20px] font-bold text-[#4a0e14] mb-6">
            More from the blog
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#f3f1ec]">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="text-[11.5px] font-bold uppercase tracking-[1.5px] text-[#e08e0b] mt-3">
                  {p.category}
                </div>
                <div className="text-[16px] font-bold text-[#4a0e14] mt-1 leading-snug group-hover:underline">
                  {p.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
