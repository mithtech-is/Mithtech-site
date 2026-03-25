"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    href?: string;
    delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, href, delay = 0 }: FeatureCardProps) {
    const cardContent = (
        <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col h-full bg-background p-8 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-12">
                    <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                    {description}
                </p>

                {href && (
                    <div className="mt-auto inline-flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                        Explore Solution <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                )}
            </div>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="h-full"
        >
            {href ? <Link href={href} className="block h-full cursor-pointer">{cardContent}</Link> : cardContent}
        </motion.div>
    );
}