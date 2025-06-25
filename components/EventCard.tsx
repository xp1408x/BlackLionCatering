import React from 'react';
import { EventItem } from '../types';
import Button from './Button';
import { IMAGE_BASE_URL } from '../config';

interface EventCardProps {
  event: EventItem;
}
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-black rounded-[32px] shadow-lg overflow-hidden flex flex-col">
      <img src={IMAGE_BASE_URL + event.imageUrl} alt={event.imageAlt} className="w-full h-[420px] object-cover rounded-[32px]" loading="lazy" referrerPolicy="no-referrer"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="titleText34 mb-2 text-white">{event.title}</h3>
        {/* Optional description can go here */}
        <div className="mt-auto">
          <Button variant="outline-white" size="sm" className="mx-auto border-0 bg-transparent text-white hover:bg-white hover:text-black transition text-[18px] w-fit px-4 "
>
            READ MORE
            <span className="block border-b-2 border-white w-full mt-2"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;