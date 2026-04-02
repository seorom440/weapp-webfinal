import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Manrope, Syne } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://weappbcn.com'),
  title: {
    default: 'WEAPP BCN | AI-Native Digital Product Studio',
    template: '%s | WEAPP BCN',
  },
  description:
    'AI-native digital product studio based in Barcelona. We turn artificial intelligence into production-ready products: web apps, AI agents, automations and native apps.',
  keywords: [
    'AI studio',
    'digital products',
    'Barcelona',
    'artificial intelligence',
    'web apps',
    'AI agents',
    'automations',
  ],
  authors: [{ name: 'WEAPP BCN', url: 'https://weappbcn.com' }],
  creator: 'WEAPP BCN',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weappbcn.com',
    siteName: 'WEAPP BCN',
    title: 'WEAPP BCN | AI-Native Digital Product Studio',
    description:
      'AI-native digital product studio based in Barcelona. We turn artificial intelligence into production-ready products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WEAPP BCN – AI-Native Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEAPP BCN | AI-Native Digital Product Studio',
    description:
      'AI-native digital product studio based in Barcelona. We turn artificial intelligence into production-ready products.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://weappbcn.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
