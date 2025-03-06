'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'

export function BlogPreview() {
  const blogPosts = [
    { 
      title: "5 Makeup Tips for Fiery Aries", 
      excerpt: "Discover how to enhance your bold Aries energy with these makeup techniques.",
      zodiacClass: "zodiac-aries bg-zodiac-aries" 
    },
    { 
      title: "Gemini's Two-Toned Look", 
      excerpt: "Learn how to create a stunning dual-color makeup look perfect for Geminis.",
      zodiacClass: "zodiac-gemini bg-zodiac-gemini" 
    },
    { 
      title: "Capricorn's Professional Glam", 
      excerpt: "Elevate your work makeup with these Capricorn-inspired professional looks.",
      zodiacClass: "zodiac-capricorn bg-zodiac-capricorn" 
    },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12 p-8 bg-white rounded-2xl shadow-md fancy-border"
    >
      <h3 className="text-3xl font-dancing font-bold text-green-800 mb-6 text-center flex items-center justify-center">
        <BookOpen className="h-6 w-6 mr-2 text-green-500" />
        <span>Latest from Our Blog</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-2xl shadow-md ${post.zodiacClass} backdrop-blur-sm bg-opacity-20`}
          >
            <h4 className="text-xl font-dancing font-semibold mb-3">{post.title}</h4>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href="/blog" className="text-green-600 hover:text-green-800 transition-colors inline-flex items-center">
              <span>Read more</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8"
      >
        <Link 
          href="/blog" 
          className="bg-white text-green-500 border border-green-500 py-2 px-6 rounded-full hover:bg-green-50 transition-colors inline-flex items-center shadow-sm"
        >
          <span>View All Posts</span>
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </motion.div>
    </motion.section>
  )
}