import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: null, // true | false | null
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: data.message || 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (err) {
      console.error('[Contact Submit Error]:', err);
      setStatus({
        submitting: false,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact">
      <Container>
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-desc">
            Have a question or want to discuss opportunities? Send a message below.
          </p>
        </motion.div>

        <Row className="g-4 justify-content-center">
          <Col lg={5}>
            <motion.div
              className="clean-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                  Let's Connect
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                  I'm actively seeking opportunities as a Full Stack / MERN Developer. Feel free to reach out directly through email, LinkedIn, or GitHub.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <a
                    href="mailto:ankityadavonlyone2007@gmail.com"
                    className="d-flex align-items-center gap-3 text-decoration-none"
                    style={{ color: 'var(--text-main)' }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--primary-blue-subtle)',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>ankityadavonlyone2007@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankit-yadav-814833351/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 text-decoration-none"
                    style={{ color: 'var(--text-main)' }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--primary-blue-subtle)',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaLinkedin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>LinkedIn</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>linkedin.com/in/ankit-yadav</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Codingguru1965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 text-decoration-none"
                    style={{ color: 'var(--text-main)' }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--primary-blue-subtle)',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaGithub size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>GitHub</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>github.com/Codingguru1965</div>
                    </div>
                  </a>

                  <div className="d-flex align-items-center gap-3" style={{ color: 'var(--text-main)' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--primary-blue-subtle)',
                        color: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Lucknow, Uttar Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              className="clean-card p-4 p-md-5 h-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {status.success === true && (
                <div className="alert-custom alert-success-custom" role="alert">
                  <FaCheckCircle size={18} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status.success === false && (
                <div className="alert-custom alert-error-custom" role="alert">
                  <FaExclamationCircle size={18} />
                  <span>{status.message || 'Something went wrong. Please try again.'}</span>
                </div>
              )}

              <Form onSubmit={handleSubmit} noValidate>
                <div className="form-group-custom">
                  <label htmlFor="contact-name" className="form-label-custom">
                    Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                    disabled={status.submitting}
                  />
                  {errors.name && <span className="invalid-feedback-custom">{errors.name}</span>}
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-email" className="form-label-custom">
                    Email <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                    disabled={status.submitting}
                  />
                  {errors.email && <span className="invalid-feedback-custom">{errors.email}</span>}
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-message" className="form-label-custom">
                    Message <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                    disabled={status.submitting}
                  />
                  {errors.message && <span className="invalid-feedback-custom">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-primary-custom w-100 justify-content-center"
                  disabled={status.submitting}
                  style={{ padding: '12px 24px', fontSize: '1rem', marginTop: '10px' }}
                >
                  {status.submitting ? (
                    <>
                      <FaSpinner className="spinner-border-sm" style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={14} />
                    </>
                  )}
                </button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;