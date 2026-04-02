'use client'

import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.projects'), href: '/#projects' },
    { name: t('nav.about'), href: '/#about' },
    { name: 'Blog', href: '/blog' },
  ]

  const languages = [
    { code: 'es', label: 'SPA', flag: '🇪🇸' },
    { code: 'en', label: 'ENG', flag: '🇬🇧' },
    { code: 'ca', label: 'CAT', flag: '🏴' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <span>WEAPP</span>
          <span className="text-accent">BCN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-ink-muted">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-ink transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as 'en' | 'es' | 'ca')}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                  language === lang.code
                    ? 'bg-white/10 text-ink'
                    : 'text-ink-muted hover:text-ink hover:bg-white/5'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <Link
            href="/#contact"
            className="bg-ink text-bg px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-ink-muted hover:text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 py-4 border-y border-white/5 my-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'en' | 'es' | 'ca')
                  setIsMobileMenuOpen(false)
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  language === lang.code ? 'bg-white/10 text-ink' : 'text-ink-muted'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <Link
            href="/#contact"
            className="bg-ink text-bg px-5 py-3 rounded-full text-center font-semibold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.contact')}
          </Link>
        </div>
      )}
    </motion.nav>
  )
}
