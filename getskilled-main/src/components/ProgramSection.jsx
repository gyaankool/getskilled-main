import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import programs from "../data/ProgramsData";

const ProgramsSection = ({
  title,
  highlightTitle,
  description,
  isSubHeading,
  isLearnMoreButton
}) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  // Show only first 3 courses initially, or all if showAllCourses is true
  const displayedPrograms = showAllCourses ? programs : programs.slice(0, 3);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

    const handleViewProgram = (program) => {
      console.log('program section',program)
      
      // Allow viewing program details without authentication
      navigate("/program", { state: { program } });
    };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e2f8e9] text-[#10b981] text-xs font-semibold uppercase px-3 py-1 rounded-full mb-4">
            OUR PROGRAMS
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title} <span className="text-[#16A34A]">{highlightTitle}</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          {isSubHeading && (
            <h2 className="text-[#16A34A] text-2xl md:text-3xl underline underline-offset-8 py-8 font-bold">
              Tech
            </h2>
          )}
        </div>

        {/* Programs Grid/Scroll Section */}
        <div className="relative">
          {!showAllCourses && (
            <button
              onClick={scrollLeft}
              className="absolute left-[-20px] md:left-[-50px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-xl w-10 h-10 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-shadow z-10"
            >
              ←
            </button>
          )}
          
          <div
            ref={scrollRef}
            className={`${showAllCourses ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex overflow-x-auto gap-4 scrollbar-none snap-x snap-mandatory pb-4'}`}
          >
            {displayedPrograms.map((program, index) => (
              <div
                key={index}
                className={`${showAllCourses ? 'w-full' : 'flex-shrink-0 w-[90%] md:w-[calc(33.333%-1rem)] snap-start'} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src="/assets/clock.svg"
                        alt="clock"
                        className="w-4 h-4 mr-2"
                      />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src="/assets/certificate.svg"
                        alt="certificate"
                        className="w-4 h-4 mr-2"
                      />
                      {program.type}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <img
                        src="/assets/money.svg"
                        alt="money"
                        className="w-4 h-4 mr-2"
                      />
                      <span className="font-semibold text-green-600">{program.price}</span>
                      {program.discount && (
                        <span className="line-through text-gray-400 ml-2">
                          {program.discount}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleViewProgram(program)}
                      className="px-6 py-2 border border-[#16A34A] text-[#16A34A] rounded-md text-sm hover:bg-[#c9ffdd] transition-colors font-medium"
                    >
                      View Program
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {!showAllCourses && (
            <button
              onClick={scrollRight}
              className="absolute right-[-20px] md:right-[-50px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-xl w-10 h-10 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-shadow z-10"
            >
              →
            </button>
          )}
        </div>

        {/* Load More Button */}
        {isLearnMoreButton && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="flex items-center bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {showAllCourses ? 'Show Less' : 'Load More'} 
              <span className="ml-2 text-lg">{showAllCourses ? '↑' : '→'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
