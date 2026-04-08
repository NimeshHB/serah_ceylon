import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import { FlavorProfileChart } from '@/components/flavor-profile'
import { SourceTracing } from '@/components/source-tracing'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getProductById, products } from '@/lib/products'
import { ShoppingCart, Heart } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Serah Ceylon`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const collectionColor = {
    spices: 'bg-primary/10 text-primary',
    teas: 'bg-accent/10 text-accent',
    blends: 'bg-secondary/10 text-secondary',
    wellness: 'bg-emerald-500/10 text-emerald-600',
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/collections" className="hover:text-foreground transition-colors">
            Collections
          </a>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge & Title */}
            <div className="space-y-4">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${collectionColor[product.collection]}`}>
                {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
              </div>
              <h1 className="text-4xl font-bold text-foreground">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Price & Actions */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">
                  ${product.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  Premium import from Sri Lanka
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Key Details */}
            <Card className="p-6 bg-card border-border space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Origin
                  </p>
                  <p className="font-semibold text-foreground">
                    {product.origin}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Serving Size
                  </p>
                  <p className="font-semibold text-foreground">
                    {product.servingSize}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Shelf Life
                  </p>
                  <p className="font-semibold text-foreground">
                    {product.shelfLife}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Long Description */}
        <Card className="p-8 bg-card border-border mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            The Story
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            {product.longDescription}
          </p>
        </Card>

        {/* Flavor Profile & Health Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-2">
            <FlavorProfileChart profile={product.flavorProfile} />
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Health Benefits
              </h3>
              <div className="space-y-4">
                {product.healthBenefits.map((benefit, idx) => (
                  <div key={idx}>
                    <p className="flex items-center gap-2 font-semibold text-foreground mb-1">
                      <span className="text-xl">{benefit.icon}</span>
                      {benefit.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Tasting Notes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-foreground font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Source Tracing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Source & Sourcing
          </h2>
          <SourceTracing source={product.source} />
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.collection === product.collection)
              .slice(0, 3)
              .map(relatedProduct => (
                <a
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors">
                    <div className="relative aspect-square">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-accent font-bold">
                        ${relatedProduct.price}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}
