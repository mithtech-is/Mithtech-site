import { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
    title: "Industry Solutions | ERPNext for Every Sector",
    description: "Tailored ERPNext solutions for manufacturing, healthcare, retail, automotive, real estate & finance. Industry-specific workflows. Go live in weeks, not months.",
    keywords: [
        "ERPNext for manufacturing India",
        "ERPNext for manufacturing companies India",
        "healthcare ERP Bangalore",
        "retail ERP solutions India",
        "automotive ERP software India",
        "real estate CRM India",
        "financial services ERP India",
        "best ERP for small business India",
        "GST compliant ERP India",
        "industry-specific ERPNext",
        "cloud ERP for Indian SMEs",
        "open source ERP for manufacturing"
    ],
    alternates: {
        canonical: "https://mith.tech/industries",
    },
    openGraph: {
        title: "Industry Solutions | ERPNext for Every Sector | Mith Tech",
        description: "Industry-specific ERPNext implementations for manufacturing, healthcare, retail, automotive & more. Go live in weeks with Mith Tech.",
        url: "https://mith.tech/industries",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Industry Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Industry Solutions | Mith Tech",
        description: "ERPNext tailored for manufacturing, healthcare, retail, automotive & finance. Go live in weeks.",
        images: ["/assets/og-shared.png"],
    },
};

export default function IndustriesPage() {
    return <IndustriesClient />;
}
