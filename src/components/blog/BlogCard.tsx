"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    slug: string;
}

export function BlogCard({ title, description, date, slug }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex h-full flex-col rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:bg-muted/50 hover:shadow-md sm:p-8"
        >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <h3 className="mb-4 text-xl font-bold leading-tight transition-colors group-hover:text-primary sm:text-2xl">
                {title}
            </h3>
            <p className="text-muted-foreground mb-8 flex-grow line-clamp-3">
                {description}
            </p>
            <div className="mt-auto">
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:gap-2 transition-all duration-300"
                >
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            {/* Hover decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
            </div>
        </motion.div>
    );
}
