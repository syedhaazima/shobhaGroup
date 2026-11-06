import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Eye, ArrowRight, Award, Shield, Star, BookOpen } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/SectionTitle';

const Leadership = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Leadership | Dr. Mohamed Soukath Ali | SHOBHA GROUP</title>
        <meta name="description" content="Meet Dr. Mohamed Soukath Ali, the leader managing SHOBHA GROUP — a multi-sector organization committed to excellence, integrity, and community impact." />
        <meta name="keywords" content="Dr Mohamed Soukath Ali, Shobha Group leadership, organization manager" />
        <meta property="og:title" content="Leadership | SHOBHA GROUP" />
        <meta property="og:description" content="Meet the visionary leadership behind SHOBHA GROUP." />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80')" }}
        />
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="page-hero-content">
          <h1>Our Leadership</h1>
          <div className="gold-divider" />
          <p className="breadcrumb-text">Home &rsaquo; <span>Leadership</span></p>
        </div>
      </div>

      {/* Leadership Profile */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <div className="leadership-profile">
            {/* Portrait Side */}
            <div data-aos="fade-right">
              <div className="leadership-portrait-wrap">
                <div className="portrait-placeholder">
                  <Users size={64} color="rgba(212,175,106,0.35)" />
                  <p style={{ fontSize: '0.8rem', color: 'var(--grey-dark)', textAlign: 'center', maxWidth: '140px' }}>
                    Leadership Portrait
                  </p>
                </div>
              </div>
              <div className="leadership-stat-chips">
                <div className="stat-chip">
                  <Award size={16} className="stat-chip-icon" />
                  <span>Organization Manager</span>
                </div>
                <div className="stat-chip">
                  <Shield size={16} className="stat-chip-icon" />
                  <span>Multi-Sector Leadership</span>
                </div>
                <div className="stat-chip">
                  <Star size={16} className="stat-chip-icon" />
                  <span>Commitment to Excellence</span>
                </div>
                <div className="stat-chip">
                  <BookOpen size={16} className="stat-chip-icon" />
                  <span>Educator & Entrepreneur</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div data-aos="fade-left" data-aos-delay="100">
              <p style={{ color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Group Leadership
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '0.4rem' }}>
                Dr. Mohamed Soukath Ali
              </h2>
              <p style={{ color: 'var(--grey)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Organization Manager &amp; Group Leader, SHOBHA GROUP
              </p>

              <div className="gold-divider gold-divider-left" />

              <p style={{ marginTop: '1.5rem', marginBottom: '1.25rem', fontSize: '1.02rem' }}>
                At SHOBHA Group, our journey has always been driven by a simple yet powerful belief —
                that businesses can create lasting value when they are built on integrity, quality and a
                genuine commitment to people and communities.
              </p>

              <p style={{ marginBottom: '1.25rem' }}>
                What began as a vision to deliver excellence has grown into a diversified group with a
                presence in textile, construction, education and madrasa (Quran and Hifz). Each of our
                ventures reflects our dedication to meaningfully contribute to a better and brighter future.
              </p>

              <p style={{ marginBottom: '1.25rem' }}>
                We remain committed to nurturing talent, building strong communities, and creating
                opportunities that empower people across generations. As we move forward, we will
                continue to uphold our core values and strive for excellence in everything we do.
              </p>

              <p style={{ marginBottom: '2rem' }}>
                I thank all our partners, employees, customers and well-wishers for their continued trust
                and support in this journey.
              </p>

              <div className="philosophy-quote">
                "We believe that purpose, responsibility and integrity must guide every step we take."
                <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--grey)', fontStyle: 'normal' }}>
                  — Dr. Soukath Ali
                </div>
              </div>

              <Link to="/contact" className="btn-gold">
                Contact the Organization <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Leadership Pillars"
            title="Principles That Guide the Organization"
            subtitle="Dr. Mohamed Soukath Ali's leadership is founded on these core principles that shape the culture and direction of SHOBHA GROUP."
          />
          <div className="leadership-principles-grid">
            {[
              { icon: <Eye size={24} />, title: 'Visionary Thinking', desc: 'Strategic long-term planning that anticipates change, embraces opportunity, and leads with clarity of purpose across all five sectors.' },
              { icon: <Shield size={24} />, title: 'Ethical Leadership', desc: 'An unwavering commitment to honesty, accountability, and doing what is right — even when it is difficult.' },
              { icon: <Users size={24} />, title: 'People Development', desc: 'Investing in the growth of every team member, student, patient, and stakeholder connected to SHOBHA GROUP.' },
              { icon: <Target size={24} />, title: 'Results Orientation', desc: 'A disciplined focus on delivering measurable impact across every sector with quality and consistency.' },
              { icon: <Star size={24} />, title: 'Quality Commitment', desc: 'Maintaining the highest possible standards in every project, program, and professional interaction.' },
              { icon: <BookOpen size={24} />, title: 'Continuous Learning', desc: 'A deep belief in lifelong education, scholarship, and the pursuit of knowledge as the foundation of lasting progress.' },
            ].map((item, i) => (
              <div key={item.title} className="value-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="value-icon">{item.icon}</div>
                <h4 style={{ color: 'var(--cream)', fontFamily: 'var(--font-serif)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for Organization */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <SectionTitle
              label="Forward Vision"
              title="Dr. Mohamed Soukath Ali's Vision for SHOBHA GROUP"
            />
            <p data-aos="fade-up" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Dr. Mohamed Soukath Ali envisions SHOBHA GROUP as a beacon of responsible,
              multi-sector enterprise — an organization that grows its commercial strength
              while deepening its roots in community service, Islamic values, and human dignity.
            </p>
            <p data-aos="fade-up" data-aos-delay="80" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
              His vision encompasses a future where each division of SHOBHA GROUP — from
              textile to healthcare, from construction to Madrasa education — operates at
              the highest level of global standards while remaining deeply connected to
              local communities and values.
            </p>
            <p data-aos="fade-up" data-aos-delay="120" style={{ fontStyle: 'italic', color: 'var(--grey-dark)', fontSize: '0.88rem', marginBottom: '2.5rem' }}>
              "To build a better tomorrow through quality, knowledge, integrity and a lasting commitment to people and society."
            </p>
            <div data-aos="fade-up" data-aos-delay="160" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-gold">About the Organization <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-outline-gold">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
