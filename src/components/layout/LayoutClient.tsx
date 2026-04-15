"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Homepage has its own custom scroll handling (scene-based wheel/touch).
    // Lenis would conflict with it, so only enable on other pages.
    if (isHome) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isHome]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme={isHome ? "dark" : undefined}
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${isHome ? 'bg-[#080808]' : 'bg-background'}`}>
        <Navbar />
        <main className="relative mx-auto flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
