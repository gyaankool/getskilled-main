const AIInterrviewTestimonial = () => {
  return (
    <section className="testimonial-section bg-white py-8 sm:py-12 md:py-16 lg:py-20 text-center">
      <div className="testimonial-container flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-20 max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <img
          src="/assets/user_photo.png"
          alt="User Photo"
          className="user-photo w-24 h-24 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded m-auto"
        />
        <div className="testimonial-text max-w-[600px] text-left">
          <img src="/assets/quotes.svg" className="quotes mb-4 sm:mb-6 w-6 sm:w-8 md:w-10 lg:w-12" alt="Quotes" />
          <p className="quote text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-black mb-4">
            I kept getting stuck after the first few rounds of interviews. Practicing with AI mock interviews not only improved my answers but also boosted my confidence. I landed my first offer within a month — couldn’t have done it without this!
          </p>
          <p className="author text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-600">
            Anant Sharma<br />
            <span className="text-xs sm:text-sm md:text-sm lg:text-base font-normal text-gray-500">Software Developer at ABC</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIInterrviewTestimonial;