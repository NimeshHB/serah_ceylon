'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { X, Send, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  sender: 'user' | 'curator'
  text: string
  timestamp: Date
}

export function CuratorChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'curator',
      text: 'Namaste! I\'m Serah\'s curator. I\'d love to help you discover the perfect Ceylon spice or tea for your needs. What are you looking for today?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate curator response
    setTimeout(() => {
      const curatorResponses = [
        'That\'s a wonderful choice! Our Ceylon cinnamon pairs beautifully with that. Would you like a recommendation?',
        'I\'m so glad you asked! Let me share some insights about our sourcing practices.',
        'That\'s one of my personal favorites. The flavor profile is absolutely unique. Can I suggest a perfect pairing?',
        'Excellent question! Our spices are sourced directly from heritage gardens with sustainable practices.',
        'You have wonderful taste! Have you tried our wellness blends yet? They complement that beautifully.',
      ]

      const response = curatorResponses[Math.floor(Math.random() * curatorResponses.length)]

      const curatorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'curator',
        text: response,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, curatorMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 flex items-center justify-center group"
          title="Chat with Serah's curator"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-background border border-border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground">
            <div>
              <h3 className="font-bold text-lg">Serah's Curator</h3>
              <p className="text-xs opacity-90">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {message.text}
                  </p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'opacity-70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg px-4 py-2 rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 bg-muted/50">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about our products..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                className="flex-1 bg-background"
              />
              <Button
                size="sm"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Powered by Serah Ceylon expertise
            </p>
          </div>
        </div>
      )}
    </>
  )
}
