import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0f12] text-gray-300 pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Serah Ceylon Logo" 
                width={48} 
                height={48} 
                className="object-contain filter brightness-0 invert" 
              />
              <span className="text-xl font-serif font-black text-white tracking-widest uppercase">Serah Ceylon</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering the finest Sri Lankan products, crafted with care and expertise. Authentic heritage curated for Paris' most discerning palates.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3eb489] hover:text-white hover:border-[#3eb489] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3eb489] hover:text-white hover:border-[#3eb489] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3eb489] hover:text-white hover:border-[#3eb489] transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Contact Us</Link></li>
              <li><Link href="/collections" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Collections</Link></li>
              <li><Link href="/category/wellness" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Wellness & Ayurveda</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal Info</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Refund Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-[#3eb489] hover:pl-1 transition-all flex items-center gap-2">Shipping Information</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <MapPin className="w-5 h-5 text-[#3eb489] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-relaxed">3 Rue Petit<br />75019 Paris, France</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <Phone className="w-5 h-5 text-[#3eb489] flex-shrink-0" />
                <a href="tel:+33140348193" className="text-sm text-gray-300 hover:text-white">+33 1 40 34 81 93</a>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <Mail className="w-5 h-5 text-[#3eb489] flex-shrink-0" />
                <a href="mailto:serahceylonfrance@gmail.com" className="text-sm text-gray-300 hover:text-white break-all">serahceylonfrance@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Serah Ceylon. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 font-medium">
             by <a href="https://www.dfourlk.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors duration-300">Dfour</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
