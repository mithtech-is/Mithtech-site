import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service | Mith Tech Legal Agreement",
    description: "Review the terms of service governing your use of Mith Tech products, platforms, and consulting services. Clear, transparent legal terms for enterprises.",
    keywords: [
        "Mith Tech terms of service",
        "enterprise software agreement",
        "service level agreement India",
        "software licensing terms",
        "ERP service terms",
        "consulting terms and conditions",
        "Mith Tech legal"
    ],
    alternates: {
        canonical: "https://mith.tech/terms",
    },
    openGraph: {
        title: "Terms of Service | Mith Tech",
        description: "Clear, transparent terms governing Mith Tech products, platforms, and consulting services.",
        url: "https://mith.tech/terms",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Terms of Service" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Mith Tech",
        description: "Terms and conditions for Mith Tech products, platforms, and services.",
        images: ["/assets/og-shared.png"],
    },
};

export default function TermsPage() {
    return <TermsClient />;
}
