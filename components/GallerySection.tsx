
import React from 'react';
import { GalleryImage } from '../types';
import { IMAGE_BASE_URL } from '../config';

const galleryImagesData: GalleryImage[] = [
  { id: 'g1', imageUrl: 'gallery-02-mePJalxG6VIl3poR.webp', altText: 'Delicious plated meal with rice and sides' },
  { id: 'g2', imageUrl: 'gallery-04-Yg2yP8j5Jaf8ZK17.webp', altText: 'Golden fried appetizers on a wooden tray' },
  { id: 'g3', imageUrl: 'gallery-08-AzGNzqXDpETJ02Zj.webp', altText: 'Hearty curry dish with naan bread' },
  { id: 'g4', imageUrl: 'gallery-02-mePJalxG6VIl3poR.webp', altText: 'Fresh salad with vibrant ingredients' },
  { id: 'g5', imageUrl: 'gallery-04-Yg2yP8j5Jaf8ZK17.webp', altText: 'Assortment of desserts' },
  { id: 'g6', imageUrl: 'gallery-08-AzGNzqXDpETJ02Zj.webp', altText: 'Gourmet pasta dish' },
  { id: 'g7', imageUrl: 'gallery-02-mePJalxG6VIl3poR.webp', altText: 'Skewers with grilled vegetables and meat' },
  { id: 'g8', imageUrl: 'gallery-04-Yg2yP8j5Jaf8ZK17.webp', altText: 'Artistically presented seafood platter' },
  { id: 'g9', imageUrl: 'gallery-08-AzGNzqXDpETJ02Zj.webp', altText: 'Colorful fruit platter' },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          A Glimpse of Our Creations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImagesData.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={IMAGE_BASE_URL + image.imageUrl} 
                alt={image.altText} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;