'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/images/hero-slide1.jpg',
    badge: 'Sri Lankan Heritage Since 1972',
    title: 'Experience Ceylon\'s',
    titleAccent: 'Living Heritage',
    subtitle: 'From misty mountain farms to your doorstep — authentic spices, teas, and natural products sourced directly from Sri Lanka\'s finest growers.',
    cta: 'Shop Now',
    ctaLink: '#collections',
    ctaSecondary: 'Explore Products',
    ctaSecondaryLink: '#best-sellers',
    overlay: 'from-black/70 via-black/40 to-black/20',
  },
  {
    id: 2,
    image: '/images/hero-slide2.jpg',
    badge: 'Pure & Authentic Spices',
    title: 'The Finest Spices',
    titleAccent: 'From Ceylon\'s Highlands',
    subtitle: 'Hand-harvested cinnamon, cardamom, cloves, and more — each spice tells a story of centuries of tradition and passion.',
    cta: 'Browse Spices',
    ctaLink: '/category/spices',
    ctaSecondary: 'Learn More',
    ctaSecondaryLink: '#sourcing',
    overlay: 'from-black/80 via-black/50 to-transparent',
  },
  {
    id: 3,
    image: '/images/hero-slide3.jpg',
    badge: 'Ethically Sourced',
    title: 'Picked with Care,',
    titleAccent: 'Delivered with Love',
    subtitle: 'Behind every leaf and spice is a farmer\'s story. We partner directly with local communities to bring you the most authentic flavors.',
    cta: 'Our Story',
    ctaLink: '#sourcing',
    ctaSecondary: 'View Teas',
    ctaSecondaryLink: '/category/tea',
    overlay: 'from-black/70 via-black/30 to-transparent',
  },
  {
    id: 4,
    image: '/images/hero-slide4.jpg',
    badge: 'All Categories Available',
    title: 'Everything',
    titleAccent: 'Sri Lankan',
    subtitle: 'From exotic fruits and groceries to health products and cosmetics — your one-stop destination for authentic Sri Lankan goods.',
    cta: 'All Products',
    ctaLink: '#collections',
    ctaSecondary: 'View Categories',
    ctaSecondaryLink: '#categories',
    overlay: 'from-black/60 via-black/30 to-transparent',
  },
]

const SLIDE_DURATION = 5500 // ms

export function ImmersiveHero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
    setProgress(0)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [next])

  // Progress bar
  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
    }, 30)
    return () => clearInterval(tick)
  }, [current])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  const slide = slides[current]

  return (
    <section className="relative w-full h-screen min-h-[520px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
            priority={i === 0}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-end sm:items-center pb-24 sm:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="mb-6 md:mb-8 animate-fade-in-up">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Serah Ceylon Logo"
                  width={240}
                  height={120}
                  className="w-auto h-16 md:h-20 lg:h-24 object-contain drop-shadow-2xl"
                  priority
                />
              </Link>
            </div>

            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full backdrop-blur-sm animate-fade-in-up"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {slide.badge}
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white mb-2 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              {slide.title}
            </h1>
            <h1
              key={`accent-${current}`}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-amber-400 mb-4 md:mb-6 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              {slide.titleAccent}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="text-sm sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6 md:mb-10 max-w-xl animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="flex flex-wrap gap-3 md:gap-4 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm md:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] group"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {slide.cta}
              </Link>
              <Link
                href={slide.ctaSecondaryLink}
                className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm md:text-base rounded-xl border border-white/30 backdrop-blur-sm transition-all duration-300 group"
              >
                {slide.ctaSecondary}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/33140348193"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm md:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots + Progress */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center"
          >
            {i === current ? (
              <span className="relative w-10 h-2 rounded-full bg-white/30 overflow-hidden">
                <span
                  className="absolute left-0 top-0 h-full bg-amber-400 rounded-full transition-none"
                  style={{ width: `${progress}%` }}
                />
              </span>
            ) : (
              <span className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-400' : 'bg-white/40 hover:bg-white/70'}`} />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 right-6 md:right-10 z-30 text-white/60 text-sm font-mono">
        <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        {String(slides.length).padStart(2, '0')}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-10 z-30 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease both;
        }
      `}</style>
    </section>
  )
}
