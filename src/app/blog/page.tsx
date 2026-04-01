import { getBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function BlogListing() {
    const posts = getBlogPosts();

    return (
        <div className="flex flex-col w-full bg-white overflow-hidden">
            {/* Back Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Home
                </Link>
            </div>

            {/* Hero Section - Redesigned to White theme (Centered) */}
            <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 mb-8">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00aaff] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">Knowledge Hub</span>
                        </div>
                        <h1 className="text-6xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl mb-8 leading-[1.1] uppercase">
                            Insights & <br />
                            <span className="text-[#00aaff]">Articles.</span>
                        </h1>
                        <p className="text-xl leading-loose text-black/50 max-w-3xl mx-auto mb-12 italic">
                            The latest trends in enterprise technology, software architecture,
                            and business automation. Expert insights for the modern leader.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 lg:py-32 border-t border-black/[0.05] bg-black/[0.01]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.length === 0 ? (
                        <div className="py-24 text-center">
                            <p className="text-xl font-bold uppercase tracking-widest text-black/20">Knowledge In Production...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    title={post.title}
                                    description={post.description}
                                    date={post.date}
                                    slug={post.slug}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
