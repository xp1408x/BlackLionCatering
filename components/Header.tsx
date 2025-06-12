
import React from 'react';
import { HamburgerIcon, GoogleIcon, FacebookIcon, InstagramIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark text-white p-4">
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
            <a href="#" aria-label="Google" className="hover:text-gray-300">
              <GoogleIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button aria-label="Menu" className="hover:text-gray-300 md:hidden">
              <HamburgerIcon className="w-6 h-6" />
            </button>
            {/* Desktop Navigation (example) */}
            <div className="hidden md:flex space-x-6">
              <a href="#story" className="hover:text-gray-300">Our Story</a>
              <a href="#events" className="hover:text-gray-300">Events</a>
              <a href="#gallery" className="hover:text-gray-300">Gallery</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;