import TechnologyHeroSection from "../components/TechnologyHeroSection";
import ProgramsSection from "../components/ProgramSection";
import TechnologyLearningModel from "../components/TechnologyLearningModel";
import FeaturesSection from "../components/FeaturesSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import HeroBanner from "../components/HeroBanner";

const Technology = () => {
  return (
    <>
      <TechnologyHeroSection
        label1={"Build your future with"}
        label2={"Industry-Ready Tech"}
        label3={"Skills"}
        image={"../../public/assets/Illustration (4).svg"}
        isButton={false}
      />
      <TechnologyLearningModel />
      <ProgramsSection
        title={"Explore our"}
        highlightTitle={"Courses"}
        description={
          "Explore diverse courses and find the one that aligns your goals and interests"
        }
        isLearnMoreButton={true}
      />
      <HeroBanner
        label="PICK THE RIGHT COURSE FOR YOU"
        title="The Next Chapter Needs You"
        description="We've built the tools. Designed the journey. Now it's your turn to step in, get skilled, and create your future."
        buttonText="Start Learning Now"
        imageUrl="../../public/assets/CTA_1.jpg"
      />
      <FeaturesSection />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Technology;
