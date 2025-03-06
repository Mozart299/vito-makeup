'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'
import { ServicePriceNotes } from './service-price-notes'

export function ServicePackages() {
  const packages = [
    { name: "Everyday glam", description: "Perfect for daily occasions and events", price: "70k", icon: "✨" },
    { name: "Birthday glam", description: "Special makeup for your birthday celebration", price: "90k", icon: "🎂" },
    { name: "Special events", description: "Glamorous looks for special occasions", price: "100k", icon: "🌟" },
    { name: "Special beats", description: "Premium makeup artistry", price: "130k", icon: "💫" },
    { name: "Kids", description: "Gentle makeup suitable for children", price: "30k", icon: "🧚" },
    { name: "Kukyala/kuhingira", description: "Traditional ceremony makeup", price: "800k", icon: "👰" },
    { name: "Bride (Work and Leave)", description: "Bridal makeup with basic package", price: "1.3M", icon: "💍" },
    { name: "Bride + Matron (Work and Leave)", description: "Bridal party package", price: "2M", icon: "👯" },
    { name: "Bride (Full Day)", description: "Complete bridal makeup service", price: "2.3M", icon: "💐" },
    { name: "Bride + Matron (Full Day)", description: "Full day bridal party coverage", price: "2.8M", icon: "🥂" },
    { name: "Entourage", description: "Group makeup service", price: "1M", icon: "👩‍👩‍👧" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12"
    >
      <h3 className="text-3xl font-dancing font-bold text-green-800 mb-6 text-center flex items-center justify-center">
        <Sparkles className="h-6 w-6 mr-2 text-green-500" />
        <span>VITO Beauty Services</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start">
              <div className="text-3xl mr-3">{pkg.icon}</div>
              <div>
                <h4 className="text-xl font-dancing font-semibold text-green-800 mb-2">{pkg.name}</h4>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-2xl font-bold text-green-500 mb-4">{pkg.price}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors flex items-center w-fit"
                    href="/contact"
                  >
                    <span>Book Now</span>
                    <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ServicePriceNotes />
    </motion.section>
  )
}

export default ServicePackages