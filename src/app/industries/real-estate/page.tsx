import type { Metadata } from "next";
import RealEstatePage from "./RealEstatePageClient";

export const metadata: Metadata = {
    title: "Real Estate CRM & ERP India | Property Management",
    description: "Accelerate real estate sales with CRM, property management, lead automation & listing platforms. Built for Indian developers and agencies. Based in Bangalore.",
    keywords: [
        "real estate CRM India",
        "property management software India",
        "real estate ERP Bangalore",
        "lead automation real estate India",
        "property listing platform India",
        "real estate software Bangalore",
        "builder ERP India",
        "ERPNext for real estate",
        "property developer software India",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/real-estate",
    },
    openGraph: {
        title: "Real Estate CRM & ERP India | Property Management | Mith Tech",
        description: "CRM, property management, lead automation & listings in one platform. Built for Indian real estate developers and agencies.",
        url: "https://mith.tech/industries/real-estate",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Real Estate CRM India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Real Estate CRM & ERP India | Mith Tech",
        description: "Property management, lead automation & CRM for Indian real estate. Scale your business with Mith Tech.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <RealEstatePage />;
}
