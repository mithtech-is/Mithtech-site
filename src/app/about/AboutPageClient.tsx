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
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Our Identity</span>
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl lg:text-7xl mb-10 leading-[1.1] uppercase">
                            About <br />
                            <span className="text-[#00aaff]">Mithtech</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium">
                            We are a software consultancy providing enterprise-grade ERP,
                            eCommerce, and SaaS platforms. We architect foundations
                            that scale with your ambition—not your costs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 uppercase tracking-widest leading-none">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 lg:py-40 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-black mb-16 tracking-tight uppercase">Our Mission</h2>
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <p className="text-3xl font-extrabold text-black/20 leading-tight uppercase tracking-tighter">
                                "Democratizing business technology through scalable, open-ecosystems."
                            </p>
                            <div className="prose prose-xl leading-loose font-sans">
                                <p className="text-black/60 mb-6 font-medium">
                                    Our mission is to democratize business technology by leveraging the power of scalable platforms. As a trusted <strong>ERPNext implementation partner in Bangalore</strong> and a leading <strong>Frappe development company in India</strong>, we architect systems that rival proprietary software—without the crippling per-user licensing fees or vendor lock-in.
                                </p>
                                <p className="text-black/60 mb-6">
                                    We bring years of hands-on experience deploying complex business systems across diverse industries including Manufacturing, Healthcare, and Retail. Our team consists of seasoned technical architects who understand that software should adapt to your workflows, not the other way around. By leveraging fully open-source ecosystems like <strong className="text-black font-semibold">ERPNext</strong>, <strong className="text-black font-semibold">Medusa JS</strong>, and <strong className="text-black font-semibold">n8n</strong>, we guarantee comprehensive enterprise ERP solutions tailored for the Indian and global markets.
                                </p>
                                <ul className="text-black/60 text-lg space-y-3 mt-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>Proven Expertise:</strong> Over dozens of successful enterprise deployments.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>Transparent Implementation:</strong> No hidden licensing costs, full data ownership.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#00aaff] shrink-0 mt-1" />
                                        <span><strong>Local Support, Global Standards:</strong> Based in Bangalore, providing world-class managed services.</span>
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
                        <h2 className="text-4xl font-extrabold tracking-tight text-black mb-8 uppercase">Why Mithtech?</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto font-sans">We architect for ownership, customization, and infinite scale.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Shield,
                                title: "Full Ownership",
                                desc: "You own your data and infrastructure. Your business isn't held hostage by unpredictable SaaS pricing changes."
                            },
                            {
                                icon: Layout,
                                title: "Infinite Customization",
                                desc: "We mold the software to fit your unique business processes, rather than changing your business to fit the software."
                            },
                            {
                                icon: Zap,
                                title: "Zero Licensing",
                                desc: "Scale from 10 employees to 10,000 without base software costs multiplying via per-user licensing fees."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-12 rounded-[3.5rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 group flex flex-col gap-10">
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
                    <div className="bg-black text-white rounded-[3rem] p-12 lg:p-24 border border-white/10 shadow-2xl overflow-hidden text-center">
                        <div className="max-w-4xl mx-auto mb-20">
                            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-10 tracking-tighter uppercase">Platforms We <span className="text-[#00aaff]">Champion.</span></h2>
                            <p className="text-xl text-white/40 leading-loose italic max-w-2xl mx-auto font-sans">We specialize in technologies with proven reliability and rapid development cycles.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                            {["Frappe", "ERPNext", "MedusaJS", "n8n", "Mautic", "Listmonk", "Schedulr", "Directorist", "Next.js", "Odoo", "Metabase", "Superset"].map(platform => (
                                <motion.span
                                    key={platform}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-10 py-5 rounded-full border border-white/10 bg-white/5 font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default"
                                >
                                    {platform}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to transform your operations?"
                description="Let's build a foundation that scales with you. Talk to our architects today."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
        </div>
    );
}
