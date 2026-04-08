'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Leaf, Flame, Droplets, Utensils } from 'lucide-react'

const categories = [
  {
    id: 'tea',
    name: 'Ceylon Teas',
    description: 'Premium black, white, and green teas from heritage gardens',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-500',
    size: 'col-span-1 row-span-2',
    image: '/images/black-tea.jpg',
  },
  {
    id: 'spices',
    name: 'Sri Lankan Spices',
    description: 'Cinnamon, cardamom, nutmeg and rare blends',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    size: 'col-span-1 row-span-1',
    image: '/images/cinnamon.jpg',
  },
  {
    id: 'wellness',
    name: 'Wellness & Ayurveda',
    description: 'Traditional healing herbs and wellness blends',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    size: 'col-span-1 row-span-1',
    image: '/images/cardamom.jpg',
  },
  {
    id: 'snacks',
    name: 'Heritage Snacks',
    description: 'Artisanal bakes, crackers, and specialty treats',
    icon: Utensils,
    color: 'from-amber-500 to-yellow-500',
    size: 'col-span-2 row-span-1',
    image: '/images/golden-milk.jpg',
  },
]

export function CategoryBento() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the full range of Sri Lankan heritage products, from rare teas to traditional wellness remedies
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {categories.map((category) => {
            const IconComponent = category.icon

            return (
              <Link
                key={category.id}
                href={`/collections?category=${category.id}`}
                className={`group relative overflow-hidden rounded-2xl ${category.size} cursor-pointer`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
                  <div>
                    <div className="inline-block p-3 bg-white/20 rounded-lg mb-4 group-hover:bg-white/30 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-balance">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-4">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold">Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
