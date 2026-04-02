import type { Metadata } from "next";
import CommercePageClient from "./CommercePageClient";

export const metadata: Metadata = {
    title: "Medusa JS eCommerce Development India | Headless Commerce Bangalore",
    description: "Expert Medusa JS eCommerce development in India. Mith Tech builds high-performance headless commerce and B2B platforms in Bangalore. Outperform WooCommerce with modern JS architecture.",
    keywords: [
        "Medusa JS eCommerce development India",
        "headless eCommerce development Bangalore",
        "B2B eCommerce platform India Medusa",
        "Medusa JS vs WooCommerce India",
        "headless retail solutions Bangalore",
        "omnichannel commerce India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Medusa JS & Headless eCommerce Development India | Mith Tech",
        description: "Scale your retail brand with Medusa JS. High-performance, B2B-ready headless commerce architectures built in Bangalore.",
        url: "https://mithtech.com/solutions/commerce",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        // Space for OpenGraph image
    },
    twitter: {
        card: "summary_large_image",
        title: "Headless eCommerce Development India | Medusa JS Experts",
        description: "Modern, scalable eCommerce platforms for Indian enterprises.",
        // Space for Twitter image
    },
};

export default function Page() {
    return <CommercePageClient />;
}
