import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works px-4 md:px-28 py-16 text-center">
      <div className="how-it-works-header">
        <span className="section-tag bg-[#e6f4ec] text-[#2e8b57] text-base tracking-wider px-3 py-1 rounded-full font-semibold mb-4 inline-block">
          HOW IT WORKS
        </span>
        <h2 className="text-[1.3rem] lg:text-4xl font-bold mb-2">
          Your Interview Success, <span className="highlight text-[#2e8b57]">Simplified</span>.
        </h2>
        <p className="subtext text-[0.9rem] lg:text-lg text-gray-600 max-w-[600px] mx-auto mb-8">
          From setting goals to acing mock interviews — 3 easy steps to become job-ready.
        </p>
      </div>
      <div className="how-it-works-content bg-[#151515] rounded-3xl flex flex-col md:flex-row justify-between items-stretch px-4 md:pl-16 md:pr-0 py-4 md:py-16 mt-8 gap-8">
        <div className="steps flex-1 text-white text-left flex flex-col justify-between">
          <div className="step border-l-2 border-[#444] pl-4 mb-6 active:border-l-[3px] active:border-[#3dbb5d]">
            <h3 className="text-base md:text-lg font-semibold mb-2">Choose Your Interview Type</h3>
            <p className="text-[0.8rem] md:text-sm text-gray-300">
              Pick how you want to be assessed — with your Resume, Job Description, Both, or a Custom Report. We tailor the questions based on what you select, ensuring every mock feels real.
            </p>
          </div>
          <div className="step border-l-2 border-[#444] pl-4 mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2">Customize Your Interview</h3>
          </div>
          <div className="step border-l-2 border-[#444] pl-4 mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-2">Upload & Start Practicing</h3>
          </div>
          <button className="cta-button bg-[#3dbb5d] text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base w-fit">
            Start Preparing Now →
          </button>
        </div>
        <div className="step-image hidden lg:flex flex-1 justify-center items-center">
          <img src="/assets/steps.svg" alt="Step illustration" className="max-w-full rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;