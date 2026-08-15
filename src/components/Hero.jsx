import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const triggerResumeConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f5deb3', '#002b31', '#ffffff']
    });
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill" 
                   style={{ background: 'rgba(245, 222, 179, 0.1)', border: '1px solid rgba(245, 222, 179, 0.2)' }}>
                <span style={{ fontSize: '1.2rem' }}>👋</span>
                <span style={{ color: '#f5deb3', fontWeight: 600, fontSize: '0.95rem' }}>
                  Hi, My name is Ankit Yadav
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: '1.15', marginBottom: '20px' }}>
                Engineering Modern <br />
                <span style={{ color: '#f5deb3' }}>
                  <Typewriter
                    options={{
                      strings: [
                        'Full Stack Solutions.',
                        'Frontend Excellence.',
                        'Scalable Backend APIs.',
                        'MERN Stack Architecture.'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 30,
                      delay: 60,
                    }}
                  />
                </span>
              </h1>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '35px', lineHeight: 1.7 }}>
                I bridge the gap between design and robust engineering, creating scalable web applications with smooth interactive experiences.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="../public/tech_resume.pdf"
                  download="Ankit_Yadav_Resume.pdf"
                  onClick={triggerResumeConfetti}
                  className="btn-gold text-decoration-none"
                >
                  Download Resume <FaDownload />
                </a>
                <a
                  href="#contact"
                  className="btn text-decoration-none d-inline-flex align-items-center gap-2"
                  style={{
                    border: '1px solid rgba(245, 222, 179, 0.3)',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#f5deb3';
                    e.currentTarget.style.color = '#f5deb3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245, 222, 179, 0.3)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  Let's Connect <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;