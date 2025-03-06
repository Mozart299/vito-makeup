'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function GalleryPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to Instagram profile
    window.location.href = 'https://www.instagram.com/_v.ito_/'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-2xl font-dancing">Redirecting to Instagram gallery...</p>
    </div>
  )
}