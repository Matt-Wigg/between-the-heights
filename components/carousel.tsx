'use client';

import { use, useState, useEffect } from 'react';

export default function ImageCarousel() {
  const [images, setImages] = useState(['https://picsum.photos/600/600']);
  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  const handleNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <img src={images[activeIndex]} />
    </div>
  );
}
