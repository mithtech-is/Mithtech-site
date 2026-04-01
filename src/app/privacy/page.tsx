"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/marketing/CTASection";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
    const lastUpdated = "March 5, 2026";

    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Legal & Compliance</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Privacy <br />
                            <span className="text-[#00aaff]">Policy.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-2xl mx-auto mb-10 italic">
                            Last Updated: <span className="text-black font-bold uppercase tracking-widest">{lastUpdated}</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 lg:py-32 border-t border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="prose prose-2xl max-w-none text-black/60 prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-black prose-headings:uppercase prose-strong:text-black prose-li:marker:text-[#00aaff] prose-p:text-3xl prose-p:leading-relaxed prose-p:mb-20 prose-headings:mb-14 prose-h2:text-5xl">
                            <h2 id="introduction">01. Introduction</h2>
                            <p>
                                At Mithtech Innovative Solutions ("Mithtech", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                            </p>

                            <h2 id="collection">02. Information We Collect</h2>
                            <p>
                                We may collect various types of information, including:
                            </p>
                            <ul>
                                <li><strong>Personal Identification Info:</strong> Name, email address, phone number, and company details provided through contact forms.</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and time spent on site.</li>
                                <li><strong>Cookies:</strong> We use session cookies to enhance your experience and analyze platform traffic.</li>
                            </ul>

                            <h2 id="usage">03. How We Use Information</h2>
                            <p>
                                We use the collected information for purposes including:
                            </p>
                            <ul>
                                <li>To provide and maintain our enterprise services.</li>
                                <li>To communicate with you regarding inquiries and updates.</li>
                                <li>To improve our architecture and user experience.</li>
                                <li>To comply with legal obligations and prevent fraud.</li>
                            </ul>

                            <h2 id="security">04. Data Security Protocols</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. Your data sovereignty is handled with extreme care.
                            </p>

                            <h2 id="rights">05. Your User Rights</h2>
                            <p>
                                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. To exercise these rights, please contact our legal team at <strong>info@mith.tech</strong>.
                            </p>

                            <h2 id="contact">06. Legal Contact</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="p-12 rounded-[3rem] border border-black/[0.05] bg-black text-white not-prose hover:bg-[#111] hover:translate-y-[-4px] transition-all duration-500 mt-12 shadow-2xl">
                                <div className="space-y-6">
                                    <p className="text-[12px] font-bold uppercase tracking-[0.3em] opacity-50">Email Inquiry</p>
                                    <p className="text-2xl font-extrabold tracking-tight">info@mith.tech</p>
                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-[12px] font-bold uppercase tracking-[0.3em] opacity-50">Address</p>
                                        <p className="text-lg font-medium italic">Rajajinagar, Bangalore, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Building trust through transparency."
                description="Your privacy is our architectural priority. Contact our team if you have any further questions."
                buttonText="Connect With Legal"
                buttonHref="/contact"
            />
        </div>
    );
}
