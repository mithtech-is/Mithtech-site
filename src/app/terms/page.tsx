"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/marketing/CTASection";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsOfService() {
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
                            Terms Of <br /> 
                            <span className="text-[#00aaff]">Service.</span>
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
                            <h2 id="acceptance">01. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the Mithtech website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>

                            <h2 id="license">02. Site Usage License</h2>
                            <p>
                                Permission is granted to temporarily view the materials on Mithtech Innovative Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                            </p>
                            <ul>
                                <li>Modify or copy the structural materials.</li>
                                <li>Use materials for unauthorized commercial purposes.</li>
                                <li>Attempt to decompile or reverse engineer any software asset.</li>
                                <li>Remove any copyright or proprietary notations.</li>
                            </ul>

                            <h2 id="disclaimer">03. Professional Disclaimer</h2>
                            <p>
                                The materials on Mithtech's website are provided on an 'as is' basis. Mithtech Innovative Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular architectural purpose.
                            </p>

                            <h2 id="limitations">04. Liability Limitations</h2>
                            <p>
                                In no event shall Mithtech Innovative Solutions or its suppliers be liable for any damages (including loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mithtech's platform.
                            </p>

                            <h2 id="accuracy">05. Accuracy & Updates</h2>
                            <p>
                                The materials appearing on Mithtech's website could include technical, typographical, or photographic errors. Mithtech Innovative Solutions does not warrant that any of the materials are accurate, complete or current. We may make changes to the materials at any time without notice.
                            </p>

                            <h2 id="law">06. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                            </p>

                            <h2 id="contact">07. Legal Contact</h2>
                            <p>
                                If you have any questions about these Terms, please contact us:
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
                title="Professional systems for professional businesses."
                description="Our terms ensure a clear and mutual understanding of our strategic partnership."
                buttonText="Partner with Us"
                buttonHref="/contact"
            />
        </div>
    );
}
