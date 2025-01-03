'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServicePriceNotes } from './service-price-notes'

export function ServicePackages() {
  const packages = [
    { name: "Everyday glam", description: "Perfect for daily occasions and events", price: "70k" },
    { name: "Birthday glam", description: "Special makeup for your birthday celebration", price: "90k" },
    { name: "Special events", description: "Glamorous looks for special occasions", price: "100k" },
    { name: "Special beats", description: "Premium makeup artistry", price: "130k" },
    { name: "Kids", description: "Gentle makeup suitable for children", price: "30k" },
    { name: "Kukyala/kuhingira", description: "Traditional ceremony makeup", price: "800k" },
    { name: "Bride (Work and Leave)", description: "Bridal makeup with basic package", price: "1.3M" },
    { name: "Bride + Matron (Work and Leave)", description: "Bridal party package", price: "2M" },
    { name: "Bride (Full Day)", description: "Complete bridal makeup service", price: "2.3M" },
    { name: "Bride + Matron (Full Day)", description: "Full day bridal party coverage", price: "2.8M" },
    { name: "Entourage", description: "Group makeup service", price: "1M" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12"
    >
      <h3 className="text-2xl font-bold text-green-800 mb-4">VITO Beauty Services</h3>
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-left mt-6"
            >
              <Link 
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                href="/contact"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <ServicePriceNotes />
    </motion.section>
  )
}

export default ServicePackages