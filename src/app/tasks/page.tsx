// app/tasks/page.tsx — Server Component (родительский)
import TaskList from '@/components/TaskList/TaskList'

type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

export default async function TasksPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const tasks: Todo[] = await res.json()

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