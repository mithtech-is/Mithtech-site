"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronDown,
    Menu,
    X,
    ArrowRight,
    ChevronRight,
    Globe,
    Layers,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { USE_CASES, PLATFORMS, SOLUTIONS, UseCase } from "@/data/navigation";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
    const [activeUseCase, setActiveUseCase] = useState<UseCase>(USE_CASES[0]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileSubId, setOpenMobileSubId] = useState<string | null>(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTransitioningUseCase, setIsTransitioningUseCase] = useState(false);

    const productsRef = useRef<HTMLDivElement>(null);
    const platformsRef = useRef<HTMLDivElement>(null);

    // Close menus on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
                setIsProductsOpen(false);
            }
            if (platformsRef.current && !platformsRef.current.contains(event.target as Node)) {
                setIsPlatformsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll-to-reveal logic
    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            // Don't hide navbar if mobile menu is open
            if (mobileMenuOpen) return;

            // Hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsNavbarVisible(false);
                setIsProductsOpen(false);
                setIsPlatformsOpen(false);
            } else {
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b border-white/10 bg-black text-white transition-transform duration-300 ease-[var(--ease-out)]",
                !isNavbarVisible && "-translate-y-full"
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 md:px-8">

                {/* LEFT SECT: Logo & Desktop Nav */}
                <div className="flex items-center gap-12 h-full">
                    <Link
                        href="/"
                        className="flex items-center transition-all hover:opacity-80 active:scale-[0.97]"
                    >
                        <Image
                            src="/assets/mithtech-white-logo.png"
                            alt="Mith.tech Logo"
                            width={160}
                            height={45}
                            className="h-auto w-[130px] md:w-[150px] object-contain"
                            priority
                        />
                    </Link>

                    {/* nav links */}
                    <nav className="hidden lg:flex items-stretch gap-6 h-full">

                        {/* PRODUCTS CLICK MENU */}
                        <div className="relative flex items-center" ref={productsRef} onMouseLeave={() => setIsProductsOpen(false)}>
                            <button
                                onClick={() => {
                                    setIsProductsOpen(!isProductsOpen);
                                    setIsPlatformsOpen(false);
                                }}
                                className={cn(
                                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white",
                                    isProductsOpen ? "text-white" : "text-white/80"
                                )}
                            >
                                Products
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isProductsOpen && "rotate-180")} />
                            </button>

                            {isProductsOpen && (
                                <div className="fixed inset-x-0 top-20 z-50 w-screen bg-black border-b border-white/10 shadow-2xl origin-top animate-in fade-in zoom-in-95 duration-200 ease-[var(--ease-out)]">
                                    <div className="container mx-auto flex h-[600px]" data-lenis-prevent>
                                        <div className="w-[350px] border-r border-white/10 py-8 overflow-y-auto custom-scrollbar">
                                            <div className="mb-5">
                                                <Link
                                                    href="/products"
                                                    onClick={() => setIsProductsOpen(false)}
                                                    className="group flex w-full items-center justify-between px-6 py-3 text-sm font-bold text-[#00aaff] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
                                                >
                                                    <span className="relative z-10">View All Products</span>
                                                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                            <div className="px-6 mb-4">
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">Use Cases</h3>
                                            </div>
                                            <div className="space-y-1">
                                                {USE_CASES.map((uc, idx) => (
                                                    <button
                                                        key={uc.id}
                                                        onClick={() => {
                                                            setIsTransitioningUseCase(true);
                                                            setTimeout(() => {
                                                                setActiveUseCase(uc);
                                                                setIsTransitioningUseCase(false);
                                                            }, 150);
                                                        }}
                                                        style={{ animationDelay: `${idx * 40}ms` }}
                                                        className={cn(
                                                            "group flex w-full items-center justify-between px-6 py-3.5 text-left text-sm transition-all relative active:scale-[0.98] animate-in fade-in slide-in-from-left-4 duration-300 ease-[var(--ease-out)]",
                                                            activeUseCase.id === uc.id ? "bg-white/5 text-white" : "text-white/60 hover:bg-white/[0.03] hover:text-white"
                                                        )}
                                                    >
                                                        <span className="relative z-10">{uc.title}</span>
                                                        <ChevronRight className={cn(
                                                            "h-4 w-4 transition-transform",
                                                            activeUseCase.id === uc.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                                                        )} />
                                                        {activeUseCase.id === uc.id && (
                                                            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className={cn(
                                                "flex-1 bg-black py-8 px-10 overflow-y-auto custom-scrollbar transition-all duration-200",
                                                isTransitioningUseCase ? "opacity-0 blur-sm scale-[0.99]" : "opacity-100 blur-0 scale-100"
                                            )}
                                            data-lenis-prevent
                                        >
                                            <div className="mb-8">
                                                <h2 className="text-2xl font-bold">{activeUseCase.title}</h2>
                                                <p className="text-sm text-white/40 mt-1">Explore specialized tools designed for this workflow.</p>
                                            </div>
                                            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                                                {activeUseCase.products.map((p, idx) => {
                                                    const fullProduct = p.slug ? products.find(prod => prod.slug === p.slug) : null;
                                                    return (
                                                        <Link
                                                            key={idx}
                                                            href={p.href || (p.slug ? `/products/${p.slug}` : "/")}
                                                            onClick={() => setIsProductsOpen(false)}
                                                            className="group flex flex-col p-5 rounded-xl border border-white/5 bg-white/[0.02] transition-[border-color,background-color] duration-150 ease-[var(--ease-out)] hover:bg-white/[0.05] hover:border-white/10 active:scale-[0.97]"
                                                        >
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                                                    {fullProduct?.icon ? (
                                                                        <Image src={fullProduct.icon} alt={p.title} width={24} height={24} className="h-6 w-6 object-contain" />
                                                                    ) : (
                                                                        <Globe className="h-5 w-5 text-white/40 group-hover:text-primary transition-colors" />
                                                                    )}
                                                                </div>
                                                                <h4 className="font-bold text-[15px] leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                                                            </div>
                                                            <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                                                                {fullProduct?.description || p.description || "Enterprise-grade solution tailored for scale."}
                                                            </p>
                                                            <div className="mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-primary transition-colors">
                                                                Learn More <ArrowRight className="ml-1.5 h-3 w-3" />
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* PLATFORMS (RESTORED OLD SOLUTIONS MEGA MENU) */}
                        <div className="relative flex items-center" ref={platformsRef} onMouseLeave={() => setIsPlatformsOpen(false)}>
                            <button
                                onClick={() => {
                                    setIsPlatformsOpen(!isPlatformsOpen);
                                    setIsProductsOpen(false);
                                }}
                                className={cn(
                                    "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white",
                                    isPlatformsOpen ? "text-white" : "text-white/80"
                                )}
                            >
                                Platforms
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isPlatformsOpen && "rotate-180")} />
                            </button>

                            {isPlatformsOpen && (
                                <div className="fixed inset-x-0 top-20 z-50 w-screen bg-black border-b border-white/10 shadow-2xl origin-top animate-in fade-in zoom-in-95 duration-200 ease-[var(--ease-out)]">
                                    <div className="container mx-auto px-6 py-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                                            <div className="lg:col-span-4">
                                                <Link
                                                    href="/platforms/frappe-erpnext"
                                                    onClick={() => setIsPlatformsOpen(false)}
                                                    className="group/item relative flex flex-col justify-end p-6 w-full h-full min-h-[340px] overflow-hidden rounded-2xl border bg-black/40 transition-all hover:bg-black/60 active:scale-[0.98]"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/item:opacity-80 transition-opacity" />
                                                    <div className="relative z-10 w-full">
                                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-auto group-hover/item:scale-110 group-hover/item:bg-white/20 transition-all duration-500">
                                                            <Layers className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-6">
                                                        <div className="mb-3 text-2xl font-bold">Frappe & ERPNext</div>
                                                        <p className="text-base text-white/90">Enterprise-grade systems for ERP, CRM, Accounting, and HR management.</p>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                                                <div style={{ animationDelay: "50ms" }} className="animate-in fade-in slide-in-from-right-4 duration-300 ease-[var(--ease-out)]">
                                                    <ListItem href="/platforms/medusa" title="Medusa">Headless commerce, APIs, custom storefronts</ListItem>
                                                </div>
                                                <div style={{ animationDelay: "100ms" }} className="animate-in fade-in slide-in-from-right-4 duration-300 ease-[var(--ease-out)]">
                                                    <ListItem href="/platforms/wordpress" title="WordPress">CMS, websites, SEO, content platforms</ListItem>
                                                </div>
                                                <div style={{ animationDelay: "150ms" }} className="animate-in fade-in slide-in-from-right-4 duration-300 ease-[var(--ease-out)]">
                                                    <ListItem href="/platforms/saas" title="SaaS">Cloud-based software solutions</ListItem>
                                                </div>
                                                <div style={{ animationDelay: "200ms" }} className="animate-in fade-in slide-in-from-right-4 duration-300 ease-[var(--ease-out)]">
                                                    <ListItem href="/platforms/paas" title="PaaS">Platform infrastructure, developer environments</ListItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* INDUSTRIES */}
                        <div className="relative flex items-center h-full">
                            <Link href="/industries" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                                Industries
                            </Link>
                        </div>

                    </nav>
                </div>

                {/* RIGHT SECT: CTA & Mobile Trigger */}
                <div className="flex items-center gap-4">
                    <Button
                        asChild
                        variant="outline"
                        className="hidden md:flex rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 font-medium transition-[background-color,border-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.95]"
                    >
                        <Link href="/contact">Book Consultation</Link>
                    </Button>

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] bg-black border-white/10 p-0 text-white overflow-y-auto" data-lenis-prevent>
                            <div className="flex flex-col min-h-full pt-16">
                                <div className="flex-1 py-8 px-6 space-y-8 text-2xl font-bold">
                                    <MobileAccordion label="Products">
                                        <div className="space-y-2 pt-4">
                                            {/* View All Products Link */}
                                            <div className="mb-4">
                                                <Link
                                                    href="/products"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="flex items-center justify-between rounded-xl bg-[#00aaff]/10 border border-[#00aaff]/20 px-6 py-5 text-lg font-bold text-[#00aaff] transition-all active:scale-[0.98]"
                                                >
                                                    View All Products
                                                    <ArrowRight className="h-5 w-5" />
                                                </Link>
                                            </div>

                                            <div className="px-2 mb-2">
                                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Browse by Use Case</h3>
                                            </div>

                                            {USE_CASES.map((uc) => (
                                                <MobileSubAccordion
                                                    key={uc.id}
                                                    label={uc.title}
                                                    isOpen={openMobileSubId === uc.id}
                                                    onToggle={() => setOpenMobileSubId(openMobileSubId === uc.id ? null : uc.id)}
                                                >
                                                    <div className="grid grid-cols-1 gap-2 pl-4 py-2 border-l border-white/5 ml-2">
                                                        {uc.products.map((p, i) => (
                                                            <Link
                                                                key={i}
                                                                href={p.href || (p.slug ? `/products/${p.slug}` : "/")}
                                                                onClick={() => {
                                                                    setMobileMenuOpen(false);
                                                                    setOpenMobileSubId(null);
                                                                }}
                                                                className="text-sm text-white/50 py-3 hover:text-white flex items-center justify-between active:text-white"
                                                            >
                                                                {p.title}
                                                                <ArrowRight className="h-3 w-3 opacity-20" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </MobileSubAccordion>
                                            ))}
                                        </div>
                                    </MobileAccordion>

                                    <MobileAccordion label="Platforms">
                                        <div className="grid grid-cols-1 gap-4 pt-4">
                                            <Link href="/platforms/frappe-erpnext" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white">Frappe & ERPNext</Link>
                                            <Link href="/platforms/medusa" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white">Medusa</Link>
                                            <Link href="/platforms/wordpress" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white">WordPress</Link>
                                            <Link href="/platforms/saas" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white">SaaS</Link>
                                            <Link href="/platforms/paas" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white">PaaS</Link>
                                        </div>
                                    </MobileAccordion>

                                    <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="block py-4 border-b border-white/10">Industries</Link>
                                </div>
                                <div className="p-6 border-t border-white/10">
                                    <Button asChild className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white font-bold">
                                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}

function ListItem({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block select-none rounded-2xl p-6 border border-white/10 bg-white/[0.02] leading-none no-underline outline-none transition-all hover:bg-white/[0.05] hover:border-white/20 active:scale-[0.98] group"
        >
            <div className="text-lg font-bold leading-none text-white transition-colors">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-white/50 mt-2 font-medium">{children}</p>
        </Link>
    );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 active:scale-[0.98] transition-transform duration-200 text-left"
            >
                <span className="text-2xl font-bold">{label}</span>
                <ChevronDown className={cn("h-6 w-6 text-white/40 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && <div className="animate-in fade-in slide-in-from-top-2 duration-300 ease-[var(--ease-out)]">{children}</div>}
        </div>
    );
}

function MobileSubAccordion({ label, isOpen, onToggle, children }: { label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) {
    return (
        <div className="py-2">
            <button
                onClick={onToggle}
                className={cn(
                    "flex w-full items-center justify-between py-3 text-lg font-medium transition-all active:scale-[0.98]",
                    isOpen ? "text-[#00aaff]" : "text-white/70"
                )}
            >
                {label}
                <ChevronRight className={cn("h-5 w-5 transition-transform", isOpen && "rotate-90")} />
            </button>
            {isOpen && <div className="animate-in fade-in slide-in-from-top-1 duration-200 ease-[var(--ease-out)]">{children}</div>}
        </div>
    );
}
