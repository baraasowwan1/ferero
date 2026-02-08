import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Ferrero = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* عنوان العلامة */}
        <h1 className="text-4xl font-bold text-accent mb-4">Ferrero Cake</h1>
        <p className="text-stone-600 mb-8">
          Elegant chocolate creations, crafted with love and quality.
        </p>

        {/* صورة الغلاف */}
        <div className="w-full h-96 mb-6 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg"
            alt="Ferrero Cake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* روابط السوشال */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://www.facebook.com/ferereocake"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-accent text-white rounded-full"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/ferereo_cake_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-accent text-white rounded-full"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Instagram Feed Embed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* مثال على 3 بوستات من الانستجرام */}
          <iframe
            src="https://www.instagram.com/p/DTsxJCXl3YJ/embed"
            className="w-full h-96 rounded-2xl"
            allowFullScreen
            loading="lazy"
            title="Instagram post 1"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/DSpjQaQjgBz/embed"
            className="w-full h-96 rounded-2xl"
            allowFullScreen
            loading="lazy"
            title="Instagram post 2"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/DS2vRSoDjxg/embed"
            className="w-full h-96 rounded-2xl"
            allowFullScreen
            loading="lazy"
            title="Instagram post 3"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
