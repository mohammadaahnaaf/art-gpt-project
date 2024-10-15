import { useMenu } from '@atrgpt/components';
import React from 'react'


export const Header = () => {
    const { isSidebarOpen, toggleSidebar } = useMenu();
    return (
        <header className='bg-[pink] h-20 w-full flex items-center'>
            <button type='button' onClick={toggleSidebar}>
                {isSidebarOpen ? "Close" : "Open"}
            </button>
        </header>
    )
}