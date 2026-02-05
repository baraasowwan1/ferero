import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Store = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('store.categories.all') },
    { id: 'cakes', name: t('store.categories.cakes') },
    { id: 'molded', name: t('store.categories.molded') },
    { id: 'pastries', name: t('store.categories.other') }, // ✅ كانت معجنات
  ];

  const products = [
    { id: 1, name: 'Ferrero Signature Cake', category: 'cakes', brand: 'Ferrero Cake', image: 'https://images.unsplash.com/photo-1599939569628-4b16b47c3e8d?q=80&w=600' },
    { id: 2, name: 'Golden Molded Praline', category: 'molded', brand: 'Colage', image: 'https://images.unsplash.com/photo-1768572781055-e5cc64015255?q=80&w=600' },
    { id: 3, name: 'Double Chocolate Fudge', category: 'cakes', brand: 'Ferrero Cake', image: 'https://images.unsplash.com/photo-1764380746818-18c01e96df12?q=80&w=600' },
    { id: 4, name: 'Pistachio Delight', category: 'pastries', brand: 'Colage', image: 'https://images.unsplash.com/photo-1759593914762-11026921ef2d?q=80&w=600' },
    { id: 5, name: 'Red Velvet Royale', category: 'cakes', brand: 'Ferrero Cake', image: 'https://images.unsplash.com/photo-1586788680434-30d324634bf6?q=80&w=600' },
    { id: 6, name: 'Heart Shaped Truffle', category: 'molded', brand: 'Colage', image: 'https://images.unsplash.com/photo-1548946522-4a313e8972a4?q=80&w=600' },
    { id: 7, name: 'Almond Macaron Tower', category: 'pastries', brand: 'Ferrero Cake', image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=600' },
    { id: 8, name: 'Vanilla Bean Mousse', category: 'molded', brand: 'Colage', image: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=600' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            {t('store.title')}
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {t('store.description')}
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold text-amber-800">
                    {product.brand}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-amber-600 font-bold mb-2">
                    {categories.find(c => c.id === product.category)?.name}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 text-xs italic">
                    {t('store.noPrice')}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
