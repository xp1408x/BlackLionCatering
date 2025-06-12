
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventTypesSection from './components/EventTypesSection';
import OurStorySection from './components/OurStorySection';
import FoodOnWheelsSection from './components/FoodOnWheelsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <EventTypesSection />
        <OurStorySection />
        <FoodOnWheelsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
