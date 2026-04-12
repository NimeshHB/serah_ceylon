'use client'

import { Header } from '@/components/header'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock, Send, Sparkles } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0f12] text-white">
      <Header />

      <section className="relative pt-20 pb-24 overflow-hidden flex flex-col justify-center min-h-[calc(100vh-64px)]">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-slide2.jpg"
            alt="Contact Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f12] via-[#0a0f12]/95 to-[#0a0f12]/20 backdrop-blur-[4px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 md:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Info & Story */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-12 pr-0 lg:pr-8">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-500/30 bg-amber-500/10 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                  <Sparkles className="w-4 h-4" />
                  We're Here For You
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight">
                  Let's Start a <br/><span className="text-amber-500 italic font-light drop-shadow-lg pr-4">Conversation</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-sans">
                  We value your feedback and inquiry. Our team is dedicated to providing you with the highest level of service in exploring the authentic heritage of Serah Ceylon.
                </p>
              </div>

              <div className="space-y-8 relative pb-4">
                {/* Decorative Line border */}
                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent z-0 hidden sm:block" />

                <div className="relative z-10 flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#161f26] border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <MapPin className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">Our Location</h3>
                    <p className="text-gray-400 font-sans leading-relaxed text-sm">3 Rue Petit<br/>75019 Paris, France</p>
                  </div>
                </div>

                <div className="relative z-10 flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#161f26] border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <Mail className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">Email Us</h3>
                    <a href="mailto:serahceylonfrance@gmail.com" className="text-gray-400 font-sans leading-relaxed text-sm hover:text-white transition-colors">serahceylonfrance@gmail.com</a>
                  </div>
                </div>

                <div className="relative z-10 flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#161f26] border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <Phone className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">Call Us</h3>
                    <a href="tel:+33140348193" className="text-gray-400 font-sans leading-relaxed text-sm hover:text-white transition-colors">+33 1 40 34 81 93</a>
                  </div>
                </div>

                <div className="relative z-10 flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#161f26] border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <Clock className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">Working Hours</h3>
                    <p className="text-gray-400 font-sans leading-relaxed text-sm">Monday – Saturday<br/>08:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Glassmorphism */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 p-8 sm:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]">
                {/* Decorative glows */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
                
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-8 tracking-wide">
                  Send us a message
                </h3>

                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 group-focus-within:text-amber-500 transition-colors">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John" 
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-sans"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 group-focus-within:text-amber-500 transition-colors">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe" 
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 group-focus-within:text-amber-500 transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 group-focus-within:text-amber-500 transition-colors">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we assist you?" 
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-sans resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 mt-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-[0.2em] text-sm rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group duration-300"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="mt-20 md:mt-32 relative z-10 rounded-[2rem] p-1 md:p-2 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] group overflow-hidden">
             {/* Decorative glows for map */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/20 rounded-full blur-[60px] pointer-events-none" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.7512402179836!2d2.383188515675239!3d48.88198647928929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dcaef02a281%3A0x6bba8a065fdeb89e!2sRue%20Petit%2C%2075019%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1704204561000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl opacity-80 group-hover:opacity-100 transition-all duration-700 saturate-50 group-hover:saturate-100"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  )
}
