
import React from 'react';
import { EventItem } from '../types';
import EventCard from './EventCard';

const eventsData: EventItem[] = [
  { 
    id: '1', 
    title: 'Quinceañera Parties', 
    imageUrl: '/src/images/offer-img-02.svg',
    imageAlt: 'Colorful snacks for a Quinceañera party' 
  },
  { 
    id: '2', 
    title: 'Weddings', 
    imageUrl: '/src/images/offer-img-03.svg',
    imageAlt: 'Elegant catering for a wedding'
  },
  { 
    id: '3', 
    title: 'Social Events', 
    imageUrl: '/src/images/offer-img-02.svg',
    imageAlt: 'Appetizers for a social event'
  },
  { 
    id: '4', 
    title: 'Corporate Events', 
    imageUrl: '/src/images/offer-img-03.svg',
    imageAlt: 'Professional catering for a corporate event'
  },
];

const EventTypesSection: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl text-white">CELEBRATE YOUR LOVE</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">SPECIAL OCCASIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;