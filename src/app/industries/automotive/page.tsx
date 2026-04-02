import type { Metadata } from "next";
import AutomotivePage from "./AutomotivePageClient";

export const metadata: Metadata = {
    title: "Workshop Management System India | Automotive ERP Software Bangalore",
    description: "Mith Tech provides the best workshop management systems and automotive ERP software in India. Streamline car repair booking and garage inventory in Bangalore.",
    keywords: [
        "workshop management system India",
        "automotive ERP software India",
        "car repair booking system India",
        "garage management software Bangalore",
        "auto repair software India",
        "automotive CRM software India",
        "spare parts inventory software",
        "Mith Tech"
    ],
    openGraph: {
        title: "Automotive & Car Care Industry Solutions India | Mith Tech",
        description: "Streamline your automotive workshop. service booking, parts inventory, and CRM—built to scale in Bangalore.",
        url: "https://mithtech.com/industries/automotive",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Automotive Workshop Software & ERP India | Mith Tech",
        description: "Modern digital platforms for car care centres and automotive businesses.",
    },
};

export default function Page() {
    return <AutomotivePage />;
}
