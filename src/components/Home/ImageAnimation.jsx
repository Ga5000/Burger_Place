import React, { useState, useEffect } from 'react';
import './styles/imgAnimation.css';

function ImageAnimation() {
  const imgSrcs = ['classic.jpg', 'bacon.jpg', 'cheddar.jpg', 'cogumelo.jpg', 'combo.jpg', 'onionRing.jpg', 'peru.jpg', 'vegan.jpg'];
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    changeImg();
    const intervalId = setInterval(changeImg, 12000);
    return () => clearInterval(intervalId);
  }, []);

  function getRandomImages(count) {
    const shuffledImages = [...imgSrcs].sort(() => Math.random() - 0.5);
    return shuffledImages.slice(0, count);
  }

  function changeImg() {
    const newSelectedImages = getRandomImages(6);
    setSelectedImages(newSelectedImages);
  }

  return (
    <div className="image-container">
      {selectedImages.map((src, index) => (
        <img key={index} className='fadingImg' src={`/imgs/${src}`} alt={`burger-img-${index}`} />
      ))}
    </div>
  );
}

export default ImageAnimation;
