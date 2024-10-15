import React from 'react'
import { cn, useDebounce, useMenu } from '@atrgpt/components'

export const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useMenu();

    const show = useDebounce(isSidebarOpen, 600)

    return (
        <div
            className={cn('bg-black duration-500 transition-all text-[green] h-full',
                isSidebarOpen && 'w-[300px] translate-x-0 visible',
                !isSidebarOpen && 'w-0 invisible'
            )}>
            <>
                {isSidebarOpen && show && (
                    <button type='button' onClick={toggleSidebar}>
                        {isSidebarOpen ? "Close" : "Open"}
                    </button>
                )}
            </>
        </div>
    )
}