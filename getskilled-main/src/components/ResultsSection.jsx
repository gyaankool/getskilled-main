// const ResultsSection = () => {
//   return (
//     <section className="bg-[#f4fbf6] py-16 px-4 md:px-8 text-center mt-5">
//       {/* Header */}
//       <div className="results-header mb-12">
//         <h2 className="text-2xl md:text-4xl font-bold">
//           {/* Our Results <span className="text-[#5cb41e]">in Numbers</span> */}
//           Our Results <span className="text-[#63c186]">in Numbers</span>
//         </h2>
//         <p className="text-sm md:text-base text-[#666] max-w-[600px] mx-auto mt-4">
//           Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="results-stats grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-32 mt-12">
//         {/* <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0"> */}
//         <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
//           <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
//             <span className="text-[#5cb41e]">95</span>%
//           </h3>
//           <p className="text-sm md:text-lg text-[#333]">Success Rate</p>
//         </div>
//         <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
//           <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
//             <span className="text-[#5cb41e]">50</span>+
//           </h3>
//           <p className="text-sm md:text-lg text-[#333]">Industry Partners</p>
//         </div>
//         <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
//           <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
//             <span className="text-[#5cb41e]">100</span>+
//           </h3>
//           <p className="text-sm md:text-lg text-[#333]">Success Stories</p>
//         </div>
//         <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
//           <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
//             <span className="text-[#5cb41e]">10k</span>+
//           </h3>
//           <p className="text-sm md:text-lg text-[#333]">Interview Prep Users</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResultsSection;






const ResultsSection = ({header =null, stats=[]}) => {
  return (
    <section className="bg-[#f4fbf6] py-16 px-4 md:px-8 text-center mt-5">
      {/* Header */}
      {header && (
      <div className="results-header mb-12">
        {header.heading && (
        <h2 className="text-2xl md:text-4xl font-bold">
          {/* Our Results <span className="text-[#5cb41e]">in Numbers</span> */}
          {header.heading} {' '}<span className="text-[#63c186]">{header.highlightText}</span>
        </h2>
        )}
        {header.isSubtext && (
        <p className="text-sm md:text-base text-[#666] max-w-[600px] mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
        </p>
        )}
      </div>
      )}

      {/* Stats */}
      {stats.length>0 && (
      <div className="results-stats grid grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-32 mt-12">
        {stats.map((stat,index)=>(
        <div 
        key={index}
        className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
          <h3 className="text-5xl font-bold mb-2">
            {/* <span className="text-[#5cb41e]">{stat.value}</span>{stat.symbol} */}
            <span className="text-green-500">{stat.value}</span>{stat.symbol}
          </h3>
          <p className="text-sm md:text-lg text-[#333]">{stat.label}</p>
        </div>
        ))}
        {/* <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
          <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
            <span className="text-[#5cb41e]">50</span>+
          </h3>
          <p className="text-sm md:text-lg text-[#333]">Industry Partners</p>
        </div>
        <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
          <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
            <span className="text-[#5cb41e]">100</span>+
          </h3>
          <p className="text-sm md:text-lg text-[#333]">Success Stories</p>
        </div>
        <div className="stat bg-[#e4fded] md:bg-transparent rounded-xl md:rounded-none p-5 md:p-0">
          <h3 className="lg:text-5xl md:text-4xl font-bold mb-2">
            <span className="text-[#5cb41e]">10k</span>+
          </h3>
          <p className="text-sm md:text-lg text-[#333]">Interview Prep Users</p>
        </div> */}
      </div>
      )}
    </section>
  );
};

export default ResultsSection;