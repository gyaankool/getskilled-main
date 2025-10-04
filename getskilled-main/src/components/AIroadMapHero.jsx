import React from 'react'

const AIroadMapHero = () => {
  return (
    <div className='flex justify-center my-10'>
       <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#0A8B3A] to-[#00C749] rounded-2xl p-4 md:p-8 m-4 md:mx-12 gap-4 md:gap-8 text-white max-w-5xl">
      <div className="hero-text">
        <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10">
          <span className="text-black">Get</span>Skilled
        </h2>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Your Learning, Your Way!
        </h3>
        <p className="text-sm md:text-base font-light leading-relaxed w-full md:w-3/4">
          Answer a few quick questions, and our AI will craft a step-by-step course with the best resources tailored to your learning needs!
        </p>
      </div>
      <div className="hero-image">
        <img
          src="/assets/learning_illustartion.svg"
          alt="Learning Illustration"
          className="w-32 md:w-48 h-auto"
        />
      </div>
    </div>  
</div>
  )
}

export default AIroadMapHero