import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Community from './pages/Community';
import Technology from './pages/Technology';
import Engineering from './pages/Engineering';
import Commerce from './pages/Commerce';
import Arts from './pages/Arts';
import Signup from './pages/Signup';
import SignupLayout from './components/SignupLayout';
import AIRoadMapGenerator from './pages/AIRoadMapGenerator';
import Check from './Check';
import AICourseCreater from './pages/AICourseCreater';
import AIInterviewPrep from './pages/AIInterviewPrep';
import Program from './pages/Program';
import Login from './pages/Login';
import LearningPage from './pages/LearningPage';
import LearningPageCopy from './pages/LearningPageCopy';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - No Authentication Required */}
        <Route path='/check' element={<Check/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        
        {/* Public Routes - No Authentication Required */}
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/Engineering" element={<Engineering/>}/>
          <Route path="/commerce" element={<Commerce/>}/>
          <Route path="/arts" element={<Arts/>}/>
          <Route path='/program' element={<Program/>}/>
          <Route path='/ai/interviewPrep' element={<AIInterviewPrep/>}/>
          <Route path='/ai/roadMapGenerator' element={<AIRoadMapGenerator/>}/>
          <Route path='/ai/courseCreator' element={<AICourseCreater/>}/>
        </Route>
        
        {/* Protected Routes - Authentication Required */}
        <Route element={<Layout/>}>
          <Route path="/community" element={
            <ProtectedRoute>
              <Community/>
            </ProtectedRoute>
          }/>
        </Route>
        
        {/* Learning Routes - Authentication Required */}
        <Route path='/learning' element={
          <ProtectedRoute>
            <LearningPage/>
          </ProtectedRoute>
        }/>
        <Route path='/learning/copy' element={
          <ProtectedRoute>
            <LearningPageCopy/>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App
