// Home.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from './contact';

import './home.css'; // Import the corresponding CSS file
import junaiper from './asset/For_mobile_Jnp.mp4';


const Home = () => {
    const location = useLocation();
    const isHome = location.pathname === '/home' || location.pathname === '/';

    // State to control the visibility of the modal
    const [isContactOpen, setContactOpen] = useState(false);

    const openContact = () => setContactOpen(true);
    const closeContact = () => setContactOpen(false);

    const parallaxLayer = [
        {
            id: 1,
            imgPath: "./asset/Home/BGG_real_0000s_0000.png",
            speedDivider: 5,
            zIndex: 1
        },
        {
            id: 2,
            imgPath: "./asset/Home/BGG_real_0000s_0001.png",
            speedDivider: 3,
            zIndex: 2
        },
        {
            id: 3,
            imgPath: "./asset/Home/BGG_real_0000s_0002.png",
            speedDivider: 2,
            zIndex: 3
        },
        {
            id: 4,
            imgPath: "./asset/Home/BGG_real_0000s_0003.png",
            speedDivider: 1.5,
            zIndex: 4
        },
        {
            id: 5,
            imgPath: "./asset/Home/BGG_real_0000s_0004.png",
            speedDivider: 1.5,
            zIndex: 5
        },
        {
            id: 6,
            imgPath: "./asset/Home/BGG_real_0000s_0005.png",
            speedDivider: 2.5,
            zIndex: 6
        },
        {
            id: 7,
            imgPath: "./asset/Home/BGG_real_0000s_0006.png",
            speedDivider: 1,
            zIndex: 7
        },
        {
            id: 8,
            imgPath: "./asset/Home/BGG_real_0000s_0007.png",
            speedDivider: 0.5,
            zIndex: 8
        },
        {
            id: 9,
            imgPath: "./asset/Home/BGG_real_0000s_0008.png",
            speedDivider: 0.2,
            zIndex: 9
        },
        {
            id: 10,
            imgPath: "./asset/Home/BGG_real_0000s_0009.png",
            speedDivider: 2,
            zIndex: 10
        },
        {
            id: 11,
            imgPath: "./asset/Home/BGG_real_0000s_0010.png",
            speedDivider: 0.5,
            zIndex: 11
        },
        {
            id: 12,
            imgPath: "./asset/Home/BGG_real_0000s_0011.png",
            speedDivider: 1.5,
            zIndex: 12
        },
        {
            id: 13,
            imgPath: "./asset/Home/BGG_real_0000s_0012.png",
            speedDivider: 2,
            zIndex: 13
        },
        {
            id: 14,
            imgPath: "./asset/Home/BGG_real_0000s_0013.png",
            speedDivider: 1.5,
            zIndex: 14
        },
        {
            id: 15,
            imgPath: "./asset/Home/Me.png",
            speedDivider: 1,
            zIndex: 6
        },
    ]

    useEffect(() => {
        const loadImages = async () => {

            for (const layer of parallaxLayer) {
                const layerElement = document.getElementById(`layer-${layer.id}`);

                // Dynamically import the image
                try {
                    const imgModule = await import(`${layer.imgPath}`);
                    const imgSrc = imgModule.default;

                    // Update the image source
                    layerElement.src = imgSrc;
                } catch (error) {
                    console.error('Error loading image:', error);
                }
            }
        };
        loadImages();
    }, []);

    useEffect(() => {
        // Load images once when the component mounts

        const handleMouseMove = (e) => {
            const parallaxContainer = document.querySelector('.background-layer');
            const { clientX, clientY } = e;

            const centerX = parallaxContainer.offsetWidth / 2;
            const centerY = parallaxContainer.offsetHeight / 2;

            const maxRangeX = 50; // Set your maximum horizontal range
            const maxRangeY = 19; // Set your maximum vertical range

            for (const layer of parallaxLayer) {
                const layerElement = document.getElementById(`layer-${layer.id}`);
                let moveX = (clientX - centerX) / layer.speedDivider;
                let moveY = (clientY - centerY) / layer.speedDivider;

                // Limit the movement within the specified range
                moveX = Math.min(Math.max(moveX, -maxRangeX), maxRangeX);
                moveY = Math.min(Math.max(moveY, -maxRangeY), maxRangeY);

                layerElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        };

        document.title = `Home🏡`;

        const parallaxContainer = document.querySelector('.home');

        window.addEventListener("load", () => {
            console.log("page is fully loaded");
        });

        parallaxContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            parallaxContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="home">
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={junaiper} type='video/mp4' />
            </video> */}
            <div className="letterbox">
                <div className="text-inner">
                    <p>Everything designed by Delicious Apple (Got)</p>
                </div>
            </div>

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

                    <div className="circle" onClick={openContact}>
                        <img src="https://www.svgrepo.com/show/488179/email.svg" alt="Email Logo" />
                    </div>

                </div>
            )}

            {/* Parallax Background */}
            <div className="background-container">
                <div className="background-layer"></div>

                {/* Subject Layer */}
                <div className="subject-layer">
                    {parallaxLayer.map((layer) => (
                        <img
                            key={layer.id}
                            id={`layer-${layer.id}`}
                            src={''} // Initialize with an empty string
                            alt={`Layer ${layer.id}`}
                            style={{
                                transition: `transform ${layer.speedDivider}s ease-out`,
                                position: 'absolute', // Adding position absolute
                                zIndex: layer.zIndex
                            }}
                        />
                    ))}
                </div>

            </div>

            {isContactOpen && <Contact onClose={closeContact} />}



        </div>
    );
};

export default Home;