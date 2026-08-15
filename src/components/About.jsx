import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaCode, FaDraftingCompass, FaServer, FaLayerGroup, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import profile from '/public/remove_image.png'
const capabilities = [
  { icon: <FaCode />, name: 'Frontend Engineering' },
  { icon: <FaServer />, name: 'Backend Architecture' },
  { icon: <FaLayerGroup />, name: 'Web & UI Design' },
  { icon: <FaDraftingCompass />, name: 'UX Prototyping' },
  { icon: <FaDatabase />, name: 'RESTful API Design' },
  { icon: <FaMobileAlt />, name: 'Responsive Layouts' },
];

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1000}>
                <div 
                  className="glass-card p-3" 
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <img
                    src={profile}
                    alt="Ankit Yadav"
                    style={{
                      width: '100%',
                      height: '480px',
                      objectFit: 'cover',
                      borderRadius: '16px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    background: 'rgba(0, 43, 49, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-glass)'
                  }}>
                    <span style={{ color: '#f5deb3', fontWeight: 700 }}>Ankit Yadav</span>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>B.Tech in Computer Science and Engineering</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: '#f5deb3', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
                About Me
              </span>
              <h2 className="mt-2 mb-4" style={{ fontSize: '2.4rem', fontWeight: 700, lineHeight: 1.3 }}>
                A passionate <span style={{ color: '#f5deb3' }}>MERN Stack Developer</span> crafting resilient, scalable, and intuitive products.
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '30px' }}>
                Hi! I am Ankit Yadav. I specialize in building performance-oriented, modern web applications leveraging MongoDB, Express.js, React.js, and Node.js. With a strong foundation in Computer Science, I continuously push technical boundaries through real-world software development, state management, and modern user-centric interfaces.
              </p>

              <Row className="g-3">
                {capabilities.map((cap, i) => (
                  <Col sm={6} key={i}>
                    <div className="feature-badge w-100">
                      {cap.icon}
                      <span>{cap.name}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;