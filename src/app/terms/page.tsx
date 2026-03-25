"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/marketing/CTASection";

export default function TermsOfService() {
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
                            TERMS OF <br />
                            <span className="text-muted-foreground">SERVICE</span>
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
                                <h2 className="text-3xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using the Mithtech website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">2. Use License</h2>
                                <p className="mb-4">
                                    Permission is granted to temporarily download one copy of the materials on Mithtech Innovative Solutions&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Modify or copy the materials.</li>
                                    <li>Use the materials for any commercial purpose or for any public display.</li>
                                    <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">3. Disclaimer</h2>
                                <p>
                                    The materials on Mithtech&apos;s website are provided on an &apos;as is&apos; basis. Mithtech Innovative Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">4. Limitations</h2>
                                <p>
                                    In no event shall Mithtech Innovative Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mithtech&apos;s website, even if Mithtech Innovative Solutions or a Mithtech Innovative Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">5. Accuracy of Materials</h2>
                                <p>
                                    The materials appearing on Mithtech&apos;s website could include technical, typographical, or photographic errors. Mithtech Innovative Solutions does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">6. Links</h2>
                                <p>
                                    Mithtech Innovative Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mithtech Innovative Solutions of the site. Use of any such linked website is at the user&apos;s own risk.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">7. Governing Law</h2>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">8. Contact Information</h2>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us at:
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
                title="Professional systems for professional businesses."
                description="Our terms ensure a clear and mutual understanding of our partnership."
                buttonText="Partner with Us"
                buttonHref="/contact"
            />
        </div>
    );
}

