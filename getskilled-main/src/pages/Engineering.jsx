import React from 'react'
import TechnologyHeroSection from '../components/TechnologyHeroSection'
import TechnologyLearningModel from '../components/TechnologyLearningModel'
import HeroBanner from '../components/HeroBanner'
import FeaturesSection from '../components/FeaturesSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import EngineeringProgramSection from '../components/EngineeringProgramSection'

const Engineering = () => {
  return (
    <>
    <TechnologyHeroSection
      label1={'Build What the World Needs-Build Your'}
      label2={'Engineering Skills'}
      label3={'Today!'}
      image={'../../public/assets/Illustration_Engineering.svg'}
      isButton={true}
    />
    <TechnologyLearningModel/>
     <EngineeringProgramSection/>
     <HeroBanner
      label="PICK THE RIGHT COURSE FOR YOU"
      title="The Next Chapter Needs You"
      description="We've built the tools. Designed the journey. Now it's your turn to step in, get skilled, and create your future."
      buttonText="Start Learning Now"
      imageUrl='../../public/assets/CTA_1.jpg'
      />
    <FeaturesSection/>
    <Testimonials/>
    <FAQ/>
    </>
  )
}

export default Engineering