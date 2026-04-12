'use client'

import Image from 'next/image'
import Link from 'next/link'
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
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the full range of Sri Lankan heritage products, from rare teas to traditional wellness remedies
          </p>
        </div>

        {/* ── Cinematic Video Screen ── */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-10 group shadow-2xl"
          style={{ height: 'clamp(240px, 45vw, 520px)' }}
        >
          {/* Looping video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="https://www.serahceylon.com/assets/video/serah_ceylon.mp4" type="video/mp4" />
          </video>

          {/* Cinematic dark-amber gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-transparent pointer-events-none z-10" />

          {/* Center text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none z-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Sri Lankan Heritage
            </span>
            <h3 className="text-white font-extrabold leading-tight text-2xl sm:text-4xl md:text-5xl drop-shadow-lg mb-3">
              This is Serah Ceylon
            </h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Each product carries centuries of tradition — hand-harvested, sun-dried, and curated for purity.
            </p>
          </div>

          {/* Bottom right: "Browse All" link */}
          <div className="absolute bottom-4 right-4 z-20">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Browse All →
            </Link>
          </div>
        </div>

        {/* ── Custom Banners Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[360px] md:auto-rows-[420px]">
          {/* Card 1: Minimalist Wood & Texture */}
          <div className="col-span-1 border border-[#e8dfcf] rounded-xl overflow-hidden relative bg-[#f7f4ec] flex flex-row shadow-sm hover:shadow-md transition-shadow">
            {/* Slices Overlay left */}
            <div className="absolute left-0 top-0 bottom-0 w-[55%] flex -skew-x-[8deg] -ml-6 -mb-4 -mt-4 overflow-hidden shadow-2xl z-0">
              <div className="w-1/2 h-full relative overflow-hidden bg-gray-200">
                <Image src="/images/cinnamon.jpg" alt="Dried spices" fill className="object-cover skew-x-[8deg] scale-125 origin-center brightness-110" />
              </div>
              <div className="w-1/2 h-full relative overflow-hidden bg-gray-300 border-l-4 border-[#f7f4ec]">
                <Image src="/images/hero.jpg" alt="Grains and harvest" fill className="object-cover skew-x-[8deg] scale-125 origin-center" />
              </div>
            </div>
            
            {/* Right Text */}
            <div className="relative z-10 w-full flex flex-col justify-center items-end text-right pr-8 md:pr-14">
              <h3 className="font-serif text-3xl md:text-5xl text-[#2d2a23] leading-[1.1] tracking-tight">
                Fresh<br />100%<br />PRODUCTS
              </h3>
              <p className="font-sans font-bold text-lg md:text-xl text-[#5a5548] mt-3">Great offers.</p>
              <Link href="/collections" className="mt-8 text-xs md:text-sm font-bold tracking-widest text-[#2d2a23] uppercase border-b border-[#2d2a23] pb-1 hover:text-black hover:border-black transition-colors">
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* Card 2: High-Contrast "Dark Mode" */}
          <div className="col-span-1 rounded-xl overflow-hidden relative bg-[#121415] flex flex-row shadow-lg">
            {/* Bright abstract background texture / slate */}
            <div className="absolute inset-0 bg-slate-900 opacity-60 backdrop-blur-md" />
            
            {/* Text Left */}
            <div className="relative z-10 w-[65%] flex flex-col justify-center pl-8 md:pl-12">
              <h3 className="font-sans font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
                FROM<br />SERAH<br />CEYLON
              </h3>
              <Link href="/collections" className="self-start px-6 py-2.5 md:px-8 md:py-3 border border-white/50 text-white font-semibold text-xs md:text-sm hover:bg-white hover:text-black transition-all rounded-sm uppercase tracking-wider backdrop-blur-sm">
                SHOP NOW
              </Link>
            </div>
            
            {/* Image Right (vibrant fruits representation) */}
            <div className="absolute -right-[15%] top-[-5%] bottom-[-5%] w-[60%] z-0 overflow-hidden rounded-l-full mix-blend-normal blur-[0.5px]">
              <Image src="/images/hero-slide2.jpg" alt="Tropical Fruits" fill className="object-cover" />
              {/* Fade gradient from left to ensure text stands out */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#121415] via-[#121415]/60 to-transparent" />
            </div>
          </div>

          {/* Card 3: Clean Botanical */}
          <div className="col-span-1 rounded-xl overflow-hidden relative bg-white flex flex-col justify-center p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10 w-2/3">
              <p className="font-serif text-gray-500 italic mb-2 md:text-lg">Best deals in Paris</p>
              <h3 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-8 md:mb-10 tracking-tight">
                Wellness &<br />Botanicals
              </h3>
              <Link href="/category/wellness" className="inline-block px-8 py-3.5 bg-[#42957b] hover:bg-[#347d66] text-white font-medium text-sm md:text-base rounded-md transition-colors shadow-sm tracking-wide">
                SHOP NOW
              </Link>
            </div>
            {/* Images Bottom Right */}
            <div className="absolute -bottom-16 -right-16 w-60 h-60 md:w-80 md:h-80 z-0">
              <Image src="/images/cardamom.jpg" alt="Botanical herbs and flowers" fill className="object-cover rounded-full shadow-2xl ring-[12px] ring-white" />
            </div>
            <div className="absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 opacity-90 drop-shadow-xl">
              <Image src="/images/black-tea.jpg" alt="Green leaf" fill className="object-cover rounded-full" />
            </div>
          </div>

          {/* Card 4: Heritage & Organic */}
          <div className="col-span-1 rounded-xl overflow-hidden relative bg-[#efece1] flex flex-col items-center justify-center text-center p-8 border border-[#e2dec9] shadow-sm hover:shadow-md transition-shadow">
            {/* Circular Layout Background Masks */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-40">
              <div className="w-[300px] h-[300px] rounded-full border-[1px] border-[#c0b79e]" />
              <div className="w-[450px] h-[450px] rounded-full border-[1px] border-[#c0b79e] absolute" />
            </div>
            
            <div className="relative z-10 mb-6 flex items-center justify-center w-full">
               {/* Central Main Mask */}
               <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-[#efece1] shadow-xl relative z-20">
                 <Image src="/images/hero-slide1.jpg" alt="Banana Blossom" fill className="object-cover" />
               </div>
               {/* Orbiting Vignettes */}
               <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[4px] border-[#efece1] shadow-lg -translate-x-[110px] -translate-y-[80px] z-30">
                 <Image src="/images/cinnamon.jpg" alt="Organics" fill className="object-cover" />
               </div>
               <div className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-[4px] border-[#efece1] shadow-lg translate-x-[120px] translate-y-[60px] z-30">
                 <Image src="/images/hero-slide3.jpg" alt="Fresh harvest" fill className="object-cover" />
               </div>
               <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-[#efece1] shadow-lg translate-x-[90px] -translate-y-[100px] z-30">
                 <Image src="/images/golden-milk.jpg" alt="Spice" fill className="object-cover" />
               </div>
            </div>

            <div className="relative z-10 mt-2">
              <p className="font-sans font-bold text-[#b59550] tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3 drop-shadow-sm">DIRECTLY FROM SRI LANKA</p>
              <h3 className="font-serif text-3xl md:text-5xl text-[#2a2926] font-black leading-tight mb-8">
                100% NATURAL<br />FOOD
              </h3>
              <Link href="/collections" className="inline-block px-10 py-3.5 bg-[#1b1b1b] hover:bg-black text-white font-semibold text-sm transition-colors rounded-sm shadow-xl tracking-wide">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
