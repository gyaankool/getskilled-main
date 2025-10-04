import React, { useState, useEffect } from 'react';
import person3 from '../assets/person3.jpg';
const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('slides passing form parent',slides)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleBarClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-[28rem] h-[30rem] relative overflow-hidden md:w-full md:h-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image || person3}
            alt={slide.alt}
            // className="w-full h-full object-cover object-left rounded-xl md:h-[23rem] md:w-[95%] md:mx-auto"
            className="w-full h-full object-contain rounded-xl  z-10"          
            />
          <div className="absolute bottom-0 right-4 bg-transparent p-4 w-[90%] md:w-[80%]">
            <p className="text-white text-sm font-normal md:text-xs">"{slide.quote}"</p>
            <p className="text-white text-xs font-medium italic text-right mt-2 md:text-[0.6rem]">
              — {slide.author}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute top-2 left-[80%] transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-8 h-1 cursor-pointer transition-colors duration-300 md:w-6 md:h-0.5 ${
              index === currentIndex ? 'bg-green-600' : 'bg-gray-400'
            }`}
            onClick={() => handleBarClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;