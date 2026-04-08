'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
                Heritage & Craftsmanship
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Discover Ceylon&apos;s
                <span className="block text-accent">Finest Spices & Teas</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Sourced directly from Sri Lanka&apos;s heritage gardens and crafted for Paris&apos; most discerning palates. Each product tells a story of sustainable farming, traditional processing, and uncompromising quality.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore Collections
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Learn Our Story
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 space-y-4 border-t border-border">
              <p className="text-sm text-muted-foreground font-semibold">
                Why Choose Serah Ceylon
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Directly sourced from family farms and heritage gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Transparent sourcing with interactive maps and stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Premium quality certified for European export standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            <Image
              src="/images/hero.jpg"
              alt="Sri Lankan spice gardens and heritage tea plantations"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
