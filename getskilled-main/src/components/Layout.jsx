import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";


const Layout = () => {
   return (
    <div className="font-sans">
      <TopBanner />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout