// animation.js
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './animation.css'; // Import the corresponding CSS file

const Animation = () => {

    const images = [
        {
            id: 1,
            name: 'Afflicted Zinogre : A Perilous Pursuit',
            description: "To manipulate Qurios into not draining his blood, what kind of who knows what magic is this?",
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173298574235287612/Zinpreview1.jpg?ex=65637272&is=6550fd72&hm=573b2bef841b64e83a105f2fefd0bc55f0e2a5ece4181cb8bc6b997604e53cfc&',
            videoLink: 'https://www.youtube.com/watch?v=thLzLKoA4-Y&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=1&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 2,
            name: 'Gentleman Zinogre',
            description: 'Such an elegant, distinguished Gentleman. 💖',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173299656529293423/Gentle_zin_pre.jpg?ex=65637374&is=6550fe74&hm=9da9971b238c0828392558cc5fc55f4cff14ec1bcb0ed2696191195b1a4df105&',
            videoLink: 'https://www.youtube.com/watch?v=taHMIVuBQ1w&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=2&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 3,
            name: "Sergeant Killer Whale's brief respite",
            description: "He isn't just your typical killer whale, be mindful🌸",
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173300798277562489/Smokin_Late_Thumbnail.png?ex=65637485&is=6550ff85&hm=688517650da9db994c19dce730b36882b870f65851e123da7388727af1fb5277&',
            videoLink: 'https://www.youtube.com/watch?v=kK5qyWLE2RA&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=3&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 4,
            name: "Decidueye's Technique Mastering Session",
            description: '"Calm your mind, accuracy is key." While he tried his best to get the right aiming technique.',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173301119829692636/Steam_thumb_Junaiper.jpg?ex=656374d1&is=6550ffd1&hm=7e555c1d4df3b02a27888fc2534692b2d1a00985629cc8defb3d6bef1daf2a17&',
            videoLink: 'https://www.youtube.com/watch?v=Yb9pYgMg4mQ&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=4&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 5,
            name: "Gang Orca : Miscalculated Assessment",
            description: '"Never underestimate.. hmph." As Kugo Sakamata sits, thinking about the final exam earlier..',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1174165872592572486/Thumbnail_steam_1_orca.jpg?ex=65669a2e&is=6554252e&hm=b699fddbbdfbe965ba8b54906584f6aab16db18b7158e4412742d9909dcd0f30&',
            videoLink: 'https://www.youtube.com/watch?v=JRRuBxnbDuw&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=5&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 6,
            name: 'Sounds Of Silence .~ Deemo ~.',
            description: '♫..♪.♪.... ~',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173301744466407506/Thumbnail_Deemo.png?ex=65637566&is=65510066&hm=bf7afea0099c9be1aef8697521ca62d98d51a0e94d163179b06291a3c8e81e61&',
            videoLink: 'https://www.youtube.com/watch?v=VhtuA4U_vPE&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=6&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 7,
            name: 'The exceptional detective "Garchomp"',
            description: "He knows what he's doing, but he likes to ask questions later after he destroyed the suspect.",
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173302737925066752/Preview_steampage_Garchomp.jpg?ex=65637653&is=65510153&hm=a78851304d60d1a263d78cc76054c8e1ec4e78ec921150835dc6582ac276eb09&',
            videoLink: 'https://www.youtube.com/watch?v=vi7Q9Wq7nvw&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=7&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 8,
            name: 'Lance & Rott : Holiday sunbathe',
            description: 'Ah, what a way to spend time with your brother ~~',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173302352527237140/Purebiiru.jpg?ex=656375f7&is=655100f7&hm=3017d485f0332d4f2d095a8fb9b6d74dd3469cf763d67525c293cf317edc082d&',
            videoLink: 'https://www.youtube.com/watch?v=S8xsbazA7mo&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=8&ab_channel=TanoshiiR1NK0'
        },
        {
            id: 9,
            name: 'Knights college (Variation) - Library time with the elite novelist..?',
            description: 'His passion is more than just an act.',
            imageUrl: 'https://cdn.discordapp.com/attachments/769586344774336552/1173303911545839657/image.png?ex=6563776b&is=6551026b&hm=01a86e9e69cca297d6050c7fb30ca93613c8bf9e4ffea8a6630078854756112b&',
            videoLink: 'https://www.youtube.com/watch?v=xhcA0e06wcQ&list=PLLsYPbgFY6Rrv2W6saVOYPpWdQ1jclYhr&index=9&ab_channel=TanoshiiR1NK0'
        }
        // Add more images as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigateToIndex = (index) => {
        setCurrentImageIndex((prevIndex) => Math.max(0, Math.min(index, images.length - 1)));
    };

    const handleArrowClick = (direction) => {
        const newIndex = direction === 'up' ? currentImageIndex - 1 : currentImageIndex + 1;
        navigateToIndex(newIndex);
    };

    const handleDotClick = (index) => {
        navigateToIndex(index);
    };

    useEffect(() => {
        console.log('State updated:', currentImageIndex);
    }, [currentImageIndex]);

    return (
        <div className="animation-container">
            {/* Up arrow */}
            <div className="arrow up" onClick={() => handleArrowClick('up')}></div>

            {/* Down arrow */}
            <div className="arrow down" onClick={() => handleArrowClick('down')}></div>

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
            <div className="image-stack">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`image ${index === currentImageIndex ? 'top' : ''}`}
                    >
                        <a href={image.videoLink} target="_blank" rel="noopener noreferrer">
                            <img src={image.imageUrl} alt={`Image ${index + 1}`} />

                            <div className="image-text">
                                <h2>{image.name}</h2>
                                <p>{image.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Animation;
