import React from 'react';

/**
 * SectionTitle - Reusable premium section title component
 * @param {string} label - Small eyebrow label text
 * @param {string} title - Main heading
 * @param {string} subtitle - Optional paragraph below heading
 * @param {boolean} light - Use light/cream color for title instead of gold
 * @param {string} align - 'center' (default) | 'left'
 */
const SectionTitle = ({ label, title, subtitle, light = false, align = 'center' }) => {
  const isLeft = align === 'left';

  return (
    <div className={`section-title${isLeft ? ' section-title-left' : ''}`}>
      {label && <span className="label">{label}</span>}
      <h2 style={light ? { color: 'var(--cream)' } : {}}>{title}</h2>
      <div className={`gold-divider${isLeft ? ' gold-divider-left' : ''}`} />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
