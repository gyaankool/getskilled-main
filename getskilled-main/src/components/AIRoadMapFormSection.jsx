import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AIRoadMapFormSection = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("");
  const [topics, setTopics] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [aiSuggestions, setAiSuggestions] = useState("");
  const courseSectionRef = useRef(null);

  // Check authentication for AI features
  const checkAuthForAI = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { state: { from: { pathname: '/ai/roadMapGenerator' } } });
      return false;
    }
    return true;
  };

  useEffect(() => {
  console.log("State updated:", { goal, topics, level, searchResults, aiSuggestions, isLoading });
}, [goal, topics, level, searchResults, aiSuggestions, isLoading]);

  // Function to convert markdown bold to HTML strong tags
  const convertMarkdownToHTML = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  // Function to find matching courses from roadmap.json
  const findMatchingCourses = async (goal, topics) => {
    try {
      console.log("Searching for:", { goal, topics });
      // const response = await fetch("roadmap.json"); 
      const response = await fetch(`${import.meta.env.BASE_URL}roadmap.json`);
      console.log('response',response)
      if (!response.ok) {
        throw new Error(`Failed to fetch roadmap.json: ${response.status}`);
      }
      const data = await response.json();
      console.log("Raw data received:", data);

      const searchGoal = goal.toLowerCase().trim();
      const searchTopics = topics.toLowerCase().trim();

      const matches = data.filter((course) => {
        if (!course || typeof course !== "object") return false;
        const courseName = (course.courseName || "").toLowerCase();
        const courseType = (course.courseType || "").toLowerCase();
        
        // Helper function to check for exact or close matches
        const checkMatch = (searchTerms, courseText) => {
          if (!searchTerms) return false;
          
          // First, try exact phrase matching (highest priority)
          if (courseText.includes(searchTerms)) {
            return true;
          }
          
          // Split search terms and filter out common words
          const terms = searchTerms.split(' ').filter(term => term.length > 0);
          const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must', 'shall', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'mine', 'yours', 'his', 'hers', 'ours', 'theirs', 'this', 'that', 'these', 'those', 'who', 'what', 'where', 'when', 'why', 'how', 'which', 'whom', 'whose', 'want', 'learn', 'with'];
          
          const meaningfulTerms = terms.filter(term => !commonWords.includes(term) && term.length > 2);
          
          // If no meaningful terms, use original terms
          const searchTermsToUse = meaningfulTerms.length > 0 ? meaningfulTerms : terms;
          
          // For better precision, check if the course name contains the key distinguishing words
          // This prevents "front end" from matching "back end" and vice versa
          const courseWords = courseText.split(' ');
          
          // Check for key distinguishing words first
          const keyWords = searchTermsToUse.filter(term => 
            term === 'front' || term === 'back' || term === 'android' || term === 'ios' || 
            term === 'full' || term === 'python' || term === 'cyber' || term === 'devops'
          );
          
          // If we have key words, they must match exactly
          if (keyWords.length > 0) {
            const hasKeyWordMatch = keyWords.some(keyWord => 
              courseWords.includes(keyWord)
            );
            if (!hasKeyWordMatch) {
              return false;
            }
          }
          
          // Count how many search terms match with word boundaries
          let matchCount = 0;
          for (const searchTerm of searchTermsToUse) {
            // Check if the search term matches any complete word in the course name
            if (courseWords.includes(searchTerm)) {
              matchCount++;
            }
          }
          
          // Require at least 70% of meaningful terms to match for better precision
          const matchRatio = matchCount / searchTermsToUse.length;
          return matchCount > 0 && matchRatio >= 0.7;
        };
        
        // If topics is empty, only search by goal
        if (!searchTopics) {
          return checkMatch(searchGoal, courseName) || checkMatch(searchGoal, courseType);
        }
        
        // If both goal and topics are provided, search by both
        return (
          checkMatch(searchGoal, courseName) ||
          checkMatch(searchGoal, courseType) ||
          checkMatch(searchTopics, courseName) ||
          checkMatch(searchTopics, courseType)
        );
      });

      console.log("Matches found:", matches);
      return matches;
    } catch (error) {
      console.error("Error in findMatchingCourses:", error);
      throw error;
    }
  };

  // Function to get AI suggestions
  const getAISuggestions = async (goal, topics, level) => {
    try {
      const response = await fetch("https://server-getskilled.onrender.com/api/ai_suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, topics, level }),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const { suggestions } = await response.json();
      return convertMarkdownToHTML(suggestions);
    } catch (error) {
      console.error("Error in getAISuggestions:", error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check authentication before proceeding
    if (!checkAuthForAI()) {
      return;
    }
    
    setError("");
    setIsLoading(true);
    setSearchResults([]);
    setAiSuggestions("");

    if (!goal.trim()) {
      setError("Please enter what you want to learn.");
      setIsLoading(false);
      return;
    }

    if (!level) {
      setError("Please select a level (Beginner, Intermediate, or Advanced).");
      setIsLoading(false);
      return;
    }

    try {
      // First, try to find matching courses
      const matches = await findMatchingCourses(goal, topics);
      if (matches.length > 0) {
        setSearchResults(matches);
      } else {
        // If no matches, get AI suggestions
        console.log("No matches found, getting AI suggestions");
        const suggestions = await getAISuggestions(goal, topics, level);
        if (suggestions) {
          setAiSuggestions(suggestions);
        } else {
          throw new Error("No AI suggestions received");
        }
      }

      // Scroll to results
      if (courseSectionRef.current) {
        courseSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      setError(err.message || "An error occurred while searching for courses.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle CTA button click (placeholder for custom course building)
  // const handleBuildCustomCourse = () => {
  //   alert("Building your custom course... (Implement your logic here)");
  // };

  return (
    <>
      {/* Form Section */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 bg-white rounded-3xl border border-[#CDCDCD] p-6 sm:p-8 lg:p-10 my-10">
        <div className="flex-1">
          <p className="badge inline-block bg-[#eafaea] text-[#4CAF50] font-bold px-3 py-1.5 rounded-full mb-4 text-xs">
            JUST A FEW QUESTIONS →
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="goal" className="block text-lg font-medium mb-2">
                What do you want to learn?
              </label>
              <input
                type="text"
                id="goal"
                placeholder="Example: I want to learn Data Analytics"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
              />
            </div>
            <div>
              <label htmlFor="topics" className="block text-lg font-medium mb-2">
                What topics are most relevant to your learning? <span className="text-gray-500 text-sm">(Optional)</span>
              </label>
              <input
                type="text"
                id="topics"
                placeholder="Example: Data Analytics"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="create-course-btn mt-6 bg-black text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800"
            >
              {isLoading ? "Generating..." : "Generate Roadmap →"}
            </button>
          </form>
        </div>

        <div className="flex-1">
          <p className="text-lg font-medium mb-4">Where do you see yourself right now?</p>
          <div className="space-y-4">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <div
                key={lvl}
                className={`level-option flex items-center gap-3 p-3 m-3 border border-gray-300 bg-gray-50 rounded-xl cursor-pointer ${
                  level === lvl ? "bg-[#eafaea] border-[#4CAF50]" : ""
                }`}
                onClick={() => setLevel(lvl)}
              >
                <input
                  type="radio"
                  name="level"
                  value={lvl}
                  checked={level === lvl}
                  onChange={() => setLevel(lvl)}
                  className="accent-[#4CAF50] scale-125"
                />
                <div>
                  <strong className="text-base">{lvl}</strong>
                  <p className="text-sm text-gray-600">
                    {lvl === "Beginner"
                      ? "I'm just starting & need the basics"
                      : lvl === "Intermediate"
                      ? "I know some concepts and want to go deeper"
                      : "I'm experienced and looking for master"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-[rgba(49,46,46,0.4)] flex justify-center items-center z-[9999]">
          <div className="bg-[#F0FFF4] border-[10px] border-white p-10 rounded-[20px] shadow-lg text-center max-w-md w-4/5">
            <div className="relative w-[120px] h-[90px] mx-auto mb-10">
              <div className="absolute bottom-[30px] left-[50px] h-[30px] w-[30px] rounded-full bg-[#2A9D8F] animate-[loading-bounce_0.5s_ease-in-out_infinite_alternate]"></div>
              <div className="absolute right-0 top-0 h-[7px] w-[45px] rounded-sm shadow-[0_5px_0_#F2F2F2,-35px_50px_0_#F2F2F2,-70px_95px_0_#F2F2F2] animate-[loading-step_1s_ease-in-out_infinite]"></div>
            </div>
            <h2 className="text-lg font-semibold">Searching for courses...</h2>
            <p className="text-sm font-light text-gray-700">
              We're looking for the best courses to match your learning goals.
              <br />
              Just a moment!
            </p>
          </div>
        </div>
      )}

      {/* Course Section */}
      {(searchResults.length > 0 || aiSuggestions) && (
        <section id="course-section" ref={courseSectionRef} className="max-w-5xl mx-auto my-10">
          {/* Flowchart Section */}
          {/* <section className="flowchart-section mb-10">
            <div className="roadmap-div hidden md:block">
              <img src="../public/assets/Roadmap.svg" alt="Roadmap" />
            </div>
            <div className="roadmap-div-phone block md:hidden">
              <img src="../public/assets/Roadmap-phone.svg" alt="Roadmap Phone" />
            </div>
          </section> */}

          {/* Search Results or AI Suggestions */}
          {searchResults.length > 0 ? (
            <div className="search-results">
              <div className="results-header">
                <h3 className="text-2xl font-bold">Found {searchResults.length} matching courses</h3>
              </div>
              <div className="results-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {searchResults.map((course, index) => (
                  <div
                    key={index}
                    className="course-card border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
                  >
                    <h4 className="text-lg font-semibold">{course.courseName}</h4>
                    <p className="course-type text-sm text-gray-600">{course.courseType}</p>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-course-btn inline-block mt-4 bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800"
                    >
                      View Course →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            aiSuggestions && (
              <section className="flowchart-section">
                <div className="ai-roadmap bg-white rounded-3xl border border-[#CDCDCD] p-6">
                  <h3 className="text-2xl font-bold">AI-Generated Learning Path</h3>
                  <div className="ai-content mt-4">
                    <h4 className="text-xl font-semibold">{goal}</h4>
                    <p className="level-badge inline-block bg-[#eafaea] text-[#4CAF50] font-bold px-3 py-1.5 rounded-full text-xs mt-2">
                      {level}
                    </p>
                    <div
                      className="ai-suggestions mt-4 text-gray-700"
                      dangerouslySetInnerHTML={{ __html: aiSuggestions }}
                    />
                  </div>
                </div>
              </section>
            )
          )}

          {/* CTA Section */}
          {/* <section className="cta-section text-center mt-10">
            <h3 className="text-2xl font-bold">Want an even more tailored experience? 🎯</h3>
            <p className="text-gray-700 mt-4">
              You've gained valuable insights—now it's time to deepen your expertise! Explore{" "}
              <strong className="highlight text-[#4CAF50]">our curated courses</strong> designed to help
              you master your skills and achieve your goals faster.
            </p>
            <p className="text-gray-700 mt-2">
              The course that is suggested based on the roadmap is:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>We'll gather top-tier learning resources to make your journey even smoother!</strong>
            </p>
            <div className="data-analytics-div flex items-center justify-center gap-2 mt-4">
              <img src="../public/assets/Icon.svg" alt="Icon" className="w-6 h-6" />
              <span className="text-lg font-semibold">Data Analytics</span>
            </div>
            <button
              onClick={handleBuildCustomCourse}
              className="cta-btn mt-6 bg-black text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800"
            >
              Build My Custom Course →
            </button>
          </section> */}
        </section>
      )}
    </>
  );
};

export default AIRoadMapFormSection;