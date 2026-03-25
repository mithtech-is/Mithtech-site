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
    Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LMSSolution() {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden px-0 mx-0">
            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden px-0 mx-0">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            KNOWLEDGE EMPOWERMENT
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            LEARNING <br />
                            <span className="text-muted-foreground">MANAGEMENT</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            Build a culture of continuous learning. Modern, scalable education platforms for employee onboarding, customer training, and professional certification.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="h-12 min-h-[48px] w-full rounded-full px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg">
                                <Link href="/contact">Build Your Academy</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-16 sm:py-20 md:py-24 border-b px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                        <PillarItem
                            icon={BookOpen}
                            title="Course Architecture"
                            description="Create rich, interactive course content with support for video, text, quizzes, and live assessments."
                        />
                        <PillarItem
                            icon={Award}
                            title="Certification"
                            description="Automated certification workflows. Issue branded digital certificates upon successful course completion."
                        />
                        <PillarItem
                            icon={Users}
                            title="Interactive Communities"
                            description="Social learning features including discussion forums, peer interaction, and group study groups."
                        />
                        <PillarItem
                            icon={Smartphone}
                            title="Mobile Learning"
                            description="Your academy in their pocket. Responsive, mobile-first learning experience for students on the move."
                        />
                    </div>
                </div>
            </section>

            {/* ShoiLMS Section */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-5xl font-bold tracking-tight mb-8">ShoiLMS Platform</h2>
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                    Our flagship LMS solution built for the modern enterprise. Highly customizable, multi-tenant capable, and integrated with your ERP.
                                </p>
                                <div className="space-y-6 mb-12">
                                    <LMSFeature title="White-labeled Portals" />
                                    <LMSFeature title="Multi-tenant Architecture" />
                                    <LMSFeature title="Advanced Student Analytics" />
                                    <LMSFeature title="Course Authoring Tools" />
                                    <LMSFeature title="SCORM & xAPI Support" />
                                </div>
                                <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg">
                                    <Link href="/contact">See ShoiLMS in Action</Link>
                                </Button>
                            </motion.div>
                        </div>
                        <div className="flex-1 w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[3rem] overflow-hidden bg-muted border p-12 max-w-[280px] mx-auto aspect-square flex flex-col items-center justify-center gap-6 shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground/5 via-transparent to-transparent" />
                                <GraduationCap className="w-24 h-24 text-foreground relative z-10" />
                                <div className="relative z-10 text-center">
                                    <div className="text-6xl font-black mb-1">100%</div>
                                    <p className="text-lg uppercase tracking-widest font-bold text-muted-foreground whitespace-nowrap">White-Labeled</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 sm:py-20 md:py-24 border-y bg-muted/30 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-center mb-16">Learning for every scenario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <UseCaseCard
                            title="Employee Onboarding"
                            description="Streamline the path to productivity with automated onboarding paths and compliance training."
                        />
                        <UseCaseCard
                            title="Customer Education"
                            description="Reduce support tickets and increase product adoption with structured customer portals."
                        />
                        <UseCaseCard
                            title="Professional Academy"
                            description="Monetize your expertise with a fully-featured, branded online learning platform."
                        />
                    </div>
                </div>
            </section>

            <CTASection
                title="Empower your team with knowledge"
                description="Our architects will design a learning infrastructure that transforms your institutional knowledge into a competitive advantage."
                buttonText="Architecture Your LMS"
                buttonHref="/contact"
            />
        </div>
    );
}

function PillarItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-3xl border bg-card hover:bg-muted/30 transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

function LMSFeature({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-4 text-lg">
            <CheckCircle2 className="w-6 h-6 text-foreground shrink-0" />
            <span>{title}</span>
        </div>
    );
}

function UseCaseCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-10 rounded-[2.5rem] bg-background border flex flex-col gap-4 text-center items-center group hover:border-foreground/20 transition-all">
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}


