import { ProductCard } from "@/components/marketing/ProductCard";
import { CTASection } from "@/components/marketing/CTASection";
import { products } from "@/data/products";

export default function ProductsPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-primary/5 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                            Mithtech Products
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground leading-7 sm:text-lg md:text-xl md:leading-8">
                            Proprietary platforms and expert-managed solutions built to solve specific business operations and automation challenges.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.slug}
                                title={product.title}
                                description={product.description}
                                href={`/products/${product.slug}`}
                                delay={0.1 * (index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Want a demo of our products?"
                description="Our specialists can walk you through the platforms and show you exact ROI for your business."
                buttonText="Schedule a Demo"
                buttonHref="/contact"
            />
        </div>
    );
}


