import AITools from "../components/AITools"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import HeroBanner from "../components/HeroBanner"
import LearningModel from "../components/LearningModel"
import ResultsSection from "../components/ResultsSection"
import Stats from "../components/Stats"
import Story from "../components/Story"
import Testimonials from "../components/Testimonials"

const About = () => {
 return (
    <>
    <Hero/>
    <Story/>
    <LearningModel/>
     <AITools
      title={'Explore Our '}
      subTittle={'AI-Powered Tools'}
    />
    <ResultsSection
    stats={[
      {value: '95', symbol:'%', label:'Success Rate'},
      { value: '50', symbol:'+', label: 'Industry Partners' },
    { value: '100', symbol:'+', label: 'Success Stories' },
    { value: '10k', symbol:'+', label: 'Interview Prep Users' },
    ]}
    />
    <Testimonials/>
    <FAQ/>
    <HeroBanner
        label="PICK THE RIGHT COURSE FOR YOU"
        title="The Next Chapter Needs You"
        description="We've built the tools. Designed the journey. Now it's your turn to step in, get skilled, and create your future."
        buttonText="Start Learning Now"
        imageUrl='../../public/assets/Image_CTA.jpg'
        />
    </>
  );
}

export default About