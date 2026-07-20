import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      date: '2024 - Present',
      title: 'Web Development Learning',
      description: 'Started learning web development technologies including HTML, CSS, JavaScript, and modern frameworks. Building projects to solidify skills and understanding of full-stack development.',
      icon: 'fa-solid fa-code',
    },
    {
      date: '2024 - Present',
      title: 'React.js Projects',
      description: 'Developing multiple projects using React.js ecosystem, including single-page applications, portfolio websites, and interactive web applications with modern UI/UX.',
      icon: 'fa-brands fa-react',
    },
    {
      date: '2023 - 2024',
      title: 'Python & Desktop Projects',
      description: 'Built several Python-based applications including management systems, automation scripts, and data-driven projects using Python libraries and MySQL databases.',
      icon: 'fa-brands fa-python',
    },
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Experience</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My professional journey so far
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-dot">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">
                  <i className="fa-regular fa-calendar"></i> {exp.date}
                </span>
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
