import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Muebly',
      category: 'Native App (iOS + Android)',
      desc: 'Generative interior design app with AI. Users describe or photograph a space, and the AI generates photorealistic interior design proposals with furniture and palette selections.',
      target: 'Design studios, real estate developers, premium individuals.',
      color: 'from-emerald-500/20 to-transparent',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'FamilyOS',
      category: 'Web Platform & AI Agent',
      desc: 'Investment intelligence platform for family offices. An agent that monitors markets, detects undervalued assets, generates automated due diligence reports, and proposes investment theses.',
      target: 'Family offices, wealth managers, sophisticated private investors.',
      color: 'from-blue-500/20 to-transparent',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our Products
            </h2>
            <p className="text-xl text-ink-muted leading-relaxed">
              These projects are our living portfolio. They are not clients: they are products that WEAPP builds and operates to prove our capabilities.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors group"
          >
            View all projects
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-surface border border-white/5 ${
                idx === 1 ? 'lg:mt-24' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} mix-blend-overlay z-10`} />
                <div className="absolute inset-0 bg-bg/40 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-2 rounded-full bg-bg/80 backdrop-blur-md text-sm font-semibold text-accent border border-white/10">
                      {project.category}
                    </span>
                    <button className="w-12 h-12 rounded-full bg-bg/80 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-bg transition-colors">
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-display font-bold mb-4">{project.title}</h3>
                    <p className="text-ink-muted text-lg max-w-md leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Target Audience Footer */}
              <div className="p-8 border-t border-white/5 bg-surface">
                <p className="text-sm text-ink-muted">
                  <strong className="text-ink">Target Audience:</strong> {project.target}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
