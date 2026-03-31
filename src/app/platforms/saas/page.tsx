"use client";

import { useEffect, useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { 
    Smartphone, 
    BookOpen, 
    Briefcase, 
    Share2, 
    Sparkles, 
    Bell, 
    Rocket,
    ShieldCheck,
    Globe,
    Zap,
    Users,
    MousePointer2,
    ArrowRight
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

export default function SaaSPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const advantageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Hero Animations
            const heroTl = gsap.timeline();
            heroTl.from(".hero-tag", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" })
                  .from(".hero-title", { opacity: 0, y: 40, duration: 1, ease: "power4.out", stagger: 0.2 }, "-=0.4")
                  .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6")
                  .from(".hero-btn", { opacity: 0, scale: 0.9, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");

            // Floating Blobs
            gsap.to(".bg-blob-1", {
                x: "random(-20, 20)",
                y: "random(-20, 20)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(".bg-blob-2", {
                x: "random(-30, 30)",
                y: "random(-30, 30)",
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Product Cards Reveal
            gsap.fromTo(".product-card", 
                { opacity: 0, y: 40 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 92%",
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out"
                }
            );

            // Advantage Section
            gsap.from(".advantage-title", {
                scrollTrigger: {
                    trigger: advantageRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".advantage-item", {
                scrollTrigger: {
                    trigger: advantageRef.current,
                    start: "top 70%",
                },
                opacity: 0,
                scale: 0.8,
                stagger: 0.2,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });

            // Cloud Card
            gsap.from(".cloud-card", {
                scrollTrigger: {
                    trigger: ".cloud-card",
                    start: "top 85%",
                },
                opacity: 0,
                x: 100,
                duration: 1.5,
                ease: "power4.out"
            });
        });

        // Mobile Animations (Simpler)
        mm.add("(max-width: 767px)", () => {
            gsap.from(".hero-content > *", { opacity: 0, y: 20, stagger: 0.2, duration: 0.8 });
            gsap.from(".product-card", {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 90%",
                },
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8
            });
        });

        return () => mm.revert();
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-20 md:pt-32 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 bg-blob-1" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 bg-blob-2" />
                
                <div className="container mx-auto px-4 hero-content">
                    <span className="hero-tag text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        PROPRIETARY PRODUCT ECOSYSTEM
                    </span>
                    <h1 className="hero-title text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase">
                        MITHTECH <br />
                        <span className="text-[#00aaff]">SAAS SUITE</span>
                    </h1>
                    <p className="hero-desc text-xl leading-loose text-black/50 max-w-2xl mb-10 italic">
                        Enterprise-grade software solutions designed to automate, scale, and transform your business operations. Discover our portfolio of ready-to-deploy SaaS platforms.
                    </p>
                    <div className="hero-btn flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                            Request Product Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Showcase Grid */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Featured Products</h2>
                        <p className="text-xl text-black/40 leading-loose italic">
                            Battle-tested platforms serving thousands of users across various industries.
                        </p>
                    </div>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
                        <ProductCard 
                            logo="/assets/polyg.png"
                            title="Polygin WhatsApp"
                            tagline="Conversational Commerce"
                            description="Turn WhatsApp into your most powerful sales channel with automated storefronts and AI-driven engagement."
                            products={["WaStore", "Automation Bot", "Campaign Manager"]}
                            stats="90% Open Rates"
                            href="/products/polygin"
                        />
                        <ProductCard 
                            logo="/assets/shoiclean.png"
                            title="shoiLMS"
                            tagline="Learning & Development"
                            description="Next-generation learning management system for academic excellence and corporate training automation."
                            products={["Course Builder", "Student Portal", "Certification Engine"]}
                            stats="Academic Ready"
                            href="/products/shoilms"
                        />
                        <ProductCard 
                            logo="/assets/qu6_logo.png"
                            title="Qu6 Workspace"
                            tagline="Operational Excellence"
                            description="Unified project management and team collaboration platform designed for high-performance agencies."
                            products={["Kanban Boards", "Time Tracking", "Custom Dashboards"]}
                            stats="All-in-One Hub"
                            href="/products/qu6"
                        />
                        <ProductCard 
                            logo="/assets/was-logo.png"
                            title="WAS (WhatsApp Automation System)"
                            tagline="Automation Engine"
                            description="Automated WhatsApp communication system for lead capture, nurturing, and customer engagement at scale."
                            products={["Lead Capture", "Auto Replies", "CRM Sync"]}
                            stats="WHATSAPP AUTOMATION"
                            href="/products/was"
                        />
                        <ProductCard 
                            logo="/assets/polyginstores-logo.png"
                            title="Polygin Stores"
                            tagline="Commerce Cloud"
                            description="End-to-end marketing automation and workflow engine for campaigns, user journeys, and conversion optimization."
                            products={["Campaign Flows", "User Journeys", "Conversion Tracking"]}
                            stats="MARKETING AUTOMATION"
                            href="/products/polyginstores"
                        />
                    </div>
                </div>
            </section>

            {/* Why Our SaaS Section */}
            <section ref={advantageRef} className="py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="advantage-title text-5xl font-extrabold tracking-tight text-black mb-8 uppercase italic">The Mithtech Advantage</h2>
                            <p className="text-xl text-black/40 mb-10 leading-loose italic">
                                Our SaaS products are built on a shared foundation of security, scalability, and seamless integration.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <AdvantageItem 
                                    icon={ShieldCheck}
                                    title="Enterprise Security"
                                    desc="SSO, RBAC, and data encryption come standard across our entire suite."
                                />
                                <AdvantageItem 
                                    icon={Globe}
                                    title="Global Scalability"
                                    desc="Hosted on distributed edges to ensure low-latency access for your global team."
                                />
                                <AdvantageItem 
                                    icon={Zap}
                                    title="Rapid Deployment"
                                    desc="Transition from demo to production in days, not months, with our pre-built rails."
                                />
                                <AdvantageItem 
                                    icon={Users}
                                    title="Dedicated Support"
                                    desc="Direct access to the product engineers who built the platforms you rely on."
                                />
                            </div>
                        </div>
                        <div className="cloud-card flex-1 w-full bg-foreground border border-background/10 rounded-[3rem] p-16 text-background relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Rocket className="w-48 h-48" />
                             </div>
                             <div className="relative">
                                <h3 className="text-6xl font-black tracking-tighter mb-6 leading-none italic">BORN IN THE <br /> CLOUD</h3>
                                <p className="text-xl opacity-60 font-medium mb-12">Every Mithtech product is engineered for zero-maintenance and 99.9% availability.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-primary" /> Multi-Tenant Architecture</li>
                                    <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-primary" /> API-First Philosophy</li>
                                    <li className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-primary" /> Serverless Infrastructure</li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection 
                title="Ready to elevate your business?" 
                description="Join hundreds of enterprises already scaling with Mithtech SaaS solutions. Let's find the right fit for your workflow."
                buttonText="Talk to a Product Expert"
                buttonHref="/contact"
            />
        </div>
    );
}

function AdvantageItem({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="advantage-item space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-xl text-black uppercase tracking-tight">{title}</h4>
            <p className="text-base text-black/40 italic leading-loose">{desc}</p>
        </div>
    );
}

function ProductCard({ icon: Icon, logo, logoBg, title, tagline, description, products, stats, href }: { icon?: any, logo?: string, logoBg?: string, title: string, tagline: string, description: string, products: string[], stats: string, href?: string }) {
    return (
        <div className="product-card flex flex-col gap-8 p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group">
            <div className="flex justify-between items-start">
                <div className={`w-20 h-20 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center group-hover:scale-110 transition-all duration-500 overflow-hidden p-4 shadow-sm group-hover:bg-white`}>
                    {logo ? (
                        <div className="relative w-full h-full">
                            <Image 
                                src={logo} 
                                alt={title} 
                                fill 
                                className="object-contain transition-all duration-500"
                            />
                        </div>
                    ) : (
                        Icon && <Icon className="w-8 h-8 text-black" />
                    )}
                </div>
                <div className="px-4 py-1.5 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-widest bg-black/[0.02] text-black/40 group-hover:text-white/40 group-hover:border-white/10 transition-colors">
                    {stats}
                </div>
            </div>
            
            <div>
                <span className="text-[10px] font-bold text-[#00aaff] uppercase tracking-[0.3em] mb-2 block">{tagline}</span>
                <h3 className="text-3xl font-extrabold tracking-tight mb-4 text-black group-hover:text-white transition-colors uppercase">{title}</h3>
                <p className="text-black/50 text-base leading-loose mb-8 h-20 line-clamp-3 group-hover:text-white/60 transition-colors italic">{description}</p>
                
                <div className="flex flex-wrap gap-2">
                    {products.map((p, i) => (
                        <span key={i} className="px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-black/60 text-[10px] font-bold uppercase tracking-wider group-hover:bg-white/10 group-hover:text-white/80 transition-colors">{p}</span>
                    ))}
                </div>
            </div>

            <div className="pt-8 mt-auto border-t border-black/5 group-hover:border-white/10 flex items-center justify-between transition-colors">
                {href ? (
                    <Link href={href} className="flex items-center gap-2 text-sm font-black italic text-black group-hover:text-[#00aaff] transition-colors group/link">
                        View Product <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                ) : (
                    <span className="text-sm font-black italic opacity-30 group-hover:text-white/30">Coming Soon</span>
                )}
                <MousePointer2 className="w-5 h-5 opacity-5 group-hover:opacity-20 transition-opacity text-white" />
            </div>
        </div>
    );
}
