import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const Ferrero = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-accent mb-4">Ferrero Cake</h1>
        <p className="text-stone-600 mb-8">
          Elegant chocolate creations, crafted with love and quality.
        </p>
        <div className="w-full h-96 mb-6 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg"
            alt="Ferrero Cake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* روابط السوشال */}
        <div className="flex justify-center gap-4">
          <a href="https://www.facebook.com/ferereocake" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent text-white rounded-full">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/ferereo_cake_" target="_blank" rel="noopener noreferrer" className="p-3 bg-accent text-white rounded-full">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

