import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="glow-orb glow-cyan" style={{ width: '50vw', height: '50vw', top: '10%', right: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Ready to Start Your <span className="gradient-text">Journey?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            Let's talk about how HLT Solutions can transform your business with next-generation technology.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {[
              { icon: Mail, label: 'Email', val: 'info.hlt@Havelifesolutions.onmicrosoft.com ', color: '#00d4ff' },
              { icon: Phone, label: 'Phone', val: '+91 9705047662', color: '#8b5cf6' },
              { icon: MapPin, label: 'Location', val: 'Global Services', color: '#14b8a6' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
              >
                <div className="icon-box" style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: item.color + '12',
                  border: `1px solid ${item.color}25`,
                  boxShadow: `0 0 16px ${item.color}12 inset`,
                }}>
                  <item.icon size={22} color={item.color} />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.val}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-strong"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                  FIRST NAME
                </label>
                <input className="input-glass" placeholder="John" style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                  LAST NAME
                </label>
                <input className="input-glass" placeholder="Doe" style={{ width: '100%' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                EMAIL
              </label>
              <input className="input-glass" type="email" placeholder="john@company.com" style={{ width: '100%' }} />
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
                MESSAGE
              </label>
              <textarea
                className="input-glass"
                placeholder="Tell us about your project..."
                rows={4}
                style={{ width: '100%', resize: 'none', borderRadius: 16 }}
              />
            </div>

            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
