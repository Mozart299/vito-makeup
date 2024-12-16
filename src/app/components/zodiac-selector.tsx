'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

export function ZodiacSelector() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-4">Find Your Zodiac Look</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {zodiacSigns.map((sign, index) => (
          <motion.button
            key={sign}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-2 rounded-lg ${selectedSign === sign ? 'bg-green-500 text-white' : 'bg-green-100 hover:bg-green-200'}`}
            onClick={() => setSelectedSign(sign)}
          >
            {sign}
          </motion.button>
        ))}
      </div>
      {selectedSign && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h4 className="text-xl font-semibold text-green-800 mb-2">{selectedSign} Look</h4>
          <Image src="/placeholder.svg" alt={`${selectedSign} Makeup Look`} width={400} height={300} className="rounded-lg shadow-lg" />
          <p className="mt-2 text-green-600">Discover the perfect makeup style for {selectedSign}.</p>
        </motion.div>
      )}
    </motion.section>
  )
}

