"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 – Page Not Found</h1>
      <p className="text-gray-700 mb-6 max-w-lg">
        Oops! The page you're looking for doesn't exist. BBQ Tally helps you plan the perfect cookout by counting hot
        dogs, hamburgers, and cheeseburgers and providing smart shopping lists and grilling guides. Use the links
        below to get back to the tasty stuff!
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-colors"
        >
          🍔 Home
        </Link>
        <Link
          href="/bbq-guide"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-colors"
        >
          📖 BBQ Guide
        </Link>
      </div>
    </div>
  )
} 