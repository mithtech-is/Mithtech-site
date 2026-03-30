"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    BarChart3,
    Box,
    GraduationCap,
    Megaphone,
    ShoppingCart,
    ArrowRight,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Coins
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Solutions() {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden px-0 mx-0">
            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden px-0 mx-0">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            ENTERPRISE <br />
                            <span className="text-muted-foreground">SYSTEMS</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            We architecture high-performance business systems on powerful scalable platforms. No vendor lock-in. Full data ownership. Boundless scalability.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Book Consultation</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                Explore Platforms
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Mith Section */}
            <section className="py-16 sm:py-20 md:py-24 border-b bg-muted/30 px-0 mx-0">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Full Data Ownership</h3>
                            <p className="text-muted-foreground">Take back control. With our enterprise solutions, you own every byte of your business data, hosted on your terms.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                                <Coins className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Zero Licensing Fees</h3>
                            <p className="text-muted-foreground">Eliminate per-user costs. Our scalable platforms allow you to grow your team without growing your software bill.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">Infinite Flexibility</h3>
                            <p className="text-muted-foreground">Your business is unique. Your software should be too. Complete customizability for any workflow or industry requirement.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution: ERP */}
            <SolutionDetailSection
                title="Frappe & ERPNext"
                subtitle="THE CORE ENGINE"
                description="The world's most versatile ERP platform. Consolidate your entire business into a single source of truth."
                icon={Box}
                features={[
                    "Unified Accounting & Finance",
                    "Advanced HR & Payroll Management",
                    "Supply Chain & Warehouse Automation",
                    "Integrated CRM & Support Desks",
                    "Asset Management & Lifecycle Tracking"
                ]}
                href="/solutions/frappe"
                image="/assets/erpnext-logo.png"
                reversed={false}
            />

            {/* Solution: eCommerce */}
            <SolutionDetailSection
                title="eCommerce & Retail"
                subtitle="SCALABLE COMMERCE"
                description="Power your sales across all channels with flexible, high-performance commerce systems built for scale."
                icon={ShoppingCart}
                features={[
                    "Multi-channel B2B/B2C Selling",
                    "Unified Point of Sale (POS)",
                    "Real-time Inventory Sync",
                    "Appointment & Service Booking",
                    "Global Payment Gateway Integration"
                ]}
                href="/solutions/commerce"
                image="/assets/medusa-logo.png"
                reversed={true}
            />

            {/* Solution: Marketing */}
            <SolutionDetailSection
                title="Marketing Automation"
                subtitle="INTELLIGENT OUTREACH"
                description="Engage your audience at exactly the right moment with automated, data-driven marketing workflows."
                icon={Megaphone}
                features={[
                    "Omnichannel Campaign Management",
                    "Advanced Email & WhatsApp Automation",
                    "Visual Workflow Builders",
                    "Lead Scoring & Behavioral Tracking",
                    "Polyg Integration for Modern Messaging"
                ]}
                href="/solutions/marketing-automation"
                image="/assets/Mautic_Logo_LB.png"
                reversed={false}
            />

            {/* Solution: Analytics */}
            <SolutionDetailSection
                title="Analytics & BI"
                subtitle="DATA-DRIVEN DECISIONS"
                description="Transform raw data into actionable insights with enterprise-grade business intelligence and visualization."
                icon={BarChart3}
                features={[
                    "Bespoke Dashboard Architecture",
                    "Real-time Data Visualization",
                    "Multi-source Data Integration",
                    "Predictive Analytics & Forecasting",
                    "Metabase & Superset Implementation"
                ]}
                href="/solutions/analytics"
                image="/assets/Web-Analytics-CTA-Image.webp"
                reversed={true}
            />

            {/* Solution: LMS */}
            <SolutionDetailSection
                title="Learning Management"
                subtitle="KNOWLEDGE EMPOWERMENT"
                description="Build a culture of continuous learning with modern, scalable education and training platforms."
                icon={GraduationCap}
                features={[
                    "Employee Onboarding & Training",
                    "Customer Certification Programs",
                    "Interactive Course Creators",
                    "Progress Tracking & Analytics",
                    "White-labeled Student Portals"
                ]}
                href="/solutions/lms"
                image="/assets/shoiclean.png"
                reversed={false}
            />

            <CTASection
                title="Ready to build your next-gen system?"
                description="Our team of architects is ready to design a scalable enterprise solution specifically for your business growth."
                buttonText="Book a Consultation"
                buttonHref="/contact"
            />
        </div>
    );
}

function SolutionDetailSection({
    title,
    subtitle,
    description,
    icon: Icon,
    features,
    href,
    image,
    reversed
}: {
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    features: string[];
    href: string;
    image: string;
    reversed?: boolean;
}) {
    return (
        <section className={`py-24 border-b px-0 mx-0 ${reversed ? 'bg-muted/10' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
                                {subtitle}
                            </span>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-foreground text-background">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
                            </div>
                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                {description}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-foreground mt-1 shrink-0" />
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="link" className="p-0 h-auto text-lg font-semibold group">
                                <Link href={href} className="flex items-center">
                                    Learn more about {title} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square max-w-[280px] mx-auto rounded-3xl overflow-hidden bg-muted/40 flex items-center justify-center p-12 border shadow-2xl group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-muted/40" />
                            <Image
                                src={image}
                                alt={title}
                                width={400}
                                height={400}
                                className="object-contain relative z-10 transition-all duration-500 drop-shadow-xl group-hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}


