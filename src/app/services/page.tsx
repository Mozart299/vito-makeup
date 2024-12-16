'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServicePackages } from '../components/service-packages'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
    </div>
  )
}

