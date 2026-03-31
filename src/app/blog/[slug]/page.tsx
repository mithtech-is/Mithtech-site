import { Metadata } from "next";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { getComments } from "@/lib/comments";
import { CommentSection } from "@/components/blog/CommentSection";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

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
        "author": {
            "@type": "Organization",
            "name": "Mith.tech"
        }
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-24 lg:pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Back to Blog */}
                <Link
                    href="/blog"
                    className="group mb-12 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#00aaff] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Articles
                </Link>

                {/* Header */}
                <header className="mb-16 lg:mb-24">
                    <div className="mb-10 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#00aaff]">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#00aaff]">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Mithtech Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#00aaff]">
                                <Clock className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">5 min read</span>
                        </div>
                    </div>
                    
                    <h1 className="mb-10 text-6xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-7xl md:text-8xl uppercase">
                        {post.title}
                    </h1>
                    
                    <div className="p-8 lg:p-12 rounded-[2.5rem] border border-black/[0.05] bg-black/[0.01] shadow-2xl shadow-black/5 relative overflow-hidden group hover:bg-white transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#00aaff] opacity-50" />
                        <p className="text-2xl font-medium leading-loose text-black/50 italic tracking-tight">
                            {post.description}
                        </p>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-2xl max-w-none text-black/70 prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-black prose-headings:uppercase prose-a:text-[#00aaff] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-blockquote:border-[#00aaff] prose-blockquote:bg-black/[0.02] prose-blockquote:p-12 prose-blockquote:rounded-[2rem] prose-blockquote:italic prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-p:leading-[2] prose-p:mb-12">
                    <MDXRemote source={post.content} />
                </div>

                {/* Comment Section */}
                <CommentSection slug={slug} initialComments={comments} />
            </article>
        </div>
    );
}
