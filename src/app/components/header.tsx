'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Header() {
    interface HeaderData {
        logo_name: string;
        
    }

    const [headerData, setHeaderData] = useState<HeaderData | null>(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/header`)
                console.log(response.data)
                setHeaderData(response.data)
                setLoading(false)
            } catch (err) {
                setError((err as any).message)
                setLoading(false)
            }
        }

        fetchHeaderData()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
                <div className="text-green-800 text-xl">Loading...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
                <div className="text-red-600 text-xl">Error: {error}</div>
            </div>
        )
    }


    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
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
        <header className="bg-green-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
                        {headerData?.logo_name}
                        Vito Zodiac Makeup
                    </Link>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none z-60"
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
                                <Link
                                    href={link.href}
                                    className="text-white hover:text-green-300 transition-colors font-medium"
                                >
                                    {link.label}
                                </Link>
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
                            className="fixed md:hidden top-0 left-0 w-full h-screen bg-green-800 z-50 flex flex-col items-center justify-center space-y-6"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-white z-60"
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
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-white hover:text-green-300 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}