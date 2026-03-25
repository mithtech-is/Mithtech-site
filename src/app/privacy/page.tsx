"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/marketing/CTASection";

export default function PrivacyPolicy() {
    const lastUpdated = "March 5, 2026";

    return (
        <div className="flex flex-col w-full bg-background overflow-hidden px-0 mx-0">
            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden px-0 mx-0">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            LEGAL & COMPLIANCE
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            PRIVACY <br />
                            <span className="text-muted-foreground">POLICY</span>
                        </h1>
                        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                            Last Updated: {lastUpdated}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose max-w-none space-y-10 text-sm text-muted-foreground dark:prose-invert sm:prose-lg sm:space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">1. Introduction</h2>
                                <p>
                                    At Mithtech Innovative Solutions (&quot;Mithtech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">2. Information We Collect</h2>
                                <p className="mb-4">
                                    We may collect various types of information, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-foreground">Personal Identification Information:</strong> Name, email address, phone number, and company details provided through contact forms.</li>
                                    <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
                                    <li><strong className="text-foreground">Cookies:</strong> We use cookies to enhance your experience and analyze site traffic.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">3. How We Use Your Information</h2>
                                <p className="mb-4">
                                    We use the collected information for purposes including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To provide and maintain our services.</li>
                                    <li>To communicate with you regarding inquiries, updates, and newsletters.</li>
                                    <li>To improve our website performance and user experience.</li>
                                    <li>To comply with legal obligations and prevent fraudulent activities.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">4. Data Security</h2>
                                <p>
                                    We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">5. Third-Party Services</h2>
                                <p>
                                    We may employ third-party companies and individuals to facilitate our services, perform service-related tasks, or assist us in analyzing how our service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">6. Your Rights</h2>
                                <p>
                                    Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete the information we hold about you. To exercise these rights, please contact us at info@mith.tech.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">7. Changes to This Policy</h2>
                                <p>
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">8. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li>Email: <a href="mailto:info@mith.tech" className="text-foreground font-bold hover:underline">info@mith.tech</a></li>
                                    <li>Address: Bangalore, India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Building trust through transparency."
                description="Your privacy is our priority. Contact us if you have any further questions."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
        </div>
    );
}

