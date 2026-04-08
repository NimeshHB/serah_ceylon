'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CartDrawer } from '@/components/cart-drawer'

const PRODUCT_CATEGORIES = [
  "Baby care",
  "CAP Ceylon",
  "Cosmetics",
  "Dessert",
  "Dried vegetables",
  "Drinks",
  "Dry Fish",
  "Frozen food",
  "Fruits",
  "Grocery",
  "Health",
  "Kolakanda",
  "Meat",
  "Spices",
  "Sweets and snacks",
  "Tea",
  "Vegetables"
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Serah Ceylon Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="text-xl font-semibold text-foreground hidden sm:inline">
              Serah Ceylon
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 focus:outline-none">
                All Products
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 w-[240px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="max-h-[60vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-2 flex flex-col gap-1">
                  {PRODUCT_CATEGORIES.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
                      className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="#collections"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Collections
            </Link>
            <Link
              href="#recipes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Recipes
            </Link>
            <Link
              href="#sourcing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="#wellness"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Wellness
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <CartDrawer />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto pr-2">
            <div className="py-2">
              <span className="block text-sm font-medium text-foreground mb-2">
                All Products
              </span>
              <div className="flex flex-col space-y-1 pl-4 border-l-2 border-border/50 ml-1">
                {PRODUCT_CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1.5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="#collections"
              className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors border-t border-border/50 mt-2 pt-4"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="#recipes"
              className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="#sourcing"
              className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="#wellness"
              className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wellness
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
