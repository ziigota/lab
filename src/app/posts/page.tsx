import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";

async function DateContent() {
    await connection();

    const date = new Date().toISOString();

    return (
        <p style={dateStyle}>
            {date}
        </p>
    );
}

export default function PostsPage() {
    return (
        <div style={container}>
            <h2 style={title}>Posts</h2>

            <Suspense fallback={<p>Loading...</p>}>
                <DateContent />
            </Suspense>

            <Link href="/posts/create" style={link}>
                Create Post
            </Link>
        </div>
    );
}

const container = {
    textAlign: "center" as const,
    marginTop: "60px",
    fontFamily: "Arial",
};

const title = {
    marginBottom: "20px",
};

const dateStyle = {
    marginBottom: "20px",
    fontSize: "14px",
};

const link = {
    display: "inline-block",
    padding: "10px 15px",
    background: "#0070f3",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
};