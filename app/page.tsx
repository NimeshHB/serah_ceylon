import { Header } from '@/components/header'
import { ImmersiveHero } from '@/components/immersive-hero'
import { CategoryBento } from '@/components/category-bento'
import { BestSellersCarousel } from '@/components/best-sellers-carousel'
import { HealingHeritage } from '@/components/healing-heritage'
import { CookTheCulture } from '@/components/cook-the-culture'
import { ParisTrustBar } from '@/components/paris-trust-bar'
import { CommunityStories } from '@/components/community-stories'
import { HeritageNewsletter } from '@/components/heritage-newsletter'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ImmersiveHero />
      <CategoryBento />
      <BestSellersCarousel />
      <HealingHeritage />
      <CookTheCulture />
      <ParisTrustBar />
      <CommunityStories />
      <HeritageNewsletter />
    </main>
  )
}
