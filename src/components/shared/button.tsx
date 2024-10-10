import React from 'react'

type Props = {
    title: string
    type: "button" | "submit" | "reset" | undefined
    onClick: () => void
}

export const Button = (props: Props) => {
    const { title, type, onClick } = props
    return (
        <button onClick={() => onClick()} type={type}
            className=''
        >
            {title}
        </button>
    )
}