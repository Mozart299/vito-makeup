'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function BlogPreview() {
  const blogPosts = [
    { title: "5 Makeup Tips for Fiery Aries", excerpt: "Discover how to enhance your bold Aries energy with these makeup techniques." },
    { title: "Gemini's Two-Toned Look", excerpt: "Learn how to create a stunning dual-color makeup look perfect for Geminis." },
    { title: "Capricorn's Professional Glam", excerpt: "Elevate your work makeup with these Capricorn-inspired professional looks." },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-4">Latest from Our Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h4>
            <p className="text-green-600 mb-4">{post.excerpt}</p>
            <Link href="/blog" className="text-green-500 hover:underline">Read more</Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-6"
      >
        <Link href="/blog" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
          View All Posts
        </Link>
      </motion.div>
    </motion.section>
  )
}

