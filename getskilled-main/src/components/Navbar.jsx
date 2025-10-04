import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isAiFeaturesDropdownOpen, setIsAiFeaturesDropdownOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileAiFeaturesOpen, setIsMobileAiFeaturesOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()

  // Simulate checking auth status (replace with actual auth logic)
  const getCurrentUser = ()=> {
    const userData = localStorage.getItem('userData');
    console.log('Getting current user:', userData);
    return userData ? JSON.parse(userData) : null;
  }

  // Check authentication status
  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      return false;
    }

    try {
      const response = await fetch('https://getskilled-main-backend.onrender.com/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data.user));
        setIsAuthenticated(true);
        return true;
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      console.warn('Auth check failed (CORS or network issue):', error.message);
      // Don't clear auth state on network errors, just assume offline mode
      const userData = localStorage.getItem('userData');
      if (userData) {
        setIsAuthenticated(true);
        return true;
      }
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Handle auth status on mount and when storage changes
  useEffect(() => {
    checkAuthStatus();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'token' || e.key === 'userData') {
        checkAuthStatus();
      }
    };

    // Listen for custom auth state change events
    const handleAuthStateChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authStateChanged', handleAuthStateChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authStateChanged', handleAuthStateChange);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle mobile dropdowns
  const toggleMobileDropdown = (dropdown) => {
    if (dropdown === 'programs') {
      setIsMobileProgramsOpen(!isMobileProgramsOpen);
      setIsMobileAiFeaturesOpen(false); // Close other dropdown
    } else {
      setIsMobileAiFeaturesOpen(!isMobileAiFeaturesOpen);
      setIsMobileProgramsOpen(false); // Close other dropdown
    }
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-toggle')) {
        setIsProgramsDropdownOpen(false);
        setIsAiFeaturesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Placeholder for checkAuthAndRedirect
 async function checkAuthAndRedirect(url) {
    const isAuthenticated = await checkAuth();
    if (isAuthenticated) {
        navigate(url)
    }
}

// Check if user is authenticated
async function checkAuth() {
    const token = localStorage.getItem('token');
    console.log('Checking auth, token:', token);
    
    if (!token) {
        console.log('No token found, redirecting to login');
        navigate('/login')
        return false;
    }

    try {
        console.log('Verifying token with backend...');
        // Verify token with Render backend
        const response = await fetch('https://backend-getskilled.onrender.com/api/auth/verify-token', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Token verification response:', response.status);

        if (!response.ok) {
            console.log('Token verification failed, redirecting to login');
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            // window.location.href = '/views/index.html';
            navigate('/')
            return false;
        }

        const data = await response.json();
        console.log('Token verification successful, user data:', data);
        localStorage.setItem('userData', JSON.stringify(data.user));
        return true;
    } catch (error) {
        console.warn('Auth check failed (CORS or network issue):', error.message);
        // Don't redirect on network errors, check if we have cached user data
        const userData = localStorage.getItem('userData');
        if (userData) {
            console.log('Using cached user data due to network issue');
            return true;
        }
        return false;
    }
}


  //handle smooth scrolling to footer
  const ScrollToFooter =(e)=>{
    e.preventDefault();
    const footer = document.getElementById('footer');
    if(footer){
      footer.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <>
    <style>
        {`
          .sticky-nav {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
          }
          .mobile-nav {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      {/* Desktop Header */}
      {/* <header className="sticky top-0 z-[1000] bg-white/80 backdrop-blur-lg hidden md:flex px-4 py-4"> */}
      <header className="sticky-nav hidden md:flex px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap w-full">
          {/* Logo */}
          <div className="font-sans text-2xl font-extrabold hidden lg:flex">
            Get<span className="text-green-600">Skilled</span>
          </div>

          {/* Hamburger (hidden on desktop) */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>

          {/* Nav Links */}
          <nav className="flex gap-6 items-center">
            <a href="/" className="text-gray-900 hover:text-green-600 text-lg ">Home</a>
            <a href="/about" className="text-gray-900 hover:text-green-600 text-lg ">About</a>

            {/* Programs Dropdown */}
            <div className="relative dropdown">
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-lg flex items-center gap-1 dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsProgramsDropdownOpen(!isProgramsDropdownOpen);
                  setIsAiFeaturesDropdownOpen(false);
                }}
              >
                Programs <img src="/assets/Vector.svg" alt="" className="w-4 h-4" />
              </a>
              <div className={`absolute bg-white min-w-[200px] top-full left-0 shadow-md rounded-lg p-2 ${isProgramsDropdownOpen ? 'block' : 'hidden'}`}>
                <a href="/technology" className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded">Technology</a>
                {/* <a href="/engineering" className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded">Engineering</a>
                <a href="/commerce" className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded">Commerce</a>
                <a href="/arts" className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded">Arts</a> */}
              </div>
            </div>

            {/* Community Link */}
            {isAuthenticated ? (
              <a href="/community" className="text-gray-900 hover:text-green-600 text-lg flex items-center">
                Community <span className="text-[10px] bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded px-1 py-0.5 ml-1">Exclusive</span>
              </a>
            ) : (
              <a href="/login" className="text-gray-900 hover:text-green-600 text-lg flex items-center">
                Community <span className="text-[10px] bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded px-1 py-0.5 ml-1">Exclusive</span>
              </a>
            )}

            {/* AI Features Dropdown */}
            <div className="relative dropdown">
              <a
                href="#"
                className="text-gray-900 hover:text-green-600 text-lg flex items-center gap-1 dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAiFeaturesDropdownOpen(!isAiFeaturesDropdownOpen);
                  setIsProgramsDropdownOpen(false);
                }}
              >
                AI Features <img src="/assets/Vector.svg" alt="" className="w-4 h-4" />
              </a>
              <div className={`absolute bg-white min-w-[250px] top-full left-0 shadow-md rounded-lg p-2 ${isAiFeaturesDropdownOpen ? 'block' : 'hidden'}`}>
                {/* <button
                  onClick={() => navigate('/ai/interviewPrep')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  AI Interview Prep
                </button>
                <button
                  onClick={() => navigate('/ai/roadMapGenerator')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  AI Roadmap Generator
                </button>
                <button
                  onClick={() => navigate('/ai/courseCreator')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  AI Course Creator
                </button> */}
                <button
                  onClick={() => window.open('https://getskilled-interview.onrender.com/dashboard', '_blank')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  AI Interview Taker
                </button>
                <button
                  onClick={() => window.open('https://getskilled-resume-zg9f.onrender.com', '_blank')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  AI Resume Builder
                </button>
                <button
                  onClick={() => window.open('https://skillomate-ai.onrender.com/', '_blank')}
                  className="block px-4 py-2 text-gray-900 hover:bg-green-50 hover:text-green-600 rounded w-full text-left"
                >
                  GetSkilled Homework Helper
                </button>
              </div>
            </div>

            <a href="#footer" 
            onClick={ScrollToFooter}
            className="text-gray-900 hover:text-green-600 text-lg">Contact</a>
          </nav>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                Welcome, {getCurrentUser()?.name || 'User'}
              </span>
              <button 
                onClick={logout}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-green-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <a href="/login">
                <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg text-base font-medium hover:bg-green-50">
                  Sign In
                </button>
              </a>
              <a href="/signup">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-green-700">
                  Sign Up
                </button>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-4 sticky top-0 z-[1000] bg-white shadow-md">
        <div className="font-sans text-2xl font-extrabold">
          Get<span className="text-green-600">Skilled</span>
        </div>
        <div className="text-2xl cursor-pointer" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className={`md:hidden flex-col bg-white p-1 border-t border-gray-200 ${isMobileMenuOpen ? 'flex' : 'hidden'}`} id="mobileNav">
        <ul className="flex flex-col list-none p-0 m-0">
          <li className="my-1.5">
            <a href="/" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Home</a>
          </li>
          <li className="my-1.5">
            <a href="/about" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">About</a>
          </li>
          <li className="my-1.5 mobile-dropdown">
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown('programs');
              }}
            >
              Programs ▾
            </a>
            <div className={`flex-col bg-gray-50 pl-5 mt-1 border-l-2 border-gray-200 ${isMobileProgramsOpen ? 'flex' : 'hidden'}`} id="mobilePrograms">
              <a href="/technology" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Technology</a>
              {/* <a href="/engineering" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Engineering</a>
              <a href="/commerce" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Commerce</a>
              <a href="/arts" className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Arts</a> */}
            </div>
          </li>
          <li className="my-1.5">
            {isAuthenticated ? (
              <a href="/community" className="text-gray-700 hover:bg-gray-100 px-2 py-1 flex items-center">
                Community <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-black text-[10px] rounded px-1.5 py-0.5 ml-1">Premium</span>
              </a>
            ) : (
              <a href="/login" className="text-gray-700 hover:bg-gray-100 px-2 py-1 flex items-center">
                Community <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-black text-[10px] rounded px-1.5 py-0.5 ml-1">Premium</span>
              </a>
            )}
          </li>
          <li className="my-1.5 mobile-dropdown">
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown('ai-features');
              }}
            >
              AI Features ▾
            </a>
            <div className={`flex-col bg-gray-50 pl-5 mt-1 border-l-2 border-gray-200 ${isMobileAiFeaturesOpen ? 'flex' : 'hidden'}`} id="mobileMore">
              {/* <button
                onClick={() => navigate('/ai/interviewPrep')}
                className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              >
                AI Interview Prep
              </button>
              <button
                onClick={() => navigate('/ai/roadMapGenerator')}
                className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              >
                AI Roadmap Generator
              </button>
              <button
                onClick={() => navigate('/ai/courseCreator')}
                className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              >
                AI Course Creator
              </button> */}
              <button
                onClick={() => navigate('/ai/interviewTaker')}
                className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              >
                AI Interview Taker
              </button>
              <button
                onClick={() => window.open('http://localhost:3000', '_blank')}
                className="text-gray-700 hover:bg-gray-100 px-2 py-1 block"
              >
               AI Resume Builder
              </button>
            </div>
          </li>
          <li className="my-1.5">
            <a href="#footer" 
            onClick={ScrollToFooter}
            className="text-gray-700 hover:bg-gray-100 px-2 py-1 block">Contact</a>
          </li>
        </ul>
        {isAuthenticated ? (
          <div className="mt-2 space-y-2">
            <div className="text-center text-gray-700 text-sm px-2 py-1">
              Welcome, {getCurrentUser()?.name || 'User'}
            </div>
            <button 
              onClick={logout}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-base font-medium w-full text-center hover:bg-green-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="mt-2 space-y-2">
            <a href="/login" className="block">
              <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg text-base font-medium w-full text-center hover:bg-green-50">
                Sign In
              </button>
            </a>
            <a href="/signup" className="block">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-base font-medium w-full text-center hover:bg-green-700">
                Sign Up
              </button>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;