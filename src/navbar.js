// Navbar.js
import React, { useState, useEffect } from 'react';
import './navbar.css';


const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
    
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <ul>
        <li
          className={selectedItem === 'Home' ? 'selected' : ''}
          onClick={() => handleItemClick('Home')}
        >
          Home
        </li>
        <li
          className={selectedItem === 'Past Projects' ? 'selected' : ''}
          onClick={() => handleItemClick('Past Projects')}
        >
          Past Projects
        </li>
        <li className="has-submenu">
          Hobbies
          <ul className="submenu">
            <li
              className={selectedItem === 'Animations' ? 'selected' : ''}
              onClick={() => handleItemClick('Animations')}
            >
              Animations
            </li>
            <li
              className={selectedItem === 'Illustration' ? 'selected' : ''}
              onClick={() => handleItemClick('Illustration')}
            >
              Illustration
            </li>
            <li
              className={selectedItem === 'Instrument' ? 'selected' : ''}
              onClick={() => handleItemClick('Instrument')}
            >
              Instrument
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;