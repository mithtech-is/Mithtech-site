import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "About Mith Tech | ERPNext & Frappe Partner Bangalore, India",
    description: "Mith Tech is a leading software consultancy in Bangalore, India, specializing in enterprise-grade ERPNext, Frappe, and MedusaJS implementations. We architect scalable, open-source ecosystems for modern businesses.",
    keywords: [
        "ERPNext implementation partner Bangalore",
        "Frappe development company India",
        "software consultancy Bangalore",
        "enterprise ERP India",
        "open source business solutions Bangalore"
    ],
    openGraph: {
        title: "About Mith Tech | Leading ERPNext & Frappe Partner in India",
        description: "Specializing in scalability, open-source, and zero licensing fees. Discover how Mith Tech transforms enterprise operations from Bangalore.",
        url: "https://mithtech.com/about",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "About Mith Tech" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Mith Tech | ERPNext & Frappe Partner Bangalore",
        description: "Leading software consultancy for enterprise open-source solutions in India.",
        images: ["/assets/og-shared.png"]
    }
};

export default function AboutPage() {
    return <AboutPageClient />;
}
