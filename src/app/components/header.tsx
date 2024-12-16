import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-green-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold"
                >
                    Vito Zodiac Makeup
                </motion.h1>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <motion.ul 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col md:flex-row md:space-x-4"
                    >
                        <li><Link href="/" className="hover:text-green-300 py-2 md:py-0">Home</Link></li>
                        <li><Link href="/services" className="hover:text-green-300 py-2 md:py-0">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-green-300 py-2 md:py-0">Gallery</Link></li>
                        <li><Link href="/blog" className="hover:text-green-300 py-2 md:py-0">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-green-300 py-2 md:py-0">Contact</Link></li>
                    </motion.ul>
                </nav>
            </div>
        </header>
    )
}

