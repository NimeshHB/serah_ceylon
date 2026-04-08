'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { ShoppingCart, MapPin } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const collectionColor = {
    spices: 'bg-primary/10 text-primary',
    teas: 'bg-accent/10 text-accent',
    blends: 'bg-secondary/10 text-secondary',
    wellness: 'bg-emerald-500/10 text-emerald-600',
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group h-full flex flex-col rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Collection Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${collectionColor[product.collection]}`}>
            {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-lg border border-border">
            <span className="text-sm font-bold text-accent">${product.price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-4">
          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Tasting Notes */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Tasting Notes
            </p>
            <div className="flex flex-wrap gap-1">
              {product.tastingNotes.slice(0, 3).map((note, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3 text-accent" />
            <span>{product.origin}</span>
          </div>

          {/* Add to Cart Button */}
          <Button
            size="sm"
            className="mt-auto w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  )
}
