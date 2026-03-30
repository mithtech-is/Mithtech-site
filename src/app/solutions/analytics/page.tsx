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
    TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AnalyticsSolution() {
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
                            DATA INTELLIGENCE
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            ANALYTICS & <br />
                            <span className="text-muted-foreground">BUSINESS BI</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Unlock the story your data is telling. Enterprise-grade business intelligence, real-time visualization, and bespoke reporting dashboards.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full border border-black px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Visualize Your Data</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Analytics Features */}
            <section className="py-16 sm:py-20 md:py-24 border-b px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                        <FeatureBox
                            icon={Database}
                            title="Data Integration"
                            description="Connect to and consolidate data from multiple sources—ERP, CRM, Web, and Cloud Apps—into a single data warehouse."
                        />
                        <FeatureBox
                            icon={PieChart}
                            title="Interactive Dashboards"
                            description="Build high-impact, interactive visualizations that allow your team to dive deep into departmental performance."
                        />
                        <FeatureBox
                            icon={Activity}
                            title="Real-time Reporting"
                            description="No more waiting for end-of-month reports. Monitor your KPIs in real-time and respond to trends as they happen."
                        />
                        <FeatureBox
                            icon={TrendingUp}
                            title="Predictive Insights"
                            description="Leverage historical data to build forecasting models and predictive analytics for smarter growth strategies."
                        />
                    </div>
                </div>
            </section>

            {/* Platform Showcase */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold tracking-tight mb-6">Built on powerful foundations</h2>
                        <p className="text-xl text-muted-foreground">We implement world-class open BI platforms like Metabase and Superset for maximum flexibility and zero licensing costs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[3rem] bg-muted/30 border border-foreground/5"
                        >
                            <h3 className="text-3xl font-bold mb-6">Metabase Architecture</h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                Simple, powerful, and accessible. Metabase allows anyone on your team to ask questions and learn from data without knowing SQL.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <PlatformFeature title="Self-service Analytics" />
                                <PlatformFeature title="Automated Reporting" />
                                <PlatformFeature title="Visual Query Builder" />
                                <PlatformFeature title="Pulse & Alerts" />
                            </ul>
                            <div className="aspect-square max-w-[280px] mx-auto bg-muted border rounded-2xl flex items-center justify-center p-12">
                                <BarChart3 className="w-16 h-16 text-foreground/10" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[3rem] bg-muted/30 border border-foreground/5"
                        >
                            <h3 className="text-3xl font-bold mb-6">Apache Superset</h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                Enterprise-grade data exploration and visualization platform capable of handling petabyte-scale data with ease.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <PlatformFeature title="Cloud-Native Architecture" />
                                <PlatformFeature title="SQL Lab IDE" />
                                <PlatformFeature title="Rich Visualization Library" />
                                <PlatformFeature title="Enterprise Permissions" />
                            </ul>
                            <div className="aspect-square max-w-[280px] mx-auto bg-muted border rounded-2xl flex items-center justify-center p-12">
                                <LineChart className="w-16 h-16 text-foreground/10" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Section */}
            <section className="py-16 sm:py-20 md:py-24 border-y bg-foreground text-background px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 px-0 mx-0 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-black mb-8 leading-tight">DECISIONS <br />MADE WITH <br />CERTAINTY.</h2>
                            <p className="text-xl text-background/70 mb-10 max-w-md">Our analytics architecture doesn't just show data—it provides clarity for your most critical business moves.</p>
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full border border-foreground bg-background px-6 font-bold text-foreground hover:bg-white sm:h-14 sm:w-auto sm:px-10">
                                <Link href="/contact">Request a Demo</Link>
                            </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square border border-background/20 rounded-3xl p-8 flex flex-col justify-end">
                                    <div className="text-4xl font-bold mb-2">95%</div>
                                    <p className="text-sm text-background/60 leading-tight">Better accuracy in financial forecasting among clients.</p>
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

function FeatureBox({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
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

function PlatformFeature({ title }: { title: string }) {
    return (
        <li className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
            <span className="text-base font-semibold">{title}</span>
        </li>
    );
}


