import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(2, 4, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.08)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={logo} 
            alt="HLT Solutions" 
            style={{ 
              height: '42px', 
              width: 'auto',
              display: 'block'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '1.1rem', 
              letterSpacing: '-0.01em',
              color: 'white'
            }}>
              HLT SOLUTIONS
            </span>
            <span style={{ 
              fontSize: '0.6rem', 
              color: 'var(--accent)', 
              letterSpacing: '0.15em',
              opacity: 0.8,
              fontWeight: 600,
              textTransform: 'uppercase'
            }}>
              Hi-Tech IT Services
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="nav-link"
              whileHover={{ y: -1 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* CTA + Mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem', display: 'flex' }}
          >
            Get Started
          </motion.button>
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'white', display: 'none'
            }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              overflow: 'hidden',
              background: 'rgba(2, 6, 16, 0.96)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(0, 212, 255, 0.1)',
            }}
          >
            <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  style={{ color: 'var(--text-secondary)', fontWeight: 500, textDecoration: 'none', fontSize: '1.1rem' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
