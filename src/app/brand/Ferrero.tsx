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
            src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/491838113_10007968619237174_4027847743412620338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QdBLFLjRqIIQ7kNvwETTKES&_nc_oc=AdnTptLnZ7RVJ7B1tA0oIDo-YN6yeF-BTjpvbtjFzozANnsljQRDde1ygAQYclkTQoXDI4S6YYjoqAmCMMCq_2_Y&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=UQhEfrxU8t1thwDzDgWlZg&oh=00_AfunPlhKazVidiHMABFdhmSC7e73-hZDNEGSJPymcoFF8w&oe=698EC063"
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
