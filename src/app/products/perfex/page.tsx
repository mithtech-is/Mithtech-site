import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG = "perfex";

export const metadata: Metadata = {
    title: "Perfex CRM - Showcase | Mithtech",
    description: "Enterprise CRM Implementation.",
};

export default function Page() {
    const product = products.find((p) => p.slug === SLUG);
    if (!product) notFound();
    return <ProductShowcase product={product} />;
}
