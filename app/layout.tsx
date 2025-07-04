import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BBQ Tally - Mobile BBQ Food Counter for Cookouts and Parties',
  description: 'Quick and easy mobile app to count hot dogs, hamburgers, and cheeseburgers at your BBQ. Perfect for backyard cookouts, camping, and outdoor gatherings. Free BBQ planning tool.',
  keywords: 'BBQ counter, barbecue planner, cookout tool, food counter, BBQ party, hot dog counter, hamburger tally, outdoor cooking, BBQ app',
  authors: [{ name: 'Mike McConnell' }],
  creator: 'Mike McConnell',
  publisher: 'BBQ Tally',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'BBQ Tally - Mobile BBQ Food Counter',
    description: 'Quick and easy way to count food preferences at your BBQ. Perfect for cookouts and outdoor parties!',
    url: 'https://www.bbqtally.com',
    siteName: 'BBQ Tally',
    type: 'website',
    images: [
      {
        url: 'https://www.bbqtally.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BBQ Tally - Mobile Food Counter App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBQ Tally - Mobile BBQ Food Counter',
    description: 'Quick and easy way to count food preferences at your BBQ',
    images: ['https://www.bbqtally.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 