import type { Metadata } from "next";
import FrappePageClient from "./FrappePageClient";

export const metadata: Metadata = {
    title: "#1 ERPNext Implementation Partner Bangalore | Mith Tech",
    description: "India's top ERPNext implementation partner. 70% lower TCO than SAP, zero licensing fees. Expert Frappe consultants in Bangalore. Go live in weeks, not months.",
    keywords: [
        "best ERPNext implementation company in India",
        "ERPNext implementation partner India",
        "certified ERPNext partner Bangalore",
        "ERPNext implementation cost India",
        "ERPNext vs SAP",
        "ERPNext vs Tally",
        "ERPNext vs Odoo",
        "Frappe developer India",
        "Frappe custom app development India",
        "migrate from Tally to ERPNext",
        "GST compliant ERP India",
        "ERPNext for manufacturing India",
        "cloud ERP India",
        "open source ERP for SME India"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions/frappe",
    },
    openGraph: {
        title: "#1 ERPNext Implementation Partner Bangalore | Mith Tech",
        description: "Transform your business with ERPNext. 70% lower TCO than SAP. Zero licensing fees. Go live in weeks. Trusted by enterprises across India.",
        url: "https://mith.tech/solutions/frappe",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - #1 ERPNext Implementation Partner India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "#1 ERPNext Partner Bangalore | Mith Tech",
        description: "70% lower TCO than SAP. Zero licensing fees. Go live in weeks. India's most trusted ERPNext & Frappe consultants.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "ERPNext Implementation & Frappe Development",
                            "provider": {
                                "@type": "Organization",
                                "name": "Mith Tech",
                                "url": "https://mith.tech",
                                "logo": "https://mith.tech/assets/logo.png"
                            },
                            "areaServed": [
                                { "@type": "City", "name": "Bangalore" },
                                { "@type": "State", "name": "Karnataka" },
                                { "@type": "Country", "name": "India" }
                            ],
                            "description": "India's #1 ERPNext implementation partner. Enterprise-grade ERPNext implementation, Frappe custom development, and business process automation with 70% lower TCO than SAP. Based in Bangalore, India.",
                            "offers": {
                                "@type": "AggregateOffer",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock",
                                "description": "Zero licensing fees. 70% lower TCO than SAP/Oracle. Go live in weeks."
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "ERPNext & Frappe Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "ERPNext Implementation",
                                            "description": "End-to-end ERPNext implementation for manufacturing, retail, healthcare, and more"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Frappe Custom App Development",
                                            "description": "Custom Frappe applications tailored to your business processes"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "ERPNext Migration from SAP/Tally/Odoo",
                                            "description": "Seamless migration from legacy ERPs to ERPNext with zero data loss"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "ERPNext Support & Maintenance",
                                            "description": "Ongoing support, updates, and optimization for ERPNext deployments"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "ERPNext Training & Consulting",
                                            "description": "Expert ERPNext training and strategic consulting for enterprises"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mith.tech" },
                                { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://mith.tech/solutions" },
                                { "@type": "ListItem", "position": 3, "name": "ERPNext & Frappe", "item": "https://mith.tech/solutions/frappe" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How much does ERPNext implementation cost in India?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ERPNext implementation through Mith Tech costs up to 70% less than SAP or Oracle with zero licensing fees. The total cost depends on modules, customization, and company size. Most SMBs and mid-market companies go live within weeks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is ERPNext better than SAP for Indian businesses?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "For most Indian SMBs and mid-market companies, ERPNext offers superior value: zero licensing fees, full source code access, GST compliance out of the box, and 70% lower TCO. SAP is suited for large multinationals with very specific industry requirements."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I migrate from Tally to ERPNext?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. Mith Tech provides seamless Tally to ERPNext migration services with complete data migration, parallel running, and zero business disruption. ERPNext covers accounting, inventory, HR, CRM and more — far beyond Tally's capabilities."
                                    }
                                }
                            ]
                        }
                    ])
                }}
            />
            <FrappePageClient />
        </>
    );
}
