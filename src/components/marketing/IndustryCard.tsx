"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface IndustryCardProps {
    title: string;
    icon: LucideIcon;
    href: string;
    delay?: number;
}

export function IndustryCard({ title, icon: Icon, href, delay = 0 }: IndustryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link href={href} className="group block h-full">
                <Card className="relative h-full overflow-hidden bg-gradient-to-br from-background to-background/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-xl">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />
                    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                        <div>
                            <Icon className="mb-5 h-9 w-9 text-primary transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-10 sm:w-10" />
                            <h3 className="mb-2 text-lg font-bold tracking-tight sm:text-xl">{title}</h3>
                        </div>
                        <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-100 transition-all duration-300 sm:mt-8 sm:-translate-x-4 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                            Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
