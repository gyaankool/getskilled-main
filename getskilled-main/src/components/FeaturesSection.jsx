import React from 'react';

const FeaturesSection = () => (
  <div className="container-features bg-[#f0fdf4] pt-8  pb-10 h-[100vh]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="features-header-features text-center mb-10 pt-20">
        {/* <div className="tag-features inline-block bg-[rgba(76,175,80,0.15)] text-[#16A34A] text-xs font-semibold py-1 px-3 rounded-full mb-3 uppercase"> */}
        <div className="tag-features inline-block bg-[rgba(76,175,80,0.15)] text-black text-sm font-semibold py-1 px-3 rounded-full mb-6 uppercase">
          Why Choose Us
        </div>
        <h1 className="features-title-features text-6xl font-bold mb-20 ">
          What Makes Us <span className="text-[#16A34A]">Different?</span>
        </h1>
      </div>
      <div className="features-grid-features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            icon: 'magnification.png',
            title: 'Research-Driven Curriculum',
            desc: 'Students & Freshers looking to build job-ready skills',
          },
          {
            icon: 'mentor.png',
            title: 'Industry Mentorship',
            desc: '1:1 mentoring & career coaching from experts.',
          },
          {
            icon: 'pencil.png',
            title: 'Learn by Doing',
            desc: 'Work on real-world projects to gain practical experience.',
          },
          {
            icon: 'suitcase.png',
            title: 'Job & Internship Support',
            desc: 'Get hired faster with our placement network.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            // className="feature-card-features bg-gradient-to-b from-[#F1FFF7] to-white border-8 border-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            className="feature-card-features lg:h-[25vh] lg:w-[70vh] bg-gradient-to-b from-white to-[#F1FFF7] border-8 border-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="icon-placeholder-features w-10 h-10 bg-[rgba(76,175,80,0.1)] rounded-full flex items-center justify-center mb-4">
              <img src={`../public/assets/${feature.icon}`} alt="" className="w-6 h-6" />
            </div>
            <h2 className="feature-title-features text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="feature-desc-features text-lg text-[#666]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesSection;