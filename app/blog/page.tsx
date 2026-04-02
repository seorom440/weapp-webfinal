import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog – AI Insights & News',
  description:
    'Stay updated with the latest trends in AI, autonomous agents, audiovisual tech, and AI-native development.',
  alternates: {
    canonical: 'https://weappbcn.com/blog',
  },
  openGraph: {
    title: 'Blog – WEAPP BCN | AI Insights & News',
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

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Insights &amp; <span className="text-accent">News</span>
            </h1>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">
              Stay updated with the latest trends in AI, autonomous agents, audiovisual tech, and
              AI-native development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-accent border border-white/10">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-ink-muted mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-ink-muted text-sm line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
