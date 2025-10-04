import { useState } from "react";

  const FAQ = () => {
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

      return (
        <section className="bg-green-50 py-16 px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-500 text-sm font-semibold px-3 py-1 rounded-full mb-4">FAQ's</span>
            <h2 className="text-3xl font-bold">Have Any Doubts? Refer to Questions</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            {Array(5).fill().map((_, index) => (
              <div key={index} className="mb-4">
                <div
                  className="bg-white rounded-lg p-5 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">How are the courses conducted?</span>
                  <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="bg-white pl-8 pr-4 pb-5 text-sm text-gray-600">
                    100% online with live + recorded sessions.
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      );
    };


export default FAQ