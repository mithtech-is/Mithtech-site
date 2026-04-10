import { Metadata } from "next";
import PlatformsPageClient from "./PlatformsPageClient";

export const metadata: Metadata = {
    title: "Open Source Platforms | ERPNext, Medusa & More",
    description: "Enterprise-grade open source platforms: ERPNext, Medusa JS, Mautic, n8n. Self-hosted, scalable, zero vendor lock-in. Trusted technology stack from Bangalore.",
    keywords: [
        "open source enterprise platforms India",
        "ERPNext platform Bangalore",
        "Frappe framework India",
        "Medusa JS platform India",
        "Mautic platform India",
        "n8n workflow platform India",
        "ERPNext hosting India",
        "self-hosted ERP India",
        "Frappe custom app development India",
        "ERPNext API integration",
        "cloud ERP platform India",
        "open source ERP for SME India"
    ],
    alternates: {
        canonical: "https://mith.tech/platforms",
    },
    openGraph: {
        title: "Open Source Platforms | ERPNext, Medusa & More | Mith Tech",
        description: "Self-hosted, scalable, zero vendor lock-in. The enterprise technology stack trusted by businesses across India.",
        url: "https://mith.tech/platforms",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Enterprise Open Source Platforms" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Open Source Platforms | Mith Tech",
        description: "ERPNext, Medusa JS, Mautic, n8n. Enterprise-grade, self-hosted, zero vendor lock-in. Built for scale.",
        images: ["/assets/og-shared.png"]
    }
};

export default function PlatformsPage() {
    return <PlatformsPageClient />;
}
