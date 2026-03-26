"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Initialize Lenis for global smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme={isHome ? "dark" : undefined} // Force dark on home, but let light mode take over on others
      enableSystem={false} // Disable system to ensure inner pages are consistently light
      disableTransitionOnChange
    >
      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${isHome ? 'bg-[#080808]' : 'bg-background'}`}>
        <Navbar />
        <main className="flex-1 w-full mx-auto relative px-4 sm:px-6 lg:px-8 overflow-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
