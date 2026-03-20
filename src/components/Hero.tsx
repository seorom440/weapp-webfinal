import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Brain, Cpu, Network, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PhoneMockup = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={`relative bg-[#111111] border-[8px] border-[#2a2a2a] rounded-[3rem] shadow-[0_0_80px_rgba(16,185,129,0.25)] overflow-hidden ${className}`}>
    {/* Hardware buttons */}
    <div className="absolute top-24 -left-[8px] w-1 h-12 bg-[#2a2a2a] rounded-l-md"></div>
    <div className="absolute top-40 -left-[8px] w-1 h-12 bg-[#2a2a2a] rounded-l-md"></div>
    <div className="absolute top-32 -right-[8px] w-1 h-16 bg-[#2a2a2a] rounded-r-md"></div>
    {/* Dynamic Island / Notch */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
    {/* Screen */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-[#0a0a0a] to-gray-900 z-0"></div>
    <div className="relative z-10 h-full w-full p-6 pt-16 flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const AICard = ({ icon: Icon, name, color, delay }: { icon: any, name: string, color: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
  >
    <div className={`p-2 rounded-xl bg-white/5 ${color}`}>
      <Icon size={20} />
    </div>
    <span className="font-medium text-sm text-gray-200">{name}</span>
  </motion.div>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-bg">
      {/* Immersive Falling iPhones Background - Clearer and Faster */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
        
        {/* Phone 1 - Foreground Right */}
        <motion.div
          animate={{ y: ["-10%", "10%"], x: ["0%", "-2%"], rotate: [-4, -8] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-[10%] -right-[10%] md:right-[5%] w-[280px] h-[580px] md:w-[320px] md:h-[650px] opacity-100"
        >
          <PhoneMockup>
            <AICard icon={Cpu} name="GPT-4o" color="text-emerald-400" delay={0.2} />
            <AICard icon={Brain} name="Claude 3.5" color="text-amber-400" delay={0.4} />
            <AICard icon={Sparkles} name="Gemini Pro" color="text-blue-400" delay={0.6} />
            <AICard icon={Network} name="Mistral" color="text-orange-400" delay={0.8} />
            <AICard icon={Bot} name="Llama 3" color="text-indigo-400" delay={1.0} />
            
            {/* Decorative elements inside screen */}
            <div className="mt-auto">
              <div className="h-24 rounded-2xl bg-gradient-to-t from-accent/20 to-transparent border border-accent/20 flex items-end p-4">
                <div className="w-full h-2 bg-accent/40 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-accent rounded-full" 
                  />
                </div>
              </div>
            </div>
          </PhoneMockup>
        </motion.div>

        {/* Phone 2 - Background Left */}
        <motion.div
          animate={{ y: ["12%", "-12%"], x: ["0%", "2%"], rotate: [6, 10] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-[20%] -left-[15%] md:left-[5%] w-[260px] h-[540px] md:w-[300px] md:h-[600px] opacity-70 blur-[2px]"
        >
          <PhoneMockup>
            <div className="flex flex-col gap-4 opacity-80">
              <AICard icon={Sparkles} name="Gemini Flash" color="text-blue-400" delay={0.5} />
              <AICard icon={Cpu} name="OpenAI o1" color="text-emerald-400" delay={0.7} />
              <AICard icon={Network} name="Cohere" color="text-purple-400" delay={0.9} />
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </PhoneMockup>
        </motion.div>

        {/* Subtle Gradient Overlay just to ensure text contrast in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_100%)] z-10 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/80 z-10 opacity-40" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md text-sm font-medium text-ink-muted mb-8 shadow-lg"
          >
            <Sparkles size={16} className="text-accent" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[88px] font-display font-bold leading-[1.05] tracking-tight mb-8 drop-shadow-2xl"
          >
            {t('hero.title.1')}<span className="text-accent">{t('hero.title.highlight')}</span>
            <br />
            {t('hero.title.2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-ink-muted max-w-2xl mb-12 leading-relaxed drop-shadow-lg"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-ink text-bg rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-accent transition-colors group shadow-xl"
            >
              {t('hero.cta.primary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-surface/80 backdrop-blur-md text-ink rounded-full font-semibold text-lg flex items-center justify-center hover:bg-white/5 transition-colors shadow-xl"
            >
              {t('hero.cta.secondary')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
