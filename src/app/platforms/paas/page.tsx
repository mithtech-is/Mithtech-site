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
import { ProductFAQ } from "@/components/seo/ProductFAQ";
import { generatePlatformFaqs } from "@/lib/seo/faq-generator";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PaaSPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featureGridRef = useRef<HTMLDivElement>(null);
    const solutionGridRef = useRef<HTMLDivElement>(null);

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

            // Infrastructure Stack
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-12 sm:pb-20 md:pt-16 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        PLATFORM INFRASTRUCTURE EXPERTS
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase break-words">
                        PAAS <br />
                        <span className="text-[#00aaff]">ENGINEERING</span>
                    </h1>
                    <p className="text-xl leading-loose text-black/50 max-w-2xl mb-10 italic">
                        Managed development and production environments. We provide the infrastructure automation, scaling logic, and security layers so your team can focus exclusively on shipping code.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                            Deploy Your Architecture
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why PaaS Section */}
            <section className="py-12 sm:py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Zero-Ops Managed Infrastructure</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-3xl">
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
            <section className="py-12 sm:py-24 border-b bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Our Infrastructure Stack</h2>
                        <p className="text-xl text-black/40 leading-loose italic">We manage the complexity of modern cloud infrastructure for you.</p>
                    </div>

                    <div ref={solutionGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* CloudPanel Card */}
                        <div className="product-section flex flex-col gap-8 p-6 sm:p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group min-h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:bg-white transition-colors overflow-hidden p-3 shadow-inner">
                                    <div className="relative w-full h-full">
                                        <Image src="/assets/cloudpanel-icon.png" alt="CloudPanel" fill className="object-contain transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-widest bg-black/[0.02] text-black/40 group-hover:text-white/40 group-hover:border-white/10 transition-colors">SERVER MANAGEMENT</div>
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[#00aaff] uppercase tracking-[0.3em] mb-2 block">Hosting Control Panel</span>
                                <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-black group-hover:text-white transition-colors uppercase">CloudPanel</h3>
                                <p className="text-black/50 text-base leading-loose mb-8 group-hover:text-white/60 transition-colors italic">High-performance server management panel for PHP, Node.js, Python, and static sites. Lightweight, secure, and optimized for modern cloud environments.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Auto SSL</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Vhost Management</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Firewall</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Database Admin</span>
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
                        <div className="product-section flex flex-col gap-8 p-6 sm:p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group min-h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:bg-white transition-colors overflow-hidden p-3 shadow-inner">
                                    <div className="relative w-full h-full">
                                        <Image src="/assets/coolify-logo.png" alt="Coolify" fill className="object-contain transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-widest bg-black/[0.02] text-black/40 group-hover:text-white/40 group-hover:border-white/10 transition-colors">SELF-HOSTED PAAS</div>
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[#00aaff] uppercase tracking-[0.3em] mb-2 block">Deployment Engine</span>
                                <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-black group-hover:text-white transition-colors uppercase">Coolify</h3>
                                <p className="text-black/50 text-base leading-loose mb-8 group-hover:text-white/60 transition-colors italic">Open-source alternative to Netlify and Heroku. Deploy applications, databases, and services to your own servers with Git-based workflows.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Git Deploy</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Docker Native</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Auto Backups</span>
                                    <span className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">Zero-Downtime</span>
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

            <ProductFAQ
                productName="PaaS Engineering"
                faqs={generatePlatformFaqs({
                    name: "PaaS Engineering",
                    category: "managed platform infrastructure solution",
                    description: "deploy applications, automate infrastructure, and manage scaling without heavy internal DevOps overhead",
                    features: [
                        "managed hosting environments",
                        "deployment automation",
                        "security hardening",
                        "auto-scaling infrastructure",
                        "server and database management",
                    ],
                    implementationFocus: "platform architecture, self-hosted PaaS setup, deployment pipelines, and ongoing infrastructure management",
                    integrations: ["Git-based deployment workflows", "cloud servers", "containers", "databases", "monitoring and backup systems"],
                    customFaqs: [
                        {
                            question: "What is the benefit of Mithtech-managed PaaS over handling DevOps in-house?",
                            answer: "A managed PaaS setup helps teams ship faster because engineers spend less time maintaining servers, deployment scripts, scaling rules, and patching. Mithtech handles that operational layer so your team can stay focused on product work.",
                        },
                    ],
                })}
            />


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
        <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h3>
            <p className="text-black/50 text-lg leading-loose">{description}</p>
        </div>
    );
}

function ProductSection({ icon: Icon, title, description, capabilities }: { icon: any, title: string, description: string, capabilities: string[] }) {
    return (
        <div className="product-section flex flex-col gap-6 p-6 sm:p-10 rounded-[2.5rem] border bg-card/40 hover:bg-card transition-all duration-500 group relative bg-background/50 backdrop-blur-sm min-h-full">
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
