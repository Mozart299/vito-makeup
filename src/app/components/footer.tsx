import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-green-800 text-white p-4 mt-12">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} Vito Zodiac Makeup. All rights reserved.</p>
                <div className="mt-2">
                    <Link href="/" className="hover:text-green-300 mr-4">Privacy Policy</Link>
                    <Link href="/" className="hover:text-green-300">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
