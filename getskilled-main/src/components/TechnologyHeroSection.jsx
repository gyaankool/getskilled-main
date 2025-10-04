import React from 'react'
import { Link } from 'react-router-dom';

const TechnologyHeroSection = ({label1, label2, label3, image, isButton}) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-16 md:px-0 gap-10 max-w-[85rem] mx-auto">
      <div className="flex-1 text-left">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-wide">
          {label1} <br />
          <span className="text-[#16A34A]">{label2}<br /> </span>
          {label3}
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          Master Industry relevant skills with expert-led courses, real-world projects and cutting-edge curriculum. Learn by doing and stay ahead in your career.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center text-base">
            <img src="../public/assets/Icon (3).svg" alt="icon" className="h-6 mr-3" />
            <span>Research-Driven Curriculum</span>
          </div>
          <div className="flex items-center text-base">
            <img src="../public/assets/Icon (3).svg" alt="icon" className="h-6 mr-3" />
            <span>Learn by Doing</span>
          </div>
          <div className="flex items-center text-base">
            <img src="../public/assets/Icon (3).svg" alt="icon" className="h-6 mr-3" />
            <span>Job & Internship Support</span>
          </div>
        </div>
        {
          isButton? (
            <Link
               to="#explore"
               className="inline-flex items-center bg-[#16A34A] text-white px-6 py-3 rounded-md w-[14.9rem] text-base font-medium mt-4 hover:bg-[#0d9668] transition-colors"
             >
               Explore Our Programs
               <span className="ml-2">→</span>
             </Link>

          ):''
        }
      </div>
        <div className="flex-1 flex justify-center">
        <div className="  flex items-center justify-center overflow-visible">
          <img
            src={image}
            alt="Illustration"
            className="lg:w-[35rem] lg:h-[35rem] h-[23rem] w-[23rem] object-contain rounded-[0.5rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologyHeroSection