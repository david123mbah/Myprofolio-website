import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 p-3 bg-gradient-to-r from-purple-600 via-blue-800 to-purple-600 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with circular gradient */}
        <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 border border-transparent">
          <div className="text-2xl font-bold text-white bg-black px-6 py-3 rounded-full md:text-3xl sm:text-xl">
            Mbah David
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center space-x-10 text-lg text-white">
          <NavLink to="/" className="hover:text-pink-400 transition duration-300">Home</NavLink>
          <NavLink to="/projects" className="hover:text-pink-400 transition duration-300">Projects</NavLink>
          <NavLink to="/about" className="hover:text-pink-400 transition duration-300">About</NavLink>
          <NavLink to="/contact" className="hover:text-pink-400 transition duration-300">Contact</NavLink>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-300">Light</span>
          <label htmlFor="darkModeToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          </label>
          <span className="text-sm text-gray-300">Dark</span>
        </div>

        {/* Contact Me Button */}
        <a href="/contact" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
          Contact me
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <BiMenuAltRight size={37} className="text-white" onClick={() => setMenuOpened((prev) => !prev)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
        <div
          className={`absolute top-0 h-screen w-64 bg-${darkMode ? 'gray-900' : 'white'} shadow-lg transform ${menuOpened && isMobile ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-6 space-y-4 text-lg">
            <NavLink to="/" className="hover:text-purple-500">Home</NavLink>
            <NavLink to="/projects" className="hover:text-purple-500">Projects</NavLink>
            <NavLink to="/blog" className="hover:text-purple-500">Blog</NavLink>
            <NavLink to="/contact" className="hover:text-purple-500">Contact</NavLink>
          </div>
        </div>
      </OutsideClickHandler>
    </header>
  );
};

export default Navbar;
