import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sectors } from '../data/sectors';

const CURRENT_YEAR = new Date().getFullYear();

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
            &copy; {CURRENT_YEAR} SHOBHA GROUP. Managed by Dr. Mohamed Soukath Ali.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
