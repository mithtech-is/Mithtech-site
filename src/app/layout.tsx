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
  title: "Mith Tech | Enterprise Open Source ERP & Digital Transformation India",
  description: "Mith Tech is India's leading digital transformation partner, specializing in ERPNext implementation, Medusa JS eCommerce, and high-performance business automation in Bangalore.",
  keywords: [
    "ERPNext implementation partner Bangalore",
    "Frappe development company India",
    "Medusa JS eCommerce development India",
    "Open Source ERP India",
    "n8n automation services India",
    "Digital Transformation Bangalore",
    "Mith Tech"
  ],
  authors: [{ name: "Mith Tech" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mith.tech",
    siteName: "Mith Tech",
    title: "Mith Tech | Enterprise Open Source Systems & Digital Transformation",
    description: "Leading implementation partner for ERPNext, Medusa JS, and Business Automation in India. Scaling SMBs with open-source excellence.",
    images: [
      {
        url: "/assets/og-shared.png",
        width: 1200,
        height: 630,
        alt: "Mith Tech - Enterprise Business Systems India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mith Tech | Digital Transformation India",
    description: "Expert ERPNext & Medusa JS consultants in Bangalore.",
    images: ["/assets/og-shared.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mith Tech",
              "alternateName": "Mithtech",
              "url": "https://mithtech.com",
              "logo": "https://mithtech.com/assets/logo.png",
              "sameAs": [
                "https://linkedin.com/company/mithtech"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8277540332",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi", "kn"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rajajinagar",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560010",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
