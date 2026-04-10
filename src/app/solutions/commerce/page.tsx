import type { Metadata } from "next";
import CommercePageClient from "./CommercePageClient";

export const metadata: Metadata = {
    title: "Headless eCommerce India | Medusa JS Experts",
    description: "Build high-performance headless eCommerce with Medusa JS. B2B & D2C platforms, omnichannel commerce, and WhatsApp selling. Outperform legacy platforms.",
    keywords: [
        "headless eCommerce India",
        "Medusa JS development India",
        "B2B eCommerce platform India",
        "headless commerce Bangalore",
        "Medusa JS vs WooCommerce",
        "omnichannel eCommerce India",
        "WhatsApp eCommerce India",
        "D2C eCommerce platform India",
        "eCommerce development Bangalore",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions/commerce",
    },
    openGraph: {
        title: "Headless eCommerce India | Medusa JS Experts | Mith Tech",
        description: "Scale your brand with Medusa JS headless commerce. B2B-ready, omnichannel, and high-performance eCommerce built in Bangalore.",
        url: "https://mith.tech/solutions/commerce",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Headless eCommerce India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Headless eCommerce India | Mith Tech",
        description: "High-performance Medusa JS eCommerce for B2B and D2C brands. Outperform legacy platforms with modern architecture.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <CommercePageClient />;
}
