import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Mith Tech | #1 ERPNext Implementation Partner India",
  description: "India's leading ERPNext implementation partner in Bangalore. 70+ products, zero licensing fees, 70% lower TCO. Go live in weeks with trusted Frappe consultants.",
  keywords: [
    "ERPNext implementation partner India",
    "best ERPNext partner in India",
    "Frappe development company India",
    "ERPNext consultant Bangalore",
    "ERPNext implementation cost India",
    "ERPNext vs Odoo",
    "ERPNext vs SAP India",
    "open source ERP for SME India",
    "cloud ERP India",
    "GST compliant ERP software India",
    "WhatsApp automation for business India",
    "migrate from Tally to ERPNext",
    "ERPNext for manufacturing India",
    "certified ERPNext partner Bangalore",
    "business automation India",
    "Mith Tech"
  ],
  alternates: {
    canonical: "https://mith.tech",
  },
  openGraph: {
    title: "Mith Tech | #1 ERPNext Implementation Partner India",
    description: "Trusted by enterprises across India. 70+ products, zero licensing fees, 70% lower TCO than SAP. Accelerate your digital transformation with Mith Tech.",
    url: "https://mith.tech",
    siteName: "Mith Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/og-shared.png",
        width: 1200,
        height: 630,
        alt: "Mith Tech - #1 ERPNext Implementation Partner India",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mith Tech | #1 ERPNext Partner India",
    description: "70+ enterprise products. Zero licensing fees. 70% lower TCO. India's most trusted ERPNext implementation partner.",
    images: ["/assets/og-shared.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
