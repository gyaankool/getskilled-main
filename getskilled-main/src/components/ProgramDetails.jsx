import { useNavigate } from 'react-router-dom'

const ProgramDetails = ({program}) => {
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
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Program Highlights */}
            <div>
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                OFFERINGS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">Key Program Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-green-100 p-6 rounded-xl bg-[#f9fff9]">
                {program.highlights?.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Perks */}
            <div>
              <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                OUR PERKS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
                Why This Course is Your Fastest Path to Success
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.perks?.map((perk, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <img src={perk.icon} alt={`${perk.title} Icon`} className="w-10 h-10 mb-3" />
                    <h4 className="text-lg font-semibold mb-2">{perk.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start learning today!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Flexible schedule. Real projects. Career support included.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm">
                  <span className="text-green-600">🕒</span>
                  <span>{program.duration || 'Flexible Duration'}</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="text-green-600">📄</span>
                  <span>{program.type || 'Certificate Program'}</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="text-green-600">💳</span>
                  <span>EMI Options Available</span>
                </li>
              </ul>
              <div className="mb-6">
                <div className="text-2xl font-bold text-green-600 mb-1">{program.price}</div>
                {program.discount && (
                  <div className="text-sm text-gray-500 line-through">{program.discount}</div>
                )}
              </div>
              <button 
                onClick={handleApplyNow}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;