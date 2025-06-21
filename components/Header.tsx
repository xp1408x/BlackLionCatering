import React, { useState } from 'react';
import { HamburgerIcon, GoogleIcon, FacebookIcon, InstagramIcon } from './icons';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark text-white p-4">
      <div className="container mx-auto">
        {/* Promo text */}
        <div className="text-center text-sm mb-2">
          Get extra 15% discount on every saturday
        </div>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold font-title">
            BLACK LION CATERING
          </div>
          {/* Navigation/Social Icons */}
          <nav className="flex items-center space-x-4">
            {/* Hamburger menu for mobile */}
            <button
              aria-label="Menu"
              className="hover:text-gray-300 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <HamburgerIcon className="w-6 h-6" />
            </button>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#events" className="hover:text-gray-300">Events</a>
              <a href="#story" className="hover:text-gray-300">Our Story</a>
              <a href="#gallery" className="hover:text-gray-300">Gallery</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
            <a href="#" aria-label="Google" className="hover:text-gray-300">
              <GoogleIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </nav>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-brand-dark rounded-lg shadow-lg flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#events" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Events</a>
            <a href="#story" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Our Story</a>
            <a href="#gallery" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;