import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Kullaj = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-accent mb-4">Cheese and Walnut Kullaj 1951</h1>
        <p className="text-stone-600 mb-8">
          Traditional artisanal kullaj, keeping the heritage alive.
        </p>
        <div className="w-full h-96 mb-6 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463869455_122114133488552292_3676113582017752048_n.jpg"
            alt="Kullaj 1951"
            className="w-full h-full object-cover"
          />
        </div>

        {/* روابط السوشال */}
        <div className="flex justify-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61566568784595" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent text-white rounded-full">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/kullaj1951" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent text-white rounded-full">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
