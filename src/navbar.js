// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {

  const location = useLocation();

  // Update selectedItem based on the current page
  const getCurrentPageState = () => {
    const isHome = location.pathname === '/home' || location.pathname === '/';
    const isProject = location.pathname === '/project';
    const isAnimation = location.pathname === '/animation';
    const isIllustration = location.pathname === '/illustration';
    const isResume = location.pathname === '/resume';

    if (isHome) return 'Home';
    if (isProject) return 'Project';
    if (isAnimation) return 'Animation';
    if (isIllustration) return 'Illustration';
    if (isResume) return 'Resume';

    // Handle other cases or set a default value
    return '';
  };

  // Retrieve selectedItem from localStorage or default to current page state
  const initialSelectedItem = localStorage.getItem('selectedItem') || getCurrentPageState();

  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const [isScrolled, setIsScrolled] = useState(false);



  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      console.log(scrolled);
      setIsScrolled(scrolled);
    };

    localStorage.setItem('selectedItem', selectedItem);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedItem]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}${['Home', 'Project', 'Animation', 'Illustration', 'Resume'].find(page => location.pathname.includes(page.toLowerCase())) || ''}`}>
        <ul className={`${selectedItem.includes('Other') ? '' : 'menu-open'}`}>
          <li
            className={`${selectedItem === 'Home' ? 'selected' : ''}`}
            onClick={() => handleItemClick('Home')}
          >
            <NavLink to="/home">Home</NavLink>
          </li>
          <li
            className={selectedItem === 'Resume' ? 'selected' : ''}
            onClick={() => handleItemClick('Resume')}
          >
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li
            className={`${selectedItem === 'Project' ? 'selected' : ''}`}
            onClick={() => handleItemClick('Project')}
          >
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li
            className={`${selectedItem === '' ? 'menu-open' : ''}`}
            onClick={() => handleItemClick(`Other ${getCurrentPageState()}`)}
          >
            Other
          </li>
        </ul>

        <ul className={`navbar submenu ${selectedItem === `Other ${getCurrentPageState()}` ? 'menu-open' : ''}`}
        >
          <li className="arrow-left" onClick={() => handleItemClick(getCurrentPageState)}></li>
          <li
            className={selectedItem === 'Other Animation' ? 'selected' : ''}
            onClick={() => handleItemClick('Animation')}
          >
            <NavLink to="/animation">Animation</NavLink>
          </li>
          <li
            className={selectedItem === 'Other Illustration' ? 'selected' : ''}
            onClick={() => handleItemClick('Illustration')}
          >
            <NavLink to="/illustration">Illustration</NavLink>
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
      </nav>

    </>
  );
};

export default Navbar;
