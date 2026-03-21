import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, Shield, Database, Share2 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'Custom enterprise-grade applications engineered with precision for scale, speed, and resilience.',
    colorClass: 'icon-box-cyan',
    color: '#00d4ff',
    tag: '01',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    desc: 'Architecting scalable cloud infrastructure and seamless migration pipelines for modern business.',
    colorClass: 'icon-box-blue',
    color: '#3b82f6',
    tag: '02',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'High-performance iOS and Android applications crafted for exceptional user experience and engagement.',
    colorClass: 'icon-box-violet',
    color: '#8b5cf6',
    tag: '03',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    desc: 'Zero-trust security frameworks that protect your digital assets, users, and data at every layer.',
    colorClass: 'icon-box-cyan',
    color: '#00d4ff',
    tag: '04',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    desc: 'Real-time insights, dashboards, and data pipelines that transform raw data into strategic advantage.',
    colorClass: 'icon-box-teal',
    color: '#14b8a6',
    tag: '05',
  },
  {
    icon: Share2,
    title: 'Digital Transformation',
    desc: 'End-to-end modernization of business processes through strategic, outcome-driven IT implementation.',
    colorClass: 'icon-box-violet',
    color: '#8b5cf6',
    tag: '06',
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="glass-card"
    style={{ padding: '2rem', cursor: 'default' }}
  >
    {/* Tag + Icon row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
      <div className={`icon-box ${service.colorClass}`} style={{ width: 52, height: 52, borderRadius: 12 }}>
        <service.icon size={26} color={service.color} />
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>
        {service.tag}
      </span>
    </div>

    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
      {service.title}
    </h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.75 }}>
      {service.desc}
    </p>

    {/* Bottom line accent */}
    <div style={{
      marginTop: '1.75rem',
      height: '2px',
      borderRadius: 2,
      background: `linear-gradient(to right, ${service.color}40, transparent)`,
    }} />
  </motion.div>
);

const Services = () => {
  return (
    <section id="solutions" className="section" style={{ position: 'relative' }}>
      <div className="glow-orb glow-blue" style={{ width: '50vw', height: '50vw', top: '0', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            What We Do
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Future-Ready <span className="gradient-text">Solutions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto' }}>
            Cutting-edge technology services built for tomorrow's challenges, delivered today.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
