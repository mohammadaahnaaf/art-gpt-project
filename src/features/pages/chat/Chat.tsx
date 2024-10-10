import { cn } from '@atrgpt/components'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

// Simulated response generation
const generateResponse = async (message: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    return `This is a simulated response to: "${message}"`
}

// Simulated suggestions
const getSuggestions = (input: string): string[] => {
    const suggestions = [
        'How does AI work?',
        'What is machine learning?',
        'Explain neural networks',
        'What are the applications of AI?'
    ]
    return suggestions.filter(s => s.toLowerCase().includes(input.toLowerCase()))
}

export function Chat() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([])
    const [input, setInput] = useState('')
    const [hover, setHover] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        if (input.length > 0) {
            setSuggestions(getSuggestions(input))
        } else {
            setSuggestions([])
        }
    }, [input])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim() === '') return

        setMessages(prev => [...prev, { role: 'user', content: input }])
        setInput('')
        setIsGenerating(true)

        const response = await generateResponse(input)
        let displayedResponse = ''

        for (let i = 0; i < response.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 50)) // Adjust speed here
            displayedResponse += response[i]
            setMessages(prev => [
                ...prev.slice(0, -1),
                { role: 'assistant', content: displayedResponse }
            ])
        }

        setIsGenerating(false)
    }

    return (
        <>

            <div className={cn('min-h-screen bg-gradient-to-tr transition-all duration-300',
                hover && "from-teal-500 via-purple-900 to-rose-800",
                !hover && "to-teal-500 from-purple-900 via-rose-800"
            )}>
                <div>
                    <button type='button' onClick={() => setHover(!hover)}>Click Me</button>
                </div>
            </div>

            <div className="hidden flex-col h-screen max-w-2xl mx-auto p-4">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                                } max-w-[80%]`}
                        >
                            {message.content}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full pr-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={isGenerating}
                        className="absolute right-1 top-1 bottom-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
                    >
                        Send
                    </button>
                </form>
                {suggestions.length > 0 && (
                    <ul className="mt-2 bg-white border rounded-md shadow-lg">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => setInput(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}