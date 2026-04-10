import type { Metadata } from "next";
import HealthcarePage from "./HealthcarePageClient";

export const metadata: Metadata = {
    title: "Healthcare ERP India | Hospital & Clinic Software",
    description: "Modernize your hospital or clinic with ERPNext. Appointments, patient records, billing & telemedicine in one secure platform. HIPAA-aware. Based in Bangalore.",
    keywords: [
        "healthcare ERP India",
        "hospital management system India",
        "clinic management software Bangalore",
        "patient appointment system India",
        "HIS software India",
        "medical billing software India",
        "telemedicine platform India",
        "ERPNext for healthcare",
        "hospital information system Bangalore",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/healthcare",
    },
    openGraph: {
        title: "Healthcare ERP India | Hospital & Clinic Software | Mith Tech",
        description: "Appointments, patient records, billing & telemedicine in one secure platform. Trusted by healthcare facilities across India.",
        url: "https://mith.tech/industries/healthcare",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Healthcare ERP India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Healthcare ERP India | Mith Tech",
        description: "Hospital & clinic management in one platform. Appointments, records, billing & telemedicine. Secure and scalable.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <HealthcarePage />;
}
