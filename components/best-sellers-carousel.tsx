'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export function BestSellersCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { addItem } = useCart()
  
  const bestSellers = products.filter(p => p.featured).slice(0, 15)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('carousel-container')
    if (container) {
      const scrollAmount = 400
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              Curated Best Sellers
            </h2>
            <p className="text-muted-foreground">
              Loved by our Paris community
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 md:p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 md:p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            id="carousel-container"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-center group"
              >
                <Link href={`/products/${product.id}`} className="h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                          Best Seller
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.origin}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-accent text-accent"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">(5.0)</span>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
                        <span className="text-xl font-bold text-foreground">
                          €{product.price}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            addItem(product)
                          }}
                          className="p-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
                          title="Quick add to cart"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/collections" className="inline-block">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
