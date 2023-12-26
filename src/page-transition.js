// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './page-transition.css';

const PageTransition = ({children}) => {
  const [isTransitioning, setTransitioning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const mountTimeout = setTimeout(() => {
      setTransitioning(false);
    }, 0);

    return () => {
      clearTimeout(mountTimeout);
    };
  }, []);

  useEffect(() => {
    setTransitioning(true);

    const transitionTimeout = setTimeout(() => {
      setTransitioning(false);
    }, 500);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [navigate]);

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}>{children}</div>
  );
};

export default PageTransition;
