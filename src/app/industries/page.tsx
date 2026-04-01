"use client";

import { IndustryCard } from "@/components/marketing/IndustryCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Building2, Factory, HeartPulse, Landmark, ShoppingCart, Car } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Industries() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-20 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Market Operations</span>
                        </div>
                        <h1 className="text-responsive-h1 font-extrabold tracking-tight text-black mb-8 leading-[0.9] uppercase text-wrap-balance">
                            Industry <br />
                            <span className="text-[#00aaff]">Excellence.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Every industry operates with unique challenges and workflows.
                            We design and deploy systems tailored to your specific business model,
                            eliminating inefficiencies and building for long-term scale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Discuss Your Workflow
                            </Link>
                            <a href="#explore" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95">
                                Explore Sectors
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition (Optional addition for Industries) */}
            <section className="py-16 bg-black/[0.02] border-y border-black/[0.05]">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4 italic">Tailored for your vertical</p>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
                        {/* These can be small text icons for emphasis */}
                        <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-black" /> <span className="text-xs font-bold uppercase tracking-widest">Automation</span></div>
                        <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-black" /> <span className="text-xs font-bold uppercase tracking-widest">Scalability</span></div>
                        <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-black" /> <span className="text-xs font-bold uppercase tracking-widest">Security</span></div>
                    </div>
                </div>
            </section>

            {/* Industry Grid */}
            <section id="explore" className="py-12 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Selected Sectors</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl">Focused expertise in high-growth industries and specialized vertical operations.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <IndustryCard title="Automotive (Car Care)" icon={Car} href="/industries/automotive" delay={0.1} />
                        <IndustryCard title="Real Estate" icon={Building2} href="/industries/real-estate" delay={0.2} />
                        <IndustryCard title="Healthcare" icon={HeartPulse} href="/industries/healthcare" delay={0.3} />
                        <IndustryCard title="Retail" icon={ShoppingCart} href="/industries/retail" delay={0.4} />
                        <IndustryCard title="Manufacturing" icon={Factory} href="/industries/manufacturing" delay={0.5} />
                        <IndustryCard title="Financial Services / Loans" icon={Landmark} href="/industries/financial-services" delay={0.6} />
                    </div>
                </div>
            </section>

            <CTASection
                title="Don't see your industry?"
                description="Our platforms are highly adaptable. Contact us to discuss how we can build a system for your unique business model."
                buttonText="Contact Us"
                buttonHref="/contact"
            />
        </div>
    );
}
