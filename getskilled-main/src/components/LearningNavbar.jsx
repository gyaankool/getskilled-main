import React, { useState } from 'react'

const LearningNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      return (
        <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-24">
            <div className="text-xl font-semibold hidden md:block">
              Get<span className="text-green-600">Skilled</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/profilepic.png"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            <div className={`absolute right-0 top-16 bg-white border border-gray-200 rounded-lg w-52 shadow-md p-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <div className="flex items-center space-x-2 p-2 bg-green-100 rounded">
                <img src="/assets/profilepic.png" alt="Profile" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm">Vanshika Kandya</p>
                  <a href="#" className="text-green-600 text-xs underline">View Profile <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-green-50">
                <i className="fas fa-cog"></i>
                <a href="#" className="text-sm">Settings</a>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-green-50">
                <i className="fas fa-sign-out-alt text-red-600"></i>
                <a href="#" className="text-sm text-red-600">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default LearningNavbar