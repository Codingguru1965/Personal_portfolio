import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="section-header text-center">
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">Background & Profile</h2>
          <p className="section-desc">
            A concise overview of my academic foundation, technical journey, and development approach.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <div className="clean-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Final-Year CSE Student & MERN Stack Developer
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}>
                I am a final-year Computer Science and Engineering student at Babu Sunder Singh Institute of Technology & Management (affiliated with Dr. APJ Abdul Kalam Technical University, Lucknow).
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0' }}>
                As a MERN Stack Developer, I enjoy building responsive web applications and working with both frontend and backend technologies. My focus is on writing clean, maintainable code, developing functional REST APIs, and crafting intuitive user interfaces.
              </p>
            </div>
          </Col>

          <Col lg={5}>
            <Row className="g-3 h-100">
              <Col xs={12}>
                <div className="clean-card p-4 h-100">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ color: 'var(--primary-blue)', fontSize: '1.4rem' }}>
                      <FaGraduationCap />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                        Education
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        B.Tech in Computer Science & Engineering (2023 – 2027)
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <div className="clean-card p-4 h-100">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ color: 'var(--primary-blue)', fontSize: '1.4rem' }}>
                      <FaLaptopCode />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                        Core Focus
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        MERN Stack & Full Stack Web Development
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <div className="clean-card p-4 h-100">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ color: 'var(--primary-blue)', fontSize: '1.4rem' }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                        Location
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Lucknow, Uttar Pradesh, India
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;