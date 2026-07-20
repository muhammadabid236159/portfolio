import React, { useEffect, useRef, useState } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-solid fa-code',
      skills: [
        { name: 'HTML', percentage: 95, icon: 'fa-brands fa-html5' },
        { name: 'CSS', percentage: 90, icon: 'fa-brands fa-css3-alt' },
        { name: 'JavaScript', percentage: 85, icon: 'fa-brands fa-js' },
        { name: 'Bootstrap', percentage: 90, icon: 'fa-brands fa-bootstrap' },
        { name: 'React', percentage: 80, icon: 'fa-brands fa-react' },
      ],
    },
    {
      title: 'Programming',
      icon: 'fa-solid fa-laptop-code',
      skills: [
        { name: 'Python', percentage: 80, icon: 'fa-brands fa-python' },
        { name: 'C++', percentage: 75, icon: 'fa-solid fa-c' },
        { name: 'Java', percentage: 70, icon: 'fa-brands fa-java' },
      ],
    },
    {
      title: 'Database',
      icon: 'fa-solid fa-database',
      skills: [
        { name: 'MySQL', percentage: 75, icon: 'fa-solid fa-database' },
      ],
    },
    {
      title: 'Tools',
      icon: 'fa-solid fa-tools',
      skills: [
        { name: 'Git', percentage: 80, icon: 'fa-brands fa-git-alt' },
        { name: 'GitHub', percentage: 85, icon: 'fa-brands fa-github' },
        { name: 'VS Code', percentage: 90, icon: 'fa-solid fa-code' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Skills</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Technologies and tools I work with
        </p>

        <div className="row">
          {skillCategories.map((category, catIndex) => (
            <div className="col-lg-6" key={catIndex} data-aos="fade-up" data-aos-delay={catIndex * 100}>
              <div className="glass-card skill-category">
                <h4 className="skill-category-title">
                  <i className={category.icon}></i> {category.title}
                </h4>
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">
                        <i className={skill.icon}></i> {skill.name}
                      </span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${animate ? 'animate' : ''}`}
                        style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
