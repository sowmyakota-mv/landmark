import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-landmark-creations' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Process', href: isHomePage ? '#process' : '/#process' },
    { name: 'Why Choose Us', href: isHomePage ? '#why-choose-us' : '/#why-choose-us' },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    { name: 'Get Quote', href: isHomePage ? '#quote' : '/#quote', isCta: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isHomePage ? "absolute top-0 left-0 w-full z-50" : "fixed top-0 left-0 w-full z-50 bg-white shadow-lg"}>
      <div className="w-full px-8">
        
        {!isHomePage && (
          <div className="absolute top-0 h-full bg-white rounded-b-2xl shadow-lg"></div>
        )}
        
        <div className={`flex justify-between items-center w-full relative z-10`}>
          
          <div className="flex items-center">
            <img 
              src="/logo-transparent-png.png" 
              alt="Landmark Creations Logo"
              className="h-32 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-bold transition-colors duration-200 ${
                  link.isCta
                    ? 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
                    : isHomePage ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 ${
                isHomePage ? 'bg-white' : 'bg-blue-900'
              } transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${
                isHomePage ? 'bg-white' : 'bg-blue-900'
              } transition-opacity duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 ${
                isHomePage ? 'bg-white' : 'bg-blue-900'
              } transition-transform duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <nav className={`flex flex-col space-y-4 rounded-lg p-4 ${
            isHomePage ? 'bg-black/80 backdrop-blur-sm' : 'bg-white shadow-lg'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-lg transition-colors duration-200 text-center ${
                  link.isCta
                    ? `${isHomePage ? 'bg-blue-600' : 'bg-blue-700'} text-white px-4 py-2 rounded-lg hover:bg-blue-700`
                    : isHomePage ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
