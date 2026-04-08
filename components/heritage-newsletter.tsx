'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function HeritageNewsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      // Reset message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
          <Mail className="h-8 w-8 text-primary" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Join the Heritage
        </h2>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
          Get exclusive recipes, sourcing stories, wellness tips, and special offers delivered to your inbox. No spam, just pure Ceylon heritage.
        </p>

        {/* Form */}
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-4 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-4 bg-accent/10 border border-accent/30 rounded-lg text-center">
            <p className="text-accent font-semibold flex items-center justify-center gap-2">
              <span className="text-lg">✓</span>
              Welcome to the Heritage family!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Check your email for exclusive welcome offer.
            </p>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Recipes & Stories</p>
            <p className="text-sm text-muted-foreground">
              Authentic Sri Lankan recipes and sourcing stories from family farms
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Wellness Tips</p>
            <p className="text-sm text-muted-foreground">
              Ayurvedic wisdom and traditional healing practices
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Exclusive Offers</p>
            <p className="text-sm text-muted-foreground">
              15% off first order and early access to limited editions
            </p>
          </div>
        </div>

        {/* Trust */}
        <p className="text-xs text-muted-foreground mt-12">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
