import React, { useState } from 'react';

const reviews = [
  {
    name: "Emily Johnson",
    text: "“The service was excellent and the food was delicious. I would definitely hire them again for my next event!”"
  },
  {
    name: "Michael Smith",
    text: "“Everything was perfect, from the presentation to the taste. Highly recommended!”"
  },
  {
    name: "Jessica Williams",
    text: "“The team was very professional and attentive to every detail. Our guests were delighted.”"
  },
  {
    name: "David Brown",
    text: "“Incredible experience! The food exceeded our expectations and the staff was very friendly.”"
  },
  {
    name: "Ashley Miller",
    text: "“Punctual, organized, and with a great variety of dishes. I will definitely recommend them.”"
  }
];

const ReviewCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = (idx: number) => {
    setDirection(idx > active ? 'right' : 'left');
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 350);
  };
  const prev = () => goTo(active === 0 ? reviews.length - 1 : active - 1);
  const next = () => goTo(active === reviews.length - 1 ? 0 : active + 1);

  return (
    <section className="w-full py-20 flex flex-col items-center relative bg-black">
      <h2 className="text-[64px] font-bold text-center mb-2 uppercase text-white">REVIEWS</h2>
      <h3 className="text-[40px] font-roboto text-center mb-10 text-white font-normal">Review by - Google</h3>
      <div className="flex items-center justify-center w-full max-w-3xl mx-auto relative">
        {/* Flecha Izquierda */}
        <button onClick={prev} aria-label="Anterior" className="absolute left-0 z-10 p-2">
          <span className="text-white text-[48px] select-none">&#60;</span>
        </button>
        {/* Contenido de la reseña */}
        <div className="flex-1 flex flex-col items-center px-12 overflow-hidden">
          <div
            className={`flex items-center justify-center mb-6 transition-all duration-300 ease-in-out ${
              animating ? (direction === 'right' ? 'animate-fade-left' : 'animate-fade-right') : ''
            }`}
          >
            <span className="text-[28px] font-roboto text-white mr-4">{reviews[active].name}</span>
            {/* Estrellas */}
            <svg width="168" height="24" viewBox="0 0 168 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[...Array(5)].map((_, i) => (
                <polygon
                  key={i}
                  points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"
                  transform={`translate(${i * 33},0)`}
                  fill="#fff"
                />
              ))}
            </svg>
          </div>
          <div
            className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out ${
              animating ? (direction === 'right' ? 'animate-fade-left' : 'animate-fade-right') : ''
            }`}
          >
            <span className="text-white text-[64px] font-bold mr-4">“</span>
            <p className="text-white text-[28px] text-center max-w-2xl flex-1">{reviews[active].text}</p>
            <span className="text-white text-[64px] font-bold ml-4">”</span>
          </div>
        </div>
        {/* Flecha Derecha */}
        <button onClick={next} aria-label="Siguiente" className="absolute right-0 z-10 p-2">
          <span className="text-white text-[48px] select-none">&#62;</span>
        </button>
      </div>
      {/* Paginación */}
      <div className="flex justify-center items-center mt-8" style={{ width: 188, height: 20 }}>
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`mx-2 rounded-full border border-white transition-all duration-200 ${
              active === idx ? 'bg-white opacity-100 w-5 h-5' : 'bg-transparent opacity-50 w-4 h-4'
            }`}
            style={{ outline: 'none' }}
            aria-label={`Ir a la reseña ${idx + 1}`}
          />
        ))}
      </div>
      {/* Animaciones personalizadas */}
      <style>{`
        .animate-fade-left {
          animation: fadeLeft 0.35s;
        }
        .animate-fade-right {
          animation: fadeRight 0.35s;
        }
        @keyframes fadeLeft {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes fadeRight {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(40px); }
        }
      `}</style>
    </section>
  );
};

export default ReviewCarousel;
