import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  const handleBuyNow = (planName) => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login with return path
      navigate('/login', { state: { from: { pathname: '/pricing' }, plan: planName } });
    } else {
      // User is authenticated, show payment popup
      // TODO: Integrate payment gateway here
      console.log(`User is authenticated, showing payment popup for ${planName}`);
      alert(`Payment gateway will be integrated here. User is authenticated and ready to proceed with payment for ${planName} plan.`);
    }
  };
  return (
    <section className="pricing-section py-8 md:py-16 text-center bg-gray-50">
      <span className="section-tag bg-[#d7f0e2] text-[#2e8b57] text-xs md:text-sm px-3 py-1 rounded-full font-semibold mb-0 md:mb-4 inline-block">
        PRICING PLANS
      </span>
      <h2 className="text-lg md:text-4xl font-bold my-2 md:my-4 text-left md:text-center">
        A Plan for Every Stage of Your Journey.
      </h2>
      <p className="subtitle text-base md:text-lg text-gray-600 mb-4 md:mb-12 text-left md:text-center">
        Flexible pricing designed to match your ambitions — from first steps to dream offers.
      </p>
      {/* <div className="pricing-cards flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4 md:px-0"> */}

      <div className='flex justify-center items-center'>
      <div className="pricing-cards grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 px-4 md:px-10 ">
        {/* Beginner Plan */}
        <div className="card bg-gray-100 p-4 md:p-10 rounded-2xl shadow-lg max-w-[450px] flex-1 text-left border border-gray-100 h-[20rem] md:h-[40rem]">
          <h3 className="plan-title text-[#2e8b57] text-lg md:text-xl font-bold mb-2">BEGINNER</h3>
          <p className="plan-subtitle text-sm md:text-base text-gray-600 mb-4 md:mb-7">
            Prepare for up to 2 job roles.
          </p>
          <h4 className="price text-lg md:text-xl font-bold mb-4 md:mb-14">₹1,000/mo</h4>
          <button 
            onClick={() => handleBuyNow('BEGINNER')}
            className="buy-btn outline w-full py-2 md:py-3 text-sm md:text-base font-bold border border-[#2e8b57] text-[#2e8b57] rounded-xl mb-4 md:mb-12 hover:bg-[#16A34A] hover:text-white">
            Buy Now →
          </button>
          <ul className="features list-none text-xs md:text-sm text-gray-600">
            <li className="my-1 md:my-4">✔ Access to basic AI features</li>
            <li className="my-1 md:my-4">✔ Limited mock interview rounds</li>
            <li className="my-1 md:my-4">✔ Interview feedback for 2 job roles</li>
            <li className="my-1 md:my-4">✔ Resume and interview tips</li>
            <li className="my-1 md:my-4">✔ Personalized progress tracking</li>
          </ul>
        </div>

        {/* Growth Plan */}
        <div className="card highlighted bg-white p-4 md:p-10 rounded-2xl shadow-sm max-w-[450px] flex-1 text-left border-2 border-[#2e8b57] h-[20rem] md:h-[40rem] relative">
          <div className="top-label absolute top-4 right-4">
            <img src="/assets/rocket-ai-int.svg" alt="icon" />
          </div>
          <h3 className="plan-title text-[#2e8b57] text-lg md:text-xl font-bold mb-2">GROWTH</h3>
          <p className="plan-subtitle text-sm md:text-base text-gray-600 mb-4 md:mb-7">
            Prepare for up to 5 job roles.
          </p>
          <h4 className="price text-lg md:text-xl font-bold mb-4 md:mb-14">
            ₹2,500/mo{' '}
            <span className="old-price text-sm text-gray-500 line-through ml-2">₹4,000/mo</span>{' '}
            <span className="badge bg-[#ffd7d7] text-[#d00] text-xs px-2 py-1 rounded-lg ml-2">Hot Deal 🔥</span>
          </h4>
          <button 
            onClick={() => handleBuyNow('GROWTH')}
            className="buy-btn w-full py-2 md:py-3 text-sm md:text-base font-bold bg-[#16A34A] text-white rounded-xl mb-4 md:mb-12">
            Buy Now →
          </button>
          <ul className="features list-none text-xs md:text-sm text-gray-600">
            <li className="my-1 md:my-4">✔ All features of the Beginner Plan</li>
            <li className="my-1 md:my-4">✔ Enhanced analytics and feedback</li>
            <li className="my-1 md:my-4">✔ Unlimited mock interview rounds for up to 5 job roles</li>
            <li className="my-1 md:my-4">✔ Access to intermediate AI-based feedback</li>
            <li className="my-1 md:my-4">✔ Customized interview simulations</li>
            <li className="my-1 md:my-4">✔ Job-specific question recommendations</li>
          </ul>
          <span className="most-popular bg-gradient-to-r from-[#0A8B3A] to-[#00C749] text-white text-xs px-3 py-2 rounded-tl-2xl rounded-br-md absolute bottom-0 right-0">
            Most Popular 🔥
          </span>
        </div>

        {/* Hyper Growth Plan */}
        <div className="card bg-gray-100 p-4 md:p-10 rounded-2xl shadow-lg max-w-[450px] flex-1 text-left border border-gray-100 h-[22rem] md:h-[40rem]">
          <h3 className="plan-title text-[#2e8b57] text-lg md:text-xl font-bold mb-2">HYPER GROWTH</h3>
          <p className="plan-subtitle text-sm md:text-base text-gray-600 mb-4 md:mb-7">
            Unlimited job role preparation.
          </p>
          <h4 className="price text-lg md:text-xl font-bold mb-4 md:mb-14">₹4,000/mo</h4>
          <button 
            onClick={() => handleBuyNow('HYPER GROWTH')}
            className="buy-btn outline w-full py-2 md:py-3 text-sm md:text-base font-bold border border-[#2e8b57] text-[#2e8b57] rounded-xl mb-4 md:mb-12 hover:bg-[#16A34A] hover:text-white">
            Buy Now →
          </button>
          <ul className="features list-none text-xs md:text-sm text-gray-600">
            <li className="my-1 md:my-4">✔ All features of the Growth Plan</li>
            <li className="my-1 md:my-4">✔ Full access to all AI tools and features</li>
            <li className="my-1 md:my-4">✔ Unlimited mock interviews for any job role</li>
            <li className="my-1 md:my-4">✔ Advanced analytics and detailed</li>
            <li className="my-1 md:my-4">✔ Personalized interview coaching with AI-driven suggestions</li>
            <li className="my-1 md:my-4">✔ Access to exclusive resources</li>
            <li className="my-1 md:my-4">✔ Priority customer support</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="students-tag flex justify-center items-center gap-0 mt-8 text-[#2e8b57] text-sm">
        <img src="/assets/students.svg" alt="students" className="w-20" />
        <p>5k+ Students Reached</p>
      </div>
    </section>
  );
};

export default PricingSection;