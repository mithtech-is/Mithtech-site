export const CTA: React.FC = () => {
  return (
    <section
      className="relative z-10 flex items-center justify-center px-4 py-32 bg-transparent sm:px-6 md:py-40"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white/30 sm:mb-6 md:text-[11px] md:tracking-[0.3em]">
          The Complete Picture
        </p>
        <h2 className="mb-6 text-[clamp(2.2rem,9vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white sm:mb-8 md:leading-[1]">
          Build Your<br />
          <span className="text-white/90 underline decoration-white/20 underline-offset-8 [text-wrap:balance]">Dream Stack</span>
        </h2>
        <p className="mb-8 max-w-xl px-2 text-sm leading-relaxed text-white/40 sm:mb-12 sm:text-[15px]">
          From implementation to customisation and ongoing support — Mithtech makes enterprise software work exactly the way your business needs it.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button className="min-h-[48px] w-full border border-black bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-black shadow-xl shadow-white/10 transition-[transform,background-color,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:bg-neutral-100 hover:shadow-white/15 sm:w-auto sm:px-10">
            Book a Demo →
          </button>
          <button className="min-h-[48px] w-full border border-white/10 bg-transparent px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-white/60 transition-[border-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] hover:border-white/25 hover:text-white/90 sm:w-auto sm:px-10">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};
