import type { Metadata } from "next";
import LMSPageClient from "./LMSPageClient";

export const metadata: Metadata = {
    title: "ShoiLMS | Enterprise Learning Management Platform India",
    description: "ShoiLMS by Mith Tech is the best enterprise learning platform in India for employee onboarding and professional certification. Scalable, white-labeled, and integrated LMS solutions in Bangalore.",
    keywords: [
        "ShoiLMS platform",
        "enterprise learning platform India",
        "best LMS for employee onboarding India",
        "scalable LMS platforms for certification",
        "LMS implementation partner Bangalore",
        "corporate training software India",
        "SCORM compliant LMS India",
        "Mith Tech"
    ],
    openGraph: {
        title: "ShoiLMS - Enterprise Learning & Onboarding Platform | Mith Tech",
        description: "Transform institutional knowledge into a competitive advantage with ShoiLMS. Scalable learning infrastructure for modern enterprises.",
        url: "https://mith.tech/solutions/lms",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ShoiLMS | Best LMS for Employee Onboarding in India",
        description: "Modern, scalable learning management for high-growth companies.",
    },
};

export default function Page() {
    return <LMSPageClient />;
}
