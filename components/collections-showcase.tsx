'use client'

import { products } from '@/lib/products'
import { ProductCard } from './product-card'

type Collection = 'spices' | 'teas' | 'blends' | 'wellness'

const collectionInfo: Record<Collection, { title: string; description: string }> = {
  spices: {
    title: 'Premium Spices',
    description: 'Hand-harvested and traditionally processed spices from Sri Lanka\'s finest gardens.',
  },
  teas: {
    title: 'Heritage Teas',
    description: 'Rare and exceptional teas from the mountain regions of Ceylon, crafted with care.',
  },
  blends: {
    title: 'Wellness Blends',
    description: 'Carefully curated blends designed to support your wellness journey.',
  },
  wellness: {
    title: 'Wellness Collection',
    description: 'Ingredients and blends specifically chosen for their health benefits.',
  },
}

interface CollectionsShowcaseProps {
  featured?: Collection[]
}

export function CollectionsShowcase({ featured }: CollectionsShowcaseProps) {
  const collectionsToShow = featured || ['spices', 'teas', 'blends']

  return (
    <section id="collections" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {collectionsToShow.map((collection) => {
            const collectionProducts = products.filter(p => p.collection === collection)
            const info = collectionInfo[collection]

            return (
              <div key={collection} className="space-y-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/20 uppercase tracking-wide">
                      {collection}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {info.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      {info.description}
                    </p>
                  </div>

                  <a
                    href={`#${collection}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View All →
                  </a>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collectionProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
