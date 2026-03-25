import type { Metadata } from "next";
import RetailPage from "./RetailPageClient";

export const metadata: Metadata = {
    title: "Retail Industry Solutions | Mith Tech",
    description:
        "Build a unified retail experience—online and offline. Mith Tech delivers POS integration, inventory management, loyalty programmes, and eCommerce solutions for modern retailers.",
    keywords: [
        "retail ERP",
        "POS system",
        "retail inventory management",
        "eCommerce platform",
        "retail loyalty programme",
    ],
    openGraph: {
        title: "Retail Industry Solutions | Mith Tech",
        description:
            "Unified commerce for modern retailers: POS, inventory, loyalty, and eCommerce—all in one stack.",
        type: "website",
    },
};

export default function Page() {
    return <RetailPage />;
}
