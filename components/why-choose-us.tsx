'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Award, Truck, GraduationCap, ChevronDown, Sparkles } from 'lucide-react'

const reasons = [
  {
    id: 'premium',
    icon: Award,
    title: 'Premium Quality Ingredients',
    content: 'We source the highest quality ingredients directly from Sri Lanka. Discover the true essence of Ceylon in every product, carefully curated and processed to preserve its natural flavors and aromatic properties.'
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'Swift, Complimentary Delivery',
    content: 'Experience convenience with our swift, complimentary delivery across Paris. Get your premium spices, rare teas, and heritage items delivered straight to your doorstep without delay.'
  },
  {
    id: 'culinary',
    icon: GraduationCap,
    title: 'Exceptional Culinary Journey',
    content: 'Embark on a culinary adventure with traditional Sri Lankan flavors. From Keselmuwa to Kolakanda, our products are the key to unlocking authentic, mouth-watering recipes right in your kitchen.'
  }
]

export function WhyChooseUs() {
  const [activeItem, setActiveItem] = useState('premium') // Open the first item by default

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0f12] overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-slide4.jpg"
          alt="Why Choose Us Background"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] via-[#0a0f12]/90 to-[#0a0f12]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col justify-center">
        
        {/* Interactive Accordion */}
        <div className="w-full flex flex-col justify-center text-center">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-500/30 bg-amber-500/10 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md mx-auto mb-8">
            <Sparkles className="w-4 h-4" />
            The Serah Difference
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mb-10 md:mb-12 tracking-wide text-center leading-tight">
            Why Choose <br/><span className="text-amber-500 italic font-light drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] pr-4">Serah Ceylon</span>
          </h2>
          
          <div className="space-y-6 text-left relative z-10">
            {/* Background Glow behind accordion */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 rounded-[100px] blur-[100px] pointer-events-none z-0" />

            {reasons.map((reason) => {
              const Icon = reason.icon
              const isActive = activeItem === reason.id
              
              return (
                <div 
                  key={reason.id} 
                  className={`relative z-10 backdrop-blur-2xl transition-all duration-500 rounded-3xl overflow-hidden ${
                    isActive 
                      ? 'bg-white/10 border border-amber-500/50 shadow-[0_20px_50px_-10px_rgba(245,158,11,0.2)]' 
                      : 'bg-black/40 border border-white/10 hover:border-amber-500/30 hover:bg-white/5'
                  }`}
                >
                  <button
                    onClick={() => setActiveItem(isActive ? '' : reason.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 md:pr-10 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-500 flex-shrink-0 ${
                        isActive 
                          ? 'bg-amber-500 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-110' 
                          : 'bg-[#1a2128] border border-amber-500/30 text-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:bg-[#1a2128]/80'
                      }`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className={`text-lg md:text-xl font-sans font-bold transition-all duration-300 ${
                        isActive ? 'text-amber-500 drop-shadow-sm' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {reason.title}
                      </span>
                    </div>
                    <div className={`transition-all duration-500 flex-shrink-0 ml-4 ${isActive ? 'text-amber-500 rotate-180 drop-shadow-md' : 'text-gray-500 group-hover:text-amber-500 group-hover:translate-y-1'}`}>
                       <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className={`px-4 sm:px-6 md:px-8 pb-6 md:pb-8 pt-2 md:pt-0 font-sans leading-relaxed text-sm md:text-base pl-4 sm:pl-[88px] md:pl-[104px] pr-4 sm:pr-6 md:pr-12 ${
                        isActive ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {reason.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}
