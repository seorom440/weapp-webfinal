'use client'

import { Linkedin, Twitter, Github } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a
              href="/"
              className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-6"
            >
              <span>WEAPP</span>
              <span className="text-accent">BCN</span>
            </a>
            <p className="text-ink-muted max-w-sm leading-relaxed mb-8">{t('footer.desc')}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/weappbcn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4 text-ink-muted">
              <li>
                <a href="/#services" className="hover:text-ink transition-colors">
                  {t('footer.services.1')}
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-ink transition-colors">
                  {t('footer.services.2')}
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-ink transition-colors">
                  {t('footer.services.3')}
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-ink transition-colors">
                  {t('footer.services.4')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 text-ink-muted">
              <li>
                <a href="/#about" className="hover:text-ink transition-colors">
                  {t('footer.company.1')}
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-ink transition-colors">
                  {t('footer.company.2')}
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-ink transition-colors">
                  {t('footer.company.3')}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-ink transition-colors">
                  {t('footer.company.4')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
          <p>© {new Date().getFullYear()} WEAPP BCN S.L. · Barcelona</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              {t('footer.legal')}
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              {t('footer.gdpr')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
