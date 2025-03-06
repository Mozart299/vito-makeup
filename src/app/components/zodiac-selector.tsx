'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const zodiacSigns = [
  { name: 'Aries', color: 'zodiac-aries', bgColor: 'bg-zodiac-aries', date: 'Mar 21 - Apr 19' },
  { name: 'Taurus', color: 'zodiac-taurus', bgColor: 'bg-zodiac-taurus', date: 'Apr 20 - May 20' },
  { name: 'Gemini', color: 'zodiac-gemini', bgColor: 'bg-zodiac-gemini', date: 'May 21 - Jun 20' },
  { name: 'Cancer', color: 'zodiac-cancer', bgColor: 'bg-zodiac-cancer', date: 'Jun 21 - Jul 22' },
  { name: 'Leo', color: 'zodiac-leo', bgColor: 'bg-zodiac-leo', date: 'Jul 23 - Aug 22' },
  { name: 'Virgo', color: 'zodiac-virgo', bgColor: 'bg-zodiac-virgo', date: 'Aug 23 - Sep 22' },
  { name: 'Libra', color: 'zodiac-libra', bgColor: 'bg-zodiac-libra', date: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', color: 'zodiac-scorpio', bgColor: 'bg-zodiac-scorpio', date: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', color: 'zodiac-sagittarius', bgColor: 'bg-zodiac-sagittarius', date: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', color: 'zodiac-capricorn', bgColor: 'bg-zodiac-capricorn', date: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', color: 'zodiac-aquarius', bgColor: 'bg-zodiac-aquarius', date: 'Jan 20 - Feb 18' },
  { name: 'Pisces', color: 'zodiac-pisces', bgColor: 'bg-zodiac-pisces', date: 'Feb 19 - Mar 20' }
]

export function ZodiacSelector() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  
  const getSelectedZodiac = () => {
    return zodiacSigns.find(sign => sign.name === selectedSign)
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-12 p-8 bg-white rounded-2xl shadow-md fancy-border"
    >
      <h3 className="text-3xl font-bold mb-4 text-center flex items-center justify-center">
        <Sparkles className="h-6 w-6 mr-2 text-green-500" />
        <span>Find Your Zodiac Look</span>
      </h3>
      
      <p className="text-center mb-6 text-gray-600">Select your sign to discover your perfect makeup style</p>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {zodiacSigns.map((sign, index) => (
          <motion.button
            key={sign.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`p-3 rounded-2xl shadow-sm ${
              selectedSign === sign.name 
                ? 'ring-2 ring-offset-2 ' + sign.bgColor + ' ' + sign.color
                : 'bg-white hover:' + sign.bgColor
            }`}
            onClick={() => setSelectedSign(sign.name)}
          >
            <span className={selectedSign === sign.name ? '' : sign.color}>
              {sign.name}
            </span>
          </motion.button>
        ))}
      </div>
      
      {selectedSign && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mt-8 p-6 rounded-2xl ${getSelectedZodiac()?.bgColor}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className={`text-2xl font-dancing font-semibold mb-2 ${getSelectedZodiac()?.color}`}>
                {selectedSign} Beauty
              </h4>
              <p className="text-gray-700 mb-1">{getSelectedZodiac()?.date}</p>
              <p className="mb-4">Discover the perfect makeup style that harnesses the energy of {selectedSign}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${getSelectedZodiac()?.color}`}></span>
                  {selectedSign === 'Aries' && 'Bold red lips and defined brows for your fiery nature'}
                  {selectedSign === 'Taurus' && 'Earthy tones and luxurious textures for natural beauty'}
                  {selectedSign === 'Gemini' && 'Playful dual-toned looks to express your duality'}
                  {selectedSign === 'Cancer' && 'Soft, dewy looks to showcase your gentle sensitivity'}
                  {selectedSign === 'Leo' && 'Golden highlights and dramatic eyes for star power'}
                  {selectedSign === 'Virgo' && 'Precise, elegant minimalism with perfect details'}
                  {selectedSign === 'Libra' && 'Balanced, harmonious looks with a touch of romance'}
                  {selectedSign === 'Scorpio' && 'Intense, smoldering eyes and deep lip colors'}
                  {selectedSign === 'Sagittarius' && 'Adventurous with pops of unexpected color'}
                  {selectedSign === 'Capricorn' && 'Sophisticated, structured looks with classic appeal'}
                  {selectedSign === 'Aquarius' && 'Unique, avant-garde styles in cool tones'}
                  {selectedSign === 'Pisces' && 'Dreamy, shimmery looks with ethereal quality'}
                </li>
                <li className="flex items-start">
                  <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${getSelectedZodiac()?.color}`}></span>
                  Perfect for your {selectedSign} personality
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src="/placeholder.svg" alt={`${selectedSign} Makeup Look`} width={400} height={300} className="w-full" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}