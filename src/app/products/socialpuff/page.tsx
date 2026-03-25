import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG = "socialpuff";

export const metadata: Metadata = {
    title: "Socialpuff - Showcase | Mithtech",
    description: "Smart Social Media Automation.",
};

export default function Page() {
    const product = products.find((p) => p.slug === SLUG);
    if (!product) notFound();
    return <ProductShowcase product={product} />;
}
