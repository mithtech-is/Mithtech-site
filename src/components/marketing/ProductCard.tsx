"use client";

import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
    title: string;
    description: string;
    imageSrc?: string;
    href: string;
    delay?: number;
}

export function ProductCard({ title, description, href, delay = 0 }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="h-full flex flex-col"
        >
            <Card className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-primary/5 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl">
                <div className="p-6 pb-4 sm:p-8 sm:pb-4">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-xl font-bold text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground sm:mb-6 sm:h-14 sm:w-14 sm:text-2xl">
                        {title.charAt(0)}
                    </div>
                    <h3 className="mb-3 text-xl font-bold sm:text-2xl">{title}</h3>
                </div>
                <CardContent className="flex-1 px-6 sm:px-8">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-4 sm:p-8 sm:pt-4">
                    <Button asChild variant="ghost" className="h-12 min-h-[48px] w-full justify-between rounded-full px-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Link href={href} className="flex items-center justify-between w-full">
                            Explore {title} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
