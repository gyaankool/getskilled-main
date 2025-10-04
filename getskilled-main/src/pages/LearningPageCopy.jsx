import React, { useState } from 'react'
import LearningMainCopy from '../components/LearningMainCopy';
import LearningNavbar from '../components/LearningNavbar';
import LearningHeader from '../components/LearningHeader';
import LearningSidebar from '../components/LearningSidebar';

const LearningPageCopy = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
          const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
          };
  return (
   <div className="font-sans bg-gray-50 text-gray-800 min-h-screen overflow-x-hidden">
    <LearningNavbar/>
    <LearningHeader toggleSidebar={toggleSidebar}/>
    <LearningSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <LearningMainCopy/>
    </div>
  )
}

export default LearningPageCopy