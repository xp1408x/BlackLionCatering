import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 md:py-48" 
      style={{ backgroundImage: "url('/src/images/mark_group.svg')" }}
    >
      <div className="absolute inset-0 bg-[#282828] opacity-60"></div> {/* Overlay for text readability */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* <BrandMotif className="absolute top-4 right-4 md:top-8 md:right-8" /> */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          FOOD CATERING & SERVICE
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Come try our delicious options
        </p>
        <Button variant="outline-white" size="lg">
          BOOK NOW
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;