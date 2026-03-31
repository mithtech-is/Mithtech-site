"use client";

import { CTASection } from "@/components/marketing/CTASection";
import {
    GraduationCap,
    CheckCircle2,
    ArrowRight,
    BookOpen,
    Video,
    Award,
    Users,
    Layout,
    Smartphone,
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

function LMSFeature({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4 text-lg">
            <div className="h-6 w-6 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{title}</span>
        </div>
    );
}

export default function LMSSolution() {
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
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Knowledge Empowerment</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Learning <br /> 
                            <span className="text-[#00aaff]">Management.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Build a culture of continuous learning. Modern, scalable platforms 
                            for employee onboarding, customer training, and professional 
                            certification academies.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Build Your Academy
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
                            icon={BookOpen}
                            title="Architecture"
                            description="Create rich, interactive course content with support for video, quizzes, and live assessments."
                        />
                        <PillarItem
                            icon={Award}
                            title="Certification"
                            description="Automated workflows to issue branded digital certificates upon successful course completion."
                        />
                        <PillarItem
                            icon={Users}
                            title="Communities"
                            description="Social learning features including discussion forums and peer study group interactions."
                        />
                        <PillarItem
                            icon={Smartphone}
                            title="Mobile First"
                            description="Your academy in their pocket. Responsive, mobile-native learning experience for students."
                        />
                    </div>
                </div>
            </section>

            {/* ShoiLMS Section */}
            <section className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">ShoiLMS Platform</h2>
                                <p className="text-xl text-black/40 mb-10 leading-loose italic max-w-2xl">
                                    Our flagship LMS solution built for the modern enterprise. Highly customizable, multi-tenant capable, and integrated with your ERP.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                    <LMSFeature title="White-labeled Portals" />
                                    <LMSFeature title="Multi-tenant Logic" />
                                    <LMSFeature title="Advanced Analytics" />
                                    <LMSFeature title="Authoring Tools" />
                                    <LMSFeature title="SCORM Compliance" />
                                    <LMSFeature title="xAPI Support" />
                                </div>
                                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                    See ShoiLMS in Action
                                </Link>
                            </motion.div>
                        </div>
                        <div className="relative group lg:ml-auto">
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-black/[0.05] shadow-2xl bg-white p-20 flex flex-col items-center justify-center gap-8 group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <div className="text-center">
                                    <div className="text-7xl font-extrabold text-black mb-2 tracking-tighter">100%</div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">White-Labeled Portals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 lg:py-32 border-y border-black/[0.05] bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-extrabold tracking-tight text-center mb-20 uppercase">Learning for every scenario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Employee Onboarding", desc: "Path to productivity with automated onboarding and compliance training." },
                            { title: "Customer Education", desc: "Reduce support tickets and increase adoption with structured portals." },
                            { title: "Professional Academy", desc: "Monetize your expertise with a fully-featured, branded online academy." },
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3.5rem] border border-black/5 flex flex-col gap-6 text-center items-center group bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl">
                                <h4 className="text-2xl font-extrabold text-black group-hover:text-white transition-colors uppercase">{item.title}</h4>
                                <p className="text-lg font-medium text-black/40 leading-loose group-hover:text-white/50 transition-colors italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Empower your team with knowledge"
                description="Our architects will design a learning infrastructure that transforms your institutional knowledge into a competitive advantage."
                buttonText="Archive Your LMS"
                buttonHref="/contact"
            />
        </div>
    );
}
