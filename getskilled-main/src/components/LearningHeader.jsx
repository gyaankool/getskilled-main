import React from 'react'

const LearningHeader = ({ toggleSidebar }) => {
 return (
        <div className="flex justify-between items-center p-4 hidden md:flex">
          <a href="#" className="text-sm text-gray-800">← Back to main dashboard</a>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-200 rounded p-1 text-sm">
              <option>Java (SE1.8)</option>
              <option>Java (SE1.8)</option>
              <option>Java (SE1.8)</option>
              <option>Java (SE1.8)</option>
            </select>
            <span className="text-sm bg-gray-100 p-1 rounded">main.java</span>
            <span className="text-sm bg-gray-100 p-1 rounded">Output</span>
          </div>
          <button className="text-xl" onClick={toggleSidebar}>☰</button>
        </div>
      );
}

export default LearningHeader