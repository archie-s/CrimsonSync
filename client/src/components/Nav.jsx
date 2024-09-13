import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = ({ nav, handleNav, handleScrollTo, navRef }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleNavClick = (section) => {
    setActiveItem(section);
    handleScrollTo(section);
  };
  return (
    <nav className="bg-white p-2 mb-2 w-full flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo and Home Link */}
      <h1
        style={{ fontFamily: 'Merriweather, serif' }}
        className="text-3xl font-bold text-black cursor-pointer"
        onClick={() => handleScrollTo('home')}>
        CS
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6">
        <li
          className={`cursor-pointer ${activeItem === 'donors' ? 'text-red-400' : 'text-black'} hover:text-red-400`}
          onClick={() => handleNavClick('donors')}>
          Donors
        </li>

        <li
          className={`cursor-pointer ${activeItem === 'find-donars' ? 'text-red-400' : 'text-black'} hover:text-red-400`}
          onClick={() => handleNavClick('find-donars')}>
          Find Donars
        </li>

        <li
          className={`cursor-pointer ${activeItem === 'about-us' ? 'text-red-400' : 'text-black'} hover:text-red-400`}
          onClick={() => handleNavClick('about-us')}>
          About Us
        </li>

        <li
          className={`cursor-pointer ${activeItem === 'resources' ? 'text-red-400' : 'text-black'} hover:text-red-400`}
          onClick={() => handleNavClick('resources')}>
          Resources
        </li>

        <li
          className={`cursor-pointer ${activeItem === 'contact' ? 'text-red-400' : 'text-black'} hover:text-red-400`}
          onClick={() => handleNavClick('contact')}>
          Contact
        </li>
        <li className="flex items-center gap-4">
          <button
            onClick={() => alert('Sign In Clicked!')}
            className="px-4 py-1 bg-gray-400 text-black rounded-b-lg">
            Sign In
          </button>
          <button
            onClick={() => alert('Register Clicked!')}
            className="px-4 py-1 bg-black text-white rounded-lg ">
            Register
          </button>
        </li>
      </ul>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        <div className='flex items-center gap-4'>
          <button
            onClick={() => alert('Sign In Clicked!')}
            className="px-4 py-1 bg-gray-400 text-black rounded-b-lg">
            Sign In
          </button>
          <button
            onClick={() => alert('Register Clicked!')}
            className="px-4 py-1 bg-black text-white rounded-lg ">
            Register
          </button>
        </div>
        <div
          onClick={handleNav}
          className="cursor-pointer text-black hover:text-red-400">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        ref={navRef}
        className={`fixed right-0 top-0 w-[40%] h-full bg-white text-black transition-transform duration-500 z-10 ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        {nav && (
          <div
            onClick={handleNav}
            className="absolute top-8 right-4 cursor-pointer hover:text-red-400">
            <AiOutlineClose size={24} />
          </div>
        )}

        <ul className="uppercase p-4 text-center">
          <li
            className="p-4 border-b border-black pt-16 hover:text-red-400 cursor-pointer"
            onClick={() => handleScrollTo('donars')}>
            Donars
          </li>

          <li
            className="p-4 border-b border-black hover:text-red-400 cursor-pointer"
            onClick={() => handleScrollTo('find-donars')}>
            Find Donars
          </li>

          <li
            className="p-4 border-b border-black hover:text-red-400 cursor-pointer"
            onClick={() => handleScrollTo('about-us')}>
            About Us
          </li>

          <li
            className="p-4 border-b border-black hover:text-red-400 cursor-pointer"
            onClick={() => handleScrollTo('resources')}>
            Resources
          </li>

          <li
            className="p-4 border-b border-black hover:text-red-400 cursor-pointer"
            onClick={() => handleScrollTo('contact')}>
            Contact
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

// Add PropTypes for type-checking
Nav.propTypes = {
  nav: PropTypes.bool.isRequired,
  handleNav: PropTypes.func.isRequired,
  handleScrollTo: PropTypes.func.isRequired,
  navRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};

export default Nav;
