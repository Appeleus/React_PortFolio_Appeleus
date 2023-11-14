// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './navbar.css';
import Home from './home';
import AcademicProject from './academic-project';
import Animation from './animation';
import PageTransition from './page-transition';

const Navbar = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isAnimation = location.pathname === '/animation';

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isAnimation ? 'animation' : ''}`}>
        <ul>
          <li
            className={selectedItem === 'Home' ? 'selected' : ''}
            onClick={() => handleItemClick('Home')}
          >
            <NavLink to="/home">Home</NavLink>
          </li>
          <li
            className={selectedItem === 'Academic Projects' ? 'selected' : ''}
            onClick={() => handleItemClick('Academic Projects')}
          >
            <NavLink to="/academicProject">Academic Projects</NavLink>
          </li>
          <li className="has-submenu">
            Hobbies
            <ul className="submenu">
            <li
                className={selectedItem === 'Animation' ? 'selected' : ''}
                onClick={() => handleItemClick('Animation')}
              >
                <NavLink to="/animation">
                  Animation
                </NavLink>
              </li>
              <li
                className={selectedItem === 'Illustration' ? 'selected' : ''}
                onClick={() => handleItemClick('Illustration')}
              >
                <NavLink to="/illustration">
                  Illustration
                </NavLink>
              </li>
              <li
                className={selectedItem === 'Instrument' ? 'selected' : ''}
                onClick={() => handleItemClick('Instrument')}
              >
                <NavLink to="/instrument">
                  Instrument
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/academicProject" element={<PageTransition><AcademicProject /></PageTransition>} />
        <Route path="/animation" element={<PageTransition><Animation /></PageTransition>} />
        <Route path="/illustration" element={<PageTransition><AcademicProject /></PageTransition>} />
        <Route path="/instrument" element={<PageTransition><Home /></PageTransition>} />

      </Routes>
    </>
  );
};

export default Navbar;
