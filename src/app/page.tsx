'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Star, Sparkles, Wand2 } from 'lucide-react'
import { ZodiacSelector } from './components/zodiac-selector'
import { TestimonialCarousel } from './components/testimonial-carousel'
import { ServicePackages } from './components/service-packages'
import { BlogPreview } from './components/blog-preview'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 mt-10 font-dancing">Vito Makeup</h1>
            <motion.span 
              className="absolute -top-8 -right-8 text-green-500"
              animate={{ 
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <Sparkles className="h-10 w-10" />
            </motion.span>
          </div>
          <p className="text-xl md:text-2xl text-green-600 mb-8 font-dancing">Unveil Your Celestial Beauty</p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-10"
          ></motion.div>
        </motion.div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 fancy-border"
          >
            <Star className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-4">Zodiac-Inspired Glamour</h2>
            <p className="text-gray-700">Experience makeup tailored to your astrological sign, enhancing your unique celestial energy.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 fancy-border"
          >
            <Wand2 className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-4">Mobile Artistry</h2>
            <p className="text-gray-700">Enjoy professional makeup services in the comfort of your own space, anywhere in Kampala.</p>
          </motion.div>
        </div>

        {/* Zodiac Selector */}
        <ZodiacSelector />

        {/* Gallery Preview */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-12 p-8 bg-white rounded-2xl shadow-md fancy-border"
        >
          <h3 className="text-3xl font-dancing font-bold text-green-800 mb-6 text-center">Our Celestial Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
              <Image src="/placeholder.svg" alt="Before and After" width={400} height={300} className="w-full" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
              <Image src="/placeholder.svg" alt="Before and After" width={400} height={300} className="w-full" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
              <Image src="/placeholder.svg" alt="Before and After" width={400} height={300} className="w-full" />
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="https://www.instagram.com/_v.ito_/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
            >
              <span>View Gallery on Instagram</span>
              <Heart className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* Blog Preview */}
        <BlogPreview />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white p-10 rounded-2xl shadow-lg fancy-border">
            <h3 className="text-3xl font-dancing font-bold text-green-800 mb-4">Ready for Your Celestial Transformation?</h3>
            <p className="text-gray-700 mb-6">Let your zodiac guide your next makeup look</p>
            <Link 
              href="/contact" 
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all shadow-md hover:shadow-lg inline-flex items-center"
            >
              <span>Book With Us</span>
              <Star className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}