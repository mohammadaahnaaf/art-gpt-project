import { Logo, useDebounce, useMenu } from '@atrgpt/components';
import React from 'react'


export const Header = () => {

    const { isSidebarOpen, toggleSidebar } = useMenu();
    const show = useDebounce(isSidebarOpen, 600)

    return (
        <header className='h-20 w-full flex items-center p-4'>
            {!show && !isSidebarOpen && (
                <button type='button' onClick={toggleSidebar}>
                    <Logo className='h-14 w-full' fill='green' />
                </button>
            )}
        </header>
    )
}