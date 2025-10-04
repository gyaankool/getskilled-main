import React from 'react'

const LearningSidebar = ({ isOpen, toggleSidebar }) => {
 return (
        <aside className={`fixed top-0 w-full max-w-md bg-white shadow-lg p-6 h-full transition-all duration-300 ${isOpen ? 'right-0' : 'right-[-500px]'}`}>
          <h3 className="text-lg font-semibold mb-1">Chapter 4: Data Types and flows</h3>
          <p className="text-sm text-gray-500 mb-4">MODULE 3</p>
          <div className="mb-6">
            <p className="text-sm font-semibold">
              60% Complete <span className="text-gray-600 font-normal ml-2">Score 4000/5000</span>
            </p>
            <div className="bg-gray-200 rounded-full h-2 mt-2 mb-2 overflow-hidden">
              <div className="bg-green-500 h-full rounded-full w-[60%]"></div>
            </div>
            <p className="text-xs text-gray-600">Due Date is 12th July, 2025, 11:59PM</p>
          </div>
          <h4 className="text-base font-semibold mb-2">List of Topics</h4>
          <ul className="list-none">
            <li className="flex justify-between items-center py-2 border-b border-gray-100 text-green-600">
              <span>✅ 📄 Understanding Data Analytics</span>
              <span className="text-xs text-gray-600">(1hr 7min)</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100 text-green-600">
              <span>✅ 💻 Problem on “Problem Name”</span>
              <span className="text-xs text-gray-600">Score 100/100</span>
            </li>
            <li className="flex justify-between items-center py-2 border-2 border-green-500 rounded-lg bg-green-50 font-semibold">
              <span>📄 Understanding Data Analytics</span>
              <button className="bg-green-500 text-white text-xs px-2 py-1 rounded">Resume Learning</button>
            </li>
            <li className="py-2 border-b border-gray-100">📄 Data Analytics</li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>📄 Fundamentals of Data Analytics</span>
              <span className="text-xs text-gray-600">(30min)</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>📄 Fundamentals of Data Analytics</span>
              <span className="text-xs text-gray-600">(30min)</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-100">
              <span>📄 Fundamentals of Data Analytics</span>
              <span className="text-xs text-gray-600">(30min)</span>
            </li>
          </ul>
          <div className="bg-green-100 p-4 rounded-lg mt-6">
            <p className="text-sm">💻 Solve more Questions related to the Chapter.</p>
            <a href="#" className="text-sm text-green-800 font-semibold mt-2 inline-block">Solve Questions →</a>
          </div>
        </aside>
      );
}

export default LearningSidebar