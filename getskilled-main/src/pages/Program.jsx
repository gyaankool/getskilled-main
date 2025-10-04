// import ProgramHero from '../components/ProgramHero'
// import ProgramDetails from '../components/ProgramDetails'
// import CurriculumSection from '../components/CurriculumSection'
// import OutcomeSection from '../components/OutcomeSection'
// import ProjectsSection from '../components/ProjectsSection'
// import Faqs from '../components/Faqs'
// import { useLocation } from 'react-router-dom'

// const Program = () => {
//   const location = useLocation()
//   const program = location?.state?.program ||{}

//   return (
//     <>
//         <ProgramHero program={program}/>
//         <ProgramDetails program={program}/>
//         <CurriculumSection program={ program}/>
//         <OutcomeSection program={program}/>
//         <ProjectsSection program={program}/>
//         <Faqs program={program}/>
//     </>
//   )
// }

// export default Program



import ProgramHero from '../components/ProgramHero'
import ProgramDetails from '../components/ProgramDetails'
import CurriculumSection from '../components/CurriculumSection'
import OutcomeSection from '../components/OutcomeSection'
import ProjectsSection from '../components/ProjectsSection'
import Faqs from '../components/Faqs'
import { useLocation } from 'react-router-dom'

const Program = () => {
  const location = useLocation()
  const program = location?.state?.program || {}

  return (
    <>
      <ProgramHero program={program} />
      <ProgramDetails program={program} />
      <CurriculumSection program={program} />
      <OutcomeSection program={program} />
      <ProjectsSection program={program} />
      <Faqs program={program} />
    </>
  )
}

export default Program