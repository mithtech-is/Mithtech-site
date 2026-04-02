import type { Metadata } from "next";
import HealthcarePage from "./HealthcarePageClient";

export const metadata: Metadata = {
    title: "Clinic Management System India | Hospital ERP Bangalore | Mith Tech",
    description: "Mith Tech provides the best healthcare industry solutions in India. Modernize your hospital or clinic with appointment scheduling, HIS, and secure patient records in Bangalore.",
    keywords: [
        "clinic management system India",
        "hospital ERP Bangalore",
        "patient appointment booking India",
        "HIS software India",
        "medical billing platform India",
        "telemedicine software India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Healthcare Industry Solutions India | Mith Tech",
        description: "Enterprise healthcare platforms: appointments, patient records, billing, and teleconsultation—integrated and secure in Bangalore.",
        url: "https://mithtech.com/industries/healthcare",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hospital & Clinic ERP Solutions India | Mith Tech",
        description: "Transform your healthcare facility with modern digital platforms.",
    },
};

export default function Page() {
    return <HealthcarePage />;
}
