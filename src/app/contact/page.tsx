import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Mith Tech | Get a Free ERP Consultation",
    description: "Schedule a free ERPNext consultation with India's leading implementation partner. Based in Bangalore. Response within 24 hours. Transform your business today.",
    keywords: [
        "contact ERPNext partner Bangalore",
        "free ERP consultation India",
        "ERPNext implementation quote",
        "hire ERPNext developer India",
        "ERPNext implementation cost India",
        "ERPNext partner near me",
        "Frappe consultant contact",
        "ERPNext consulting services India",
        "ERP consulting Bangalore",
        "Mith Tech contact",
        "ERPNext partner Mumbai",
        "ERPNext partner Delhi NCR"
    ],
    alternates: {
        canonical: "https://mith.tech/contact"
    },
    openGraph: {
        title: "Contact Mith Tech | Free ERPNext Consultation",
        description: "Schedule a free consultation with India's #1 ERPNext implementation partner. Based in Rajajinagar, Bangalore. Response within 24 hours.",
        url: "https://mith.tech/contact",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Contact Mith Tech - Free ERP Consultation" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Mith Tech | Free Consultation",
        description: "Get a free ERPNext consultation with India's leading implementation partner. Response within 24 hours.",
        images: ["/assets/og-shared.png"]
    }
};

export default function ContactPage() {
    return <ContactPageClient />;
}
