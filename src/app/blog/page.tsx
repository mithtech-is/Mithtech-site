import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { BlogListingClient } from "@/components/blog/BlogListingClient";

export const metadata: Metadata = {
    title: "Blog | ERPNext Insights & Industry Best Practices",
    description: "Expert guides on ERPNext implementation, Frappe development, ERP migration, and business automation. Written by practitioners, not AI. From Bangalore.",
    keywords: [
        "ERPNext blog",
        "ERPNext vs Odoo comparison",
        "ERPNext vs SAP comparison",
        "ERPNext implementation guide India",
        "Frappe development guides",
        "ERPNext for small business India",
        "open source ERP articles",
        "ERPNext manufacturing guide",
        "WhatsApp automation ERP integration",
        "GST ERP India blog",
        "Mith Tech blog"
    ],
    alternates: {
        canonical: "https://mith.tech/blog",
    },
    openGraph: {
        title: "Blog | ERPNext Insights & Best Practices | Mith Tech",
        description: "Expert guides on ERPNext, Frappe, and business automation. Written by practitioners, not AI. Authentic insights from India's leading ERP partner.",
        url: "https://mith.tech/blog",
        type: "website",
        images: [{ url: "/assets/og-shared.png", width: 1200, height: 630, alt: "Mith Tech Blog - ERPNext Insights" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | ERPNext Insights | Mith Tech",
        description: "Expert ERPNext guides and industry insights. Written by practitioners, not AI. From India's leading ERP partner.",
        images: ["/assets/og-shared.png"],
    },
};

export default function BlogListing() {
    const posts = getBlogPosts();

    return (
        <div className="w-full overflow-hidden bg-white text-black">
            <section className="pt-32 pb-12 sm:pt-36 sm:pb-14 lg:pt-40 lg:pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-[#00aaff]">
                        <ArrowLeft className="h-3 w-3" /> Home
                    </Link>

                    <div className="max-w-5xl">
                        <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-black sm:text-7xl md:text-8xl lg:text-[84px]">
                            Insights for the Modern Enterprise.
                        </h1>
                        <p className="mt-8 text-[24px] leading-relaxed text-black/70">
                            Expert perspectives on ERPNext, Frappe, business automation, and open-source enterprise strategy -- written by practitioners, not algorithms.
                        </p>
                    </div>
                </div>
            </section>

            <BlogListingClient posts={posts} />
        </div>
    );
}
