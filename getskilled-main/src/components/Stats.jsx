import React from 'react';

const Stats = () => (
      <section className="bg-green-50 rounded-lg py-20 px-4 md:px-20 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '95%', label: 'Success Rate' },
            { number: '50+', label: 'Industry Partners' },
            { number: '100+', label: 'Success Stories' },
            { number: '10k+', label: 'Interview Prep Users' }
          ].map((stat, index) => (
            <div key={index} className="flex-1 min-w-40">
              <div className="lg:text-6xl text-5xl font-bold text-green-500 mb-2">{stat.number}</div>
              <div className="text-base text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
    
export default Stats;