import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Mith Tech | ERP & Automation Consulting Bangalore",
    description: "Connect with Mith Tech for world-class ERP, eCommerce, and automation consulting in Bangalore, India. Schedule a strategic consultation for your enterprise transformation.",
    keywords: [
        "contact ERPNext partner Bangalore",
        "software consultancy contact India",
        "ERP implementation consulting Bangalore",
        "MedusaJS developer contact India",
        "business automation experts Bangalore"
    ],
    openGraph: {
        title: "Contact Mith Tech | Enterprise Technology Architects Bangalore",
        description: "Ready to scale? Connect with our architects for a strategic consultation. Based in RajajiNagar, Bangalore.",
        url: "https://mithtech.com/contact",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Contact Mith Tech" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Mith Tech | ERP & Automation Consulting",
        description: "Schedule your strategic consultation with Mith Tech architects in Bangalore.",
        images: ["/assets/og-shared.png"]
    }
};

export default function ContactPage() {
    return <ContactPageClient />;
}
