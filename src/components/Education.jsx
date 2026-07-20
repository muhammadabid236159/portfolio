import React from 'react';
import '../styles/education.css';

const Education = () => {
  const courses = [
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Database Management Systems',
    'Web Development',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence',
  ];

  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="accent">Education</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My academic background
        </p>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="education-card glass-card">
              <div className="education-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h4 className="education-degree">Bachelor of Science in Computer Science</h4>
              <p className="education-institution">University of Pakistan</p>
              <p className="education-year">
                <i className="fa-regular fa-calendar"></i> 2022 - 2026
              </p>
              <p className="education-description">
                Currently pursuing a Bachelor's degree in Computer Science with a focus on
                software development, web technologies, and artificial intelligence.
                Maintaining strong academic performance while actively working on
                real-world projects and building a professional portfolio.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="education-card glass-card">
              <div className="education-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h4 className="education-degree">Relevant Coursework</h4>
              <p className="education-institution">Key Courses & Skills</p>
              <ul className="course-list">
                {courses.map((course, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-check"></i> {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
