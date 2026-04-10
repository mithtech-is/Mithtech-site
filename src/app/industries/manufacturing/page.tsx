import type { Metadata } from "next";
import ManufacturingPage from "./ManufacturingPageClient";

export const metadata: Metadata = {
    title: "ERPNext for Manufacturing Company India | Production Planning Software",
    description: "Mith Tech provides the best ERPNext for manufacturing companies in India. Our production planning software and BOM management solutions optimize shop floors in Bangalore. Reduce TCO by 70%.",
    keywords: [
        "ERPNext for manufacturing company India",
        "discrete manufacturing ERP software India",
        "production planning software India",
        "inventory management for manufacturers India",
        "BOM management software India",
        "manufacturing execution system India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Manufacturing ERP & Production Planning Solutions India | Mith Tech",
        description: "Optimise your production floor. Production planning, BOM management, and supply chain visibility—all connected in one enterprise ERP system in Bangalore.",
        url: "https://mith.tech/industries/manufacturing",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ERPNext for Manufacturing India | Mith Tech",
        description: "Scale your manufacturing operations with India's most versatile ERP.",
    },
};

export default function Page() {
    return <ManufacturingPage />;
}
