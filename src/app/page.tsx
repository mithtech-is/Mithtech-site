import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Mith Tech | ERPNext Implementation Partner Bangalore & India",
  description: "Mith Tech is a leading ERPNext implementation partner in Bangalore. We provide Frappe ERPNext consultancy, open source ERP solutions, and digital transformation for enterprises across India.",
  keywords: [
    "ERPNext implementation partner Bangalore",
    "Frappe ERPNext consultant Bangalore",
    "ERPNext implementation India",
    "Frappe development company India",
    "open source ERP India",
    "enterprise ERP implementation Bangalore",
    "Mith Tech"
  ],
  alternates: {
    canonical: "https://mith.tech",
  },
  openGraph: {
    title: "Mith Tech | ERPNext Implementation Partner Bangalore & India",
    description: "Enterprise Business Systems & Digital Transformation. Specialized in ERPNext, Frappe, and Open Source Business Automation.",
    url: "https://mith.tech",
    siteName: "Mith Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/mithtech-white-logo.png",
        width: 1200,
        height: 630,
        alt: "Mith Tech - ERPNext Implementation Partner",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mith Tech | ERPNext Implementation Partner Bangalore & India",
    description: "Enterprise ERPNext & Frappe Solutions in Bangalore.",
    images: ["/assets/mithtech-white-logo.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
