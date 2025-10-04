// import React from 'react'

// const OutcomeSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-32 bg-white">
//       <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">What You'll Achieve</span>
//       <h2 className="text-4xl font-bold mt-2 mb-4">Not Just Skills—A Launchpad for Your Tech Career</h2>
//       <p className="text-gray-600 mb-6">
//         From building in-demand skills to confidence in interviews—see what's in store after you graduate.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
//         <div className="bg-green-50 p-8 rounded-xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               "Proficiency in building full stack web apps",
//               "Ability to deploy projects to real servers",
//               "A ready-to-showcase portfolio",
//               "Preparedness for web developer interviews",
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                 <img src="/assets/Vector Tick.svg" alt="Checkmark" className="w-5 h-5" />
//                 <p>{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="hidden md:block"></div>
//       </div>
//     </section>
//   );
// }

// export default OutcomeSection

const OutcomeSection = ({program}) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
            What You'll Achieve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Not Just Skills—A Launchpad for Your Tech Career</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From building in-demand skills to confidence in interviews—see what's in store after you graduate.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.outcomes?.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="flex-shrink-0">
                  <img src="/assets/Vector Tick.svg" alt="Checkmark" className="w-6 h-6" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;