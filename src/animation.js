// animation.js
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './animation.css'; // Import the corresponding CSS file

const Animation = () => {

    const images = [
        {
            id: 11,
            name: '🎃The Man He Once Was "Crow Mauler" - Fear & Hunger',
            description: '"In a blink of an eye, the man you knew and cherished, is now forever gone."',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/2475382792358753288/D55BDB24C833DDA70CCC86641FEA9F1967976119/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://www.youtube.com/watch?v=gf-yMr_QyZA'
        },
        {
            id: 10,
            name: 'Fear & Hunger - A Peculiar "Pocketcat" Encounter',
            description: '"Out of the frying pan into the fire... but this time, it could be different."',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/2396565360498455486/4850E0AF5F4F5FB97F1EAF39718F35597E98B665/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/I13vpKAeYMU?si=2-_05b0EDL1vaw5Y'
        },
        {
            id: 9,
            name: 'Afflicted Zinogre : A Perilous Pursuit',
            description: "To manipulate Qurios into not draining his blood, what kind of who knows what magic is this?",
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/2008075538205834145/FE899A20B2431A2A91BA5E04DE83DA09904CE832/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/thLzLKoA4-Y?si=cXxXgze1aJhENSAn'
        },
        {
            id: 8,
            name: 'Gentleman Zinogre',
            description: 'Such an elegant, distinguished Gentleman. 💖',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1886470649509754838/45AA4DCC7A251FDED0E10EF1ACF2EE8857E0BC32/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/taHMIVuBQ1w?si=nWrhuSJDiSTJoO_T'
        },
        {
            id: 7,
            name: "Sergeant Killer Whale's brief respite",
            description: "He isn't just your typical killer whale, be mindful🌸",
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1923617670561153456/DFE38AD50E5F0A4A4CF91AF40F0D8611AD1E3E44/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/kK5qyWLE2RA?si=h3iCx0wCqqB8sn7o'
        },
        {
            id: 6,
            name: "Decidueye's Technique Mastering Session",
            description: '"Calm your mind, accuracy is key." While he tried his best to get the right aiming technique.',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1840291542168094153/4DC5B30898C160EE19DE1D9BCABD7324CBB7A4FC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/Yb9pYgMg4mQ?si=qUPq7fIQUYKvJsto'
        },
        {
            id: 5,
            name: "Gang Orca : Miscalculated Assessment",
            description: '"Never underestimate.. hmph." As Kugo Sakamata sits, thinking about the final exam earlier..',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1836907502910206575/244D917C0FBCD7658EB2A0D8497E13227C7AE2EB/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/JRRuBxnbDuw?si=9amy1s_TRnUN4Eni'
        },
        {
            id: 4,
            name: 'Sounds Of Silence .~ Deemo ~.',
            description: '♫..♪.♪.... ~',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1847036878679457264/21AF43CBD9F4EF450F38D0708A079631A8B09F50/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/VhtuA4U_vPE?si=10R9qVgcLkwZGOTe'
        },
        {
            id: 3,
            name: 'The exceptional detective "Garchomp"',
            description: "He knows what he's doing, but he likes to ask questions later after he destroyed the suspect.",
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1849286448592365249/9907D4A9E70B85A66D5FDB5B47978D6A0D2A3AEC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/vi7Q9Wq7nvw?si=8ge1USd2f3jS9VfH'
        },
        {
            id: 2,
            name: 'Lance & Rott : Holiday sunbathe',
            description: 'Ah, what a way to spend time with your brother ~~',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1680393865563189783/881BAB2813235B33494E55766C78B082EBD7510E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/S8xsbazA7mo?si=VLiJy_FV50Kn1XP1'
        },
        {
            id: 1,
            name: 'Knights college (Variation) - Library time with the elite novelist..?',
            description: 'His passion is more than just an act.',
            imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1797476900768185888/4475C76EEB85CAE9764E70FFE3DDAAB32D0A96E2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            videoLink: 'https://youtu.be/xhcA0e06wcQ?si=FAohVnjmL9KmONzY'
        }
        // Add more images as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const navigateToIndex = (index) => {
        setCurrentImageIndex(() => Math.max(0, Math.min(index, images.length - 1)));
    };

    const handleArrowClick = (direction) => {
        const newIndex = direction === 'up' ? currentImageIndex - 1 : currentImageIndex + 1;
        navigateToIndex(newIndex);
        if (direction === 'up' && currentImageIndex == 0) {
            navigateToIndex(images.length);
        } else if (direction === 'down' && (currentImageIndex == images.length - 1)) {
            navigateToIndex(0);
        }
    };

    const handleDotClick = (index) => {
        navigateToIndex(index);
    };

    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            handleArrowClick('down');
        } else {
            handleArrowClick('up');
        }
    };

    const handleTouchStart = (event) => {
        setTouchStart({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    };

    const handleTouchMove = (event) => {
        const touchEnd = { x: event.touches[0].clientX, y: event.touches[0].clientY };

        // Calculate the distance between starting and ending points
        const touchDiffX = touchEnd.x - touchStart.x;
        const touchDiffY = touchEnd.y - touchStart.y;
        const touchDistance = Math.sqrt(touchDiffX ** 2 + touchDiffY ** 2);

        const threshold = window.innerHeight / 8;
        console.log(touchDistance);

        if (touchDistance > threshold) {
            if (touchDiffY > 0) {
                handleArrowClick('up');
            } else {
                handleArrowClick('down');
            }
            // Reset touchStart to avoid continuous swiping
            setTouchStart(touchEnd);
        }
    };


    useEffect(() => {
        console.log('State updated:', currentImageIndex);
        document.title = `Animation💻`;
    }, [currentImageIndex]);

    return (
        <div className="card card-container">
            <div
                className="animation-container"
                onWheel={handleScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {/* Up arrow */}
                <div className="arrow up" onClick={() => handleArrowClick('up')}></div>



                {/* Dot navigation */}
                <div className="dot-navigation">
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>

                {/* Image stack */}
                <div className="image-stack" style={{ overflow: 'hidden' }}>
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`image ${index === currentImageIndex ? 'top' : ''}`}
                        >
                            <div className="bg-open-link">
                                <a href={image.videoLink} target="_blank" rel="noopener noreferrer">Open</a>
                            </div>
                            <img src={image.imageUrl} alt={`Image ${index + 1}`} />

                            <div className="image-text">
                                <h2>{image.name}</h2>
                                <p>{image.description}</p>
                            </div>

                        </div>
                    ))}

                </div>
                {/* Down arrow */}
                <div className="arrow down align-items-end" style={{ bottom: '60px' }} onClick={() => handleArrowClick('down')}></div>
            </div>
        </div>



    );
};

export default Animation;
