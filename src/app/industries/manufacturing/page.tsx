import type { Metadata } from "next";
import ManufacturingPage from "./ManufacturingPageClient";

export const metadata: Metadata = {
    title: "Manufacturing Industry Solutions | Mith Tech",
    description:
        "Optimise your production floor with Mith Tech's manufacturing platforms. Production planning, BOM management, quality control, and supply chain visibility—all connected in one system.",
    keywords: [
        "manufacturing ERP",
        "production planning software",
        "BOM management",
        "quality control system",
        "supply chain management",
    ],
    openGraph: {
        title: "Manufacturing Industry Solutions | Mith Tech",
        description:
            "Enterprise manufacturing platforms: production planning, BOM, quality control, and supply chain management.",
        type: "website",
    },
};

export default function Page() {
    return <ManufacturingPage />;
}
