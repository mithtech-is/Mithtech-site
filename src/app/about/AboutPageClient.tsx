"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Shield, Zap, Layout, ArrowLeft } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-40 border-b border-black/[0.05]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Trusted by Enterprises Across India</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] uppercase">
                            Your Success <br />
                            <span className="text-[#00aaff]">Starts Here</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium">
                            Mithtech is India's best ERPNext implementation partner and certified Frappe developer, empowering
                            businesses with open-source cloud ERP, eCommerce, and WhatsApp
                            automation — delivering enterprise power with zero licensing fees. From ERPNext customization to Tally migration, we do it all.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 uppercase tracking-widest leading-none">
                                Start Your Transformation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 lg:py-40 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-black mb-16 tracking-tight uppercase">Our Mission: Customer Success at Scale</h2>
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <p className="text-3xl font-extrabold text-black/20 leading-tight uppercase tracking-tighter">
                                "Every business deserves enterprise-grade technology — without enterprise-grade costs."
                            </p>
                            <div className="prose prose-xl leading-loose font-sans">
                                <p className="text-black/60 mb-6 font-medium">
                                    At Mithtech, we believe the right technology should be an accelerator, not a bottleneck. As a <strong>certified ERPNext partner in Bangalore</strong> and a leading <strong>Frappe development company in India</strong>, we equip organizations with battle-tested open source ERP products that deliver the capabilities of SAP and Odoo — with full data ownership, zero licensing fees, and the freedom to innovate on your terms. Our <strong>ERPNext implementation cost</strong> is 40-60% lower than legacy alternatives.
                                </p>
                                <p className="text-black/60 mb-6">
                                    From startups evaluating the <strong className="text-black font-semibold">best ERP for small business in India</strong> to established enterprises across Manufacturing, Healthcare, Retail, and beyond — our certified architects have driven measurable outcomes for every customer we serve. We do not simply deploy software — we engineer digital foundations built on <strong className="text-black font-semibold">ERPNext</strong>, <strong className="text-black font-semibold">Medusa JS</strong>, and <strong className="text-black font-semibold">n8n</strong> that streamline operations, unlock insights, and scale without limits. Need to <strong className="text-black font-semibold">migrate from Tally to ERPNext</strong>? We handle it with zero data loss. That is the Mithtech difference — <strong>GST-compliant cloud ERP solutions</strong> designed for the Indian and global markets.
                                </p>
                                <ul className="text-black/60 text-lg space-y-3 mt-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>70+ Products, One Partner:</strong> A comprehensive portfolio spanning ERP, eCommerce, automation, analytics, and more — all from a single trusted team.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>Zero Licensing, Full Ownership:</strong> No per-user fees, no vendor lock-in. You own your data, your code, and your future.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>Bangalore-Based, Globally Proven:</strong> Enterprise-grade Frappe development and managed services from India's open-source capital.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Mithtech Grid */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-4xl font-extrabold tracking-tight text-black mb-8 uppercase">Why Trailblazers Choose Mithtech</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto font-sans">The outcomes that set our customers apart — ownership, agility, and limitless growth.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Shield,
                                title: "Complete Data Sovereignty",
                                desc: "Your data belongs to you — period. With full infrastructure ownership, you are never one pricing change away from disruption. That is the confidence your business deserves."
                            },
                            {
                                icon: Layout,
                                title: "Built Around Your Workflows",
                                desc: "We configure every module to mirror how your teams actually work. No forcing square pegs into round holes — your ERP adapts to you, driving adoption and ROI from day one."
                            },
                            {
                                icon: Zap,
                                title: "Scale Without Per-User Fees",
                                desc: "Go from 10 users to 10,000 with zero incremental licensing costs. Open-source enterprise ERP means your growth is never taxed by a vendor's pricing model."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-6 sm:p-12 rounded-2xl sm:rounded-[3.5rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 group flex flex-col gap-6 sm:gap-10">
                                <div className="w-16 h-16 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-black tracking-tight mb-4 uppercase">{item.title}</h3>
                                    <p className="text-lg font-medium text-black/50 leading-loose italic font-sans">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms We Champion */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-black text-white rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-24 border border-white/10 shadow-2xl overflow-hidden text-center">
                        <div className="max-w-4xl mx-auto mb-10 sm:mb-20">
                            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-10 tracking-tighter uppercase">The Technology <span className="text-[#00aaff]">Behind Your Edge.</span></h2>
                            <p className="text-xl text-white/40 leading-loose italic max-w-2xl mx-auto font-sans">We have certified deep expertise in the platforms driving the next generation of enterprise innovation.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                            {["Frappe", "ERPNext", "MedusaJS", "n8n", "Mautic", "Listmonk", "Schedulr", "Directorist", "Next.js", "Odoo", "Metabase", "Superset"].map(platform => (
                                <motion.span
                                    key={platform}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-5 py-3 sm:px-10 sm:py-5 rounded-full border border-white/10 bg-white/5 font-extrabold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default"
                                >
                                    {platform}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to become a trailblazer?"
                description="Join the businesses across India and beyond that trust Mithtech to power their growth. Let's map your path to enterprise success — together."
                buttonText="Talk to Our Architects"
                buttonHref="/contact"
            />
        </div>
    );
}
