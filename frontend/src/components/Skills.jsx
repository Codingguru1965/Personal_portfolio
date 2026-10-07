import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaKey,
  FaDatabase,
  FaTools,
  FaServer,
  FaLayerGroup
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaLayerGroup color="var(--primary-blue)" />,
    skills: [
      { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'JavaScript', icon: <IoLogoJavascript color="#F7DF1E" /> },
      { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
      { name: 'Redux Toolkit', icon: <SiRedux color="#764ABC" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> }
    ]
  },
  {
    title: 'Backend',
    icon: <FaServer color="var(--primary-blue)" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <FaServer color="var(--primary-blue)" /> },
      { name: 'JWT Authentication', icon: <FaKey color="#F59E0B" /> }
    ]
  },
  {
    title: 'Database',
    icon: <FaDatabase color="var(--primary-blue)" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> }
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools color="var(--primary-blue)" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'VS Code', icon: <VscVscode color="#007ACC" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-heading">Technical Skills & Tools</h2>
          <p className="section-desc">
            Technologies and tools I actively use for building full stack web applications.
          </p>
        </motion.div>

        <Row className="g-4">
          {skillCategories.map((cat, idx) => (
            <Col lg={6} key={idx}>
              <motion.div
                className="skill-category-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              >
                <div className="skill-category-title">
                  <span style={{ fontSize: '1.25rem' }}>{cat.icon}</span>
                  <span>{cat.title}</span>
                </div>
                <div className="skill-items-container">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      className="skill-tag"
                      key={sIdx}
                      whileHover={{ scale: 1.06, translateY: -2 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;