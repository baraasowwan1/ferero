import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Kullaj = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* عنوان العلامة */}
        <h1 className="text-4xl font-bold text-accent mb-4">Cheese and Walnut Kullaj 1951</h1>
        <p className="text-stone-600 mb-8">
          Traditional artisanal kullaj, keeping the heritage alive.
        </p>

        {/* صورة الغلاف */}
        <div className="w-full h-96 mb-6 overflow-hidden rounded-2xl">
          <ImageWithFallback
            src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/491559332_122154450566552292_1901582120724717764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=PxNj33cVDdYQ7kNvwF_sgid&_nc_oc=AdkgtuVNSAIu3iEkmhxPgPSexQP-BJl0kD2yxp4les8YHe_NApWAZqZF33Y8B8p7yMHa_3lVOaa7VAbH3oEiD-ST&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=cSIwtdFNpstTnmnBzpmfLw&oh=00_Afv9NG8CaHcmnnYEIrNkuvkceYQEMwRtqRBs6Jym2oQtxw&oe=698EC1D8"
            alt="Kullaj 1951"
            className="w-full h-full object-cover"
          />
        </div>

        {/* روابط السوشال */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://www.facebook.com/profile.php?id=61566568784595"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-accent text-white rounded-full"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/kullaj1951"
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
            src="https://www.instagram.com/p/DRPM-1Lgiog/embed"
            className="w-full h-96 rounded-2xl"
            allowFullScreen
            loading="lazy"
            title="Instagram post 1"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/DTSOmxjl5pz/embed"
            className="w-full h-96 rounded-2xl"
            allowFullScreen
            loading="lazy"
            title="Instagram post 2"
          ></iframe>
          <iframe
            src="https://www.instagram.com/p/DUYEwpxFlDF/embed"
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
