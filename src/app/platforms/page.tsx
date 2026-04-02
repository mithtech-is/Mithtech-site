import { Metadata } from "next";
import PlatformsPageClient from "./PlatformsPageClient";

export const metadata: Metadata = {
    title: "Enterprise Open Source Platforms | ERPNext, MedusaJS, Mautic, n8n India",
    description: "Architecting scalable technology ecosystems with world-class open-source platforms. Discover the Mith Tech stack for ERP, commerce, and automation in Bangalore.",
    keywords: [
        "enterprise open source platforms India",
        "ERPNext Bangalore",
        "MedusaJS development India",
        "Mautic implementation India",
        "n8n automation services Bangalore",
        "self-hosted business systems India"
    ],
    openGraph: {
        title: "Enterprise Open Source Platforms | ERPNext & MedusaJS Stack India",
        description: "Explore our collection of high-performance business applications. Scalable, modular, and customized for your growth.",
        url: "https://mithtech.com/platforms",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Enterprise Platforms" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Open Source Platforms | ERPNext & MedusaJS Bangalore",
        description: "Scale your business with our proven technology stack for ERP, commerce, and automation.",
        images: ["/assets/og-shared.png"]
    }
};

export default function PlatformsPage() {
    return <PlatformsPageClient />;
}
