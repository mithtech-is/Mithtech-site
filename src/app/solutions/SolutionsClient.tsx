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

export default function SolutionsClient() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32 border-b border-black/[0.05]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Enterprise Solutions India</span>
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-7xl lg:text-8xl mb-10 leading-[0.9] uppercase">
                            Accelerate Growth with <br />
                            <span className="text-[#00aaff]">Scalable Platforms.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium">
                            Mithtech delivers enterprise solutions built on ERPNext, Frappe, and leading open-source platforms — the best cloud ERP for Indian SMEs.
                            Zero licensing fees. Complete data ownership. From ERPNext CRM and HRMS setup to WhatsApp automation and n8n workflow integration — business automation that drives measurable ROI from day one.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 uppercase tracking-widest">
                                Book Consultation
                            </Link>
                            <Link href="/platforms" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-10 py-5 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95 uppercase tracking-widest">
                                Explore Platforms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Advantages Section */}
            <section className="py-24 lg:py-40 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white border border-black/[0.05] shadow-2xl flex items-center justify-center text-[#00aaff]">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">Full Data Ownership</h3>
                                <p className="text-lg text-black/50 leading-loose italic">Your data is your most valuable asset. Our enterprise solutions give you 100% ownership of every record, hosted on infrastructure you control -- no third-party gatekeepers, ever.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white border border-black/[0.05] shadow-2xl flex items-center justify-center text-[#00aaff]">
                                <Coins className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">Zero Licensing Fees</h3>
                                <p className="text-lg text-black/50 leading-loose italic">Stop paying per-seat premiums that scale against you. Our open-source platforms let you onboard unlimited users, so your business automation investment grows with your team -- not your software bill.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white border border-black/[0.05] shadow-2xl flex items-center justify-center text-[#00aaff]">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">Infinite Flexibility</h3>
                                <p className="text-lg text-black/50 leading-loose italic">Every enterprise operates differently. With Frappe and ERPNext at the core, we tailor every module, workflow, and integration to fit your exact business requirements -- across any industry vertical.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution Details Section */}
            <div className="bg-white">
                {/* Solution: ERP */}
                <SolutionDetailSection
                    title="Frappe & ERPNext"
                    subtitle="CORE ENGINE"
                    description="Unify finance, HR, supply chain, and CRM into one powerful cloud ERP platform. ERPNext on Frappe gives your enterprise a single source of truth with native GST compliance and e-invoicing -- the best open source ERP for manufacturing companies in India."
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
                    description="Drive revenue across every channel with Medusa JS-powered storefronts. From B2B portals to D2C experiences, deliver commerce that converts -- at any scale."
                    icon={ShoppingCart}
                    features={[
                        "Multi-channel B2B/B2C Selling",
                        "Unified Point of Sale (POS)",
                        "Real-time Inventory Sync",
                        "Appointment & Service Booking",
                        "Global Payment Gateway Integration"
                    ]}
                    href="/solutions/commerce"
                    image="/assets/medusajs-logo.png"
                    reversed={true}
                />

                {/* Solution: Marketing */}
                <SolutionDetailSection
                    title="Marketing Automation"
                    subtitle="INTELLIGENT OUTREACH"
                    description="Turn prospects into loyal customers with Mautic-powered campaigns and n8n workflow automation. Reach the right audience, at the right time, on every channel."
                    icon={Megaphone}
                    features={[
                        "Omnichannel Campaign Management",
                        "Advanced Email & WhatsApp Automation",
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
                    description="Make faster, smarter decisions with real-time dashboards and predictive analytics. Transform raw data into the insights that fuel your next phase of growth."
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
                    description="Empower your workforce and customers with scalable training platforms. Accelerate onboarding, certify expertise, and build a culture of continuous development."
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
            </div>

            <CTASection
                title="Ready to Transform Your Enterprise?"
                description="Connect with India's best ERPNext implementation partner for a strategic consultation. Our certified Frappe developers in Bangalore will design a cloud ERP roadmap tailored to your growth objectives — with ERPNext implementation cost 40-60% lower than SAP or Odoo."
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
        <section className={`py-24 lg:py-40 border-b border-black/[0.05] ${reversed ? 'bg-black/[0.01]' : 'bg-white'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col-reverse ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] font-bold tracking-[0.3em] text-[#00aaff] uppercase mb-8 block">
                                {subtitle}
                            </span>
                            <div className="flex items-center gap-6 mb-10">
                                <div className="h-16 w-16 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-2xl">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl font-extrabold text-black tracking-tight uppercase leading-tight">{title}</h2>
                            </div>
                            <p className="text-xl text-black/50 mb-12 leading-loose max-w-xl italic font-sans">
                                {description}
                            </p>
                            <ul className="space-y-6 mb-14">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-5">
                                        <CheckCircle2 className="w-5 h-5 text-[#00aaff] shrink-0" />
                                        <span className="text-lg font-extrabold text-black uppercase tracking-tight leading-relaxed group-hover:text-[#00aaff] transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="outline" className="h-14 px-10 rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs">
                                <Link href={href}>
                                    Experience {title}
                                    <ArrowRight className="ml-2 w-4 h-4" />
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
                            className="relative group lg:ml-auto max-w-[500px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-black/[0.05] bg-white p-12 shadow-2xl transition-all duration-700 group-hover:shadow-[#00aaff]/20 flex items-center justify-center">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-contain filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
