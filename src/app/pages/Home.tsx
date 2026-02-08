import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  const brands = [
    {
      name: 'Ferrero Cake',
      description: t('home.ferreroDesc', 'Elegant chocolate creations'),
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg',
    },
    {
      name: 'Cheese and Walnut Kullaj 1951',
      description: t('home.kullajDesc', 'Traditional artisanal kullaj'),
      image:
        'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463869455_122114133488552292_3676113582017752048_n.jpg',
    },
  ];

  const categories = React.useMemo(
    () => [
      {
        name: t('store.categories.cakes'),
        img: 'https://images.unsplash.com/photo-1764380746818-18c01e96df12?q=80&w=400',
      },
      {
        name: t('store.categories.molded'),
        img: 'https://images.unsplash.com/photo-1759593914762-11026921ef2d?q=80&w=400',
      },
    ],
    [t]
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769643207188-f9b6b7e1d72c?q=80&w=1920"
            alt="Bakery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
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
              className="inline-flex items-center gap-2 bg-secondary hover:bg-accent px-8 py-4 rounded-full text-lg font-medium transition"
            >
              {t('home.viewStore')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-pink-light/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">
              {t('home.brands')}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <ImageWithFallback
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif font-bold text-white">
                    {brand.name}
                  </h3>
                  <p className="text-secondary/80">
                    {brand.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crafted Perfection Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">
                {t('home.craftedTitle', 'Crafted Perfection')}
              </h2>
              <p className="text-stone-300 text-lg mb-8">
                {t(
                  'home.craftedDesc',
                  'Every product is crafted with care and passion.'
                )}
              </p>

              <div className="space-y-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to="/store"
                    className="flex items-center justify-between p-4 border border-stone-700 rounded-lg hover:bg-secondary transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={cat.img}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{cat.name}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
