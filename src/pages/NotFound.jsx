import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | SHOBHA GROUP</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--dark)',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(212,175,106,0.06) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            color: 'var(--gold)', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem'
          }}>
            SHOBHA GROUP
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: 800,
            color: 'transparent',
            WebkitTextStroke: '2px rgba(212,175,106,0.4)',
            lineHeight: 1,
            marginBottom: '0.5rem'
          }}>
            404
          </h1>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem', color: 'var(--cream)' }}>
            Page Not Found
          </h2>
          <div className="gold-divider" />
          <p style={{ maxWidth: '420px', margin: '1rem auto 2.5rem', fontSize: '1rem' }}>
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-gold">
              <Home size={16} /> Back to Home
            </Link>
            <Link to="/sectors" className="btn-outline-gold">
              Our Sectors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
