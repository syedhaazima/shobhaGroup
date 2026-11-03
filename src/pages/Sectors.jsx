import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/SectionTitle';
import SectorCard from '../components/SectorCard';
import { sectors } from '../data/sectors';

const Sectors = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Business Sectors | SHOBHA GROUP</title>
        <meta name="description" content="Explore SHOBHA GROUP's five business sectors: Textile, Construction, Education, Madrasa, and Hospitality & Healthcare. Excellence across every industry." />
        <meta name="keywords" content="Shobha Group sectors, textile, construction, education, madrasa, hospitality, healthcare" />
        <meta property="og:title" content="Our Business Sectors | SHOBHA GROUP" />
        <meta property="og:description" content="Five diverse sectors united by one commitment — excellence." />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')" }}
        />
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="page-hero-content">
          <h1>Our Business Sectors</h1>
          <div className="gold-divider" />
          <p className="breadcrumb-text">
            Home &rsaquo; <span>Our Sectors</span>
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Diversified Excellence"
            title="Five Pillars of SHOBHA GROUP"
            subtitle="Each sector represents a distinct commitment to service, quality, and community impact — unified under one organization, one vision, one standard of excellence."
          />

          {/* Sector list cards */}
          {sectors.map((sector, i) => (
            <div
              key={sector.id}
              className={`sector-list-card${i % 2 !== 0 ? ' reverse' : ''}`}
              data-aos="fade-up"
              data-aos-delay={60}
              style={{ marginBottom: '2rem' }}
            >
              <img
                src={sector.heroImage}
                alt={sector.name}
                className="sector-list-img"
                loading="lazy"
              />
              <div className="sector-list-body">
                <p style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Business Sector 0{i + 1}
                </p>
                <h3 style={{ marginBottom: '0.75rem' }}>{sector.name}</h3>
                <div className="gold-divider gold-divider-left" style={{ marginTop: 0 }} />
                <p style={{ marginBottom: '1.5rem' }}>{sector.shortDesc}</p>
                <Link to={`/sectors/${sector.slug}`} className="btn-gold" style={{ alignSelf: 'flex-start' }}>
                  Explore {sector.name} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid view */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Quick Overview"
            title="All Sectors at a Glance"
          />
          <div className="sectors-grid">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.id} sector={sector} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
