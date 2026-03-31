"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, BookOpen } from "lucide-react";
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
            className="group relative flex h-full flex-col rounded-[2.5rem] border border-black/[0.05] bg-white p-8 transition-all duration-500 hover:border-[#00aaff]/20 hover:shadow-xl hover:shadow-[#00aaff]/5"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#00aaff]">
                    <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                    {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>
            
            <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-black leading-tight transition-colors">
                {title}
            </h3>
            
            <p className="text-lg font-medium text-black/40 mb-8 flex-grow line-clamp-3 leading-loose italic">
                {description}
            </p>
            
            <div className="mt-auto">
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/50 hover:text-black transition-all group-hover:translate-x-1"
                >
                    Read Article <ArrowRight className="w-3 h-3" />
                </Link>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-x-2 group-hover:translate-x-0">
                <BookOpen className="w-3 h-3 text-[#00aaff]" />
            </div>
        </motion.div>
    );
}
