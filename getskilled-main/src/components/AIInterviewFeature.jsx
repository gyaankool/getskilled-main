import React from 'react'

const AIInterviewFeature = () => {
   return (
    <section className="features-section bg-[#eaffef] py-12 md:py-16 text-center">
      <span className="section-tag bg-[#d7f0e2] text-[#2e8b57] text-xs md:text-sm px-3 py-1 rounded-full font-semibold mb-4 inline-block">
        WHY CHOOSE US
      </span>
      <h2 className="text-[1.3rem] md:text-4xl font-bold mb-2">
        <span className="highlight text-[#2e8b57]">Why Settle</span> for Traditional Prep?
      </h2>
      <p className="subtitle text-[0.9rem] md:text-lg text-gray-600 mb-8 max-w-[700px] mx-auto">
        When You Can Go Future-Ready?
      </p>
      <div className='grid justify-center items-center'>
      <div className="feature-cards flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-0">
        <div className="feature-card-why bg-gradient-to-b from-[#F1FFF7] to-white border-[10px] border-white rounded-2xl p-6 md:p-8 flex-1 max-w-[450px] text-left">
          <img src="/assets/personalized.svg" alt="Personalized Icon" className="icon w-8 md:w-10 mb-6 md:mb-8" />
          <h3 className="text-base md:text-lg font-semibold mb-4">Personalized Experience</h3>
          <p className="text-[0.85rem] md:text-sm text-gray-600 leading-6">
            Our AI adapts to your responses, ensuring each session is tailored to your needs.
          </p>
        </div>
        <div className="feature-card-why bg-gradient-to-b from-[#F1FFF7] to-white border-[10px] border-white rounded-2xl p-6 md:p-8 flex-1 max-w-[450px] text-left">
          <img src="/assets/analytics.svg" alt="Analytics Icon" className="icon w-8 md:w-10 mb-6 md:mb-8" />
          <h3 className="text-base md:text-lg font-semibold mb-4">Real-Time Analytics</h3>
          <p className="text-[0.85rem] md:text-sm text-gray-600 leading-6">
            Gain insights into your performance metrics instantly.
          </p>
        </div>
        <div className="feature-card-why bg-gradient-to-b from-[#F1FFF7] to-white border-[10px] border-white rounded-2xl p-6 md:p-8 flex-1 max-w-[450px] text-left">
          <img src="/assets/comphresive.svg" alt="Comprehensive Icon" className="icon w-8 md:w-10 mb-6 md:mb-8" />
          <h3 className="text-base md:text-lg font-semibold mb-4">Comprehensive Preparation</h3>
          <p className="text-[0.85rem] md:text-sm text-gray-600 leading-6">
            From technical questions to behavioral scenarios, we've got you covered.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AIInterviewFeature