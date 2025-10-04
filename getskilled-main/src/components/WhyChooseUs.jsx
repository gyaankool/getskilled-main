import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-8 mb-20 md:py-20 text-center bg-[#f0f9f5] ">
      <span className="section-tag bg-[#d7f0e2] text-[#2e8b57] text-xs md:text-sm px-3 py-1 rounded-full font-semibold mb-0 md:mb-4 inline-block">
        WHY CHOOSE US
      </span>
      <h2 className="text-xl md:text-4xl font-bold my-2 md:my-4 text-left md:text-center">
        Unlock the Full Power of AI with <span className="highlight text-[#2e8b57]">GetSkilled</span>
      </h2>
      <p className="subtitle text-base md:text-lg text-gray-600 mb-4 md:mb-12 max-w-[700px] mx-auto text-left md:text-center">
        From choosing the right career path to building projects that impress — learn how GetSkilled helps you at every step
      </p>
      <div className='flex justify-center'>
      <div className="feature-cards flex flex-col md:flex-row flex-wrap justify-center gap-10 px-4 md:px-0">
        <div className="feature-card bg-white p-4 md:p-8 rounded-2xl max-w-[400px] flex-1 text-left hover:shadow-lg">
          <span className="feature-tag text-[#2e8b57] text-xs md:text-sm font-semibold mb-2 block">
            PROGRAM SELECTOR
          </span>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Find Your Perfect Path</h3>
          <p className="text-lg text-gray-600 mb-4">
            Choosing the right career shouldn’t feel like guesswork. Our AI-based Program Selector matches your strengths,
            passions, and goals with the perfect learning path — so you start strong and stay ahead.
          </p>
          <button className="get-started-btn border border-[#2e8b57] text-[#2e8b57] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#2e8b57] hover:text-white">
            Get Started →
          </button>
        </div>
        <div className="feature-card bg-white p-4 md:p-8 rounded-2xl max-w-[400px] flex-1 text-left hover:shadow-lg">
          <span className="feature-tag text-[#2e8b57] text-xs md:text-sm font-semibold mb-2 block">
            ROADMAP GENERATOR
          </span>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Your Personalized Success Blueprint</h3>
          <p className="text-lg text-gray-600 mb-4">
            With our AI-powered Roadmap Generator, you’ll get a personalized, step-by-step journey designed to take you from
            beginner to expert, with milestones you can actually achieve.
          </p>
          <button className="get-started-btn border border-[#2e8b57] text-[#2e8b57] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#2e8b57] hover:text-white">
            Get Started →
          </button>
        </div>
        <div className="feature-card bg-white p-4 md:p-8 rounded-2xl max-w-[400px] flex-1 text-left hover:shadow-lg">
          <span className="feature-tag text-[#2e8b57] text-xs md:text-sm font-semibold mb-2 block">
            COURSE CREATOR
          </span>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Craft Projects That Speaks Excellence</h3>
          <p className="text-lg text-gray-600 mb-4">
            Our AI-based Course Creator helps you design real-world projects as you learn — ensuring that every skill you
            pick up turns into something you can show, share, and be proud of!
          </p>
          <button className="get-started-btn border border-[#2e8b57] text-[#2e8b57] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#2e8b57] hover:text-white">
            Get Started →
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;