const ProjectsSection = ({program}) => {
  return (
    <>
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Projects That Go Beyond Tutorials
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Work on real-world projects you can show to employers or add to your portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.projects?.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded-full">
                  {project.id}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-medium mb-3 text-gray-700">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gradient-to-r from-[#0A8B3A] to-[#00C749] text-white rounded-2xl p-8 gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Still Have Questions? Let's Chat.
              </h3>
              <p className="text-green-100 leading-relaxed">
                Our mentors can walk you through the curriculum, career outcomes, and help you decide if this course fits you.
              </p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium whitespace-nowrap">
              Talk to our Expert →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;