'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
            The Story of Serah Ceylon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how centuries-old traditions and sustainable practices come together to create the world&apos;s finest spices and teas.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-black group">
          {/* Thumbnail/Poster */}
          <Image
            src="/images/hero.jpg"
            alt="Serah Ceylon Story"
            fill
            className="object-cover w-full h-full"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

          {/* Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center hover:bg-secondary transition-colors duration-300 shadow-lg">
              <Play className="w-8 h-8 text-secondary-foreground fill-secondary-foreground" />
            </div>
          </button>

          {/* Video IFrame (shown when playing) */}
          {isPlaying && (
            <div className="absolute inset-0 z-50">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* Video Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-light text-secondary mb-2">500+</div>
            <p className="text-muted-foreground">Farming Families Supported</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-secondary mb-2">50+</div>
            <p className="text-muted-foreground">Years of Heritage Combined</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-secondary mb-2">100%</div>
            <p className="text-muted-foreground">Traceable & Sustainable</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 border border-secondary/30 rounded-lg bg-card text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            Start your journey with Serah Ceylon. Explore our collections and discover why thousands of discerning customers worldwide trust us for their wellness and culinary needs.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2">
            Explore Collections
          </Button>
        </div>
      </div>
    </section>
  )
}
