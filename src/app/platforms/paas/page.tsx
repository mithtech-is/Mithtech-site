"use client";

import { useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import {
    Cpu,
    Terminal,
    Activity,
    ShieldCheck,
    Zap,
    Server,
    HardDrive,
    Network,
    Codesandbox,
    Lock,
    RefreshCw,
    LayoutGrid,
    ArrowRight,
    MousePointer2
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PaaSPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featureGridRef = useRef<HTMLDivElement>(null);
    const solutionGridRef = useRef<HTMLDivElement>(null);
    const devSectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Hero
            gsap.from(".hero-content > *", { opacity: 0, y: 30, stagger: 0.2, duration: 1, ease: "power4.out" });

            // Feature Grid
            gsap.fromTo(".feature-card",
                { autoAlpha: 0, y: 40 },
                {
                    scrollTrigger: {
                        trigger: featureGridRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            // Infrastructure Stack
            gsap.fromTo(".product-section",
                { autoAlpha: 0, scale: 0.95, y: 50 },
                {
                    scrollTrigger: {
                        trigger: solutionGridRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power4.out"
                }
            );

            // Developer Section
            gsap.fromTo(".dev-content > *",
                { autoAlpha: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: devSectionRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(".dev-visual",
                { autoAlpha: 0, scale: 0.8 },
                {
                    scrollTrigger: {
                        trigger: devSectionRef.current,
                        start: "top bottom-=150",
                    },
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out"
                }
            );
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-background overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        PLATFORM INFRASTRUCTURE EXPERTS
                    </span>
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                        PAAS <br />
                        <span className="text-muted-foreground">ENGINEERING</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                        Managed development and production environments. We provide the infrastructure automation, scaling logic, and security layers so your team can focus exclusively on shipping code.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full border border-black px-8 text-lg h-14 hover:scale-105 active:scale-95 transition-transform">
                            <Link href="/contact">Deploy Your Architecture</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why PaaS Section */}
            <section className="py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">Zero-Ops Managed Infrastructure</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Stop wasting expensive engineering time on DevOps. Our PaaS solutions provide fully managed, high-performance environments ready for any workload.
                        </p>
                    </div>
                    <div ref={featureGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Terminal}
                            title="Dev Environments"
                            description="Instant-on, standardized development environments for your entire engineering team."
                        />
                        <FeatureCard
                            icon={Server}
                            title="Managed Clusters"
                            description="High-availability server groups with automated scaling and self-healing capabilities."
                        />
                        <FeatureCard
                            icon={ShieldCheck}
                            title="Hardened Security"
                            description="Built-in firewall, VPC isolation, and automated patch management for total protection."
                        />
                        <FeatureCard
                            icon={RefreshCw}
                            title="Auto-Scaling"
                            description="Dynamic resource allocation that grows with your traffic and shrinks to save costs."
                        />
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Our Infrastructure Stack</h2>
                        <p className="text-xl text-muted-foreground">We manage the complexity of modern cloud infrastructure for you.</p>
                    </div>

                    <div ref={solutionGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* CloudPanel Card */}
                        <div className="product-section flex flex-col gap-8 p-10 rounded-[2.5rem] border bg-card/30 hover:bg-card transition-all duration-500 border-dashed hover:border-solid group relative bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:-translate-y-2">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-2xl bg-white text-background flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 overflow-hidden p-3 shadow-inner border border-foreground/5">
                                    <div className="relative w-full h-full">
                                        <Image src="/assets/cloudpanel-icon.png" alt="CloudPanel" fill className="object-contain transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-foreground/10 text-[10px] font-black uppercase tracking-widest bg-muted/50">SERVER MANAGEMENT</div>
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2 block">Hosting Control Panel</span>
                                <h3 className="text-3xl font-black tracking-tighter mb-4">CloudPanel</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">High-performance server management panel for PHP, Node.js, Python, and static sites. Lightweight, secure, and optimized for modern cloud environments with automated SSL, firewall, and database management.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Auto SSL</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Vhost Management</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Firewall</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Database Admin</span>
                                </div>
                            </div>
                            <div className="pt-8 mt-auto border-t border-foreground/5 flex items-center justify-between">
                                <Link href="/contact" className="flex items-center gap-2 text-sm font-black italic hover:text-primary transition-colors group/link">
                                    View Product <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                                <MousePointer2 className="w-5 h-5 opacity-5 group-hover:opacity-20 transition-opacity" />
                            </div>
                        </div>

                        {/* Coolify Card */}
                        <div className="product-section flex flex-col gap-8 p-10 rounded-[2.5rem] border bg-card/30 hover:bg-card transition-all duration-500 border-dashed hover:border-solid group relative bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:-translate-y-2">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-2xl bg-white text-background flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 overflow-hidden p-3 shadow-inner border border-foreground/5">
                                    <div className="relative w-full h-full">
                                        <Image src="/assets/coolify-logo.png" alt="Coolify" fill className="object-contain transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-foreground/10 text-[10px] font-black uppercase tracking-widest bg-muted/50">SELF-HOSTED PAAS</div>
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2 block">Deployment Engine</span>
                                <h3 className="text-3xl font-black tracking-tighter mb-4">Coolify</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">Open-source, self-hostable alternative to Netlify and Heroku. Deploy applications, databases, and services to your own servers with Git-based workflows, zero-downtime deployments, and automated backups.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Git Deploy</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Docker Native</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Auto Backups</span>
                                    <span className="px-3 py-1 rounded-full border bg-background/50 text-[10px] font-bold uppercase tracking-wider">Zero-Downtime</span>
                                </div>
                            </div>
                            <div className="pt-8 mt-auto border-t border-foreground/5 flex items-center justify-between">
                                <Link href="/contact" className="flex items-center gap-2 text-sm font-black italic hover:text-primary transition-colors group/link">
                                    View Product <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                                <MousePointer2 className="w-5 h-5 opacity-5 group-hover:opacity-20 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Detail */}
            <section ref={devSectionRef} className="py-24 border-b bg-foreground text-background overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 dev-content">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">Engineered for Devs</h2>
                            <p className="text-xl text-background/80 mb-10 leading-relaxed">
                                Our platform solutions focus on providing the absolute best developer experience, allowing your team to move from idea to production in minutes.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 rounded-full border border-background/20 font-mono text-xs tracking-wider">CI / CD AUTOMATION</div>
                                <div className="px-4 py-2 rounded-full border border-background/20 font-mono text-xs tracking-wider">GIT INTEGRATION</div>
                                <div className="px-4 py-2 rounded-full border border-background/20 font-mono text-xs tracking-wider">LOG AGGREGATION</div>
                                <div className="px-4 py-2 rounded-full border border-background/20 font-mono text-xs tracking-wider">VPC ISOLATION</div>
                            </div>
                        </div>
                        <div className="dev-visual flex-1 w-full flex justify-center lg:justify-end">
                            <div className="w-full max-w-sm aspect-square border border-background/10 rounded-full flex items-center justify-center p-12 bg-background/5 backdrop-blur-sm">
                                <Activity className="w-48 h-48 opacity-10 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Focus on your code, not servers"
                description="Stop wasting time on DevOps. Let us manage your platform infrastructure while you build great products."
                buttonText="Start Infrastructure Consultation"
                buttonHref="/contact"
            />
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="feature-card flex flex-col gap-4 p-8 rounded-3xl border bg-card/50 hover:shadow-2xl hover:border-foreground/10 transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function ProductSection({ icon: Icon, title, description, capabilities }: { icon: any, title: string, description: string, capabilities: string[] }) {
    return (
        <div className="product-section flex flex-col gap-6 p-10 rounded-[2.5rem] border bg-card/40 hover:bg-card transition-all duration-500 group relative bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-5 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter">{title}</h3>
            </div>
            <p className="text-muted-foreground font-medium mb-4">{description}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-foreground/60 uppercase tracking-widest leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {c}
                    </li>
                ))}
            </ul>
        </div>
    );
}
