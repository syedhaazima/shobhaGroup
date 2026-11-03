import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../components/SectionTitle';

const initialForm = {
  name: '', email: '', phone: '', subject: '', message: ''
};

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate submission delay (no backend connected)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: 'Office Address',
      lines: ['SOBHA Group', 'Group Corporate Office', 'Avinashi Road, Coimbatore – 641 018', 'Tamil Nadu, India'],
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone Number',
      lines: ['+91 422 400 0000', '(Representative Number)'],
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Address',
      lines: ['info@sobhagroup.com'],
    },
    {
      icon: <Clock size={20} />,
      title: 'Business Hours',
      lines: ['Monday to Saturday', '9:00 AM – 6:00 PM'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact SHOBHA GROUP | Get in Touch</title>
        <meta name="description" content="Contact SHOBHA GROUP — reach out to our team about Textile, Construction, Education, Madrasa, or Hospitality & Healthcare services." />
        <meta name="keywords" content="Contact Shobha Group, get in touch, inquiry" />
        <meta property="og:title" content="Contact SHOBHA GROUP" />
        <meta property="og:description" content="Reach out to SHOBHA GROUP for inquiries across all sectors." />
      </Helmet>

      {/* Page Hero */}
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')" }}
        />
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <div className="gold-divider" />
          <p className="breadcrumb-text">Home &rsaquo; <span>Contact</span></p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="gold-pattern-bg" aria-hidden="true" />
        <div className="container-custom">
          <SectionTitle
            label="Get in Touch"
            title="We'd Love to Hear From You"
            subtitle="Use the form below to reach SHOBHA GROUP. We will respond to your inquiry as soon as possible."
          />

          <div className="contact-grid">
            {/* Form */}
            <div data-aos="fade-right">
              <div className="contact-form-wrap">
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Send a Message</h3>
                <p style={{ fontSize: '0.88rem', marginBottom: '2rem', color: 'var(--grey-dark)' }}>
                  Reach out to us with your inquiry and our team will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div style={{
                    background: 'rgba(212,175,106,0.08)',
                    border: '1px solid rgba(212,175,106,0.3)',
                    borderRadius: '8px',
                    padding: '2rem',
                    textAlign: 'center'
                  }}>
                    <CheckCircle size={48} color="var(--gold)" style={{ marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--cream)', marginBottom: '0.75rem' }}>Message Received</h4>
                    <p style={{ fontSize: '0.95rem' }}>
                      Thank you for reaching out to SHOBHA GROUP. Your inquiry has been received and our
                      team will get back to you shortly.
                    </p>
                    <button
                      className="btn-outline-gold"
                      style={{ marginTop: '1.5rem', cursor: 'pointer' }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control-gold"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="form-error" id="name-error" role="alert">{errors.name}</p>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-control-gold"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="form-error" id="email-error" role="alert">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-control-gold"
                          placeholder="+00 000 000 0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="subject">Subject *</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          className="form-control-gold"
                          placeholder="Your inquiry subject"
                          value={form.subject}
                          onChange={handleChange}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          aria-invalid={!!errors.subject}
                        />
                        {errors.subject && <p className="form-error" id="subject-error" role="alert">{errors.subject}</p>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control-gold"
                        rows={6}
                        placeholder="Write your message here... (minimum 20 characters)"
                        value={form.message}
                        onChange={handleChange}
                        style={{ resize: 'vertical', minHeight: '140px' }}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="form-error" id="message-error" role="alert">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="btn-gold"
                      style={{ width: '100%', justifyContent: 'center' }}
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{
                            width: '16px', height: '16px', border: '2px solid rgba(0,0,0,0.3)',
                            borderTop: '2px solid var(--dark)', borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite', display: 'inline-block'
                          }} />
                          Sending...
                        </span>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>

                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left" data-aos-delay="100">
              <div className="contact-info-wrap">
                {contactItems.map((item) => (
                  <div key={item.title} className="contact-info-card">
                    <div className="contact-icon-wrap">{item.icon}</div>
                    <div>
                      <h5 style={{ color: 'var(--cream)', marginBottom: '0.35rem', fontFamily: 'var(--font-sans)' }}>
                        {item.title}
                      </h5>
                      {item.lines.map((line, i) => (
                        <p key={i} style={{ fontSize: '0.88rem', marginBottom: i === 0 ? '0.1rem' : 0 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="map-placeholder">
                  <MapPin size={32} color="rgba(212,175,106,0.4)" />
                  <p style={{ fontSize: '0.85rem' }}>
                    Coimbatore, Tamil Nadu, India<br />
                    <span style={{ fontSize: '0.78rem', color: 'var(--grey-dark)' }}>
                      Group Corporate Office
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
