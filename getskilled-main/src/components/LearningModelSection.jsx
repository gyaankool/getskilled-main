const LearningModelSection = () => {

  return (
    <section className="bg-[#f0fdf4] rounded-3xl p-4 sm:p-6 lg:p-8 mt-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 max-w-7xl mx-auto">
      <div className="model-header max-w-md mb-8 lg:mb-0">
        <div className="tag inline-block bg-[#e2f8e9] text-[#10b981] text-xs font-semibold uppercase py-1 px-3 rounded-2xl mb-4">
          ARE TECH COURSES FOR YOU?
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333]">
          These courses are for you if you are
        </h2>
      </div>

      <div className="model-features flex flex-col lg:flex-row gap-2 lg:gap-4 w-full">
        {[
          {
            icon: '/assets/Icon 1-all.svg',
            text: 'Students & Freshers looking to <span class="font-bold">build job ready</span> skills',
          },
          {
            icon: '/assets/Icon 2-all.svg',
            text: 'Working professionals looking to <span class="font-bold">upskill career</span>',
          },
          {
            icon: '/assets/Icon 3.svg',
            text: 'Freelancers seeking new <span class="font-bold">high-paying</span> skills',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-row lg:flex-col items-center lg:items-center justify-start lg:justify-center bg-white rounded-2xl p-4 sm:p-6 w-full lg:w-28 h-auto lg:h-[14.3rem] gap-4 lg:gap-6"
          >
            <div className="feature-icon-img w-10 h-10 lg:w-12 lg:h-12 bg-[#e2f8e9] rounded-full flex items-center justify-center">
              <img src={feature.icon} alt="Feature Icon" className="w-6 h-6 lg:w-8 lg:h-8" />
            </div>
            <div className="feature-card-content text-sm sm:text-base lg:text-base text-[#555]">
              <p dangerouslySetInnerHTML={{ __html: feature.text }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningModelSection