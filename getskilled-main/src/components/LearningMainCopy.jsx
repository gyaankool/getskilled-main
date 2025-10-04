import React, { useState } from 'react'

const LearningMainCopy = () => {
    const [activeTab, setActiveTab] = useState('problem');

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
  return (
     <>
        <main className="flex flex-col md:flex-row h-[85vh] p-4 md:p-8 gap-4 md:gap-8">
          {/* <section className="w-full md:w-2/5 border border-gray-200 rounded-2xl bg-white p-4 overflow-auto">
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
          </section> */}



           <section className="w-full max-w-[40%] p-4 bg-white border border-gray-200 rounded-2xl h-[85vh] overflow-y-auto">
          <div className="flex gap-4 mb-4 flex-wrap border-b border-gray-300">
            <button
              className={`pb-2 font-medium transition-colors ${
                activeTab === 'problem' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick('problem')}
            >
              Problem
            </button>
            <button
              className={`pb-2 font-medium transition-colors ${
                activeTab === 'submissions' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick('submissions')}
            >
              Submissions
            </button>
            <button
              className={`pb-2 font-medium transition-colors ${
                activeTab === 'hints' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick('hints')}
            >
              Hints & Solutions
            </button>
          </div>

          {activeTab === 'problem' && (
            <div className="mt-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Remove Duplicates</h3>
                <p className="text-sm text-gray-500">Easy • Average time to solve is 20 min • Score 0/80</p>
              </div>
              <div className="mb-4">
                <h4 className="text-base font-medium">Problem Statement</h4>
                <p className="text-sm">Given a string S, remove consecutive duplicates from it recursively.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-base font-medium">Detailed explanation (Input/output format, Notes, Images)</h4>
                <p className="text-sm"><strong>Input Format:</strong> String S</p>
                <p className="text-sm"><strong>Output Format:</strong> Output String</p>
              </div>
              <div className="mb-4">
                <h4 className="text-base font-medium">Constraints:</h4>
                <p className="text-sm">
                  1 &lt;= |S| &lt;= 10<sup>3</sup><br />
                  where |S| represents the length of string
                </p>
              </div>
              <div className="mb-4">
                <p className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                  <strong>Sample Input 1 :</strong><br />aabccba
                </p>
                <p className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                  <strong>Sample Output 1 :</strong><br />abcba
                </p>
                <p className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                  <strong>Sample Input 2 :</strong><br />xxxyyyzwvzzz
                </p>
                <p className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
                  <strong>Sample Output 2 :</strong><br />xyzwz
                </p>
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-sm">
                    <th className="p-3 border-b border-gray-200">Status</th>
                    <th className="p-3 border-b border-gray-200">Test Cases</th>
                    <th className="p-3 border-b border-gray-200">Score</th>
                    <th className="p-3 border-b border-gray-200">Language</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm">
                    <td className="p-3 border-b border-gray-200">
                      <span className="text-green-500 font-bold">✔</span>
                    </td>
                    <td className="p-3 border-b border-gray-200">50/50</td>
                    <td className="p-3 border-b border-gray-200">80</td>
                    <td className="p-3 border-b border-gray-200">Java (SE 1.8)</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-3 border-b border-gray-200">
                      <span className="text-green-500 font-bold">✔</span>
                    </td>
                    <td className="p-3 border-b border-gray-200">50/50</td>
                    <td className="p-3 border-b border-gray-200">80</td>
                    <td className="p-3 border-b border-gray-200">Java (SE 1.8)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'hints' && (
            <div className="mt-4">
              <div className="relative w-full">
                <img
                  src="https://via.placeholder.com/600x300?text=Video+Thumbnail"
                  alt="Video thumbnail"
                  className="w-full rounded-lg"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 text-2xl shadow-lg">
                  ▶
                </button>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium">Hint explanation</h4>
                <p className="text-sm"><strong>Input Format:</strong> String S</p>
                <p className="text-sm"><strong>Output Format:</strong> Output String</p>
              </div>
            </div>
          )}
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
  )
}

export default LearningMainCopy