import { Metadata } from "next";
import ClientsPageClient from "./ClientsPageClient";

export const metadata: Metadata = {
    title: "Customer Success Stories | Grow with Mith Tech",
    description:
        "See how businesses across India accelerate growth with Mith Tech. ERPNext implementations, automation wins, and digital transformation success stories.",
    keywords: [
        "Mith Tech clients",
        "ERPNext success stories India",
        "enterprise software case studies",
        "digital transformation results",
        "ERP implementation case studies India",
        "business automation success stories",
        "Mith Tech customer reviews",
        "ERPNext client testimonials",
        "business growth with ERP India",
        "Mith Tech portfolio"
    ],
    alternates: {
        canonical: "https://mith.tech/clients",
    },
    openGraph: {
        title: "Customer Success Stories | Grow with Mith Tech",
        description:
            "From startups to enterprises, see how Mith Tech delivers measurable ROI through ERPNext, automation, and digital transformation across India.",
        url: "https://mith.tech/clients",
        type: "website",
        images: [
            {
                url: "/assets/og-shared.png",
                width: 1200,
                height: 630,
                alt: "Mith Tech - Customer Success Stories",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Customer Success | Mith Tech",
        description:
            "See how businesses grow with Mith Tech. ERPNext implementations, automation wins, and transformation stories.",
        images: ["/assets/og-shared.png"],
    },
};

export default function ClientsPage() {
    return <ClientsPageClient />;
}
