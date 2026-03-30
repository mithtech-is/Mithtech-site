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
    BarChart2
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CommerceSolution() {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden px-0 mx-0">
            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden px-0 mx-0">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            HIGH-PERFORMANCE COMMERCE
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            ECOMMERCE & <br />
                            <span className="text-muted-foreground">RETAIL</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Power your sales across every channel with modern, flexible commerce systems. From B2B/B2C stores to unified POS and booking engines.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full border border-black px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Launch Your Store</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-16 sm:py-20 md:py-24 border-b px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                        <CapabilityItem
                            icon={Globe}
                            title="Multi-channel Selling"
                            description="Sell anywhere. Sync your inventory across Web, Mobile, Social Media, and Marketplace channels effortlessly."
                        />
                        <CapabilityItem
                            icon={Smartphone}
                            title="Mobile-First Design"
                            description="Deliver a seamless shopping experience on every device with high-speed, responsive commerce interfaces."
                        />
                        <CapabilityItem
                            icon={Store}
                            title="Unified POS"
                            description="Bridge the gap between online and offline. Unified inventory and customer data across physical and digital stores."
                        />
                        <CapabilityItem
                            icon={Clock}
                            title="Booking Engines"
                            description="Integrated appointment and service booking systems for service-based businesses and retail alike."
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Feature Sections */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold tracking-tight mb-8">B2B & B2C Platforms</h2>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Whether you're selling directly to consumers or managing complex wholesale relationships, our platforms provide the flexibility you need.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <FeatureBullet title="Tiered Pricing" />
                                <FeatureBullet title="Bulk Ordering" />
                                <FeatureBullet title="Customer Groups" />
                                <FeatureBullet title="Wholesale Portals" />
                                <FeatureBullet title="Subscription Billing" />
                                <FeatureBullet title="Custom Checkouts" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-muted rounded-3xl p-12 max-w-[400px] mx-auto lg:ml-auto lg:mr-0 aspect-square flex items-center justify-center border"
                        >
                            <ShoppingCart className="w-48 h-48 text-foreground/10" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-muted rounded-3xl p-12 max-w-[400px] mx-auto lg:mr-auto lg:ml-0 aspect-square flex items-center justify-center border lg:order-1 order-2"
                        >
                            <Package className="w-48 h-48 text-foreground/10" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-2 order-1"
                        >
                            <h2 className="text-4xl font-bold tracking-tight mb-8">Inventory & Logistics</h2>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                Never lose a sale due to architecture bottlenecks. Real-time inventory tracking and automated fulfillment workflows.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <FeatureBullet title="Real-time Sync" />
                                <FeatureBullet title="Multi-warehouse" />
                                <FeatureBullet title="Shipping Integration" />
                                <FeatureBullet title="Stock Forecasting" />
                                <FeatureBullet title="Returns Management" />
                                <FeatureBullet title="Supplier Portals" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust/Metric Section */}
            <section className="py-16 sm:py-20 md:py-24 border-y bg-foreground text-background px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div>
                            <div className="text-6xl font-black mb-4">99.9%</div>
                            <p className="text-lg text-background/70 uppercase tracking-widest font-bold">Uptime Reliability</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black mb-4">40%</div>
                            <p className="text-lg text-background/70 uppercase tracking-widest font-bold">Conversion Increase</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black mb-4">2x</div>
                            <p className="text-lg text-background/70 uppercase tracking-widest font-bold">Faster Load Times</p>
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

function CapabilityItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 rounded-2xl border bg-card p-5 sm:p-8 hover:shadow-xl transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

function FeatureBullet({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
            <span className="text-lg font-medium">{title}</span>
        </div>
    );
}


