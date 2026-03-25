import React from 'react';

interface InfoPanelProps {
  isVisible: boolean;
  data: {
    num: string;
    title: string;
    desc: string;
    prods: { n: string; i?: string }[];
  } | null;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ isVisible, data }) => {
  if (!data) return null;

  return (
    <div
      className={`fixed z-20 transition-all duration-500 ease-in-out pointer-events-none md:pointer-events-auto
        bottom-24 md:bottom-auto md:top-1/2 md:right-8 lg:right-16
        left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-12
        md:-translate-y-1/2 md:w-72 lg:w-80
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:-translate-y-4'}
      `}
    >
      <div className="flex max-w-md flex-col items-start rounded-3xl border border-white/10 bg-black/50 p-5 text-left shadow-2xl backdrop-blur-md md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30 md:tracking-[0.3em]">
          {data.num}
        </div>
        <div className="h-px w-8 bg-white/20 mb-6" />
        <h2 className="mb-4 text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl">
          {data.title}
        </h2>
        <p className="mb-6 max-w-[320px] text-sm leading-relaxed text-white/72 md:mb-8 md:text-[15px]">
          {data.desc}
        </p>
        <div className="mb-8 flex flex-wrap gap-2 md:mb-10">
          {data.prods.map((p, i) => (
            <span key={i} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-wider text-white/85">
              {p.i && (
                <img 
                  src={p.i} 
                  alt={p.n} 
                  className="w-3.5 h-3.5 object-contain grayscale opacity-70" 
                />
              )}
              {p.n}
            </span>
          ))}
        </div>
        <button className="pointer-events-auto inline-flex min-h-[48px] items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:text-white/80 group">
          <span>Explore products</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};
