'use client'

import { Header } from '@/components/header'
import Image from 'next/image'
import { ShoppingCart, Plus, Minus, X, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()

  return (
    <main className="min-h-screen bg-[#0a0f12] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-slide1.jpg"
            alt="Cart Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f12] via-[#0a0f12]/90 to-[#0a0f12]/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-500/30 bg-amber-500/10 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md mx-auto mb-6">
            <Sparkles className="w-4 h-4" />
            Your Order
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4 tracking-wide">
            Shopping <span className="text-amber-500 italic font-light drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Cart</span>
          </h1>
          <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm md:text-base">
            Review your premium Ceylon selections. Every item is carefully packed and prepared for express delivery.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {items.length === 0 ? (
          <div className="rounded-[2rem] p-12 md:p-24 text-center bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] mt-8">
            <div className="w-24 h-24 rounded-full bg-[#161f26] border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-inner">
              <ShoppingCart className="w-10 h-10 text-gray-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Your cart is perfectly empty</h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto font-sans">
              Looking for inspiration? Browse our hand-picked curated collections and bring the essence of Sri Lanka into your home.
            </p>
            <Link 
              href="/collections" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02]"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="font-sans font-bold text-lg text-white">Your Items ({itemCount})</h3>
                <Link href="/collections" className="text-sm font-sans font-medium text-amber-500 hover:text-amber-400 underline decoration-amber-500/30 underline-offset-4 transition-colors">
                  Continue Shopping
                </Link>
              </div>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-white/10 transition-colors shadow-lg">
                    {/* Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-black/40 border border-white/5 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 w-full space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="font-sans font-bold text-lg md:text-xl text-white mb-1 line-clamp-2 pr-4">{item.product.name}</h4>
                          <p className="text-sm text-gray-400 font-sans">100% Authentic Product</p>
                        </div>
                        <p className="font-sans font-bold text-lg text-amber-500 whitespace-nowrap">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between w-full pt-3 border-t border-white/5">
                        {/* Quantity Selector */}
                        <div className="flex items-center bg-[#1a2128] border border-white/10 rounded-lg overflow-hidden shrink-0">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 sm:p-3 hover:bg-white/5 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-sans font-bold text-sm select-none">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 sm:p-3 hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Action */}
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400/80 hover:text-red-400 transition-colors py-2 px-3 hover:bg-red-400/10 rounded-lg shrink-0"
                        >
                          <X className="w-4 h-4" />
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <h3 className="text-xl font-serif font-black text-white mb-6 tracking-wide">
                  Order Summary
                </h3>

                <div className="space-y-4 font-sans border-b border-white/10 pb-6 mb-6 relative z-10">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Paris Express Delivery</span>
                    <span className="text-[#3eb489] font-bold tracking-wide uppercase text-xs">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Estimated Tax</span>
                    <span className="text-white font-semibold">$0.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8 relative z-10">
                  <span className="text-gray-300 font-sans font-bold">Total</span>
                  <span className="text-3xl font-serif font-black text-amber-500">${total.toFixed(2)}</span>
                </div>

                <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-[0.15em] text-sm rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 relative z-10 group">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm text-gray-400 font-sans">
                    <ShieldCheck className="w-5 h-5 text-[#3eb489]" />
                    Secure encrypted checkout
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 font-sans">
                    <Truck className="w-5 h-5 text-[#3eb489]" />
                    Delivery within 24 hours in Paris
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
