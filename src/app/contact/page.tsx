"use client";

import React, { useState } from "react";
import { CTASection } from "@/components/marketing/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New inquiry from Mith Tech website*

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}`;

        const encodedMessage = encodeURIComponent(message);
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "918277540332";

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold ml-1 text-foreground">Name</label>
                <Input
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold ml-1 text-foreground">Email</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold ml-1 text-foreground">Subject</label>
                <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="h-12 w-full bg-muted/20 border-primary/5 px-4 focus:border-primary/20 rounded-xl"
                />
            </div>

            <Button
                type="submit"
                className="mt-4 h-12 min-h-[48px] w-full rounded-full bg-[#00aaff] text-base font-bold text-white shadow-lg shadow-[#00aaff]/20 transition-all hover:-translate-y-1 hover:bg-[#0088cc] sm:h-14 sm:text-lg"
            >
                Send via WhatsApp
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4 italic">
                You will be redirected to WhatsApp to send your message.
            </p>
        </form>
    );
}

export default function Contact() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-primary/5 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                            Contact Us
                        </h1>
                        <p className="mt-6 text-base text-muted-foreground leading-7 sm:text-lg md:text-xl md:leading-8">
                            Based in Bangalore. We build scalable enterprise systems globally. Reach out to schedule a consultation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-24 bg-background border-b">
                <div className="container mx-auto grid gap-10 px-4 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-16">

                    <div>
                        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Let&apos;s talk about your project</h2>
                        <p className="mb-8 text-base text-muted-foreground sm:text-lg">
                            Whether you are looking to replace an expensive proprietary ERP, build a complex B2B eCommerce platform, or automate your marketing funnels—our team of architects can help.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <strong className="block text-foreground text-lg mb-1">Headquarters</strong>
                                <p className="text-muted-foreground">RajajiNagar, Bangalore, India</p>
                            </div>
                            <div>
                                <strong className="block text-foreground text-lg mb-1">Email Connect</strong>
                                <p className="text-muted-foreground">hello@mith.tech</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-[2rem] border border-primary/5 bg-background p-5 shadow-2xl shadow-primary/5 sm:rounded-[2.5rem] sm:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">Send a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Check our products"
                description="Looking for an out-of-the-box solution? View our SaaS platforms."
                buttonText="View Products"
                buttonHref="/products"
            />
        </div>
    );
}

