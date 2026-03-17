import { cacheLife } from 'next/cache'
import TaskList from '@/components/TaskList/TaskList'

type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

async function getTasks(): Promise<Todo[]>{
    'use cache'
    cacheLife('hours')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const data: Todo[] = await res.json()
    return data
}

export default async function TaskPage()
 {
     const tasks = await getTasks()

    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#f7fafc',
            padding: '48px 16px',
        }}>
            <TaskList tasks={tasks} />
        </main>
    )
}