import { useState } from "react";

const Faqs = ({program}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQ = [
   {
      question: "How is the course delivered?",
      answer: "100% online, with a blend of live and recorded sessions for flexibility.",
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No! This course is beginner-friendly and covers fundamentals before advancing.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll earn a certificate upon course completion.",
    },
    {
      question: "Is there job support?",
      answer: "Yes! We offer mock interviews, resume reviews, and career guidance.",
    },
    {
      question: "Are EMI options available?",
      answer: "Yes, EMI/payment options are available for all students.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
            FAQ's
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Got Doubts? Find Your Answers Here</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Common questions about our programs, learning process, and career support.
          </p>
        </div>
        
        <div className="space-y-4">
          {program.faqs?.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div
                className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold text-gray-900 pr-4">{faq.question}</p>
                <span className="text-2xl text-gray-600 flex-shrink-0">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;