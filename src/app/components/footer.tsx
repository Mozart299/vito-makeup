import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-green-800 text-white p-8 mt-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p>@_v.ito_</p>
                            <p>vitouganda@gmail.com</p>
                            <p>Kampala-Uganda</p>
                            <p>+256 764691246</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/privacy" className="hover:text-green-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-green-300">
                                Terms of Service
                            </Link>
                            <Link href="/contact" className="hover:text-green-300">
                                Book Now
                            </Link>
                        </nav>
                    </div>

                    {/* Business Hours */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-lg mb-4">Note</h3>
                        <div className="space-y-2">
                            <p>Mobile Artistry Available</p>
                            <p>Book in time</p>
                            <p>Transportation fees vary by location</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-green-700 mt-8 pt-8 text-center md:text-left">
                    <p>© {new Date().getFullYear()} VITO Makeup Artistry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}