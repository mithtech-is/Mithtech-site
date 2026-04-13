import { Product } from "@/data/products";

export interface FAQ {
    question: string;
    answer: string;
}

export interface PlatformFAQConfig {
    name: string;
    category: string;
    description: string;
    features: string[];
    implementationFocus?: string;
    integrations?: string[];
    customFaqs?: FAQ[];
}

/**
 * Generates concise, GEO-optimized FAQs for Mithtech products.
 * Optimized for Google featured snippets, AI-powered search (ChatGPT, Claude,
 * Perplexity, Gemini), and voice search. Direct answers in 2-3 sentences.
 */
export function generateProductFaqs(product: Product): FAQ[] {
    const faqs: FAQ[] = [
        {
            question: `What is ${product.title}?`,
            answer: `${product.title} is a ${product.category.toLowerCase()} solution that helps businesses ${product.useCase.toLowerCase().replace(/\.$/, "")}. Key features include ${product.features.slice(0, 3).join(", ")}. Mithtech implements and customises ${product.title} for Indian businesses to reduce manual work and scale operations faster.`,
        },
        {
            question: `How long does it take to implement ${product.title}?`,
            answer: `A typical ${product.title} implementation by Mithtech takes 4 to 12 weeks depending on complexity and customisation requirements. This includes discovery, setup, data migration, testing, and team training. Most businesses see measurable results within the first 30 days of going live.`,
        },
        {
            question: `Does ${product.title} integrate with CRM, ERP, and other tools?`,
            answer: `Yes. Mithtech connects ${product.title} with popular platforms like ERPNext, HubSpot, n8n, and custom APIs using webhooks and REST integrations. This ensures real-time data sync across sales, finance, and operations without manual re-entry.`,
        },
        {
            question: `How much does ${product.title} implementation cost in India?`,
            answer: `${product.title} implementation costs vary based on scope, customisation, and integrations required. Mithtech offers transparent, project-based pricing with no hidden per-seat fees. Contact us for a free consultation and detailed estimate tailored to your requirements.`,
        },
    ];

    if (product.type === "proprietary") {
        faqs.push({
            question: `How is ${product.title} different from off-the-shelf SaaS tools?`,
            answer: `${product.title} is Mithtech's proprietary platform built specifically for ${product.category.toLowerCase()} workflows. Unlike generic SaaS tools, it offers full data ownership, no per-seat licensing costs, and deep customisation to match your exact business logic. You own the code and data — no vendor lock-in.`,
        });
    }

    if (product.customFaqs && product.customFaqs.length > 0) {
        faqs.push(...product.customFaqs);
    }

    return faqs;
}

export function generatePlatformFaqs(platform: PlatformFAQConfig): FAQ[] {
    const integrations = platform.integrations?.length
        ? platform.integrations.join(", ")
        : "ERP, CRM, analytics, and automation tools";

    const faqs: FAQ[] = [
        {
            question: `What is ${platform.name} used for?`,
            answer: `${platform.name} is a ${platform.category.toLowerCase()} platform used to ${platform.description.toLowerCase().replace(/\.$/, "")}. It offers ${platform.features.slice(0, 3).join(", ")}, and full data ownership. Businesses choose ${platform.name} for its flexibility, open architecture, and ability to scale without per-seat licensing costs.`,
        },
        {
            question: `How long does it take to set up ${platform.name}?`,
            answer: `Mithtech typically deploys ${platform.name} in 4 to 16 weeks depending on customisation, data migration, and integration requirements. This includes setup, configuration, testing, team training, and go-live support. Most businesses start seeing productivity gains within the first month.`,
        },
        {
            question: `What are the key features of ${platform.name}?`,
            answer: `Core features include ${platform.features.slice(0, 4).join(", ")}, plus a robust API framework for connecting with third-party tools. Mithtech optimises ${platform.name} with custom modules, caching, and database tuning for high-traffic, production-grade performance.`,
        },
        {
            question: `Can ${platform.name} integrate with ${integrations}?`,
            answer: `Yes. Mithtech builds custom integrations using REST APIs and webhooks to connect ${platform.name} with ${integrations}. This enables real-time data sync across departments, eliminates manual data entry, and gives you a unified view of your entire operation.`,
        },
    ];

    if (platform.customFaqs?.length) {
        faqs.push(...platform.customFaqs);
    }

    return faqs;
}
