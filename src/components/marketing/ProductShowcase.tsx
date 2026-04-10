"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Zap, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

import { ProductFAQ } from "@/components/seo/ProductFAQ";
import { generateProductFaqs } from "@/lib/seo/faq-generator";

interface ProductShowcaseProps {
    product: Product;
}

export function ProductShowcase({ product }: ProductShowcaseProps) {
    const isProprietary = product.type === 'proprietary';

    return (
        <div className="flex flex-col w-full min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-black/[0.05]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-24 h-24 rounded-3xl bg-white shadow-2xl border border-black/[0.05] flex items-center justify-center mb-10 p-5"
                        >
                            <Image
                                src={product.icon}
                                alt={`MithTech ${product.title} Enterprise Business Solution Icon`}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                                    {isProprietary ? 'Mithtech Product' : `${product.category} Expertise`}
                                </span>
                            </div>
                            
                            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-6xl lg:text-7xl mb-10 leading-[1.1] break-words uppercase">
                                {product.title}
                            </h1>

                            {/* Click to see process button */}
                            {product.processHref && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-10"
                                >
                                    <Button asChild variant="outline" className="rounded-full shadow-lg h-12 px-8 border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-all duration-300">
                                        <a href="#use-case">
                                            <Sparkles className="mr-2 h-5 w-5" /> Explore the Workflow
                                        </a>
                                    </Button>
                                </motion.div>
                            )}

                            <p className="text-xl md:text-2xl text-black/50 leading-loose mb-14 max-w-3xl mx-auto break-words italic">
                                {product.longDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full">
                                {product.externalHref ? (
                                    <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold transition-[transform,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] w-full sm:w-auto">
                                        <a href={product.externalHref} target="_blank" rel="noopener noreferrer">
                                            {isProprietary ? `Access ${product.title}` : `Visit Official ${product.title} Site`} <ExternalLink className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                ) : (
                                    <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold transition-[transform,box-shadow] duration-150 ease-[var(--ease-out)] active:scale-[0.97] w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                        <Link href="/contact">
                                            {isProprietary ? `Get ${product.title}` : `Deploy ${product.title} for Your Business`} <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}
                                <Button variant="outline" asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold transition-[transform,box-shadow,border-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97] w-full sm:w-auto">
                                    <Link href="/contact">
                                        {isProprietary ? 'Consult Our Experts' : `Mithtech Expert Services`} <Zap className="ml-2 h-5 w-5 fill-primary" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Use Case Section */}
            <section id="use-case" className="py-12 sm:py-24 border-b border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Real-world Implementation</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-10 tracking-tight uppercase">How it works in action</h2>
                        <div className="bg-white border border-black/[0.05] rounded-[2.5rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00aaff]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <p className="text-2xl sm:text-3xl leading-loose text-black/80 mb-10 italic font-medium">
                                    &quot;{product.useCase}&quot;
                                </p>
                                
                                {product.slug === 'polygin' && (
                                    <div className="mt-12 p-8 bg-black/[0.02] rounded-3xl border border-black/[0.05] flex flex-col md:flex-row items-center gap-8">
                                        <div className="flex-1 text-center md:text-left">
                                            <h4 className="text-xl font-extrabold text-black mb-2 tracking-tight uppercase">Featured Client: Polemarch</h4>
                                            <p className="text-black/50 text-base leading-loose italic">
                                                Polemarch uses Polygin to automate their entire investor relation cycle and lead nurturing through WhatsApp.
                                            </p>
                                        </div>
                                        <Button asChild className="h-14 px-10 rounded-full bg-black text-white hover:bg-black/80 transition-all font-bold shadow-xl active:scale-95">
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=918277540332&text=Initiate+Bot&type=phone_number&app_absent=0"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <PlayCircle className="mr-2 h-5 w-5 text-[#00aaff]" /> See the Workflow
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="w-full">
                            <h2 className="text-4xl font-extrabold text-black mb-12 tracking-tight uppercase">
                                {isProprietary ? `What makes ${product.title} stand out?` : `How we empower your business with ${product.title}`}
                            </h2>
                            <div className="grid gap-6">
                                {product.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                                        className="flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-black/[0.06] transition-all duration-300 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 font-sans"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 className="h-6 w-6 text-[#00aaff] shrink-0" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-xl text-black tracking-tight leading-relaxed uppercase">{feature}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative min-h-[450px] py-16 sm:py-20 rounded-[2.5rem] overflow-hidden border border-black/[0.05] shadow-2xl bg-black flex items-center justify-center group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                            <div className="relative z-10 text-center p-6 sm:p-12 w-full">
                                <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/30 shadow-2xl group-hover:scale-110 transition-transform p-4">
                                    <Image
                                        src={product.icon}
                                        alt={`MithTech ${product.title} Implementation & Automation`}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight uppercase leading-tight">
                                    {isProprietary ? 'Ready to get started?' : `Need help with ${product.title}?`}
                                </h3>
                                <p className="text-white/60 mb-10 max-w-md mx-auto text-sm sm:text-base leading-loose italic px-4">
                                    {isProprietary
                                        ? `Join thousands of businesses already using ${product.title} to optimize their operations.`
                                        : `Our experts can help you deploy, customize and automate ${product.title} for your specific needs.`}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                                    {product.externalHref && (
                                        <Button asChild variant="outline" className="rounded-full px-10 h-14 text-sm font-bold border-white/20 text-white hover:bg-white hover:text-black transition-all active:scale-95 w-full sm:w-auto uppercase tracking-widest">
                                            <a href={product.externalHref} target="_blank" rel="noopener noreferrer">
                                                Official {product.title}
                                            </a>
                                        </Button>
                                    )}
                                    <Button asChild className="rounded-full px-10 h-14 text-sm font-bold bg-black text-white hover:bg-black/90 hover:scale-105 transition-all active:scale-95 w-full sm:w-auto uppercase tracking-widest shadow-xl shadow-black/10">
                                        <Link href="/contact">{isProprietary ? 'Start Now' : 'Consult Us'}</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product FAQ Section */}
            <ProductFAQ faqs={generateProductFaqs(product)} productName={product.title} />

            {/* Redirect Notice */}
            <section className="py-12 sm:py-24 bg-white border-t border-black/[0.05]">
                <div className="container mx-auto text-center px-4">
                    <div className="max-w-2xl mx-auto flex flex-col items-center">
                        <p className="text-black/40 mb-10 italic text-base leading-loose font-sans">
                            {isProprietary
                                ? `Mithtech is proud to offer ${product.title} as part of our core product suite, providing seamless integration and dedicated support.`
                                : `We provide the hosting, implementation, and expert automation support for ${product.title}, ensuring your business gets the most out of this powerful platform.`}
                        </p>
                        <div className="flex items-center gap-4 border border-black/5 rounded-full px-6 py-3 bg-black/[0.01]">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/assets/mithtech-white-logo.png"
                                    alt="Mith.tech - Official Enterprise Digital Transformation Logo India"
                                    width={100}
                                    height={25}
                                    className="opacity-60 grayscale brightness-0"
                                />
                                <div className="h-4 w-px bg-black/10 mx-2" />
                                <span className="text-black/30 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                                    {isProprietary ? 'Core Provider' : 'Partner'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
