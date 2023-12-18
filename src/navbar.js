// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './navbar.css';
import Home from './home';
import AcademicProject from './academic-project';
import Animation from './animation';
import PageTransition from './page-transition';
import Illustration from './illustration';
import Resume from './resume';

const Navbar = () => {

  const [selectedItem, setSelectedItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isProject = location.pathname === '/academicProject';
  const isAnimation = location.pathname === '/animation';
  const isIllustration = location.pathname === '/illustration';
  const isHome = location.pathname === '/home' || location.pathname === '/';
  const isResume = location.pathname === '/resume';

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      console.log(scrolled);
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} 
                              ${isProject ? 'project' : ''}
                              ${isAnimation ? 'animation' : ''}
                              ${isIllustration ? 'illustration' : ''}
                              ${isHome ? 'Home' : ''}
                              ${isResume ? 'resume' : ''}`}>
        <ul>
          <li
            className={`col-4 ${selectedItem === 'Home' ? 'selected' : ''}`}
            onClick={() => handleItemClick('Home')}
          >
            <NavLink to="/home">Home</NavLink>
          </li>
          <li
            className={`col-4 ${selectedItem === 'academicProject' ? 'selected' : ''}`}
            onClick={() => handleItemClick('academicProject')}
          >
            <NavLink to="/academicProject">Project</NavLink>
          </li>
          <li className="has-submenu col-4">
            Hobby
            <ul className="submenu">
            <li
                className={selectedItem === 'Animation' ? 'selected' : ''}
                onClick={() => handleItemClick('Animation')}
              >
                <NavLink to="/animation">Animation</NavLink>
              </li>
              <li
                className={selectedItem === 'Illustration' ? 'selected' : ''}
                onClick={() => handleItemClick('Illustration')}
              >
                <NavLink to="/illustration">Illustration</NavLink>
              </li>
              <li
                className={selectedItem === 'Resume' ? 'selected' : ''}
                onClick={() => handleItemClick('Resume')}
              >
                <NavLink to="/resume">Resume</NavLink>
              </li>
              {/* <li
                className={selectedItem === 'Instrument' ? 'selected' : ''}
                onClick={() => handleItemClick('Instrument')}
              >
                <NavLink to="/instrument">
                  Instrument
                </NavLink>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/academicProject" element={<PageTransition><AcademicProject /></PageTransition>} />
        <Route path="/animation" element={<PageTransition><Animation /></PageTransition>} />
        <Route path="/illustration" element={<PageTransition><Illustration /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        {/* <Route path="/instrument" element={<PageTransition><Home /></PageTransition>} /> */}
      </Routes>
    </>
  );
};

export default Navbar;
