import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 }
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="hero-badge">
                <span>👋</span>
                <span>Available for Full-Time Roles & Opportunities</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="hero-title">
                Hi, I'm Ankit Yadav
              </motion.h1>

              <motion.div variants={itemVariants} className="hero-subtitle">
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'MERN Stack Developer',
                      'React.js & Node.js Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 45,
                    delay: 70,
                    wrapperClassName: 'typewriter-text',
                    cursorClassName: 'typewriter-cursor'
                  }}
                />
              </motion.div>

              <motion.p variants={itemVariants} className="hero-description">
                I build responsive and user-friendly web applications using React, Node.js, Express and MongoDB.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  className="btn-primary-custom"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects <FaArrowRight size={13} />
                </motion.a>
                <motion.a
                  href={`${import.meta.env.BASE_URL}modern_resume.pdf`}
                  download="Ankit_Yadav_Resume.pdf"
                  className="btn-secondary-custom"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload size={13} /> Download Resume
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="social-links">
                <motion.a
                  href="https://github.com/Codingguru1965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  whileHover={{ scale: 1.1, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ankit-yadav-814833351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  whileHover={{ scale: 1.1, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={5} className="text-center text-lg-end">
            <motion.div
              className="hero-image-wrapper"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}back_image.png`}
                alt="Ankit Yadav - Full Stack Developer"
                className="hero-image"
                loading="eager"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;