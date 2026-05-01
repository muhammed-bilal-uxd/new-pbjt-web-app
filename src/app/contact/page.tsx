'use client';

import { useState } from 'react';
import {
  User,
  Mail,
  Building2,
  MessageSquare,
  MapPin,
  Phone,
  Clock,
  Globe,
  Users,
  Megaphone,
  Lightbulb,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import './Contact.css';
import Banner from '@/components/banner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: '',
    agreed: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Replace with API call
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      {/* <section className="contact-hero">
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Let&apos;s build a just and sustainable future&mdash;together.
          </p>
          <div className="contact-hero-description">
            <p>We welcome questions, collaborations, ideas, and feedback.</p>
            <p>Reach out to the PBJT team&mdash;we&apos;d love to hear from you.</p>
          </div>
        </div>
      </section> */}

      <Banner
        title="Contact us"
        imgUrl="/images/impact-proposition/hero-center.jpg"
        textColor="#ffffff"
      />

      {/* Form + Info */}
      <section className="contact-main">
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h2 className="form-title">Send us a message</h2>
            <p className="form-subtitle">
              Use the form below to get in touch. Our team will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your Name <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="organisation">Organisation / Company</label>
                <div className="input-wrapper">
                  <Building2 className="input-icon" size={18} />
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    placeholder="Enter your organisation (optional)"
                    value={formData.organisation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="media">Media &amp; Press</option>
                  <option value="ideas">Share Ideas</option>
                  <option value="support">General Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Your Message <span className="required">*</span>
                </label>
                <div className="textarea-wrapper">
                  <MessageSquare className="textarea-icon" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your enquiry..."
                    rows={6}
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="char-count">
                  {formData.message.length} / 1000 characters
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="privacy"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy">
                  I agree to the{' '}
                  <a href="/privacy" className="link">
                    Privacy Policy
                  </a>{' '}
                  and consent to being contacted.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Info Card */}
          <aside className="contact-info-card">
            <h3 className="info-title">Contact Information</h3>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-content">
                <h4>Address</h4>
                <p>
                  Place-Based Just Transition (PBJT)
                  <br />
                  C/o Centre for Sustainable Work
                  <br />
                  First Floor, 123 Community Lane
                  <br />
                  Bengaluru, Karnataka 560001, India
                </p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:hello@pbjt.org" className="info-link">
                  hello@pbjt.org
                </a>
                <p className="info-note">We aim to respond within 2&ndash;3 working days.</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <a href="tel:+918012345678" className="info-link">
                  +91 80 1234 5678
                </a>
                <p className="info-note">Mon &ndash; Fri, 10:00 AM &ndash; 6:00 PM IST</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <div className="info-icon">
                <Clock size={20} />
              </div>
              <div className="info-content">
                <h4>Office Hours</h4>
                <p>
                  Monday to Friday
                  <br />
                  10:00 AM &ndash; 6:00 PM (IST)
                </p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <div className="info-icon">
                <Globe size={20} />
              </div>
              <div className="info-content">
                <h4>Website</h4>
                <a href="https://www.pbjt.org" className="info-link">
                  www.pbjt.org
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Ways */}
      {/* <section className="other-ways">
        <h2 className="other-ways-title">Other ways to connect</h2>
        <div className="ways-grid">
          <div className="way-card">
            <div className="way-icon">
              <Users size={24} />
            </div>
            <h3>Partnerships</h3>
            <p>Interested in collaborating with us on research, projects, or community initiatives?</p>
            <a href="#" className="way-link">
              Explore Partnerships <ArrowRight size={16} />
            </a>
          </div>

          <div className="way-card">
            <div className="way-icon">
              <Megaphone size={24} />
            </div>
            <h3>Media &amp; Press</h3>
            <p>For media inquiries, interview requests, or press resources, please reach out.</p>
            <a href="#" className="way-link">
              Contact Media Team <ArrowRight size={16} />
            </a>
          </div>

          <div className="way-card">
            <div className="way-icon">
              <Lightbulb size={24} />
            </div>
            <h3>Share Your Ideas</h3>
            <p>Have an idea, case study, or suggestion to strengthen just transition work?</p>
            <a href="#" className="way-link">
              Share Your Ideas <ArrowRight size={16} />
            </a>
          </div>

          <div className="way-card">
            <div className="way-icon">
              <Headphones size={24} />
            </div>
            <h3>General Support</h3>
            <p>Facing issues with our website or need help finding something? We&apos;re here to help.</p>
            <a href="#" className="way-link">
              Get Support <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail size={32} />
          </div>
          <div className="newsletter-text">
            <h3>Stay connected with PBJT</h3>
            <p>
              Subscribe to our newsletter to stay updated on our latest research, stories, and
              opportunities.
            </p>
          </div>
          <button className="subscribe-btn" type="button">
            Subscribe Now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
