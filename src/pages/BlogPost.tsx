import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag, Terminal, Copy, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from './Blog';

import { useLanguage } from '../context/LanguageContext';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const post = blogPosts.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-bg text-ink flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display font-bold mb-4">{t('blog.notfound')}</h1>
        <Link to="/blog" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> {t('blog.back')}
        </Link>
      </div>
    );
  }

  const promptText = `Actúa como un experto en ${post.category}. Explícame cómo puedo aplicar los principios de "${post.title}" en mi empresa del sector [TU SECTOR] para mejorar la eficiencia en un 30% en los próximos 6 meses. Dame 3 pasos accionables.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
      <div className="noise-bg" />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors mb-8">
              <ArrowLeft size={16} /> {t('blog.back')}
            </Link>

            <div className="flex items-center gap-4 text-sm text-ink-muted mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5 text-accent"><Tag size={14} /> {post.category}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-p:text-ink-muted prose-headings:font-display prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80">
              <p className="lead text-2xl text-ink font-medium mb-10 border-l-4 border-accent pl-6 py-2">
                {post.excerpt}
              </p>
              
              <p className="mb-8">
                🚀 En el panorama de rápida evolución de la inteligencia artificial, mantenerse a la vanguardia significa comprender no solo el estado actual de la tecnología, sino hacia dónde se dirige. Este artículo explora los matices de <strong>{post.title}</strong> y sus implicaciones tanto para empresas como para desarrolladores.
              </p>
              
              <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                <span>🧠</span> Los Conceptos Clave
              </h2>
              <p className="mb-6">
                En el corazón de esta transformación se encuentra la capacidad de los sistemas modernos de IA para procesar y generar estructuras de datos complejas. Ya sea que hablemos de grandes modelos de lenguaje (LLMs), agentes autónomos o herramientas especializadas, la arquitectura subyacente se basa en conjuntos de datos masivos y redes neuronales sofisticadas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="text-lg font-bold text-ink mb-2">Escalabilidad</h4>
                  <p className="text-sm text-ink-muted">Las soluciones de IA pueden escalar operaciones sin un aumento lineal en los costos.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="text-lg font-bold text-ink mb-2">Personalización</h4>
                  <p className="text-sm text-ink-muted">Ofrecer experiencias adaptadas a los usuarios a gran escala y en tiempo real.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="text-lg font-bold text-ink mb-2">Automatización</h4>
                  <p className="text-sm text-ink-muted">Manejar tareas repetitivas para liberar la creatividad humana hacia el pensamiento estratégico.</p>
                </div>
              </div>

              <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                <span>🛠️</span> Aplicación Práctica
              </h2>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 my-8 not-prose">
                <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                  <Terminal size={24} /> Prueba este Prompt
                </h4>
                <p className="text-ink-muted mb-6">
                  Copia y pega este prompt en tu herramienta de IA favorita (Gemini, ChatGPT, Claude) para explorar este concepto:
                </p>
                <div className="bg-bg border border-white/10 rounded-xl p-4 relative group">
                  <code className="text-sm text-ink font-mono block">
                    "{promptText}"
                  </code>
                  <button 
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    onClick={handleCopy}
                    title="Copiar prompt"
                  >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-ink" />}
                  </button>
                </div>
              </div>
              
              <h2 className="text-3xl mt-12 mb-6 flex items-center gap-3">
                <span>🔮</span> Mirando Hacia el Futuro
              </h2>
              <p className="mb-6">
                A medida que miramos hacia el futuro, la integración de la IA se volverá invisible. Será el motor silencioso que impulsará nuestras aplicaciones, nuestros procesos creativos y nuestros marcos de toma de decisiones. La clave del éxito radica en adoptar una arquitectura flexible que pueda evolucionar junto con estos rápidos avances tecnológicos.
              </p>
              
              <blockquote className="border-l-4 border-white/20 pl-6 py-2 my-8 italic text-xl text-ink-muted">
                "La mejor manera de predecir el futuro es inventarlo. Y ahora mismo, la IA es la herramienta más poderosa que tenemos para la invención."
              </blockquote>
              
              <p className="mb-8">
                Mantente atento mientras continuamos explorando las fronteras del desarrollo nativo de IA y la creación de productos digitales.
              </p>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
