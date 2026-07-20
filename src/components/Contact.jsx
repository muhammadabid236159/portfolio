import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      text: 'abid@example.com',
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      text: '+92 XXX XXXXXXX',
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Location',
      text: 'Pakistan',
    },
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Contact <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Let's work together
        </p>

        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-right">
            {contactInfo.map((info, index) => (
              <div className="contact-info-card glass-card" key={index}>
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h5 className="contact-info-title">{info.title}</h5>
                <p className="contact-info-text">{info.text}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-8" data-aos="fade-left">
            <div className="contact-form glass-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-accent">
                      <i className="fa-solid fa-paper-plane"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
