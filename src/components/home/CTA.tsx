import React from "react";
import Link from "next/link";

export const CTA: React.FC = () => {
  const [glowPoint, setGlowPoint] = React.useState({ x: 0, y: 0, active: false });

  return (
    <section
      className="relative z-10 flex w-full self-stretch items-center justify-center overflow-hidden bg-transparent px-4 py-32 sm:px-6 md:py-40"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setGlowPoint({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => setGlowPoint((prev) => ({ ...prev, active: false }))}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPoint.active ? `${glowPoint.x}px ${glowPoint.y}px` : "50% 42%"
            }, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.08) 18%, rgba(255,255,255,0.035) 38%, rgba(255,255,255,0) 68%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.12),rgba(8,8,8,0.02),rgba(8,8,8,0.12))]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 sm:mb-7 md:text-[13px] md:tracking-[0.34em]">
          The Complete Picture
        </p>
        <h2 className="mb-8 text-[clamp(3.2rem,11vw,7rem)] font-bold leading-[0.96] tracking-tight text-white sm:mb-10 md:leading-[0.94]">
          Build Your
          <br />
          <span className="text-white/90 [text-wrap:balance]">Dream Stack</span>
        </h2>
        <p className="mb-12 max-w-3xl px-2 text-base leading-relaxed text-white/40 sm:mb-16 sm:text-[20px] sm:leading-[1.75]">
          From implementation to customisation and ongoing support — Mithtech makes
          enterprise software work exactly the way your business needs it.
        </p>

        <div className="flex w-full max-w-3xl flex-col justify-center gap-5 sm:flex-row sm:gap-6">
          <Link
            href="/contact"
            className="min-h-[60px] w-full border border-black bg-white px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-black shadow-xl shadow-white/10 transition-[transform,background-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:bg-neutral-100 hover:shadow-white/15 sm:flex-1 flex items-center justify-center text-center"
          >
            Book a Demo →
          </Link>
          <Link
            href="/products"
            className="min-h-[60px] w-full border border-white/10 bg-black px-8 py-5 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80 transition-[border-color,color,transform,background-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:border-white/25 hover:bg-black hover:text-white sm:flex-1 flex items-center justify-center text-center"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
};
