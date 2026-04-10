import type { Metadata } from "next";
import RetailPage from "./RetailPageClient";

export const metadata: Metadata = {
    title: "ERP for Retail India Open Source | POS & Inventory Management Bangalore",
    description: "Mith Tech provides the best open source ERP for retail in India. Unified POS systems, real-time inventory management, and omnichannel eCommerce solutions for modern retailers in Bangalore.",
    keywords: [
        "ERP for retail India open source",
        "POS system India",
        "retail inventory management India",
        "omnichannel retail solutions Bangalore",
        "retail loyalty programme India",
        "open source billing software India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Retail Industry Solutions India | Mith Tech",
        description: "Unified commerce for modern retailers: POS, inventory, loyalty, and eCommerce—all in one stack built in Bangalore.",
        url: "https://mith.tech/industries/retail",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Retail ERP & POS Solutions India | Mith Tech",
        description: "Modernise your retail business with open-source enterprise systems.",
    },
};

export default function Page() {
    return <RetailPage />;
}
