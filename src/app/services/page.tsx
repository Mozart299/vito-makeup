'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServicePackages } from '../components/service-packages'
import { Heart, Star, Calendar } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-dancing font-bold text-green-800 mb-8 mt-16 text-center"
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
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md fancy-border">
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-4 flex items-center">
              <Star className="h-6 w-6 mr-2 text-green-500" />
              <span>Custom Consultations</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Not sure which package is right for you? Book a custom consultation with our expert makeup artists to create a personalized look that perfectly aligns with your zodiac sign and personal style.
            </p>
            <Link 
              href="/contact" 
              className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-colors inline-flex items-center"
            >
              <span>Book a Consultation</span>
              <Heart className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md fancy-border">
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-green-500" />
              <span>Makeup Workshops</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Want to learn how to create your own zodiac-inspired looks? Join our workshops where we teach techniques specifically tailored to your astrological sign's unique energy.
            </p>
            <Link 
              href="/contact" 
              className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-colors inline-flex items-center"
            >
              <span>Inquire About Workshops</span>
              <Heart className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-md inline-block mx-auto fancy-border">
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-4">Ready to Book?</h2>
            <p className="text-gray-700 mb-6">
              Contact us today to secure your appointment and experience makeup that's truly written in the stars!
            </p>
            <Link 
              href="/contact" 
              className="bg-pink-500 text-white py-3 px-8 rounded-full hover:bg-pink-600 transition-colors inline-flex items-center"
            >
              <span>Book Your Appointment</span>
              <Heart className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  )
}