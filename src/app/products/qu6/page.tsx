import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG = "qu6";

export const metadata: Metadata = {
    title: "Qu6 - Showcase | Mithtech",
    description: "Comprehensive Workspace SaaS.",
};

export default function Page() {
    const product = products.find((p) => p.slug === SLUG);
    if (!product) notFound();
    return <ProductShowcase product={product} />;
}
