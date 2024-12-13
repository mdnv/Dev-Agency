import React from 'react';
import { motion } from 'framer-motion';
import '../components/css/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero_overlay">
        <motion.div 
          className="container_home"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero_block">
            <h1>Let’s Build Your Dream Project</h1>
            <p>Turning your ideas into reality with creativity and precision.</p>
            <motion.a 
              href="#pricing" 
              className="btn btn_gradient"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;