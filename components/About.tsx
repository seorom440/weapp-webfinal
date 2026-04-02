'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Brain, Terminal, Rocket, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const DNAVisual = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex gap-3 md:gap-4">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="relative w-3 h-40 md:h-56 flex items-center justify-center">
          <motion.div
            animate={{ y: [-50, 50, -50], scale: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] z-10"
          />
          <motion.div
            animate={{ y: [50, -50, 50], scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] z-0"
          />
          <motion.div
            animate={{ height: ['100px', '10px', '100px'] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
            className="w-[1px] bg-white/10"
          />
        </div>
      ))}
    </div>
  </div>
)

const CodeVisual = () => {
  const codeLines = [
    { text: '// Analyzing business bottlenecks...', color: 'text-gray-500' },
    { text: 'const workflow = await analyzeSystem();', color: 'text-gray-300' },
    { text: 'if (workflow.hasInefficiencies) {', color: 'text-gray-300' },
    { text: '  deployAIModel({', color: 'text-accent' },
    { text: "    target: workflow.bottleneckId,", color: 'text-gray-300' },
    { text: "    optimization: 'maximum'", color: 'text-gray-300' },
    { text: '  });', color: 'text-accent' },
    { text: '}', color: 'text-gray-300' },
    { text: '> System optimized successfully. 🚀', color: 'text-emerald-400 mt-4' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-lg bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-ink-muted font-mono">business_logic.ts</span>
        </div>
        <div className="p-5 md:p-6 font-mono text-xs md:text-sm flex flex-col gap-2">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.3 + 0.2 }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-accent mt-2"
          />
        </div>
      </div>
    </div>
  )
}

const ExecutionVisual = ({ t }: { t: (key: string) => string }) => (
  <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
    <div className="relative w-full max-w-lg">
      <div className="absolute left-[16.66%] right-[16.66%] h-1 bg-white/10 top-6 md:top-8" />
      <motion.div
        className="absolute left-[16.66%] h-1 bg-accent top-6 md:top-8 origin-left"
        style={{ width: '66.66%' }}
        animate={{ scaleX: [0, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 grid grid-cols-3 w-full">
        {[
          { name: t('about.visual.idea'), icon: Brain },
          { name: t('about.visual.build'), icon: Terminal },
          { name: t('about.visual.prod'), icon: Rocket },
        ].map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.name} className="flex flex-col items-center gap-3 md:gap-4">
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center relative z-10"
                animate={{
                  borderColor: [
                    'rgba(255,255,255,0.1)',
                    'rgba(16,185,129,1)',
                    'rgba(255,255,255,0.1)',
                  ],
                  boxShadow: [
                    '0 0 0 rgba(16,185,129,0)',
                    '0 0 30px rgba(16,185,129,0.4)',
                    '0 0 0 rgba(16,185,129,0)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: 'easeInOut' }}
              >
                <Icon className="text-white w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <span className="font-display font-semibold text-[10px] md:text-xs tracking-widest uppercase text-gray-400 bg-[#050505] px-2 text-center">
                {step.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

const EuropeVisual = () => (
  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
    <div className="relative w-full h-full max-w-md max-h-[300px] md:max-h-[400px]">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/b/b8/Europe_blank_laea_location_map.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1) brightness(2)',
        }}
      />
      {[
        { name: 'Barcelona', x: '35%', y: '75%', active: true },
        { name: 'Paris', x: '42%', y: '60%' },
        { name: 'Berlin', x: '55%', y: '50%' },
        { name: 'London', x: '38%', y: '52%' },
        { name: 'Amsterdam', x: '45%', y: '50%' },
      ].map((city, i) => (
        <div
          key={city.name}
          className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: city.x, top: city.y }}
        >
          <motion.div
            animate={
              city.active
                ? { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }
                : { opacity: [0.3, 0.6, 0.3] }
            }
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              city.active ? 'bg-accent shadow-[0_0_25px_rgba(16,185,129,1)]' : 'bg-white'
            }`}
          />
          <span
            className={`text-[10px] md:text-xs font-mono font-medium bg-[#050505]/80 px-2 py-1 rounded ${
              city.active ? 'text-accent' : 'text-gray-500'
            }`}
          >
            {city.name}
          </span>
        </div>
      ))}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.line
          x1="35%"
          y1="75%"
          x2="42%"
          y2="60%"
          stroke="rgba(16,185,129,0.5)"
          strokeWidth="2"
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [24, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <line x1="42%" y1="60%" x2="55%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="42%" y1="60%" x2="38%" y2="52%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="38%" y1="52%" x2="45%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="45%" y1="50%" x2="55%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  </div>
)

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguage()

  const features = [
    {
      id: 'dna',
      title: t('about.pillar.1.title'),
      description: t('about.pillar.1.desc'),
      icon: Brain,
      visual: <DNAVisual />,
    },
    {
      id: 'business',
      title: t('about.pillar.2.title'),
      description: t('about.pillar.2.desc'),
      icon: Terminal,
      visual: <CodeVisual />,
    },
    {
      id: 'execution',
      title: t('about.pillar.3.title'),
      description: t('about.pillar.3.desc'),
      icon: Rocket,
      visual: <ExecutionVisual t={t} />,
    },
    {
      id: 'europe',
      title: t('about.pillar.4.title'),
      description: t('about.pillar.4.desc'),
      icon: Globe,
      visual: <EuropeVisual />,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section id="about" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('about.badge')}</h2>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto">{t('about.title')}</p>
        </div>

        {/* Unified Compact Carousel Card */}
        <div className="relative w-full h-[650px] md:h-[600px] rounded-[2.5rem] bg-[#050505] border border-white/10 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col"
            >
              <div className="pt-12 md:pt-16 px-6 md:px-12 flex flex-col items-center text-center z-10">
                <div className="p-4 rounded-2xl bg-white/5 text-accent mb-6 border border-white/5">
                  {(() => {
                    const Icon = features[activeIndex].icon
                    return <Icon size={32} />
                  })()}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                  {features[activeIndex].title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                  {features[activeIndex].description}
                </p>
              </div>
              <div className="flex-1 relative w-full overflow-hidden mt-4 md:mt-8">
                {features[activeIndex].visual}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-[#0a0a0a]/80 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-8 h-2 bg-accent'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
