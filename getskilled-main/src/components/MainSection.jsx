import Carousel from "./Carousel";
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import { useEffect, useState } from "react";

const MainSection = () => {
  const slides = [
    {
    //   image: '/assets/person1.jpg',
      image: person1,
      alt: 'Person 1',
      quote: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis it pharellus mollit si aliquam sit nullam neque.',
      author: 'Rohit Sharma',
    },
    {
      image: person2,
      alt: 'Person 2',
      quote: 'Dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Priya Singh',
    },
    {
      image: person3,
      alt: 'Person 3',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Anil Kumar',
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Handle navigation bar clicks
    const handleBarClick = (index) => {
        setCurrentIndex(index);
    };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-32 bg-custom-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[38rem] text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-wide">
                Discover the Perfect Course with Smart Guidance
              </h1>
              <p className="text-gray-600 text-base mt-5 mb-8 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[83%]">
                Explore diverse courses while AI-powered tools like the Roadmap Generator and Course Creator help you choose the right path—personalized to your goals!
              </p>
              <div className="flex items-center bg-white rounded-full border border-gray-400 p-2 w-full max-w-[400px] mx-auto lg:mx-0">
                <input
                  type="text"
                  placeholder="Search Courses..."
                  className="flex-1 px-4 py-2 rounded-full outline-none text-gray-500 text-base"
                />
                <button className="bg-green-600 text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 w-full">
                <span className="text-gray-600 text-xs font-semibold">Popular Searches</span>
                <div className="flex gap-2 mt-2 flex-wrap justify-center lg:justify-start">
                  {['Engineering', 'STEM', 'Commerce'].map((tag, index) => (
                    <button
                      key={index}
                      className="flex items-center bg-white border border-black rounded px-2 py-1 text-black text-xs hover:bg-green-50 hover:border-none hover:text-green-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] p-6">
              <div className="relative">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`${
                      index === currentIndex ? 'block' : 'hidden'
                    } transition-opacity duration-500`}
                  >
                    <img
                      src={slide.image}
                      alt={`Person ${index + 1}`}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-md"
                    />
                    <div className="mt-4 text-center">
                      <p className="text-gray-600 italic">"{slide.quote}"</p>
                      <p className="text-gray-800 font-semibold mt-2">
                        — {slide.author}
                      </p>
                    </div>
                  </div>
                ))}
                {/* Navigation Bars */}
                <div className="flex justify-center mt-4 gap-2">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`block w-3 h-3 rounded-full cursor-pointer transition-colors ${
                        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      onClick={() => handleBarClick(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };

  export default MainSection;