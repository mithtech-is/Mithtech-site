"use server";

import { addComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";

export async function submitComment(formData: FormData) {
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const slug = formData.get("slug") as string;

    if (!name || !content || !slug) {
        return { error: "Missing required fields" };
    }

    if (name.length > 100 || content.length > 1000) {
        return { error: "Input exceeds allowed length" };
    }

    try {
        await addComment({ name, content, slug });
        revalidatePath(`/blog/${slug}`);
        return { success: true };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
        return { error: "Failed to submit comment" };
    }
}
