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
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProductFAQ } from "@/components/seo/ProductFAQ";
import { generatePlatformFaqs } from "@/lib/seo/faq-generator";

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
        <div ref={containerRef} className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-12 md:pt-16 md:pb-24 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        ENTERPRISE CONTENT ECOSYSTEMS
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase break-words">
                        WORDPRESS <br />
                        <span className="text-[#00aaff]">EXPERTS</span>
                    </h1>
                    <p className="text-xl leading-loose text-black/50 max-w-2xl mb-10 italic">
                        Scalable, secure, and high-performance WordPress solutions for global brands. From bespoke themes to Headless WP architectures, we build content engines that scale.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                            Book UX & SEO Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why WordPress Section */}
            <section className="py-12 sm:py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">The World's Most Powerful CMS</h2>
                        <p className="text-xl text-black/40 leading-loose italic max-w-3xl">
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
            <section className="py-12 sm:py-24 border-b bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Enterprise WordPress Solutions</h2>
                        <p className="text-xl text-black/40 leading-loose italic">We push the boundaries of WordPress to deliver high-performance, scalable web ecosystems.</p>
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

            <ProductFAQ
                productName="WordPress"
                faqs={generatePlatformFaqs({
                    name: "WordPress",
                    category: "enterprise content management platform",
                    description: "manage content-rich websites, editorial workflows, SEO-driven pages, and scalable digital experiences",
                    features: [
                        "content management flexibility",
                        "SEO-friendly publishing",
                        "custom theme and plugin development",
                        "headless WordPress support",
                        "performance optimization",
                    ],
                    implementationFocus: "WordPress architecture, custom theme development, performance optimization, and enterprise publishing workflows",
                    integrations: ["marketing tools", "commerce systems", "search platforms", "analytics suites", "custom APIs"],
                    customFaqs: [
                        {
                            question: "Is WordPress still a good choice for enterprise websites?",
                            answer: "Yes. WordPress remains a strong enterprise option when it is architected properly. With custom development, performance tuning, and the right security controls, it can support large editorial teams, multilingual sites, and high-traffic digital experiences.",
                        },
                    ],
                })}
            />

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
        <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] border border-black/[0.05] bg-white hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg shadow-black/5 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h3>
            <p className="text-black/50 text-lg leading-loose">{description}</p>
        </div>
    );
}

function SolutionCategory({ icon: Icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
    return (
        <div className="solution-category flex flex-col gap-8 p-6 sm:p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group min-h-full">
            <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:bg-white transition-colors">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-black tracking-tight uppercase group-hover:text-white transition-colors">{title}</h3>
            <p className="text-black/50 text-lg font-medium leading-loose group-hover:text-white/60 transition-colors italic">{description}</p>
            <ul className="space-y-4 pt-6 border-t border-black/5 group-hover:border-white/10 transition-colors mt-auto">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-base font-medium text-black/70 group-hover:text-white/80 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff]" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}
