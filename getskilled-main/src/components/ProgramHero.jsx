import { useNavigate } from 'react-router-dom'

const ProgramHero = ({program}) => {
  const navigate = useNavigate()

  const handleApplyNow = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      // Redirect to login with return path
      navigate('/login', { state: { from: { pathname: '/program' }, program } })
    } else {
      // User is authenticated, show payment popup
      // TODO: Integrate payment gateway here
      console.log('User is authenticated, showing payment popup')
      alert('Payment gateway will be integrated here. User is authenticated and ready to proceed with payment.')
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <p className="text-sm text-gray-500 mb-6">
              Home &gt; Technology &gt; {program.title || ''}
            </p>
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 inline-block">
              {program?.hero?.tag || 'CERTIFICATION PROGRAM'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {program.title || ''}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {program.hero?.subtext || program.description || ''}
            </p>
            <ul className="space-y-4 mb-12">
              {program.hero?.benefits?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 flex-col sm:flex-row mb-8">
              <button 
                onClick={handleApplyNow}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Apply Now →
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <img src="/assets/students.svg" alt="Learners" className="w-8 h-8" />
                <span>200+ Learners Enrolled</span>
              </div>
              <span className="text-gray-300">|</span>
              <span>🔥 Learn from Industry Experts</span>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="flex-1 max-w-lg">
            <img
              src={program.image || '/assets/program-full.jpg'}
              alt="Course Preview"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;