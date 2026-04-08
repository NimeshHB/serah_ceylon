'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    role: 'Chef, Le Petit Noir',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    imageAlt: 'Marie Dupont, professional chef',
    quote: 'The Ceylon cinnamon has transformed my kitchen. The quality and authenticity are unmatched in Paris. Every dish tells a story now.',
    rating: 5,
    heritage: 'French',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Wellness Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    imageAlt: 'Priya Sharma, wellness coach',
    quote: 'As someone from Sri Lanka living in Paris, these products feel like home. The quality honors our heritage perfectly.',
    rating: 5,
    heritage: 'Sri Lankan Diaspora',
  },
  {
    id: 3,
    name: 'Claude Rousseau',
    role: 'Nutritionist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    imageAlt: 'Claude Rousseau, professional nutritionist',
    quote: 'I recommend Serah Ceylon to all my clients. The wellness blends are pure, traceable, and truly transformative.',
    rating: 5,
    heritage: 'French',
  },
  {
    id: 4,
    name: 'Yasmin El-Habachi',
    role: 'Food Writer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    imageAlt: 'Yasmin El-Habachi, food writer and author',
    quote: 'Finally, authentic Sri Lankan spices in Paris without compromise. The sourcing transparency is refreshing and rare.',
    rating: 5,
    heritage: 'Franco-Egyptian',
  },
]

export function CommunityStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Paris
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the French diaspora to Sri Lankan heritage keepers, discover why Serah Ceylon has become Paris' trusted source for authentic Ceylon flavors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border/50"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-accent font-semibold mt-1">
                    {testimonial.heritage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-12 border border-primary/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                2,500+
              </p>
              <p className="text-muted-foreground">
                Happy customers across Paris
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                4.9/5
              </p>
              <p className="text-muted-foreground">
                Average customer rating
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                98%
              </p>
              <p className="text-muted-foreground">
                Would recommend to friends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
