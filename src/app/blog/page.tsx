import { getBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Insights & Updates",
    description: "Stay updated with the latest insights on ERP, eCommerce, automation, and analytics from Mithtech.",
};

export default function BlogListing() {
    const posts = getBlogPosts();

    return (
        <div className="flex flex-col w-full bg-background overflow-hidden px-0 mx-0">
            {/* Hero Section */}
            <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 border-b overflow-hidden px-0 mx-0">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(0,0,0,0.03)_0%,transparent_100%)]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6 block">
                            KNOWLEDGE HUB
                        </span>
                        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[0.9]">
                            INSIGHTS & <br />
                            <span className="text-muted-foreground">ARTICLES</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            The latest trends in enterprise technology, software architecture, and business automation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 sm:py-20 md:py-24 px-0 mx-0">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    {posts.length === 0 ? (
                        <div className="py-16 text-center sm:py-20">
                            <p className="text-base text-muted-foreground sm:text-xl">Stay tuned. We are crafting some amazing content for you!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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

