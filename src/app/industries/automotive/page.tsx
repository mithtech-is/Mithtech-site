import type { Metadata } from "next";
import AutomotivePage from "./AutomotivePageClient";

export const metadata: Metadata = {
    title: "Automotive ERP India | Workshop Management System",
    description: "Streamline your auto workshop with ERPNext. Service booking, parts inventory, CRM & billing in one system. Trusted by automotive businesses across Bangalore.",
    keywords: [
        "automotive ERP India",
        "workshop management system India",
        "car repair booking system India",
        "garage management software Bangalore",
        "auto repair shop software India",
        "automotive CRM India",
        "spare parts inventory software",
        "vehicle service management India",
        "ERPNext for automotive",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/automotive",
    },
    openGraph: {
        title: "Automotive ERP India | Workshop Management | Mith Tech",
        description: "Service booking, parts inventory, CRM & billing in one system. Transform your automotive business with ERPNext. Trusted across Bangalore.",
        url: "https://mith.tech/industries/automotive",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Automotive ERP India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Automotive ERP India | Mith Tech",
        description: "Workshop management, parts inventory & CRM in one system. Built for automotive businesses across India.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <AutomotivePage />;
}
