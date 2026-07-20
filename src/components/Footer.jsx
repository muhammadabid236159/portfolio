import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: 'fa-brands fa-github', href: '#', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-brand">
              Muhammad <span>Abid</span>
            </h3>
            <p className="footer-description">
              A passionate Computer Science student and Full Stack Web Developer
              dedicated to creating modern, responsive, and innovative web solutions.
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    <i className="fa-solid fa-chevron-right"></i> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4 className="footer-title">Follow Me</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  href={social.href}
                  className="social-icon"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Muhammad Abid. All Rights Reserved. Made
            with <i className="fa-solid fa-heart heart-icon"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
