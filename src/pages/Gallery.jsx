import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/SectionTitle';
import { sectors } from '../data/sectors';

const galleryImages = sectors.flatMap((sector) =>
  sector.galleryImages.map((src, index) => ({
    id: `${sector.id}-${index}`,
    category: sector.slug,
    src,
    alt: `${sector.name} — image ${index + 1}`,
  })),
);

const categories = [
  { key: 'all', label: 'All' },
  { key: 'textile', label: 'Textile' },
  { key: 'construction', label: 'Construction' },
  { key: 'education', label: 'Education' },
  { key: 'madrasa', label: 'Madrasa' },
  { key: 'hospitality-healthcare', label: 'Hospitality & Healthcare' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filtered.length),
    [filtered.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeLightbox, lightboxIndex, nextImage, prevImage]);

  return (
    <>
      <Helmet>
        <title>Gallery | SHOBHA GROUP</title>
        <meta name="description" content="Explore SHOBHA GROUP's image gallery showcasing our Textile, Construction, Education, Madrasa, and Hospitality & Healthcare sectors." />
        <meta name="keywords" content="Shobha Group gallery, images, sectors" />
        <meta property="og:title" content="Gallery | SHOBHA GROUP" />
        <meta property="og:description" content="Visual journey through SHOBHA GROUP's five business sectors." />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')" }}
        />
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="page-hero-content">
          <h1>Gallery</h1>
          <div className="gold-divider" />
          <p className="breadcrumb-text">Home &rsaquo; <span>Gallery</span></p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Our Visual Story"
            title="SHOBHA GROUP in Images"
            subtitle="Browse our curated gallery across all five business sectors and the communities we serve."
          />

          {/* Filter Bar */}
          <div className="gallery-filter-bar" role="tablist" aria-label="Gallery filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn${activeCategory === cat.key ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
                role="tab"
                aria-selected={activeCategory === cat.key}
                aria-label={`Filter by ${cat.label}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid" role="list">
            {filtered.map((img, idx) => (
              <div
                key={img.id}
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 80}
                onClick={() => openLightbox(idx)}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                aria-label={`View ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-label">
                    <ZoomIn size={15} />
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--grey)' }}>
              No images found in this category.
            </div>
          )}

          <p style={{ textAlign: 'center', color: 'var(--grey-dark)', fontSize: '0.82rem', marginTop: '2rem', fontStyle: 'italic' }}>
            Visual highlights from the SHOBHA GROUP journey across business, learning and community impact.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <X size={18} />
          </button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image">
            <ChevronLeft size={22} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image">
            <ChevronRight size={22} />
          </button>
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            color: 'var(--grey)', fontSize: '0.82rem'
          }}>
            {lightboxIndex + 1} / {filtered.length} — {filtered[lightboxIndex].alt}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
