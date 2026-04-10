import type { Metadata } from "next";
import LMSPageClient from "./LMSPageClient";

export const metadata: Metadata = {
    title: "ShoiLMS | Enterprise Learning Platform India",
    description: "Scalable LMS for employee onboarding, certification & corporate training. White-labeled, SCORM-compliant. Trusted by enterprises across India. Built in Bangalore.",
    keywords: [
        "enterprise LMS India",
        "ShoiLMS platform",
        "employee onboarding LMS India",
        "corporate training software India",
        "SCORM compliant LMS India",
        "LMS implementation Bangalore",
        "white label LMS India",
        "learning management system India",
        "professional certification platform",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions/lms",
    },
    openGraph: {
        title: "ShoiLMS | Enterprise Learning Platform India | Mith Tech",
        description: "Transform training into a competitive advantage. Scalable LMS for onboarding, certification & corporate learning. Trusted by enterprises.",
        url: "https://mith.tech/solutions/lms",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "ShoiLMS - Enterprise Learning Platform" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "ShoiLMS | Enterprise LMS India",
        description: "Scalable, white-labeled LMS for onboarding & certification. Trusted by enterprises across India.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <LMSPageClient />;
}
