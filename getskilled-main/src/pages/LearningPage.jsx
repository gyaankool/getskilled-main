import React, { useState } from 'react'
import LearningNavbar from '../components/LearningNavbar'
import LearningHeader from '../components/LearningHeader'
import LearningMainContent from '../components/LearningMainContent'
import LearningSidebar from '../components/LearningSidebar'

const LearningPage = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen overflow-x-hidden">
    <LearningNavbar/>
    <LearningHeader toggleSidebar={toggleSidebar}/>
    <LearningSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <LearningMainContent/>
    </div>
  )
}

export default LearningPage