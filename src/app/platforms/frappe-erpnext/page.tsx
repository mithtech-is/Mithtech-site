"use client";

import { useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import {
    Layers,
    CheckCircle2,
    ArrowRight,
    Box,
    Users,
    BarChart,
    Settings,
    ShieldCheck,
    Zap,
    Globe,
    Search,
    PenTool,
    MessageSquare,
    ShoppingCart,
    GraduationCap,
    Calendar,
    Building2,
    Monitor,
    Link2
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

export default function FrappeERPNextPage() {
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

            // Solution Grid
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
                        ENTERPRISE ECOSYSTEM EXPERTS
                    </span>
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                        FRAPPE & <br />
                        <span className="text-muted-foreground">ERPNEXT</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                        Build, scale, and automate your entire business on the world's most flexible open-source framework. Mithtech provides expert implementation, customization, and managed hosting for the complete Frappe ecosystem.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full border border-foreground px-8 text-lg h-14 hover:scale-105 active:scale-95 transition-transform">
                            <Link href="/contact">Schedule Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What is Frappe Section */}
            <section className="py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">The Power of the Frappe Ecosystem</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Frappe isn't just a framework; it's a complete software stack designed for rapid development and enterprise-grade reliability.
                        </p>
                    </div>
                    <div ref={featureGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Layers}
                            title="Frappe Framework"
                            description="A full-stack, battery-included Python/JS framework that handles metadata, UI, and database orchestration seamlessly."
                        />
                        <FeatureCard
                            icon={Settings}
                            title="ERPNext"
                            description="The flagship app built on Frappe, covering everything from Finance and HR to Manufacturing and Retail."
                        />
                        <FeatureCard
                            icon={Box}
                            title="Modular Apps"
                            description="Plugin-based architecture that allows you to add or build custom specialized applications without touching the core."
                        />
                        <FeatureCard
                            icon={Zap}
                            title="Open Source"
                            description="100% open-source with no per-user licensing, giving you ultimate freedom and data sovereignty."
                        />
                    </div>
                </div>
            </section>

            {/* Mithtech Frappe Solutions - CORE SECTION */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Mithtech Frappe Solutions</h2>
                        <p className="text-xl text-muted-foreground">We engineer specialized solutions across every business vertical using the Frappe stack.</p>
                    </div>

                    <div ref={solutionGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <SolutionCategory
                            icon={Zap}
                            title="Price Nexus"
                            description="Advanced real-time pricing intelligence and dynamic market positioning engine."
                            products={["Price Engine", "Market Intelligence"]}
                            capabilities={["Dynamic pricing algorithms", "Competitor tracking", "Margin protection", "AI-driven insights"]}
                        />
                        <SolutionCategory
                            icon={MessageSquare}
                            title="Telecalling in Frappe"
                            description="Seamlessly integrated omnichannel telephony and agent management for Frappe."
                            products={["Telephony Suite", "Call Center Module"]}
                            capabilities={["Click-to-call integration", "Call recording & logs", "Lead assignment logic", "Agent performance analytics"]}
                        />
                        <SolutionCategory
                            icon={ShoppingCart}
                            title="Polygin"
                            description="Unified commerce suite designed for hyper-growth digital brands."
                            products={["Polygin Core", "Omnichannel Connector"]}
                            capabilities={["Multi-store synchronization", "Global inventory usage", "Brand orchestration", "Headless commerce support"]}
                        />
                        <SolutionCategory
                            icon={Users}
                            title="Sales & Relationship"
                            description="Modern CRM and sales orchestration built on Frappe."
                            products={["Frappe CRM", "ERPNext Sales", "Customer Portal"]}
                            capabilities={["Lead pipeline management", "Omnichannel communication", "Sales analytics", "Contract management"]}
                        />
                        <SolutionCategory
                            icon={ShieldCheck}
                            title="HR & Payroll"
                            description="A complete HRMS to manage your people and payroll."
                            products={["Frappe HR", "ERPNext Payroll"]}
                            capabilities={["Attendance & Leave", "Performance tracking", "Expense management", "Compliance reporting"]}
                        />
                        <SolutionCategory
                            icon={MessageSquare}
                            title="Service & Support"
                            description="Deliver exceptional support with modern ticketing."
                            products={["Frappe Helpdesk", "ERPNext Support"]}
                            capabilities={["Unified inbox", "SLA management", "Self-service portals", "Automated workflows"]}
                        />
                        <SolutionCategory
                            icon={ShoppingCart}
                            title="Commerce & Retail"
                            description="Omnichannel commerce integrated with your backend."
                            products={["ERPNext POS", "B2C Ecommerce", "B2B Marketplace"]}
                            capabilities={["Inventory synchronization", "Payment gateway integration", "Order orchestration", "Retail analytics"]}
                        />
                        <SolutionCategory
                            icon={BarChart}
                            title="Operations & Finance"
                            description="The backbone of your business, automated and integrated."
                            products={["ERPNext", "Frappe Books", "Frappe Insights"]}
                            capabilities={["Real-time accounting", "Supply chain management", "Manufacturing & MRP", "Advanced BI dashboards"]}
                        />
                        <SolutionCategory
                            icon={GraduationCap}
                            title="Learning & Education"
                            description="Modern learning management for schools and teams."
                            products={["Frappe LMS", "ERPNext Education"]}
                            capabilities={["Course management", "Student tracking", "Certification engine", "Interactive assessments"]}
                        />
                        <SolutionCategory
                            icon={Building2}
                            title="Asset & Property"
                            description="Specialized management for physical and digital assets."
                            products={["Asset Management", "Property Management"]}
                            capabilities={["Lease automation", "Maintenance tracking", "Asset lifecycle", "Resource allocation"]}
                        />
                        <SolutionCategory
                            icon={Monitor}
                            title="Website & CMS"
                            description="High-performance web presence built on Frappe."
                            products={["Frappe Builder", "Frappe Job Board"]}
                            capabilities={["Visual builder", "Frappe-integrated", "Lead capture", "Responsive design"]}
                        />
                        <SolutionCategory
                            icon={Link2}
                            title="Specialized Solutions"
                            description="Industry-specific modules for unique verticals."
                            products={["Frappe Health", "Loan Management", "Prawaas"]}
                            capabilities={["Patient records", "Loan lifecycle", "Travel management", "Custom Frappe apps"]}
                        />
                    </div>
                </div>
            </section>

            {/* Why Mithtech */}
            <section className="py-24 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Mithtech for Frappe & ERPNext?</h2>
                        <p className="text-lg text-muted-foreground">We are more than implementers; we are strategic partners in your digital transformation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Deep Technical Expertise</h3>
                            <p className="text-muted-foreground italic">Over a decade of experience in Python frameworks and enterprise database architecture.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Search className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Automation-First Approach</h3>
                            <p className="text-muted-foreground italic">We don't just replicate your manual processes; we re-engineer them for maximum efficiency.</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Global Implementation</h3>
                            <p className="text-muted-foreground italic">Successfully deployed Frappe solutions for companies across India, UAE, and Europe.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Consolidate your business today"
                description="Move away from fragmented spreadsheets and expensive proprietary systems. Let's architecture your unified Frappe ecosystem."
                buttonText="Transform Your Operations"
                buttonHref="/contact"
            />
        </div>
    );
}

function DevItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="dev-item p-6 rounded-2xl border border-background/20 bg-background/5 hover:bg-background/10 transition-colors">
            <h4 className="font-bold text-lg mb-2">{title}</h4>
            <p className="text-sm text-background/60">{desc}</p>
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

function SolutionCategory({ icon: Icon, title, description, products, capabilities }: { icon: any, title: string, description: string, products: string[], capabilities: string[] }) {
    return (
        <div className="solution-category flex flex-col gap-8 p-10 rounded-[2.5rem] border bg-card/30 hover:bg-card transition-all duration-500 border-dashed hover:border-solid hover:border-foreground/20 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter">{title}</h3>
            </div>

            <div>
                <p className="text-muted-foreground mb-6 font-medium leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {products.map((p, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">{p}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-foreground/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Core Capabilities</h4>
                <ul className="grid grid-cols-1 gap-3">
                    {capabilities.map((c, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
