import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

type Props = {
    children: React.ReactNode
    mode?: 'home' | 'chat'
}

export const Layout = (props: Props) => {

    const { children, mode } = props


    return mode === 'home' ? (
        <main className='bg-white text-black min-h-screen flex w-full'>
            <div className='grid h-screen'>
                <Sidebar />
            </div>
            <div className='grid w-full h-full'>
                <Header />
                <div className='min-h-[calc(100vh_-_80px_-_24px)] w-full'>
                    {children}
                </div>
                <Footer />
            </div>
        </main>
    ) : (
        <main>
            {children}
        </main>
    )
}