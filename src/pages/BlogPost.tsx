import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from './Blog';

import { useLanguage } from '../context/LanguageContext';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const post = blogPosts.find(p => p.id === id);

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
              <p className="lead text-xl text-ink font-medium mb-8">
                {post.excerpt}
              </p>
              
              <p>
                En el panorama de rápida evolución de la inteligencia artificial, mantenerse a la vanguardia significa comprender no solo el estado actual de la tecnología, sino hacia dónde se dirige. Este artículo explora los matices de {post.title.toLowerCase()} y sus implicaciones tanto para empresas como para desarrolladores.
              </p>
              
              <h2>Los Conceptos Clave</h2>
              <p>
                En el corazón de esta transformación se encuentra la capacidad de los sistemas modernos de IA para procesar y generar estructuras de datos complejas. Ya sea que hablemos de grandes modelos de lenguaje (LLMs), agentes autónomos o herramientas especializadas de generación audiovisual, la arquitectura subyacente se basa en conjuntos de datos masivos y redes neuronales sofisticadas.
              </p>
              
              <h3>Por Qué Importa Ahora</h3>
              <p>
                El salto de la IA experimental a los sistemas listos para producción está ocurriendo más rápido de lo previsto. Las empresas que integran estas tecnologías en sus flujos de trabajo centrales están viendo ganancias sin precedentes en eficiencia y creatividad. Ya no se trata de si la IA puede realizar una tarea, sino de cuán perfectamente puede integrarse en los ecosistemas existentes.
              </p>
              
              <ul>
                <li><strong>Escalabilidad:</strong> Las soluciones de IA pueden escalar operaciones sin un aumento lineal en los costos.</li>
                <li><strong>Personalización:</strong> Ofrecer experiencias adaptadas a los usuarios a gran escala.</li>
                <li><strong>Automatización:</strong> Manejar tareas repetitivas para liberar la creatividad humana hacia el pensamiento estratégico.</li>
              </ul>
              
              <h2>Mirando Hacia el Futuro</h2>
              <p>
                A medida que miramos hacia el futuro, la integración de la IA se volverá invisible. Será el motor silencioso que impulsará nuestras aplicaciones, nuestros procesos creativos y nuestros marcos de toma de decisiones. La clave del éxito radica en adoptar una arquitectura flexible que pueda evolucionar junto con estos rápidos avances tecnológicos.
              </p>
              
              <blockquote>
                "La mejor manera de predecir el futuro es inventarlo. Y ahora mismo, la IA es la herramienta más poderosa que tenemos para la invención."
              </blockquote>
              
              <p>
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
