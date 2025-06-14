import React from 'react';
import Button from './Button';

const OurStorySection: React.FC = () => {
  return (
    <section 
      id="story"
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('https://assets.zyrosite.com/A85VN675bJTvnpRk/our-story-background-AQEZ9NxVgyh29DQ9.webp')" }}
    >
      <div className="absolute inset-0 bg-[#282828] opacity-60"></div>  
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center min-h-[500px]">
        <div className="md:w-1/2 p-8 rounded-lg shadow-xl text-center">
          {/* BrandMotif eliminado */}
          <h2 className="text-[64px] font-bold text-white mb-2">OUR STORY</h2>
          <h3 className="text-[48px] font-semibold text-white mb-6">
            UNFORGETTABLE FLAVORS FOR YOUR EVENTS
          </h3>
          <p className="text-white text-[24px] mb-8 leading-relaxed font-roboto">
            At the heart of every celebration, whether it's the "I do" of a wedding, the vibrant joy of a quinceañera, the camaraderie of a social event, or the sophistication of a corporate meeting, lies a universal desire: to create lasting memories. It was with this deep conviction that Black Lion Catering was born, not just as a food service, but as a promise to transform every event into an unforgettable experience. Black Lion Catering is proud to be the trusted partner for your events. Because in the end, we don't just serve food; we create moments that last, celebrations that resonate, and memories that will be treasured forever. Allow us to be part of your next story.
          </p>
          <div className="text-center">
            <Button variant="outline-white" size="lg" className="text-[34px]">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;