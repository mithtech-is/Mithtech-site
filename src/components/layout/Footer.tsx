import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-50 border-t border-white/10 bg-[#0d0d0d] text-white/60 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
                <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-8 transition-opacity duration-150 hover:opacity-70 active:opacity-50">
                            <Image
                                src="/assets/mithtech-white-logo.png"
                                alt="Mith.tech Logo"
                                width={160}
                                height={45}
                                className="h-auto w-[160px] object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
                            Enterprise Business Systems That Scale. ERP, eCommerce, automation, and analytics solutions based in Bangalore.
                        </p>
                        <div className="flex space-x-5">
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-primary active:scale-[0.9]">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-primary active:scale-[0.9]">
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-primary active:scale-[0.9]">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-primary active:scale-[0.9]">
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white">Platforms</h3>
                        <ul className="space-y-4">
                            <li><Link href="/solutions/frappe" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Frappe &amp; ERPNext</Link></li>
                            <li><Link href="/solutions/commerce" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">eCommerce</Link></li>
                            <li><Link href="/solutions/marketing-automation" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Marketing Automation</Link></li>
                            <li><Link href="/solutions/analytics" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Analytics &amp; BI</Link></li>
                            <li><Link href="/solutions/lms" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Education &amp; LMS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white">Industries</h3>
                        <ul className="space-y-4">
                            <li><Link href="/industries/automotive" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Automotive (Car Care)</Link></li>
                            <li><Link href="/industries/real-estate" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Real Estate</Link></li>
                            <li><Link href="/industries/healthcare" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Healthcare</Link></li>
                            <li><Link href="/industries/retail" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Retail</Link></li>
                            <li><Link href="/industries/manufacturing" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Manufacturing</Link></li>
                            <li><Link href="/industries/financial-services" className="text-white/60 hover:text-primary transition-colors duration-150 text-sm font-medium">Financial Services / Loans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white">Newsletter</h3>
                        <p className="text-sm text-white/50 mb-6 leading-relaxed">
                            Subscribe to get the latest updates and offers.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 transition-[border-color] duration-150 focus:border-white/30"
                                required
                            />
                            <Button
                                type="submit"
                                className="w-full h-12 font-bold uppercase tracking-wider transition-[transform,background-color] duration-150 ease-[var(--ease-out)] active:scale-[0.97]"
                            >
                                <Mail className="mr-2 h-4 w-4" /> Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:mt-16 md:flex-row md:gap-6 md:pt-10 md:text-left">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Mithtech Innovative Solutions. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:justify-end">
                        <Link href="/privacy" className="text-sm text-white/40 hover:text-primary transition-colors duration-150">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-white/40 hover:text-primary transition-colors duration-150">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
