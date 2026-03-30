"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

interface PlatformCardProps {
    name: string;
    imageSrc: string;
    href?: string;
    delay?: number;
    description?: string;
    className?: string;
}

export function PlatformCard({ name, imageSrc, href, delay = 0, description, className = "" }: PlatformCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const content = (
        <Card 
            onMouseMove={handleMouseMove}
            className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-background border-primary/5 transition-[border-color,box-shadow] duration-250 ease-[var(--ease-out)] hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 ${className}`}
        >
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(var(--primary-rgb), 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <CardContent className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                <div className="relative mb-4 flex h-12 w-full items-center transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-105">
                    <div className="relative h-full w-full max-w-[92px] sm:max-w-[100px]">
                         <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            sizes="(max-width: 640px) 92px, 100px"
                            className="object-contain object-left grayscale transition-[filter] duration-300 ease-[var(--ease-out)] group-hover:grayscale-0"
                        />
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="mb-1 text-lg font-bold tracking-tight transition-colors group-hover:text-primary sm:text-xl">
                        {name}
                    </h3>
                    {description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="h-full"
        >
            {href ? (
                <Link href={href} className="block h-full cursor-pointer">
                    {content}
                </Link>
            ) : (
                content
            )}
        </motion.div>
    );
}
