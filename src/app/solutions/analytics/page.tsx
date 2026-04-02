import type { Metadata } from "next";
import AnalyticsPageClient from "./AnalyticsPageClient";

export const metadata: Metadata = {
    title: "n8n Automation Services India | Data Visualization & BI Bangalore",
    description: "Mith Tech provides expert n8n automation services and enterprise data visualization in India. Custom BI dashboards using Metabase & Superset for data-driven decisions in Bangalore.",
    keywords: [
        "n8n automation services India",
        "data visualization services Bangalore",
        "enterprise automation n8n India",
        "custom analytics dashboards India",
        "Metabase implementation India",
        "Apache Superset consultant India",
        "business intelligence solutions Bangalore",
        "Mith Tech"
    ],
    openGraph: {
        title: "Analytics & Business BI Solutions India | Mith Tech",
        description: "Unlock the story your data is telling. Enterprise-grade BI, real-time visualization, and n8n automation services in Bangalore.",
        url: "https://mithtech.com/solutions/analytics",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n Automation & BI Dashboards India | Mith Tech",
        description: "Scale your business with automated workflows and real-time data insights.",
    },
};

export default function Page() {
    return <AnalyticsPageClient />;
}
