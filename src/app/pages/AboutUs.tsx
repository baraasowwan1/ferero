import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChefHat, Award, Leaf, Users } from 'lucide-react';

export const AboutUs = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <ChefHat className="w-8 h-8" />, title: 'Artisan Baking', desc: 'Handcrafted with traditional techniques' },
    { icon: <Award className="w-8 h-8" />, title: 'Premium Quality', desc: 'Only the finest ingredients sourced globally' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Fresh Daily', desc: 'Baked fresh every morning in our shop' },
    { icon: <Users className="w-8 h-8" />, title: 'Passionate Team', desc: 'Expert pâtissiers dedicated to excellence' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1920" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            {t('about.title')}
          </motion.h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Our Story</h2>
            <p className="text-stone-600 text-lg leading-relaxed italic">
              "Sweetness is not just a taste, it's an experience we create with passion."
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              At <strong>Ferrero Cake</strong>, we focus on the rich, indulgent side of desserts, bringing you chocolate-forward masterpieces that satisfy the soul. 
              <strong> Colage</strong> represents our artistic vision, where cakes become molds of imagination, blending textures and flavors in unexpected ways.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/591939534_122192677280552292_2783571141389881115_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MrsxOUharLkQ7kNvwH6fkd5&_nc_oc=AdlSlqyW5jvxB5JPBwVtd-1r1ER4sqlit1IESTM9mpr1yOjAlkrJDr8fVDzr_b8iw201z_CcaXR27kgDouROAwBB&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=JytMZMD9VCONqmalJhkgJg&oh=00_AfuPGiy_zdfE2bngRrGFTxu3M3E8PtTS4bPUJJg7BBzgSQ&oe=698ACAFE" />
            <ImageWithFallback src="https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/497458483_1108961704601553_3015175324517725045_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kxixHqUJiDcQ7kNvwGoyn4m&_nc_oc=AdmVcP1kTiHcEKeQtnmXu-9NB9zhbmCgvC-45TDwFMotLz1_AACr_Qi2Ii_Pc2j40i0XnLjnD7dSVwzJtn98UeU6&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=WvnLcZhSa6lYeVsPgTQKJQ&oh=00_AfvRc6eCnHGNi-iMhFZQ1B4e3tEmoYE4zc-zlLUfUXBNdw&oe=698AC014" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900">{f.title}</h3>
                <p className="text-stone-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
