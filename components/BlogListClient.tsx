'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { BlogPost } from '@/lib/blog'

interface BlogListClientProps {
  posts: BlogPost[]
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const { t } = useLanguage()

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {t('blog.title.1')}
            <span className="text-accent">{t('blog.title.highlight')}</span>
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto">{t('blog.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-accent border border-white/10 z-10">
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
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
