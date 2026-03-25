import React from 'react';

interface HeroProps {
  isVisible: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center px-4 py-8 transition-all duration-700 ease-in-out sm:px-6 md:p-6 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
    >
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40 sm:mb-6 md:text-[11px] md:tracking-[0.3em]">
          INTRODUCING THE MITHTECH ECOSYSTEM.

        </p>
        <h1 className="mb-6 text-[clamp(2.4rem,10vw,5.125rem)] font-bold leading-[1.05] tracking-tight text-white sm:mb-8 md:leading-[1]">
          One Ecosystem.<br />
          <span className="text-white/90 decoration-white/20 [text-wrap:balance]">End-to-End Business.</span>
          <br />
          <span className="text-white/90 decoration-white/20 [text-wrap:balance]">Infrastructure.</span>
        </h1>
        <p className="mb-10 max-w-xl px-2 text-sm leading-relaxed text-white/40 sm:mb-16 sm:text-base">
          Mithtech designs, deploys and connects enterprise software ecosystems — from CRM to ERP, eCommerce and beyond.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button className="min-h-[48px] w-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-black shadow-xl shadow-white/5 transition-all active:translate-y-0 hover:-translate-y-0.5 hover:bg-neutral-200 sm:w-auto sm:px-8">
            Explore Ecosystem →
          </button>
          <button className="min-h-[48px] w-full border border-white/10 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-white/60 transition-all hover:border-white/25 hover:text-white/90 sm:w-auto sm:px-8">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};
