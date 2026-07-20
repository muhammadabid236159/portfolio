import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const style = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(0, 180, 216, 0.3)',
    transition: 'all 0.3s ease',
    zIndex: 999,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    pointerEvents: visible ? 'auto' : 'none',
  };

  return (
    <button style={style} onClick={scrollToTop} aria-label="Scroll to top">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
