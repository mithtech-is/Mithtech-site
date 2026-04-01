"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    Box,
    CheckCircle2,
    ArrowRight,
    Layers,
    Users,
    BarChart,
    Settings,
    Globe,
    ShieldCheck,
    Zap,
    ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function FeatureItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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

function ModuleCard({ title, features, icon: Icon }: { title: string; features: string[]; icon: any }) {
    return (
        <div className="flex flex-col gap-8 p-10 rounded-[2.5rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5">
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase">{title}</h3>
            </div>
            <ul className="space-y-4">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
                        </div>
                        <span className="text-base font-medium text-black/70 leading-loose">{f}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function FrappeSolution() {
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
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Enterprise Resource Planning</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Frappe & <br />
                            <span className="text-[#00aaff]">ERPNext.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            The world's most versatile, scalable, and customizable enterprise
                            framework. Consolidate your entire operation into a single,
                            cohesive platform built for the future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Architect Your ERP
                            </Link>
                            <Link href="/platforms" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95">
                                View Platforms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 lg:py-32 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureItem
                            icon={Layers}
                            title="Modular Core"
                            description="Start with what you need. Add CRM, HR, Manufacturing, or Finance modules as your business scales."
                        />
                        <FeatureItem
                            icon={Globe}
                            title="Global Scale"
                            description="Multi-currency, multi-company, and multi-lingual support built-in for international operations."
                        />
                        <FeatureItem
                            icon={ShieldCheck}
                            title="Self-Hosted"
                            description="Keep your data on your own servers. Full control over your security protocols and data privacy."
                        />
                        <FeatureItem
                            icon={Zap}
                            title="Rapid App Build"
                            description="Built on the Frappe framework, allowing for incredibly fast custom app development for unique needs."
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Modules */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Built for every department</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto">ERPNext covers every corner of your business with integrated modules that talk to each other in real-time.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <ModuleCard
                            title="Core Finance"
                            features={["Real-time Cash Flow", "Automated Invoicing", "Multi-currency Support", "Tax Automation"]}
                            icon={BarChart}
                        />
                        <ModuleCard
                            title="HR & Payroll"
                            features={["Attendance Tracking", "Expense Claims", "Employee Lifecycle", "Payroll Processing"]}
                            icon={Users}
                        />
                        <ModuleCard
                            title="CRM & Sales"
                            features={["Lead Management", "Sales Pipelines", "Email Campaigns", "Quotations & Orders"]}
                            icon={Box}
                        />
                        <ModuleCard
                            title="Supply Chain"
                            features={["Inventory Tracking", "Stock Management", "Purchase Automation", "Supplier Management"]}
                            icon={Settings}
                        />
                        <ModuleCard
                            title="Manufacturing"
                            features={["Bill of Materials", "Work Orders", "Production Planning", "Quality Control"]}
                            icon={Layers}
                        />
                        <ModuleCard
                            title="Asset Control"
                            features={["Asset Lifecycle", "Depreciation Logic", "Maintenance Schedules", "Movement Tracking"]}
                            icon={ShieldCheck}
                        />
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 lg:py-32 border-y border-black/[0.05] bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-extrabold mb-12 leading-tight tracking-tight">
                                Zero Licensing. <br /> <span className="text-[#00aaff]">Infinite Scale.</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 max-w-md italic tracking-tight">Don't change your business to fit the software. Change the software to fit your business perfectly.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00aaff] px-10 py-5 text-sm font-bold text-black transition-all hover:bg-[#00aaff]/80 hover:translate-y-[-2px] active:scale-95">
                                Calculate Your Savings
                            </Link>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-8">
                            {[
                                { stat: "70%", label: "Average reduction in TCO vs Oracle/SAP" },
                                { stat: "0", label: "Per-user licensing fees—forever" },
                                { stat: "100%", label: "Data sovereignty on your own servers" },
                                { stat: "10x", label: "Faster customization via Frappe Framework" },
                            ].map((item, i) => (
                                <div key={i} className="group border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-end bg-white/5 hover:bg-white transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                    <div className="text-5xl font-extrabold text-white mb-3 group-hover:text-black transition-colors">{item.stat}</div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-black/40 transition-colors leading-tight">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Consolidate your business today"
                description="Move away from fragmented spreadsheets and expensive systems. Let's architecture your ERPNext solution."
                buttonText="Start Free Consultation"
                buttonHref="/contact"
            />
        </div>
    );
}
