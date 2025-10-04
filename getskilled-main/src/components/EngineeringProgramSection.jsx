import { Link } from 'react-router-dom';

const EngineeringProgramSection = () => {
   return (
    <div className="max-w-[85rem] mx-auto px-4 py-8">
      <section id="programs-section">
        {/* Tag */}
        <div className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          OUR PROGRAMS
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Explore our <span className="text-green-600">Courses</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base mb-8 max-w-2xl">
          Explore diverse courses and find the one that aligns your goals and interests
        </p>

        {/* Commented-out Tabs (kept as comment for reference) */}
        {/* <div className="flex mb-8 border-b-2 border-gray-100">
          <div className="px-6 py-3 mr-4 cursor-pointer text-gray-500 border-b-2 border-transparent font-medium hover:text-green-600 hover:border-green-600 transition-all">
            Commerce
          </div>
          <div className="px-6 py-3 mr-4 cursor-pointer text-gray-500 border-b-2 border-transparent font-medium hover:text-green-600 hover:border-green-600 transition-all">
            Arts
          </div>
          <div className="px-6 py-3 cursor-pointer text-gray-500 border-b-2 border-transparent font-medium hover:text-green-600 hover:border-green-600 transition-all">
            STEM
          </div>
        </div> */}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-white hover:shadow-md transition-all">
              {/* Course Image */}
              <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="../public/assets/coursecard.jpg"
                  alt="Course"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Course Name</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum
                </p>

                {/* Course Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <img src="../public/assets/clock.svg" alt="Clock" className="mr-2 w-5 h-5" />
                    12 weeks
                  </div>
                  <div className="flex items-center text-sm">
                    <img src="../public/assets/certificate.svg" alt="Certificate" className="mr-2 w-5 h-5" />
                    Certification Course
                  </div>
                  <div className="flex items-center text-sm">
                    <img src="../public/assets/money.svg" alt="Money" className="mr-2 w-5 h-5" />
                    <div className="flex items-baseline">
                      <span className="font-semibold text-green-600 mr-2">₹20,000</span>
                      <span className="text-gray-500 line-through text-xs">₹25,000</span>
                    </div>
                  </div>
                </div>

                {/* Course Actions */}
                <div className="flex gap-2">
                  <Link
                    to="#"
                    className="flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all"
                  >
                    Syllabus
                    <span className="ml-2">→</span>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center border border-green-600 text-green-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-all"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center">
          <Link
            to="#"
            className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all"
          >
            Load More
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default EngineeringProgramSection