import { Metadata } from "next";
import PartnersPageClient from "./PartnersPageClient";

export const metadata: Metadata = {
    title: "Partner Program | Grow with Mith Tech Ecosystem",
    description: "Join India's leading ERPNext partner network. Resell 70+ enterprise products, earn recurring revenue, and get full implementation support. Apply today.",
    keywords: [
        "ERPNext reseller partner India",
        "Frappe partner program",
        "ERP reseller program India",
        "white label ERP solutions India",
        "system integrator partnership",
        "ERPNext channel partner",
        "enterprise software reseller India",
        "Mith Tech partner program",
        "open source ERP partnership",
        "technology partner network India"
    ],
    alternates: {
        canonical: "https://mith.tech/partners",
    },
    openGraph: {
        title: "Partner Program | Grow with Mith Tech Ecosystem",
        description: "Resell 70+ enterprise products. Earn recurring revenue. Get full implementation support. Join India's leading ERPNext partner network.",
        url: "https://mith.tech/partners",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Partner Program" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Partner Program | Mith Tech",
        description: "Join India's leading ERPNext partner network. 70+ products. Recurring revenue. Full support.",
        images: ["/assets/og-shared.png"]
    }
};

export default function PartnersPage() {
    return <PartnersPageClient />;
}
