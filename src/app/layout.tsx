import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/layout/LayoutClient";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mith Tech | Enterprise Business Systems & Digital Transformation",
  description: "Mith Tech provides scalable ERP, eCommerce, automation, and analytics solutions built on powerful frameworks. Modernize your business today.",
  keywords: ["ERP", "eCommerce", "Business Automation", "Analytics", "Digital Transformation", "Mith Tech"],
  authors: [{ name: "Mith Tech" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
