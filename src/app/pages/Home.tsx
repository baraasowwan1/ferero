import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Star, Heart, Clock } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  const brands = [
    {
      name: 'Ferrero Cake',
      path: '/ferrero',
      description: t('home.ferreroDesc', 'Elegant chocolate creations'),
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg',
    },
    {
      name: 'Cheese and Walnut Kullaj 1951',
      path: '/kullaj',
      description: t('home.kullajDesc', 'Traditional artisanal kullaj'),
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/490705348_122154620498552292_7629996614415224572_n.jpg',
    },
  ];

  const categories = React.useMemo(
    () => [
      {
        name: t('store.categories.cakes'),
        img: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/352382050_622778522920898_4607408828112141834_n.jpg',
      },
      {
        name: t('store.categories.molded'),
        img: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463869455_122114133488552292_3676113582017752048_n.jpg',
      },
    ],
    [t]
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://lh3.googleusercontent.com/p/AF1QipNC5zVlCNVkZS5zPUsZ2XYNHqxoCSCrZ8UVOt6T=s1360-w1360-h1020-rw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              {t('home.heroSub')}
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-accent px-8 py-4 rounded-full text-lg transition"
            >
              {t('home.viewStore')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-pink-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-accent">
              {t('home.brands')}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {brands.map((brand, idx) => (
              <Link key={brand.name} to={brand.path}>
                <motion.div
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[16/10] shadow-xl bg-white border hover:shadow-2xl transition"
                >
                  <ImageWithFallback
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-serif font-bold text-white">
                      {brand.name}
                    </h3>
                    <p className="text-pink-100 mt-1">
                      {brand.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Quality */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Star className="text-secondary" />
              <span>{t('home.premiumQuality', 'Premium Quality')}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="text-secondary" />
              <span>{t('home.madeWithLove', 'Made with Love')}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-secondary" />
              <span>{t('home.freshDaily', 'Fresh Daily')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t('home.craftedTitle', 'Crafted Perfection')}
            </h2>
            <p className="text-stone-300 mb-8">
              {t('home.craftedDesc')}
            </p>

            <div className="space-y-4">
              {categories.map(cat => (
                <Link
                  key={cat.name}
                  to="/store"
                  className="flex items-center justify-between p-4 border border-stone-600 rounded-lg hover:bg-secondary transition"
                >
                  <div className="flex items-center gap-4">
                    <img src={cat.img} className="w-12 h-12 rounded-full object-cover" />
                    <span>{cat.name}</span>
                  </div>
                  <ArrowRight className="rtl:rotate-180" />
                </Link>
              ))}
            </div>
          </div>

          {/* images unchanged */}
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-2xl h-64 object-cover" src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/611827048_1306368678194187_6872564038331745294_n.jpg" />
            <img className="rounded-2xl h-64 object-cover" src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/626432085_122201078354552292_7736825017065677994_n.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};
