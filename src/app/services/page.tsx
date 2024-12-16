'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServicePackages } from '../components/service-packages'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Vito Zodiac Makeup</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-green-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-green-300">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-green-300">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-green-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-green-700 mb-12 text-center"
        >
          Discover our range of zodiac-inspired makeup services tailored to enhance your celestial beauty.
        </motion.p>

        <ServicePackages />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4">Custom Consultations</h2>
          <p className="text-green-700 mb-4">
            Not sure which package is right for you? Book a custom consultation with our expert makeup artists to create a personalized look that perfectly aligns with your zodiac sign and personal style.
          </p>
          <Link href="/contact" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors inline-block">
            Book a Consultation
          </Link>
        </motion.section>
      </main>

      <footer className="bg-green-800 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Vito Zodiac Makeup. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-green-300 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

