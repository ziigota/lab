"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostsPage() {
    const [date, setDate] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDate(new Date().toISOString());
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={container}>
            <h2 style={title}>Posts</h2>

            <p style={dateStyle}>{date}</p>

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