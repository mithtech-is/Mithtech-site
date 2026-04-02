import { Metadata } from "next";
import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) return { title: "Product Not Found" };

    const siteName = "Mith Tech";
    let title = `${product.title} | ${siteName}`;
    let description = product.description;

    // Keyword optimization for specific products mentioned in SEO plan
    if (slug === 'n8n') {
        title = "n8n Automation Services India | Workflow Automation Bangalore";
        description = "Mith Tech is the leading n8n automation service provider in India. Scale your business with custom n8n workflows and enterprise integrations in Bangalore.";
    } else if (slug === 'mautic') {
        title = "Mautic Marketing Automation India | Open Source Marketing Bangalore";
        description = "Expert Mautic implementation and consulting in India. Mith Tech automates your customer journeys with Mautic and WhatsApp marketing in Bangalore.";
    } else if (slug === 'chatwoot') {
        title = "Chatwoot Implementation India | WhatsApp CRM Integration Bangalore";
        description = "Deploy Chatwoot with WhatsApp integration for your Indian business. Mith Tech provides expert Chatwoot setup and omnichannel support in Bangalore.";
    }

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://mithtech.com/products/${slug}`,
            siteName,
            locale: "en_IN",
            images: [
                {
                    url: product.icon || "/assets/og-shared.png",
                    width: 1200,
                    height: 630,
                    alt: product.title,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [product.icon || "/assets/og-shared.png"],
        }
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return <ProductShowcase product={product} />;
}
