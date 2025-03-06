import Link from 'next/link'
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 p-8 mt-12 fancy-border">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h3 className="font-dancing font-semibold text-2xl mb-4 text-green-500">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="flex items-center justify-center md:justify-start">
                                <Instagram className="h-4 w-4 mr-2 text-green-500" />
                                @_v.ito_
                            </p>
                            <p>vitouganda@gmail.com</p>
                            <p>Kampala-Uganda</p>
                            <p>+256 764691246</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-dancing font-semibold text-2xl mb-4 text-green-500">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/privacy" className="hover:text-green-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-green-500 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/contact" className="hover:text-green-500 transition-colors">
                                Book Now
                            </Link>
                        </nav>
                    </div>

                    {/* Business Hours */}
                    <div className="text-center md:text-right">
                        <h3 className="font-dancing font-semibold text-2xl mb-4 text-green-500">Note</h3>
                        <div className="space-y-2">
                            <p>Mobile Artistry Available</p>
                            <p>Book in time</p>
                            <p>Transportation fees vary by location</p>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://instagram.com/_v.ito_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
                        <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                        <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                        <Twitter className="h-6 w-6" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                    <p className="flex items-center justify-center">
                        © {new Date().getFullYear()} VITO Makeup Artistry. All rights reserved 
                        <Heart className="h-4 w-4 ml-1 text-green-500" />
                    </p>
                </div>
            </div>
        </footer>
    )
}