import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import './Videos.css'; // Your CSS file for styling

const Videos = () => {
  return (
    <div className="homepage">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My React App</h1>
        <p>Explore and Enjoy</p>
      </motion.div>

      <motion.div
        className="feature-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Features</h2>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Feature 1</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Feature 2</motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Feature 3</motion.li>
        </ul>
      </motion.div>

      <div className="carousel-container">
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
          <div>
            <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg" alt="Image 1" />
            <p className="legend">Caption for Image 1</p>
          </div>
          <div>
            <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg" alt="Image 2" />
            <p className="legend">Caption for Image 2</p>
          </div>
          <div>
            <img src="https://www.cambridge.org/elt/blog/wp-content/uploads/2021/04/GettyImages-1047699430-e1618396179464.jpg" alt="Image 3" />
            <p className="legend">Caption for Image 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Videos;
