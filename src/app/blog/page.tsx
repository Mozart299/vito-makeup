'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "5 Makeup Tips for Fiery Aries",
    excerpt: "Discover how to enhance your bold Aries energy with these makeup techniques.",
    date: "2023-04-01",
  },
  {
    id: 2,
    title: "Gemini's Two-Toned Look",
    excerpt: "Learn how to create a stunning dual-color makeup look perfect for Geminis.",
    date: "2023-05-15",
  },
  {
    id: 3,
    title: "Capricorn's Professional Glam",
    excerpt: "Elevate your work makeup with these Capricorn-inspired professional looks.",
    date: "2023-06-22",
  },
  {
    id: 4,
    title: "Leo's Radiant Glow: Makeup for the Spotlight",
    excerpt: "Embrace your inner Leo with these show-stopping makeup techniques.",
    date: "2023-07-10",
  },
  {
    id: 5,
    title: "Pisces Dreamy Eye Looks",
    excerpt: "Create ethereal and enchanting eye makeup inspired by the dreamy Pisces.",
    date: "2023-08-05",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 mt-10 text-center"
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
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-green-800 mb-2">{post.title}</h2>
              <p className="text-sm text-green-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-green-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-green-500 hover:underline">Read more</Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  )
}

