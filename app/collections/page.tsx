import { Header } from '@/components/header'
import { ProductCard } from '@/components/product-card'
import { products, PRODUCT_CATEGORIES } from '@/lib/products'
import Link from 'next/link'

export const metadata = {
  title: 'Collections - Serah Ceylon',
  description: 'Browse all our premium products, from spices, teas, to wellness blends.',
}

export default function CollectionsPage() {
  const collections = ['spices', 'teas', 'blends', 'wellness'] as const

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Collections
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated selection of premium Sri Lankan products.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Categories</h2>
              <ul className="space-y-3">
                {PRODUCT_CATEGORIES.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/collections?category=${category}`}
                      className="text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-20">
            {collections.map((collection) => {
              const collectionProducts = products.filter(p => p.collection === collection)
              const titles = {
                spices: 'Premium Spices',
                teas: 'Heritage Teas',
                blends: 'Wellness Blends',
                wellness: 'Wellness Collection',
              }

              return (
                <section key={collection} className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {titles[collection]}
                    </h2>
                    <p className="text-muted-foreground">
                      {collection === 'spices' && 'Hand-harvested and traditionally processed spices from Sri Lanka\'s finest gardens.'}
                      {collection === 'teas' && 'Rare and exceptional teas from the mountain regions of Ceylon.'}
                      {collection === 'blends' && 'Carefully curated blends designed to support your wellness journey.'}
                      {collection === 'wellness' && 'Ingredients and blends specifically chosen for their health benefits.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectionProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
