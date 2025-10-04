import React from 'react'

const CommunityStatsSection = () => {
 return (
    <section className="bg-gradient-to-r from-[#0A8B3A] to-[#00C749] text-white rounded-[30px] mx-10 lg:mx-28 py-12 px-8 text-center my-16">
      <p className="text-lg md:text-xl font-medium mb-8">Thousands are already growing together. Your turn?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:justify-center gap-8">
        <div className="min-w-[150px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">95%</h2>
          <p className="text-base">Success Rate</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">50+</h2>
          <p className="text-base">Industry Partners</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">100+</h2>
          <p className="text-base">Success Stories</p>
        </div>
        <div className="min-w-[150px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">10k+</h2>
          <p className="text-base">Interview Prep Users</p>
        </div>
      </div>
    </section>
  );
}

export default CommunityStatsSection
