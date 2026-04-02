import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AIShowcase from '@/components/AIShowcase'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WEAPP BCN – AI-Native Digital Product Studio | Barcelona',
  description:
    'We build AI products. From idea to production. AI Strategy, Web Apps & Platforms, AI Agents, Automations, Native Apps and Premium Corporate Webs. Based in Barcelona.',
  alternates: {
    canonical: 'https://weappbcn.com',
  },
  openGraph: {
    title: 'WEAPP BCN – AI-Native Digital Product Studio',
    description:
      'We build AI products. From idea to production. AI Strategy, Web Apps, AI Agents, and Native Apps. Based in Barcelona.',
    url: 'https://weappbcn.com',
    type: 'website',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WEAPP BCN',
  url: 'https://weappbcn.com',
  logo: 'https://weappbcn.com/logo.png',
  description:
    'AI-native digital product studio. We turn artificial intelligence into production-ready products.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'Catalonia',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@weappbcn.com',
    contactType: 'customer service',
  },
  sameAs: ['https://linkedin.com/company/weappbcn'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
        <div className="noise-bg" />
        <Navbar />
        <main>
          <Hero />
          <AIShowcase />
          <About />
          <Services />
          <Portfolio />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
