import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventTypesSection from './components/EventTypesSection';
import OurStorySection from './components/OurStorySection';
import FoodOnWheelsSection from './components/FoodOnWheelsSection';
import ReviewCarousel from './components/ReviewCarousel';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import PromoSection from './components/PromoSection';
import EventContactSection from './components/EventContactSection';
import MenuQuinceanera from './components/MenuQuinceanera';
import MenuWeddings from './components/MenuWeddings';
import MenuSocialEvents from './components/MenuSocialEvents';
import MenuCorporateEvents from './components/MenuCorporateEvents';

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <EventTypesSection />
                <OurStorySection />
                <FoodOnWheelsSection />
                <GallerySection />
                <ReviewCarousel />
                <PromoSection />
                <EventContactSection />
              </>
            }
          />
          <Route path="/menu/quinceanera" element={<MenuQuinceanera />} />
          <Route path="/menu/weddings" element={<MenuWeddings />} />
          <Route path="/menu/social-events" element={<MenuSocialEvents />} />
          <Route path="/menu/corporate-events" element={<MenuCorporateEvents />} />
          {/* Agrega más rutas para otros menús si lo deseas */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
