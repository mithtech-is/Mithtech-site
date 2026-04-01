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
    Globe,
    ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function PillarItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
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

function FeatureListItem({ title }: { title: string }) {
    return (
        <li className="flex items-center gap-4 text-lg">
            <div className="h-6 w-6 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{title}</span>
        </li>
    );
}

export default function MarketingAutomationSolution() {
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
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Omnichannel Growth</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Marketing <br />
                            <span className="text-[#00aaff]">Automation.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Engage your audience at the perfect moment. Automated,
                            data-driven marketing workflows that scale your reach
                            without scaling your manual effort.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Automate Your Marketing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 lg:py-32 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <PillarItem
                            icon={Mail}
                            title="Strategic Email"
                            description="Personalized, behavioral-triggered email campaigns that drive real conversions."
                        />
                        <PillarItem
                            icon={MessageSquare}
                            title="Direct Sync"
                            description="Reach customers on WhatsApp & SMS with automated conversational marketing flows."
                        />
                        <PillarItem
                            icon={Zap}
                            title="Visual Logic"
                            description="Build complex automation logic with intuitive, drag-and-drop workflow builders."
                        />
                        <PillarItem
                            icon={Target}
                            title="Lead Scoring"
                            description="Identify and prioritize high-intent leads based on real interactions with your brand."
                        />
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[2.5rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg mb-8 group-hover:scale-110 transition-transform">
                                    <Target className="w-7 h-7" />
                                </div>
                                <h2 className="text-5xl font-extrabold text-black mb-8 tracking-tight uppercase">Mautic Integration</h2>
                                <p className="text-xl text-black/50 mb-10 leading-loose italic max-w-md">
                                    The world's leading open-source platform. Full control over your stack with deep CRM sync.
                                </p>
                                <ul className="space-y-4">
                                    <FeatureListItem title="Campaign Lifecycle Management" />
                                    <FeatureListItem title="Granular Contact Segmentation" />
                                    <FeatureListItem title="Advanced Web Tracking & Cookies" />
                                    <FeatureListItem title="Dynamic Content Customization" />
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group p-10 rounded-[2.5rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg mb-8 group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <h2 className="text-5xl font-extrabold text-black mb-8 tracking-tight uppercase">WhatsApp & Social</h2>
                                <p className="text-xl text-black/50 mb-10 leading-loose italic max-w-md">
                                    Scale your presence and instant outreach. Connect with customers where they spend their time.
                                </p>
                                <ul className="space-y-4">
                                    <FeatureListItem title="Automated WA Messaging Flows" />
                                    <FeatureListItem title="Unified Media Scheduling" />
                                    <FeatureListItem title="No-Code Chatbot Automation" />
                                    <FeatureListItem title="Deep Engagement Analytics" />
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-black text-white rounded-[3rem] p-12 lg:p-24 border border-white/10 shadow-2xl overflow-hidden">
                        <div className="text-center">
                            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-20 tracking-tighter uppercase">Performance Metrics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
                                <div className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                    <div className="text-7xl font-extrabold text-[#00aaff] mb-4 group-hover:text-white transition-colors tracking-tighter">3x</div>
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-white/40 transition-colors leading-tight">Lead Volume Growth</p>
                                </div>
                                <div className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                    <div className="text-7xl font-extrabold text-black mb-4 group-hover:text-white transition-colors tracking-tighter">45%</div>
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-white/40 transition-colors leading-tight">Higher CTR Avg</p>
                                </div>
                                <div className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                    <div className="text-7xl font-extrabold text-[#00aaff] mb-4 group-hover:text-white transition-colors tracking-tighter">-60%</div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 group-hover:text-white/40 transition-colors leading-tight">Manual Effort Saved</p>
                                </div>
                            </div>
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
