import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#f5deb3', '#ffffff', '#002b31']
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ paddingTop: '100px' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-4 p-md-5"
        >
          <Row className="g-5">
            <Col lg={5}>
              <span style={{ color: '#f5deb3', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>
                Get in Touch
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '8px', marginBottom: '20px' }}>
                Let’s create something exceptional together.
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '35px' }}>
                Whether you have a question, a project collaboration idea, or want to discuss full-time opportunities, my inbox is always open!
              </p>

              <div className="d-flex flex-column gap-3">
                <a href="mailto:ankityadavonlyone2007@gmail.com" className="link_section text-decoration-none d-flex align-items-center gap-3 text-white">
                  <div style={{ background: 'rgba(245,222,179,0.1)', padding: '12px', borderRadius: '10px', color: '#f5deb3' }}>
                    <FaEnvelope size={20} />
                  </div>
                  <span>ankityadavonlyone2007@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/ankit-yadav-814833351/" target="_blank" rel="noreferrer" className="link_section text-decoration-none d-flex align-items-center gap-3 text-white">
                  <div style={{ background: 'rgba(245,222,179,0.1)', padding: '12px', borderRadius: '10px', color: '#f5deb3' }}>
                    <FaLinkedin size={20} />
                  </div>
                  <span>linkedin.com/in/Ankit-yadav</span>
                </a>

                <a href="https://github.com/Codingguru1965" target="_blank" rel="noreferrer" className="link_section text-decoration-none d-flex align-items-center gap-3 text-white">
                  <div style={{ background: 'rgba(245,222,179,0.1)', padding: '12px', borderRadius: '10px', color: '#f5deb3' }}>
                    <FaGithub size={20} />
                  </div>
                  <span>github.com/Codingguru1965</span>
                </a>
              </div>
            </Col>

            <Col lg={7}>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Your Name" required className="modern-input" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Your Email" required className="modern-input" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Subject" required className="modern-input" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Control as="textarea" rows={5} placeholder="Write your message here..." required className="modern-input" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <button type="submit" className="btn-gold w-100 justify-content-center">
                      {submitted ? 'Message Sent! ✨' : 'Send Message'} <FaPaperPlane />
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Footer */}
      <footer className="text-center mt-5 py-4" style={{ borderTop: '1px solid var(--border-glass)', background: 'rgba(0, 24, 28, 0.8)' }}>
        <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          © All Rights Reserved | Handcrafted by{' '}
          <span style={{ color: '#f5deb3', fontWeight: 700 }}>Ankit Yadav</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;