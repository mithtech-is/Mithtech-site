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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] }}
        >
            <Link href={href} className="group block h-full">
                <Card className="relative h-full overflow-hidden bg-white border border-black/5 transition-all duration-500 hover:shadow-2xl hover:border-black/20 active:scale-[0.98] rounded-[2rem]">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-black/[0.02] transition-transform duration-700 group-hover:scale-150" />
                    <CardContent className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
                        <div>
                            <Icon className="mb-6 h-10 w-10 text-[#00aaff] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                            <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl text-black uppercase leading-tight">{title}</h3>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-xs font-bold text-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                            Explore Industry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
