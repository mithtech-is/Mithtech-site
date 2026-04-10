"use client";

import { PlatformCard } from "@/components/marketing/PlatformCard";
import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Cpu,
    Layers,
    ShieldCheck,
    Zap,
    Code2,
    Database,
    Globe,
    Wrench
} from "lucide-react";

export default function Platforms() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-black/[0.05]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">The Technology Stack</span>
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-10 leading-[0.9] uppercase">
                            Enterprise <br />
                            <span className="text-[#00aaff]">Platforms.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium">
                            We architect scalable technology ecosystems using world-class platforms.
                            Own your data, customize your workflows, and scale your business with
                            systems built for long-term reliability.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 uppercase tracking-widest">
                                Architect Your Stack
                            </Link>
                            <a href="#explore" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-10 py-5 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95 uppercase tracking-widest">
                                Explore Platforms
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Grid */}
            <section className="py-24 lg:py-40 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-4">
                        <ValueProp
                            icon={ShieldCheck}
                            title="Open Standards"
                            description="Built on platforms with open architectures ensuring long-term flexibility and vendor independence."
                        />
                        <ValueProp
                            icon={Zap}
                            title="Extreme Scalability"
                            description="From startups to enterprises, our platforms scale to millions of transactions without breaking."
                        />
                        <ValueProp
                            icon={Layers}
                            title="Modular Core"
                            description="Flexible architecture allowing deep customization and seamless integrations."
                        />
                        <ValueProp
                            icon={Cpu}
                            title="Managed Hosting"
                            description="Deploy on your infrastructure or let us manage your stack with high-availability cloud hosting."
                        />
                    </div>
                </div>
            </section>

            {/* Platforms Catalog */}
            <section id="explore" className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ERP & Business Systems */}
                    <CategorySection
                        title="ERP & Business Systems"
                        description="Core platforms that power enterprise operations."
                    >
                        <PlatformCard
                            name="ERPNext"
                            imageSrc="/assets/erpnext-logo.png"
                            description="Comprehensive ERP system managing finance, HR, operations, inventory, and manufacturing."
                            delay={0.1}
                        />
                        <PlatformCard
                            name="Qu6"
                            imageSrc="/assets/qu6_logo.png"
                            description="Sales intelligence platform for managing pipelines, deals, and customer relationships."
                            delay={0.2}
                        />
                        <PlatformCard
                            name="Perfex CRM"
                            imageSrc="/assets/perfex.png"
                            description="Customer and project management CRM designed for service businesses."
                            delay={0.3}
                        />
                    </CategorySection>

                    {/* Commerce */}
                    <CategorySection
                        title="Commerce & Retail"
                        description="Platforms powering digital commerce and modern retail infrastructure."
                        className="mt-40"
                    >
                        <PlatformCard
                            name="MedusaJS"
                            imageSrc="/assets/medusajs-logo.png"
                            description="Headless commerce platform for building scalable storefronts."
                            href="/solutions/commerce"
                            delay={0.1}
                        />
                        <PlatformCard
                            name="WooCommerce"
                            imageSrc="/assets/woocommerce_logo_new.png"
                            description="Flexible ecommerce platform used to build scalable online stores."
                            delay={0.2}
                        />
                        <PlatformCard
                            name="Schedulr"
                            imageSrc="/assets/icon-schedulr.png"
                            description="Enterprise appointment and booking management system."
                            delay={0.3}
                        />
                        <PlatformCard
                            name="Directorist"
                            imageSrc="/assets/directorist.png"
                            description="Marketplace and directory platform for building listing ecosystems."
                            delay={0.4}
                        />
                    </CategorySection>

                    {/* Marketing & Automation */}
                    <CategorySection
                        title="Growth & Automation"
                        description="Platforms for marketing automation, messaging, and workflow orchestration."
                        className="mt-40"
                    >
                        <PlatformCard
                            name="Mautic"
                            imageSrc="/assets/mautic_logo_new.png"
                            description="Advanced marketing automation platform with deep segmentation."
                            delay={0.1}
                        />
                        <PlatformCard
                            name="n8n"
                            imageSrc="/assets/n8n-logo.png"
                            description="Workflow automation platform connecting APIs, apps, and internal systems."
                            delay={0.2}
                        />
                        <PlatformCard
                            name="Polygin"
                            imageSrc="/assets/polyg.png"
                            description="Messaging automation hub for WhatsApp and customer engagement."
                            delay={0.3}
                        />
                        <PlatformCard
                            name="Listmonk"
                            imageSrc="/assets/listmonk-logo.png"
                            description="High-performance newsletter and email marketing platform."
                            delay={0.4}
                        />
                    </CategorySection>
                </div>
            </section>

            {/* Technical Excellence */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-black text-white rounded-[3rem] p-12 lg:p-24 border border-white/10 shadow-2xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <div className="flex-1">
                                <h2 className="text-5xl font-extrabold mb-16 leading-tight tracking-tight uppercase text-white">
                                    The Technical <br /> <span className="text-[#00aaff]">Advantage.</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <TechPoint
                                        icon={Code2}
                                        title="Clean Architecture"
                                        description="We follow strict engineering standards ensuring maintainable and scalable systems."
                                    />
                                    <TechPoint
                                        icon={Database}
                                        title="Data Ownership"
                                        description="All platforms allow full data ownership and self-hosting capabilities."
                                    />
                                    <TechPoint
                                        icon={Globe}
                                        title="Cloud Neutral"
                                        description="Deploy across AWS, GCP, Azure or your own infrastructure."
                                    />
                                    <TechPoint
                                        icon={Wrench}
                                        title="Deep Customization"
                                        description="We build custom modules and integrations tailored to business workflows."
                                    />
                                </div>
                            </div>
                            <div className="flex-none w-full lg:w-[480px] bg-white/5 border border-white/10 rounded-[3rem] p-16 aspect-square flex flex-col justify-center lg:ml-auto">
                                <div className="space-y-16">
                                    <div>
                                        <div className="text-8xl font-black text-[#00aaff] mb-4 tracking-tighter">0%</div>
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 leading-none">
                                            Vendor Lock-in
                                        </p>
                                    </div>
                                    <div className="h-px bg-white/10 w-full" />
                                    <div>
                                        <div className="text-8xl font-black text-white mb-4 tracking-tighter">∞</div>
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 leading-none">
                                            Scalability Potential
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Your stack should be your strength."
                description="Let’s architect an enterprise-grade platform stack that allows your business to scale without technological debt."
                buttonText="Architect Your Stack"
                buttonHref="/contact"
            />
        </div>
    );
}

function ValueProp({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
        >
            <div className="w-16 h-16 rounded-3xl bg-white border border-black/[0.05] shadow-2xl flex items-center justify-center text-[#00aaff]">
                <Icon className="w-8 h-8" />
            </div>
            <div>
                <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h3>
                <p className="text-lg text-black/50 leading-loose italic font-sans">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

function CategorySection({ title, description, children, className }: { title: string, description: string, children: React.ReactNode, className?: string }) {
    return (
        <section className={className}>
            <div className="mb-16">
                <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">{title}</h2>
                <p className="text-xl text-black/40 leading-loose italic max-w-2xl font-sans">{description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {children}
            </div>
        </section>
    );
}

function TechPoint({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex gap-8 items-start group">
            <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#00aaff] group-hover:text-black transition-all duration-500">
                <Icon className="w-7 h-7" />
            </div>
            <div>
                <h4 className="text-2xl font-extrabold mb-4 tracking-tight group-hover:text-[#00aaff] transition-colors uppercase">{title}</h4>
                <p className="text-white/50 text-lg leading-loose italic font-sans">{description}</p>
            </div>
        </div>
    );
}
