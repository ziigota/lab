"use client";

import { useForm } from "react-hook-form";
import { createPost } from "./actions";

type FormData = {
    title: string;
    body: string;
};

export default function CreatePostPage() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("body", data.body);

        await createPost(formData);
    };

    return (
        <div style={container}>
            <h2 style={title}>Create Post</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    style={input}
                    placeholder="Title"
                    {...register("title")}
                />

                <textarea
                    style={textarea}
                    placeholder="Body"
                    {...register("body")}
                />

                <button style={button} type="submit">
                    Create
                </button>
            </form>
        </div>
    );
}

const container = {
    maxWidth: "420px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#ffffff",
    border: "1px solid #000",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
    color: "#000",
};

const input = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    color: "#000",
    background: "#fff",
};

const textarea = {
    ...input,
    minHeight: "100px",
};

const title = {
    textAlign: "center" as const,
    marginBottom: "20px",
    color: "#000",
};

const button = {
    width: "100%",
    padding: "10px",
    background: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
};