"use client";

import { CTASection } from "@/components/marketing/CTASection";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
    ArrowLeft,
    ArrowRight,
    TrendingUp,
    Users,
    BarChart3,
    Clock,
    Building2,
    Rocket,
    CheckCircle2,
    Sparkles,
    Globe,
    Shield,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } },
};

/* ------------------------------------------------------------------ */
/*  Client data                                                        */
/* ------------------------------------------------------------------ */

interface ClientProject {
    name: string;
    slug: string;
    industry: string;
    tagline: string;
    description: string;
    services: string[];
    results: { label: string; value: string; icon: React.ElementType }[];
    featured: boolean;
}

const FEATURED_CLIENTS: ClientProject[] = [
    {
        name: "Polemarch",
        slug: "polemarch",
        industry: "Fintech / Capital Markets",
        tagline: "Unlisted Shares & Pre-IPO Investment Platform",
        description:
            "Polemarch needed a secure, investor-grade digital platform to power unlisted share transactions and pre-IPO opportunities at scale. Mithtech delivered a unified fintech ecosystem — a high-performance web application paired with a native mobile experience — engineered for regulatory compliance, real-time portfolio intelligence, and frictionless transaction workflows. The outcome: a platform that investors trust, and a business that scales.",
        services: [
            "Custom Web Application",
            "Mobile App (iOS & Android)",
            "Payment Gateway Integration",
            "Real-Time Portfolio Dashboard",
            "KYC & Compliance Modules",
            "Admin & Operations Panel",
        ],
        results: [
            { label: "Platform Uptime", value: "99.9%", icon: TrendingUp },
            { label: "Avg. Transaction Time", value: "<3s", icon: Clock },
            { label: "Active Investors", value: "2,500+", icon: Users },
            { label: "Monthly Volume", value: "15Cr+", icon: BarChart3 },
        ],
        featured: true,
    },
    {
        name: "Futura Sink",
        slug: "futura-sink",
        industry: "Manufacturing / Home & Kitchen",
        tagline: "Premium Kitchen Solutions, Digitally Transformed",
        description:
            "Futura Sink is synonymous with premium craftsmanship in kitchen products. They needed a digital presence that matched the quality of what they build. Mithtech delivered an integrated eCommerce platform with dealer management, automated product catalogues, and a customer experience that drives conversions. The result: new markets opened, operational overhead reduced, and a brand experience that converts browsers into buyers.",
        services: [
            "eCommerce Platform Development",
            "Product Catalogue & CMS",
            "Dealer Management Portal",
            "Inventory & Order Management",
            "SEO & Performance Optimisation",
            "Analytics Dashboard",
        ],
        results: [
            { label: "Online Revenue Growth", value: "180%", icon: TrendingUp },
            { label: "Page Load Speed", value: "<1.5s", icon: Clock },
            { label: "Dealer Network", value: "350+", icon: Users },
            { label: "Product Listings", value: "1,200+", icon: BarChart3 },
        ],
        featured: true,
    },
    {
        name: "Risitex",
        slug: "risitex",
        industry: "Textiles / B2B Commerce",
        tagline: "Scaling Textile Commerce Through Intelligent Automation",
        description:
            "Risitex was growing fast — but their legacy systems couldn't keep pace. Mithtech replaced fragmented workflows with a future-ready B2B commerce platform powered by ERPNext. Custom order management, automated GST invoicing, and end-to-end supply chain visibility — all on one platform. The transformation: order cycles shortened dramatically, costs contained, and a foundation built for 10x scale.",
        services: [
            "ERPNext Implementation",
            "B2B Order Management System",
            "Automated Invoicing & GST",
            "Supply Chain Dashboard",
            "Custom Reporting & BI",
            "Mobile-First Buyer Portal",
        ],
        results: [
            { label: "Order Processing", value: "3x Faster", icon: Clock },
            { label: "Operational Savings", value: "40%", icon: TrendingUp },
            { label: "Active Buyers", value: "800+", icon: Users },
            { label: "Monthly Orders", value: "5,000+", icon: BarChart3 },
        ],
        featured: true,
    },
];

const OTHER_CLIENTS: ClientProject[] = [
    {
        name: "3M",
        slug: "3m",
        industry: "Diversified Manufacturing / Enterprise",
        tagline: "Enterprise-Grade Internal Tool Development",
        description:
            "Mithtech collaborated with 3M to build specialised internal productivity tools and workflow automation modules that integrated seamlessly with their existing enterprise infrastructure — accelerating cross-departmental coordination across regional operations.",
        services: [
            "Custom Internal Tools",
            "Workflow Automation",
            "Systems Integration",
            "Performance Optimisation",
        ],
        results: [
            { label: "Workflow Efficiency", value: "+60%", icon: TrendingUp },
            { label: "Deployment Time", value: "4 Weeks", icon: Clock },
            { label: "Teams Onboarded", value: "12+", icon: Users },
            { label: "Processes Automated", value: "25+", icon: BarChart3 },
        ],
        featured: false,
    },
    {
        name: "Kinara Capital",
        slug: "kinara-capital",
        industry: "Financial Services / NBFC",
        tagline: "Powering Financial Inclusion Through Technology",
        description:
            "Kinara Capital, a leading NBFC empowering MSME lending, partnered with Mithtech to supercharge their digital lending workflows. Custom integrations, real-time reporting dashboards, and borrower engagement portals — built for speed, accuracy, and scale.",
        services: [
            "Lending Workflow Automation",
            "Custom Dashboard & Reporting",
            "API Integrations",
            "Borrower Engagement Portal",
        ],
        results: [
            { label: "Loan Processing", value: "2x Faster", icon: Clock },
            { label: "Data Accuracy", value: "99.5%", icon: TrendingUp },
            { label: "Branches Served", value: "100+", icon: Users },
            { label: "Reports Automated", value: "40+", icon: BarChart3 },
        ],
        featured: false,
    },
];

/* Scrolling logo data — duplicated for seamless infinite scroll */
const CLIENT_LOGOS = [
    { name: "Polemarch", initial: "P" },
    { name: "Futura Sink", initial: "FS" },
    { name: "Risitex", initial: "R" },
    { name: "3M", initial: "3M" },
    { name: "Kinara Capital", initial: "KC" },
    { name: "Polemarch", initial: "P" },
    { name: "Futura Sink", initial: "FS" },
    { name: "Risitex", initial: "R" },
    { name: "3M", initial: "3M" },
    { name: "Kinara Capital", initial: "KC" },
];

/* ------------------------------------------------------------------ */
/*  Scrolling Logo Marquee Component                                    */
/* ------------------------------------------------------------------ */

function LogoMarquee({ reverse = false }: { reverse?: boolean }) {
    return (
        <div className="flex gap-8 sm:gap-12 items-center w-max">
            {CLIENT_LOGOS.map((client, idx) => (
                <div
                    key={`${client.name}-${idx}`}
                    className="flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl border border-black/[0.04] bg-white hover:border-[#00aaff]/20 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 group shrink-0"
                >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black flex items-center justify-center text-white font-extrabold text-sm sm:text-base group-hover:bg-[#00aaff] transition-colors duration-300 shrink-0">
                        {client.initial}
                    </div>
                    <span className="text-lg sm:text-xl font-extrabold text-black/70 group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                        {client.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function ClientsPageClient() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors"
                >
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* ==================== HERO ==================== */}
            <section
                ref={heroRef}
                className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-40 border-b border-black/[0.05]"
            >
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                                Customer Success Stories
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl mb-10 leading-[1.1] uppercase"
                        >
                            See How Businesses{" "}
                            <br className="hidden sm:block" />
                            <span className="text-[#00aaff]">Grow with Mithtech.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-14 italic font-sans font-medium"
                        >
                            From fintech platforms to textile enterprises, our clients
                            don&apos;t just adopt technology — they gain a competitive edge. Explore the
                            measurable outcomes we deliver, together.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="#featured"
                                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] active:scale-95 uppercase tracking-widest shadow-xl shadow-black/10"
                            >
                                Explore Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-black/[0.02] hover:border-black/20 active:scale-95 uppercase tracking-widest"
                            >
                                Start Your Project
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* ==================== SCROLLING LOGO MARQUEE ==================== */}
            <section className="bg-black/[0.02] py-10 sm:py-14 border-b border-black/[0.05] overflow-hidden">
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                        Trusted by Forward-Thinking Organisations
                    </p>
                </div>
                <div className="hover-pause">
                    <div className="animate-marquee flex gap-8 sm:gap-12 w-max">
                        <LogoMarquee />
                        <LogoMarquee />
                    </div>
                </div>
            </section>

            {/* ==================== TRUST METRICS ==================== */}
            <section className="bg-black text-white py-14 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
                    >
                        {[
                            { value: "50+", label: "Projects Delivered", icon: Rocket },
                            { value: "98%", label: "Client Retention", icon: Shield },
                            { value: "15+", label: "Industries Served", icon: Globe },
                            { value: "3x", label: "Avg. ROI Improvement", icon: TrendingUp },
                        ].map((stat) => (
                            <motion.div key={stat.label} variants={fadeInUp}>
                                <stat.icon className="w-6 h-6 text-[#00aaff]/60 mx-auto mb-4" />
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00aaff] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ==================== FEATURED CLIENTS ==================== */}
            <section id="featured" className="bg-white py-16 sm:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16 sm:mb-24"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-6">
                            <Sparkles className="w-3 h-3 text-[#00aaff]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                                Featured Projects
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black mb-6 uppercase">
                            Transformations That{" "}
                            <span className="text-[#00aaff]">Deliver Results.</span>
                        </h2>
                        <p className="text-lg text-black/40 leading-loose italic max-w-2xl mx-auto font-sans">
                            Every engagement is a partnership. See how we architect solutions
                            that create measurable business impact.
                        </p>
                    </motion.div>

                    <div className="space-y-16 sm:space-y-24">
                        {FEATURED_CLIENTS.map((client, idx) => (
                            <motion.article
                                key={client.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: idx * 0.05,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="rounded-2xl sm:rounded-3xl border border-black/[0.06] bg-white overflow-hidden hover:border-black/15 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
                            >
                                {/* Client Header */}
                                <div className="relative bg-black text-white p-6 sm:p-10 lg:p-12 overflow-hidden">
                                    {/* Decorative background element */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00aaff]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00aaff]/10 transition-colors duration-700" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block mb-2">
                                                    {client.industry}
                                                </span>
                                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight">
                                                    {client.name}
                                                </h3>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#00aaff] w-fit backdrop-blur-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                                                Featured Project
                                            </span>
                                        </div>
                                        <p className="text-lg sm:text-xl font-medium text-white/60 italic max-w-3xl">
                                            {client.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Client Body */}
                                <div className="p-6 sm:p-10 lg:p-12">
                                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                                        {/* Left: Description + Services */}
                                        <div className="lg:col-span-3">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">
                                                The Challenge & Our Approach
                                            </h4>
                                            <p className="text-base sm:text-lg leading-loose text-black/60 mb-10">
                                                {client.description}
                                            </p>

                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">
                                                Solutions Delivered
                                            </h4>
                                            <motion.div
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="flex flex-wrap gap-2"
                                            >
                                                {client.services.map((service) => (
                                                    <motion.span
                                                        key={service}
                                                        variants={scaleIn}
                                                        className="rounded-full border border-black/[0.06] bg-black/[0.02] px-4 py-2 text-xs font-bold text-black/60 uppercase tracking-wider hover:border-[#00aaff]/20 hover:bg-[#00aaff]/[0.03] transition-colors"
                                                    >
                                                        {service}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </div>

                                        {/* Right: Results */}
                                        <div className="lg:col-span-2">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-6">
                                                Key Outcomes
                                            </h4>
                                            <motion.div
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                className="grid grid-cols-2 gap-4"
                                            >
                                                {client.results.map((result) => (
                                                    <motion.div
                                                        key={result.label}
                                                        variants={fadeInUp}
                                                        whileHover={{ scale: 1.03, y: -2 }}
                                                        className="rounded-2xl border border-black/[0.06] bg-black/[0.01] p-4 sm:p-5 text-center hover:border-[#00aaff]/20 hover:shadow-md transition-all duration-300"
                                                    >
                                                        <result.icon className="w-5 h-5 text-[#00aaff] mx-auto mb-3" />
                                                        <div className="text-xl sm:text-2xl font-extrabold text-black mb-1">
                                                            {result.value}
                                                        </div>
                                                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                                                            {result.label}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== WHY CLIENTS CHOOSE US ==================== */}
            <section className="bg-black text-white py-16 sm:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 uppercase">
                            Why Businesses{" "}
                            <span className="text-[#00aaff]">Choose Mithtech.</span>
                        </h2>
                        <p className="text-lg text-white/40 leading-loose italic max-w-2xl mx-auto font-sans">
                            It is not just what we build. It is how we partner.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {[
                            {
                                icon: Building2,
                                title: "Enterprise-Grade Delivery",
                                desc: "We bring the rigour of large consultancies with the agility of a focused team. Every project ships on time, on budget.",
                            },
                            {
                                icon: Shield,
                                title: "Zero Licensing Fees",
                                desc: "Scale from 10 users to 10,000 without per-seat costs multiplying. Open-source foundation, enterprise-grade execution.",
                            },
                            {
                                icon: CheckCircle2,
                                title: "Full Data Ownership",
                                desc: "Your infrastructure. Your data. No vendor lock-in, no surprise pricing changes, no artificial limitations.",
                            },
                            {
                                icon: Rocket,
                                title: "Rapid Go-Live",
                                desc: "Our proven implementation methodology means you see value in weeks, not months. Fast deployments without cutting corners.",
                            },
                            {
                                icon: Globe,
                                title: "Local Support, Global Standards",
                                desc: "Headquartered in Bangalore with world-class delivery standards. On-ground support when you need it most.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Measurable ROI",
                                desc: "Every solution we build comes with clear success metrics. We don't just implement — we ensure you see measurable returns.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#00aaff]/20 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-[#00aaff]" />
                                </div>
                                <h3 className="text-lg font-extrabold text-white mb-3 uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ==================== OTHER CLIENTS ==================== */}
            <section className="bg-white py-16 sm:py-24 lg:py-32 border-t border-black/[0.05]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16 sm:mb-24"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black mb-6 uppercase">
                            Trusted by{" "}
                            <span className="text-[#00aaff]">Industry Leaders.</span>
                        </h2>
                        <p className="text-lg text-black/40 leading-loose italic max-w-2xl mx-auto font-sans">
                            From multinational corporations to agile financial institutions,
                            our solutions power operations at every scale.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {OTHER_CLIENTS.map((client, idx) => (
                            <motion.article
                                key={client.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.15,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                whileHover={{ y: -4 }}
                                className="rounded-2xl sm:rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-8 lg:p-10 hover:border-black/15 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00aaff] block mb-2">
                                            {client.industry}
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight">
                                            {client.name}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base font-medium text-black/50 italic mb-4">
                                    {client.tagline}
                                </p>

                                <p className="text-sm sm:text-base leading-relaxed text-black/60 mb-8">
                                    {client.description}
                                </p>

                                {/* Services */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {client.services.map((service) => (
                                            <span
                                                key={service}
                                                className="rounded-full border border-black/[0.06] bg-black/[0.02] px-3 py-1.5 text-[10px] font-bold text-black/50 uppercase tracking-wider"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Results Grid */}
                                <div className="mt-auto grid grid-cols-2 gap-3">
                                    {client.results.map((result) => (
                                        <div
                                            key={result.label}
                                            className="rounded-xl border border-black/[0.06] bg-black/[0.01] p-3 sm:p-4 text-center hover:border-[#00aaff]/20 transition-colors"
                                        >
                                            <div className="text-lg sm:text-xl font-extrabold text-black mb-0.5">
                                                {result.value}
                                            </div>
                                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/40">
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== SECOND MARQUEE (Reverse Direction) ==================== */}
            <section className="bg-black/[0.02] py-10 sm:py-14 border-y border-black/[0.05] overflow-hidden">
                <div className="hover-pause">
                    <div className="animate-marquee-reverse flex gap-8 sm:gap-12 w-max">
                        <LogoMarquee reverse />
                        <LogoMarquee reverse />
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to become our next success story?"
                description="Every transformation begins with a conversation. Let our architects design a technology ecosystem tailored to your growth."
                buttonText="Start Your Project"
                buttonHref="/contact"
            />
        </div>
    );
}
