import type { Metadata } from "next";
import FrappeERPNextPageClient from "./FrappeERPNextPageClient";

export const metadata: Metadata = {
    title: "Frappe Framework Development India | ERPNext Hosting & Customization",
    description: "Mith Tech is a leading Frappe framework development company in India. We offer expert ERPNext hosting, customization, and managed services in Bangalore. Scale your enterprise with open-source flexibility.",
    keywords: [
        "Frappe framework development India",
        "ERPNext hosting options India",
        "custom ERP solutions India",
        "enterprise ERP scaling India",
        "Frappe consultant India",
        "ERPNext implementation Bangalore",
        "Frappe developer Bangalore",
        "Mith Tech"
    ],
    alternates: {
        canonical: "/platforms/frappe-erpnext"
    },
    openGraph: {
        title: "Frappe & ERPNext Platform Solutions India | Mith Tech",
        description: "Build, scale, and automate your entire business on the world's most flexible open-source framework. Expert implementation in Bangalore.",
        url: "https://mith.tech/platforms/frappe-erpnext",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frappe Framework Experts India | Mith Tech",
        description: "Enterprise ERPNext implementation & Frappe consultancy in India.",
    },
};

export default function Page() {
    return <FrappeERPNextPageClient />;
}
