import type { Metadata } from "next";
import MarketingAutomationPageClient from "./MarketingAutomationPageClient";

export const metadata: Metadata = {
    title: "Mautic Implementation Services India | WhatsApp Marketing Automation Bangalore",
    description: "Mith Tech offers professional Mautic implementation services and WhatsApp marketing automation in India. Scale your reach with open-source marketing automation from Bangalore.",
    keywords: [
        "Mautic implementation services India",
        "WhatsApp marketing automation India",
        "marketing automation consultant Bangalore",
        "open source marketing automation India",
        "Mautic consultant Bangalore",
        "omnichannel marketing automation India",
        "B2B marketing automation service India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Marketing Automation Solutions India | Mith Tech",
        description: "Engage your audience at the perfect moment. Automated, data-driven marketing workflows using Mautic & WhatsApp in Bangalore.",
        url: "https://mith.tech/solutions/marketing-automation",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mautic & WhatsApp Marketing Automation India | Mith Tech",
        description: "Scale your customer engagement with automated marketing workflows.",
    },
};

export default function Page() {
    return <MarketingAutomationPageClient />;
}
