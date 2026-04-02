"use client";

import React, { useState } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Shield, Zap, Layout, Users, BarChart3, Globe } from "lucide-react";

function ResellerForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        website: "",
        about: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Reseller Application from Mith Tech website*

*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Country:* ${formData.country}
*Website:* ${formData.website}
*About:* ${formData.about}`;

        const encodedMessage = encodeURIComponent(message);
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918277540332";

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Full Name</label>
                    <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Company</label>
                    <Input
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Email</label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Phone</label>
                    <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Country</label>
                    <Input
                        placeholder="India"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Website</label>
                    <Input
                        placeholder="https://..."
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        required
                        className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">
                    Tell us about your business
                </label>
                <Textarea
                    placeholder="We are an IT consultancy looking to offer ERP solutions..."
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    required
                    className="min-h-[140px] w-full rounded-[1.5rem] border-black/[0.05] bg-black/[0.02] px-6 py-4 focus:border-[#00aaff] transition-all"
                />
            </div>

            <Button
                type="submit"
                className="group relative h-16 w-full rounded-full bg-[#00aaff] text-base font-bold text-black shadow-2xl shadow-[#00aaff]/20 transition-all hover:bg-black hover:text-[#00aaff] hover:translate-y-[-4px] active:scale-95"
            >
                Apply via WhatsApp
            </Button>

            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-black/30 mt-4 italic">
                You will be redirected to WhatsApp to submit.
            </p>
        </form>
    );
}

export default function Partners() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* HERO (Centered) */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Global Network</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Partner With <br />
                            <span className="text-[#00aaff]">Mithtech.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Join our network of resellers and system integrators. Deliver
                            world-class enterprise solutions with our technical support
                            and white-label options.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#apply" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-20 lg:py-32 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-black mb-12 tracking-tight uppercase">Why Partner With Us?</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Revenue Growth", desc: "Earn recurring commissions on SaaS products and high margins on enterprise services." },
                                    { step: "02", title: "White Label Options", desc: "We handle the backend technical complexity while you own the direct client relationship." },
                                    { step: "03", title: "Architecture Support", desc: "Get priority support and architectural training for your deployment and sales teams." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group">
                                        <div className="text-4xl font-black text-[#00aaff]/20 group-hover:text-[#00aaff] transition-colors duration-500 leading-none">{item.step}</div>
                                        <div>
                                            <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">{item.title}</h3>
                                            <p className="text-lg font-medium text-black/50 leading-loose italic">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="apply" className="relative group lg:ml-auto w-full max-w-2xl">
                            <div className="absolute -inset-4 bg-[#00aaff]/10 blur-3xl rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative p-10 rounded-[2.5rem] border border-black/[0.05] bg-white shadow-2xl">
                                <div className="mb-10">
                                    <h3 className="text-2xl font-extrabold text-black tracking-tight mb-2">Reseller Application</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#00aaff]">Step 01: Initial Inquiry</p>
                                </div>
                                <ResellerForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 lg:py-32 bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white mb-20 tracking-tighter uppercase">Success Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { stat: "25+", label: "Active Global Partners" },
                            { stat: "15+", label: "Countries Represented" },
                            { stat: "40%", label: "Avg Partner Revenue Growth" },
                        ].map((item, i) => (
                            <div key={i} className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                <div className="text-6xl font-extrabold text-[#00aaff] mb-4 group-hover:text-white transition-colors tracking-tighter">{item.stat}</div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-white/40 transition-colors leading-tight">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Looking for Success Stories?"
                description="See how businesses across the globe have scaled using our platforms and partner network."
                buttonText="Read Business Case Studies"
                buttonHref="/about"
            />
        </div>
    );
}
