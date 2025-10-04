import React from 'react'
import AIInterviewHero from '../components/AIInterviewHero'
import HowItWorks from '../components/HowItWorks'
import ResultsSection from '../components/ResultsSection'
import AIInterrviewTestimonial from '../components/AIInterrviewTestimonial'
import AIInterviewFeature from '../components/AIInterviewFeature'
import FAQ from '../components/FAQ'
import PricingSection from '../components/PricingSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

const AIInterviewPrep = () => {

  return (
    <>
    <AIInterviewHero/>
    <HowItWorks/>
    <ResultsSection
    header={{
      heading : 'Backed by Vision, Built with Confidence',
      isSubtext : false
    }}
    stats={[
    {value: '1000', symbol:'+', label:'Mock Interviews created'},
    { value: '95', symbol:'%', label: 'User Satisfaction' },
    { value: '5K', symbol:'+', label: 'Students Reached' },
    { value: '3x', symbol:'', label: 'Faster placement Readiness' },
    ]}
    />
    <AIInterrviewTestimonial/>
    <AIInterviewFeature/>
    <PricingSection/>
    <WhyChooseUs/>
    <CTASection/>
    <FAQ/>
    </>
  )
}

export default AIInterviewPrep