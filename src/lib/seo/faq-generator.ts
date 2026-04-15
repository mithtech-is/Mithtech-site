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
 * Generates high-value, citation-ready FAQs for Mithtech products.
 *
 * Optimized for:
 * - Google "People Also Ask" and featured snippets
 * - AI engine citations (ChatGPT, Claude, Gemini, Perplexity)
 * - Voice search via SpeakableSpecification schema
 *
 * Questions are based on what real users search for: pricing/licensing,
 * self-hosting vs SaaS, competitor comparisons, and integration depth.
 */
export function generateProductFaqs(product: Product): FAQ[] {
    const faqs: FAQ[] = [
        {
            question: `Is ${product.title} free and open source?`,
            answer: product.type === "proprietary"
                ? `${product.title} is a proprietary platform developed by Mith Tech. Pricing is project-based with no per-user licensing fees — you pay once for implementation and own the system outright. There are no monthly SaaS subscriptions, no per-seat charges, and no vendor lock-in.`
                : `Yes. ${product.title} is fully open source. There are zero software licensing fees — your only costs are server infrastructure and optional implementation support. Mith Tech deploys ${product.title} on infrastructure you own, meaning your data never touches a third-party SaaS server.`,
        },
        {
            question: `Can ${product.title} be self-hosted on your own server?`,
            answer: `Yes. ${product.title} is built for self-hosted deployment. Mith Tech handles the complete setup: cloud server provisioning, installation, SSL configuration, automated backups, and performance tuning. Your data stays on infrastructure you control — no third-party access, no data residency concerns, full compliance with India's DPDP and global privacy regulations.`,
        },
        getCategoryQuestion(product),
        {
            question: `How does Mith Tech implement ${product.title} for businesses?`,
            answer: `Mith Tech follows a five-stage process: discovery and requirement mapping, architecture design, implementation and configuration, data migration with user acceptance testing, and go-live with team training. Most ${product.title} projects go live in 4 to 12 weeks. Post-launch, we provide ongoing support, custom development, and performance optimization as your business scales.`,
        },
    ];

    if (product.type === "proprietary") {
        faqs.push({
            question: `What makes ${product.title} different from off-the-shelf SaaS alternatives?`,
            answer: `${product.title} is built specifically for ${product.category.toLowerCase()} workflows common to Indian and global businesses. Unlike generic SaaS platforms, it has no per-seat fees, no artificial feature limits, and no vendor lock-in. You own the code, own the data, and can customize every workflow to your exact business logic — something SaaS platforms explicitly prevent.`,
        });
    }

    if (product.customFaqs && product.customFaqs.length > 0) {
        faqs.push(...product.customFaqs);
    }

    return faqs;
}

/**
 * Returns a category-specific question that real users search for.
 * These match the "People Also Ask" patterns seen on Google and
 * the comparative questions AI search engines like Perplexity cite.
 */
function getCategoryQuestion(product: Product): FAQ {
    const { category, title } = product;

    switch (category) {
        case "Automation":
            return {
                question: `How does ${title} compare to Zapier or Make (Integromat)?`,
                answer: `${title} and Zapier both automate multi-step workflows and integrate hundreds of apps. The critical difference is pricing: Zapier and Make charge per task or per operation, making costs unpredictable at scale. ${title} self-hosted has no per-execution fees — you pay only for server infrastructure. For businesses running thousands of automations per month, this means 80-90% cost savings compared to equivalent Zapier plans. Mith Tech handles the full ${title} deployment and custom workflow development.`,
            };

        case "Marketing":
            // WhatsApp automation products are not comparable to email tools
            if (title.toLowerCase().includes("whatsapp")) {
                return {
                    question: `What is the difference between ${title} and the WhatsApp Business App?`,
                    answer: `The free WhatsApp Business App limits you to a single device and manual messaging with no broadcast capability beyond 256 contacts. ${title} operates on the official WhatsApp Business API, enabling unlimited broadcast campaigns to opted-in contacts, multi-agent shared inboxes, automated message flows, bot logic, and CRM integration — features the standard app cannot provide. The API also gives ${title} campaign analytics and delivery reporting not available in the standard app.`,
                };
            }
            return {
                question: `How does ${title} compare to HubSpot or Mailchimp?`,
                answer: `${title} provides the same core capabilities as HubSpot and Mailchimp — email campaigns, audience segmentation, lead scoring, and analytics — without the per-contact pricing. HubSpot Marketing Hub starts at INR 4,000/month for 1,000 contacts and scales steeply. ${title} self-hosted has zero per-contact fees: a database of 500,000 contacts costs the same as 500 contacts. Mith Tech deploys ${title} with high-deliverability email infrastructure and full CRM integration.`,
            };

        case "Support":
            return {
                question: `How does ${title} compare to Intercom or Zendesk?`,
                answer: `${title} covers the same omnichannel support features as Intercom and Zendesk — shared inbox, automated routing, SLA management, CSAT surveys, and reporting — without the per-agent fees. Intercom charges $74-139 per seat per month; Zendesk Suite starts at $55 per agent. ${title} self-hosted is free in licensing, with costs only for hosting. Mith Tech deploys ${title} with WhatsApp Business API, ERPNext integration, and custom automation rules out of the box.`,
            };

        case "eCommerce":
            return {
                question: `How does ${title} compare to Shopify or WooCommerce?`,
                answer: `${title} gives developers full control over the commerce backend — something Shopify's closed platform and WooCommerce's plugin architecture cannot match. Shopify charges 0.5-2% transaction fees and limits checkout customization; WooCommerce becomes unwieldy at scale. ${title} is API-first and open source, enabling custom pricing logic, B2B workflows, multi-region support, and deep ERP integration. Mith Tech implements ${title} for businesses that have outgrown standard eCommerce platforms.`,
            };

        case "Finance":
        case "Analytics":
            return {
                question: `Does ${title} support GST compliance and Indian accounting standards?`,
                answer: `Yes. Mith Tech configures ${title} with India-specific compliance requirements including GST e-invoicing, GSTR reports, TDS/TCS handling, and e-way bills. For businesses operating globally, we also configure VAT for UAE/GCC markets and GAAP-ready accounting for Western markets — all within the same deployment. Compliance configurations are included as part of every Mith Tech ${title} implementation.`,
            };

        case "CRM":
            return {
                question: `How does ${title} compare to Salesforce or Zoho CRM?`,
                answer: `${title} provides core CRM functionality — contact management, pipeline tracking, activity logging, and reporting — without per-user licensing. Salesforce starts at $25/user/month and escalates quickly with add-ons; Zoho CRM charges per seat for most automation features. ${title} self-hosted eliminates these recurring costs entirely. Mith Tech deploys ${title} with custom workflow automation, ERPNext integration, and WhatsApp lead capture built in.`,
            };

        case "Education":
            return {
                question: `How does ${title} compare to Moodle, Canvas, or Teachable?`,
                answer: `${title} provides modern LMS capabilities — course creation, student progress tracking, assessments, and certificates — with full data ownership. Teachable and similar hosted platforms take a revenue cut and store your student data on their servers. Moodle is open source but complex to configure. ${title} gives institutions a clean, modern interface with no revenue sharing and complete control over learning data. Mith Tech handles deployment, branding, and custom integrations.`,
            };

        case "Workspace":
        case "Booking":
            return {
                question: `Does ${title} integrate with ERPNext, Google Workspace, and other tools?`,
                answer: `Yes. Mith Tech connects ${title} with ERPNext for data sync, Google Workspace for calendar and authentication, WhatsApp for notifications, and custom REST APIs for any other system in your stack. Integrations are built as part of the implementation project — you get a fully connected system, not an isolated tool. Real-time webhooks ensure data stays in sync without manual updates.`,
            };

        default:
            return {
                question: `What integrations does ${title} support?`,
                answer: `${title} connects with ERPNext, CRM platforms, communication tools, payment gateways, and custom REST APIs via webhooks and native integrations. Mith Tech builds tailored integration layers as part of every ${title} deployment — ensuring real-time data sync across your entire tech stack without manual data re-entry or duplicate records.`,
            };
    }
}

export function generatePlatformFaqs(platform: PlatformFAQConfig): FAQ[] {
    const integrations = platform.integrations?.length
        ? platform.integrations.join(", ")
        : "ERP, CRM, analytics, and automation tools";

    const faqs: FAQ[] = [
        {
            question: `Is ${platform.name} free and open source?`,
            answer: `Yes. ${platform.name} is open source with no per-user or per-seat licensing fees. Your costs cover server infrastructure and optional implementation support. Mith Tech deploys ${platform.name} on infrastructure you own — giving you full data sovereignty, no vendor lock-in, and predictable costs that do not scale with your team size.`,
        },
        {
            question: `How long does it take to set up ${platform.name}?`,
            answer: `Mith Tech typically deploys ${platform.name} in 4 to 16 weeks depending on customization scope, data migration requirements, and integrations. This covers discovery, configuration, testing, team training, and go-live support. Most businesses start seeing measurable productivity improvements within the first 30 days of going live.`,
        },
        {
            question: `What are the key features of ${platform.name}?`,
            answer: `Core capabilities include ${platform.features.slice(0, 4).join(", ")}, plus a robust API framework for third-party integrations. Mith Tech optimises ${platform.name} deployments with custom modules, database tuning, and caching — ensuring production-grade performance for high-traffic enterprise environments.`,
        },
        {
            question: `Can ${platform.name} integrate with ${integrations}?`,
            answer: `Yes. Mith Tech builds custom integrations using REST APIs and webhooks to connect ${platform.name} with ${integrations}. This eliminates manual data entry, enables real-time cross-department visibility, and ensures your entire technology stack operates as a single unified system rather than disconnected point solutions.`,
        },
    ];

    if (platform.customFaqs?.length) {
        faqs.push(...platform.customFaqs);
    }

    return faqs;
}
