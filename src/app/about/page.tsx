import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Mith Tech | India's Trusted ERPNext Partner",
    description: "Bangalore-based enterprise technology company powering 70+ products. Trusted ERPNext & Frappe partner driving digital transformation with zero licensing fees.",
    keywords: [
        "about Mith Tech",
        "ERPNext implementation partner Bangalore",
        "best ERPNext partner in India",
        "Frappe development company India",
        "trusted ERPNext partner India",
        "open source ERP company India",
        "ERPNext consulting Bangalore",
        "cloud ERP India",
        "business automation company Bangalore",
        "ERPNext customization India",
        "Frappe custom app development",
        "who provides ERPNext consulting in Bangalore"
    ],
    alternates: {
        canonical: "https://mith.tech/about",
    },
    openGraph: {
        title: "About Mith Tech | India's Trusted ERPNext Partner",
        description: "70+ enterprise products. Zero licensing fees. 70% lower TCO. Discover how Mith Tech accelerates business operations from Bangalore, India.",
        url: "https://mith.tech/about",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "About Mith Tech - Enterprise Technology Partner India" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Mith Tech | ERPNext Partner Bangalore",
        description: "India's trusted ERPNext partner with 70+ enterprise products. Driving digital transformation from Bangalore.",
        images: ["/assets/og-shared.png"]
    }
};

export default function AboutPage() {
    return <AboutPageClient />;
}
