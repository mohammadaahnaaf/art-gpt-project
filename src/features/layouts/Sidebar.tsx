import React from 'react'

type Props = {
    open: boolean
    toggleSidebar: () => void
}
export const Sidebar = (props: Props) => {
    const { open, toggleSidebar } = props
    return (
        <s>
            <button type='button' onChange={toggleSidebar}>Open</button>
            {open}
        </s>
    )
}