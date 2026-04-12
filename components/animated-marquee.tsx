import { ShoppingBag, Tags, PackageSearch, Rocket, Heart } from 'lucide-react'

const marqueeItems = [
  {
    title: 'Groceries delivery',
    description: 'Groceries at your door',
    icon: ShoppingBag,
  },
  {
    title: 'Great offers',
    description: 'Best deals in the town',
    icon: Tags,
  },
  {
    title: 'Wide assortment',
    description: 'Offer 200+ products',
    icon: PackageSearch,
  },
  {
    title: 'Paris Express Delivery',
    description: 'Fastest local delivery',
    icon: Rocket,
  },
  {
    title: '2,500+',
    description: 'Happy customers across Paris',
    icon: Heart,
  }
]

export function AnimatedMarquee() {
  // We duplicate the array to create the seamless infinite scrolling effect
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className="bg-[#3eb489] text-white py-4 md:py-6 overflow-hidden relative shadow-inner">
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#3eb489] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#3eb489] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex items-center gap-4 px-8 md:px-16 border-r border-white/20 last:border-r-0 shrink-0 cursor-default">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
                  {item.title}
                </span>
                <span className="text-xs md:text-sm text-white/80 font-medium">
                  {item.description}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
