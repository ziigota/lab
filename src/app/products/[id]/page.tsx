import { cache } from 'react'
import type { Metadata } from 'next'
type Post = {
    userId: number
    id: number
    title: string
    body: string
}
type Props = {
    params: Promise<{ id: string }>
}
const getPost = cache(async (id: string): Promise<Post> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch post')
    return res.json()
})
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({ params }: Props) {
    const { id } = await params
    const post = await getPost(id)

    return (
        <div style={{ marginTop: '30px', padding: '0 20px' }}>
            <h1>{post.title}</h1>
            <p style={{ color: '#fff', fontSize: '20px', marginTop: '24px' }}>
                {post.body}
            </p>
        </div>
    )
}