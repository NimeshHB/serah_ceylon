import { Header } from '@/components/header'
import { RecipeCard } from '@/components/recipe-card'
import { recipes } from '@/lib/recipes'

export const metadata = {
  title: 'Recipes - Serah Ceylon',
  description: 'Discover authentic recipes using our premium Sri Lankan spices and teas.',
}

export default function RecipesPage() {
  const easyRecipes = recipes.filter(r => r.difficulty === 'easy')
  const mediumRecipes = recipes.filter(r => r.difficulty === 'medium')
  const advancedRecipes = recipes.filter(r => r.difficulty === 'advanced')

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Recipes & Inspiration
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore authentic recipes that celebrate the flavors of Ceylon. From wellness beverages to elegant dishes, each recipe highlights our premium ingredients.
          </p>
        </div>

        {/* Easy Recipes */}
        {easyRecipes.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 rounded-full border border-emerald-500/20 uppercase tracking-wide mb-4">
                Quick & Easy
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Easy Recipes
              </h2>
              <p className="text-muted-foreground mt-2">
                Perfect for everyday preparation and quick wellness rituals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {easyRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        )}

        {/* Medium Recipes */}
        {mediumRecipes.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-500/10 rounded-full border border-amber-500/20 uppercase tracking-wide mb-4">
                Intermediate
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Medium Recipes
              </h2>
              <p className="text-muted-foreground mt-2">
                Explore more complex preparations and sophisticated flavors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        )}

        {/* Advanced Recipes */}
        {advancedRecipes.length > 0 && (
          <section>
            <div className="mb-8">
              <div className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-500/10 rounded-full border border-red-500/20 uppercase tracking-wide mb-4">
                Advanced
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Advanced Recipes
              </h2>
              <p className="text-muted-foreground mt-2">
                Master-level preparations for the adventurous cook.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
