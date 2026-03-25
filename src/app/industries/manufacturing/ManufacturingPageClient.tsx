"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
} from "lucide-react";

function FeatureBox({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 p-8 rounded-3xl border bg-card hover:bg-muted/50 transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <span className="text-base leading-relaxed">{text}</span>
        </li>
    );
}

export default function ManufacturingPage() {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-8">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" /> All Industries
                </Link>
            </div>

            {/* Hero */}
            <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pb-32 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            INDUSTRY SOLUTION
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            MANUFACTURING<br />
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Connect your production floor, procurement, and quality teams in one integrated system—reducing waste, cutting lead times, and giving management complete operational visibility.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Get a Free Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/platforms">View Platforms</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 sm:py-20 md:py-24 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">End-to-end production control</h2>
                        <p className="text-lg text-muted-foreground">From raw material procurement to finished goods despatch—every step tracked, traced, and optimised.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureBox icon={ClipboardList} title="Production Planning" description="Create and manage work orders, production schedules, and machine assignments with real-time capacity visibility across your plant." />
                        <FeatureBox icon={Layers} title="BOM Management" description="Manage multi-level bills of materials, revision control, and costing accuracy to ensure every product is manufactured to specification." />
                        <FeatureBox icon={ShieldCheck} title="Quality Control" description="Define inspection criteria, automate quality checkpoints, and track non-conformances to maintain ISO-standard production processes." />
                        <FeatureBox icon={Package} title="Supply Chain & Procurement" description="Streamline supplier relationships, purchase requisitions, delivery tracking, and goods receipt with automated reorder workflows." />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 sm:py-20 md:py-24 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">How We Build It</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">We configure ERPNext's powerful manufacturing suite into a system tailored to your production processes, team structure, and compliance requirements.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:gap-8">
                        {[
                            {
                                icon: Factory,
                                title: "ERPNext Manufacturing",
                                desc: "A comprehensive, open-source manufacturing ERP covering work orders, production scheduling, BOM management, and costing—configured to your exact workflow.",
                                points: ["Work order & job card management", "Multi-level BOM with costing", "Machine & capacity planning", "Scrap & rework tracking"],
                            },
                            {
                                icon: ShieldCheck,
                                title: "Quality Management System",
                                desc: "Implement structured quality inspection plans, record non-conformances, and track corrective actions across your production line.",
                                points: ["Incoming quality inspection", "In-process quality checks", "Non-conformance management", "Supplier quality scorecards"],
                            },
                            {
                                icon: TrendingUp,
                                title: "OEE & Production Analytics",
                                desc: "Monitor Overall Equipment Effectiveness (OEE), production cycle times, downtime reasons, and shift performance with live dashboards.",
                                points: ["Real-time production dashboards", "Downtime & rejection analysis", "Shift-wise output reporting", "Cost of quality tracking"],
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-3xl border bg-card p-5 sm:p-8 flex flex-col gap-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                                    <ul className="space-y-3">
                                        {item.points.map((p) => <CheckItem key={p} text={p} />)}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Banner */}
            <section className="py-16 sm:py-20 md:py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-black mb-8 leading-tight">MAKE MORE.<br />WASTE LESS.</h2>
                            <p className="text-xl text-background/70 mb-10 max-w-md">Manufacturers on our platforms gain real-time visibility into every production step, leading to measurably higher output and lower operational costs.</p>
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full bg-background px-6 font-bold text-foreground hover:bg-white sm:h-14 sm:w-auto sm:px-10">
                                <Link href="/contact">Optimise Your Plant</Link>
                            </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[
                                { stat: "30%", label: "Increase in OEE within 6 months of platform deployment" },
                                { stat: "50%", label: "Reduction in production planning time with work order automation" },
                                { stat: "25%", label: "Lower raw material costs through smarter procurement automation" },
                                { stat: "100%", label: "Traceability—every batch, every component, every process logged" },
                            ].map((item, i) => (
                                <div key={i} className="border border-background/20 rounded-3xl p-8 flex flex-col justify-end">
                                    <div className="text-4xl font-bold mb-2">{item.stat}</div>
                                    <p className="text-sm text-background/60 leading-tight">{item.label}</p>
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


