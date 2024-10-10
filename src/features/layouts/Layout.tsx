import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { useMenu } from '@atrgpt/components'
import { Sidebar } from './Sidebar'

type Props = {
    children: React.ReactNode
    mode?: 'home' | 'chat'
}

export const Layout = (props: Props) => {

    const { children, mode } = props
    const { isSidebarOpen, toggleSidebar } = useMenu();

    return mode === 'home' ? (
        <main className='bg-white text-black min-h-screen grid grid-rows-[100px_calc(100%-400px)_300px]'>
            <Header />
            <div className='min-h-[100vh]'>
                <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                {children}
            </div>
            <Footer />
        </main>
    ) : (
        <main>
            {children}
        </main>
    )
}