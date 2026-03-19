import { motion } from 'motion/react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-6">
              <span>WEAPP</span>
              <span className="text-accent">BCN</span>
            </a>
            <p className="text-ink-muted max-w-sm leading-relaxed mb-8">
              AI-native digital product studio. We turn artificial intelligence into production-ready products.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/weappbcn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg border border-white/10 flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-ink-muted">
              <li><a href="#services" className="hover:text-ink transition-colors">AI Strategy</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Web Apps</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">AI Agents</a></li>
              <li><a href="#services" className="hover:text-ink transition-colors">Native Apps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-ink-muted">
              <li><a href="#about" className="hover:text-ink transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-ink transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
          <p>© {new Date().getFullYear()} WEAPP BCN S.L. · Barcelona</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ink transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-ink transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
