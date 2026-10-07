import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaAward } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering',
    institution: 'Babu Sunder Singh Institute of Technology & Management',
    affiliation: 'Affiliated with Dr. APJ Abdul Kalam Technical University (AKTU)',
    location: 'Lucknow, Uttar Pradesh, India',
    period: '2023 – 2027',
    score: 'CGPA: 7.3 / 10',
    icon: <FaGraduationCap />
  },
  {
    degree: 'Intermediate (Class XII) — UP Board',
    institution: 'Government City Inter College',
    affiliation: 'Uttar Pradesh State Board of High School and Intermediate Education',
    location: 'Ghazipur, Uttar Pradesh, India',
    period: '2021 – 2023',
    score: 'Percentage: 82%',
    icon: <FaSchool />
  }
];

const Education = () => {
  return (
    <section id="education">
      <Container>
        <div className="section-header text-center">
          <span className="section-tag">Academic Journey</span>
          <h2 className="section-heading">Education</h2>
          <p className="section-desc">
            Academic qualifications and educational background.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            {educationData.map((item, index) => (
              <div className="timeline-card p-4 p-md-5" key={index}>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role d-flex align-items-center gap-2">
                      <span style={{ color: 'var(--primary-blue)', fontSize: '1.25rem' }}>
                        {item.icon}
                      </span>
                      <span>{item.degree}</span>
                    </h3>
                    <div className="timeline-org mb-1">{item.institution}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '4px' }}>
                      {item.affiliation}
                    </div>
                    <div className="timeline-location">{item.location}</div>
                  </div>

                  <div className="d-flex flex-column align-items-lg-end gap-2 mt-2 mt-lg-0">
                    <span className="timeline-badge d-flex align-items-center gap-2">
                      <FaCalendarAlt size={12} />
                      <span>{item.period}</span>
                    </span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <FaAward color="var(--primary-blue)" size={14} />
                      <span>{item.score}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
