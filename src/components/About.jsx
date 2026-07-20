import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Get to know me better
        </p>

        <div className="row align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img src={profileImg} alt="Muhammad Abid" className="about-image" />
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="about-text">
              <h3>I'm Muhammad Abid</h3>
              <p>
                I am a passionate BS Computer Science student with a strong foundation
                in web development and programming. I love creating modern, responsive,
                and user-friendly web applications that make a difference. My journey in
                tech started with curiosity and has grown into a deep passion for
                building innovative solutions.
              </p>
              <p>
                My career objective is to leverage my skills in web development and
                software engineering to contribute to impactful projects. I am eager to
                join a dynamic team where I can apply my knowledge, learn from
                experienced professionals, and grow as a developer.
              </p>

              <div className="about-info">
                <div className="about-info-item">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <span>BS Computer Science</span>
                </div>
                <div className="about-info-item">
                  <i className="fa-solid fa-code"></i>
                  <span>Full Stack Developer</span>
                </div>
                <div className="about-info-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Pakistan</span>
                </div>
                <div className="about-info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>abid@example.com</span>
                </div>
              </div>

              <a href="#contact" className="btn-accent" style={{ marginTop: '20px' }}>
                <i className="fa-solid fa-paper-plane"></i> Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
