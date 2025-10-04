const Testimonials = () => (
  <section className="py-8 px-4 md:px-8 lg:px-16 xl:px-28">
    <div className="max-w-7xl mx-auto">
      <div className="text-left mb-6">
        <span className="inline-block bg-green-100 text-green-500 text-sm font-semibold px-3 py-1 rounded-full mb-4">TESTIMONIALS</span>
        <h2 className="text-3xl font-bold mb-4">
          Don't Trust us Yet? Listen to <span className="text-green-500">our Alumni</span>
        </h2>
        <p className="text-base text-gray-600 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="flex-none w-full sm:w-100 bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-20 h-20 rounded-full bg-green-100 mb-4 overflow-hidden">
                <img src="/assets/man.jpg" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <p className="text-green-500 font-semibold text-lg mb-2">"Easy to Understand"</p>
              <p className="text-base text-gray-800 mb-6">The platform has a clean and intuitive UI, making speaking practice seamless and effective. Its user-friendly design ensures a smooth experience, helping users improve their fluency and confidence. The structured approach enhances practice sessions, making them more engaging and productive.</p>
              <p className="text-base font-semibold">Amey Patil</p>
              <p className="text-sm text-gray-600">MBA Student at SP Jain</p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer lg:hidden">
          <span className="text-xl">→</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;