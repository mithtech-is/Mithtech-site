import { Metadata } from "next";
import PartnersPageClient from "./PartnersPageClient";

export const metadata: Metadata = {
    title: "Join Mith Tech Partner Network | ERPNext Reseller and Frappe Partner India",
    description: "Partner with Mith Tech, the leading ERPNext and Frappe implementation agency in India. Join our global network of resellers and system integrators.",
    keywords: [
        "ERPNext reseller partner India",
        "Frappe partner program India",
        "system integrator partner network",
        "white label ERP solutions India",
        "ERPNext implementation support for partners"
    ],
    openGraph: {
        title: "Join Mith Tech Partner Network | ERPNext & Frappe Resellers India",
        description: "Scale your business by delivering world-class enterprise solutions. Apply now to our global reseller program.",
        url: "https://mithtech.com/partners",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Partner Network" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Join Mith Tech Partner Network | ERPNext & Frappe Partner Program",
        description: "Global reseller network for enterprise-grade open source platforms.",
        images: ["/assets/og-shared.png"]
    }
};

export default function PartnersPage() {
    return <PartnersPageClient />;
}
