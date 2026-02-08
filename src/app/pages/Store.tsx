import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export const Store = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('store.categories.all') },
    { id: 'cakes', name: t('store.categories.cakes') },
    { id: 'molded', name: t('store.categories.molded') },
    { id: 'pastries', name: t('store.categories.pastries') },
  ];

  const products = [
    { id: 1, name: 'Ferrero Signature Cake', category: 'cakes', brand: 'Ferrero Cake', image: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/616808888_1316544043843317_945280911038593857_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WhZAPY9zNiAQ7kNvwH8blKG&_nc_oc=Admcd_emypDDXmEXR2POgpp7GkaOS0Ot-RGbnmeLIUwsmHjW9Bte1F83NUOIvutDPr2EFTlhnQEWoNWgGWKwFEyI&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=BqS3NaOcyyugNKlb4o9t5A&oh=00_AfvDubQ0eMxo-5aejK61ikR_17kUXmTp8sxJ759RRgBSjw&oe=698ECE19' },
    { id: 2, name: 'walnut collage', category: 'molded', brand: 'Kullaj', image: 'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/616398874_122198186798552292_8643432959823223717_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=55WGOoR8HIUQ7kNvwHhfQHr&_nc_oc=AdmaByFGldmJz4_mzpnbegL3Ry5qX1bD5Voukj5omoMycrlFM0-3zakT1KBB-3tW_foztVLg9uOjtRXpIIcKCFDg&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=I6fSLv7zyDQH4vvS5KSBNA&oh=00_AfvBnXM8TPNXz4_WMxT5DD_YdROrxhgKQdS0UUpFKh_MEQ&oe=698EC8BA' },
    { id: 3, name: 'New year cake', category: 'cakes', brand: 'Ferrero Cake', image: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/606349171_1298474392316949_2865715717249362109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iEUrhVkUdGEQ7kNvwF_fhki&_nc_oc=AdlnihghNnL8F_SZ7jkW57U5MXy0t4-HlLgifXAf4SMXfPAL1FAxo096riq6MBSFo2Tew5ek_kqym43dyFeQhgCq&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=EWXNMJ6r6Ymzk83V1WLipQ&oh=00_AfuxLqJi_lkgTO747pWOqRS4UZf3TwWFMCq-Nk5w79zFhg&oe=698ED6A5' },
    { id: 4, name: 'Turkish baklava', category: 'pastries', brand: 'Other', image: 'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/486753512_122150023916552292_758922948026539399_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vgI-eEjQdLAQ7kNvwE1JHNx&_nc_oc=Adk0yub81RwD_ayo-XY3UG-Hp9QxFMbkZsCSCkSXFAZfDV77pjKzI-c2cG6YXHn8ynMB8nH5ClfJvRQX-bJswLA6&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=fx9LWYSWtBTGmKBdqO69gQ&oh=00_AfuZQm2r8YenenZK9qsMmdxAeS9bNppsFOuGyETlM3D0Gw&oe=698EDAC8' },
    { id: 5, name: 'Made to order', category: 'cakes', brand: 'Ferrero Cake', image: 'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/506753284_1131027842394939_9175585272351755247_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=poCzyGs5qNQQ7kNvwH7QMv0&_nc_oc=AdmUO_tGTUudQJmwKyPNJbbN8GmFDWyXk49SBgZN-B76mQWBSc_b2Nbgf3k0VPrM6Or-lJGU853K3li75bt5c-nF&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=yLJYgNS2jhplyMsKfXhTRA&oh=00_Afu76wzFlSc8L3xryXds_P53Cwb1UqWZsHFY7IHHtREfsA&oe=698EBA3D' },
    { id: 6, name: 'white cheese collage', category: 'molded', brand: 'Kullaj', image: 'https://scontent.famm13-1.fna.fbcdn.net/v/t39.30808-6/572467883_122187154802552292_335302695294539557_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hookup6BMcYQ7kNvwEvM2jl&_nc_oc=Admc22Sla1wOb90D8FPq2S7t0zqn075hL4rQnX5ovtHJ66O8MsAZHrS3bNZwP5k0pA_xL7s98zV_RmAZqOeYZ9rn&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=2jCmO2ivswJajrPCCtpFMw&oh=00_AftdfxArVEbEgvYL-1uUvgb5FywdgRWpVQ4ngzhBJe4xGQ&oe=698ECDEF' },
    { id: 7, name: 'Assorted biscuits', category: 'pastries', brand: 'Other', image: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/504867187_1126923719472018_4550439021274236091_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pqkYrIUBKM0Q7kNvwEGYjtD&_nc_oc=AdmHq6HdaSOeXLcVio65jjktRjcKlQLjBg7micmbtF9wXaPTUwF2tA6SfaAGdbWNguNXCdSdmjo_4MKkSegRTKyc&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=Zy-dKsSb2sW95twl1hHjNg&oh=00_AfsGE6YlBSyDcDnJ5FW9Ku5cvNSX7EOmfiH8rFdiiiMo8g&oe=698EE22C' },
    { id: 8, name: 'Kunafah', category: 'molded', brand: 'Kullaj', image: 'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/627882765_122201225558552292_2356264076672524485_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yihyYFaFJdwQ7kNvwFd_DNG&_nc_oc=AdkwEbdQnZQ95aTQ6VlarC3iN2vmtwbIhzWp6C3vcggJdx61csM84TmGmjVO4vOxJSUhw4qn5IhWz3Lnw1Ax8maN&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=991vixO5JZhskSIqYSruZw&oh=00_AfswaWZOWu8aI7O25fBs8JHF4NB_rkLBhtNYzNyIyVtt1g&oe=698EC47E' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">{t('store.title')}</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">{t('store.description')}</p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-amber-800">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-amber-600 font-bold mb-2">
                    {categories.find(c => c.id === product.category)?.name}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-400 text-xs italic">{t('store.noPrice')}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
