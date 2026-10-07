import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      desc: 'B.Tech in Computer Science & Engineering (2023 – 2027)'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Core Focus',
      desc: 'MERN Stack & Full Stack Web Development'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      desc: 'Lucknow, Uttar Pradesh, India'
    }
  ];

  return (
    <section id="about">
      <Container>
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">Background & Profile</h2>
          <p className="section-desc">
            A concise overview of my academic foundation, technical journey, and development approach.
          </p>
        </motion.div>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <motion.div
              className="clean-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                Final-Year CSE Student & MERN Stack Developer
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}>
                I am a final-year Computer Science and Engineering student at Babu Sunder Singh Institute of Technology & Management (affiliated with Dr. APJ Abdul Kalam Technical University, Lucknow).
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0' }}>
                As a MERN Stack Developer, I enjoy building responsive web applications and working with both frontend and backend technologies. My focus is on writing clean, maintainable code, developing functional REST APIs, and crafting intuitive user interfaces.
              </p>
            </motion.div>
          </Col>

          <Col lg={5}>
            <Row className="g-3 h-100">
              {highlights.map((item, index) => (
                <Col xs={12} key={index}>
                  <motion.div
                    className="clean-card p-4 h-100"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                    whileHover={{ translateY: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div style={{ color: 'var(--primary-blue)', fontSize: '1.4rem' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                          {item.title}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;