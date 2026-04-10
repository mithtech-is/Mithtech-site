import type { Metadata } from "next";
import ManufacturingPage from "./ManufacturingPageClient";

export const metadata: Metadata = {
    title: "Manufacturing ERP India | ERPNext for Production",
    description: "Optimize your shop floor with ERPNext. Production planning, BOM management, inventory & supply chain in one ERP. 70% lower TCO than SAP. Bangalore-based.",
    keywords: [
        "ERPNext for manufacturing companies India",
        "ERPNext for manufacturing India",
        "best ERP for manufacturing India",
        "production planning software India",
        "BOM management software India",
        "GST compliant ERP manufacturing",
        "open source ERP for manufacturing",
        "ERPNext vs SAP manufacturing",
        "ERPNext implementation cost manufacturing",
        "supply chain management India",
        "cloud ERP for Indian manufacturers",
        "Mith Tech manufacturing"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/manufacturing",
    },
    openGraph: {
        title: "Manufacturing ERP India | ERPNext for Production | Mith Tech",
        description: "Production planning, BOM, inventory & supply chain in one ERP. 70% lower TCO than SAP. Trusted by manufacturers across India.",
        url: "https://mith.tech/industries/manufacturing",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Manufacturing ERP India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Manufacturing ERP India | Mith Tech",
        description: "ERPNext for production planning, BOM & supply chain. 70% lower TCO than SAP. Scale your manufacturing.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <ManufacturingPage />;
}
