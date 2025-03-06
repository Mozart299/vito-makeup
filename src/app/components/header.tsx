'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Menu, Heart } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: 'https://www.instagram.com/_v.ito_/', label: 'Gallery', external: true },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' }
    ]

    const mobileMenuVariants = {
        hidden: { 
            opacity: 0, 
            y: -50,
            transition: {
                duration: 0.3
            }
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <header className="bg-white text-gray-800 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-3xl font-bold hover:text-green-500 transition-colors flex items-center">
                        <Heart className="h-6 w-6 text-green-500 mr-2" />
                        <span className="font-dancing">Vito Zodiac Makeup</span>
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-gray-800 focus:outline-none z-60"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center">
                    <motion.ul 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex space-x-6"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                {link.external ? (
                                    <a 
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="text-gray-800 hover:text-green-500 transition-colors font-medium"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-800 hover:text-green-500 transition-colors font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </motion.ul>
                </nav>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            key="mobile-menu"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={mobileMenuVariants}
                            className="fixed md:hidden top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-6"
                        >
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="absolute top-6 right-6 text-gray-800 z-60"
                                aria-label="Close menu"
                            >
                                <X className="h-8 w-8" />
                            </button>

                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {link.external ? (
                                        <a 
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-bold text-gray-800 hover:text-green-500 transition-colors font-dancing"
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link 
                                            href={link.href} 
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-bold text-gray-800 hover:text-green-500 transition-colors font-dancing"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}