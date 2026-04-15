import { Product } from "@/data/products";

const ORG = {
  "@type": "Organization",
  name: "Mith Tech",
  url: "https://mith.tech",
  logo: "https://mith.tech/assets/logo.png",
} as const;

/**
 * Builds a bundle of JSON-LD schemas that maximise coverage for SEO, AEO, and
 * GEO on a product page.
 *
 * - SoftwareApplication / Service: lets classic search engines understand the
 *   offering (SEO + rich results).
 * - HowTo: implementation process steps — surfaces for "how to implement X"
 *   queries and is heavily cited by AI search (AEO + GEO).
 * - SpeakableSpecification (attached via BlogPosting on the visible summary):
 *   keeps voice assistants reading the concise answer block (AEO).
 * - BreadcrumbList: improves crawl hierarchy and SERP breadcrumbs (SEO).
 */
export function buildProductSchema(product: Product) {
  const canonical = `https://mith.tech/products/${product.slug}`;
  const isProprietary = product.type === "proprietary";

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": isProprietary ? "SoftwareApplication" : "Service",
    name: product.title,
    alternateName: product.slug,
    url: canonical,
    image: `https://mith.tech${product.icon}`,
    description: product.longDescription,
    applicationCategory: product.category,
    operatingSystem: isProprietary ? "Web, iOS, Android" : undefined,
    provider: ORG,
    brand: ORG,
    serviceType: !isProprietary ? `${product.category} Implementation & Consulting` : undefined,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    featureList: product.features.join(", "),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: canonical,
      seller: ORG,
    },
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How Mith Tech implements ${product.title}`,
    description: `Step-by-step process for deploying ${product.title} for Indian and global enterprises, from discovery to go-live and ongoing support.`,
    totalTime: "P8W",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Discovery & Requirement Mapping",
        text: `We audit your current workflows and map them to ${product.title} capabilities, identifying automation opportunities and integration points.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Architecture & Solution Design",
        text: `Our expert consultants design a tailored ${product.title} architecture covering ${product.features.slice(0, 3).join(", ")}, with compliance and scalability baked in.`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Implementation & Configuration",
        text: `We configure ${product.title}, build custom modules, and integrate it with your existing ERP, CRM, and communication stack.`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Data Migration & UAT",
        text: `We migrate your historical data with integrity checks, then run user acceptance testing with key stakeholders before go-live.`,
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Training, Go-Live & Ongoing Support",
        text: `We train your team, launch ${product.title} into production, and provide ongoing support, optimisation, and compliance updates.`,
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mith.tech" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://mith.tech/products" },
      { "@type": "ListItem", position: 3, name: product.title, item: canonical },
    ],
  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonical,
    name: `${product.title} | Mith Tech`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-summary"],
    },
  };

  return [softwareApp, howTo, breadcrumbs, speakable];
}
