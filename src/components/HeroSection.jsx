import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Innovate with Confidence',
    description: 'Your journey to digital excellence begins here.',
    image: 'https://cdn.pixabay.com/photo/2021/11/24/08/30/university-6820546_1280.jpg',
  },
  {
    title: 'Empowering Tomorrow',
    description: 'Build scalable, secure, and smart solutions.',
    image: 'https://cdn.pixabay.com/photo/2019/09/25/07/07/graduation-4502796_1280.jpg',
  },
  {
    title: 'Ideas into Impact',
    description: 'Let’s turn your vision into reality.',
    image: 'https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_1280.jpg',
  },
];

const variants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
};

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-primary ">
      <AnimatePresence>
        <motion.div
          key={current}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${slides[current].image})`,
            }}
          >
            <div className=' absolute w-full h-full bg-black/15 top-0 left-0 z-0 '></div>
            <div className=" bg-opacity-50 p-6 rounded-lg text-center space-y-4 px-6">
              <h1 className="text-4xl md:text-6xl font-bold">{slides[current].title}</h1>
              <p className="text-lg md:text-2xl">{slides[current].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute top-6 right-6 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border-2 ${
              current === index ? 'bg-white' : 'border-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
