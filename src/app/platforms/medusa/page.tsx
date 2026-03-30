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

export default function MedusaPage() {
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

            // Customization Section
            gsap.fromTo(".custom-item",
                { autoAlpha: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: customSectionRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(".custom-visual",
                { autoAlpha: 0, scale: 0.8, rotate: 5 },
                {
                    scrollTrigger: {
                        trigger: customSectionRef.current,
                        start: "top bottom-=150",
                    },
                    autoAlpha: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.75)"
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
        <div ref={containerRef} className="flex flex-col w-full bg-background overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        HEADLESS COMMERCE ARCHITECTS
                    </span>
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                        MEDUSA <br />
                        <span className="text-muted-foreground">ENGINE</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                        The commerce platform for developers. Medusa is an open-source headless engine that gives brands the total control needed for unique digital commerce experiences.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full border border-black px-8 text-lg h-14 hover:scale-105 active:scale-95 transition-transform">
                            <Link href="/contact">Schedule Commerce Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What is Medusa Section */}
            <section className="py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">Modern Commerce, Decoupled</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
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
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Medusa Commerce Solutions</h2>
                        <p className="text-xl text-muted-foreground">We build bespoke commerce experiences that convert, designed around your unique requirements.</p>
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
                            title="WhatsApp Commerce"
                            description="Transactional commerce integrated directly into messaging apps."
                            features={["Polygin WhatsApp integration", "Chat-to-checkout flows", "Automated order updates", "Payment via chat"]}
                        />
                    </div>
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section ref={customSectionRef} className="py-24 bg-foreground text-background overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">Limitless Customization</h2>
                            <p className="text-xl text-background/80 mb-10 leading-relaxed">
                                Medusa doesn't lock you into a rigid structure. Every part of the engine is customizable to fit your business workflows perfectly.
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
            <section ref={comparisonRef} className="py-24 bg-white overflow-hidden border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">WHY MEDUSA WINS</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">THE SUPERIOR ENGINE</h2>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
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
                                        label="Profit Retention"
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

                    <p className="text-center mt-12 text-muted-foreground font-medium text-lg">
                        Not just another eCommerce platform — a commerce engine built for scale.
                    </p>
                </div>
            </section>

            {/* Why Mithtech */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Mithtech for Medusa?</h2>
                        <p className="text-lg text-muted-foreground">We combine deep commerce knowledge with high-performance engineering.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Search className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Performance First</h3>
                            <p className="text-muted-foreground italic">We build storefronts that load in milliseconds, optimized for Core Web Vitals and conversions.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Cpu className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Custom Integrations</h3>
                            <p className="text-muted-foreground italic">Experience integrating Medusa with complex ERPs, CRMs, and custom fulfillment logic.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Agile Delivery</h3>
                            <p className="text-muted-foreground italic">Rapid prototyping and iterative development to get your commerce engine to market faster.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Future-proof your commerce engine"
                description="Move away from monolithic platforms that slow you down. Let's build your next-generation headless store."
                buttonText="Start Commerce Project"
                buttonHref="/contact"
            />
        </div>
    );
}

function ComparisonRow({ label, medusa, shopify, woo, magento, isLast }: any) {
    return (
        <tr className="comparison-row group">
            <td className={`p-6 border-l border-b bg-white text-sm font-bold text-muted-foreground ${isLast ? 'rounded-bl-3xl' : ''}`}>
                {label}
            </td>
            <td className="p-8 bg-black text-white text-center relative z-10 scale-[1.05] shadow-2xl transition-transform duration-300">
                <span className="text-sm font-medium">{medusa}</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30" />
            </td>
            <td className="p-6 border-b bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee]">
                <span className="text-sm">{shopify}</span>
            </td>
            <td className="p-6 border-b bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee]">
                <span className="text-sm">{woo}</span>
            </td>
            <td className={`p-6 border-b border-r bg-[#f5f5f5] text-center text-[#333] transition-colors duration-200 group-hover:bg-[#eee] ${isLast ? 'rounded-br-3xl' : ''}`}>
                <span className="text-sm">{magento}</span>
            </td>
        </tr>
    );
}

function CustomItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="custom-item p-6 rounded-2xl border border-background/20 bg-background/5 hover:bg-background/10 transition-colors">
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-sm text-background/60">{desc}</p>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="feature-card flex flex-col gap-4 p-8 rounded-3xl border bg-card/50 hover:shadow-2xl hover:border-foreground/10 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function CommerceSolution({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
    return (
        <div className="commerce-solution flex flex-col gap-6 p-10 rounded-3xl border bg-card/40 hover:bg-card transition-all duration-500 group bg-background/50 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter">{title}</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">{description}</p>

            <ul className="space-y-3 mt-4">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
