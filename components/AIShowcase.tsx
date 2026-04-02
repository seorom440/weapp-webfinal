'use client'

import { motion } from 'motion/react'
import { useLanguage } from '@/context/LanguageContext'

export default function AIShowcase() {
  const { t } = useLanguage()

  const models = [
    { name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
    { name: 'GPT-4o', provider: 'OpenAI' },
    { name: 'Gemini 1.5 Pro', provider: 'Google' },
    { name: 'Llama 3', provider: 'Meta' },
    { name: 'Mistral Large', provider: 'Mistral AI' },
  ]

  return (
    <section className="py-24 bg-surface border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('showcase.title.1')}
              <span className="text-accent">{t('showcase.title.highlight')}</span>
            </h2>
            <p className="text-ink-muted text-lg">{t('showcase.desc')}</p>
          </div>
        </div>

        {/* Marquee/Carousel */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...models, ...models].map((model, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center px-8 py-6 bg-bg border border-white/5 rounded-2xl min-w-[240px]"
              >
                <span className="text-sm text-accent font-semibold mb-1 tracking-wider uppercase">
                  {model.provider}
                </span>
                <span className="text-xl font-display font-medium text-ink">{model.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
