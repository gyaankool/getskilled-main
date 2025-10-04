import React, { useState } from 'react'

const CurriculumSection = ({program}) => {
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">PROGRAM CURRICULUM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">What You'll Learn</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Your comprehensive learning journey. Build real-world applications, from fundamentals to advanced implementations!
          </p>
        </div>
        
        <div className="space-y-4">
          {program.curriculum?.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full text-left p-6 font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg">{item.week}</span>
                <img 
                  src="/assets/Vector.svg" 
                  alt="Toggle" 
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[500px] p-6" : "max-h-0"}`}>
                <div className="bg-green-50 p-6 rounded-xl">
                  <ul className="space-y-3">
                    {item.topics?.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-700 leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurriculumSection