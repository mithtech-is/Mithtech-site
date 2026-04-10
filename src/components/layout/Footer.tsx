import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const demoBlogLinks = [
    { href: "/blog", label: "Blogs" },
    { href: "/blog/welcome-to-the-mithtech-blog", label: "Welcome to the Mithtech Blog" },
    { href: "/blog", label: "ERPNext Implementation Guide" },
    { href: "/blog", label: "eCommerce Growth Playbook" },
];

export function Footer() {
    return (
        <footer className="relative z-50 border-t border-white/10 bg-[#0d0d0d] text-white/60 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
                <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link href="/" className="mb-8 flex items-center space-x-2 transition-opacity duration-150 hover:opacity-70 active:opacity-50">
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
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.9]">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.9]">
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.9]">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.9]">
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">Platforms</h3>
                        <ul className="space-y-4">
                            <li><Link href="/solutions/frappe" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Frappe &amp; ERPNext</Link></li>
                            <li><Link href="/solutions/commerce" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">eCommerce</Link></li>
                            <li><Link href="/solutions/marketing-automation" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Marketing Automation</Link></li>
                            <li><Link href="/solutions/analytics" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Analytics &amp; BI</Link></li>
                            <li><Link href="/solutions/lms" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Education &amp; LMS</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">Industries</h3>
                        <ul className="space-y-4">
                            <li><Link href="/industries/automotive" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Automotive (Car Care)</Link></li>
                            <li><Link href="/industries/real-estate" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Real Estate</Link></li>
                            <li><Link href="/industries/healthcare" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Healthcare</Link></li>
                            <li><Link href="/industries/retail" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Retail</Link></li>
                            <li><Link href="/industries/manufacturing" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Manufacturing</Link></li>
                            <li><Link href="/industries/financial-services" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Financial Services / Loans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">About Us</Link></li>
                            <li><Link href="/clients" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Clients</Link></li>
                            <li><Link href="/blog" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Blog</Link></li>
                            <li><Link href="/partners" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Partners</Link></li>
                            <li><Link href="/contact" className="text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5 text-left sm:mt-10 md:pt-6">
                    <div className="space-y-3 text-sm text-white/40">
                        <p>© Mithtech Innovative Solutions Private Limited</p>
                        <p>Mithtech Innovative Solutions Private Limited | Bengaluru, Karnataka 560010</p>
                        <p>GSTIN: 29AAKCM4907B1ZI</p>
                    </div>

                    <div className="mt-2 flex flex-wrap justify-start gap-4 sm:justify-end sm:gap-8">
                        <Link href="/privacy" className="text-sm text-white/40 transition-colors duration-150 hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-white/40 transition-colors duration-150 hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
