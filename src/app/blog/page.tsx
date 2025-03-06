'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Sparkles } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "5 Makeup Tips for Fiery Aries",
    excerpt: "Discover how to enhance your bold Aries energy with these makeup techniques.",
    date: "2023-04-01",
    zodiacClass: "zodiac-aries bg-zodiac-aries",
    icon: "♈"
  },
  {
    id: 2,
    title: "Gemini's Two-Toned Look",
    excerpt: "Learn how to create a stunning dual-color makeup look perfect for Geminis.",
    date: "2023-05-15",
    zodiacClass: "zodiac-gemini bg-zodiac-gemini",
    icon: "♊"
  },
  {
    id: 3,
    title: "Capricorn's Professional Glam",
    excerpt: "Elevate your work makeup with these Capricorn-inspired professional looks.",
    date: "2023-06-22",
    zodiacClass: "zodiac-capricorn bg-zodiac-capricorn",
    icon: "♑"
  },
  {
    id: 4,
    title: "Leo's Radiant Glow: Makeup for the Spotlight",
    excerpt: "Embrace your inner Leo with these show-stopping makeup techniques.",
    date: "2023-07-10",
    zodiacClass: "zodiac-leo bg-zodiac-leo",
    icon: "♌"
  },
  {
    id: 5,
    title: "Pisces Dreamy Eye Looks",
    excerpt: "Create ethereal and enchanting eye makeup inspired by the dreamy Pisces.",
    date: "2023-08-05",
    zodiacClass: "zodiac-pisces bg-zodiac-pisces",
    icon: "♓"
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-dancing font-bold text-green-800 mb-8 mt-16 text-center"
        >
          Zodiac Beauty Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-green-700 mb-12 text-center"
        >
          Explore our latest articles on zodiac-inspired makeup and beauty tips.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl shadow-md ${post.zodiacClass} backdrop-blur-sm bg-opacity-20`}
            >
              <div className="flex items-start">
                <div className="text-4xl mr-4 opacity-70">{post.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-dancing font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm mb-4 text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-dancing font-semibold text-green-800 mb-4 flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2 text-green-500" />
              <span>Join Our Newsletter</span>
            </h3>
            <p className="text-gray-700 mb-4">Stay updated with our latest zodiac beauty tips!</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-3 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}