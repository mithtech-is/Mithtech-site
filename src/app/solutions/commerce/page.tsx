"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    ShoppingCart,
    CheckCircle2,
    ArrowRight,
    Globe,
    Smartphone,
    CreditCard,
    Store,
    Package,
    Clock,
    BarChart2,
    ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function CapabilityItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5 transition-all duration-500 group"
        >
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
            </div>
            <div>
                <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h3>
                <p className="text-black/50 text-lg leading-loose">{description}</p>
            </div>
        </motion.div>
    );
}

function FeatureBullet({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{title}</span>
        </div>
    );
}

export default function CommerceSolution() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/solutions" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> All Solutions
                </Link>
            </div>

            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">High-Performance Commerce</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            eCommerce & <br />
                            <span className="text-[#00aaff]">Retail.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Power your sales across every channel with modern, flexible
                            commerce systems. From B2B/B2C stores to unified POS
                            and high-performance booking engines.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Launch Your Store
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-20 lg:py-32 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CapabilityItem
                            icon={Globe}
                            title="Omnichannel Sync"
                            description="Sell anywhere. Sync inventory across Web, Mobile, Social, and Marketplaces effortlessly."
                        />
                        <CapabilityItem
                            icon={Smartphone}
                            title="Mobile-First UX"
                            description="Deliver a seamless shopping experience with high-speed, responsive commerce interfaces."
                        />
                        <CapabilityItem
                            icon={Store}
                            title="Unified Retail"
                            description="Bridge online and offline. Unified inventory and customer data across physical and digital stores."
                        />
                        <CapabilityItem
                            icon={Clock}
                            title="Booking Systems"
                            description="Integrated appointment and service booking systems for service-based retail operations."
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Feature Sections */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">B2B & B2C Platforms</h2>
                            <p className="text-xl text-black/40 mb-10 leading-loose italic max-w-2xl">
                                Whether you're selling direct-to-consumer or managing complex wholesale relationships.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-10">
                                <FeatureBullet title="Tiered Pricing Engine" />
                                <FeatureBullet title="Bulk Ordering Flows" />
                                <FeatureBullet title="Customer Segmentation" />
                                <FeatureBullet title="Wholesale Portals" />
                                <FeatureBullet title="Subscription Billing" />
                                <FeatureBullet title="Custom Checkout APIs" />
                            </div>
                        </motion.div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-black/[0.05] shadow-2xl bg-white aspect-video flex items-center justify-center p-20">
                            <ShoppingCart className="w-32 h-32 text-black/5" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-black/[0.05] shadow-2xl bg-white aspect-video flex items-center justify-center p-20 lg:order-1 order-2">
                            <Package className="w-32 h-32 text-black/5" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-2 order-1"
                        >
                            <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Inventory & Logistics</h2>
                            <p className="text-xl text-black/40 mb-10 leading-loose italic max-w-2xl">
                                Never lose a sale due to architecture bottlenecks with real-time tracking.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-10">
                                <FeatureBullet title="Real-time Multi-sync" />
                                <FeatureBullet title="Multi-warehouse Logic" />
                                <FeatureBullet title="Global Shipping Sync" />
                                <FeatureBullet title="Stock Level Forecasting" />
                                <FeatureBullet title="Return Management" />
                                <FeatureBullet title="Supplier Data Portals" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 lg:py-32 border-y border-black/[0.05] bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="group">
                            <div className="text-6xl font-extrabold text-[#00aaff] mb-4 group-hover:scale-110 transition-transform duration-500">99.9%</div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Uptime Reliability</p>
                        </div>
                        <div className="group text-[#00aaff]">
                            <div className="text-6xl font-extrabold text-white mb-4 group-hover:scale-110 transition-transform duration-500">40%</div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Conversion Increase</p>
                        </div>
                        <div className="group">
                            <div className="text-6xl font-extrabold text-[#00aaff] mb-4 group-hover:scale-110 transition-transform duration-500">2x</div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Faster Load Times</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to modernize your retail experience?"
                description="Join the next generation of commerce. Let's build a platform that grows with your ambition."
                buttonText="Talk to a Specialist"
                buttonHref="/contact"
            />
        </div>
    );
}
