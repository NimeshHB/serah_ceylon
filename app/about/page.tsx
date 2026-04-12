import { Header } from '@/components/header'
import Image from 'next/image'
import { ShieldCheck, Tags, HeadphonesIcon } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-slide3.jpg"
            alt="Sri Lankan heritage background"
            fill
            className="object-cover opacity-10 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-[#faf9f6]/95 to-[#faf9f6]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3eb489]/10 text-[#3eb489] font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-[#3eb489] animate-pulse" />
              Our Story
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Delivering Quality Products from <span className="text-[#3eb489]">Serah Ceylon</span>
            </h1>

            <div className="space-y-6 text-gray-600 font-sans text-lg md:text-xl leading-relaxed">
              <p>
                At Serah Ceylon, we are dedicated to bringing you the finest Sri Lankan products, crafted with care and expertise. Our range includes premium-quality essentials like natural oils, beauty products, and herbal solutions, all designed to enrich your life and health.
              </p>
              <p>
                Our customers trust us because we prioritize their satisfaction and well-being. With an unwavering commitment to quality, Serah Ceylon continues to be a trusted brand for individuals seeking natural, effective solutions.
              </p>
              <p>
                Many of our loyal customers share their positive experiences, expressing how our products have helped them achieve their wellness goals. Whether it’s our renowned oils or our exquisite herbal blends, Serah Ceylon is proud to be their preferred choice.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/images/golden-milk.jpg"
                alt="Premium Serah Ceylon Product Presentation"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative background block */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#3eb489] to-[#257356] rounded-2xl -z-0 opacity-20 transform rotate-3 translate-x-4 translate-y-4" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Choose Serah Ceylon
            </h2>
            <div className="w-24 h-1 bg-[#3eb489] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3eb489] group-hover:text-white transition-all text-[#3eb489]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                Premium Quality Sri Lankan Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Serah Ceylon, we are committed to offering premium quality products crafted from the finest natural ingredients sourced directly from Sri Lanka. Our products are carefully formulated to meet the highest standards of purity and effectiveness.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3eb489] group-hover:text-white transition-all text-[#3eb489]">
                <Tags className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                Reasonable and Transparent Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in making luxury affordable. Our products are priced competitively to offer you the best value without compromising on quality. With Serah Ceylon, you experience the best of Sri Lankan craftsmanship at accessible prices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3eb489] group-hover:text-white transition-all text-[#3eb489]">
                <HeadphonesIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                Exceptional Customer Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our customer support team is dedicated to providing prompt and professional assistance. Whether you need help with a product inquiry or your order, we are here to ensure that your experience with Serah Ceylon is seamless and satisfactory.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
