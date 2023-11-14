// Home.js

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './home.css'; // Import the corresponding CSS file
import junaiper from './asset/For_mobile_Jnp.mp4';

const Home = () => {
    const location = useLocation();
    const isHome = location.pathname === '/home';

    useEffect(() => {
        const handleMouseMove = (e) => {
            const parallaxContainer = document.querySelector('.background-layer');
            const parallaxContainer2 = document.querySelector('.subject-layer');
            const { clientX, clientY } = e;

            const centerX = parallaxContainer.offsetWidth / 2;
            const centerY = parallaxContainer.offsetHeight / 2;

            const moveX = (clientX - centerX) / 100;
            const moveY = (clientY - centerY) / 100;

            const moveX2 = (clientX - centerX) / 200;
            const moveY2 = (clientY - centerY) / 200;

            parallaxContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            parallaxContainer2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        };

        const parallaxContainer = document.querySelector('.home');
        parallaxContainer.addEventListener('mousemove', handleMouseMove);
        const parallaxContainer2 = document.querySelector('.home');
        parallaxContainer2.addEventListener('mousemove', handleMouseMove);

        return () => {
            parallaxContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="home">
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={junaiper} type='video/mp4' />
            </video> */}
            {/* Parallax Background */}
            {isHome && (
                <div className="circle-row">

                    <a href="https://www.youtube.com/@TanoshiiRinko" target="_blank" rel="noopener noreferrer">
                        <div className="circle">

                            <img src="https://www.svgrepo.com/show/513089/youtube-168.svg" alt="YouTube Logo" />
                        </div>
                    </a>

                    <a href="https://twitter.com/TanoshiiRinko" target="_blank" rel="noopener noreferrer">
                        <div className="circle">
                            <img src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter Logo" />
                        </div>
                    </a>

                    <a href="https://github.com/Appeleus" target="_blank" rel="noopener noreferrer">
                        <div className="circle">
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub Logo" />
                        </div>
                    </a>

                    <div className="circle">
                        <img src="https://www.svgrepo.com/show/488179/email.svg" alt="Email Logo" />
                    </div>

                </div>
            )}

            <div className="background-container">
                <div className="background-layer"></div>
            </div>
            {/* Circles with Social Media Icons */}


            {/* Contact Information */}
            <div className="contact-info">
                <p>My Email</p>
                <p>My Discord's Username</p>
            </div>
            {/* Subject Layer */}
            <div className="subject-layer">

                <img src={require("./asset/Narga_Halloween.jpg")} alt="Front-img" />

            </div>

        </div>
    );
};

export default Home;