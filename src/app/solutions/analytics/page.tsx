"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    BarChart3,
    CheckCircle2,
    ArrowRight,
    Database,
    PieChart,
    LineChart,
    Activity,
    Search,
    Layers,
    TrendingUp,
    ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function FeatureBox({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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

function PlatformFeature({ title }: { title: string }) {
    return (
        <li className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{title}</span>
        </li>
    );
}

export default function AnalyticsSolution() {
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
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Data Intelligence & BI</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Analytics & <br /> 
                            <span className="text-[#00aaff]">Business BI.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Unlock the story your data is telling. Enterprise-grade business 
                            intelligence, real-time visualization, and bespoke reporting 
                            dashboards designed for certainty.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Visualize Your Data
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Analytics Features */}
            <section className="py-20 lg:py-32 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureBox
                            icon={Database}
                            title="Data Sync"
                            description="Connect to and consolidate data from multiple sources—ERP, CRM, and Web—into a unified warehouse."
                        />
                        <FeatureBox
                            icon={PieChart}
                            title="Pro Dashboards"
                            description="Build high-impact visualizations that allow your team to dive deep into departmental performance."
                        />
                        <FeatureBox
                            icon={Activity}
                            title="Real-time Reporting"
                            description="No more waiting for end-of-month reports. Monitor your KPIs live and respond to trends as they happen."
                        />
                        <FeatureBox
                            icon={TrendingUp}
                            title="Predictive Insights"
                            description="Leverage historical data to build forecasting models and predictive analytics for smarter growth."
                        />
                    </div>
                </div>
            </section>

            {/* Platform Showcase */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Built on powerful foundations</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto">We implement world-class open BI platforms like Metabase and Superset for maximum flexibility.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] border border-black/[0.05] bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg mb-8">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-4xl font-extrabold text-black mb-8 uppercase tracking-tight">Metabase Architecture</h3>
                            <p className="text-lg text-black/50 mb-8 leading-relaxed">
                                Simple, powerful, and accessible. Metabase allows anyone on your team to ask questions without knowing SQL.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 mb-10">
                                <PlatformFeature title="Self-service BI" />
                                <PlatformFeature title="Auto Reporting" />
                                <PlatformFeature title="Visual Builder" />
                                <PlatformFeature title="Alerts & Pulse" />
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] border border-black/[0.05] bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg mb-8">
                                <LineChart className="w-7 h-7" />
                            </div>
                            <h3 className="text-4xl font-extrabold text-black mb-8 uppercase tracking-tight">Apache Superset</h3>
                            <p className="text-lg text-black/50 mb-8 leading-relaxed">
                                Enterprise-grade data exploration platform capable of handling petabyte-scale data with advanced SQL Lab IDE.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 mb-10">
                                <PlatformFeature title="Cloud-Native" />
                                <PlatformFeature title="SQL Lab IDE" />
                                <PlatformFeature title="Rich Library" />
                                <PlatformFeature title="Role Permissions" />
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 lg:py-32 border-y border-black/[0.05] bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-extrabold mb-12 leading-tight tracking-tight">
                                Decisions <br />Made with <br /><span className="text-[#00aaff]">Certainty.</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 max-w-md italic">Our analytics architecture doesn't just show data—it provides clarity for your most critical business moves.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00aaff] px-10 py-5 text-sm font-bold text-black transition-all hover:bg-[#00aaff]/80 hover:translate-y-[-2px] active:scale-95">
                                Request a Demo
                            </Link>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-8">
                            {[
                                { stat: "95%", label: "Better accuracy in financial forecasting" },
                                { stat: "40%", label: "Reduction in manual reporting tasks" },
                                { stat: "10x", label: "Faster time-to-insight for managers" },
                                { stat: "100%", label: "Ownership of your business intelligence" },
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
                title="Your data has the answers."
                description="Stop guessing and start growing. Our architects will help you build a data infrastructure for the future."
                buttonText="Talk to a Data Expert"
                buttonHref="/contact"
            />
        </div>
    );
}
