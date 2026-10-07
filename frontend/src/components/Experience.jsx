import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const responsibilities = [
    'Worked on frontend development using React.js',
    'Built responsive web interfaces',
    'Worked with REST APIs',
    'Implemented CRUD operations',
    'Practiced authentication and protected routes',
    'Worked with MongoDB and backend APIs'
  ];

  return (
    <section id="experience">
      <Container>
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-desc">
            Hands-on software development training and apprentice experience.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              className="timeline-card p-4 p-md-5"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">MERN Stack Developer Apprentice</h3>
                  <div className="timeline-org mb-1">
                    Techpile Technology Pvt. Ltd.
                  </div>
                  <div className="timeline-location d-flex align-items-center gap-2">
                    <FaMapMarkerAlt size={13} />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="timeline-badge d-flex align-items-center gap-2">
                    <FaCalendarAlt size={12} />
                    <span>6 Months Apprenticeship</span>
                  </span>
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border-color)', margin: '20px 0' }} />

              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '14px' }}>
                Key Responsibilities & Contributions:
              </h4>

              <ul className="timeline-list">
                {responsibilities.map((resp, index) => (
                  <motion.li
                    key={index}
                    className="d-flex align-items-start gap-2 mb-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                  >
                    <span style={{ color: 'var(--primary-blue)', marginTop: '4px', flexShrink: 0 }}>
                      <FaCheckCircle size={14} />
                    </span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
