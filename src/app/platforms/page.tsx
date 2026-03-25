"use client";

import { PlatformCard } from "@/components/marketing/PlatformCard";
import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
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
        <div className="flex flex-col w-full bg-background overflow-hidden">

            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />

                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            THE TECHNOLOGY STACK
                        </span>

                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            ENTERPRISE <br />
                            <span className="text-muted-foreground">PLATFORMS</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                            We architect scalable technology ecosystems using world-class platforms.
                            Own your data, customize your workflows, and scale your business with
                            systems built for long-term growth.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Strategic Value Grid */}
            <section className="py-16 sm:py-20 md:py-24 border-b bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 sm:gap-8">

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


            {/* Platforms */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-24">

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
                    className="mt-32"
                >

                    <PlatformCard
                        name="MedusaJS"
                        imageSrc="/assets/medusa-logo.png"
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
                    className="mt-32"
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


                {/* Fintech */}
                <CategorySection
                    title="Fintech & Finance"
                    description="Specialized financial technology platforms."
                    className="mt-32"
                >

                    <PlatformCard
                        name="Polemarch"
                        imageSrc="/assets/polemarch_favicon.png"
                        description="Platform for managing unlisted share investments and private market deals."
                        href="https://deals.polemarch.in"
                        delay={0.1}
                    />

                </CategorySection>

            </div>


            {/* Technical Excellence */}
            <section className="py-16 sm:py-20 md:py-24 border-y bg-foreground text-background px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">

                    <div className="flex flex-col lg:flex-row gap-20 items-center">

                        <div className="flex-1">

                            <h2 className="text-5xl font-black mb-10 leading-tight">
                                THE TECHNICAL <br /> ADVANTAGE.
                            </h2>

                            <div className="grid grid-cols-1 gap-8">

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


                        <div className="flex-none w-full lg:w-[450px] bg-background/5 border border-background/20 rounded-[3rem] p-10 aspect-square flex flex-col justify-center lg:ml-auto">

                            <div className="space-y-10">

                                <div>
                                    <div className="text-7xl font-black text-background mb-4">0%</div>
                                    <p className="text-lg text-background/60 font-bold uppercase tracking-widest leading-none">
                                        Vendor Lock-in
                                    </p>
                                </div>

                                <div className="h-px bg-background/20 w-full" />

                                <div>
                                    <div className="text-7xl font-black text-background mb-4">∞</div>
                                    <p className="text-xl text-background/60 font-bold uppercase tracking-widest leading-none">
                                        Scalability Potential
                                    </p>
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
            className="flex flex-col gap-4 text-center md:text-left"
        >
            <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center mx-auto md:mx-0">
                <Icon className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold">{title}</h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}



function CategorySection({ title, description, children, className }: { title: string, description: string, children: React.ReactNode, className?: string }) {
    return (
        <section className={className}>
            <div className="mb-12">
                <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">{title}</h2>
                <p className="text-xl text-muted-foreground">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {children}
            </div>
        </section>
    );
}



function TechPoint({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex gap-6 items-start group">

            <div className="w-12 h-12 rounded-2xl bg-background/10 border border-background/20 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-foreground transition-colors">
                <Icon className="w-6 h-6" />
            </div>

            <div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-background/60 text-lg leading-relaxed">{description}</p>
            </div>

        </div>
    );
}
