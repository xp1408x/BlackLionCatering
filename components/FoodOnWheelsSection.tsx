import React from 'react';

const FoodOnWheelsSection: React.FC = () => {
  // Mensaje predeterminado para WhatsApp
  const whatsappMessage = encodeURIComponent("💌 Thank you for writing to us! We'll be in touch soon to share our menu and create an unforgettable experience together. ✨🍽️" + "\n\n✨ Hello! We'll be in touch soon to help you choose the perfect catering service and make your event unique and unforgettable. 🎉");
  const whatsappURL = `https://wa.me/+51984342126?text=${whatsappMessage}`; // Cambia el número por el tuyo real

  return (
    <section className="bg-[#B0965F] text-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[40px] md:text-[64px] mb-0">
          FOOD ON WHEELS JOY ON MEALS
        </h2>
        <p className="text-[28px] md:text-[40px] mt-4 mb-8 font-roboto tracking-wide">
          A GLIMPSE OF OUR CREATIONS
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black hover:bg-[#222] rounded-full text-[28px] font-bold transition"
            style={{ color: "var(--gold-brand)" }}
            aria-label="Contáctanos por WhatsApp"
          >
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
            </svg>
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodOnWheelsSection;