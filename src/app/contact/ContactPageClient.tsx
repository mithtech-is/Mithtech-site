"use client";

import React, { useState } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [messageText, setMessageText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New inquiry from Mith Tech website*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${messageText}`;

        const encodedMessage = encodeURIComponent(message);
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918277540332";

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Name</label>
                <Input
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Email Address</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Reason for Interest</label>
                <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="h-14 w-full bg-black/[0.02] border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Additional Context</label>
                <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="min-h-[140px] w-full rounded-[1.5rem] border-black/[0.05] bg-black/[0.02] px-6 py-4 focus:border-[#00aaff] transition-all"
                />
            </div>

            <Button
                type="submit"
                className="group relative h-16 w-full rounded-full bg-[#00aaff] text-base font-bold text-black shadow-2xl shadow-[#00aaff]/20 transition-all hover:bg-black hover:text-[#00aaff] hover:translate-y-[-4px] active:scale-95"
            >
                Connect on WhatsApp <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-black/30 mt-4 italic">
                Direct Sync. Secure Routing.
            </p>
        </form>
    );
}

export default function Contact() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* HERO Section */}
            <section className="relative overflow-hidden bg-white pt-4 pb-20 lg:pt-6 lg:pb-40 border-b border-black/[0.05]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Start Your Transformation</span>
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl lg:text-7xl mb-10 leading-[1.1] uppercase">
                            Let's Build Your <br />
                            <span className="text-[#00aaff]">Success Story.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium">
                            Whether you need ERPNext implementation, ERPNext customization, WhatsApp automation, or a full cloud ERP deployment,
                            our expert ERPNext consultants in Bangalore are ready to map your path to measurable growth — at the lowest ERPNext implementation cost in India.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="mailto:hello@mith.tech" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-xl shadow-black/10 uppercase tracking-widest leading-none">
                                hello@mith.tech
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 lg:py-40 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl font-extrabold text-black mb-10 tracking-tight uppercase">Your Growth Starts <span className="text-[#00aaff]">Here.</span></h2>
                            <div className="prose prose-xl leading-loose font-sans">
                                <p className="text-black/60 mb-6 font-medium">
                                    Ready to eliminate costly licensing fees and take full ownership of your enterprise stack? From <strong>ERPNext implementation</strong> and <strong>ERPNext CRM setup</strong> to <strong>Medusa JS</strong> commerce platforms and intelligent <strong>WhatsApp automation</strong> with <strong>Mautic</strong> and <strong>n8n</strong> — our <strong>ERPNext implementation team in Bangalore</strong> delivers results. Need to <strong>hire an ERPNext developer</strong>? We have got you covered.
                                </p>
                                <p className="text-black/60 mb-10 text-lg">
                                    We partner with enterprises across India — Mumbai, Delhi NCR, Pune, Ahmedabad, and globally — to deliver open-source <strong>cloud ERP</strong>, <strong>GST-compliant</strong> ERPNext, and zero-licensing-fee solutions on Frappe. Whether you are comparing <strong>ERPNext vs Odoo</strong> or scoping a fresh <strong>ERPNext implementation</strong>, schedule a free consultation today and get a comprehensive technical roadmap built for your business.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-10">
                                <a 
                                    href="https://maps.app.goo.gl/p8idVeXrgser1UrH8" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-10 rounded-[2.5rem] border border-black/[0.05] bg-white group hover:border-[#00aaff]/20 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5"
                                >
                                    <div className="w-16 h-16 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">Office Location</h4>
                                    <p className="text-sm font-extrabold text-black/40 uppercase tracking-widest leading-relaxed">RajajiNagar, Bangalore</p>
                                </a>
                                <div className="p-10 rounded-[2.5rem] border border-black/[0.05] bg-white group hover:border-[#00aaff]/20 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5">
                                    <div className="w-16 h-16 rounded-3xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">Email Connect</h4>
                                    <p className="text-sm font-extrabold text-black/40 uppercase tracking-widest leading-relaxed">hello@mith.tech</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group w-full max-w-2xl lg:ml-auto">
                            <div className="absolute inset-0 bg-[#00aaff]/10 blur-3xl rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
                            <div className="relative p-12 rounded-[3.5rem] border border-black/[0.05] bg-white shadow-2xl shadow-black/5">
                                <div className="mb-12">
                                    <h3 className="text-3xl font-extrabold text-black tracking-tight mb-4 uppercase">Get in Touch</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00aaff]">Strategic Consultation Request</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Explore Our Product Suite"
                description="Looking for a ready-to-deploy solution? Discover 70+ enterprise products built on ERPNext and open-source platforms."
                buttonText="View All Products"
                buttonHref="/products"
            />
        </div>
    );
}
