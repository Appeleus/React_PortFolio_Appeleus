// academic-project.js

import React, { useState, useEffect, useRef } from 'react';
import './academic-project.css';
import { Footer } from './footer'

const AcademicProject = () => {

  const cardWrapperRef = useRef(null);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [scrollingFromClick, setScrollingFromClick] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Project Food webboard',
      description: 'A Project Food Community Webboard',
      image: null,
      prjLink: 'https://github.com/prwthub/project_foodwebboard'
    },
    {
      id: 2,
      name: 'React Practice',
      description: 'A simple foot-in-the-door for React Native!',
      image: null,
      prjLink: 'https://github.com/Appeleus/app1'
    },
    {
      id: 3,
      name: 'Bank Manage System',
      description: 'A banking system simulated in Java',
      image: null,
      prjLink: 'https://github.com/Appeleus/GPTBankAcc'
    },
    {
      id: 4,
      name: 'React Quiz Workshop',
      description: 'Simple React Quiz App! Just like Kahoot',
      image: null,
      prjLink: 'https://github.com/Appeleus/React-Workshop'
    },
    {
      id: 5,
      name: 'Webboard with PHP and Bootstrap',
      description: 'An ancestor of Project Food webboard',
      image: null,
      prjLink: 'https://github.com/Appeleus/PhantripxBootstrap'
    },
    {
      id: 6,
      name: 'Web Application for Kindergarten Data Management and Mobile Application for School Bus Tracking and Parent Card System',
      description: "A Bachelor's Degree final project. An ultimate Bus tracking system for user and School data management for Admin-side website.",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png',
      prjLink: 'https://github.com/prwthub/project_childcare_mobileapp'
    },
    // Add more projects as needed
  ];

  const handleArrowClick = (direction) => {
    if (scrollingFromClick) {
      return; // Don't initiate a new scroll if scrolling from a manual card click
    }

    const container = document.querySelector('.project-card-container');
    const newIndex =
      direction === 'up'
        ? Math.max(currentProjectIndex - 1, 0)
        : Math.min(currentProjectIndex + 1, projects.length - 1);

    setCurrentProjectIndex(newIndex);

    container.scrollTo({
      top: newIndex * window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const container = document.querySelector('.project-card-container');
    const scrollTop = container.scrollTop;
    const totalHeight = container.scrollHeight - window.innerHeight;
    const normalizedScroll = totalHeight === 0 ? 0 : scrollTop / totalHeight;
    const newIndex = Math.round(normalizedScroll * (projects.length - 1));



    setCurrentProjectIndex(newIndex);

    // const windowHeight = window.innerHeight;
    // console.log('Scroll Top:', scrollTop);
    // console.log('Window Height:', windowHeight);

    if (!scrollingFromClick) {
      setCurrentProjectIndex(newIndex);
    }
  };

  // const cardContainerStyle = {
  //   transform: `translateY(-${currentProjectIndex * 16.5}%)`, // Adjust the width percentage as needed
  // };



  const navigateToIndex = (index) => {
    setScrollingFromClick(true);
    setCurrentProjectIndex(index);

    const container = cardWrapperRef.current;
    const cardHeight = container.clientHeight;
    const startOffset = cardHeight / 2;
    const endOffset = cardHeight / 2;
    const scrollToY = index * cardHeight + startOffset;

    container.scrollTo({
      top: scrollToY,
      behavior: 'smooth',
    });

    // Apply start offset
    container.scrollTop -= startOffset;

    setTimeout(() => {
      container.scrollTop += endOffset;
    }, 1000);

    setTimeout(() => {
      setScrollingFromClick(false);
    }, 2000); // Adjust the delay as needed
  };

  useEffect(() => {
    console.log('Project updated:', currentProjectIndex);
    document.title = `Academic Project✨`;
  }, [currentProjectIndex]);

  return (
<div className=''>
  <img className='overlay' src="https://lh3.googleusercontent.com/p/AF1QipNH4QwmiS5KtlEh9Am8vFvDfKUjamSE8aM7VMFW=s680-w680-h510"></img>

    <div className="card-wrapper" ref={cardWrapperRef}>

      {/* <div className='arrow-container'> */}
      {/* Up arrow */}
      {/* <div className="arrow upper" onClick={() => handleArrowClick('up')}></div> */}

      {/* Down arrow */}
      {/* <div className="arrow downer" onClick={() => handleArrowClick('down')}></div> */}
      {/* </div> */}

      {/* Project cards container */}
      <div className="project-card-container" onScroll={handleScroll} >
        <Footer />
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index === currentProjectIndex ? 'active' : ''}`}
            onClick={() => navigateToIndex(index)}
          >
            {/* Card content here */}
            <a href={project.prjLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div className="row" style={{ height: '100%', color: 'white'}}>
                <div className="col-4">
                  <h2 style={{ textAlign: 'right'}}>{project.name}</h2>
                </div>
                <div className="col-8">
                  <p style={{ textAlign: 'left' }}>{project.description}</p>
                </div>
              </div>
            </a>

            {/* Overlay for next/previous cards */}
            {index === currentProjectIndex - 1 && (
              <div className="overlay previous">

              </div>
            )}

            {index === currentProjectIndex + 1 && (
              <div className="overlay next">

              </div>
            )}
          </div>
        ))}
        <Footer />
      </div>

    </div>
    </div>
  );
};

export default AcademicProject;