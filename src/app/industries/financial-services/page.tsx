import type { Metadata } from "next";
import FinancialServicesPage from "./FinancialServicesPageClient";

export const metadata: Metadata = {
    title: "Loan Origination System India | NBFC Software Solutions Bangalore",
    description: "Mith Tech provides the best digital lending platforms and NBFC software solutions in India. Automate loan origination, KYC workflows, and portfolio management in Bangalore.",
    keywords: [
        "loan origination system India",
        "NBFC software solutions Bangalore",
        "digital lending platform India",
        "KYC automation for NBFCs India",
        "portfolio management platform India",
        "financial services software Bangalore",
        "fintech infrastructure India",
        "Mith Tech"
    ],
    openGraph: {
        title: "Financial Services & Lending Industry Solutions India | Mith Tech",
        description: "Modernise your NBFC or financial institution. Loan origination, KYC workflows, and portfolio management—automated and scalable in Bangalore.",
        url: "https://mith.tech/industries/financial-services",
        siteName: "Mith Tech",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NBFC Software & Digital Lending India | Mith Tech",
        description: "Enterprise-grade financial infrastructure for modern lending firms.",
    },
};

export default function Page() {
    return <FinancialServicesPage />;
}
