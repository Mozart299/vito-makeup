'use client'

import { motion } from 'framer-motion'

export function ServicePackages() {
  const packages = [
    { name: "Leo's Fierce Glow", description: "Bold and radiant makeup for the confident Leo", price: "$120" },
    { name: "Pisces' Dreamy Eyes", description: "Ethereal and enchanting eye makeup for the dreamy Pisces", price: "$100" },
    { name: "Scorpio's Intense Allure", description: "Dramatic and mysterious looks for the passionate Scorpio", price: "$130" },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-4">Zodiac-Themed Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div 
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-green-800 mb-2">{pkg.name}</h4>
            <p className="text-green-600 mb-4">{pkg.description}</p>
            <p className="text-2xl font-bold text-green-500">{pkg.price}</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

