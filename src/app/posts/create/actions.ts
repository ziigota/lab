"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const body = formData.get("body");

    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    revalidatePath("/posts");

    redirect("/posts");
}