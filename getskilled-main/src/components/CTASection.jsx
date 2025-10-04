import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section bg-gradient-to-r from-[#348c4e] to-[#5fc768] py-12 px-4  my-12 mx-4 md:mx-32 rounded-3xl max-w-[1200px] text-white">
      <div className="cta-content flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="cta-text flex-1 min-w-[250px] text-left">
          <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Still Have Questions? Let's Talk.</h2>
          <p className="text-sm md:text-base mb-4 md:mb-6 max-w-[500px]">
            Our experts can walk you through the course structure, outcomes, and help you figure out if this is the right fit.
          </p>
          <button className="cta-button bg-[#16A34A] text-white px-6 py-3 rounded-lg text-sm md:text-base font-medium hover:border-2 hover:border-white">
            Talk to our Expert →
          </button>
        </div>
        <div className="cta-image flex-1 flex justify-center min-w-[250px]">
          <img src="/assets/askingquestion.svg" alt="Person asking question" className="max-w-[250px] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;