import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BBQ Tally - BBQ Food Counter for Cookouts and Parties',
  description: 'Quick and easy website to count hot dogs, hamburgers, and cheeseburgers at your BBQ. Perfect for backyard cookouts, camping, and outdoor gatherings. Free BBQ planning tool.',
  keywords: 'BBQ counter, barbecue planner, cookout tool, food counter, BBQ party, hot dog counter, hamburger tally, outdoor cooking, BBQ app, party planning, food tracking, grill counter, backyard BBQ, camping food, outdoor party, cookout planning, BBQ organizer, food tally app, free BBQ tool, mobile food counter, cookout order tracker, grill party calculator, tailgate counter',
  authors: [{ name: 'Mike McConnell' }],
  creator: 'Mike McConnell',
  publisher: 'BBQ Tally',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  metadataBase: new URL('https://www.bbqtally.com'),
  alternates: {
    canonical: 'https://www.bbqtally.com'
  },
  category: 'Utility',
  classification: 'BBQ Planning Tool',
  openGraph: {
    title: 'BBQ Tally - BBQ Food Counter',
    description: 'Quick and easy way to count food preferences at your BBQ. Perfect for cookouts and outdoor parties!',
    url: 'https://www.bbqtally.com',
    siteName: 'BBQ Tally',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.bbqtally.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BBQ Tally - Food Counter App',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBQ Tally - BBQ Food Counter',
    description: 'Quick and easy way to count food preferences at your BBQ',
    images: ['https://www.bbqtally.com/og-image.png'],
    creator: '@bbqtally',
  },
  other: {
    'application-name': 'BBQ Tally',
    'apple-mobile-web-app-title': 'BBQ Tally',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#FF6B35',
    'theme-color': '#FF6B35',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0RFTLD46PP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0RFTLD46PP');
            `,
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-4725000956854577" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-32.png" sizes="32x32" type="image/png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4725000956854577"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 