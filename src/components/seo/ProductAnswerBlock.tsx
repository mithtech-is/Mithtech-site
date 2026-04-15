import React from "react";
import { Product } from "@/data/products";

interface ProductAnswerBlockProps {
  product: Product;
}

/**
 * A concise, citation-friendly "Quick Answer" block at the top of product pages.
 *
 * Optimized for:
 *  - AEO (Answer Engine Optimization): direct 2-sentence answers that Google
 *    snippets, "People Also Ask", and voice search can lift verbatim.
 *  - GEO (Generative Engine Optimization): structured facts that ChatGPT,
 *    Perplexity, Claude, and Gemini can cite.
 *
 * The visible copy uses `speakable` CSS classes that pair with the speakable
 * schema emitted from ProductShowcase, so voice assistants read the short
 * answer rather than surrounding UI chrome.
 */
export function ProductAnswerBlock({ product }: ProductAnswerBlockProps) {
  const firstSentence = product.longDescription
    .split(/(?<=[.!?])\s+/)[0]
    ?.trim() || product.longDescription;

  const quickAnswer = `${product.title} is a ${product.category.toLowerCase()} solution implemented by Mith Tech, an experienced ERPNext and Frappe implementation company headquartered in Bangalore, India. ${firstSentence}`;

  const facts = [
    { label: "Category", value: product.category },
    { label: "Deployment", value: product.type === "proprietary" ? "Mith Tech proprietary platform" : "Expert-managed implementation" },
    { label: "Typical go-live", value: "4 to 12 weeks" },
    { label: "Licensing", value: "Zero per-user fees" },
  ];

  return (
    <section
      id="quick-answer"
      aria-label={`Quick answer about ${product.title}`}
      className="w-full border-y border-black/[0.05] bg-black/[0.015] py-12 sm:py-16"
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta itemProp="headline" content={`What is ${product.title}?`} />
      <meta itemProp="inLanguage" content="en-IN" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
              Quick Answer
            </span>
          </div>
          <h2
            className="mb-6 text-2xl font-extrabold tracking-tight text-black sm:text-3xl speakable-summary"
            itemProp="alternativeHeadline"
          >
            What is {product.title}?
          </h2>
          <p
            className="mb-10 text-lg leading-relaxed text-black/70 speakable-summary"
            itemProp="abstract"
          >
            {quickAnswer}
          </p>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-black/[0.06] bg-white p-5"
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-snug text-black">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
