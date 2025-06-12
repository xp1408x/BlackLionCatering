
import React from 'react';
import { EventItem } from '../types';
import Button from './Button';

interface EventCardProps {
  event: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={event.imageUrl} alt={event.imageAlt} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
        {/* Optional description can go here */}
        <div className="mt-auto">
          <Button variant="outline-white" size="sm" className="w-full">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;