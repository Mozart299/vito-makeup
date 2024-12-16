import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-green-800 text-white p-4 mt-12">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-center sm:text-left mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Vito Zodiac Makeup. All rights reserved.
                    </p>
                    <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <Link href="/privacy" className="hover:text-green-300 text-center sm:text-left">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-green-300 text-center sm:text-left">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

