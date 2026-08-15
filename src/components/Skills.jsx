import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMongodb, SiExpress, SiTypescript, SiPostgresql } from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 size={50} color="#e34f26" />, percent: 90 },
  { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572b6" />, percent: 80 },
  { name: 'JavaScript', icon: <IoLogoJavascript size={50} color="#f7df1e" />, percent: 80 },
  { name: 'Express.js', icon: <SiExpress size={50} color="#ffffff" />, percent: 75 },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} color="#7952b3" />, percent: 75 },
  { name: 'React.js', icon: <FaReact size={50} color="#61dafb" />, percent: 70 },
  { name: 'Python', icon: <FaPython size={50} color="#3776AB" />, percent: 70 },
  { name: 'MongoDB', icon: <SiMongodb size={50} color="#47a248" />, percent: 65 },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#339933" />, percent: 50 },
  { name: 'TypeScript', icon: <SiTypescript size={50} color="#3178C6" />, percent: 50 },
  { name: 'SQL', icon: <FaDatabase size={50} color="#f29111" />, percent: 50 },
  { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" />, percent: 40 },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <Container>
        <div className="text-center mb-5">
          <span style={{ color: '#f5deb3', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>
            Capabilities
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginTop: '8px' }}>
            Skills & Technical Stack
          </h2>
        </div>

        <Row className="g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.03} transitionSpeed={400}>
                  <div className="glass-card text-center p-4">
                    <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {skill.icon}
                    </div>
                    <h5 className="mt-3 mb-2" style={{ fontWeight: 600 }}>{skill.name}</h5>
                    
                    {/* Animated Progress Track */}
                    <div style={{
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      height: '8px',
                      overflow: 'hidden',
                      marginTop: '12px',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        width: `${skill.percent}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #f5deb3, #ffffff)',
                        borderRadius: '10px'
                      }} />
                    </div>
                    
                    <span style={{ color: '#f5deb3', fontWeight: 700, fontSize: '0.9rem' }}>
                      {skill.percent}% Proficiency
                    </span>
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

export default Skills;