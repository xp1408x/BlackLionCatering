
import React from 'react';

const FoodOnWheelsSection: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-2">
          FOOD ON WHEELS JOY
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-brand-accent">
          ON MEALS
        </h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Experience the delight of Black Lion Catering wherever you are. Our mobile catering solutions bring gourmet meals and exceptional service directly to your doorstep or event location.
        </p>
        {/* Placeholder for a relevant image or graphic */}
        <div className="mt-8">
          <img 
            src="https://picsum.photos/seed/foodtruck/800/400" 
            alt="Food on Wheels service" 
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FoodOnWheelsSection;