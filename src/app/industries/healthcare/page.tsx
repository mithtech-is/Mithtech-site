import type { Metadata } from "next";
import HealthcarePage from "./HealthcarePageClient";

export const metadata: Metadata = {
    title: "Healthcare Industry Solutions | Mith Tech",
    description:
        "Digitise your clinic, hospital, or healthcare network with Mith Tech's enterprise platforms. Appointment scheduling, patient records, billing, teleconsultation—all integrated and secure.",
    keywords: [
        "healthcare software",
        "clinic management system",
        "hospital ERP",
        "patient appointment booking",
        "medical billing software",
    ],
    openGraph: {
        title: "Healthcare Industry Solutions | Mith Tech",
        description:
            "Enterprise healthcare platforms: appointments, patient records, billing, and teleconsultation workflows.",
        type: "website",
    },
};

export default function Page() {
    return <HealthcarePage />;
}
