import React from 'react';

// Hero Component
const Hero = () => (
      <div className="bg-custom-gradient pb-20">
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-28 gap-8 ">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-green-500">Skill Revolution</span> Begins Here
          </h1>
          <p className="text-base mb-8 max-w-xl">
            At GetSkilled, we don't teach for exams. We teach for life. Real-world projects, research-backed curriculum, and a 'learn by doing' mindset – everything we do is designed to help you build skills that matter.
          </p>
          <div className="space-y-4 mb-8">
            {['Research-Driven Curriculum', 'Learn by Doing', 'Job & Internship Support'].map((item, index) => (
              <div key={index} className="flex items-center">
                <img src="/assets/arrow-icon.svg" alt="" className="mr-3 w-6 h-6" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="technology.html" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700">
            Explore Our Programs <span className="ml-2">→</span>
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/Illustration (3).svg" alt="Illustration" className="w-120 h-120 rounded-lg" />
        </div>
      </section>
      </div>
    );


export default Hero;