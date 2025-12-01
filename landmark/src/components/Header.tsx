import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Get Quote', href: '#quote', isCta: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full px-8">
        <div className="flex justify-between items-center py-6 w-full">
          {/* Logo - White text for dark background */}
          {/* <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white">
                Landmark Creations
              </h1>
              <p className="text-xs text-gray-300 font-medium">
                Innovative Structures, Trusted Quality
              </p>
            </div>
          </div> */}
          <div className="flex items-center">
  <img 
    src="/logo-transparent-png.png" 
    alt="Landmark Creations Logo"
    className="h-36 w-auto object-contain"
  />
</div>


          {/* Desktop Navigation - White text for dark background */}
          <nav className="hidden lg:flex items-center space-x-8">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`font-bold transition-colors duration-200 ${
        link.isCta
          ? 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
          : 'text-white hover:text-[#1d2f61]'
      }`}
    >
      {link.name}
    </a>
  ))}
</nav>

          {/* Mobile Button - White hamburger for dark background */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu - Dark background for visibility */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
         <nav className="flex flex-col space-y-4  rounded-lg p-4 backdrop-blur-sm">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`font-lg transition-colors duration-200 text-center ${
        link.isCta
          ? 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
          : 'text-white hover:text-[#1d2f61]'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {link.name}
    </a>
  ))}
</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;