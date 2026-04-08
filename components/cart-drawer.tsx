'use client'

import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Drawer Trigger Button */}
      <Button
        variant="outline"
        size="sm"
        className="relative flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart className="w-4 h-4" />
        <span className="hidden sm:inline">Cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 inline-block px-2 py-0.5 text-xs font-semibold text-accent-foreground bg-accent rounded-full">
            {itemCount}
          </span>
        )}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-96 z-50 bg-background border-l border-border shadow-lg transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">
              Shopping Cart
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
                <p className="text-foreground font-semibold mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground">
                  Add some premium Ceylon products to get started
                </p>
              </div>
            ) : (
              items.map(item => (
                <Card key={item.product.id} className="p-4 bg-card border-border">
                  {/* Item Header */}
                  <div className="flex gap-4 mb-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm line-clamp-2 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-accent font-bold text-sm">
                        ${item.product.price}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-xs text-muted-foreground hover:text-destructive transition-colors mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center justify-between bg-muted rounded-lg p-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-background rounded transition-colors"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <span className="font-semibold text-foreground w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-background rounded transition-colors"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-sm text-muted-foreground text-right mt-2">
                    Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </Card>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4 bg-muted/50">
              {/* Totals */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-foreground">
                    FREE
                  </span>
                </div>
                <div className="border-t border-border pt-2 flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-accent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
              >
                Proceed to Checkout
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
