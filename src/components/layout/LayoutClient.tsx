"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
        <main className="relative mx-auto flex-1 w-full overflow-x-hidden px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
