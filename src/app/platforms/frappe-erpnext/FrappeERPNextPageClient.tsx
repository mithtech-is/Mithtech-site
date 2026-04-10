"use client";

import { useRef } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import {
    Layers,
    Box,
    Users,
    BarChart,
    Settings,
    ShieldCheck,
    Zap,
    Globe,
    MessageSquare,
    ShoppingCart,
    GraduationCap,
    Building2,
    Monitor,
    Link2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProductFAQ } from "@/components/seo/ProductFAQ";
import { generatePlatformFaqs } from "@/lib/seo/faq-generator";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
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

function SolutionCategory({ icon: Icon, title, description, products, capabilities }: { icon: any, title: string, description: string, products: string[], capabilities: string[] }) {
    return (
        <div className="solution-category flex flex-col gap-8 p-6 sm:p-10 rounded-[3.5rem] border border-black/[0.05] bg-white hover:bg-black transition-all duration-500 hover:translate-y-[-8px] shadow-sm hover:shadow-2xl group min-h-full">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-black border border-black/[0.05] flex items-center justify-center text-[#00aaff] shadow-lg group-hover:bg-white transition-colors shrink-0">
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight uppercase group-hover:text-white transition-colors">{title}</h3>
            </div>

            <div className="flex-grow">
                <p className="text-black/50 mb-6 font-medium leading-loose group-hover:text-white/60 transition-colors italic text-sm sm:text-base">{description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {products.map((p, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-black text-[#00aaff] text-[10px] font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors">{p}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-black/5 group-hover:border-white/10 transition-colors mt-auto">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 group-hover:text-white/40 transition-colors">Core Capabilities</h4>
                <ul className="grid grid-cols-1 gap-3">
                    {capabilities.map((c, i) => (
                        <li key={i} className="flex items-center gap-3 text-[13px] font-medium text-black/70 group-hover:text-white/80 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff] shrink-0" />
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function FrappeERPNextPageClient() {
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
        <div ref={containerRef} className="flex flex-col w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-12 sm:pb-20 md:pt-16 md:pb-40 border-b overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 hero-content">
                    <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                        ENTERPRISE ECOSYSTEM EXPERTS
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[0.9] uppercase break-words">
                        FRAPPE & <br />
                        <span className="text-[#00aaff]">ERPNEXT</span>
                    </h1>
                    <p className="text-xl leading-loose text-black/50 max-w-2xl mb-10">
                        Build, scale, and automate your entire business on the world&apos;s most flexible open-source framework. Mithtech provides expert implementation, customization, and managed hosting for the complete Frappe ecosystem.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95">
                            Schedule Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Frappe Section */}
            <section className="py-12 sm:py-24 bg-muted/30 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">The Power of the Frappe Ecosystem</h2>
                        <p className="text-xl text-black/60 leading-loose max-w-4xl font-medium">
                            Frappe isn&apos;t just a framework; it&apos;s a complete, <strong>open-source business operating system</strong> designed for rapid development and enterprise-grade reliability. As a leading <strong>Frappe development company in India</strong>, we help organizations transition from costly proprietary ERPs to agile, scalable systems without per-user licensing fees. From <strong>ERPNext implementations</strong> for HR and Payroll to fully customized <strong>Frappe web apps</strong>, you own your data and code.
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
            <section className="py-12 sm:py-24 border-b bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-extrabold tracking-tight text-black mb-8 uppercase">Mithtech Frappe Solutions</h2>
                        <p className="text-xl text-black/40 leading-loose">We engineer specialized solutions across every business vertical using the Frappe stack.</p>
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

            <ProductFAQ
                productName="Frappe & ERPNext"
                faqs={generatePlatformFaqs({
                    name: "Frappe & ERPNext",
                    category: "open-source business operating system",
                    description: "run finance, HR, sales, operations, support, and custom business apps on a unified framework",
                    features: [
                        "ERP and modular app architecture",
                        "custom workflow automation",
                        "open-source ownership",
                        "role-based access and approvals",
                        "reporting and dashboards",
                    ],
                    implementationFocus: "ERPNext implementation, Frappe app development, data migration, managed hosting, and business process customization",
                    integrations: ["payment gateways", "telephony systems", "commerce storefronts", "marketing tools", "custom internal software"],
                    customFaqs: [
                        {
                            question: "Is Frappe & ERPNext suitable for companies that need customization?",
                            answer: "Yes. Frappe is especially strong when businesses need custom modules, workflows, approvals, and reports. Mithtech uses that flexibility to shape ERPNext around your actual processes instead of forcing teams into generic software behavior.",
                        },
                    ],
                })}
            />

            <CTASection
                title="Consolidate your business today"
                description="Move away from fragmented spreadsheets and expensive proprietary systems. Let&apos;s architecture your unified Frappe ecosystem."
                buttonText="Transform Your Operations"
                buttonHref="/contact"
            />
        </div>
    );
}
