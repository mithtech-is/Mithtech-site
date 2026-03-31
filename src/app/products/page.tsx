import { products } from "@/data/products";
import { CTASection } from "@/components/marketing/CTASection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Product Suite | Mithtech",
    description:
        "Explore the complete suite of Mithtech products — enterprise-grade platforms, automation tools, and business solutions.",
};

// Categorization based on Products.md
const CATEGORIES = [
    {
        title: "Customer Management & Sales",
        slugs: ["perfex", "frappe-crm", "qu6", "ding", "erpnext-crm"],
    },
    {
        title: "Marketing Automation",
        slugs: ["mautic", "listmonk", "socialpuff", "n8n", "postiz"],
    },
    {
        title: "Customer Support & Helpdesk",
        slugs: ["chatwoot", "frappe-helpdesk", "botpress"],
    },
    {
        title: "eCommerce & Online Selling",
        slugs: ["polygin-wastore", "medusa-js", "medusa-b2b", "marketplace", "pos-billing"],
    },
    {
        title: "Operations & Business Management",
        slugs: ["erpnext", "shoilms-v2", "hospital-management", "property", "apartment", "hostel", "parking"],
    },
    {
        title: "Learning & Education",
        slugs: ["lms-wp", "lms-frappe", "shoilms", "shoilms-v2"],
    },
    {
        title: "Booking & Scheduling",
        slugs: ["schedulr", "hospital-management", "2spa"],
    },
    {
        title: "Business Intelligence & Analytics",
        slugs: ["frappe-insights", "metabase", "apache-superset", "posthog"],
    },
    {
        title: "Finance & Accounting",
        slugs: ["frappe-books", "erpnext-finance", "loan-management", "frappe-lending"],
    },
    {
        title: "Workflow Automation",
        slugs: ["n8n", "automation-ai", "documenso", "docuseal"],
    },
    {
        title: "Recruitment & HR",
        slugs: ["recruitment", "job-board", "qu6"],
    },
    {
        title: "Communication & Collaboration",
        slugs: ["frappe-comm", "mattermost", "chatwoot"],
    },
    {
        title: "Digital Presence",
        slugs: ["custom-websites", "listing-sites"],
    },
    {
        title: "Infrastructure & Server Management",
        slugs: ["cloudpanel", "mailinabox", "docuseal"],
    },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Product Suite 2024</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase">
                            All Products in <br /> 
                            <span className="text-[#00aaff]">One Ecosystem.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Proprietary platforms and expert-managed solutions built to solve
                            specific business operations and automation challenges. Seamlessly integrated to drive your growth.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#explore" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Explore Catalog
                            </a>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95">
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links / Sub-nav */}
            <div className="sticky top-[80px] z-30 w-full bg-white/80 backdrop-blur-md border-b border-black/[0.05] hidden md:block">
                <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-8 h-14 whitespace-nowrap">
                        {CATEGORIES.slice(0, 7).map((cat) => (
                            <a 
                                key={cat.title} 
                                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-[#00aaff] transition-colors"
                            >
                                {cat.title.split('&')[0]}
                            </a>
                        ))}
                        <button className="text-[10px] font-bold uppercase tracking-widest text-[#00aaff]">More +</button>
                    </div>
                </div>
            </div>

            {/* Product Catalog Content */}
            <section id="explore" className="bg-white py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {CATEGORIES.map((category) => {
                        const categoryProducts = category.slugs
                            .map(slug => products.find(p => p.slug === slug))
                            .filter(Boolean);

                        if (categoryProducts.length === 0) return null;

                        return (
                            <div 
                                key={category.title} 
                                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                                className="mb-24 last:mb-0"
                            >
                                <div className="flex items-center justify-between mb-12 border-b border-black/[0.05] pb-6">
                                    <div>
                                        <h2 className="text-4xl font-extrabold text-black mb-3 tracking-tight uppercase">{category.title}</h2>
                                        <p className="text-base text-black/40 leading-loose italic">Discover specialized tools for {category.title.toLowerCase()}.</p>
                                    </div>
                                    <span className="hidden sm:block text-[10px] font-bold text-black/20 uppercase tracking-widest">
                                        {categoryProducts.length} Products
                                    </span>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {categoryProducts.map((product) => (
                                        product && (
                                            <Link
                                                key={`${category.title}-${product.slug}`}
                                                href={`/products/${product.slug}`}
                                                className="group relative flex flex-col rounded-3xl border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5"
                                            >
                                                <div className="mb-8 flex items-start justify-between">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.05] bg-black/[0.02] p-2.5 transition-colors group-hover:border-black/20 group-hover:bg-black/5">
                                                        <Image
                                                            src={product.icon}
                                                            alt={product.title}
                                                            width={32}
                                                            height={32}
                                                            className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                                        />
                                                    </div>
                                                    <div className="rounded-full bg-black/[0.03] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black/40 group-hover:bg-black group-hover:text-white">
                                                        {product.category}
                                                    </div>
                                                </div>

                                                <div className="mt-auto">
                                                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#00aaff]">
                                                        {product.description.split('.')[0]}
                                                    </p>
                                                    <h3 className="mb-4 text-xl font-bold text-black leading-tight transition-colors uppercase">
                                                        {product.title}
                                                    </h3>
                                                    <p className="mb-8 line-clamp-3 text-sm leading-loose text-black/50">
                                                        {product.longDescription}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-[11px] font-bold text-black/60 group-hover:text-black transition-colors">
                                                        View Product 
                                                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <CTASection
                title="Ready to build your ecosystem?"
                description="Connect with our experts to design a custom technology stack that powers your specific business goals."
                buttonText="Talk to an Expert"
                buttonHref="/contact"
            />
        </div>
    );
}
