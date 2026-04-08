'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Recipe } from '@/lib/recipes'
import { Card } from '@/components/ui/card'
import { Clock, Users, ChefHat } from 'lucide-react'

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const difficultyColor = {
    easy: 'bg-emerald-500/10 text-emerald-600',
    medium: 'bg-amber-500/10 text-amber-600',
    advanced: 'bg-red-500/10 text-red-600',
  }

  const totalTime = `${parseInt(recipe.prepTime)} + ${parseInt(recipe.cookTime)} min`

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Difficulty Badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 gap-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {recipe.cuisine}
            </p>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {recipe.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
              {recipe.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="space-y-3 pt-3 border-t border-border">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{recipe.prepTime} prep</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <ChefHat className="w-4 h-4" />
                <span>{recipe.cookTime} cook</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-1">
              {recipe.benefits.slice(0, 2).map((benefit, idx) => (
                <span key={idx} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
