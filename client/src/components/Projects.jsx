import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Smartphone, BarChart3, ShieldCheck } from 'lucide-react';

const projects = [
  {
    title: 'Astra Global Commerce',
    client: 'Astra Retail Group',
    category: 'Enterprise E-Commerce',
    deliverables: ['Headless Architecture', 'Global Inventory Sync', 'Custom Payment Gateway'],
    results: '45% increase in conversion',
    desc: 'Engineering a highly scalable, headless e-commerce ecosystem for a multi-national retail giant, integrating real-time logistics and localized payment solutions across 12 countries.',
    image: '/aether_ai_platform_1774069290682.png',
    color: '#a8ff00'
  },
  {
    title: 'SwiftHealth Connect',
    client: 'SwiftHealth Systems',
    category: 'Healthcare Mobile App',
    deliverables: ['HIPAA Compliant App', 'Real-time Diagnostics', 'Telehealth Integration'],
    results: '1.2M+ Active Patients',
    desc: 'A comprehensive cross-platform mobile application designed for secure patient-doctor interaction, featuring real-time health monitoring and encrypted medical record management.',
    image: '/healthcare_mobile_app_mockup_1774069489168.png',
    color: '#00c4a3'
  },
  {
    title: 'Capital Stream Dashboard',
    client: 'Capital Asset Management',
    category: 'FinTech Analytics',
    deliverables: ['Real-time Data Visualization', 'Risk Assessment Engine', 'Banking API Integration'],
    results: '$2.5B Assets Managed',
    desc: 'Bespoke institutional asset management platform featuring a high-performance analytics engine and real-time risk assessment dashboards for high-net-worth portfolio managers.',
    image: '/quantum_ledger_1774069331632.png',
    color: '#a8ff00'
  },
  {
    title: 'Lumina Learning CMS',
    client: 'Lumina University',
    category: 'Edutech Infrastructure',
    deliverables: ['Scalable LMS', 'Interactive Content Suite', 'Student Performance AI'],
    results: '98% Student Engagement',
    desc: 'Designing and deploying a next-generation learning management system for a major educational institution, supporting over 100,000 concurrent students with zero latency.',
    image: '/ecommerce_platform_mockup_1774069471321.png',
    color: '#00c4a3'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="project-premium-card"
    >
      <div className="glass-card project-inner">
        {/* Visual Side */}
        <div className="project-visual">
          <img src={project.image} alt={project.title} className="project-bg-image" />
          <div className="vignette" />
          
          <div className="project-client-badge">
            <span className="client-label">Client:</span>
            <span className="client-name">{project.client}</span>
          </div>

          <div className="project-stats-overlay">
            <div className="stat-item">
              <span className="stat-label">Impact</span>
              <span className="stat-value">{project.results}</span>
            </div>
          </div>
        </div>

        {/* Info Side */}
        <div className="project-info">
          <div className="project-meta">
            <span className="project-cat">{project.category}</span>
          </div>
          
          <h3 className="project-headline">{project.title}</h3>
          
          <p className="project-summary">{project.desc}</p>

          <div className="project-deliverables">
            {project.deliverables.map(item => (
              <span key={item} className="deliverable-chip">
                <CheckIcon size={12} /> {item}
              </span>
            ))}
          </div>

          <div className="project-footer">
            <motion.button 
              whileHover={{ x: 5 }} 
              className="view-case-study"
            >
              View Case Study <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CheckIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="section-premium" style={{ position: 'relative', background: 'var(--bg-void)' }}>
      {/* Background elements */}
      <div className="grid-bg-overlay" />
      <div className="glow-orb glow-cyan" style={{ width: '60vw', height: '60vw', top: '-20%', right: '-30%', opacity: 0.15 }} />

      <div className="container">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           style={{ marginBottom: '6rem' }}
        >
          <div className="section-label-premium">Our Work</div>
          <h2 className="title-premium">
            Featured <span className="gradient-text">Success</span> Stories
          </h2>
          <p className="subtitle-premium">
            We partner with industry leaders to engineer high-impact digital products 
            that redefine markets and set new standards in user experience.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="projects-showcase">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .section-premium {
          padding: 10rem 0;
          overflow: hidden;
        }

        .section-label-premium {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--lime);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .section-label-premium::after {
          content: '';
          width: 3rem;
          height: 1px;
          background: var(--lime);
        }

        .title-premium {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 950;
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
        }

        .subtitle-premium {
          color: var(--text-secondary);
          font-size: 1.2rem;
          max-width: 650px;
          line-height: 1.6;
        }

        .projects-showcase {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .project-premium-card {
           width: 100%;
        }

        .project-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          min-height: 500px;
          padding: 0 !important;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, rgba(16, 20, 28, 0.7), rgba(8, 10, 16, 0.9));
          border: 1px solid rgba(168, 255, 0, 0.08);
          overflow: hidden;
        }

        .project-visual {
          position: relative;
          overflow: hidden;
          background: #000;
          border-right: 1px solid rgba(168, 255, 0, 0.08);
        }

        .project-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0.7;
        }

        .project-inner:hover .project-bg-image {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%);
        }

        .project-client-badge {
          position: absolute;
          top: 2rem;
          left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 2;
        }

        .client-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--lime);
          letter-spacing: 0.1em;
        }

        .client-name {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }

        .project-stats-overlay {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          z-index: 2;
          background: rgba(2, 6, 16, 0.6);
          backdrop-filter: blur(12px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--lime);
        }

        .project-info {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-meta {
          margin-bottom: 1rem;
        }

        .project-cat {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .project-headline {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .project-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .project-deliverables {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .deliverable-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .deliverable-chip svg {
          color: var(--lime);
        }

        .view-case-study {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s ease;
        }

        .view-case-study:hover {
          color: var(--lime);
        }

        .grid-bg-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(168, 255, 0, 0.03) 1px, transparent 0);
          background-size: 40px 40px;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .project-inner {
            grid-template-columns: 1fr;
          }
          .project-visual {
            height: 350px;
            border-right: none;
            border-bottom: 1px solid rgba(168, 255, 0, 0.08);
          }
          .project-info {
            padding: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .project-headline {
            font-size: 1.8rem;
          }
          .project-summary {
            font-size: 0.95rem;
          }
          .project-deliverables {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
