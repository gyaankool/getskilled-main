const LearningModel = () => (
  <section className="bg-green-50 rounded-3xl p-8 md:p-12 mx-4 md:mx-28 mt-8">
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="max-w-md ">
        <span className="inline-block bg-green-100 text-green-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">How are we different?</span>
        <h2 className="text-3xl font-bold mb-4">Our Learning Model: Built for the Future</h2>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto">
        {[
          { icon: 'Icon.svg', text: 'Built on <strong>deep industry and academic research</strong>— just what the real world demands.' },
          { icon: 'Icon-about.svg', text: 'Work on <strong>real-world projects</strong> from day one, solving problems that actually matter.' },
          { icon: 'Icon(1).svg', text: '<strong>True learning</strong> happens by doing— platform is built for those who want to build & create.' }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center h-60 w-full min-w-[180px] md:w-56">
            <img src={`../public/assets/${feature.icon}`} alt="" className="w-12 h-12 mb-4" />
            <p className="text-sm text-gray-600 text-center" dangerouslySetInnerHTML={{ __html: feature.text }}></p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearningModel;