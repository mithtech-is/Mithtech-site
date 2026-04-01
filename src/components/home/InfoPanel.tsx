import React from "react";
import Link from "next/link";

interface InfoPanelProps {
  isVisible: boolean;
  data: {
    num: string;
    title: string;
    desc: string;
    prods: { n: string; i?: string }[];
  } | null;
  anchorY?: number | null;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ isVisible, data, anchorY }) => {
  if (!data) return null;

  return (
    <div
      className={`fixed z-20 pointer-events-none transition-all duration-500 ease-in-out md:pointer-events-auto
        bottom-24 left-4 right-4 sm:left-6 sm:right-6
        md:bottom-auto md:left-auto md:right-12 md:w-72 lg:right-16 lg:w-80
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        top: anchorY ? `clamp(9rem, ${anchorY}px, calc(100vh - 9rem))` : "50%",
        transform: `translateY(calc(-50% + ${isVisible ? "0px" : "16px"}))`,
      }}
    >
      <div className="flex max-w-md flex-col items-start rounded-3xl border border-white/10 bg-black/50 p-5 text-left shadow-2xl backdrop-blur-md md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30 md:tracking-[0.3em]">
          {data.num}
        </div>
        <div className="mb-6 h-px w-8 bg-white/20" />
        <h2 className="mb-4 text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl">
          {data.title}
        </h2>
        <p className="mb-6 max-w-[320px] text-sm leading-relaxed text-white/72 md:mb-8 md:text-[15px]">
          {data.desc}
        </p>
        <div className="mb-8 flex flex-wrap gap-2 md:mb-10">
          {data.prods.map((p, i) => (
            <span
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-wider text-white/85"
            >
              {p.i && (
                <img
                  src={p.i}
                  alt={p.n}
                  className="h-3.5 w-3.5 object-contain grayscale opacity-70"
                />
              )}
              {p.n}
            </span>
          ))}
        </div>
        <Link
          href="/products"
          className="pointer-events-auto inline-flex min-h-[48px] items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:text-white/80 group"
        >
          <span>Explore products</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};
