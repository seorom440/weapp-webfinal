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
  title: 'WEAPP BCN | AI-Native Digital Product Studio',
  description:
    'AI-native digital product studio based in Barcelona. We build AI products, web apps, AI agents and automations from idea to production.',
  alternates: {
    canonical: 'https://weappbcn.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WEAPP BCN',
  url: 'https://weappbcn.com',
  logo: 'https://weappbcn.com/og-image.png',
  description:
    'AI-native digital product studio based in Barcelona. We turn artificial intelligence into production-ready products.',
  foundingLocation: {
    '@type': 'Place',
    name: 'Barcelona, Spain',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@weappbcn.com',
    contactType: 'customer service',
  },
  sameAs: ['https://linkedin.com/company/weappbcn'],
  knowsAbout: [
    'Artificial Intelligence',
    'Web Application Development',
    'AI Agents',
    'Machine Learning',
    'Digital Product Design',
  ],
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
