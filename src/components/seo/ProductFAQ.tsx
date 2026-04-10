"use client";

import React from "react";
import { FAQ } from "@/lib/seo/faq-generator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface ProductFAQProps {
  faqs: FAQ[];
  productName: string;
}

export function ProductFAQ({ faqs, productName }: ProductFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  // Generate FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-24 bg-white border-t border-black/[0.05]">
      {/* Injecting JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                Verified Expertise & FAQs
              </span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-black/30">
              Last Updated: April 2026
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-10 tracking-tight uppercase">
            Everything you need to know about {productName}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border flex flex-col border-black/[0.05] rounded-[2rem] p-6 sm:p-10 shadow-2xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="border-black/5"
                >
                  <AccordionTrigger className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight text-left hover:no-underline hover:text-[#00aaff] transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg text-black/60 leading-relaxed italic pr-6 pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
