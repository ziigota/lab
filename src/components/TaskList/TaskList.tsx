'use client'

import TaskCard from '../TaskCard/TaskCard'

type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

type Props = {
    tasks: Todo[]
}

export default function TaskList({ tasks }: Props) {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            maxWidth: '700px',
            margin: '0 auto',
        }}>
            <h1 style={{
                fontFamily: "'Georgia', serif",
                fontSize: '26px',
                fontWeight: 700,
                color: '#1a202c',
                marginBottom: '24px',
                marginTop: 0,
                letterSpacing: '-0.02em',
            }}>
                Task List
            </h1>

            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}