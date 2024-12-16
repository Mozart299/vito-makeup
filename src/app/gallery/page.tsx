'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const galleryItems = [
  { id: 1, src: '/placeholder.svg', alt: 'Aries Makeup Look', zodiac: 'Aries' },
  { id: 2, src: '/placeholder.svg', alt: 'Taurus Makeup Look', zodiac: 'Taurus' },
  { id: 3, src: '/placeholder.svg', alt: 'Gemini Makeup Look', zodiac: 'Gemini' },
  { id: 4, src: '/placeholder.svg', alt: 'Cancer Makeup Look', zodiac: 'Cancer' },
  { id: 5, src: '/placeholder.svg', alt: 'Leo Makeup Look', zodiac: 'Leo' },
  { id: 6, src: '/placeholder.svg', alt: 'Virgo Makeup Look', zodiac: 'Virgo' },
  { id: 7, src: '/placeholder.svg', alt: 'Libra Makeup Look', zodiac: 'Libra' },
  { id: 8, src: '/placeholder.svg', alt: 'Scorpio Makeup Look', zodiac: 'Scorpio' },
  { id: 9, src: '/placeholder.svg', alt: 'Sagittarius Makeup Look', zodiac: 'Sagittarius' },
  { id: 10, src: '/placeholder.svg', alt: 'Capricorn Makeup Look', zodiac: 'Capricorn' },
  { id: 11, src: '/placeholder.svg', alt: 'Aquarius Makeup Look', zodiac: 'Aquarius' },
  { id: 12, src: '/placeholder.svg', alt: 'Pisces Makeup Look', zodiac: 'Pisces' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Zodiac Makeup Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-green-700 mb-12 text-center"
        >
          Explore our celestial-inspired makeup looks for each zodiac sign.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Image src={item.src} alt={item.alt} width={400} height={300} className="rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-green-800 mb-2">{item.zodiac} Look</h2>
              <p className="text-green-600">Inspired by the {item.zodiac} zodiac sign.</p>
            </motion.div>
          ))}
        </div>
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

