import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="clean-footer">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
              ANKIT YADAV
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Full Stack Developer • B.Tech CSE (2023 – 2027)
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a
              href="https://github.com/Codingguru1965"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px', fontSize: '1rem' }}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-yadav-814833351/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px', fontSize: '1rem' }}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ankityadavonlyone2007@gmail.com"
              className="social-icon-btn"
              style={{ width: '36px', height: '36px', fontSize: '1rem' }}
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="social-icon-btn"
              style={{ width: '36px', height: '36px', fontSize: '1rem' }}
              aria-label="Scroll to top"
              title="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0 16px 0' }} />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Ankit Yadav. All rights reserved.
          </p>
          <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Built with React.js, Express.js & MongoDB
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
