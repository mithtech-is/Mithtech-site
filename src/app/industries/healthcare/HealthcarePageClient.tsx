"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    HeartPulse,
    Calendar,
    FileText,
    ShieldCheck,
    Video,
    BarChart3,
    CheckCircle2,
    ArrowLeft,
    Users,
    Bell,
    ArrowRight
} from "lucide-react";

function FeatureBox({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-6 sm:p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5 transition-all duration-500 group min-h-full"
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

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 h-5 w-5 rounded-full bg-[#00aaff]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            </div>
            <span className="text-base font-medium text-black/70 leading-loose">{text}</span>
        </li>
    );
}

export default function HealthcarePage() {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
                <Link href="/industries" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> All Industries
                </Link>
            </div>

            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative overflow-hidden bg-white pt-4 pb-12 sm:pb-20 lg:pt-6 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Sector: Healthcare</span>
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase break-words">
                            Digital care, <br /> 
                            <span className="text-[#00aaff]">Redefined.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            Equip your clinic, hospital, or health network with digital systems that 
                            reduce administrative burden, eliminate missed appointments, 
                            and put patient care first where it belongs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                                Digitise Your Practice
                            </Link>
                            <Link href="/platforms" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95">
                                View Platforms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-12 sm:py-24 border-y border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Built for better patient outcomes</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-2xl mx-auto">Every system we build reduces friction between patient and provider so your staff can focus on care, not paperwork.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureBox icon={Calendar} title="Online Booking" description="Let patients book consultations, follow-ups, and diagnostic slots 24/7 with real-time confirmations." />
                        <FeatureBox icon={FileText} title="Electronic Records" description="Centralised, secure patient records accessible across your facility in real-time." />
                        <FeatureBox icon={HeartPulse} title="Billing & Insurance" description="Automate invoicing, insurance claim submission, and payment tracking for faster revenue cycles." />
                        <FeatureBox icon={Video} title="Teleconsultation" description="Extend your reach with integrated telehealth workflows—video consultations and digital prescriptions." />
                    </div>
                </div>
            </section>

            {/* Use Cases - How We Build It */}
            <section className="py-12 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl font-extrabold tracking-tight text-black mb-8 uppercase">The Operating System</h2>
                        <p className="text-xl text-black/40 max-w-2xl">Tailored healthcare stacks integrated into a single high-performance system.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {[
                            {
                                icon: Calendar,
                                title: "Schedulr Clinic Hub",
                                desc: "A white-labelled booking system with doctor-level scheduling, service packages, and automated patient reminders.",
                                points: ["Doctor & department scheduling", "SMS & email patient reminders", "Cancellation management", "Intake form collection"],
                            },
                            {
                                icon: Users,
                                title: "ERPNext Practice Core",
                                desc: "Comprehensive management covering registration, consultation notes, laboratory orders, billing, and pharmacy.",
                                points: ["Electronic medical records (EMR)", "Lab & diagnostic management", "Pharmacy & medication tracking", "Insurance automation"],
                            },
                            {
                                icon: Bell,
                                title: "Patient Engagement",
                                desc: "Proactively engage patients with adherence messages, health tips, and post-visit follow-ups via WhatsApp.",
                                points: ["Automated appointment alerts", "Post-visit health surveys", "Medication reminder campaigns", "Preventive care notifications"],
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-[2.5rem] border border-black/[0.05] bg-white p-6 sm:p-10 flex flex-col gap-8 shadow-sm hover:shadow-xl transition-all duration-500 min-h-full"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-black mb-6 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-black/50 text-lg leading-loose mb-10">{item.desc}</p>
                                    <ul className="space-y-6">
                                        {item.points.map((p) => <CheckItem key={p} text={p} />)}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-12 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-black text-white rounded-[3rem] p-6 sm:p-12 lg:p-24 border border-white/10 shadow-2xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="flex-1">
                                <h2 className="text-5xl font-extrabold mb-12 leading-tight tracking-tight">
                                    Less Wait. <br /> <span className="text-[#00aaff]">Better Care.</span>
                                </h2>
                                <p className="text-xl text-white/50 mb-12 max-w-md italic">Clinics that deploy our digital systems see measurable reductions in no-shows and higher patient satisfaction scores.</p>
                                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00aaff] px-10 py-5 text-sm font-bold text-black transition-all hover:bg-[#00aaff]/80 hover:translate-y-[-2px] active:scale-95">
                                    Digitise Your Practice
                                </Link>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
                                {[
                                    { stat: "45%", label: "Drop in missed appointments with automation" },
                                    { stat: "2×", label: "Faster billing & claims processing times" },
                                    { stat: "80%", label: "Patients prefer digital booking systems" },
                                    { stat: "100%", label: "Data sovereignty—hosted on your terms" },
                                ].map((item, i) => (
                                    <div key={i} className="border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 flex flex-col justify-end bg-white/5 group hover:bg-white transition-all duration-500">
                                        <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3 group-hover:text-black transition-colors">{item.stat}</div>
                                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-black/40 transition-colors leading-tight">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to modernise your practice?"
                description="Book a free consultation with our healthcare technology team and receive a custom digital transformation roadmap for your facility."
                buttonText="Book a Free Consultation"
                buttonHref="/contact"
            />
        </div>
    );
}
