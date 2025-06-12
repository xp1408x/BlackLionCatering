
import React from 'react';
import { GoogleIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">BLACK LION CATERING</h3>
        <p className="mb-6">Creating unforgettable culinary experiences for your special moments.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" aria-label="Google" className="text-gray-300 hover:text-white">
            <GoogleIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; ${new Date().getFullYear()} Black Lion Catering. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">
          Crafted with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;