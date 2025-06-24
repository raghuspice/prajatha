import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <svg 
              className="h-10 w-10 lg:h-12 lg:w-12" 
              viewBox="0 0 108.51 134.71" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className="fill-emerald-600" 
                d="M77.53,2.56C69.11.69,60.54.11,51.92.02c-.05,0-.1-.02-.16-.02H2.63c-.78,0-1.42.63-1.42,1.42s.63,1.42,1.42,1.42h4.51c7.59,2.04,10.99,7.27,10.42,16.33-.09,10.83-.07,21.68,0,32.52-1.13,24.23,1.72,48.88-1.06,72.89-2.07,6.33-6.24,6.72-9.88,7.31H0v2.83h51.96v-2.83h-6.23c-.73-.1-1.54-.2-2.47-.29-7.48-1.55-11.48-9.16-10.92-16.36-.63-5.19,2.47-11.04,8.2-10.24,2.17,1.56,1.75,6.15,5.45,8.07,6.39,5.66,23.17,6.42,22.44-5.09-1.69-9.28-13.28-12.96-21.36-9.86-2.82.88-4.68,2.5-5.35,5.51-2.61-.94-4.64.72-6.95,1.57,17.72-31.08,9.93-4.62,32.42-17.52,17.78-13.87-1.37-22.97-14.66-12.92-3.73,2.87-7.14,7.94-6.07,12.82-2.92,1.58-4.57,4.9-6.88,7.26-2.88,4.3-4.15,5-1.58-.5,3.11-6.63,4.71-13.73,8.03-20.25,13.54-17.66,21.99-23.62,25.69-47.93-11.32,6.36-21.65,15.76-24.67,28.87-2.74,13.78-4.52,27.73-11.09,40.47-.67-5.56.7-9.39-.84-15.04.19-3.87-11.61-31.82-4.93-23.54,3.96,4.91,5.89,17.64,6.76,16.97,1.44-1.13.79-25.47.79-25.47-.19-11.6-.01-23.22,0-34.83.66-2.18-1.12-7.74,1.13-8.46,14.21.59,31.13-.78,41.44,10.98,12.99,14.42,11.59,40.26-4.72,51.62,0,0,3.47,6.8,5.2,8.67,4.54-.8,8.61-4.15,12.29-6.9,27.5-18.66,15.77-60.52-15.54-66.91ZM64.03,106.24c-4.82-3.12-9.94-5.22-15.82-5.25,5.17-1.58,14.23-.53,15.82,5.25ZM65.27,73.5c-5.93.94-11.41,4.08-15.63,8.24,1.76-4.89,10.29-9.82,15.63-8.24ZM62.13,38.3c-3.92,9.74-9.67,18.74-13.88,28.4.54-10.16,8.51-20.57,13.88-28.4ZM30.85,105.14c3.18-13.29-4.17-26.94-4.87-39.51,4.36,10.37,11.87,29.57,4.87,39.51Z"
              />
            </svg>
            <span className="text-2xl lg:text-3xl font-bold text-emerald-800">Prjatha</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium w-fit"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;