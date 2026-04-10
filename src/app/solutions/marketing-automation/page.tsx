import type { Metadata } from "next";
import MarketingAutomationPageClient from "./MarketingAutomationPageClient";

export const metadata: Metadata = {
    title: "Marketing Automation India | Mautic & WhatsApp",
    description: "Accelerate customer engagement with Mautic & WhatsApp automation. Open-source, omnichannel marketing that drives 3x more conversions. Based in Bangalore.",
    keywords: [
        "marketing automation India",
        "Mautic implementation India",
        "WhatsApp marketing automation India",
        "WhatsApp automation for business India",
        "open source marketing automation",
        "omnichannel marketing Bangalore",
        "B2B marketing automation India",
        "email marketing automation India",
        "lead nurturing automation India",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions/marketing-automation",
    },
    openGraph: {
        title: "Marketing Automation India | Mautic & WhatsApp | Mith Tech",
        description: "Drive 3x more conversions with Mautic & WhatsApp automation. Open-source, omnichannel marketing for enterprises across India.",
        url: "https://mith.tech/solutions/marketing-automation",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Marketing Automation India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Marketing Automation India | Mith Tech",
        description: "Mautic & WhatsApp marketing automation that drives 3x more conversions. Open-source and omnichannel.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <MarketingAutomationPageClient />;
}
