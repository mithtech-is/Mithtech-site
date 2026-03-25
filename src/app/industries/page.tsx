"use client";

import { IndustryCard } from "@/components/marketing/IndustryCard";
import { CTASection } from "@/components/marketing/CTASection";
import { Building2, Factory, HeartPulse, Landmark, ShoppingCart, Wrench } from "lucide-react";

export default function Industries() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-primary/5 pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10 lg:pt-32 lg:pb-12">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                            Industries Let&apos;s Build Your System
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground leading-relaxed sm:text-lg md:text-xl max-w-3xl">
                            Every industry operates with its own unique challenges and workflows. We design and deploy systems tailored to your specific business needs. From automation to integration, we eliminate inefficiencies at every level. Built to scale, our solutions grow with your operations and long-term goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-16 sm:pb-20 md:pb-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <IndustryCard title="Automotive (Car Care)" icon={Wrench} href="/industries/automotive" delay={0.1} />
                        <IndustryCard title="Real Estate" icon={Building2} href="/industries/real-estate" delay={0.2} />
                        <IndustryCard title="Healthcare" icon={HeartPulse} href="/industries/healthcare" delay={0.3} />
                        <IndustryCard title="Retail" icon={ShoppingCart} href="/industries/retail" delay={0.4} />
                        <IndustryCard title="Manufacturing" icon={Factory} href="/industries/manufacturing" delay={0.5} />
                        <IndustryCard title="Financial Services / Loans" icon={Landmark} href="/industries/financial-services" delay={0.6} />
                    </div>
                </div>
            </section>

            <CTASection
                title="Don't see your industry?"
                description="Our platforms are highly adaptable. Contact us to discuss how we can build a system for your unique business model."
                buttonText="Contact Us"
                buttonHref="/contact"
            />
        </div>
    );
}

