import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    'https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg',
    'https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg',
    'https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg'
  ]; // Replace with your image URLs

  useEffect(() => {
    // Auto slide change every 3 seconds (adjust timing as needed)
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % imageUrls.length;
      setCurrentIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, imageUrls.length]);

  return (
    <div className="carousel">
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ))}
    </div>
  );
};

export default Home;
