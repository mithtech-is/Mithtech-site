import { Metadata } from "next";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { getComments } from "@/lib/comments";
import { CommentSection } from "@/components/blog/CommentSection";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            images: [{ url: post.coverImage }],
        },
    };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const comments = getComments(slug);

    // Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "image": post.coverImage,
        "author": {
            "@type": "Person",
            "name": post.author
        }
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 text-black lg:pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Back to Blog */}
                <Link
                    href="/blog"
                    className="group mb-12 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-[#00aaff]"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Articles
                </Link>

                {/* Header */}
                <header className="mb-16 lg:mb-24">
                    <div className="mb-6 inline-flex rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0077aa]">
                        {post.category}
                    </div>

                    <div className="mb-10 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-[#00aaff]">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/35">
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-[#00aaff]">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/35">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-[#00aaff]">
                                <Clock className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/35">{post.readTime}</span>
                        </div>
                    </div>
                    
                    <h1 className="mb-10 text-5xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-6xl md:text-7xl">
                        {post.title}
                    </h1>
                    
                    <div className="p-8 lg:p-12 rounded-[2.5rem] border border-black/[0.06] bg-black/[0.02] relative overflow-hidden transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#00aaff] opacity-50" />
                        <p className="text-xl font-medium leading-loose text-black/55 italic tracking-tight sm:text-2xl">
                            {post.description}
                        </p>
                    </div>

                    <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2.5rem] border border-black/[0.06]">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-xl max-w-none text-black/70 prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-black prose-a:text-[#00aaff] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-blockquote:border-[#00aaff] prose-blockquote:bg-black/[0.02] prose-blockquote:p-8 prose-blockquote:rounded-[2rem] prose-blockquote:italic prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-p:leading-[2] prose-p:mb-8 prose-li:text-black/70">
                    <MDXRemote source={post.content} />
                </div>

                <section className="mt-16 sm:mt-20">
                    <div className="rounded-[2rem] bg-black/[0.06] px-8 py-10 sm:px-10 sm:py-12">
                        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                            <div>
                                <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl">
                                    Ready To Unleash The Power of ERPNext?
                                </h2>
                                <p className="mt-4 text-xl text-black/75">
                                    We might just be the right partner you need.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 text-3xl font-semibold text-black underline underline-offset-4"
                            >
                                Contact Us <ArrowRight className="h-7 w-7" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Comment Section */}
                <CommentSection
                    slug={slug}
                    initialComments={comments}
                    authorName={post.author}
                    publishedDate={new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                />
            </article>
        </div>
    );
}
