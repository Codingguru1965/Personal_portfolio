import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';

const projects = [
  {
    title: 'GrandLuxe — Hotel Management System',
    description:
      'An enterprise-grade Full Stack Hotel & Resort Management platform featuring guest reservations, double-booking prevention engine, Front Desk operations, housekeeping Kanban workflow, and Executive BI analytics.',
    image: `${import.meta.env.BASE_URL}projects/hotel-management.svg`,
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT & RBAC',
      'Recharts'
    ],
    primaryAction: {
      label: 'Live Demo',
      url: 'https://hotel-management-system-delta-five.vercel.app/',
      icon: <FaGithub size={14} />
    }
  },
  {
    title: 'coding-validation-hook-form (NPM Package)',
    description:
      'A published, lightweight TypeScript validation library for React Hook Form and Yup schema validation. Features 43+ built-in validators for Indian Mobile, PAN, GSTIN, IFSC, password strength, and input sanitization.',
    image: `${import.meta.env.BASE_URL}projects/npm-package.svg`,
    technologies: [
      'TypeScript',
      'NPM Package',
      'React Hook Form',
      'Yup',
      'tsup',
      'Vitest'
    ],
    primaryAction: {
      label: 'View on npm',
      url: 'https://www.npmjs.com/package/coding-validation-hook-form',
      icon: <SiNpm size={15} />
    },
    secondaryAction: {
      label: 'GitHub',
      url: 'https://github.com/Codingguru1965/coding-validation-hook-form',
      icon: <FaGithub size={14} />
    }
  },
  {
    title: 'RecruiteX — Job & Hiring Portal',
    description:
      'A comprehensive Full Stack Recruitment & Job Portal application featuring role-based workflows, job postings, applicant management, and scalable backend REST APIs.',
    image: `${import.meta.env.BASE_URL}projects/recruitex.svg`,
    technologies: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'REST APIs'
    ],
    primaryAction: {
      label: 'GitHub Repo',
      url: 'https://github.com/Codingguru1965/RecruiteX',
      icon: <FaGithub size={14} />
    }
  },
  {
    title: 'WildGuard — Wildlife Conservation',
    description:
      'A modern and responsive single-page web application focused on wildlife conservation and environmental awareness, featuring dynamic showcases and mobile-first design.',
    image: `${import.meta.env.BASE_URL}projects/wildguard.svg`,
    technologies: [
      'React.js',
      'JavaScript',
      'CSS3',
      'React-Bootstrap',
      'React Icons',
      'Vite'
    ],
    primaryAction: {
      label: 'Live Demo',
      url: 'https://ankit-wildguard.netlify.app/',
      icon: <FaExternalLinkAlt size={12} />
    },
    secondaryAction: {
      label: 'GitHub',
      url: 'https://github.com/Codingguru1965/Wildguard',
      icon: <FaGithub size={14} />
    }
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <div className="section-header text-center">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-desc">
            Real-world full stack applications, published open-source npm packages, and responsive web platforms.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {projects.map((project, idx) => (
            <Col lg={6} md={12} key={idx}>
              <div className="project-card">
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.technologies.map((tech, tIdx) => (
                      <span className="tech-badge" key={tIdx}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions mt-auto">
                    {project.primaryAction && (
                      <a
                        href={project.primaryAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-custom"
                        aria-label={`Open ${project.primaryAction.label} for ${project.title}`}
                      >
                        {project.primaryAction.icon}
                        <span>{project.primaryAction.label}</span>
                      </a>
                    )}

                    {project.secondaryAction && (
                      <a
                        href={project.secondaryAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary-custom"
                        aria-label={`Open ${project.secondaryAction.label} for ${project.title}`}
                      >
                        {project.secondaryAction.icon}
                        <span>{project.secondaryAction.label}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
