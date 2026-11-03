import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectorCard from '../components/SectorCard';
import SectionTitle from '../components/SectionTitle';
import { sectors } from '../data/sectors';
import '../styles/home.css';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }
  })
};

const whyItems = [
  { icon: <Award size={24} />, title: 'Commitment to Quality', desc: 'Every product and service we deliver meets rigorous quality standards.' },
  { icon: <Shield size={24} />, title: 'Professional Excellence', desc: 'Our teams operate with expertise, discipline, and dedication.' },
  { icon: <CheckCircle size={24} />, title: 'Trust & Integrity', desc: 'Transparency and honesty are the pillars of every relationship we build.' },
  { icon: <Zap size={24} />, title: 'Innovation & Growth', desc: 'We embrace change and continuously evolve to stay ahead.' },
  { icon: <Users size={24} />, title: 'Social Responsibility', desc: 'We contribute positively to communities and society at large.' },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Shobha Group | Building Excellence. Enriching Lives.</title>
        <meta name="description" content="Shobha Group is a premium multi-sector organization managed by Dr. Mohamed Soukath Ali, operating across Textile, Construction, Education, Madrasa, and Hospitality & Healthcare." />
        <meta name="keywords" content="Shobha Group, Dr Mohamed Soukath Ali, textile, construction, education, madrasa, hospitality, healthcare" />
        <meta property="og:title" content="Shobha Group | Building Excellence. Enriching Lives." />
        <meta property="og:description" content="A diversified multi-sector organization committed to excellence and community impact." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-pattern" />

        <div className="container-custom" style={{ width: '100%' }}>
          <div className="hero-content">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="hero-eyebrow"
            >
              Established Excellence
            </motion.div>

            <motion.h1
              className="hero-title"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              Shobha
              <span className="highlight" style={{ display: 'block' }}>Group</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              "Building Excellence. Enriching Lives."
            </motion.p>

            <motion.p
              className="hero-desc"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              A diversified multi-industry conglomerate operating across Textile, Construction,
              Education, Madrasa, and Hospitality & Healthcare. Guided by a commitment to
              excellence, integrity, and lasting community impact.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
            >
              <Link to="/sectors" className="btn-gold">
                Explore Our Sectors <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="about-preview section" aria-label="About preview">
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <div className="about-preview-content">
            <div data-aos="fade-right">
              <div className="about-preview-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt="Shobha Group corporate excellence"
                  className="about-preview-img"
                />
                <div className="about-preview-img-frame" aria-hidden="true" />
                <div className="about-preview-badge" aria-hidden="true">
                  Multi<br />Sector<br />Group
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <SectionTitle
                label="Who We Are"
                title="A Legacy of Excellence Across Sectors"
                align="left"
              />
              <p style={{ marginBottom: '1.5rem' }}>
                Shobha Group is a premium multi-sector organization with a distinguished presence
                across five diverse sectors. Under the capable leadership of{' '}
                <strong style={{ color: 'var(--gold)' }}>Dr. Mohamed Soukath Ali</strong>,
                the organization is guided by an unwavering commitment to quality, integrity,
                and sustainable growth.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                From textile manufacturing to healthcare services, from construction excellence
                to Islamic education — Shobha Group brings professional expertise and genuine
                care to every sector it serves. Our mission is simple: to build excellence
                and enrich every life we touch.
              </p>
              <Link to="/about" className="btn-gold">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS SECTORS ===== */}
      <section className="section" style={{ background: 'var(--dark)' }} aria-label="Business sectors">
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Our Sectors"
            title="Five Pillars of Excellence"
            subtitle="Shobha Group operates across five strategic sectors, each representing our commitment to quality, service, and community impact."
          />
          <div className="sectors-grid">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.id} sector={sector} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-aos="fade-up">
            <Link to="/sectors" className="btn-outline-gold">
              View All Sectors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="vision-mission section" aria-label="Vision and mission">
        <div className="container-custom">
          <SectionTitle
            label="Our Purpose"
            title="Vision & Mission"
            subtitle="Guided by clear purpose and noble values, Shobha Group strives to make a meaningful difference in every industry we operate within."
          />
          <div className="vm-grid">
            <div className="vm-card" data-aos="fade-right">
              <div className="vm-icon-wrap">
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <div className="gold-divider gold-divider-left" />
              <p>
                To be a trusted and diversified global group, contributing to a progressive society
                through quality, knowledge and ethical business practices.
              </p>
            </div>
            <div className="vm-card" data-aos="fade-left">
              <div className="vm-icon-wrap">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <div className="gold-divider gold-divider-left" />
              <p>
                To deliver excellence in every sector we operate, create sustainable growth,
                empower communities and nurture future generations with knowledge and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP PREVIEW ===== */}
      <section className="leadership-preview section" aria-label="Leadership">
        <div className="container-custom">
          <SectionTitle
            label="Our Leadership"
            title="Guided by Excellence"
          />
          <div className="leadership-card" data-aos="fade-up">
            <div
              className="leadership-portrait"
              aria-label="Dr. Mohamed Soukath Ali – Portrait placeholder"
            >
              <Users size={60} color="rgba(212,175,106,0.4)" />
            </div>
            <div>
              <p style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Organization Management
              </p>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>Dr. Mohamed Soukath Ali</h3>
              <p style={{ color: 'var(--grey)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Group Leader & Organization Manager
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Under the distinguished leadership of Dr. Mohamed Soukath Ali, Shobha Group
                has grown into a respected multi-sector organization. His vision for excellence,
                combined with a deep commitment to ethical practices and community development,
                shapes every aspect of the organization's operations and growth.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Under his leadership, Shobha Group continues to build trust, create opportunities and
                deliver meaningful impact across every business it serves.
              </p>
              <Link to="/leadership" className="btn-outline-gold">
                View Full Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" style={{ background: 'var(--navy)' }} aria-label="Why choose Shobha Group">
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Our Difference"
            title="Why Choose Shobha Group"
            subtitle="Five defining principles that distinguish us and drive everything we do."
          />
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <div key={item.title} className="why-item" data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="why-icon">{item.icon}</div>
                <h4 className="why-title">{item.title}</h4>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(212,175,106,0.12) 0%, rgba(8,13,24,0.95) 100%)',
          borderTop: '1px solid rgba(212,175,106,0.15)',
          borderBottom: '1px solid rgba(212,175,106,0.15)',
          padding: '5rem 0',
          textAlign: 'center'
        }}
        aria-label="Call to action"
      >
        <div className="container-custom">
          <h2 data-aos="fade-up" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Ready to Work with Shobha Group?
          </h2>
          <p data-aos="fade-up" data-aos-delay="80" style={{ maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1.05rem' }}>
            Reach out to us to explore how our five business sectors can serve your needs
            and create shared value.
          </p>
          <div data-aos="fade-up" data-aos-delay="160" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-gold">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link to="/sectors" className="btn-outline-gold">
              Our Sectors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
