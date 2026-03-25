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
    Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FrappeSolution() {
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
                            ENTERPRISE RESOURCE PLANNING
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            FRAPPE & <br />
                            <span className="text-muted-foreground">ERPNEXT</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            The world's most versatile, scalable, and customizable enterprise system. Consolidate your entire operation into a single, cohesive platform.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Get Free Consultation</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 sm:py-20 md:py-24 border-b px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                        <FeatureItem
                            icon={Layers}
                            title="Modular Architecture"
                            description="Start with what you need. Add CRM, HR, Manufacturing, or Finance modules as your business grows."
                        />
                        <FeatureItem
                            icon={Globe}
                            title="Global Scalability"
                            description="Multi-currency, multi-company, and multi-lingual support built-in for international operations."
                        />
                        <FeatureItem
                            icon={ShieldCheck}
                            title="Self-Hosted Security"
                            description="Keep your data on your servers. Full control over your security protocols and data privacy."
                        />
                        <FeatureItem
                            icon={Zap}
                            title="Rapid Development"
                            description="Built on the Frappe framework, allowing for incredibly fast custom app development for your unique needs."
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Modules */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold tracking-tight mb-6">Built for every department</h2>
                        <p className="text-xl text-muted-foreground">ERPNext covers every corner of your business with integrated modules that talk to each other in real-time.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <ModuleCard
                            title="Accounting & Finance"
                            features={["Real-time Cash Flow", "Automated Invoicing", "Multi-currency Support", "Tax Management"]}
                            icon={BarChart}
                        />
                        <ModuleCard
                            title="HR & Payroll"
                            features={["Attendance Tracking", "Expense Claims", "Employee Lifecycle", "Payroll Processing"]}
                            icon={Users}
                        />
                        <ModuleCard
                            title="CRM & Sales"
                            features={["Lead Management", "Sales Pipeine", "Email Campaigns", "Quotations & Orders"]}
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
                            title="Asset Management"
                            features={["Asset Lifecycle", "Depreciation", "Maintenance Schedules", "Movement Tracking"]}
                            icon={ShieldCheck}
                        />
                    </div>
                </div>
            </section>

            {/* Comparison/Value Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-muted/30 border-y px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold tracking-tight mb-8">Why ERPNext over proprietary systems?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">No Per-User Licensing</h4>
                                        <p className="text-muted-foreground">Growth shouldn't be penalized. Add 1,000 users without increasing your software costs by a single cent.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">100% Customizability</h4>
                                        <p className="text-muted-foreground">Don't change your business to fit the software. Change the software to fit your business workflows perfectly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Data Sovereignty</h4>
                                        <p className="text-muted-foreground">Your data is your most valuable asset. Host it on your own servers or cloud with full encryption and control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex justify-center">
                            <div className="relative w-full max-w-sm aspect-square bg-foreground rounded-3xl p-12 flex flex-col justify-between overflow-hidden">
                                <Box className="w-24 h-24 text-background/10 absolute -top-4 -right-4" />
                                <div className="relative z-10">
                                    <h3 className="text-6xl font-black text-background mb-4 text-center">70%</h3>
                                    <p className="text-xl text-background/80 text-center font-medium">Average reduction in TCO compared to Oracle or SAP.</p>
                                </div>
                                <Button asChild className="mt-8 h-12 min-h-[48px] w-full rounded-full bg-background text-foreground hover:bg-background/90">
                                    <Link href="/contact">Calculate Your Savings</Link>
                                </Button>
                            </div>
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

function FeatureItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
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

function ModuleCard({ title, features, icon: Icon }: { title: string, features: string[], icon: any }) {
    return (
        <div className="flex flex-col gap-6 p-8 rounded-3xl border hover:border-foreground/20 transition-all group">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <ul className="space-y-3">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground/40 shrink-0" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


