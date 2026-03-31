"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Factory,
    ClipboardList,
    Package,
    ShieldCheck,
    BarChart3,
    Layers,
    CheckCircle2,
    ArrowLeft,
    Cpu,
    TrendingUp,
    ArrowRight
} from "lucide-react";

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

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{text}</span>
        </li>
    );
}

export default function ManufacturingPage() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/industries" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> All Industries
                </Link>
            </div>

            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Sector: Manufacturing</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase">
                            Make more. <br /> 
                            <span className="text-[#00aaff]">Waste less.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Connect your production floor, procurement, and quality teams in one 
                            integrated system—reducing waste, cutting lead times, 
                            and giving management complete operational visibility.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Optimise Your Plant
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
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">End-to-end production control</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto">From raw material procurement to finished goods despatch—every step tracked and optimised.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureBox icon={ClipboardList} title="Production Planning" description="Create and manage work orders, schedules, and capacity with real-time plant visibility." />
                        <FeatureBox icon={Layers} title="BOM Management" description="Manage multi-level bills of materials and costing accuracy across every manufacturing spec." />
                        <FeatureBox icon={ShieldCheck} title="Quality Control" description="Define inspection criteria and automate quality checkpoints to maintain ISO standards." />
                        <FeatureBox icon={Package} title="Supply Chain Hub" description="Streamline supplier relationships and purchase requisitions with automated reorder workflows." />
                    </div>
                </div>
            </section>

            {/* Use Cases - How We Build It */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl font-extrabold tracking-tight text-black mb-8 uppercase">The Manufacturing OS</h2>
                        <p className="text-xl text-black/40 max-w-2xl">ERPNext's powerful manufacturing suite tailored to your exact production processes.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {[
                            {
                                icon: Factory,
                                title: "Smart Manufacturing",
                                desc: "Comprehensive, open-source ERP covering work orders, production scheduling, BOM management, and costing.",
                                points: ["Work order management", "Multi-level BOM tracking", "Machine capacity planning", "Scrap & rework analysis"],
                            },
                            {
                                icon: ShieldCheck,
                                title: "Quality Management",
                                desc: "Implement structured inspection plans and record non-conformances across your entire production line.",
                                points: ["Incoming inspection flows", "In-process quality checks", "Non-conformance tracking", "Supplier quality scorecards"],
                            },
                            {
                                icon: TrendingUp,
                                title: "OEE & Analytics",
                                desc: "Monitor Overall Equipment Effectiveness (OEE), cycle times, and downtime reasons with live dashboards.",
                                points: ["Live production dashboards", "Downtime & rejection metrics", "Shift-wise output reports", "Cost of quality tracking"],
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-[2.5rem] border border-black/[0.05] bg-white p-10 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-black mb-6 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-black/50 text-lg leading-loose mb-10">{item.desc}</p>
                                    <ul className="space-y-6">
                                        {item.points.map((p) => <CheckItem key={p} text={p} />)}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 lg:py-32 border-y border-black/[0.05] bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-extrabold mb-12 leading-tight tracking-tight">
                                Make More. <br /> <span className="text-[#00aaff]">Waste Less.</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 max-w-md italic">Manufacturers on our platforms gain real-time visibility, leading to higher output and lower costs.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00aaff] px-10 py-5 text-sm font-bold text-black transition-all hover:bg-[#00aaff]/80 hover:translate-y-[-2px] active:scale-95">
                                Optimise Your Plant
                            </Link>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-8">
                            {[
                                { stat: "30%", label: "Increase in OEE within 6 months of deployment" },
                                { stat: "50%", label: "Reduction in manual planning time via automation" },
                                { stat: "25%", label: "Lower raw material costs through procurement sync" },
                                { stat: "100%", label: "Batch traceability—every component logged" },
                            ].map((item, i) => (
                                <div key={i} className="border border-white/10 rounded-[2rem] p-10 flex flex-col justify-end bg-white/5 group hover:bg-white transition-all duration-500">
                                    <div className="text-5xl font-extrabold text-white mb-3 group-hover:text-black transition-colors">{item.stat}</div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-black/40 transition-colors leading-tight">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to digitise your production floor?"
                description="Book a free consultation with our manufacturing ERP specialists and get a custom implementation roadmap for your plant."
                buttonText="Book a Free Consultation"
                buttonHref="/contact"
            />
        </div>
    );
}
