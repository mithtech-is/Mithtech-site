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
        <section className="relative overflow-hidden bg-foreground py-16 text-background sm:py-20 md:py-24 lg:py-32">
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/20 via-transparent to-transparent" />
                <div className="grid grid-cols-8 h-full w-full gap-4 p-4 opacity-10">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-background/20 rounded-sm" />
                    ))}
                </div>
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center flex flex-col items-center"
                >
                    <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        {title}
                    </h2>
                    <p className="mx-auto mb-10 mt-4 max-w-2xl text-base leading-7 text-background/80 sm:text-lg md:mb-12 md:mt-6 md:text-xl md:leading-8">
                        {description}
                    </p>
                    <div className="flex w-full items-center justify-center gap-x-6">
                        <Button asChild size="lg" className="group h-12 min-h-[48px] w-full rounded-full border border-foreground bg-background px-6 text-base font-semibold text-foreground transition-[transform,box-shadow,background-color] duration-150 ease-[var(--ease-out)] hover:bg-background/90 active:scale-[0.97] sm:h-14 sm:w-auto sm:px-10 sm:text-lg">
                            <Link href={buttonHref}>
                                {buttonText} <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1.5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
