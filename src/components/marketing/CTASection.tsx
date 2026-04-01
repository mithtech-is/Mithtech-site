"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}

export function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
    return (
        <section className="relative overflow-hidden bg-white py-24 text-black sm:py-32 border-t border-black/[0.05]">
            <div className="absolute inset-0 -z-10 opacity-[0.03]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#000_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Next Steps</span>
                    </div>

                    <h2 className="mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase leading-[1.1]">
                        {title}
                    </h2>

                    <p className="mx-auto mb-12 max-w-2xl text-lg leading-loose text-black/50 md:text-xl italic">
                        {description}
                    </p>

                    <div className="flex w-full items-center justify-center gap-x-6">
                        <Button asChild size="lg" className="group h-14 rounded-full bg-black px-10 text-lg font-bold text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95 shadow-2xl shadow-black/10">
                            <Link href={buttonHref}>
                                {buttonText} <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
