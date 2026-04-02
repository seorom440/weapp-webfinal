import type { Metadata } from 'next'
import { Manrope, Syne } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'WEAPP BCN – AI-Native Digital Product Studio | Barcelona',
    template: '%s | WEAPP BCN',
  },
  description:
    'AI-native digital product studio based in Barcelona. We build AI products from idea to production: AI Strategy, Web Apps, AI Agents, and Native Apps.',
  metadataBase: new URL('https://weappbcn.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://weappbcn.com',
    siteName: 'WEAPP BCN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WEAPP BCN – AI-Native Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@weappbcn',
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
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${syne.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
