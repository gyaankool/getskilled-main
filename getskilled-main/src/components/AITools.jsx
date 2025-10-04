const AITools = ({title, subTittle}) => {
  const toolsData = [
    { 
      name: 'AI Interview Prep', 
      description: 'Practice with AI-powered mock interviews tailored to your role and experience level. Get real-time feedback and improve your interview skills.',
      features: ['Resume Analysis', 'Custom Questions', 'Real-time Feedback'],
      link: '/ai/interviewPrep'
    },
    { 
      name: 'AI Resume Builder', 
      description: 'Create professional resumes with AI assistance. Get suggestions for improvements and optimize your resume for ATS systems.',
      features: ['ATS Optimization', 'Content Suggestions', 'Multiple Formats'],
      link: 'http://localhost:3000'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-28">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-green-100 text-green-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">Our AI Tools</span>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          {title}<span className="text-green-500">{subTittle}</span>
        </h2>
        <p className="text-xl mb-10 max-w-2xl">Empower your learning journey with our cutting-edge AI tools. From interview preparation to resume building, we've got everything you need to succeed in today's competitive world.</p>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {toolsData.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-full h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                  {/* AI Interview Prep Thumbnail */}
                  {tool.name === 'AI Interview Prep' && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <h3 className="text-lg font-bold text-green-700 mb-2">AI Interview Simulator</h3>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600 font-medium">Live Interview</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* AI Resume Builder Thumbnail */}
                  {tool.name === 'AI Resume Builder' && (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">Smart Resume Builder</h3>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-blue-600 font-medium">ATS Optimized</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-gray-800">{tool.name}</span>
                    <a href={tool.link} className="bg-green-600 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-700 transition-colors shadow-md">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
