import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import logo from './assets/logo.png';

// Tech Marquee
const techTags = ['React', 'Node.js', 'MongoDB', 'AWS', 'AI / ML', 'TypeScript', 'Docker', 'Next.js', 'Python', 'Redis', 'GraphQL', 'Kubernetes'];

const Marquee = () => (
  <div className="marquee-wrapper">
    <div className="marquee-track">
      {[...techTags, ...techTags].map((tag, i) => (
        <span key={i} style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.25rem',
          color: 'var(--text-primary)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          textShadow: '0 0 15px rgba(168, 255, 0, 0.25)',
        }}>
          <span className="dot-indicator" style={{ width: 8, height: 8 }} />
          {tag}
        </span>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        {/* Animated BG */}
        <div className="animated-bg" />
        <div className="grid-overlay" />

        <Navbar />

        <main>
          <Hero />

          {/* Marquee separator */}
          <Marquee />

          <Services />

          <div className="divider" />

          <Projects />

          <div className="divider" />

          <About />

          <div className="divider" />

          <Contact />
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid rgba(0, 212, 255, 0.06)',
          padding: '3rem 0',
          background: 'rgba(2, 4, 8, 0.8)',
          backdropFilter: 'blur(12px)',
        }}>
          <div className="container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img 
                src={logo} 
                alt="HLT Solutions Logo" 
                style={{ 
                  height: '32px', 
                  width: 'auto',
                  display: 'block'
                }} 
              />
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 700, 
                fontSize: '1.05rem',
                color: 'white'
              }}>
                HLT SOLUTIONS
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              © 2026 HLT Solutions · All rights reserved.
            </p>

            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ color: 'var(--lime)', y: -2 }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s ease', display: 'block' }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
