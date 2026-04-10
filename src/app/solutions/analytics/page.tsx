import type { Metadata } from "next";
import AnalyticsPageClient from "./AnalyticsPageClient";

export const metadata: Metadata = {
    title: "Business Intelligence & Analytics India | Mith Tech",
    description: "Drive decisions with real-time BI dashboards, n8n workflow automation, Metabase & Superset. Enterprise analytics that accelerate growth. Based in Bangalore.",
    keywords: [
        "business intelligence India",
        "n8n automation services India",
        "data visualization Bangalore",
        "Metabase implementation India",
        "Apache Superset consultant India",
        "enterprise analytics Bangalore",
        "workflow automation India",
        "custom BI dashboards India",
        "data-driven business India",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/solutions/analytics",
    },
    openGraph: {
        title: "Business Intelligence & Analytics India | Mith Tech",
        description: "Real-time BI dashboards, n8n automation, and enterprise analytics. Make faster, smarter decisions. Trusted by businesses across India.",
        url: "https://mith.tech/solutions/analytics",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Business Intelligence India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "BI & Analytics India | Mith Tech",
        description: "Real-time dashboards, n8n automation & enterprise analytics. Drive smarter decisions with Mith Tech.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <AnalyticsPageClient />;
}
