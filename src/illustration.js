// Illustration.js
import React from 'react';
import { useState, useEffect } from 'react';
import './illustration.css';
import { Footer } from './footer'

const Illustration = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const illustrations = [
        {
            id: 1,
            name: 'Death',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1110866215011881051/IMG_3050.png?ex=655dcdc8&is=654b58c8&hm=e5e6e64a67b5ede5ee72603f0a0c3d4b19045946e21199dfbb9f41a92bf40e3b&',
        },
        {
            id: 2,
            name: 'Kugo Sakamata / Gang orca',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1110866365251866686/IMG_3052.png?ex=655dcdec&is=654b58ec&hm=25a37a92249160ccebc82ad11c93e6febffb368df3b90adca6a1acac7f2470cb&',
        },
        {
            id: 3,
            name: 'Sakamata',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1122008392257507328/Sakamata_Swim_Fin.png?ex=65616cbe&is=654ef7be&hm=1cb6d730ffae77e1b0be5908d9cbee535f66cb12156feaf50885f25289b90d07&',
        },
        {
            id: 4,
            name: 'Alphonse Elric',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1110866480473575525/IMG_3054.png?ex=655dce07&is=654b5907&hm=ea40cd1230b0a39baeb6cb7c78994eb2b84c91c101f58e64ddb8ecf3ac8ad432&',
        },
        {
            id: 5,
            name: 'Magai Magado / Magnamalo',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1110866665748578395/IMG_3056.png?ex=655dce34&is=654b5934&hm=ad617cfcae90bfab4d70a39b9b7f215026b8828c9a3171edb70e515a328e9d86&',
        },
        {
            id: 6,
            name: 'Nargacuga',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1110868790717186118/Narugacurugaa-Colored.jpg?ex=655dd02e&is=654b5b2e&hm=1fdbb67f811717676c274c21b255d42c91f9bfc971e01b30cc2557bf2ac909d4&',
        },
        {
            id: 7,
            name: 'Rathalos',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.discordapp.com/attachments/1110862874164875276/1116672288633405510/Rioreusu-Finished.png?ex=6560781c&is=654e031c&hm=6500a8f94cc53c56f2a2482b0036674b268889734a524e54e7603a94bd8163f5&',
        },
        {
            id: 8,
            name: 'Fanart of "EAT"',
            description: 'Description for Image 1',
            imageUrl: 'https://pbs.twimg.com/media/F5Eva-1a0AEMZb_?format=jpg&name=4096x4096',
        },

    ];

    // Function to check if the image is ultrawide
    const isUltrawideHorizontal = (width, height) => {
        const aspectRatio = width / height;

        if (width > height) {
            return aspectRatio >= 2.33 ? 'ultrawide' : aspectRatio >= 1.77 ? 'wide' : 'square';
        } else if (height > width) {
            return aspectRatio >= 0.69 ? 'portrait' : '';
        } else {
            return 'square'; // Default case, when width and height are equal
        }
    };

    useEffect(() => {
        const imgPromises = illustrations.map((illustration) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = illustration.imageUrl;
                img.onload = resolve;
            });
        });

        Promise.all(imgPromises).then(() => {
            setImagesLoaded(true);
        });
    }, [illustrations]);


    // Function to handle image click
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    return (
            <div className="illustration-container">
                {/* Illustration grid */}
                {imagesLoaded && (
                    <div className="illustration-grid">
                        {illustrations.map((illustration) => {
                            const { id, name, imageUrl } = illustration;
                            const img = new Image();
                            img.src = imageUrl;

                            // Check if the image is ultrawide
                            const imageType = isUltrawideHorizontal(img.width, img.height);

                            return (
                                <div
                                    key={id}
                                    className={`illustration-item ${imageType} `}
                                    onClick={() => handleImageClick(imageUrl)}
                                >
                                    <img src={imageUrl} alt={name} />
                                    <div className="illustration-text">
                                        <h2>{name}</h2>
                                        {/* <p>{illustration.description}</p> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {/* Modal to display the uncut image */}
                {selectedImage && (
                    <div className={`image-modal ${selectedImage ? 'active' : ''}`} onClick={() => setSelectedImage(null)}>
                        <img src={selectedImage} alt="Full Image" />
                    </div>
                )}
                <Footer />
            </div>
    );
    
};

export default Illustration;
