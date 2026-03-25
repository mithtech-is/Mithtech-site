import { products } from "@/data/products";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG = "schedulr";

export const metadata: Metadata = {
    title: "Schedulr Booking - Showcase | Mithtech",
    description: "Automated Service Booking.",
};

export default function Page() {
    const product = products.find((p) => p.slug === SLUG);
    if (!product) notFound();
    return <ProductShowcase product={product} />;
}
