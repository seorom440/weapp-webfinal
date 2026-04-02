'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es' | 'ca'

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': "Let's Talk",

    // Hero
    'hero.badge': 'AI-Native Digital Product Studio',
    'hero.title.1': 'We build ',
    'hero.title.highlight': 'AI products.',
    'hero.title.2': 'From idea to production.',
    'hero.desc':
      'We are not a traditional agency. We are intelligent solution builders combining software engineering, applied AI, and business system design.',
    'hero.cta.primary': 'Start a Project',
    'hero.cta.secondary': 'View Our Work',

    // About
    'about.badge': 'Built differently.',
    'about.title':
      'Our approach combines deep technical expertise with a relentless focus on business outcomes.',
    'about.pillar.1.title': 'AI-Native DNA',
    'about.pillar.1.desc':
      'We are not a traditional agency adding AI on top. We build intelligent systems from the ground up.',
    'about.pillar.2.title': 'Business First',
    'about.pillar.2.desc':
      'We understand your business processes first, then apply the right technology to solve real bottlenecks.',
    'about.pillar.3.title': 'End-to-End Execution',
    'about.pillar.3.desc':
      'From strategic consulting to deploying high-performance web apps, native apps, and autonomous agents.',
    'about.pillar.4.title': 'European Vision',
    'about.pillar.4.desc':
      'Based in Barcelona, we build with a deep understanding of the European regulatory context (GDPR).',
    'about.visual.idea': 'Idea',
    'about.visual.build': 'Build',
    'about.visual.prod': 'Production',

    // Services
    'services.title': 'Capabilities',
    'services.desc':
      'We transform artificial intelligence into product. From the initial idea to the application in production.',
    'services.1.title': 'AI Strategy & Consulting',
    'services.1.desc': 'Process auditing and roadmap design for AI implementation.',
    'services.2.title': 'Web Apps & Platforms',
    'services.2.desc': 'Custom web applications with integrated AI (dashboards, portals, SaaS).',
    'services.3.title': 'AI Agents',
    'services.3.desc':
      'Autonomous agents automating complex tasks: analysis, generation, customer support.',
    'services.4.title': 'Automations & Workflows',
    'services.4.desc': 'Integrating existing systems with AI (CRMs, ERPs, external APIs).',
    'services.5.title': 'Native Apps',
    'services.5.desc': 'iOS and Android applications. From design to store publication.',
    'services.6.title': 'Premium Corporate Webs',
    'services.6.desc':
      'High visual quality websites with advanced animations and editorial design.',

    // Portfolio
    'portfolio.title': 'Our Products',
    'portfolio.desc':
      'These projects are our living portfolio. They are not clients: they are products that WEAPP builds and operates to prove our capabilities.',
    'portfolio.viewAll': 'View all projects',
    'portfolio.target': 'Target Audience:',
    'portfolio.1.title': 'Muebly',
    'portfolio.1.cat': 'Native App (iOS + Android)',
    'portfolio.1.desc':
      'Generative interior design app with AI. Users describe or photograph a space, and the AI generates photorealistic interior design proposals with furniture and palette selections.',
    'portfolio.1.target': 'Design studios, real estate developers, premium individuals.',
    'portfolio.2.title': 'FamilyOS',
    'portfolio.2.cat': 'Web Platform & AI Agent',
    'portfolio.2.desc':
      'Investment intelligence platform for family offices. An agent that monitors markets, detects undervalued assets, generates automated due diligence reports, and proposes investment theses.',
    'portfolio.2.target': 'Family offices, wealth managers, sophisticated private investors.',

    // AIShowcase
    'showcase.title.1': 'Model Agnostic. ',
    'showcase.title.highlight': 'Result Oriented.',
    'showcase.desc':
      'We work with the most advanced AI models on the market, selecting the right intelligence engine for your specific business case.',

    // CTA
    'cta.title.1': 'Have a project? ',
    'cta.title.highlight': 'Tell us about it.',
    'cta.desc':
      "Whether you need an AI strategy, a custom web app, or an autonomous agent, we're ready to build it.",
    'cta.primary': 'Contact Us',
    'cta.secondary': 'Schedule a Call',

    // Footer
    'footer.desc':
      'AI-native digital product studio. We turn artificial intelligence into production-ready products.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.services.1': 'AI Strategy',
    'footer.services.2': 'Web Apps',
    'footer.services.3': 'AI Agents',
    'footer.services.4': 'Native Apps',
    'footer.company.1': 'About Us',
    'footer.company.2': 'Our Products',
    'footer.company.3': 'Contact',
    'footer.company.4': 'Careers',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.gdpr': 'GDPR',

    // Blog
    'blog.title.1': 'Insights & ',
    'blog.title.highlight': 'News',
    'blog.desc':
      'Stay updated with the latest trends in AI, autonomous agents, audiovisual tech, and AI-native development.',
    'blog.back': 'Back to Blog',
    'blog.notfound': 'Post not found',
  },
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Hablemos',

    // Hero
    'hero.badge': 'Estudio de Productos Digitales Nativos de IA',
    'hero.title.1': 'Construimos ',
    'hero.title.highlight': 'productos de IA.',
    'hero.title.2': 'De la idea a producción.',
    'hero.desc':
      'No somos una agencia tradicional. Somos constructores de soluciones inteligentes que combinan ingeniería de software, IA aplicada y diseño de sistemas empresariales.',
    'hero.cta.primary': 'Iniciar un Proyecto',
    'hero.cta.secondary': 'Ver Nuestro Trabajo',

    // About
    'about.badge': 'Construidos de manera diferente.',
    'about.title':
      'Nuestro enfoque combina una profunda experiencia técnica con un enfoque implacable en los resultados comerciales.',
    'about.pillar.1.title': 'ADN Nativo de IA',
    'about.pillar.1.desc':
      'No somos una agencia tradicional que añade IA por encima. Construimos sistemas inteligentes desde cero.',
    'about.pillar.2.title': 'Primero el Negocio',
    'about.pillar.2.desc':
      'Primero entendemos sus procesos de negocio, luego aplicamos la tecnología adecuada para resolver cuellos de botella reales.',
    'about.pillar.3.title': 'Ejecución de Principio a Fin',
    'about.pillar.3.desc':
      'Desde consultoría estratégica hasta el despliegue de aplicaciones web de alto rendimiento, aplicaciones nativas y agentes autónomos.',
    'about.pillar.4.title': 'Visión Europea',
    'about.pillar.4.desc':
      'Con sede en Barcelona, construimos con un profundo conocimiento del contexto regulatorio europeo (RGPD).',
    'about.visual.idea': 'Idea',
    'about.visual.build': 'Construir',
    'about.visual.prod': 'Producción',

    // Services
    'services.title': 'Capacidades',
    'services.desc':
      'Transformamos la inteligencia artificial en producto. Desde la idea inicial hasta la aplicación en producción.',
    'services.1.title': 'Estrategia de IA y Consultoría',
    'services.1.desc': 'Auditoría de procesos y diseño de hoja de ruta para la implementación de IA.',
    'services.2.title': 'Web Apps y Plataformas',
    'services.2.desc': 'Aplicaciones web a medida con IA integrada (dashboards, portales, SaaS).',
    'services.3.title': 'Agentes de IA',
    'services.3.desc':
      'Agentes autónomos que automatizan tareas complejas: análisis, generación, atención al cliente.',
    'services.4.title': 'Automatizaciones y Workflows',
    'services.4.desc': 'Integración de sistemas existentes con IA (CRMs, ERPs, APIs externas).',
    'services.5.title': 'Apps Nativas',
    'services.5.desc': 'Aplicaciones iOS y Android. Desde el diseño hasta la publicación en tiendas.',
    'services.6.title': 'Webs Corporativas Premium',
    'services.6.desc':
      'Sitios web de alta calidad visual con animaciones avanzadas y diseño editorial.',

    // Portfolio
    'portfolio.title': 'Nuestros Productos',
    'portfolio.desc':
      'Estos proyectos son nuestro portafolio vivo. No son clientes: son productos que WEAPP construye y opera para demostrar nuestras capacidades.',
    'portfolio.viewAll': 'Ver todos los proyectos',
    'portfolio.target': 'Público Objetivo:',
    'portfolio.1.title': 'Muebly',
    'portfolio.1.cat': 'App Nativa (iOS + Android)',
    'portfolio.1.desc':
      'App de diseño de interiores generativo con IA. Los usuarios describen o fotografían un espacio, y la IA genera propuestas de diseño de interiores fotorrealistas con selección de muebles y paleta.',
    'portfolio.1.target': 'Estudios de diseño, promotoras inmobiliarias, particulares premium.',
    'portfolio.2.title': 'FamilyOS',
    'portfolio.2.cat': 'Plataforma Web y Agente de IA',
    'portfolio.2.desc':
      'Plataforma de inteligencia de inversión para family offices. Un agente que monitorea mercados, detecta activos infravalorados, genera informes de due diligence automatizados y propone tesis de inversión.',
    'portfolio.2.target':
      'Family offices, gestores de patrimonio, inversores privados sofisticados.',

    // AIShowcase
    'showcase.title.1': 'Agnósticos del Modelo. ',
    'showcase.title.highlight': 'Orientados a Resultados.',
    'showcase.desc':
      'Trabajamos con los modelos de IA más avanzados del mercado, seleccionando el motor de inteligencia adecuado para su caso de negocio específico.',

    // CTA
    'cta.title.1': '¿Tienes un proyecto? ',
    'cta.title.highlight': 'Cuéntanoslo.',
    'cta.desc':
      'Ya sea que necesites una estrategia de IA, una aplicación web a medida o un agente autónomo, estamos listos para construirlo.',
    'cta.primary': 'Contáctanos',
    'cta.secondary': 'Agendar una Llamada',

    // Footer
    'footer.desc':
      'Estudio de productos digitales nativos de IA. Transformamos la inteligencia artificial en productos listos para producción.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.services.1': 'Estrategia de IA',
    'footer.services.2': 'Web Apps',
    'footer.services.3': 'Agentes de IA',
    'footer.services.4': 'Apps Nativas',
    'footer.company.1': 'Nosotros',
    'footer.company.2': 'Nuestros Productos',
    'footer.company.3': 'Contacto',
    'footer.company.4': 'Empleo',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.gdpr': 'RGPD',

    // Blog
    'blog.title.1': 'Insights & ',
    'blog.title.highlight': 'Noticias',
    'blog.desc':
      'Mantente al día con las últimas tendencias en IA, agentes autónomos, tecnología audiovisual y desarrollo nativo de IA.',
    'blog.back': 'Volver al Blog',
    'blog.notfound': 'Artículo no encontrado',
  },
  ca: {
    // Navbar
    'nav.services': 'Serveis',
    'nav.projects': 'Projectes',
    'nav.about': 'Nosaltres',
    'nav.contact': 'Parlem',

    // Hero
    'hero.badge': "Estudi de Productes Digitals Nadius d'IA",
    'hero.title.1': 'Construïm ',
    'hero.title.highlight': "productes d'IA.",
    'hero.title.2': 'De la idea a producció.',
    'hero.desc':
      "No som una agència tradicional. Som constructors de solucions intel·ligents que combinen enginyeria de programari, IA aplicada i disseny de sistemes empresarials.",
    'hero.cta.primary': 'Iniciar un Projecte',
    'hero.cta.secondary': 'Veure el Nostre Treball',

    // About
    'about.badge': 'Construïts de manera diferent.',
    'about.title':
      'El nostre enfocament combina una profunda experiència tècnica amb un enfocament implacable en els resultats comercials.',
    'about.pillar.1.title': "ADN Nadiu d'IA",
    'about.pillar.1.desc':
      "No som una agència tradicional que afegeix IA per sobre. Construïm sistemes intel·ligents des de zero.",
    'about.pillar.2.title': 'Primer el Negoci',
    'about.pillar.2.desc':
      "Primer entenem els vostres processos de negoci, després apliquem la tecnologia adequada per resoldre colls d'ampolla reals.",
    'about.pillar.3.title': 'Execució de Principi a Fi',
    'about.pillar.3.desc':
      "Des de consultoria estratègica fins al desplegament d'aplicacions web d'alt rendiment, aplicacions natives i agents autònoms.",
    'about.pillar.4.title': 'Visió Europea',
    'about.pillar.4.desc':
      'Amb seu a Barcelona, construïm amb un profund coneixement del context regulador europeu (RGPD).',
    'about.visual.idea': 'Idea',
    'about.visual.build': 'Construir',
    'about.visual.prod': 'Producció',

    // Services
    'services.title': 'Capacitats',
    'services.desc':
      "Transformem la intel·ligència artificial en producte. Des de la idea inicial fins a l'aplicació en producció.",
    'services.1.title': "Estratègia d'IA i Consultoria",
    'services.1.desc': "Auditoria de processos i disseny de full de ruta per a la implementació d'IA.",
    'services.2.title': 'Web Apps i Plataformes',
    'services.2.desc': 'Aplicacions web a mida amb IA integrada (dashboards, portals, SaaS).',
    'services.3.title': "Agents d'IA",
    'services.3.desc':
      'Agents autònoms que automatitzen tasques complexes: anàlisi, generació, atenció al client.',
    'services.4.title': 'Automatitzacions i Workflows',
    'services.4.desc': "Integració de sistemes existents amb IA (CRMs, ERPs, APIs externes).",
    'services.5.title': 'Apps Natives',
    'services.5.desc':
      'Aplicacions iOS i Android. Des del disseny fins a la publicació en botigues.',
    'services.6.title': 'Webs Corporatives Premium',
    'services.6.desc':
      "Llocs web d'alta qualitat visual amb animacions avançades i disseny editorial.",

    // Portfolio
    'portfolio.title': 'Els Nostres Productes',
    'portfolio.desc':
      'Aquests projectes són el nostre portafoli viu. No són clients: són productes que WEAPP construeix i opera per demostrar les nostres capacitats.',
    'portfolio.viewAll': 'Veure tots els projectes',
    'portfolio.target': 'Públic Objectiu:',
    'portfolio.1.title': 'Muebly',
    'portfolio.1.cat': 'App Nativa (iOS + Android)',
    'portfolio.1.desc':
      "App de disseny d'interiors generatiu amb IA. Els usuaris descriuen o fotografien un espai, i la IA genera propostes de disseny d'interiors fotorrealistes amb selecció de mobles i paleta.",
    'portfolio.1.target': 'Estudis de disseny, promotores immobiliàries, particulars premium.',
    'portfolio.2.title': 'FamilyOS',
    'portfolio.2.cat': "Plataforma Web i Agent d'IA",
    'portfolio.2.desc':
      "Plataforma d'intel·ligència d'inversió per a family offices. Un agent que monitoritza mercats, detecta actius infravalorats, genera informes de due diligence automatitzats i proposa tesis d'inversió.",
    'portfolio.2.target':
      'Family offices, gestors de patrimoni, inversors privats sofisticats.',

    // AIShowcase
    'showcase.title.1': 'Agnòstics del Model. ',
    'showcase.title.highlight': 'Orientats a Resultats.',
    'showcase.desc':
      "Treballem amb els models d'IA més avançats del mercat, seleccionant el motor d'intel·ligència adequat per al seu cas de negoci específic.",

    // CTA
    'cta.title.1': 'Tens un projecte? ',
    'cta.title.highlight': "Explica'ns-ho.",
    'cta.desc':
      "Ja sigui que necessitis una estratègia d'IA, una aplicació web a mida o un agent autònom, estem preparats per construir-ho.",
    'cta.primary': 'Contacta amb nosaltres',
    'cta.secondary': 'Programar una Trucada',

    // Footer
    'footer.desc':
      "Estudi de productes digitals nadius d'IA. Transformem la intel·ligència artificial en productes llestos per a producció.",
    'footer.services': 'Serveis',
    'footer.company': 'Empresa',
    'footer.services.1': "Estratègia d'IA",
    'footer.services.2': 'Web Apps',
    'footer.services.3': "Agents d'IA",
    'footer.services.4': 'Apps Natives',
    'footer.company.1': 'Nosaltres',
    'footer.company.2': 'Els Nostres Productes',
    'footer.company.3': 'Contacte',
    'footer.company.4': 'Ocupació',
    'footer.privacy': 'Política de Privadesa',
    'footer.legal': 'Avís Legal',
    'footer.gdpr': 'RGPD',

    // Blog
    'blog.title.1': 'Insights & ',
    'blog.title.highlight': 'Notícies',
    'blog.desc':
      "Mantingues-te al dia amb les últimes tendències en IA, agents autònoms, tecnologia audiovisual i desenvolupament natiu d'IA.",
    'blog.back': 'Tornar al Blog',
    'blog.notfound': 'Article no trobat',
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
