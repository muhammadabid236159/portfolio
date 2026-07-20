import React from 'react';
import projectPortfolio from '../assets/images/project-portfolio.jpg';
import projectResult from '../assets/images/project-result.jpg';
import projectWeather from '../assets/images/project-weather.jpg';
import projectSupermarket from '../assets/images/project-supermarket.jpg';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive personal portfolio website built with React.js, Bootstrap 5, and AOS animations. Features dark/light mode, glassmorphism effects, and smooth scrolling.',
      tech: ['React', 'Bootstrap', 'CSS3', 'JavaScript'],
      image: projectPortfolio,
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Student Result Management System',
      description: 'A comprehensive system for managing student academic records, generating report cards, and tracking performance with data visualization.',
      tech: ['Python', 'MySQL', 'HTML', 'CSS'],
      image: projectResult,
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather App',
      description: 'A real-time weather application that displays current conditions, forecasts, and weather maps using external APIs with a clean, intuitive interface.',
      tech: ['JavaScript', 'React', 'API', 'CSS3'],
      image: projectWeather,
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Super Market Management System',
      description: 'An inventory and billing management system for supermarkets with product tracking, sales reports, and customer management features.',
      tech: ['Java', 'MySQL', 'HTML', 'CSS'],
      image: projectSupermarket,
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Projects</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Some of my recent work
        </p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card glass-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-overlay-buttons">
                      <a href={project.liveLink} className="btn-sm btn-light" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-external-link-alt"></i> Live Demo
                      </a>
                      <a href={project.githubLink} className="btn-sm btn-outline-light" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
