

const LearningMainContent = () => {
   return (
    <>
        <main className="flex flex-col md:flex-row h-[85vh] p-4 md:p-8 gap-4 md:gap-8">
          <section className="w-full md:w-2/5 border border-gray-200 rounded-2xl bg-white p-4 overflow-auto">
            <div className="border-b-2 border-green-600">
              <button className="font-semibold text-sm py-2">Video</button>
            </div>
            <div className="mt-4">
              <h3 className="text-base font-semibold">Understanding Data Analytics</h3>
              <p className="text-sm text-gray-500 mb-4">1hr 20min</p>
              <div className="relative">
                <img src="/assets/video.png" alt="Video thumbnail" className="w-full rounded-lg" />
              </div>
            </div>
          </section>
          <section className="w-full md:w-3/5  border-gray-200 flex flex-col  md:block">
            <img src="/assets/code.svg" alt=""
                          className="flex-grow bg-contain bg-no-repeat bg-center"

            />
          </section>
        </main>
        <div className="flex justify-center space-x-8 mt-2">
          <a href="/dashboard_learn">
            <button className="border border-green-600 text-green-600 px-4 py-2 rounded font-semibold">Prev</button>
          </a>
          <a href="learning-page-copy.html">
            <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold">Next</button>
          </a>
        </div>
        </>
      );
}

export default LearningMainContent