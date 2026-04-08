'use client'

import { Leaf, MapPin, Sparkles, Award, Droplets, Heart } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: 'Source Tracing',
    description: 'Every ingredient traced to its origin in Sri Lanka with complete transparency on sourcing, elevation, and farmer stories.'
  },
  {
    icon: Leaf,
    title: 'Authentic Heritage',
    description: 'Centuries-old traditions meet modern craftsmanship. We preserve the essence of Ceylon while delivering to contemporary palates.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected, small-batch productions. Each product meets rigorous standards for flavor, aroma, and potency.'
  },
  {
    icon: Heart,
    title: 'Wellness Focused',
    description: 'Curated for health benefits. Every product is chosen for its nutritional profile and traditional wellness properties.'
  },
  {
    icon: Sparkles,
    title: 'Artisanal Excellence',
    description: 'Small-scale production by master craftspeople, ensuring exceptional quality and personal attention to detail.'
  },
  {
    icon: Droplets,
    title: 'Pure & Natural',
    description: 'No additives, no artificial flavors. Just authentic Ceylon spices and teas in their purest form.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-foreground">
            Why Choose Serah Ceylon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just sell spices and teas—we share stories, wellness, and the authentic heritage of Sri Lanka with every purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-6 md:p-8 border border-secondary/30 rounded-lg bg-gradient-to-r from-secondary/5 to-transparent">
          <div className="flex items-start gap-4">
            <div className="w-1 h-full bg-secondary rounded-full flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg text-foreground font-medium mb-2">
                Curated for Paris&apos; Finest Palates
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our collections are carefully selected for discerning customers who appreciate authentic quality and meaningful sourcing. We believe in transparency, sustainability, and the transformative power of pure, heritage-crafted ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
