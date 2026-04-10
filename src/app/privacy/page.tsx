import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy | Mith Tech Data Protection",
    description: "Mith Tech is committed to protecting your data. Read our privacy policy on data collection, usage, security practices, and your rights under Indian law.",
    keywords: [
        "Mith Tech privacy policy",
        "data protection policy",
        "enterprise data security India",
        "user data rights",
        "privacy compliance India",
        "GDPR compliance",
        "data security practices"
    ],
    alternates: {
        canonical: "https://mith.tech/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Mith Tech",
        description: "How Mith Tech protects your data. Our commitment to transparency, security, and compliance with global data protection standards.",
        url: "https://mith.tech/privacy",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Privacy Policy" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Mith Tech",
        description: "Our commitment to data protection, transparency, and user privacy.",
        images: ["/assets/og-shared.png"],
    },
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
