'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  { 
    name: 'Sarah L.', 
    sign: 'Leo', 
    quote: 'Vito captured my fierce Leo energy perfectly! My makeup was so glamorous and powerful.',
    stars: 5,
    color: 'zodiac-leo'
  },
  { 
    name: 'Emily R.', 
    sign: 'Pisces', 
    quote: 'The dreamy Pisces look was exactly what I wanted. So ethereal and magical!',
    stars: 5,
    color: 'zodiac-pisces'
  },
  { 
    name: 'Michael T.', 
    sign: 'Scorpio', 
    quote: 'I felt mysterious and powerful with my Scorpio-inspired makeup. Everyone was asking about it!',
    stars: 5,
    color: 'zodiac-scorpio'
  },
  { 
    name: 'Jessica K.', 
    sign: 'Gemini', 
    quote: 'My Gemini duality was perfectly captured in this two-toned look. So creative!',
    stars: 5,
    color: 'zodiac-gemini'
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
    ))
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12 bg-white p-8 rounded-2xl shadow-md fancy-border"
    >
      <h3 className="text-3xl font-dancing font-bold text-green-800 mb-6 text-center">Client Testimonials</h3>
      <div className="relative px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 rounded-2xl relative"
          >
            <Quote className="absolute top-4 left-4 h-10 w-10 text-gray-200 opacity-50" />
            <div className="text-center px-8">
              <p className={`text-lg italic mb-4 text-gray-700 relative z-10`}>"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center justify-center mb-2 space-x-1">
                {renderStars(testimonials[currentIndex].stars)}
              </div>
              <p className={`font-semibold ${testimonials[currentIndex].color}`}>
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-500 text-sm">{testimonials[currentIndex].sign}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}