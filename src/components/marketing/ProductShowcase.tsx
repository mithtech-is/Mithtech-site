"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Zap, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductShowcaseProps {
    product: Product;
}

export function ProductShowcase({ product }: ProductShowcaseProps) {
    const isProprietary = product.type === 'proprietary';

    return (
        <div className="flex flex-col w-full min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden border-b">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-24 h-24 rounded-3xl bg-white shadow-xl border flex items-center justify-center mb-8 p-4"
                        >
                            <Image
                                src={product.icon}
                                alt={product.title}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                                <Zap className="mr-2 h-3.5 w-3.5 fill-primary" />
                                {isProprietary ? 'Mithtech Product' : `${product.category} Expertise`}
                            </div>
                            
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-foreground">
                                {product.title}
                            </h1>

                            {/* Click to see process button */}
                            {product.processHref && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <Button asChild variant="secondary" className="rounded-full shadow-lg h-12 px-8 border border-primary/10 hover:bg-muted transition-all">
                                        <a href="#use-case">
                                            <Sparkles className="mr-2 h-5 w-5" /> Explore the Workflow
                                        </a>
                                    </Button>
                                </motion.div>
                            )}

                            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                                {product.longDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {product.externalHref ? (
                                    <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold w-full sm:w-auto">
                                        <a href={product.externalHref} target="_blank" rel="noopener noreferrer">
                                            {isProprietary ? `Access ${product.title}` : `Visit Official ${product.title} Site`} <ExternalLink className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                ) : (
                                    <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                        <Link href="/contact">
                                            {isProprietary ? `Get ${product.title}` : `Deploy ${product.title} for Your Business`} <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}
                                <Button variant="outline" asChild size="lg" className="h-14 px-8 rounded-full text-lg font-semibold w-full sm:w-auto">
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
            <section id="use-case" className="py-24 border-b bg-muted/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                            Real-world Implementation
                        </div>
                        <h2 className="text-4xl font-bold mb-8">How it works in action</h2>
                        <div className="bg-background border rounded-[2.5rem] p-10 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />
                            <div className="relative z-10">
                                <p className="text-2xl leading-relaxed text-foreground/80 mb-10 italic font-medium">
                                    &quot;{product.useCase}&quot;
                                </p>
                                
                                {product.slug === 'polygin' && (
                                    <div className="mt-12 p-8 bg-muted/40 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center gap-8">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold mb-2">Featured Client: Polemarch</h4>
                                            <p className="text-muted-foreground">
                                                Polemarch uses Polygin to automate their entire investor relation cycle and lead nurturing through WhatsApp.
                                            </p>
                                        </div>
                                        <Button asChild className="h-14 px-8 rounded-full shadow-xl">
                                            <a
                                                href="https://api.whatsapp.com/send/?phone=918277540332&text=Initiate+Bot&type=phone_number&app_absent=0"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <PlayCircle className="mr-2 h-5 w-5" /> Click here to see the process
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
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">
                                {isProprietary ? `What makes ${product.title} stand out?` : `How we empower your business with ${product.title}`}
                            </h2>
                            <div className="grid gap-6">
                                {product.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="mt-1">
                                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{feature}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-3xl overflow-hidden border shadow-2xl bg-black flex items-center justify-center group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                            <div className="relative z-10 text-center p-8">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                                    <Image
                                        src={product.icon}
                                        alt={product.title}
                                        width={48}
                                        height={48}
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {isProprietary ? 'Ready to get started?' : `Need help with ${product.title}?`}
                                </h3>
                                <p className="text-white/70 mb-8 max-w-sm mx-auto">
                                    {isProprietary
                                        ? `Join thousands of businesses already using ${product.title} to optimize their operations.`
                                        : `Our experts can help you deploy, customize and automate ${product.title} for your specific needs.`}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    {product.externalHref && (
                                        <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base font-medium border-white text-white hover:bg-white hover:text-black">
                                            <a href={product.externalHref} target="_blank" rel="noopener noreferrer">
                                                Visit Official {product.title}
                                            </a>
                                        </Button>
                                    )}
                                    <Button asChild variant={product.externalHref ? "outline" : "secondary"} className={`rounded-full px-8 h-12 text-base font-medium ${product.externalHref ? 'text-white border-white hover:bg-white hover:text-black' : ''} transition-colors`}>
                                        <Link href="/contact">{isProprietary ? 'Start Now' : 'Consult with Mithtech'}</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Redirect Notice */}
            <section className="py-20 bg-background border-t">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <p className="text-muted-foreground mb-6 italic">
                            {isProprietary
                                ? `Mithtech is proud to offer ${product.title} as part of our core product suite, providing seamless integration and dedicated support.`
                                : `We provide the hosting, implementation, and expert automation support for ${product.title}, ensuring your business gets the most out of this powerful platform.`}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <Image
                                src="/assets/mithtech-black-logo.png"
                                alt="Mith.tech Logo"
                                width={100}
                                height={26}
                                className="opacity-50"
                            />
                            <span className="text-muted-foreground text-sm">
                                {isProprietary ? 'Core Product Provider' : 'Professional Implementation Partner'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

