"use client";

import { useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import {
    ShoppingCart,
    Code2,
    Zap,
    Layers,
    Globe,
    ShieldCheck,
    Box,
    ArrowRight,
    Search,
    Cpu,
    Webhook,
    Layout,
    Truck,
    CreditCard,
    Check,
    X,
    Minus
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const COMPARISON_CONTENT: Record<string, { label: string; medusa: string; shopify: string; woo: string; magento: string }> = {
    "Revenue Retention": {
        label: "Revenue Retention",
        medusa: "💰 Zero platform commission.",
        shopify: "💸 Transaction fees reduce margin.",
        woo: "💰 No fee, but plugins add cost.",
        magento: "💸 No fee, but overhead is heavy.",
    },
    "Business Control": {
        label: "Cost Efficiency (Long-Term)",
        medusa: "📈 Predictable long-term costs.",
        shopify: "💸 Costs rise with growth.",
        woo: "⚠️ Costs become unstable over time.",
        magento: "💸 Ownership stays expensive.",
    },
    "Scalability": {
        label: "Ownership & Independence",
        medusa: "🔥 Full control over platform and data.",
        shopify: "❌ Tied to Shopify's ecosystem.",
        woo: "⚠️ Plugin stack affects control.",
        magento: "⚠️ Often depends on specialists.",
    },
    "Customization": {
        label: "Customization for Sales Workflows",
        medusa: "🚀 Built for custom sales flows.",
        shopify: "⚠️ Often limited by apps.",
        woo: "⚠️ Usually plugin-heavy.",
        magento: "⚠️ Powerful, but slow and costly.",
    },
    "Brand Positioning": {
        label: "Security & Control",
        medusa: "🔒 Full control over infra and policies.",
        shopify: "⚠️ Managed security, limited control.",
        woo: "⚠️ Depends on hosting and plugins.",
        magento: "🔒 Strong, but needs active management.",
    },
    "Initial Setup Effort": {
        label: "Initial Setup Investment",
        medusa: "⚠️ Higher upfront setup.",
        shopify: "✅ Fastest to launch.",
        woo: "✅ Easy for simple stores.",
        magento: "❌ Complex and time-intensive.",
    },
    "Technical Dependency": {
        label: "Technical Dependency",
        medusa: "⚠️ Best with a capable tech partner.",
        shopify: "✅ Minimal day-to-day dependency.",
        woo: "⚠️ Moderate technical reliance.",
        magento: "❌ High technical dependency.",
    },
};

export default function MedusaPageClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featureGridRef = useRef<HTMLDivElement>(null);
    const solutionGridRef = useRef<HTMLDivElement>(null);
    const customSectionRef = useRef<HTMLDivElement>(null);
    const comparisonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Hero
            gsap.from(".hero-content > *", { opacity: 0, y: 30, stagger: 0.2, duration: 1, ease: "power4.out" });

            // Feature Grid
            gsap.fromTo(".feature-card",
                { autoAlpha: 0, y: 40 },
                {
                    scrollTrigger: {
                        trigger: featureGridRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            // Commerce Solutions
            gsap.fromTo(".commerce-solution",
                { autoAlpha: 0, scale: 0.95, y: 50 },
                {
                    scrollTrigger: {
                        trigger: solutionGridRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power4.out"
                }
            );

            // Comparison Table
            gsap.fromTo(".comparison-row",
                { autoAlpha: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: comparisonRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 md:pt-16 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        HEADLESS COMMERCE ARCHITECTS
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase break-words">
                        MEDUSA <br />
                        <span className="text-[#00aaff]">ENGINE</span>
                    </h1>
                    <p className="text-xl leading-loose text-black/50 max-w-2xl mb-10 italic">
                        The commerce platform for developers. Medusa is an open-source headless engine that gives brands the total control needed for unique digital commerce experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                            Schedule Commerce Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Medusa Section */}
            <section className="py-12 sm:py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Modern Commerce, Decoupled</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-3xl">
                            Medusa is built as a flexible, API-first engine. Unlike monolithic platforms, it separates the backend commerce logic from your frontend presentation.
                        </p>
                    </div>
                    <div ref={featureGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Code2}
                            title="Headless Architecture"
                            description="Connect any frontend—Next.js, mobile apps, or POS systems—to a robust commerce backend via standardized APIs."
                        />
                        <FeatureCard
                            icon={Layers}
                            title="Modular Plugins"
                            description="Extend core functionality with a powerful plugin system for payments, fulfillment, and marketing tools."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Developer Experience"
                            description="Built with Node.js and TypeScript, Medusa offers the most flexible and modern DX for commerce teams."
                        />
                    </div>
                </div>
            </section>

            {/* Mithtech Medusa Solutions */}
            <section className="py-12 sm:py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Medusa Commerce Solutions</h2>
                        <p className="text-xl text-black/40 leading-loose italic">We build bespoke commerce experiences that convert, designed around your unique requirements.</p>
                    </div>

                    <div ref={solutionGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <CommerceSolution
                            icon={ShoppingCart}
                            title="Direct-to-Consumer (D2C)"
                            description="High-performance storefronts built for speed and conversion."
                            features={["Tailored checkout flows", "Next.js frontend performance", "Real-time inventory management", "Personalized user journeys"]}
                        />
                        <CommerceSolution
                            icon={Globe}
                            title="B2B & Enterprise Commerce"
                            description="Complex logic for wholesale, bulk ordering, and tiered pricing."
                            features={["Custom price lists", "Company accounts", "Volume-based discounts", "Automated invoicing workflows"]}
                        />
                        <CommerceSolution
                            icon={Layers}
                            title="Multi-Vendor Marketplaces"
                            description="Powerful orchestration for multi-seller environments."
                            features={["Seller onboarding portals", "Automated commission handling", "Distributed fulfillment", "Global currency support"]}
                        />
                        <CommerceSolution
                            icon={Zap}
                            title="Pricing & Order Engine"
                            description="Composable pricing, cart, and order workflows designed for multi-region commerce operations."
                            features={["Region-based pricing control", "Flexible cart and checkout flows", "Order lifecycle automation", "Shipping and tax rule orchestration"]}
                        />
                    </div>
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section ref={customSectionRef} className="py-12 sm:py-24 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Limitless Customization</h2>
                            <p className="text-xl text-black/60 mb-10 leading-loose italic">
                                Medusa doesn&apos;t lock you into a rigid structure. Every part of the engine is customizable to fit your business workflows perfectly.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <CustomItem
                                    title="Custom Storefronts"
                                    desc="Fully bespoke frontends built with Next.js or React for maximum performance."
                                />
                                <CustomItem
                                    title="Plugin Ecosystem"
                                    desc="Integrate Stripe, PayPal, SendGrid, and more via official or custom plugins."
                                />
                                <CustomItem
                                    title="Automated Flows"
                                    desc="Trigger custom actions on order events using built-in subscribers and hooks."
                                />
                                <CustomItem
                                    title="Multi-Region Control"
                                    desc="Manage multiple currencies, tax rules, and shipping methods from one backend."
                                />
                            </div>
                        </div>
                        <div className="custom-visual flex-1 w-full flex justify-center lg:justify-end py-10 px-0">
                            <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden bg-background/5">
                                <Image
                                    src="/assets/medusarightsideimage.png"
                                    alt="Medusa Customization"
                                    fill
                                    className="object-cover scale-[1.12]"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section ref={comparisonRef} className="py-12 sm:py-24 bg-white overflow-hidden border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-bold tracking-[0.3em] text-black/40 uppercase mb-4 block">WHY MEDUSA WINS</span>
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">THE SUPERIOR ENGINE</h2>
                    </div>

                    <div className="md:hidden">
                        <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm">
                            <table className="w-full table-fixed border-separate border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="w-[28%] border-b border-r border-black/10 bg-white px-2 py-3 text-left align-top">
                                            <span className="text-[8px] font-black uppercase tracking-[0.18em] text-black/45">Platforms</span>
                                        </th>
                                        <th className="w-[18%] border-b border-black/10 bg-black px-2 py-3 text-center align-top text-white">
                                            <span className="text-[10px] font-black uppercase tracking-[0.08em]">Medusa</span>
                                        </th>
                                        <th className="w-[18%] border-b border-l border-black/10 bg-[#f5f5f5] px-2 py-3 text-center align-top">
                                            <span className="text-[10px] font-black uppercase tracking-[0.08em] text-black/75">Shopify</span>
                                        </th>
                                        <th className="w-[18%] border-b border-l border-black/10 bg-[#f5f5f5] px-2 py-3 text-center align-top">
                                            <span className="text-[9px] font-black uppercase tracking-[0.06em] text-black/75">Woo</span>
                                        </th>
                                        <th className="w-[18%] border-b border-l border-black/10 bg-[#f5f5f5] px-2 py-3 text-center align-top">
                                            <span className="text-[10px] font-black uppercase tracking-[0.08em] text-black/75">Magento</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(COMPARISON_CONTENT).map(([key, row], index) => {
                                        const isLastRow = index === Object.entries(COMPARISON_CONTENT).length - 1;
                                        return (
                                            <tr key={key}>
                                                <td className={`border-r border-black/10 bg-white px-2 py-3 align-top ${!isLastRow ? "border-b border-black/10" : ""}`}>
                                                    <p className="text-[9px] font-extrabold uppercase leading-4 tracking-[0.03em] text-black">
                                                        {row.label}
                                                    </p>
                                                </td>
                                                <td className={`bg-black px-2 py-3 align-top text-white ${!isLastRow ? "border-b border-white/10" : ""}`}>
                                                    <p className="text-[10px] font-medium leading-[1.45] break-words">
                                                        {row.medusa}
                                                    </p>
                                                </td>
                                                <td className={`border-l border-black/10 bg-[#f5f5f5] px-2 py-3 align-top ${!isLastRow ? "border-b border-black/10" : ""}`}>
                                                    <p className="text-[10px] leading-[1.45] break-words text-black/80">
                                                        {row.shopify}
                                                    </p>
                                                </td>
                                                <td className={`border-l border-black/10 bg-[#f5f5f5] px-2 py-3 align-top ${!isLastRow ? "border-b border-black/10" : ""}`}>
                                                    <p className="text-[10px] leading-[1.45] break-words text-black/80">
                                                        {row.woo}
                                                    </p>
                                                </td>
                                                <td className={`border-l border-black/10 bg-[#f5f5f5] px-2 py-3 align-top ${!isLastRow ? "border-b border-black/10" : ""}`}>
                                                    <p className="text-[10px] leading-[1.45] break-words text-black/80">
                                                        {row.magento}
                                                    </p>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="relative mx-auto hidden max-w-6xl md:block">
                        <div className="overflow-x-auto pb-8">
                            <table className="w-full min-w-[800px] border-separate border-spacing-0">
                                <thead>
                                    <tr className="sticky top-0 z-20">
                                        <th className="p-6 text-left bg-white border-b border-l border-t rounded-tl-3xl w-1/5">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Platforms</span>
                                        </th>
                                        <th className="p-8 text-center bg-black text-white relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] rounded-t-3xl scale-[1.05] w-1/5">
                                            <div className="flex flex-col items-center">
                                                <span className="text-2xl font-black tracking-tighter">Medusa JS</span>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30" />
                                        </th>
                                        <th className="p-6 text-center bg-[#f5f5f5] text-[#333] border-b border-t w-1/5">
                                            <span className="text-xl font-bold tracking-tight">Shopify</span>
                                        </th>
                                        <th className="p-6 text-center bg-[#f5f5f5] text-[#333] border-b border-t w-1/5">
                                            <span className="text-xl font-bold tracking-tight">WooCommerce</span>
                                        </th>
                                        <th className="p-6 text-center bg-[#f5f5f5] text-[#333] border-b border-t border-r rounded-tr-3xl w-1/5">
                                            <span className="text-xl font-bold tracking-tight">Magento</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ComparisonRow
                                        label="Revenue Retention"
                                        medusa="💰 ₹0 transaction fees → keep maximum margin"
                                        shopify="💸 0.5%–2% per order loss"
                                        woo="💰 No fee but hidden plugin costs"
                                        magento="💰 No fee but high operational cost"
                                    />
                                    <ComparisonRow
                                        label="Business Control"
                                        medusa="🔥 Full ownership (no dependency on platform)"
                                        shopify="❌ Platform-controlled ecosystem"
                                        woo="⚠️ Plugin-dependent control"
                                        magento="⚠️ Complex ownership (needs dev team)"
                                    />
                                    <ComparisonRow
                                        label="Scalability"
                                        medusa="🚀 Scales smoothly from ₹1L to ₹10Cr+"
                                        shopify="⚠️ Gets expensive at scale"
                                        woo="⚠️ Performance issues at growth"
                                        magento="🏗️ Scales but costly"
                                    />
                                    <ComparisonRow
                                        label="Customization"
                                        medusa="🚀 Fully adaptable to your business model"
                                        shopify="⚠️ Limited to apps"
                                        woo="⚠️ Workarounds via plugins"
                                        magento="⚠️ Heavy & slow customization"
                                    />
                                    <ComparisonRow
                                        label="Brand Positioning"
                                        medusa="💎 Premium, custom-built experience"
                                        shopify="🏪 Template-based feel"
                                        woo="🧩 Generic websites"
                                        magento="🏗️ Enterprise but outdated UX"
                                    />
                                    <ComparisonRow
                                        label="Initial Setup Effort"
                                        medusa="⚠️ Requires initial setup investment (not plug-and-play)"
                                        shopify="✅ Easy to start"
                                        woo="✅ Easy to start"
                                        magento="❌ Complex setup"
                                    />
                                    <ComparisonRow
                                        label="Technical Dependency"
                                        medusa="⚠️ Needs technical team/agency support"
                                        shopify="✅ No technical dependency"
                                        woo="⚠️ Moderate technical need"
                                        magento="❌ High technical dependency"
                                        isLast
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-black/40 font-medium text-lg italic">
                        Not just another eCommerce platform — a commerce engine built for scale.
                    </p>
                </div>
            </section>

            {/* Why Mithtech */}
            <section className="py-12 sm:py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Why Mithtech for Medusa?</h2>
                        <p className="text-xl text-black/40 leading-loose italic">We combine deep commerce knowledge with high-performance engineering.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform text-[#00aaff] shadow-lg">
                                <Search className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-black mb-4 uppercase">Performance First</h3>
                            <p className="text-lg text-black/40 leading-loose italic">We build storefronts that load in milliseconds, optimized for Core Web Vitals and conversions.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform text-[#00aaff] shadow-lg">
                                <Cpu className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-black mb-4 uppercase">Custom Integrations</h3>
                            <p className="text-lg text-black/40 leading-loose italic">Experience integrating Medusa with complex ERPs, CRMs, and custom fulfillment logic.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform text-[#00aaff] shadow-lg">
                                <Zap className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-black mb-4 uppercase">Agile Delivery</h3>
                            <p className="text-lg text-black/40 leading-loose italic">Rapid prototyping and iterative development to get your commerce engine to market faster.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Future-proof your commerce engine"
                description="Move away from monolithic platforms that slow you down. Let&apos;s build your next-generation headless store."
                buttonText="Start Commerce Project"
                buttonHref="/contact"
            />
        </div>
    );
}

function ComparisonRow({ label, medusa, shopify, woo, magento, isLast }: any) {
    const row = COMPARISON_CONTENT[label] ?? { label, medusa, shopify, woo, magento };

    return (
        <tr className="comparison-row group">
            <td className={`p-6 border-l border-b bg-white text-sm font-bold text-muted-foreground ${isLast ? 'rounded-bl-3xl' : ''}`}>
                {row.label}
            </td>
            <td className="p-8 bg-black text-white text-center relative z-10 scale-[1.05] shadow-2xl transition-transform duration-300">
                <span className="text-sm font-medium">{row.medusa}</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30" />
            </td>
            <td className="p-6 border-b bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee]">
                <span className="text-sm">{row.shopify}</span>
            </td>
            <td className="p-6 border-b bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee]">
                <span className="text-sm">{row.woo}</span>
            </td>
            <td className={`p-6 border-b border-r bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee] ${isLast ? 'rounded-br-3xl' : ''}`}>
                <span className="text-sm">{row.magento}</span>
            </td>
        </tr>
    );
}

function CustomItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="custom-item p-6 sm:p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-black/10 hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 group">
            <h4 className="font-extrabold text-2xl mb-4 text-black transition-colors uppercase">{title}</h4>
            <p className="text-lg text-black/60 transition-colors leading-loose">{desc}</p>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h3>
            <p className="text-black/50 text-lg leading-loose">{description}</p>
        </div>
    );
}

function CommerceSolution({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
    return (
        <div className="commerce-solution flex flex-col gap-8 p-6 sm:p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group min-h-full">
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:bg-white transition-colors">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase group-hover:text-white transition-colors">{title}</h3>
            <p className="text-black/50 text-lg font-medium leading-loose group-hover:text-white/60 transition-colors italic">{description}</p>

            <ul className="space-y-4 pt-6 border-t border-black/5 group-hover:border-white/10 transition-colors mt-auto">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-base font-medium text-black/70 group-hover:text-white/80 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff]" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}
