"use client";

import { useState } from "react";
import { User, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitComment } from "@/app/blog/actions";
import { Comment } from "@/lib/comments";
import { motion } from "framer-motion";

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
        <section className="mt-24 pt-24 border-t border-black/[0.05]">
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-[#00aaff]">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-black uppercase">
                    Discussion ({initialComments.length})
                </h2>
            </div>

            {/* Comment Form */}
            <div className="mb-20 p-10 rounded-[2.5rem] border border-black/[0.05] bg-black/[0.01] shadow-2xl shadow-black/5">
                <div className="mb-10">
                    <h3 className="text-xl font-extrabold text-black tracking-tight mb-2">Leave a comment</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00aaff]">Your thoughts matter to us.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="slug" value={slug} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Your Name</label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="E.g. John Doe"
                                required
                                className="h-14 w-full bg-white border-black/[0.05] px-6 focus:border-[#00aaff] rounded-2xl transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="content" className="text-[10px] font-bold uppercase tracking-widest ml-1 text-black/40">Message</label>
                        <Textarea
                            id="content"
                            name="content"
                            placeholder="Share your architectural perspective..."
                            required
                            className="min-h-[140px] w-full rounded-[1.5rem] border-black/[0.05] bg-white px-6 py-4 focus:border-[#00aaff] transition-all"
                        />
                    </div>

                    {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{error}</p>}
                    {success && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 text-[#00aaff] bg-[#00aaff]/10 p-5 rounded-2xl border border-[#00aaff]/20"
                        >
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                            <p className="text-xs font-bold uppercase tracking-widest">Comment submitted for review!</p>
                        </motion.div>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group h-14 w-full gap-3 rounded-full bg-black px-8 text-sm font-bold text-white transition-all hover:bg-black/80 hover:translate-y-[-2px] sm:w-auto"
                    >
                        {isSubmitting ? "Processing..." : (
                            <>
                                Post Comment <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </Button>
                </form>
            </div>

            {/* Comment List */}
            <div className="space-y-12">
                {initialComments.length === 0 ? (
                    <div className="py-20 text-center rounded-[2.5rem] border border-black/[0.05] bg-black/[0.01]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20 italic">The architect's silence is broken first by you.</p>
                    </div>
                ) : (
                    initialComments.map((comment, index) => (
                        <motion.div 
                            key={comment.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black border border-black/[0.05] text-[#00aaff] shadow-lg">
                                <User className="w-7 h-7" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="text-lg font-extrabold text-black tracking-tight uppercase">{comment.name}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                        {new Date(comment.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="rounded-[2rem] border border-black/[0.03] bg-black/[0.01] p-8 group hover:bg-white transition-all duration-500">
                                    <p className="text-black/50 leading-relaxed italic italic-font text-sm">
                                        "{comment.content}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </section>
    );
}
