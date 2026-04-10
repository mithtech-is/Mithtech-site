import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
    title: "Enterprise Solutions | ERP, eCommerce & Automation",
    description: "Accelerate operations with ERPNext, Medusa JS eCommerce, Mautic marketing & n8n automation. Zero licensing fees. Full data ownership. Go live in weeks.",
    keywords: [
        "enterprise solutions India",
        "ERPNext solutions Bangalore",
        "ERPNext implementation cost India",
        "headless eCommerce solutions India",
        "marketing automation India",
        "WhatsApp automation for business India",
        "ERPNext CRM setup",
        "ERPNext HRMS India",
        "workflow automation India",
        "n8n automation services India",
        "Mautic setup India",
        "cloud ERP solutions India",
        "open source enterprise solutions"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions",
    },
    openGraph: {
        title: "Enterprise Solutions | ERP, eCommerce & Automation | Mith Tech",
        description: "Drive growth with scalable ERP, headless eCommerce, marketing automation & BI. No vendor lock-in. 70% lower TCO. Trusted by enterprises across India.",
        url: "https://mith.tech/solutions",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Enterprise Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Solutions | Mith Tech",
        description: "ERP, eCommerce, automation & BI. Zero licensing fees. Full data ownership. Go live in weeks, not months.",
        images: ["/assets/og-shared.png"],
    },
};

export default function SolutionsPage() {
    return <SolutionsClient />;
}
