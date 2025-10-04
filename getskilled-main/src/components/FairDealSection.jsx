const FairDealSection = () => {
  return (
    <section className="py-20 md:py-24 px-5 text-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">
          How we Provide a{' '}
          <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Fair Deal?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Gain hands-on experience with research-driven learning, real-world projects, and industry-specific internships—plus AI-powered interview prep to boost your career!
        </p>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full">
          <div className="flex items-center justify-center gap-12 lg:gap-16">
            {/* Left Column - Points 2 & 4 */}
            <div className="flex flex-col gap-12 w-96">
              <div className="text-right">
                <h4 className="text-3xl font-semibold text-black mb-4">Point 02</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Real-world projects and industry-specific internships that give you practical experience
                </p>
              </div>
              <div className="text-right">
                <h4 className="text-3xl font-semibold text-black mb-4">Point 04</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  AI-powered interview preparation to boost your confidence and career prospects
                </p>
              </div>
            </div>

            {/* Center - Pyramid Image */}
            <div className="flex-shrink-0">
              <img
                src="/assets/pyramid.svg"
                alt="Pyramid"
                className="w-full max-w-[600px] mx-auto drop-shadow-lg"
              />
            </div>

            {/* Right Column - Points 1 & 3 */}
            <div className="flex flex-col gap-12 w-96">
              <div className="text-left">
                <h4 className="text-3xl font-semibold text-black mb-4">Point 01</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Research-driven learning methodology that adapts to your pace and learning style
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-3xl font-semibold text-black mb-4">Point 03</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Hands-on experience with cutting-edge tools and technologies used in the industry
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          {/* Mobile Pyramid Image */}
          <div className="w-full h-[25rem] bg-cover bg-no-repeat bg-center mb-10 rounded-2xl shadow-lg" 
               style={{ backgroundImage: "url('/assets/pyramid-mobile.png')" }}>
          </div>

          {/* Mobile Points - Stacked */}
          <div className="space-y-8 px-4">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-2xl font-semibold text-black mb-3">Point 01</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Research-driven learning methodology that adapts to your pace and learning style
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-2xl font-semibold text-black mb-3">Point 02</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Real-world projects and industry-specific internships that give you practical experience
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-2xl font-semibold text-black mb-3">Point 03</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                Hands-on experience with cutting-edge tools and technologies used in the industry
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-2xl font-semibold text-black mb-3">Point 04</h4>
              <p className="text-base text-gray-600 leading-relaxed">
                AI-powered interview preparation to boost your confidence and career prospects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairDealSection;