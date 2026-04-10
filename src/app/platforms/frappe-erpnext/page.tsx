import type { Metadata } from "next";
import FrappeERPNextPageClient from "./FrappeERPNextPageClient";

export const metadata: Metadata = {
    title: "Frappe & ERPNext Platform | Hosting & Development",
    description: "Expert Frappe framework development, ERPNext hosting & customization in India. Managed services, custom apps, zero licensing fees. Scale your enterprise today.",
    keywords: [
        "Frappe framework development India",
        "ERPNext hosting India",
        "ERPNext customization Bangalore",
        "Frappe developer India",
        "Frappe custom app development",
        "ERPNext API integration services",
        "ERPNext managed hosting India",
        "self-hosted ERP India",
        "ERPNext WhatsApp integration",
        "ERPNext implementation cost India",
        "cloud ERP platform India",
        "certified ERPNext partner"
    ],
    alternates: {
        canonical: "https://mith.tech/platforms/frappe-erpnext"
    },
    openGraph: {
        title: "Frappe & ERPNext Platform | Hosting & Development | Mith Tech",
        description: "Build and scale your business on the world's most flexible open-source ERP. Expert hosting, customization & managed services from Bangalore.",
        url: "https://mith.tech/platforms/frappe-erpnext",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Frappe ERPNext Platform" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Frappe & ERPNext Platform | Mith Tech",
        description: "Expert Frappe development, ERPNext hosting & customization. Zero licensing fees. Scale your enterprise.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <FrappeERPNextPageClient />;
}
