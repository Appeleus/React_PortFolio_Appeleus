// PageTransition.js

import React, { useState, useEffect } from 'react';
import './page-transition.css'; // Import your transition CSS

const PageTransition = ({ children }) => {
  const [isTransitioning, setTransitioning] = useState(true);

  useEffect(() => {
    // Set transitioning to false after the component has mounted
    setTransitioning(false);
  }, []);

  useEffect(() => {
    // Simulate a delay for the transition (adjust the duration as needed)
    const transitionTimeout = setTimeout(() => {
      setTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, []);

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
