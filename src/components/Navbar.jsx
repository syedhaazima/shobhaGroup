import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import goldEmblem from '../assets/gold_emblem.png';
import '../styles/navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/sectors', label: 'Our Sectors' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar-shobha${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container-custom">
          <div className="navbar-inner">
            {/* Brand */}
            <Link to="/" className="navbar-brand-link" onClick={closeMenu} aria-label="Shobha Group home">
              <img className="navbar-brand-logo" src={goldEmblem} alt="" fetchPriority="high" />
              <span className="navbar-brand-name">SHOBHA</span>
            </Link>

            {/* Nav Links */}
            <ul className={`navbar-links${mobileOpen ? ' mobile-open' : ''}`} role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {/* Mobile CTA */}
              <li className="mobile-cta" style={{ display: 'none' }}>
                <Link to="/contact" className="btn-gold" onClick={closeMenu}
                  style={{ fontSize: '0.85rem', padding: '0.7rem 1.5rem', display: 'inline-block' }}>
                  Get in Touch
                </Link>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`nav-overlay${mobileOpen ? ' visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;
