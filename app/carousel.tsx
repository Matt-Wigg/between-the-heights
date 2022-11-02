'use client';
import styles from './carousel.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://random.dog/6428de50-b94b-4b1a-9cab-63495e637daa.jpg',
  'https://random.dog/21060-3302-20249.jpg',
  'https://random.dog/cbe2f634-069b-4b49-b1ef-2cc2763b9089.jpg',
  'https://random.dog/b031bb2e-7dfa-4d76-83b7-369e2f4ff454.jpg',
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

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
    <div className={styles.container}>
      {images.map((image: string, index: number) => (
        <Image
          key={index}
          src={image}
          alt='dog'
          fill={true}
          className={index === activeIndex ? styles.active : styles.inactive}
        />
      ))}
      <div className={styles.controls}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
