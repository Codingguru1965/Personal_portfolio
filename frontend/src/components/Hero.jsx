import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <div className="hero-badge">
              <span>👋</span>
              <span>Available for Full-Time Roles & Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm Ankit Yadav
            </h1>

            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>

            <p className="hero-description">
              I build responsive and user-friendly web applications using React, Node.js, Express and MongoDB.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary-custom">
                View Projects <FaArrowRight size={13} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}modern_resume.pdf`}
                download="Ankit_Yadav_Resume.pdf"
                className="btn-secondary-custom"
              >
                <FaDownload size={13} /> Download Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Codingguru1965"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-yadav-814833351/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>

          <Col lg={5} className="text-center text-lg-end">
            <div className="hero-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}back_image.png`}
                alt="Ankit Yadav - Full Stack Developer"
                className="hero-image"
                loading="eager"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;