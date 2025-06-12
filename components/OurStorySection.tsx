import React from 'react';
import Button from './Button';

const OurStorySection: React.FC = () => {
  return (
    <section 
      id="story"
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://picsum.photos/seed/buffetstory/1200/800')" }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div> {/* Light overlay for text readability */}
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center min-h-[500px]">
        <div className="md:w-1/2 bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
          {/* BrandMotif eliminado */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">OUR STORY</h2>
          <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            UNFORGETTABLE FLAVORS FOR YOUR EVENTS
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed font-roboto">
            At Black Lion Catering, we believe that food is more than just sustenance; it's an experience, a memory, a way to bring people together. Our philosophy is rooted in creating unforgettable moments that last a lifetime. We are passionate about crafting culinary delights that not only tantalize your taste buds but also tell a story. Each dish is prepared with the freshest ingredients, meticulous attention to detail, and a dash of love, ensuring that your special occasions are graced with flavors that will be treasured and memories that will be cherished.
          </p>
          <div className="text-center">
            <Button variant="outline-dark" size="lg">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;