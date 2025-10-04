import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AICourse = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("");
  const [topics, setTopics] = useState("");
  const [level, setLevel] = useState("beginner");
  const [isLoading, setIsLoading] = useState(false);
  const [isCourseVisible, setIsCourseVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [expandedPlatform, setExpandedPlatform] = useState(null);

  // Check authentication for AI features
  const checkAuthForAI = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { state: { from: { pathname: '/ai/courseCreator' } } });
      return false;
    }
    return true;
  };

  const handleCreateCourse = async () => {
    // Check authentication before proceeding
    if (!checkAuthForAI()) {
      return;
    }
    
    if (!goal.trim()) {
      alert("Please enter what you want to learn.");
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}course_catalog.json`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch course_catalog.json: ${response.status}`
        );
      }
      const data = await response.json();
      console.log("course data", data);

      // Convert spaces to underscores for better matching with category names
      const goalWithUnderscores = goal.toLowerCase().replace(/\s+/g, '_');
      const topicsWithUnderscores = topics.toLowerCase().replace(/\s+/g, '_');

      // Filter categories based on goal and topics
      const filteredCourses = (data.categories || []).filter(
        (category) => {
          const categoryName = category.name.toLowerCase();
          return (
            categoryName.includes(goalWithUnderscores) ||
            categoryName.includes(topicsWithUnderscores) ||
            // Also check with original spaces for backward compatibility
            categoryName.includes(goal.toLowerCase()) ||
            categoryName.includes(topics.toLowerCase())
          );
        }
      );

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsCourseVisible(true);
        setCourses(filteredCourses);
        console.log("filtered courses", courses);
        document
          .getElementById("course-section")
          .scrollIntoView({ behavior: "smooth" });
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLevelChange = (level) => {
    setLevel(level);
  };

  const togglePlatform = (index) => {
    setExpandedPlatform(expandedPlatform === index ? null : index);
  };

  // Calculate total number of course links for the selected level
  const totalCourses =
    courses.length > 0
      ? courses[0].platforms.reduce((total, platform) => {
          return total + (platform.courses[level]?.length || 0);
        }, 0)
      : 0;

  return (
    <>
      <style>
        {`
          @keyframes loading-bounce {
            0% { transform: scale(1, 0.7); }
            40% { transform: scale(0.8, 1.2); }
            60% { transform: scale(1, 1); }
            100% { bottom: 140px; }
          }
          @keyframes loading-step {
            0% {
              box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                          0 10px 0 #f2f2f2,
                          -35px 50px 0 #f2f2f2,
                          -70px 90px 0 #f2f2f2;
            }
            100% {
              box-shadow: 0 10px 0 #f2f2f2,
                          -35px 50px 0 #f2f2f2,
                          -70px 90px 0 #f2f2f2,
                          -70px 90px 0 rgba(0, 0, 0, 0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-12 lg:px-28 pt-8 font-sans text-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0A8B3A] to-[#00C749] rounded-2xl px-8 py-4 flex items-center justify-between md:flex-row text-white gap-8 md:mx-12 sm:mx-4 sm:flex-col sm:p-4">
          <div className="hero-text">
            <h2 className="text-3xl font-bold mb-10 sm:hidden">
              <span className="text-black">Get</span>Skilled
            </h2>
            <h3 className="text-xl font-semibold mt-2 sm:text-base sm:font-bold sm:w-11/12">
              Your Learning, Your Way!
            </h3>
            <p className="mt-2 w-7/12 text-sm font-light leading-relaxed sm:w-full sm:text-xs sm:leading-snug">
              Answer a few quick questions, and our AI will craft a step-by-step
              course with the best resources tailored to your learning needs!
            </p>
          </div>
          <div className="hero-image">
            <img
              src="../public/assets/learning_illustartion.svg"
              alt="Learning Illustration"
              className="max-w-[200px] h-auto"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center lg:flex-row p-8 border border-gray-200 rounded-2xl bg-white gap-20 flex-wrap mt-8 md:mx-12 md:gap-8 sm:mx-0 sm:p-4 sm:flex-col-reverse sm:border-none">
          <div className="flex-1 min-w-[300px]">
            <span className="inline-block bg-[#eafaea] text-[#4CAF50] font-bold px-3 py-1.5 rounded-full mb-4 text-xs">
              JUST A FEW QUESTIONS →
            </span>
            <div className="mb-4">
              <label
                htmlFor="goal"
                className="block text-gray-700 font-semibold mb-2"
              >
                What do you want to learn?
              </label>
              <input
                type="text"
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Example: I want to learn Data Analytics"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm md:w-11/12 sm:w-11/12 sm:py-2 sm:text-xs"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="topics"
                className="block text-gray-700 font-semibold mb-2"
              >
                What topics are most relevant to your learning? <span className="text-gray-500 text-sm">(Optional)</span>
              </label>
              <input
                type="text"
                id="topics"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                placeholder="Example: Data Analytics"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm md:w-11/12 sm:w-11/12 sm:py-2 sm:text-xs"
              />
            </div>
            <button
              onClick={handleCreateCourse}
              className="mt-6 bg-black text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-gray-800 transition duration-300"
            >
              Create Custom Course →
            </button>
          </div>
          <div className="flex-1 min-w-[300px]">
            <p className="text-gray-700 font-semibold mb-4">
              Where do you see yourself right now?
            </p>
            {["beginner", "intermediate", "advanced"].map((option) => (
              <div
                key={option}
                onClick={() => handleLevelChange(option)}
                className={`flex items-center p-3 mb-3 border rounded-xl cursor-pointer transition duration-300 bg-gray-50 ${
                  level === option
                    ? "border-[#4CAF50] bg-[#eaffea]"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="level"
                  value={option}
                  checked={level === option}
                  onChange={() => handleLevelChange(option)}
                  className="mr-3 accent-[#4CAF50] scale-125"
                />
                <div>
                  <strong className="text-gray-800">{option}</strong>
                  <p className="text-gray-700 text-xs mt-1">
                    {option === "Beginner"
                      ? "I'm just starting & need the basics"
                      : option === "Intermediate"
                      ? "I know some concepts and want to go deeper"
                      : "I'm experienced and looking for master"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loader Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-[rgba(49,46,46,0.396)] flex items-center justify-center z-[9999]">
            <div className="bg-[#f0fff4] border-[10px] border-white p-10 rounded-2xl shadow-lg text-center max-w-md w-4/5 sm:mx-4">
              <div className="relative w-[120px] h-[90px] mx-auto my-8">
                <div className="absolute bottom-[30px] left-[50px] h-[30px] w-[30px] rounded-full bg-[#2a9d8f] animate-[loading-bounce_0.5s_ease-in-out_infinite_alternate]"></div>
                <div className="absolute right-0 top-0 h-[7px] w-[45px] rounded bg-[#f2f2f2] shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2] animate-[loading-step_1s_ease-in-out_infinite]"></div>
              </div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Your customized course is on its way!
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed font-light">
                We're curating top PDFs, videos, and guides into a customized
                book PDF to make learning seamless for you. <br />
                Just a few more seconds!
              </p>
            </div>
          </div>
        )}

        {/* Course Section */}
        <section
          id="course-section"
          className={`p-8 max-w-5xl mx-auto ${
            isCourseVisible
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 translate-y-5"
          } transition-all duration-500`}
        >
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden mb-8">
            <p className="inline-block bg-[#eafaea] text-[#4CAF50] font-bold px-3 py-1.5 rounded-full my-6 mx-6 text-xs">
              Your Custom Course →
            </p>
            <div className="bg-[#f0fff4] p-6 flex justify-between items-center border-b border-gray-200">
              <span className="text-2xl font-semibold text-gray-900">
                Courses
              </span>
              <span className="bg-[#eafaea] text-[#3cae4f] px-3 py-1.5 rounded-full text-sm font-medium">
                {totalCourses} Courses Available
              </span>
            </div>

            {courses.length > 0 ? (
              courses[0].platforms.map((platform, index) => (
                <div className="border-b border-gray-200" key={index}>
                  <div
                    className="flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition duration-300 cursor-pointer"
                    onClick={() => togglePlatform(index)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {platform.platform}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="arrow">
                        <img
                          src="../public/assets/Vector.svg"
                          alt="Arrow"
                          className={`w-3 h-3 transition-transform ${
                            expandedPlatform === index ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </span>
                  </div>
                  {expandedPlatform === index && (
                    <div className="p-6 bg-gray-100">
                      <div className="mt-4">
                        <h3 className="text-sm font-medium  text-gray-700 mb-10">
                          Available Courses ({level})
                        </h3>
                        {platform.courses[level]?.length > 0 ? (
                          platform.courses[level].map(
                            (courseLink, courseIndex) => (
                              <div key={courseIndex} className="mb-10">
                                <a
                                  href={courseLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-4 rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700 transition duration-300"
                                >
                                  View Course →
                                </a>
                              </div>
                            )
                          )
                        ) : (
                          <p className="text-sm text-gray-600">
                            No courses available for {level} level.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No platforms available.</p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`h-[300px] bg-[url('/assets/CTA_2.jpg')] bg-cover bg-center bg-no-repeat text-white p-6 mx-72 mb-8 rounded-2xl border border-gray-200 text-left md:mx-12 sm:mx-4 ${
            isCourseVisible ? "block" : "hidden"
          }`}
        >
          <h3 className="text-xl font-bold mb-3 sm:text-lg">
            Your Learning Journey Doesn't Stop Here!🚀
          </h3>
          <p className="text-base leading-relaxed mb-5 sm:text-sm">
            You've gained valuable insights—now it's time to deepen your
            expertise! Explore
            <strong className="text-[#2e7d32] font-bold">
              {" "}
              our curated courses
            </strong>{" "}
            designed to help you master your skills and achieve your goals
            faster.
          </p>
          <button className="bg-black text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition duration-300">
            Generate My AI Book →
          </button>
        </section>
      </div>
    </>
  );
};

export default AICourse;
