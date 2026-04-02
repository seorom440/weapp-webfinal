'use client'

import { motion } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-surface border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-8">
            <Mail size={32} />
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {t('cta.title.1')} <br />
            <span className="text-accent">{t('cta.title.highlight')}</span>
          </h2>

          <p className="text-xl text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('cta.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@weappbcn.com"
              className="w-full sm:w-auto px-8 py-4 bg-ink text-bg rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-colors group"
            >
              {t('cta.primary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-bg/50 backdrop-blur-sm text-ink rounded-full font-semibold text-lg flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              {t('cta.secondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
