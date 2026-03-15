import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const highlights = [
  'Enterprise application development',
  'Agile, iterative delivery process',
  'Cloud-first architecture mindset',
  'Dedicated post-launch support',
  'Security & compliance by default',
  'AI & automation integration',
];

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="glow-orb glow-violet" style={{ width: '50vw', height: '50vw', top: '0', left: '-15%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">Who We Are</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Driven by an{' '}
              <span className="gradient-text">Experienced</span>{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Team.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              HLT Solutions is built on a foundation of technical excellence and a passion for innovation.
              Our team of industry veterans and creative minds work together to architect digital futures
              for businesses across every vertical.
            </p>

            {/* Feature list */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Check size={11} color="#00d4ff" />
                  </div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Glass card cluster */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            {/* Main quote card */}
            <div className="glass-strong" style={{ padding: '2.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00d4ff" color="#00d4ff" />)}
              </div>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                "We don't just build software — we architect the future of digital interaction."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(139,92,246,0.3))',
                  border: '1px solid rgba(0,212,255,0.2)',
                }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>HLT Leadership</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Founding Team</div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { val: '10+', label: 'Years Experience', color: '#00d4ff' },
                { val: '50+', label: 'Projects Delivered', color: '#8b5cf6' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, borderColor: s.color + '40' }}
                  className="stat-card"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: s.color }}>
                    {s.val}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.08em', marginTop: '0.25rem' }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
