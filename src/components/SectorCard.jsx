import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Building2, GraduationCap, BookOpen, Hotel, Heart, ArrowRight } from 'lucide-react';

const iconMap = {
  Shirt: Shirt,
  Building2: Building2,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Hotel: Hotel,
  Heart: Heart,
};

/**
 * SectorCard - Premium sector card with image, icon, name, description, and link
 */
const SectorCard = ({ sector, index = 0 }) => {
  const IconComponent = iconMap[sector.icon] || Building2;

  return (
    <Link
      to={`/sectors/${sector.slug}`}
      className="sector-card"
      data-aos="fade-up"
      data-aos-delay={index * 80}
      aria-label={`Explore ${sector.name} sector`}
    >
      <img
        src={sector.cardImage}
        alt={sector.name}
        className="sector-card-img"
        loading="lazy"
      />
      <div className="sector-card-body">
        <div className="sector-card-icon">
          <IconComponent size={20} />
        </div>
        <h3 className="sector-card-name">{sector.name}</h3>
        <p className="sector-card-desc">{sector.shortDesc}</p>
        <span className="sector-card-link">
          Explore More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
};

export default SectorCard;
