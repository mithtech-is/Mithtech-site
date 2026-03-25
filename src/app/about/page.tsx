import { CTASection } from "@/components/marketing/CTASection";

export default function About() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-primary/5 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                            About Mithtech
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground leading-7 sm:text-lg md:text-xl md:leading-8">
                            We are a Bangalore-based software consultancy providing ERP, eCommerce, marketing automation, and SaaS products.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-24 bg-background border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <p>
                                    At Mithtech Innovative Solutions, we believe that world-class enterprise systems shouldn&apos;t be restricted to Fortune 500 companies with massive IT budgets.
                                </p>
                                <p>
                                    Our mission is to democratize business technology by leveraging the power of scalable platforms. We architect, deploy, and maintain robust systems that rival proprietary software—without the crippling per-user licensing fees or vendor lock-in.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Why Mithtech?</h2>
                            <div className="prose prose-lg text-muted-foreground">
                                <ul className="space-y-4">
                                    <li><strong className="text-foreground">Full Ownership:</strong> You own your data and your infrastructure. Your business isn&apos;t held hostage by unpredictable pricing changes.</li>
                                    <li><strong className="text-foreground">Infinite Customization:</strong> We have access to the source code. If your business process is unique, we can mold the software to fit it perfectly, rather than changing your business to fit the software.</li>
                                    <li><strong className="text-foreground">Zero Licensing Fees:</strong> Scale your operations from 10 employees to 10,000 without your base software costs multiplying.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Platforms We Champion</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                We specialize in platforms with strong communities, rapid development cycles, and proven enterprise reliability:
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                {["Frappe", "ERPNext", "MedusaJS", "n8n", "Mautic", "Listmonk", "Schedulr", "Directorist"].map(platform => (
                                    <span key={platform} className="px-4 py-2 rounded-full border bg-muted/30 font-medium">{platform}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to transform your operations?"
                description="Let's build a foundation that scales with you."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
        </div>
    );
}

