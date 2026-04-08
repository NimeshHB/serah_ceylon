'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { recipes } from '@/lib/recipes'
import { ChefHat, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export function CookTheCulture() {
  const { addItem } = useCart()
  const featuredRecipes = recipes.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            <ChefHat className="w-4 h-4" />
            Sri Lankan Traditions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Cook the Culture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Master authentic Sri Lankan recipes using our curated spice and tea blends. Each recipe is a journey through generations of culinary heritage, designed for the modern kitchen.
          </p>
        </div>

        {/* Featured Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="group h-full">
              <Link href={`/recipes/${recipe.id}`}>
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {recipe.difficulty}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {recipe.description}
                    </p>

                    {/* Recipe Info */}
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                      <span>{recipe.servings} servings</span>
                      <span>{recipe.prepTime} min</span>
                    </div>

                    {/* Ingredients Count */}
                    <p className="text-sm font-semibold text-foreground mb-4">
                      {recipe.ingredients.length} Key Ingredients
                    </p>

                    {/* View Recipe Button */}
                    <button className="w-full mt-auto px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                      View Recipe
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Add to Cart Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Recipe-to-Cart Magic
              </h3>
              <p className="text-muted-foreground mb-6">
                Select any recipe and instantly add all ingredients to your cart. We&apos;ve curated the perfect quantities for authentic, restaurant-quality results at home.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground">Pre-measured quantities for perfect ratios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground">All ingredients from single source</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-foreground">Step-by-step guidance and cooking tips</span>
                </li>
              </ul>
            </div>

            {/* Right - Quick Add Example */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                Add Ingredients Bundle
              </p>
              <h4 className="text-2xl font-bold text-foreground mb-6">
                {featuredRecipes[0]?.title}
              </h4>

              {/* Bundle Items */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                {featuredRecipes[0]?.ingredients.slice(0, 4).map((ing, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">
                      {typeof ing === 'string' ? ing : ing.name}
                    </span>
                    <span className="text-muted-foreground">
                      {typeof ing === 'string' ? '' : ing.amount}
                    </span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-2">
                  + {Math.max(0, (featuredRecipes[0]?.ingredients.length || 0) - 4)} more ingredients
                </p>
              </div>

              {/* Bundle Price */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">Bundle Price</p>
                <p className="text-3xl font-bold text-foreground">€{(24.99).toFixed(2)}</p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  // In a real app, this would add all recipe ingredients to cart
                  // For now, we'll add the featured recipe's main product
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Add Bundle to Cart
              </button>
            </div>
          </div>
        </div>

        {/* View All Recipes */}
        <div className="text-center mt-12">
          <Link href="/recipes" className="inline-block">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Explore All Recipes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
