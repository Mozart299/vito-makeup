'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zodiacSign: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a third-party service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', zodiacSign: '', message: '' })
  }

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-dancing font-bold text-green-800 mb-8 mt-16 text-center"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-green-700 mb-12 text-center"
        >
          Have questions or want to book an appointment? Reach out to us!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-md fancy-border"
          >
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-6">Contact Information</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">Phone</p>
                  <p className="text-gray-700">+256 764691246</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">Email</p>
                  <p className="text-gray-700">vitouganda@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-green-800">Location</p>
                  <p className="text-gray-700">Kampala, Uganda</p>
                  <p className="text-sm text-gray-500">(Mobile services available)</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-dancing font-semibold text-green-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/_v.ito_" target="_blank" rel="noopener noreferrer" className="bg-green-100 p-2 rounded-full text-green-500 hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-green-100 p-2 rounded-full text-green-500 hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-green-100 p-2 rounded-full text-green-500 hover:bg-green-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md fancy-border"
          >
            <h2 className="text-2xl font-dancing font-semibold text-green-800 mb-6">Send a Message</h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-green-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-green-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-green-700 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zodiacSign" className="block text-green-700 mb-2">Your Zodiac Sign</label>
              <select
                id="zodiacSign"
                name="zodiacSign"
                value={formData.zodiacSign}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select your sign</option>
                {zodiacSigns.map(sign => (
                  <option key={sign} value={sign}>{sign}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-green-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <span>Send Message</span>
              <Send className="ml-2 h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  )
}