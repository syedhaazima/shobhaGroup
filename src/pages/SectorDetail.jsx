import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, CheckCircle, Shirt, Building2, GraduationCap, BookOpen, Hotel, Heart } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getSectorBySlug, sectors } from '../data/sectors';
import SectionTitle from '../components/SectionTitle';
import SectorCard from '../components/SectorCard';

const iconMap = {
  Shirt: Shirt,
  Building2: Building2,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Hotel: Hotel,
  Heart: Heart,
};

const SectorDetail = () => {
  const { slug } = useParams();
  const sector = getSectorBySlug(slug);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  if (!sector) {
    return <Navigate to="/sectors" replace />;
  }

  const IconComponent = iconMap[sector.icon] || Building2;

  // Related sectors (exclude current)
  const related = sectors.filter((s) => s.slug !== sector.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{sector.name} | SHOBHA GROUP Business Sectors</title>
        <meta name="description" content={`SHOBHA GROUP's ${sector.name} sector — ${sector.shortDesc}`} />
        <meta name="keywords" content={`Shobha Group ${sector.name}, ${sector.name} sector`} />
        <meta property="og:title" content={`${sector.name} | SHOBHA GROUP`} />
        <meta property="og:description" content={sector.shortDesc} />
        <meta property="og:image" content={sector.heroImage} />
      </Helmet>

      {/* Sector Hero */}
      <div className="sector-detail-hero">
        <div
          className="sector-detail-hero-bg"
          style={{ backgroundImage: `url('${sector.heroImage}')` }}
        />
        <div className="sector-detail-hero-overlay" />
        <div className="container-custom">
          <div className="sector-detail-hero-content">
            <p style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              SHOBHA GROUP ›› Our Sectors
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(212,175,106,0.15)', border: '1px solid rgba(212,175,106,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)'
              }}>
                <IconComponent size={22} />
              </div>
              <h1 style={{ color: 'var(--cream)', fontFamily: 'var(--font-serif)' }}>{sector.name}</h1>
            </div>
            <div className="gold-divider" style={{ margin: '0 0 1rem' }} />
            <p style={{ color: 'rgba(167,167,167,0.9)', maxWidth: '600px', fontSize: '1.05rem' }}>
              {sector.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Back nav */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(212,175,106,0.08)', padding: '0.75rem 0' }}>
        <div className="container-custom">
          <Link
            to="/"
            className="btn-outline-gold"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.55rem 1rem' }}
          >
            <ArrowLeft size={15} /> Back to Explore
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }} className="responsive-two-col">
            {/* Left */}
            <div data-aos="fade-right">
              <SectionTitle
                label={`About ${sector.name}`}
                title={`${sector.name} Division`}
                align="left"
              />
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>{sector.intro}</p>
              <p style={{ marginBottom: '2rem' }}>{sector.details}</p>
              <Link to="/contact" className="btn-gold">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right – Services */}
            <div data-aos="fade-left" data-aos-delay="100">
              <h3 style={{ marginBottom: '1.25rem' }}>Key Services</h3>
              <div className="gold-divider gold-divider-left" style={{ marginTop: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                {sector.services.map((svc) => (
                  <div
                    key={svc}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '6px',
                      color: 'var(--cream)',
                      fontSize: '0.92rem'
                    }}
                  >
                    <CheckCircle size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Tease */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container-custom">
          <SectionTitle
            label="Visual Overview"
            title={`${sector.name} Imagery`}
            subtitle="A visual insight into the values, capabilities and growth journey of each division."
          />
          <div className="sector-detail-gallery-grid">
            {sector.galleryImages.map((image, index) => (
              <div key={image} style={{
                height: '200px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--card-border)'
              }}>
                <img
                  src={image}
                  alt={`${sector.name} visual ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.7) brightness(0.75)' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/gallery" className="btn-outline-gold">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Sectors */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="More Sectors"
            title="Explore Other Divisions"
          />
          <div className="sectors-grid">
            {related.map((s, i) => (
              <SectorCard key={s.id} sector={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectorDetail;
