import React from 'react';
import { GoogleIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  const whatsappMessage = encodeURIComponent("💌 Thank you for writing to us! We'll be in touch soon to share our menu and create an unforgettable experience together. ✨🍽️" + "\n\n✨ Hello! We'll be in touch soon to help you choose the perfect catering service and make your event unique and unforgettable. 🎉");
  const whatsappURL = `https://wa.me/+51984342126?text=${whatsappMessage}`; // Cambia el número por el tuyo real

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="titleText24 font-bold uppercase">Crafted with Passion</h2>
          <p className="subtitleText16 mt-2">
            © {new Date().getFullYear()} Black Lion Catering.<br />All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
            <span className="subtitleText16">Powered by:</span>
            <img src="/src/images/logo_black_lion.webp" alt="Black Lion Logo" className="h-6" />
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <img src="/src/images/logo_orbit_rocket.webp" alt="Orbit Rocket Logo" className="h-16" />
          <h2 className="titleText24 font-bold mt-2">BLACK LION CATERING</h2>
          <p className="subtitleText16 mt-2 max-w-xs">
            Creating unforgettable culinary experiences for your special moments.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.google.com/maps/search/Black+Lion+Catering"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
            >
              <GoogleIcon className="w-5 h-5 text-white cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 text-white cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 text-white cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="titleText24 font-bold uppercase">Contact Us</h2>
          <p className="subtitleText16 mt-2">info@blacklioncatering.com</p>
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[var(--gold-brand)] w-12 h-12 flex items-center justify-center rounded-full"
            aria-label="WhatsApp"
          >
            <svg className="w-7 h-7" fill="black" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;