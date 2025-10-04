import React, { useState } from 'react';

const AIInterviewSection = () => {
  const [activeTab, setActiveTab] = useState('why');
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      title: 'Easy to Understand',
      text: 'The platform has a clean and intuitive UI, making speaking practice seamless and effective. Its user-friendly design ensures a smooth experience, helping users improve their fluency and confidence. The structured approach enhances practice sessions, making them more engaging and productive.',
      name: 'Amey Patil',
      role: 'MBA Student at SP Jain',
      image: '/assets/person1.jpg',
    },
    {
      title: 'Highly Effective',
      text: 'The AI feedback is incredibly detailed and helped me improve my interview skills significantly. The mock interviews felt real, and the tips were actionable.',
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: '/assets/person2.jpg',
    },
    {
      title: 'Game Changer',
      text: 'Practicing with role-specific questions prepared me for my dream job. The analytics provided clear insights into my strengths and weaknesses.',
      name: 'Rahul Verma',
      role: 'Data Scientist',
      image: '/assets/person3.jpg',
    },
  ];

  const whyFeatures = [
    {
      title: 'Personalized Interview Experience',
      text: 'Our AI analyzes your resume and creates custom interview questions tailored to your background and the specific job role you\'re targeting.',
    },
    {
      title: 'Realistic AI Conversation',
      text: 'Experience natural, conversational interviews with our advanced AI that adapts to your responses and asks follow-up questions just like a real interviewer.',
    },
    {
      title: 'Comprehensive Analysis',
      text: 'Get detailed feedback on your answers, communication style, confidence level, and receive actionable tips to improve your interview performance.',
    },
  ];

  const howFeatures = [
    {
      title: 'Step 1: Upload Your Resume',
      text: 'Simply upload your resume and our AI will analyze your experience, skills, and background to create a personalized interview experience.',
    },
    {
      title: 'Step 2: Choose Job Description',
      text: 'Select from our database of job descriptions or paste your own. Our AI will tailor the interview questions specifically to that role and company.',
    },
    {
      title: 'Step 3: AI Interview & Analysis',
      text: 'Engage in a realistic conversational interview with our AI. After the session, receive comprehensive analysis with detailed feedback and improvement suggestions.',
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="bg-gradient-to-b from-[#f6fff9] to-[#f0fff6] py-20 px-4 md:py-28 lg:px-20 xl:px-40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="mb-6">
          <span className="inline-block bg-[#d6fadd] text-[#149443] text-xs md:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
            AI Interview Simulator
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-left leading-snug">
            <span className="bg-gradient-to-r from-[#16a34a] to-[#5cb41e] bg-clip-text text-transparent">
              Master Your Next Interview
            </span>{' '}
            with AI-Powered Simulation!
          </h2>
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="text-base md:text-lg text-[#4f4f4f] leading-relaxed text-left max-w-3xl">
            Upload your resume, choose your dream job, and experience a realistic AI interview simulation. Get detailed analysis and personalized feedback to ace your next interview!
            <br />
            Practice unlimited times with our intelligent AI interviewer!
          </p>
        </div>

      {/* Tabs */}
        <div className="mb-10">
          <div className="flex gap-2 bg-[#63c186] rounded-2xl p-2 max-w-[32rem] md:max-w-[42rem] shadow-md">
        <button
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 ease-in-out ${
                activeTab === 'why' ? 'bg-white text-[#16a34a] shadow-sm' : 'bg-transparent text-white hover:bg-white/10'
          }`}
          onClick={() => handleTabClick('why')}
        >
              Why AI Interview Simulator?
        </button>
        <button
              className={`flex-1 py-4 px-6 rounded-xl font-semibold text-base text-left transition-all duration-200 ease-in-out ${
                activeTab === 'how' ? 'bg-white text-[#16a34a] shadow-sm' : 'bg-transparent text-white hover:bg-white/10'
          }`}
          onClick={() => handleTabClick('how')}
        >
          How It Works?
        </button>
          </div>
      </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Features */}
          <div className="w-full">
            
            {/* Why Features */}
            {activeTab === 'why' && (
              <div className="space-y-8">
                {whyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#e8f5ee] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <img src="/assets/dot.png" alt="Dot" className="w-4 h-4 object-contain" />
                </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-black mb-2 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-base text-[#4f4f4f] leading-relaxed">
                        {feature.text}
                  </p>
                </div>
              </div>
                ))}
              </div>
            )}

            {/* How Features */}
            {activeTab === 'how' && (
              <div className="space-y-8">
                {howFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[#e8f5ee] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <img src="/assets/dot.png" alt="Dot" className="w-4 h-4 object-contain" />
                </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-black mb-2 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-base text-[#4f4f4f] leading-relaxed">
                        {feature.text}
                  </p>
                </div>
              </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="bg-[#16a34a] text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-[#15803d] transition-all duration-200 shadow-md">
                Start AI Interview Now
              </button>
              <button className="border border-[#16a34a] text-[#16a34a] px-6 py-3 rounded-xl font-semibold text-base hover:bg-[#16a34a] hover:text-white transition-all duration-200">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="w-full">
            <div className="relative">
              
              {/* Testimonial Card */}
              <div className="bg-gradient-to-r from-[#5cb41e] to-[#16a34a] text-white p-8 md:p-10 rounded-2xl shadow-lg min-h-[26rem] flex flex-col justify-between">
                
                {/* Quote Icon */}
                <div className="mb-4">
                  <img src="/assets/quotes.svg" alt="Quotes" className="w-8 h-8 opacity-90" />
        </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3 leading-tight">
                    {testimonials[activeSlide].title}
                  </h4>
                  <p className="text-base leading-relaxed border-b border-white/20 pb-6">
                {testimonials[activeSlide].text}
              </p>
                </div>
                
                {/* Author Info */}
              <div className="flex items-center mt-5">
                <img
                  src={testimonials[activeSlide].image}
                  alt="User"
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white/30 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-lg font-semibold block leading-tight">
                      {testimonials[activeSlide].name}
                    </span>
                    <p className="text-sm text-white/80 leading-tight">
                      {testimonials[activeSlide].role}
                    </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
              <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                      className={`w-10 h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                        index === activeSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
                <div className="flex gap-6">
                <img
                   src="/assets/right-arrrow.svg"
                  alt="Previous"
                    className="w-7 h-7 cursor-pointer opacity-90 hover:opacity-100 transition"
                  onClick={handlePrevSlide}
                />
                <img
                  src="/assets/left_arrow.svg"
                  alt="Next"
                    className="w-7 h-7 cursor-pointer opacity-90 hover:opacity-100 transition"
                  onClick={handleNextSlide}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInterviewSection;