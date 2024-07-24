// Illustration.js
import React from 'react';
import { useState, useEffect } from 'react';
import './illustration.css';
import { Footer } from './footer'

const Illustration = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const [illustrations, setIllustrations] = useState([
        {
            id: 1,
            name: 'Death',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:evjwlqhdix2ptj6kuee7qw55/bafkreifkn56rhswlgjducmcchbrds7zawnhv6ulekiaaznrqorjlhhd2ce@jpeg',
        },
        {
            id: 2,
            name: 'Kugo Sakamata / Gang orca',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:evjwlqhdix2ptj6kuee7qw55/bafkreids24g7ejgjtnenmh3do44y4d4b7tlfim3mszeiksjyktzufmshui@jpeg',
        },
        {
            id: 3,
            name: 'Sakamata',
            description: 'Description for Image 1',
            imageUrl: 'https://pbs.twimg.com/media/FzTTFQBaIAArnM3?format=jpg&name=4096x4096',
        },
        {
            id: 4,
            name: 'Alphonse Elric',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:evjwlqhdix2ptj6kuee7qw55/bafkreidlp3qdvrjaehru24y7mqugabqqxh7rujizqdml2me3utqax337te@jpeg',
        },
        {
            id: 5,
            name: 'Magai Magado / Magnamalo',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:evjwlqhdix2ptj6kuee7qw55/bafkreidnzwn56kekyewxzq3vja7l2sbdy5kf34l6q2agvcw6fwq5hlxxaq@jpeg',
        },
        {
            id: 6,
            name: 'Nargacuga',
            description: 'Description for Image 1',
            imageUrl: 'https://pbs.twimg.com/media/FuxlWrpaYAE-Xhd?format=jpg&name=4096x4096',
        },
        {
            id: 7,
            name: 'Rathalos',
            description: 'Description for Image 1',
            imageUrl: 'https://pbs.twimg.com/media/FyLL5K7aAAEsGE1?format=jpg&name=4096x4096',
        },
        {
            id: 8,
            name: 'Fanart of "EAT"',
            description: 'Description for Image 1',
            imageUrl: 'https://pbs.twimg.com/media/F5Eva-1a0AEMZb_?format=jpg&name=4096x4096',
        },
        {
            id: 9,
            name: 'Q u a s o',
            description: 'Description for Image 1',
            imageUrl: 'https://cdn.bsky.app/img/avatar/plain/did:plc:evjwlqhdix2ptj6kuee7qw55/bafkreibamggjamswk4hxxw3bjwnt3viryekheidyjqbbivnp7ur2xivkwy@jpeg',
        },
        {
          id: 10,
          name: 'Samurai Zinogre',
          description: 'Description for Image 1',
          imageUrl: 'https://pbs.twimg.com/media/GKZ-ZEjbAAA09Iv?format=jpg',
      },
      {
        id: 11,
        name: 'Nargacuga Doodle',
        description: 'Description for Image 1',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/personalwebport.appspot.com/o/NargaFHD.png?alt=media&token=04b3c2d4-1f24-4301-bb99-7801d0164502',
    },
    {
    id: 12,
    name: 'Gore Magala',
    description: 'Description for Image 1',
    imageUrl: 'https://pbs.twimg.com/media/GRAUY3kbMAAB3nG?format=jpg',
}
      
    ]);

    const isUltrawideHorizontal = (img) => {
        const aspectRatio = img.width / img.height;

        if (aspectRatio >= 2.33) {
            return 'ultrawide';
        } else if (aspectRatio >= 1.77) {
            return 'wide';
        } else if (aspectRatio >= 0.69) {
            return 'portrait';
        } else {
            return 'square'; // Default case, when width and height are equal
        }
    };

    useEffect(() => {
        document.title = 'Illustration🎨';
    
        const loadImages = async () => {
            const promises = illustrations.map((illustration) => {
              return new Promise((resolve) => {
                const img = new Image();
          
                // Set up an event listener for the load event
                img.onload = () => {
                  illustration.image = img; // Attach the loaded image to the illustration object
                  resolve();
                };
          
                // Set up an event listener for the error event (optional)
                img.onerror = (error) => {
                  console.error('Error loading image:', error);
                  resolve(); // Resolve even if there's an error
                };
          
                // Set the source after attaching the event listeners
                img.src = illustration.imageUrl;
              });
            });
          
            await Promise.all(promises);
          
            setImagesLoaded(true);
          };
    
        loadImages();
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
              {illustrations.map((illustration, index) => {
                const { name, imageUrl, image } = illustration;
                const imageType = isUltrawideHorizontal(image);
    
                return (
                  <div
                    key={index}
                    className={`illustration-item ${imageType}`}
                    onClick={() => handleImageClick(imageUrl)}
                  >
                    <img src={image.src} alt={name} />
                    <div className="illustration-text">
                      <h2>{name}</h2>
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
