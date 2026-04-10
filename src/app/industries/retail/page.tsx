import type { Metadata } from "next";
import RetailPage from "./RetailPageClient";

export const metadata: Metadata = {
    title: "Retail ERP & POS India | Omnichannel Commerce",
    description: "Unify your retail operations with ERPNext POS, real-time inventory, loyalty programs & omnichannel eCommerce. Open source, zero licensing fees. Bangalore-based.",
    keywords: [
        "retail ERP India",
        "POS system India open source",
        "retail inventory management India",
        "omnichannel retail solutions India",
        "retail loyalty program software India",
        "open source billing software India",
        "ERPNext for retail",
        "eCommerce integration retail India",
        "unified commerce platform India",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/retail",
    },
    openGraph: {
        title: "Retail ERP & POS India | Omnichannel Commerce | Mith Tech",
        description: "POS, inventory, loyalty & eCommerce unified in one platform. Open source, zero licensing fees. Built for Indian retailers.",
        url: "https://mith.tech/industries/retail",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Retail ERP India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Retail ERP & POS India | Mith Tech",
        description: "POS, inventory, loyalty & omnichannel eCommerce in one platform. Open source, zero licensing fees.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <RetailPage />;
}
