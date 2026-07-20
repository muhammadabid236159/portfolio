import React from 'react';
import { ReactTyped } from 'react-typed';
import Counter from './Counter';
import profileImg from '../assets/images/Profile.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <img src={profileImg} alt="Muhammad Abid" className="hero-image" />
          </div>

          <h1 className="hero-name">
            Muhammad <span className="accent">Abid</span>
          </h1>

          <div className="hero-title">
            <ReactTyped
              strings={[
                'Full Stack Web Developer',
                'React Developer',
                'UI Developer',
                'Problem Solver',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          <p className="hero-description">
            Passionate Computer Science student specializing in building modern,
            responsive web applications with React.js and cutting-edge technologies.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-accent">
              <i className="fa-solid fa-download"></i> Download CV
            </a>
            <a href="#contact" className="btn-outline-accent">
              <i className="fa-solid fa-paper-plane"></i> Hire Me
            </a>
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stat-item">
              <span className="stat-number">
                <Counter end={10} suffix="+" />
              </span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <Counter end={15} suffix="+" />
              </span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                <Counter end={2} suffix="+" />
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
