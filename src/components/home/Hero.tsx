import React from 'react';
import Link from 'next/link';

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
        <h1 className="text-responsive-h1 font-bold tracking-tight text-white/95 text-wrap-balance mb-4 leading-[1.05] sm:mb-8 md:leading-[1]">
          One Ecosystem.<br />
          <span className="text-white/90">End-to-End Business.</span>
          <br />
          <span className="text-white/90">Infrastructure.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/40 sm:mb-16 sm:text-base text-wrap-balance">
          Mithtech designs, deploys and connects enterprise software ecosystems — from CRM to ERP, eCommerce and beyond.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="min-h-[48px] w-full border border-black bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-black shadow-xl shadow-white/10 transition-[transform,background-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:bg-neutral-100 hover:shadow-white/15 sm:w-auto sm:px-8 flex items-center justify-center text-center"
          >
            Book a Demo →
          </Link>
          <Link
            href="/products"
            className="min-h-[48px] w-full border border-white/10 bg-black px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-white/80 transition-[border-color,color,transform,background-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:border-white/25 hover:bg-black hover:text-white sm:w-auto sm:px-8 flex items-center justify-center text-center"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};
