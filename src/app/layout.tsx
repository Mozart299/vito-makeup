import type { Metadata } from 'next'
import { Inter, Dancing_Script, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

// Define fonts
const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['400', '700'] 
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700']
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: 'Vito - Zodiac-Inspired Mobile Makeup Artistry',
  description: 'Discover your celestial beauty with Vito Makeup - Zodiac-inspired makeup artistry services in Kampala, Uganda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancing.variable} ${playfair.variable} ${montserrat.variable} font-montserrat bg-gradient-to-b from-pink-50 to-white`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}