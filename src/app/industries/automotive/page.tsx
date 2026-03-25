import type { Metadata } from "next";
import AutomotivePage from "./AutomotivePageClient";

export const metadata: Metadata = {
    title: "Automotive & Car Care Industry Solutions | Mith Tech",
    description:
        "Streamline your automotive workshop or car care centre with Mith Tech's tailored digital platforms. From service booking and parts inventory to CRM and loyalty—built to scale.",
    keywords: [
        "automotive ERP",
        "car care software",
        "workshop management system",
        "auto repair booking",
        "garage management platform",
    ],
    openGraph: {
        title: "Automotive & Car Care Industry Solutions | Mith Tech",
        description:
            "Enterprise platforms for automotive businesses: service scheduling, parts inventory, customer loyalty, and more.",
        type: "website",
    },
};

export default function Page() {
    return <AutomotivePage />;
}
