import React from 'react';
import '../styles/loader.css';

const Loader = ({ loading }) => {
  return (
    <div className={`loader-wrapper ${!loading ? 'loaded' : ''}`}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p className="loader-text">Muhammad Abid</p>
      </div>
    </div>
  );
};

export default Loader;
