import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sectors } from '../data/sectors';

const CURRENT_YEAR = new Date().getFullYear();

// Inline SVG social icons
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96 29 29 0 00.46-5.25 29 29 0 00-.46-5.47z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div className="footer-brand-name">SHOBHA GROUP</div>
            <div className="footer-brand-sub">Managed by Dr. Mohamed Soukath Ali</div>
            <p className="footer-desc">
              A diversified multi-sector organization dedicated to building excellence and enriching lives across Textile, Construction, Education, Madrasa, and Hospitality & Healthcare.
            </p>
            <div className="social-links">
              {[
                { Icon: SocialIcons.Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
                { Icon: SocialIcons.Twitter, href: 'https://x.com', label: 'Twitter' },
                { Icon: SocialIcons.Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
                { Icon: SocialIcons.Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
                { Icon: SocialIcons.Youtube, href: 'https://www.youtube.com', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} className="social-link" aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/sectors', label: 'Our Sectors' },
                { to: '/leadership', label: 'Leadership' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Business Sectors */}
          <div>
            <h4 className="footer-heading">Business Sectors</h4>
            <ul className="footer-links">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link to={`/sectors/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <span>Group Corporate Office, Avinashi Road, Coimbatore – 641 018, Tamil Nadu, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <span>+91 422 400 0000</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <span>info@sobhagroup.com</span>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,106,0.3), transparent)',
          marginBottom: '1.75rem'
        }} />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {CURRENT_YEAR} SHOBHA GROUP. All rights reserved. Managed by Dr. Mohamed Soukath Ali.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
