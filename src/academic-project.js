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
      image: 'https://media.discordapp.net/attachments/769586344774336552/1174161905133301821/image.png?ex=6566967d&is=6554217d&hm=7235ab7224cabb14976c55b18869ffb0665a8c501919df526227b536cb7643df&=&width=367&height=157',
      prjLink: 'https://github.com/prwthub/project_foodwebboard'
    },
    {
      id: 2,
      name: 'React Practice',
      description: 'A simple foot-in-the-door for React Native!',
      image: 'https://media.discordapp.net/attachments/769586344774336552/1174161943670562907/image.png?ex=65669686&is=65542186&hm=1f5996db9d1b0f3d007319f6618e14bb431720a276f58a0e6e53f35355147b6f&=&width=368&height=152',
      prjLink: 'https://github.com/Appeleus/app1'
    },
    {
      id: 3,
      name: 'Bank management',
      description: 'A banking system simulated in Java',
      image: 'https://media.discordapp.net/attachments/769586344774336552/1174161996955004998/image.png?ex=65669692&is=65542192&hm=2e40eee3aa10714b6feeed6762d2bea9ef9b75c7262d0eef274fd0dbec4ca48f&=&width=370&height=133',
      prjLink: 'https://github.com/Appeleus/GPTBankAcc'
    },
    {
      id: 4,
      name: 'React Quiz Workshop',
      description: 'Simple React Quiz App! Just like Kahoot',
      image: 'https://media.discordapp.net/attachments/769586344774336552/1174162023425265714/image.png?ex=65669699&is=65542199&hm=2cd0ba449a9c8a8b26ee102044cbb3aeddb8a7e3a2637367c89771e5c771f2dc&=&width=366&height=129',
      prjLink: 'https://github.com/Appeleus/React-Workshop'
    },
    {
      id: 5,
      name: 'Webboard with PHP and Bootstrap',
      description: 'An ancestor of Project Food webboard',
      image: 'https://media.discordapp.net/attachments/769586344774336552/1174162057160040558/image.png?ex=656696a1&is=655421a1&hm=cf28eaf4f91972e13d9ecab0eef3df6593d4263c0b7b15e9fe51f72e6beef9af&=&width=370&height=116',
      prjLink: 'https://github.com/Appeleus/PhantripxBootstrap'
    },
    {
      id: 6,
      name: 'More projects are coming!',
      description: 'There is this application called "Perforkid" but its repository is privated right now so it simply cannot be showed here, and also dealing with scroll event is my god so much - Delicious Apple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png',
      prjLink: ''
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
    document.title = `Project✨`;
  }, [currentProjectIndex]);

  return (

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
            <a href={project.prjLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`Project ${index + 1}`} />
            </a>
            <h2>{project.name}</h2>
            <p>{project.description}</p>

            {/* Overlay for next/previous cards */}
            {index === currentProjectIndex - 1 && (
              <div className="overlay previous">
                <img src={projects[index].image} alt={`Project ${index}`} />
              </div>
            )}

            {index === currentProjectIndex + 1 && (
              <div className="overlay next">

                <img src={projects[index].image} alt={`Project ${index}`} />

              </div>
            )}
          </div>
        ))}
        <Footer />
      </div>

    </div>
  );
};

export default AcademicProject;