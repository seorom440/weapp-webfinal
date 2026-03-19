/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIShowcase from './components/AIShowcase';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-bg">
      <div className="noise-bg" />
      <Navbar />
      <main>
        <Hero />
        <AIShowcase />
        <About />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

