import MainSection from '../components/MainSection'
import ProgramsSection from '../components/ProgramSection'
import FairDealSection from '../components/FairDealSection'
import AIInterviewSection from '../components/AIInterviewSection'
import AITools from '../components/AITools'
import ResultsSection from '../components/ResultsSection'
import Testimonials from '../components/Testimonials'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <>
    <MainSection/>
    <ProgramsSection
    title={'Choose from our Top 3'}
    highlightTitle={'Bestselling Programs'}
    description={'Learn from the best! Explore our top-rated programs, trusted by thousands to build in-demand skills and accelerate your career.'}
    isSubHeading={true}
    isLearnMoreButton={true}
    />
    <HeroBanner
        label=""
        title="Not sure which course to choose?"
        description="Answer a few questions, and let our counceller match you with the best course."
        buttonText="Talk to our expert"
        imageUrl='/assets/CTA_1.jpg'
        />
    <FairDealSection/>
    <AIInterviewSection/>
    <AITools
      title={'Explore Our '}
      subTittle={'AI-Powered Tools'}
    />
    <ResultsSection
    header={{
      heading : 'Our Results',
      highlightText : 'in Numbers',
      isSubtext:true
    }}
    stats={[
      {value: '95', symbol:'%', label:'Success Rate'},
      { value: '50', symbol:'+', label: 'Industry Partners' },
    { value: '100', symbol:'+', label: 'Success Stories' },
    { value: '10k', symbol:'+', label: 'Interview Prep Users' },
    ]}
    />
    <Testimonials/>
    </>
  )
}

export default Home