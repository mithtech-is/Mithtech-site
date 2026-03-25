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
        <div className="bg-background min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
                {/* Back to Blog */}
                <Link
                    href="/blog"
                    className="group mb-10 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-12"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to All Articles
                </Link>

                {/* Header */}
                <header className="mb-12 sm:mb-16">
                    <div className="mb-6 flex flex-col gap-3 text-sm text-muted-foreground sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Mithtech Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>5 min read</span>
                        </div>
                    </div>
                    <h1 className="mb-6 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8">
                        {post.title}
                    </h1>
                    <p className="border-l-4 border-foreground/10 pl-4 text-base italic leading-relaxed text-muted-foreground sm:pl-6 sm:text-lg md:text-xl lg:text-2xl">
                        {post.description}
                    </p>
                </header>

                {/* Content */}
                <div className="prose mb-20 max-w-none text-sm prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground dark:prose-invert sm:prose-lg md:mb-24">
                    <MDXRemote source={post.content} />
                </div>

                {/* Comment Section */}
                <CommentSection slug={slug} initialComments={comments} />
            </article>
        </div>
    );
}
