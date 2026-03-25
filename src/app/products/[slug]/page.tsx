"use client";

import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { use } from "react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const product = products.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    return <ProductShowcase product={product} />;
}
