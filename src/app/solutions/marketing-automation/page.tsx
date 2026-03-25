"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    CheckCircle2,
    ArrowRight,
    Mail,
    MessageSquare,
    Zap,
    Target,
    Users,
    BarChart3,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MarketingAutomationSolution() {
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
                            OMNICHANNEL GROWTH
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            MARKETING <br />
                            <span className="text-muted-foreground">AUTOMATION</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Engage your audience at the perfect moment. Automated, data-driven marketing workflows that scale your reach without scaling your effort.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Automate Your Marketing</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-16 sm:py-20 md:py-24 border-b px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                        <PillarItem
                            icon={Mail}
                            title="Advanced Email"
                            description="Personalized, behavioral-triggered email campaigns that drive conversions and engagement."
                        />
                        <PillarItem
                            icon={MessageSquare}
                            title="WhatsApp & SMS"
                            description="Reach your customers on their favorite messaging platforms with automated conversational marketing."
                        />
                        <PillarItem
                            icon={Zap}
                            title="Visual Workflows"
                            description="Build complex automation logic with intuitive, drag-and-drop workflow builders. No coding required."
                        />
                        <PillarItem
                            icon={Target}
                            title="Lead Scoring"
                            description="Automatically identify and prioritize high-intent leads based on their interactions with your brand."
                        />
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold tracking-tight mb-6">Mautic Integration</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    The world's leading open-source marketing automation platform. Full control over your marketing stack with deep CRM integration.
                                </p>
                                <ul className="space-y-4">
                                    <FeatureListItem title="Campaign Management" />
                                    <FeatureListItem title="Contact Segmentation" />
                                    <FeatureListItem title="Web tracking & Cookies" />
                                    <FeatureListItem title="Dynamic Content" />
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h2 className="text-4xl font-bold tracking-tight mb-6">WhatsApp & Social</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Scale your social presence and instant messaging outreach. Connect with customers where they spend their time.
                                </p>
                                <ul className="space-y-4">
                                    <FeatureListItem title="Automated WA Messaging" />
                                    <FeatureListItem title="Social Media Scheduling" />
                                    <FeatureListItem title="Chatbot Automation" />
                                    <FeatureListItem title="Engagement Analytics" />
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-16 sm:py-20 md:py-24 border-y bg-muted/30 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight mb-12">Performance that speaks for itself</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 rounded-3xl bg-background border">
                            <div className="text-4xl font-black mb-2">3x</div>
                            <p className="text-muted-foreground">Lead Volume</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-background border">
                            <div className="text-4xl font-black mb-2">45%</div>
                            <p className="text-muted-foreground">Higher CTR</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-background border">
                            <div className="text-4xl font-black mb-2">-60%</div>
                            <p className="text-muted-foreground">Manual Effort</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to architectural your marketing growth?"
                description="Our experts will design an automation strategy tailored to your customer journey and business goals."
                buttonText="Consult Our Team"
                buttonHref="/contact"
            />
        </div>
    );
}

function PillarItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-10 rounded-[2.5rem] border bg-card hover:border-foreground/20 transition-all duration-500"
        >
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
        </motion.div>
    );
}

function FeatureListItem({ title }: { title: string }) {
    return (
        <li className="flex items-center gap-4 text-lg">
            <CheckCircle2 className="w-6 h-6 text-foreground shrink-0" />
            <span>{title}</span>
        </li>
    );
}


