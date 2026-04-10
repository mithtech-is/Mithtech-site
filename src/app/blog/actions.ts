"use server";

import { addComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";

export async function submitComment(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const content = formData.get("content") as string;
    const slug = formData.get("slug") as string;

    if (!name || !email || !content || !slug) {
        return { error: "Missing required fields" };
    }

    if (name.length > 100 || email.length > 150 || content.length > 1000) {
        return { error: "Input exceeds allowed length" };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: "Enter a valid email address" };
    }

    try {
        await addComment({ name, email, content, slug });
        revalidatePath(`/blog/${slug}`);
        return { success: true };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
        return { error: "Failed to submit comment" };
    }
}
