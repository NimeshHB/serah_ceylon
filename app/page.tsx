import { Header } from '@/components/header'
import { ImmersiveHero } from '@/components/immersive-hero'
import { CategoryBento } from '@/components/category-bento'
import { BestSellersCarousel } from '@/components/best-sellers-carousel'
import { WhyChooseUs } from '@/components/why-choose-us'
import { AnimatedMarquee } from '@/components/animated-marquee'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ImmersiveHero />
      <CategoryBento />
      <BestSellersCarousel />
      <AnimatedMarquee />
      <WhyChooseUs />

    </main>
  )
}
