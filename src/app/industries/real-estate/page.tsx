import type { Metadata } from "next";
import RealEstatePage from "./RealEstatePageClient";

export const metadata: Metadata = {
    title: "Real Estate CRM India | Property Management Software Bangalore",
    description: "Mith Tech provides the best real estate industry solutions in India. Modernise your agency with property management software, lead automation, and custom CRMs in Bangalore.",
    keywords: [
        "real estate CRM India",
        "property management software Bangalore",
        "real estate ERP India",
        "lead automation real estate India",
        "property listing platform India",
        "real estate digital transformation Bangalore",
        "Mith Tech"
    ],
    openGraph: {
        title: "Real Estate Industry Solutions India | Mith Tech",
        description: "Enterprise-grade platforms for real estate: CRM, listing management, and client automation built to scale in Bangalore.",
        url: "https://mith.tech/industries/real-estate",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Real Estate ERP & CRM Solutions India | Mith Tech",
        description: "Scale your real estate business with automated digital workflows.",
    },
};

export default function Page() {
    return <RealEstatePage />;
}
