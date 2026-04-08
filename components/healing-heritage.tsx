'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Leaf, Zap, Brain } from 'lucide-react'

const healingItems = [
  {
    id: 'kolakanda',
    name: 'Kolakanda',
    subtitle: 'Ancient Ayurvedic Blend',
    description: 'A traditional Sri Lankan healing powder with turmeric, black pepper, and ginger. Used for centuries in Ayurvedic medicine to support immunity and digestion.',
    benefits: ['Boosts Immunity', 'Aids Digestion', 'Anti-inflammatory'],
    icon: Heart,
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    id: 'golden-milk',
    name: 'Golden Milk Blend',
    subtitle: 'Wellness Ritual',
    description: 'Ceylon cinnamon, turmeric, and cardamom create this warming ceremonial drink. Perfect for evening wellness routines and spiritual practices.',
    benefits: ['Calming', 'Nutrient-rich', 'Sleep Support'],
    icon: Brain,
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 'immunity-chai',
    name: 'Immunity Chai',
    subtitle: 'Wellness Protection',
    description: 'Cardamom, cinnamon, black pepper, and clove combine to create an immune-boosting chai. A daily ritual for seasonal wellness.',
    benefits: ['Immune Support', 'Energy Boost', 'Circulation'],
    icon: Zap,
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 'wellness-tea',
    name: 'Wellness Tea',
    subtitle: 'Pure Plant Power',
    description: 'A blend of Sri Lankan herbs, dried flowers, and healing plants. Each sip delivers nutrients and wellness traditions passed down through generations.',
    benefits: ['Detoxifying', 'Rejuvenating', 'Balancing'],
    icon: Leaf,
    color: 'from-green-500/20 to-emerald-500/20',
  },
]

export function HealingHeritage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
            Wellness & Tradition
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Healing Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover Sri Lanka&apos;s ancient wellness traditions. Each blend is rooted in Ayurvedic wisdom and traditional healing practices, crafted to support your wellbeing naturally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {healingItems.map((item) => {
            const IconComponent = item.icon

            return (
              <div
                key={item.id}
                className={`p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${item.color}`}
              >
                {/* Icon */}
                <div className="p-4 bg-white rounded-lg w-fit mb-6">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">
                  {item.subtitle}
                </p>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 text-xs font-semibold bg-white/40 text-foreground rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/products/wellness-${item.id}`} className="block">
                  <button className="w-full px-4 py-2 border border-foreground/20 text-foreground hover:bg-foreground/5 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Begin Your Wellness Journey
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our complete range of Ayurvedic blends and traditional wellness products sourced directly from Sri Lanka.
          </p>
          <Link href="/collections?category=wellness" className="inline-block">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Wellness Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
