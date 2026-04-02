import type { Metadata } from "next";
import FrappePageClient from "./FrappePageClient";

export const metadata: Metadata = {
    title: "Best ERPNext Implementation Partner Bangalore | Frappe ERPNext Consultant India",
    description: "Mith Tech is the best ERPNext implementation partner in Bangalore, India. We provide expert Frappe ERPNext consultancy, implementation services, and 70% cheaper TCO than SAP B1. Optimize your business today.",
    keywords: [
        "best ERPNext partner in Bangalore",
        "ERPNext implementation partner Bangalore",
        "Frappe ERPNext consultant Bangalore",
        "ERPNext implementation India",
        "ERPNext vs Odoo India",
        "ERPNext vs SAP B1 India",
        "70% cheaper than SAP ERPNext India",
        "open source CRM for SMBs India",
        "Frappe development company India",
        "Mith Tech"
    ],
    openGraph: {
        title: "ERPNext Implementation Partner Bangalore & India | Mith Tech",
        description: "Scale your enterprise with Frappe & ERPNext. 70% lower TCO than legacy ERPs. Expert implementation in Bangalore.",
        url: "https://mithtech.com/solutions/frappe",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        // Space for OpenGraph image
    },
    twitter: {
        card: "summary_large_image",
        title: "Best ERPNext Partner in Bangalore | Mith Tech",
        description: "Enterprise ERPNext implementation & Frappe consultancy in India.",
        // Space for Twitter image
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "ERPNext Implementation & Frappe Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Mith Tech",
                            "url": "https://mithtech.com"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "description": "Enterprise-grade ERPNext implementation, Frappe tailoring, and business process automation services in Bangalore, India.",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "ERPNext Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "ERPNext Implementation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Frappe Custom App Development"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <FrappePageClient />
        </>
    );
}
