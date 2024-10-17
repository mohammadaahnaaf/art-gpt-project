import React from 'react'
import { Logo, cn, useDebounce, useMenu } from '@atrgpt/components'
import { HistoryIcon, XIcon } from '@atrgpt/components';
import Link from 'next/link';

export const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useMenu();

    const show = useDebounce(isSidebarOpen, 300)

    return (
        <div
            className={cn('bg-black duration-500 transition-all text-white h-full',
                isSidebarOpen && 'w-[300px] translate-x-0 visible',
                !isSidebarOpen && 'w-0 invisible'
            )}>
            <div>
                <div
                    className={cn("transition-opacity invisible opacity-0 duration-300",
                        isSidebarOpen && show && "!visible opacity-100",
                        // !isSidebarOpen && "!invisible opacity-0",
                    )}>
                    <div className='h-20 p-4 flex items-center justify-between'>
                        <Link href='/'>
                            <Logo className='h-14 w-full' fill='white' />
                        </Link>
                        <button type='button' onClick={toggleSidebar}>
                            <XIcon />
                        </button>
                    </div>
                    <div className='p-4'>
                        <h2 className='flex items-center gap-2 text-white'>
                            <HistoryIcon />
                            <span>History</span>
                        </h2>
                        <div className='grid gap-2 items-center pl-4 py-4'>
                            <h3>What&apos;s wrong in this code? fix this</h3>
                            <h3>What&apos;s wrong in this code? fix this</h3>
                            <h3>What&apos;s wrong in this code? fix this</h3>
                            <h3>What&apos;s wrong in this code? fix this</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}