import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogListClient from '@/components/BlogListClient'

export const metadata: Metadata = {
  title: 'Blog | Insights & News',
  description:
    'Stay updated with the latest trends in AI, autonomous agents, audiovisual tech, and AI-native development.',
  alternates: {
    canonical: 'https://weappbcn.com/blog',
  },
  openGraph: {
    title: 'WEAPP BCN Blog | Insights & News',
    description:
      'Stay updated with the latest trends in AI, autonomous agents, audiovisual tech, and AI-native development.',
    url: 'https://weappbcn.com/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
      <div className="noise-bg" />
      <Navbar />
      <BlogListClient posts={posts} />
      <Footer />
    </div>
  )
}
