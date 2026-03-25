"use client";

import React, { useState } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ResellerForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        website: "",
        about: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Reseller Application from Mith Tech website*

*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Country:* ${formData.country}
*Website:* ${formData.website}
*About:* ${formData.about}`;

        const encodedMessage = encodeURIComponent(message);
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918277540332";

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Full Name</label>
                    <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Company</label>
                    <Input
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Email</label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Phone</label>
                    <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Country</label>
                    <Input
                        placeholder="India"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1 text-foreground">Website</label>
                    <Input
                        placeholder="https://..."
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        required
                        className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold ml-1 text-foreground">
                    Tell us about your business
                </label>
                <Textarea
                    placeholder="We are an IT consultancy looking to offer ERP solutions..."
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    required
                    className="min-h-[120px] w-full rounded-xl border-primary/5 bg-muted/20 px-4 py-3 focus:border-primary/20"
                />
            </div>

            <Button
                type="submit"
                className="mt-4 h-12 min-h-[48px] w-full rounded-full bg-[#00aaff] text-base font-bold text-white shadow-lg shadow-[#00aaff]/20 transition-all hover:-translate-y-1 hover:bg-[#0088cc] sm:h-14 sm:text-lg"
            >
                Apply via WhatsApp
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4 italic">
                You will be redirected to WhatsApp to submit your application.
            </p>
        </form>
    );
}

export default function Partners() {
    return (
        <div className="flex flex-col w-full">

            {/* HERO */}
            <section className="bg-primary/5 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                            Partner With Mithtech
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground leading-7 sm:text-lg md:text-xl md:leading-8">
                            Join our network of resellers and system integrators. Deliver world-class enterprise solutions with our support and white-label options.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-16 sm:py-20 md:py-24 bg-background border-b">
                <div className="container mx-auto grid gap-10 px-4 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Why Partner With Us?
                        </h2>

                        <ul className="space-y-6 text-base text-muted-foreground sm:text-lg">
                            <li className="flex items-start gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">1</span>
                                <div>
                                    <strong className="block text-foreground">Revenue Sharing</strong>
                                    Earn recurring commissions on SaaS products and high margins on services.
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">2</span>
                                <div>
                                    <strong className="block text-foreground">White Label Services</strong>
                                    We handle backend complexity while you own the client relationship.
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">3</span>
                                <div>
                                    <strong className="block text-foreground">Dedicated Support</strong>
                                    Get priority support and training for your team.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="group relative overflow-hidden rounded-[2rem] border border-primary/5 bg-background p-5 shadow-2xl shadow-primary/5 sm:rounded-[2.5rem] sm:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                Reseller Application
                            </h3>
                            <ResellerForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Looking for Customer Success stories?"
                description="See how businesses across the globe have scaled using our platforms."
                buttonText="Read Case Studies"
                buttonHref="/about"
            />
        </div>
    );
}
