'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Calendar, Clock, Tag, Terminal, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { BlogPost } from '@/lib/blog'

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const promptText = `Actúa como un experto en ${post.category}. Explícame cómo puedo aplicar los principios de "${post.title}" en mi empresa del sector [TU SECTOR] para mejorar la eficiencia en un 30% en los próximos 6 meses. Dame 3 pasos accionables.`

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} /> {t('blog.back')}
          </Link>

          <div className="flex items-center gap-4 text-sm text-ink-muted mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5 text-accent">
              <Tag size={14} /> {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10 relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              unoptimized
              priority
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-p:text-ink-muted prose-headings:font-display prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80">
            <p className="lead text-2xl text-ink font-medium mb-10 border-l-4 border-accent pl-6 py-2">
              {post.excerpt}
            </p>

            {/* Rendered Markdown */}
            {post.content && (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}

            {/* AI Prompt Section */}
            <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
              <span>🛠️</span> Aplicación Práctica
            </h2>
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 my-8 not-prose">
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <Terminal size={24} /> Prueba este Prompt
              </h4>
              <p className="text-ink-muted mb-6">
                Copia y pega este prompt en tu herramienta de IA favorita (Gemini, ChatGPT, Claude)
                para explorar este concepto:
              </p>
              <div className="bg-bg border border-white/10 rounded-xl p-4 relative group">
                <code className="text-sm text-ink font-mono block pr-12">&quot;{promptText}&quot;</code>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  onClick={handleCopy}
                  title="Copiar prompt"
                >
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} className="text-ink" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  )
}
