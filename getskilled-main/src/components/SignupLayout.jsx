import { Outlet } from 'react-router-dom';
import TopBanner from './TopBanner';
import Navbar from './Navbar';

const SignupLayout = () => {
  return (
    <div className="font-sans">
      <TopBanner />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SignupLayout;