import { motion } from 'motion/react';
import { Lightbulb, LayoutTemplate, Bot, Workflow, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: t('services.1.title'),
      desc: t('services.1.desc'),
    },
    {
      icon: <LayoutTemplate size={28} />,
      title: t('services.2.title'),
      desc: t('services.2.desc'),
    },
    {
      icon: <Bot size={28} />,
      title: t('services.3.title'),
      desc: t('services.3.desc'),
    },
    {
      icon: <Workflow size={28} />,
      title: t('services.4.title'),
      desc: t('services.4.desc'),
    },
    {
      icon: <Smartphone size={28} />,
      title: t('services.5.title'),
      desc: t('services.5.desc'),
    },
    {
      icon: <Globe size={28} />,
      title: t('services.6.title'),
      desc: t('services.6.desc'),
    },
  ];

  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-ink-muted leading-relaxed"
          >
            {t('services.desc')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-bg border border-white/5 overflow-hidden hover:border-accent/50 transition-all duration-300 ${
                idx % 3 === 1 ? 'lg:translate-y-8' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-ink-muted leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
