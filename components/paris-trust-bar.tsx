'use client'

import { Truck, MapPin, Leaf, Shield } from 'lucide-react'

const trustPoints = [
  {
    icon: Truck,
    title: 'Paris Express Delivery',
    description: 'Same-day delivery available for orders before 2 PM in central Paris',
  },
  {
    icon: MapPin,
    title: 'Local Pickup Points',
    description: 'Collect from 8 neighborhood locations across Paris',
  },
  {
    icon: Leaf,
    title: '100% Organic Certified',
    description: 'All products certified organic and sustainably sourced',
  },
  {
    icon: Shield,
    title: 'Heritage Guarantee',
    description: '100% satisfaction or full refund within 30 days',
  },
]

export function ParisTrustBar() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => {
            const IconComponent = point.icon

            return (
              <div key={point.title} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
