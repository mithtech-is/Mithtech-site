"use client";

import { useState } from "react";
import { User, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitComment } from "@/app/blog/actions";
import { Comment } from "@/lib/comments";

interface CommentSectionProps {
    slug: string;
    initialComments: Comment[];
}

export function CommentSection({ slug, initialComments }: CommentSectionProps) {
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
        <section className="mt-16 pt-16 border-t">
            <h2 className="text-3xl font-bold mb-10">Comments ({initialComments.length})</h2>

            {/* Comment Form */}
            <div className="mb-12 rounded-[2rem] border bg-muted/30 p-5 shadow-inner sm:mb-16 sm:p-8">
                <h3 className="text-xl font-bold mb-6">Leave a comment</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="slug" value={slug} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                className="bg-background rounded-xl h-12"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="content" className="text-sm font-medium">Comment</label>
                        <Textarea
                            id="content"
                            name="content"
                            placeholder="Share your thoughts..."
                            required
                            className="bg-background rounded-2xl min-h-[120px] resize-none"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && (
                        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100">
                            <CheckCircle2 className="w-5 h-5" />
                            <p className="text-sm font-medium">Comment submitted successfully! It will appear shortly.</p>
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 min-h-[48px] w-full gap-2 rounded-full px-6 sm:w-auto sm:px-8"
                    >
                        {isSubmitting ? "Submitting..." : (
                            <>
                                <Send className="w-4 h-4" /> Post Comment
                            </>
                        )}
                    </Button>
                </form>
            </div>

            {/* Comment List */}
            <div className="space-y-8">
                {initialComments.length === 0 ? (
                    <p className="text-muted-foreground italic text-center py-8">No comments yet. Be the first to join the conversation!</p>
                ) : (
                    initialComments.map((comment) => (
                        <div key={comment.id} className="flex gap-3 sm:gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/5 bg-foreground/5 sm:h-12 sm:w-12">
                                <User className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="font-bold">{comment.name}</h4>
                                    <span className="text-xs text-muted-foreground">
                                        {new Date(comment.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="rounded-2xl border border-foreground/[0.03] bg-muted/20 p-4 sm:p-6">
                                    <p className="text-muted-foreground leading-relaxed italic line-height-relaxed">
                                        &quot;{comment.content}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
