import { Chat, Layout } from '@atrgpt/features'
import Head from 'next/head'
import React from 'react'


const ChatPage = () => {
    
    return (
        <>
            <Head>
                <title>ArtGPT | Chat</title>
            </Head>
            <Layout>
                <Chat />
            </Layout>
        </>
    )
}

export default ChatPage