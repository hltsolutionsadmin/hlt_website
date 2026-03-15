import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { SplineScene } from './SplineScene';

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Hero = () => {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive scale for the 3D model
  const getResponsiveScale = () => {
    if (windowWidth < 480) return 0.7;
    if (windowWidth < 768) return 0.85;
    if (windowWidth < 1024) return 1.1;
    if (windowWidth < 1440) return 1.35;
    return 1.5; // Larger for ultra-wide
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Centered alignment
        overflow: 'hidden',
        padding: '8rem 0 4rem',
      }}
    >
      {/* Background Spline Scene - Responsive Scale */}
      <div
        className="hero-spline-bg spline-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'auto', // Keep interactive
          transform: `scale(${getResponsiveScale()})`,
          transformOrigin: 'center center',
          filter: 'brightness(1.1)',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)', 
          touchAction: 'pan-y', // Critical fix: Allows vertical scrolling over the 3D scene
        }}
      >
        <SplineScene
          scene="https://prod.spline.design/ygRq4W9G2L04100O/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Glow Orbs - adjusted for centered alignment */}
      <motion.div
        className="glow-orb"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '50vw', height: '50vw', top: '0%', left: '0%', zIndex: 0,
          background: 'radial-gradient(circle, rgba(168, 255, 0, 0.08) 0%, transparent 70%)',
          willChange: 'transform, opacity'
        }}
      />

      <div className="container" style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center', // Centered text
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centered content
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <div className="badge">
            <span className="dot-indicator" />
            New AI Automation Platform
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)', // Rebalanced size
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
            maxWidth: '1000px',
            textShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 100px rgba(168, 255, 0, 0.15)',
          }}
        >
          Unlock the <span className="gradient-text">Power</span>
          <br />
          of AI for Your
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Business.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
            background: 'rgba(6, 6, 4, 0.4)',
            backdropFilter: 'blur(16px)',
            padding: '1.5rem',
            borderRadius: '1.25rem',
            border: '1px solid rgba(168, 255, 0, 0.1)',
          }}
        >
          Our cutting-edge platform automates, analyzes, and accelerates your
          workflows so you can focus on what really matters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', pointerEvents: 'auto' }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Book A Free Call <ArrowRight size={18} />
          </motion.button>
          <motion.button
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            See Our Work <ChevronRight size={18} />
          </motion.button>
        </motion.div>

        {/* Metrics strip - Centered layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          style={{
            marginTop: '4.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            pointerEvents: 'auto'
          }}
        >
          {[
            { val: '10+', label: 'Years Experience' },
            { val: '50+', label: 'Projects Shipped' },
            { val: '99%', label: 'Happy Clients' },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div className="gradient-text-cyan" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800 }}>
                {m.val}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

