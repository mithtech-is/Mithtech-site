import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { BlogListingClient } from "@/components/blog/BlogListingClient";

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
                            All Things ERPNext.
                        </h1>
                        <p className="mt-8 text-[24px] leading-relaxed text-black/70">
                            Written by Humans, Not AI - Authentic and Thoughtful Content.
                        </p>
                    </div>
                </div>
            </section>

            <BlogListingClient posts={posts} />
        </div>
    );
}
