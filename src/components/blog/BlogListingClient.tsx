"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/blog";

interface BlogListingClientProps {
    posts: BlogPost[];
}

export function BlogListingClient({ posts }: BlogListingClientProps) {
    const categories = useMemo(
        () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
        [posts]
    );
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = useMemo(() => {
        if (selectedCategory === "All") return posts;
        return posts.filter((post) => post.category === selectedCategory);
    }, [posts, selectedCategory]);

    return (
        <section className="pb-16 sm:pb-20 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-[400px]">
                    <label htmlFor="blog-category" className="sr-only">
                        Browse by category
                    </label>
                    <select
                        id="blog-category"
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                        className="h-12 w-full rounded-2xl border border-black/[0.08] bg-black/[0.02] px-4 text-[18px] text-black/75 outline-none transition-colors focus:border-[#00aaff]"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category === "All" ? "Browse by category" : category}
                            </option>
                        ))}
                    </select>
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="mt-10 rounded-[2rem] border border-black/[0.06] bg-black/[0.02] p-8 sm:p-10">
                        <p className="text-lg text-black/55">No posts found in this category yet.</p>
                    </div>
                ) : (
                    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                slug={post.slug}
                                author={post.author}
                                category={post.category}
                                coverImage={post.coverImage}
                                readTime={post.readTime}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
