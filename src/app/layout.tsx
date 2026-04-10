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
  metadataBase: new URL('https://mith.tech'),
  title: "Mith Tech | #1 ERPNext Partner & Business Automation India",
  description: "India's leading ERPNext implementation partner. 70+ enterprise products, 70% lower TCO than SAP. Trusted by businesses across Bangalore and India for ERP, eCommerce & automation.",
  keywords: [
    "ERPNext implementation partner India",
    "best ERPNext partner in India",
    "Frappe development company India",
    "ERPNext implementation cost India",
    "ERPNext vs Odoo",
    "open source ERP for SME India",
    "cloud ERP India",
    "GST compliant ERP India",
    "WhatsApp automation for business India",
    "ERPNext customization",
    "migrate from Tally to ERPNext",
    "ERPNext for manufacturing India",
    "Frappe developer India",
    "business automation Bangalore",
    "certified ERPNext partner",
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
    title: "Mith Tech | #1 ERPNext Partner & Business Automation India",
    description: "India's leading ERPNext implementation partner with 70+ products. Drive growth with zero licensing fees and 70% lower TCO. Trusted by enterprises in Bangalore.",
    images: [
      {
        url: "/assets/og-shared.png",
        width: 1200,
        height: 630,
        alt: "Mith Tech - India's Leading ERPNext Implementation Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mith Tech | #1 ERPNext Partner India",
    description: "70+ enterprise products. 70% lower TCO. Zero licensing fees. India's most trusted ERPNext implementation partner in Bangalore.",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
                "name": "Mith Tech",
                "alternateName": ["Mithtech", "Mithtech Innovative Solutions"],
                "url": "https://mith.tech",
                "logo": "https://mith.tech/assets/logo.png",
                "image": "https://mith.tech/assets/og-shared.png",
                "description": "India's leading ERPNext implementation partner and business automation company. 70+ enterprise products with zero licensing fees and 70% lower TCO than legacy ERPs.",
                "foundingLocation": "Bangalore, India",
                "slogan": "Transform Your Business with Open Source Enterprise Solutions",
                "knowsAbout": ["ERPNext", "Frappe Framework", "Business Automation", "Headless eCommerce", "WhatsApp Automation", "Marketing Automation", "Open Source ERP", "ERPNext Implementation", "ERPNext Customization", "Cloud ERP India", "GST Compliant ERP", "Tally to ERPNext Migration", "ERPNext for Manufacturing", "ERPNext HRMS", "ERPNext CRM", "Frappe Custom App Development"],
                "sameAs": [
                  "https://linkedin.com/company/mithtech"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-8277540332",
                    "contactType": "sales",
                    "areaServed": ["IN", "US", "GB", "AE", "SG"],
                    "availableLanguage": ["en", "hi", "kn"]
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-8277540332",
                    "contactType": "technical support",
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
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "12.9716",
                  "longitude": "77.5946"
                },
                "areaServed": [
                  { "@type": "City", "name": "Bangalore" },
                  { "@type": "State", "name": "Karnataka" },
                  { "@type": "Country", "name": "India" }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Mith Tech Enterprise Solutions",
                  "itemListElement": [
                    { "@type": "OfferCatalog", "name": "ERPNext Implementation & Consulting" },
                    { "@type": "OfferCatalog", "name": "Frappe Custom App Development" },
                    { "@type": "OfferCatalog", "name": "Headless eCommerce (Medusa JS)" },
                    { "@type": "OfferCatalog", "name": "WhatsApp Business Automation (Polygin)" },
                    { "@type": "OfferCatalog", "name": "Marketing Automation (Mautic)" },
                    { "@type": "OfferCatalog", "name": "Workflow Automation (n8n)" },
                    { "@type": "OfferCatalog", "name": "Business Intelligence & Analytics" },
                    { "@type": "OfferCatalog", "name": "Learning Management Systems" }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Mith Tech",
                "url": "https://mith.tech",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://mith.tech/products?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mith.tech" },
                  { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://mith.tech/solutions" },
                  { "@type": "ListItem", "position": 3, "name": "Products", "item": "https://mith.tech/products" },
                  { "@type": "ListItem", "position": 4, "name": "Platforms", "item": "https://mith.tech/platforms" },
                  { "@type": "ListItem", "position": 5, "name": "Industries", "item": "https://mith.tech/industries" },
                  { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://mith.tech/contact" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Mith Tech Main Navigation",
                "itemListElement": [
                  { "@type": "SiteNavigationElement", "position": 1, "name": "About", "url": "https://mith.tech/about" },
                  { "@type": "SiteNavigationElement", "position": 2, "name": "Products", "url": "https://mith.tech/products" },
                  { "@type": "SiteNavigationElement", "position": 3, "name": "Solutions", "url": "https://mith.tech/solutions" },
                  { "@type": "SiteNavigationElement", "position": 4, "name": "Platforms", "url": "https://mith.tech/platforms" },
                  { "@type": "SiteNavigationElement", "position": 5, "name": "Industries", "url": "https://mith.tech/industries" },
                  { "@type": "SiteNavigationElement", "position": 6, "name": "Contact", "url": "https://mith.tech/contact" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best ERPNext implementation company in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mith Tech is India's leading ERPNext implementation partner based in Bangalore. With 70+ enterprise products and proven expertise in Frappe development, Mith Tech delivers ERPNext solutions with 70% lower TCO than legacy ERPs like SAP and zero licensing fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does ERPNext implementation cost compared to SAP?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ERPNext implementation through Mith Tech costs up to 70% less than SAP B1 with zero licensing fees. Unlike SAP, ERPNext is open source, meaning no per-user charges and full data ownership. Most businesses go live in weeks, not months."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Mith Tech provide WhatsApp automation for businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Mith Tech offers Polygin, a WhatsApp automation platform for businesses in India. It enables automated messaging, catalog sharing, order management, and customer support directly through WhatsApp Business API."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What industries does Mith Tech serve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Mith Tech serves manufacturing, retail, healthcare, automotive, real estate, financial services, and education industries with tailored ERPNext implementations and business automation solutions across India."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is ERPNext better than Tally or Odoo for Indian businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ERPNext offers full ERP capabilities including accounting, inventory, HR, CRM, and manufacturing — unlike Tally which is limited to accounting. Compared to Odoo, ERPNext has zero licensing fees and is fully open source. Mith Tech helps businesses migrate from Tally and Odoo to ERPNext seamlessly."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which is better for small business — ERPNext or Odoo?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For most Indian small businesses, ERPNext is better than Odoo. ERPNext is 100% open source with zero per-user licensing fees, native GST compliance with e-invoicing, and complete manufacturing, HRMS, and CRM modules included for free. Odoo Enterprise charges per-user fees that scale against growing businesses, and its Community Edition lacks critical modules like manufacturing and advanced accounting. ERPNext delivers 40-60% lower total cost of ownership over 3 years."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does ERPNext implementation cost in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ERPNext implementation for a typical small business in India costs between INR 2-8 lakhs as a one-time expense, depending on complexity, modules, and customization. There are zero licensing fees. Annual costs include hosting (INR 1.5-5 lakhs/year) and optional managed support. This is 40-60% lower than SAP Business One or Odoo Enterprise over 3 years. Mith Tech in Bangalore provides certified ERPNext implementation with guaranteed timelines."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I migrate from Tally to ERPNext?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. ERPNext has dedicated Tally migration tools that import your chart of accounts, opening balances, customer and vendor masters, and historical transactions with zero data loss. Most Tally-to-ERPNext migrations for small businesses complete in 2-4 weeks through a certified ERPNext partner like Mith Tech in Bangalore."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is ERPNext good for manufacturing companies in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ERPNext is one of the best ERP solutions for Indian manufacturers. It includes BOM management, production planning, work orders, job cards, subcontracting, quality inspection, and full GST compliance with e-invoicing — all at zero licensing cost. Many manufacturing SMEs in India have switched from SAP and Tally to ERPNext for its lower cost and comprehensive manufacturing module."
                    }
                  }
                ]
              }
            ])
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
