import React from "react";
import Link from "next/link";

export const CTA: React.FC = () => {
  return (
    <section className="relative flex w-full items-center justify-center px-4 py-32 sm:px-6 md:py-40">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 sm:mb-7 md:text-[13px] md:tracking-[0.34em]">
          See What's Possible
        </p>
        <h2 className="mb-8 text-[clamp(3.2rem,11vw,7rem)] font-bold leading-[0.96] tracking-tight text-white sm:mb-10 md:leading-[0.94]">
          Start Your
          <br />
          <span className="text-white/90 [text-wrap:balance]">Transformation</span>
        </h2>
        <p className="mb-12 max-w-3xl px-2 text-base leading-relaxed text-white/40 sm:mb-16 sm:text-[20px] sm:leading-[1.75]">
          Join the businesses already running smarter with Mithtech. Get a personalized
          walkthrough and see exactly how our ecosystem drives measurable results.
        </p>

        <div className="flex w-full max-w-3xl flex-col justify-center gap-5 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="min-h-[60px] w-full border border-black bg-white px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-black shadow-xl shadow-white/10 transition-[transform,background-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:bg-neutral-100 hover:shadow-white/15 sm:flex-1 flex items-center justify-center text-center"
          >
            Get Your Custom Demo →
          </Link>
          <Link
            href="/products"
            className="min-h-[60px] w-full border border-white/10 bg-black px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80 transition-[border-color,color,transform,background-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:border-white/25 hover:bg-black hover:text-white sm:flex-1 flex items-center justify-center text-center"
          >
            Explore the Full Ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
};
