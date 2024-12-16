'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Sarah L.', sign: 'Leo', quote: 'Vito captured my fierce Leo energy perfectly!' },
  { name: 'Emily R.', sign: 'Pisces', quote: 'The dreamy Pisces look was exactly what I wanted.' },
  { name: 'Michael T.', sign: 'Scorpio', quote: 'I felt mysterious and powerful with my Scorpio-inspired makeup.' },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12 bg-green-100 p-6 rounded-lg"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-4">Client Testimonials</h3>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg italic mb-2 text-green-700">"{testimonials[currentIndex].quote}"</p>
            <p className="font-semibold text-green-800">{testimonials[currentIndex].name} - {testimonials[currentIndex].sign}</p>
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
          onClick={prevTestimonial}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
          onClick={nextTestimonial}
        >
          &gt;
        </button>
      </div>
    </motion.section>
  )
}

