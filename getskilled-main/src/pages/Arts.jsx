import React from 'react'
import TechnologyHeroSection from '../components/TechnologyHeroSection'
import TechnologyLearningModel from '../components/TechnologyLearningModel'
import EngineeringProgramSection from '../components/EngineeringProgramSection'
import HeroBanner from '../components/HeroBanner'
import FeaturesSection from '../components/FeaturesSection'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const Arts = () => {
  return (
    <>
    <TechnologyHeroSection
      label1={'Create, Express, Inspir-'}
      label2={'Your Creative Passion With'}
      label3={'Purpose'}
      image={'../../public/assets/Illustration_Arts.svg'}
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

export default Arts