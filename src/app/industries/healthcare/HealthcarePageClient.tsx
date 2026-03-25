"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
} from "lucide-react";

function FeatureBox({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 p-8 rounded-3xl border bg-card hover:bg-muted/50 transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <span className="text-base leading-relaxed">{text}</span>
        </li>
    );
}

export default function HealthcarePage() {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-8">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" /> All Industries
                </Link>
            </div>

            {/* Hero */}
            <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pb-32 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            INDUSTRY SOLUTION
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            HEALTH<br />
                            <span className="text-muted-foreground">CARE</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Equip your clinic, hospital, or health network with digital systems that reduce administrative burden, eliminate missed appointments, and put patient care first.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Get a Free Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/platforms">View Platforms</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 sm:py-20 md:py-24 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">Built for better patient outcomes</h2>
                        <p className="text-lg text-muted-foreground">Every system we build reduces friction between patient and provider so your staff can focus on care, not paperwork.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureBox icon={Calendar} title="Online Appointment Booking" description="Let patients book consultations, follow-ups, and diagnostic slots 24/7 with doctor-specific availability and real-time confirmations." />
                        <FeatureBox icon={FileText} title="Patient Records (EMR)" description="Centralised, secure electronic medical records accessible to authorised practitioners across your facility in real time." />
                        <FeatureBox icon={HeartPulse} title="Billing & Insurance" description="Automate invoicing, insurance claim submission, and payment tracking for faster revenue cycles and fewer billing errors." />
                        <FeatureBox icon={Video} title="Teleconsultation" description="Extend your reach with integrated telehealth workflows—video consultations, digital prescriptions, and remote follow-ups." />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 sm:py-20 md:py-24 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">How We Build It</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">We configure specialised platforms into an integrated healthcare operating system tailored to your practice type and scale.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:gap-8">
                        {[
                            {
                                icon: Calendar,
                                title: "Schedulr Clinic Scheduler",
                                desc: "A HIPAA-friendly, white-labelled booking system deployed on your clinic website with doctor-level scheduling, service packages, and automated patient reminders.",
                                points: ["Doctor & department scheduling", "SMS & email appointment reminders", "Cancellation & rescheduling management", "Intake form collection"],
                            },
                            {
                                icon: Users,
                                title: "ERPNext Healthcare Module",
                                desc: "A comprehensive practice management system covering patient registration, consultation notes, laboratory orders, billing, and pharmacy workflows.",
                                points: ["Electronic medical records (EMR)", "Lab & diagnostic result management", "Pharmacy & medication tracking", "Insurance & billing automation"],
                            },
                            {
                                icon: Bell,
                                title: "Patient Communication Hub",
                                desc: "Proactively engage patients with appointment reminders, medication adherence messages, health tips, and post-visit follow-up workflows via WhatsApp and email.",
                                points: ["Automated appointment reminders", "Post-visit feedback surveys", "Medication reminder campaigns", "Preventive care notifications"],
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-3xl border bg-card p-5 sm:p-8 flex flex-col gap-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                                    <ul className="space-y-3">
                                        {item.points.map((p) => <CheckItem key={p} text={p} />)}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Banner */}
            <section className="py-16 sm:py-20 md:py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-5xl font-black mb-8 leading-tight">LESS WAIT.<br />BETTER CARE.</h2>
                            <p className="text-xl text-background/70 mb-10 max-w-md">Clinics that deploy our digital systems see measurable reductions in no-shows, faster billing cycles, and higher patient satisfaction scores.</p>
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full bg-background px-6 font-bold text-foreground hover:bg-white sm:h-14 sm:w-auto sm:px-10">
                                <Link href="/contact">Digitise Your Practice</Link>
                            </Button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {[
                                { stat: "45%", label: "Drop in missed appointments with automated reminders" },
                                { stat: "2×", label: "Faster billing & claims processing vs manual methods" },
                                { stat: "80%", label: "Patients prefer digital booking over phone scheduling" },
                                { stat: "100%", label: "Patient data sovereignty—hosted on your own infrastructure" },
                            ].map((item, i) => (
                                <div key={i} className="border border-background/20 rounded-3xl p-8 flex flex-col justify-end">
                                    <div className="text-4xl font-bold mb-2">{item.stat}</div>
                                    <p className="text-sm text-background/60 leading-tight">{item.label}</p>
                                </div>
                            ))}
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


