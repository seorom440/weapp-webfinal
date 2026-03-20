import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export const blogPosts = [
  {
    id: 'agentes-autonomos-ia-2026',
    title: 'Agentes Autónomos de IA: El Futuro de la Automatización Empresarial en 2026',
    excerpt: 'Descubre cómo los agentes de IA están revolucionando los flujos de trabajo, tomando decisiones complejas y superando a los chatbots tradicionales.',
    category: 'Agentes IA',
    date: '15 Mar, 2026',
    readTime: '5 min lectura',
    image: 'https://picsum.photos/seed/ai-agents/800/600?blur=2'
  },
  {
    id: 'openclaw-modelo-open-source',
    title: 'OpenClaw: El Modelo Open Source que Desafía a GPT-4 y Claude',
    excerpt: 'Análisis profundo de OpenClaw, el nuevo modelo de lenguaje de código abierto que está democratizando el acceso a la inteligencia artificial avanzada.',
    category: 'Modelos',
    date: '12 Mar, 2026',
    readTime: '7 min lectura',
    image: 'https://picsum.photos/seed/openclaw/800/600?blur=2'
  },
  {
    id: 'weavy-ai-produccion-audiovisual',
    title: 'Weavy AI: Transformando la Producción Audiovisual con Inteligencia Artificial',
    excerpt: 'Cómo Weavy AI está automatizando la edición de video, mezcla de sonido y generación de efectos visuales para creadores de contenido.',
    category: 'IA Audiovisual',
    date: '10 Mar, 2026',
    readTime: '6 min lectura',
    image: 'https://picsum.photos/seed/weavy/800/600?blur=2'
  },
  {
    id: 'desarrollo-apps-nativas-ia',
    title: 'Cómo Construir Apps Nativas de IA: Arquitectura y Mejores Prácticas',
    excerpt: 'Por qué integrar una API ya no es suficiente. Guía para desarrollar aplicaciones verdaderamente "AI-First" desde cero.',
    category: 'Desarrollo',
    date: '08 Mar, 2026',
    readTime: '8 min lectura',
    image: 'https://picsum.photos/seed/apps/800/600?blur=2'
  },
  {
    id: 'seo-para-gemini-chatgpt-perplexity',
    title: 'SEO para IA: Cómo Optimizar tu Contenido para Gemini, ChatGPT y Perplexity',
    excerpt: 'El SEO tradicional ha muerto. Aprende las estrategias clave para que tu marca sea recomendada por los motores de búsqueda basados en LLMs.',
    category: 'Marketing',
    date: '05 Mar, 2026',
    readTime: '10 min lectura',
    image: 'https://picsum.photos/seed/seo/800/600?blur=2'
  },
  {
    id: 'novedades-gemini-3-pro',
    title: 'Gemini 3.1 Pro: Características, Rendimiento y Casos de Uso',
    excerpt: 'Todo lo que necesitas saber sobre la última actualización de Gemini de Google, sus capacidades multimodales y mejoras en razonamiento lógico.',
    category: 'Modelos',
    date: '02 Mar, 2026',
    readTime: '6 min lectura',
    image: 'https://picsum.photos/seed/gemini/800/600?blur=2'
  },
  {
    id: 'chatgpt-enterprise-adopcion-empresas',
    title: 'ChatGPT Enterprise: Tendencias de Adopción en Empresas Europeas',
    excerpt: 'Cómo las corporaciones están integrando ChatGPT de forma segura cumpliendo con el RGPD y las normativas de privacidad de datos.',
    category: 'Negocios',
    date: '28 Feb, 2026',
    readTime: '5 min lectura',
    image: 'https://picsum.photos/seed/chatgpt/800/600?blur=2'
  },
  {
    id: 'sistemas-multi-agente-ia',
    title: 'Sistemas Multi-Agente: Cuando los Modelos de IA Colaboran entre Sí',
    excerpt: 'El comportamiento emergente y la resolución de problemas complejos cuando múltiples agentes especializados trabajan en equipo.',
    category: 'Agentes IA',
    date: '25 Feb, 2026',
    readTime: '9 min lectura',
    image: 'https://picsum.photos/seed/multiagent/800/600?blur=2'
  },
  {
    id: 'generacion-video-ia-sora-veo',
    title: 'El Estado de la Generación de Video con IA: Sora, Veo y Más Allá',
    excerpt: 'Cómo los modelos text-to-video están disrumpiendo la industria del cine, la publicidad y la creación de contenido en redes sociales.',
    category: 'IA Audiovisual',
    date: '22 Feb, 2026',
    readTime: '7 min lectura',
    image: 'https://picsum.photos/seed/video/800/600?blur=2'
  },
  {
    id: 'rag-vs-finetuning-guia',
    title: 'RAG vs. Fine-Tuning: ¿Cuál Elegir para tu Proyecto de IA?',
    excerpt: 'Guía técnica para decidir la mejor estrategia al inyectar conocimiento personalizado y datos privados en modelos de lenguaje.',
    category: 'Desarrollo',
    date: '19 Feb, 2026',
    readTime: '8 min lectura',
    image: 'https://picsum.photos/seed/rag/800/600?blur=2'
  },
  {
    id: 'ia-en-salud-diagnostico',
    title: 'IA en Salud: El Próximo Horizonte en Diagnóstico Médico',
    excerpt: 'Cómo los modelos multimodales están asistiendo a los médicos en la detección temprana de enfermedades con precisión sin precedentes.',
    category: 'Industria',
    date: '15 Feb, 2026',
    readTime: '6 min lectura',
    image: 'https://picsum.photos/seed/health/800/600?blur=2'
  },
  {
    id: 'edge-ai-llms-smartphones',
    title: 'Edge AI: Ejecutando LLMs Localmente en Smartphones',
    excerpt: 'Los avances en cuantización que permiten correr modelos potentes directamente en el dispositivo, sin depender de la nube.',
    category: 'Hardware',
    date: '12 Feb, 2026',
    readTime: '5 min lectura',
    image: 'https://picsum.photos/seed/edge/800/600?blur=2'
  },
  {
    id: 'ley-ia-europa-startups',
    title: 'Navegando la Ley de IA de la UE (AI Act): Guía para Startups',
    excerpt: 'Qué significan las nuevas regulaciones europeas para las empresas tecnológicas y cómo asegurar el cumplimiento normativo.',
    category: 'Legal',
    date: '09 Feb, 2026',
    readTime: '7 min lectura',
    image: 'https://picsum.photos/seed/law/800/600?blur=2'
  },
  {
    id: 'datos-sinteticos-entrenamiento-ia',
    title: 'Datos Sintéticos: Resolviendo el Cuello de Botella del Entrenamiento',
    excerpt: 'Cuando los datos reales se agotan, la IA entrena a la IA. Beneficios y riesgos de utilizar datasets generados artificialmente.',
    category: 'Datos',
    date: '05 Feb, 2026',
    readTime: '8 min lectura',
    image: 'https://picsum.photos/seed/data/800/600?blur=2'
  },
  {
    id: 'ia-produccion-musical',
    title: 'IA en el Estudio: El Futuro de la Producción Musical',
    excerpt: 'Cómo los productores están utilizando herramientas de IA para generar samples, mezclar pistas y masterizar audio profesional.',
    category: 'IA Audiovisual',
    date: '02 Feb, 2026',
    readTime: '6 min lectura',
    image: 'https://picsum.photos/seed/music/800/600?blur=2'
  },
  {
    id: 'evolucion-prompt-engineering',
    title: 'La Evolución del Prompt Engineering en 2026',
    excerpt: 'Por qué el diseño de prompts ha pasado de ser "palabras mágicas" a una disciplina estructurada de ingeniería de sistemas.',
    category: 'Desarrollo',
    date: '29 Ene, 2026',
    readTime: '5 min lectura',
    image: 'https://picsum.photos/seed/prompt/800/600?blur=2'
  },
  {
    id: 'ia-ciberseguridad-defensa',
    title: 'IA en Ciberseguridad: La Nueva Carrera Armamentística',
    excerpt: 'Cómo la inteligencia artificial se utiliza tanto para lanzar ataques sofisticados como para defender infraestructuras críticas.',
    category: 'Seguridad',
    date: '25 Ene, 2026',
    readTime: '7 min lectura',
    image: 'https://picsum.photos/seed/cyber/800/600?blur=2'
  },
  {
    id: 'computacion-espacial-ia-generativa',
    title: 'Computación Espacial y la IA Generativa',
    excerpt: 'La intersección entre visores de realidad mixta (AR/VR) y la generación de entornos 3D en tiempo real mediante IA.',
    category: 'Futuro',
    date: '20 Ene, 2026',
    readTime: '6 min lectura',
    image: 'https://picsum.photos/seed/spatial/800/600?blur=2'
  },
  {
    id: 'ia-atencion-al-cliente-voz',
    title: '¿El Fin del Call Center? Agentes de Voz con IA',
    excerpt: 'Cómo los agentes conversacionales nativos de voz están proporcionando atención al cliente hiperrealista a gran escala.',
    category: 'Negocios',
    date: '15 Ene, 2026',
    readTime: '5 min lectura',
    image: 'https://picsum.photos/seed/support/800/600?blur=2'
  },
  {
    id: 'machine-learning-cuantico',
    title: 'Machine Learning Cuántico: ¿Realidad o Ficción?',
    excerpt: 'Separando el hype de la realidad en la carrera por combinar la computación cuántica con la inteligencia artificial.',
    category: 'Investigación',
    date: '10 Ene, 2026',
    readTime: '9 min lectura',
    image: 'https://picsum.photos/seed/quantum/800/600?blur=2'
  }
];

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
      <div className="noise-bg" />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              {t('blog.title.1')}<span className="text-accent">{t('blog.title.highlight')}</span>
            </h1>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">
              {t('blog.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors group"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-accent border border-white/10">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-ink-muted mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-ink-muted text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
