import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG = "polygin-wastore";

export const metadata: Metadata = {
    title: "Polygin WaStore - Showcase | Mithtech",
    description: "WhatsApp Automation & Conversational Commerce.",
};

export default function Page() {
    const product = products.find((p) => p.slug === SLUG);
    if (!product) notFound();
    return <ProductShowcase product={product} />;
}
