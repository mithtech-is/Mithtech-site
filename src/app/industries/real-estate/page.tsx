import type { Metadata } from "next";
import RealEstatePage from "./RealEstatePageClient";

export const metadata: Metadata = {
    title: "Real Estate Industry Solutions | Mith Tech",
    description:
        "Digital transformation for real estate agencies, developers, and property managers. Automate listings, lead workflows, document management, and client CRM with enterprise platforms.",
    keywords: [
        "real estate CRM",
        "property management software",
        "real estate ERP",
        "lead automation real estate",
        "property listing platform",
    ],
    openGraph: {
        title: "Real Estate Industry Solutions | Mith Tech",
        description:
            "Enterprise-grade platforms for real estate: CRM, listing management, document workflows, and client automation.",
        type: "website",
    },
};

export default function Page() {
    return <RealEstatePage />;
}
