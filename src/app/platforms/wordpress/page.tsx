"use client";

import { useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { 
    Layout, 
    Search, 
    Globe, 
    PenTool, 
    Settings, 
    Zap, 
    ShieldCheck, 
    Share2,
    Monitor,
    Cpu,
    Lock,
    ShoppingCart
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WordPressPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const featureGridRef = useRef<HTMLDivElement>(null);
    const solutionGridRef = useRef<HTMLDivElement>(null);
    const trustSectionRef = useRef<HTMLDivElement>(null);

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

            // WP Solutions
            gsap.fromTo(".solution-category", 
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

            // Trust Section
            gsap.fromTo(".trust-content > *", 
                { autoAlpha: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: trustSectionRef.current,
                        start: "top bottom-=100",
                    },
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(".trust-visual", 
                { autoAlpha: 0, scale: 0.9, y: 30 },
                {
                    scrollTrigger: {
                        trigger: trustSectionRef.current,
                        start: "top bottom-=150",
                    },
                    autoAlpha: 1,
                    scale: 1,
                    y: 0,
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
                        ENTERPRISE CONTENT ECOSYSTEMS
                    </span>
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                        WORDPRESS <br />
                        <span className="text-muted-foreground">EXPERTS</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                        Scalable, secure, and high-performance WordPress solutions for global brands. From bespoke themes to Headless WP architectures, we build content engines that scale.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full border border-black px-8 text-lg h-14 hover:scale-105 active:scale-95 transition-transform">
                            <Link href="/contact">Book UX & SEO Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why WordPress Section */}
            <section className="py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">The World's Most Powerful CMS</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Powering over 40% of the internet, WordPress offers unparalleled flexibility and a massive ecosystem of tools for enterprise-scale content management.
                        </p>
                    </div>
                    <div ref={featureGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={PenTool} 
                            title="Unmatched Flexibility" 
                            description="Custom post types and taxonomies designed to fit your unique content structure perfectly." 
                        />
                        <FeatureCard 
                            icon={Search} 
                            title="SEO Powerhouse" 
                            description="Deeply optimized for search engines with advanced meta management and schema integration." 
                        />
                        <FeatureCard 
                            icon={Lock} 
                            title="Hardened Security" 
                            description="Enterprise-grade security protocols, WAF integration, and 24/7 monitoring to protect your assets." 
                        />
                        <FeatureCard 
                            icon={Zap} 
                            title="High Velocity" 
                            description="Fast authoring workflows that allow marketing teams to publish at the speed of business." 
                        />
                    </div>
                </div>
            </section>

            {/* WP Solutions Section */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Enterprise WordPress Solutions</h2>
                        <p className="text-xl text-muted-foreground">We push the boundaries of WordPress to deliver high-performance, scalable web ecosystems.</p>
                    </div>

                    <div ref={solutionGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <SolutionCategory 
                            icon={Layout}
                            title="Bespoke Design & Dev"
                            description="Unique, high-performance themes built from the ground up."
                            features={["Lightweight, custom code", "Mobile-first experience", "Pixel-perfect UI design", "Optimized asset delivery"]}
                        />
                        <SolutionCategory 
                            icon={Zap}
                            title="Headless WordPress"
                            description="WordPress as a CMS, Next.js or React as the frontend."
                            features={["Blazing fast page loads", "Enhanced security", "Modern frontend stack", "Decoupled architecture"]}
                        />
                        <SolutionCategory 
                            icon={Settings}
                            title="Custom Plugin Engineering"
                            description="Specialized functionality without the bloat of off-the-shelf plugins."
                            features={["Scalable logic", "API integrations", "Performance focused", "Long-term maintainability"]}
                        />
                        <SolutionCategory 
                            icon={ShoppingCart}
                            title="WooCommerce Scale"
                            description="Scaling WordPress commerce for high-traffic environments."
                            features={["Custom checkout logic", "Large catalog optimization", "ERP/CRM synchronization", "Multi-region setup"]}
                        />
                        <SolutionCategory 
                            icon={Monitor}
                            title="Editorial Platforms"
                            description="Optimized for high-volume publishing and news sites."
                            features={["Gutenberg block systems", "Advanced search", "Performance caching", "Ad-tech integration"]}
                        />
                        <SolutionCategory 
                            icon={Cpu}
                            title="Performance Optimization"
                            description="Turning slow sites into Core Web Vital winners."
                            features={["Database optimization", "Server-side caching", "Asset minification", "CDN orchestration"]}
                        />
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section ref={trustSectionRef} className="py-24 border-b bg-foreground text-background overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 trust-content">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic">Built for Reliability</h2>
                            <p className="text-xl text-background/80 mb-10 leading-relaxed">
                                Our enterprise WordPress stack is designed to handle millions of visitors while maintaining 99.9% uptime and top-tier security.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg">Managed Security</h4>
                                        <p className="text-sm text-background/60">Automated updates, constant threat scanning, and deep level hardening.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Globe className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg">Global Content Delivery</h4>
                                        <p className="text-sm text-background/60">Global CDN integration ensuring fast access for users anywhere in the world.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="trust-visual flex-1 w-full bg-background/5 border border-background/10 rounded-3xl p-12 backdrop-blur-sm">
                             <div className="relative">
                                <div className="text-center">
                                    <div className="text-8xl font-black mb-4 tracking-tighter opacity-10">WP</div>
                                    <div className="text-2xl font-bold italic mb-4">Optimized for Conversion</div>
                                    <p className="text-background/60 italic">Because a beautiful site that is slow doesn't convert.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection 
                title="Own your digital presence" 
                description="Scale your content and reach without being tied to restrictive platforms. Let's build your enterprise WordPress solution."
                buttonText="Start Your Project"
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

function SolutionCategory({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
    return (
        <div className="solution-category flex flex-col gap-6 p-10 rounded-3xl border bg-card/30 hover:bg-card transition-all duration-500 bg-background/50 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter">{title}</h3>
            <p className="text-muted-foreground font-medium text-sm leading-relaxed">{description}</p>
            <ul className="space-y-3 pt-4">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-foreground/50 uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}
