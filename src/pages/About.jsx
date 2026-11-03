import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Users, Star, Lightbulb, Heart, Globe, BookOpen } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/SectionTitle';

const coreValues = [
  { icon: <Shield size={24} />, title: 'Integrity', desc: 'We operate with transparency, honesty, and the highest ethical standards in every engagement.' },
  { icon: <Star size={24} />, title: 'Excellence', desc: 'We pursue the highest quality in every product, service, and interaction we deliver.' },
  { icon: <Users size={24} />, title: 'People First', desc: 'We believe in empowering communities, supporting our teams, and serving our clients with genuine care.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We continuously seek better ways of working, investing in knowledge and technology for growth.' },
  { icon: <Heart size={24} />, title: 'Compassion', desc: 'From healthcare to education, we act with empathy and a deep sense of social responsibility.' },
  { icon: <Globe size={24} />, title: 'Sustainability', desc: 'We are committed to responsible practices that protect our environment and communities for future generations.' },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  return (
    <>
      <Helmet>
        <title>About SHOBHA GROUP | Our Vision, Mission & Values</title>
        <meta name="description" content="Learn about SHOBHA GROUP — a premium multi-sector organization managed by Dr. Mohamed Soukath Ali, built on integrity, excellence, and service across five business sectors." />
        <meta name="keywords" content="About Shobha Group, Dr Mohamed Soukath Ali, vision, mission, core values, multi-sector" />
        <meta property="og:title" content="About SHOBHA GROUP | Our Vision, Mission & Values" />
        <meta property="og:description" content="A premium diversified organization committed to building excellence and enriching lives." />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')" }}
        />
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="page-hero-content">
          <h1 className="about-page-title">About Shobha Group</h1>
          <div className="gold-divider" />
          <p className="breadcrumb-text">
            Home &rsaquo; <span>About Us</span>
          </p>
        </div>
      </div>

      {/* Organization Intro */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
            className="responsive-two-col">
            <div data-aos="fade-right">
              <SectionTitle
                label="Who We Are"
                title="SHOBHA GROUP — A Multi-Sector Legacy"
                align="left"
              />
              <p style={{ marginBottom: '1.25rem' }}>
                At <strong style={{ color: 'var(--gold)' }}>SOBHA Group</strong>, we are guided by a clear
                vision and purpose to create value for people, businesses and communities. Our vision
                and mission define who we are, what we strive for, and the positive impact we aim to
                make across all our sectors.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Managed by <strong style={{ color: 'var(--gold)' }}>Dr. Mohamed Soukath Ali</strong>,
                SHOBHA GROUP brings together expertise in Textile, Construction, Education, Madrasa,
                Hospitality and Healthcare — building a diversified platform driven by integrity,
                quality and long-term community value.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                We are committed to nurturing talent, enabling growth and creating opportunities that
                empower people and strengthen the communities we serve.
              </p>
              <Link to="/sectors" className="btn-gold">
                Explore Our Sectors <ArrowRight size={16} />
              </Link>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                  alt="SHOBHA GROUP Organization"
                  className="about-intro-image"
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  width: '100px',
                  height: '100px',
                  border: '2px solid rgba(212,175,106,0.4)',
                  borderRadius: '8px',
                  pointerEvents: 'none'
                }} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Our Purpose"
            title="Vision & Mission"
          />
          <div className="vm-grid" style={{ marginBottom: '3rem' }}>
            <div className="vm-card" data-aos="fade-right">
              <div className="vm-icon-wrap"><BookOpen size={28} /></div>
              <h3>Our Vision</h3>
              <div className="gold-divider gold-divider-left" />
              <p>
                To be a trusted and diversified global group, contributing to a progressive society
                through quality, knowledge and ethical business practices.
              </p>
            </div>
            <div className="vm-card" data-aos="fade-left">
              <div className="vm-icon-wrap"><Star size={28} /></div>
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

      {/* Core Values */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="What Guides Us"
            title="Our Core Values"
            subtitle="These six principles form the ethical and operational backbone of everything SHOBHA GROUP represents."
          />
          <div className="values-grid">
            {coreValues.map((val, i) => (
              <div key={val.title} className="value-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="value-icon">{val.icon}</div>
                <h4 style={{ color: 'var(--cream)', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.9rem' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Sector Approach */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <SectionTitle
              label="Our Approach"
              title="A Diversified, Human-Centered Business Model"
            />
            <p data-aos="fade-up" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              SHOBHA GROUP's multi-sector approach is rooted in a belief that diverse industries
              can be united by a single common thread: <em style={{ color: 'var(--gold)' }}>excellence in service to people</em>.
              Whether we are constructing a building, educating a student, manufacturing textiles,
              or caring for a patient, we bring the same level of dedication and professionalism.
            </p>
            <p data-aos="fade-up" data-aos-delay="80" style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              This cross-sector strength gives us the resilience, adaptability, and breadth
              to create sustainable value — both commercially and socially. Every division
              of SHOBHA GROUP contributes to a larger mission: to build excellence and
              enrich lives.
            </p>
            <p data-aos="fade-up" data-aos-delay="120" style={{ fontStyle: 'italic', color: 'var(--grey-dark)', fontSize: '0.9rem' }}>
              Built on trust, quality and a deep sense of responsibility to people and communities.
            </p>
            <div data-aos="fade-up" data-aos-delay="160" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/sectors" className="btn-gold">Our Business Sectors <ArrowRight size={16} /></Link>
              <Link to="/leadership" className="btn-outline-gold">Meet the Leader</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
