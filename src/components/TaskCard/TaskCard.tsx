'use client'

import { useState } from 'react'

type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

type Props = {
    task: Todo
}

export default function TaskCard({ task }: Props) {
    const [isCompleted, setIsCompleted] = useState(task.completed)

    return (
        <div
            onClick={() => setIsCompleted(!isCompleted)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                marginBottom: '12px',
                borderRadius: '12px',
                border: `1px solid ${isCompleted ? '#c6f6d5' : '#e2e8f0'}`,
                backgroundColor: isCompleted ? '#f0fff4' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            }}
        >

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: `2px solid ${isCompleted ? '#38a169' : '#cbd5e0'}`,
                    backgroundColor: isCompleted ? '#38a169' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                }}>
                    {isCompleted && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
                <div>
                    <p style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 600,
                        color: isCompleted ? '#718096' : '#2d3748',
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        fontFamily: "'Georgia', serif",
                    }}>
                        {task.title}
                    </p>
                    <p style={{
                        margin: '3px 0 0',
                        fontSize: '12px',
                        color: '#a0aec0',
                        fontFamily: 'monospace',
                    }}>
                        ID: {task.id} · User: {task.userId}
                    </p>
                </div>
            </div>


            <span style={{
                fontSize: '12px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '20px',
                backgroundColor: isCompleted ? '#2d3748' : 'transparent',
                color: isCompleted ? '#ffffff' : '#a0aec0',
                border: isCompleted ? 'none' : '1px solid #e2e8f0',
                whiteSpace: 'nowrap',
                letterSpacing: '0.03em',
                transition: 'all 0.2s ease',
            }}>
        {isCompleted ? 'Completed' : 'In Progress'}
      </span>
        </div>
    )
}