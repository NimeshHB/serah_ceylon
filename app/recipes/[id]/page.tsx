import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getRecipeById, recipes } from '@/lib/recipes'
import { Clock, Users, ChefHat, Plus } from 'lucide-react'

interface RecipePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { id } = await params
  const recipe = getRecipeById(id)

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    }
  }

  return {
    title: `${recipe.title} - Serah Ceylon`,
    description: recipe.description,
  }
}

export function generateStaticParams() {
  return recipes.map(recipe => ({
    id: recipe.id,
  }))
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params
  const recipe = getRecipeById(id)

  if (!recipe) {
    notFound()
  }

  const difficultyColor = {
    easy: 'bg-emerald-500/10 text-emerald-600',
    medium: 'bg-amber-500/10 text-amber-600',
    advanced: 'bg-red-500/10 text-red-600',
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/recipes" className="hover:text-foreground transition-colors">
            Recipes
          </a>
          <span>/</span>
          <span className="text-foreground">{recipe.title}</span>
        </div>

        {/* Recipe Header */}
        <div className="space-y-4 mb-8">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            {recipe.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {recipe.description}
          </p>
        </div>

        {/* Recipe Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-muted">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Meta Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 bg-card border-border text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mx-auto mb-2">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
              Prep Time
            </p>
            <p className="font-bold text-foreground">
              {recipe.prepTime}
            </p>
          </Card>

          <Card className="p-4 bg-card border-border text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 mx-auto mb-2">
              <ChefHat className="w-4 h-4 text-accent" />
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
              Cook Time
            </p>
            <p className="font-bold text-foreground">
              {recipe.cookTime}
            </p>
          </Card>

          <Card className="p-4 bg-card border-border text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 mx-auto mb-2">
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
              Servings
            </p>
            <p className="font-bold text-foreground">
              {recipe.servings}
            </p>
          </Card>

          <Card className="p-4 bg-card border-border text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 mx-auto mb-2">
              <span className="text-lg">🍽️</span>
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
              Cuisine
            </p>
            <p className="font-bold text-foreground">
              {recipe.cuisine}
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Instructions */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Instructions
              </h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="text-foreground leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Wellness Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recipe.benefits.map((benefit, idx) => (
                  <Card key={idx} className="p-4 bg-card border-border">
                    <div className="flex items-start gap-3">
                      <div className="text-xl mt-0.5">💚</div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ingredients */}
            <Card className="p-6 bg-card border-border sticky top-24">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    Ingredients
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add All
                  </Button>
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 rounded border-border accent-primary"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-foreground">
                            {ingredient.amount}
                          </span>
                          <span className="text-foreground">
                            {ingredient.name}
                          </span>
                        </div>
                        {ingredient.notes && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {ingredient.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Products */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Featured Ingredients
                  </p>
                  <div className="space-y-2">
                    {recipe.ingredients
                      .filter(i => i.productId)
                      .map((ingredient, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="w-full justify-start gap-2 text-left"
                          asChild
                        >
                          <a href={`/products/${ingredient.productId}`}>
                            <Plus className="w-4 h-4" />
                            {ingredient.name}
                          </a>
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
