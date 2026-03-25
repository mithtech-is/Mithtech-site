import type { Metadata } from "next";
import FinancialServicesPage from "./FinancialServicesPageClient";

export const metadata: Metadata = {
    title: "Financial Services & Loans Industry Solutions | Mith Tech",
    description:
        "Modernise your NBFC, lending firm, or financial institution with Mith Tech's digital platforms. Loan origination, KYC workflows, portfolio management, and regulatory reporting—automated and scalable.",
    keywords: [
        "financial services software",
        "loan origination system",
        "NBFC software",
        "KYC automation",
        "portfolio management platform",
    ],
    openGraph: {
        title: "Financial Services & Loans Industry Solutions | Mith Tech",
        description:
            "Enterprise financial platforms: loan origination, KYC, portfolio management, and compliance reporting.",
        type: "website",
    },
};

export default function Page() {
    return <FinancialServicesPage />;
}
