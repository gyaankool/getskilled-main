const TechnologyLearningModel = () => {
  return (
    <section className="bg-green-50 rounded-3xl p-8 md:p-12 mx-4 md:mx-28 mt-8 max-w-[85rem]">
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="max-w-md">
        <span className="inline-block bg-green-100 text-green-500 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase">Are Tech Courses for You?</span>
        <h2 className="text-3xl font-bold mb-4 ">These courses are for you if you are</h2>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto">
        {[
          { icon: 'Icon 1-all.svg', text: 'Students & Freshers looking to <strong>build job-ready</strong> skills' },
          { icon: 'Icon 2-all.svg', text: 'Working professionals looking to <strong>upskill career</strong>' },
          { icon: 'Icon 3.svg', text: 'Freelancers seeking new <strong>high-paying</strong> skills' }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center h-60 w-full min-w-[180px] md:w-56">
            <img src={`../public/assets/${feature.icon}`} alt="" className="w-12 h-12 mb-4" />
            <p className="text-sm text-gray-600 text-center" dangerouslySetInnerHTML={{ __html: feature.text }}></p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default TechnologyLearningModel