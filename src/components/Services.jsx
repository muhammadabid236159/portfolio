import React from 'react';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Responsive Website Development',
      description: 'Building fully responsive and mobile-friendly websites that look great on all devices using modern HTML5, CSS3, and JavaScript.',
    },
    {
      icon: 'fa-brands fa-react',
      title: 'React Web Applications',
      description: 'Developing dynamic, fast, and scalable single-page applications using React.js with modern state management and routing.',
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Landing Pages',
      description: 'Creating stunning, conversion-optimized landing pages with engaging animations, smooth scrolling, and compelling CTAs.',
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Portfolio Websites',
      description: 'Designing professional portfolio websites that showcase your skills, projects, and achievements in a visually appealing way.',
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'UI Development',
      description: 'Crafting beautiful, intuitive user interfaces with attention to detail, micro-animations, and seamless user experience.',
    },
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Services</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          What I can do for you
        </p>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card glass-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
