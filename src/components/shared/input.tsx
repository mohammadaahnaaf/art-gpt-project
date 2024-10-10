import React, { ChangeEvent } from 'react'
import { cn } from '../hooks'

type InputProps = {
    title?: string
    type: string
    id: string
    onChange: (e: ChangeEvent) => void
    value: string | number | undefined
}

export const Input = (props: InputProps) => {
    const { title, id, onChange, type, value } = props
    return (
        <div>
            <label htmlFor={id}
                className={cn('',
                    !title && 'hidden')}>{title}</label>
            <input id={id} value={value} type={type} onChange={(e) => onChange(e)}
                className=''
            />
        </div>
    )
}