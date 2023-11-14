// academic-project.js

import React, { useState, useEffect } from 'react';
import './academic-project.css'; // Import the corresponding CSS file

const AcademicProject = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description for Project 1',
      image: 'https://media.discordapp.net/attachments/735387046998179952/1168500589861294140/000009.jpg?ex=655b387a&is=6548c37a&hm=bc64e16c39ac786a6baa253d0060518758a3b77bd39b2a8bdf5eb861d5127c4b&=&width=709&height=473',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description for Project 2',
      image: 'https://images-ext-2.discordapp.net/external/rJIxuoJjpZCnS5Mu7EoYMS_mund784X4ttZx5JQPapk/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/300933528659427329/e760c0b62e3d874026381709310d2684.png?width=460&height=460',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Description for Project 3',
      image: 'https://media.discordapp.net/attachments/695188971080122449/1158759066496159975/F7g-PB-XoAAtquT.png?ex=655cb1fa&is=654a3cfa&hm=21b611e9101d48540bb1882a6af041ffb9801406ce4adedb333a64849df48b51&=&width=663&height=663',
    }
    // Add more projects as needed
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleScroll = () => {
    const container = document.querySelector('.scrollable-container');
    const cardHeight = window.innerHeight;

    // Calculate the index of the active project based on scroll position
    const newIndex = Math.round(container.scrollTop / cardHeight);

    // Update the current project index
    setCurrentProjectIndex(newIndex);

    projects.forEach((index) => {
      const card = document.querySelector(`.project-card[data-index="${index}"]`);
      const cardTop = card.offsetTop;
      const cardBottom = cardTop + card.offsetHeight;

      const isInViewport = cardTop <= window.innerHeight && cardBottom >= 0;

      if (isInViewport) {
        // Card is in the viewport, set opacity to 1
        card.style.opacity = 1;
      } else {
        // Card is not in the viewport, set opacity to 0
        card.style.opacity = 0;
      }
    });
  };

  useEffect(() => {
    // Add event listener for scroll

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects]); // Empty dependency array to run the effect only once on mount

  return (
    <div className="scrollable-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-card ${index === currentProjectIndex ? 'active' : ''}`}
          data-index={index}
        >
          <img src={project.image} alt={`Project ${index + 1}`} />
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AcademicProject;
