import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`glass-nav ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            style={{
              background: '#f5deb3',
              color: '#002b31',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.2rem'
            }}
          >
            AY
          </motion.div>
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', lineHeight: '1.1' }}>
              ANKIT YADAV
            </div>
            <span style={{ color: '#f5deb3', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Full Stack Dev
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" style={{ border: '1px solid #f5deb3', filter: 'invert(1)' }} />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="nav-link-glow">HOME</Nav.Link>
            <Nav.Link href="#about" className="nav-link-glow">ABOUT</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-glow">SKILLS</Nav.Link>
            <Nav.Link href="#achievements" className="nav-link-glow">ACHIEVEMENTS</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-glow">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;