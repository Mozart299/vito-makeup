'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { ZodiacSelector } from './components/zodiac-selector'
import { TestimonialCarousel } from './components/testimonial-carousel'
import { ServicePackages } from './components/service-packages'
import { BlogPreview } from './components/blog-preview'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-green-800 mb-4">Vito Makeup</h1>
          <p className="text-xl text-green-600 mb-8">Unveil Your Celestial Beauty</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <StarIcon className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Zodiac-Inspired Glamour</h2>
            <p className="text-green-600">Experience makeup tailored to your astrological sign, enhancing your unique celestial energy.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <StarIcon className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Mobile Artistry</h2>
            <p className="text-green-600">Enjoy professional makeup services in the comfort of your own space, anywhere in Kampala.</p>
          </motion.div>
        </div>

        <ZodiacSelector />

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-12"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">Our Celestial Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image src="/placeholder.svg" alt="Before and After" width={300} height={200} className="rounded-lg shadow-lg" />
            <Image src="/placeholder.svg" alt="Before and After" width={300} height={200} className="rounded-lg shadow-lg" />
            <Image src="/placeholder.svg" alt="Before and After" width={300} height={200} className="rounded-lg shadow-lg" />
          </div>
        </motion.section>

        <TestimonialCarousel />

        <ServicePackages />

        <BlogPreview />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="/contact" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
            Book Your Celestial Transformation
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
