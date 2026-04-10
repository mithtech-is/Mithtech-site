"use client";

import { useState } from "react";
import { MessageCircle, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitComment } from "@/app/blog/actions";
import { Comment } from "@/lib/comments";
import { motion } from "framer-motion";

interface CommentSectionProps {
    slug: string;
    initialComments: Comment[];
    authorName: string;
    publishedDate: string;
}

export function CommentSection({ slug, initialComments, authorName, publishedDate }: CommentSectionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(event.currentTarget);
        const result = await submitComment(formData);

        if (result.error) {
            setError(result.error);
        } else {
            setSuccess(true);
            (event.target as HTMLFormElement).reset();
        }
        setIsSubmitting(false);
    }

    return (
        <section className="mt-20 border-t border-black/[0.08] pt-10 sm:mt-24">
            <div className="flex items-center justify-between gap-4 border-b border-black/[0.08] pb-4 text-black/55">
                <div className="flex items-center gap-5 text-sm">
                    <span className="inline-flex items-center gap-2">
                        <Heart className="h-5 w-5" /> 0
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" /> {initialComments.length}
                    </span>
                </div>
                <div className="text-sm">
                    Published on {publishedDate}
                </div>
            </div>

            <div className="py-8">
                <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-black/[0.05] text-black/45">
                        <User className="h-9 w-9" />
                    </div>
                    <h2 className="text-3xl font-medium tracking-tight text-black">{authorName}</h2>
                </div>

                <p className="mt-8 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                    Comments
                </p>
                <p className="mt-4 text-[30px] leading-relaxed text-black/50">
                    {initialComments.length === 0 ? "No comments yet. Start a new discussion" : `${initialComments.length} comment${initialComments.length === 1 ? "" : "s"} in this discussion`}
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-black/[0.08] p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="hidden" name="slug" value={slug} />

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[18px] text-black/80">Your Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    required
                                    className="h-12 rounded-2xl border-black/[0.06] bg-black/[0.03] px-4 focus:border-[#00aaff]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[18px] text-black/80">Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="h-12 rounded-2xl border-black/[0.06] bg-black/[0.03] px-4 focus:border-[#00aaff]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="content" className="text-[18px] text-black/80">Add a comment</label>
                            <Textarea
                                id="content"
                                name="content"
                                required
                                className="min-h-[150px] rounded-2xl border-black/[0.06] bg-black/[0.03] px-4 py-4 focus:border-[#00aaff]"
                            />
                        </div>

                        <p className="text-sm text-black/50">Ctrl+Enter to add comment</p>

                        {error && <p className="text-sm text-red-600">{error}</p>}
                        {success && (
                            <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-[#0077aa]"
                            >
                                Comment submitted for review.
                            </motion.p>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11 rounded-xl bg-black px-5 text-base text-white hover:bg-black/85"
                        >
                            {isSubmitting ? "Submitting..." : "Comment"}
                        </Button>
                    </form>
                </div>

                {initialComments.length > 0 && (
                    <div className="mt-10 space-y-6">
                        {initialComments.map((comment, index) => (
                            <motion.div
                                key={comment.id}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-[1.5rem] border border-black/[0.06] bg-black/[0.02] p-6"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-lg font-semibold text-black">{comment.name}</h3>
                                    <p className="text-sm text-black/40">
                                        {new Date(comment.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <p className="mt-4 text-base leading-8 text-black/65">{comment.content}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
