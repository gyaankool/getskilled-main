import React from 'react'
import AIInterviewTrusted from './AIInterviewTrusted';

const AIInterviewHero = () => {
  return (
    <div className='bg-custom-gradient py-14'>
    <section className="hero-section flex flex-col md:flex-row justify-between items-center px-4 md:px-[7.5rem] pt-10 gap-12 md:gap-[3rem]">
      <div className="hero-left flex-1 max-w-[550px] text-left">
        <p className="breadcrumb text-[0.85rem] text-gray-500 mb-6">Get Skilled &gt; AI Interview Preparation</p>
        <h1 className="text-[1.3rem] md:text-[2.5rem] font-bold leading-[140%] mb-4 w-[89%] md:w-auto">
          Turn Dreams into Offers <br />
          with <span className="highlight text-[#2e8b57]">Smarter Interview </span>Prep.
        </h1>
        <p className="subtext text-[0.9rem] md:text-base text-gray-600 mb-6 leading-[160%] w-[90%] md:w-auto">
          Experience personalized mock interviews, real-time feedback, and actionable insights to ace your next job interview.
        </p>
        <button className="cta-button-main bg-[#16A34A] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2">
          Start Your Prep Now <span className="arrow">→</span>
        </button>
        <div className="students-reached flex items-center gap-0 mt-4 ml-0">
          <img src="/assets/students.svg" alt="students avatars" className="w-20 md:w-[5rem] rounded-full" />
          <span className="students-text text-[#3dbb5d] font-medium text-[0.95rem]">5k+ Students Reached</span>
        </div>
      </div>
      <div className="hero-right hidden md:flex justify-center flex-1">
        <div className="video-mockup max-w-[580px]">
          <img src="/assets/video.svg" alt="dashboard mockup" className="w-full rounded-[20px]" />
        </div>
      </div>
    </section>
    <AIInterviewTrusted/>
  </div>
  );
}

export default AIInterviewHero