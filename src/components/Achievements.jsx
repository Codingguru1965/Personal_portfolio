import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaTrophy, FaCertificate, FaRocket, FaCodeBranch } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaRocket size={36} color="#f5deb3" />,
    tag: 'Full Stack',
    title: 'Deployed Full-Scale MERN Apps',
    desc: 'Engineered performant full stack web applications with authentication, reactive design, and optimized MongoDB databases.'
  },
  {
    icon: <FaTrophy size={36} color="#f5deb3" />,
    tag: 'Academics',
    title: 'Computer Science Academic Excellence',
    desc: 'Demonstrated deep problem-solving skills, algorithms mastery, and software engineering discipline throughout B.Tech.'
  },
  {
    icon: <FaCertificate size={36} color="#f5deb3" />,
    tag: 'Specialization',
    title: 'Modern React & GSAP Specialist',
    desc: 'Mastered component lifecycle, modular architecture, performance optimization, and fluid web animations.'
  },
  {
    icon: <FaCodeBranch size={36} color="#f5deb3" />,
    tag: 'Open Source',
    title: 'Active Code Contributor',
    desc: 'Constantly building open-source repositories and solving algorithmic coding challenges across platforms.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" style={{ padding: '100px 0' }}>
      <Container>
        <div className="text-center mb-5">
          <span style={{ color: '#f5deb3', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>
            Milestones
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginTop: '8px' }}>
            Featured Achievements
          </h2>
        </div>

        <Row className="g-4">
          {achievements.map((item, index) => (
            <Col md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                  <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div style={{
                          background: 'rgba(245, 222, 179, 0.1)',
                          padding: '12px',
                          borderRadius: '12px',
                          display: 'inline-flex'
                        }}>
                          {item.icon}
                        </div>
                        <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#f5deb3', border: '1px solid var(--border-glass)' }}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 style={{ fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;