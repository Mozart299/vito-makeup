
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
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
                <nav>
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-4"
                    >
                        <li><Link href="/" className="hover:text-green-300">Home</Link></li>
                        <li><Link href="/services" className="hover:text-green-300">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-green-300">Gallery</Link></li>
                        <li><Link href="/blog" className="hover:text-green-300">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
                    </motion.ul>
                </nav>
            </div>
        </header>
    )
}

