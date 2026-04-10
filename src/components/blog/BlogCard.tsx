"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    slug: string;
    author: string;
    category: string;
    coverImage: string;
    readTime: string;
}

export function BlogCard({
    title,
    description,
    date,
    slug,
    author,
    category,
    coverImage,
    readTime,
}: BlogCardProps) {
    const initials = author
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-white"
        >
            <Link href={`/blog/${slug}`} className="block">
                <div className="relative aspect-[16/8] overflow-hidden bg-black/[0.03]">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                <div className="p-6 sm:p-7">
                    <p className="text-[13px] uppercase tracking-[0.05em] text-black/50">
                        {category}
                    </p>

                    <h2 className="mt-3 text-[28px] font-medium leading-[1.08] tracking-tight text-black">
                        {title}
                    </h2>

                    <p className="mt-4 text-[18px] leading-8 text-black/58">
                        {description}
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dbeafe] text-xs font-semibold text-[#0f172a]">
                            {initials || "MT"}
                        </div>
                        <div>
                            <p className="text-[18px] font-medium leading-none text-black">{author}</p>
                            <p className="mt-2 text-[16px] leading-none text-black/50">
                                {new Date(date).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}{" "}
                                · {readTime}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
