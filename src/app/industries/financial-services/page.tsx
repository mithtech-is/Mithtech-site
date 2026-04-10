import type { Metadata } from "next";
import FinancialServicesPage from "./FinancialServicesPageClient";

export const metadata: Metadata = {
    title: "Financial Services ERP | NBFC & Lending Software",
    description: "Automate loan origination, KYC workflows & portfolio management with ERPNext. Built for NBFCs and financial institutions in India. Bangalore-based experts.",
    keywords: [
        "financial services ERP India",
        "NBFC software India",
        "loan origination system India",
        "digital lending platform India",
        "KYC automation NBFC India",
        "portfolio management software India",
        "fintech infrastructure India",
        "ERPNext for financial services",
        "Frappe lending module India",
        "Mith Tech"
    ],
    alternates: {
        canonical: "https://mith.tech/industries/financial-services",
    },
    openGraph: {
        title: "Financial Services ERP | NBFC & Lending Software | Mith Tech",
        description: "Loan origination, KYC automation & portfolio management for NBFCs and financial institutions. Scalable, secure, built in Bangalore.",
        url: "https://mith.tech/industries/financial-services",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech - Financial Services ERP India" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Financial Services ERP | Mith Tech",
        description: "Loan origination, KYC & portfolio management for NBFCs. Secure, scalable fintech infrastructure from Bangalore.",
        images: ["/assets/og-shared.png"],
    },
};

export default function Page() {
    return <FinancialServicesPage />;
}
