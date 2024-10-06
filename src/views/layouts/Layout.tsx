import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
    children: React.ReactNode
    mode?: 'home' | 'chat'
}

export const Layout = (props: Props) => {
    const { children, mode } = props
    return mode === 'home' ? (
        <main className='bg-white text-black min-h-screen grid grid-rows-[100px_calc(100%-400px)_300px]'>
            <Header />
            <div className='min-h-[100vh]'>
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