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
      description: t('home.ferreroDesc', 'Elegant chocolate creations'),
      image: 'https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/471173763_1015997517231306_628267136974182119_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UitFx4iNlkAQ7kNvwH9zOKe&_nc_oc=AdmqAayMIwoM4sLc0NhkRzM0Fl-sUqrEzzeIekuwZJzdLHuiIKLKrEnqUpD7s0cJLnejtsSkz5pUyOCYyga5SLT8&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=ezs5sZI2vL6nE6Q1oeQf6g&oh=00_Afv3kwTidFR-YLjtOl0jQsZIKt48il3-nKDUSZlFNg3g_A&oe=698A9D7E',
    },
    {
      name: 'Cheese and Walnut Kullaj 1951',
      description: t('home.kullajDesc', 'Traditional artisanal kullaj'),
      image: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463869455_122114133488552292_3676113582017752048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1jwCbogYudMQ7kNvwHBAYGM&_nc_oc=AdkYghMp1sE3ZBYJU92kewYl4qnouIVNr7LP-sbqV5fyuto0kpCnvM7MXPTHLvsgXYm2yA0hkSwGBdeLNDlH47_W&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=bmYmpqD1Nw9klKtx3GGFSg&oh=00_AfsDAVSODZNtwFfBSO_Dg5-amOhURpe2NVzc30QRqZck7Q&oe=698A8FCF',
    },
  ];

  const categories = React.useMemo(() => [
    { name: t('store.categories.cakes'), img: 'https://images.unsplash.com/photo-1764380746818-18c01e96df12?q=80&w=400' },
    { name: t('store.categories.molded'), img: 'https://images.unsplash.com/photo-1759593914762-11026921ef2d?q=80&w=400' },
  ], [t]);

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-pink-50 mb-10 leading-relaxed">
              {t('home.heroSub')}
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-accent text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105"
            >
              {t('home.viewStore')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-pink-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-xl bg-white border border-pink-100"
              >
                <div className="w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{brand.name}</h3>
                  <p className="text-secondary/80">{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Sweets Window */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">
              {t('home.decorativeWindow')}
            </h2>
          </div>

          <div className="relative group cursor-pointer border-[12px] border-accent rounded-3xl p-4 bg-pink-50 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={`https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&sig=${i}`}
                    alt="Sweet"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Star className="w-6 h-6 text-secondary" />
                <span className="font-medium text-accent">{t('home.premiumQuality', 'Premium Quality')}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-6 h-6 text-secondary" />
                <span className="font-medium text-accent">{t('home.madeWithLove', 'Made with Love')}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                <span className="font-medium text-accent">{t('home.freshDaily', 'Fresh Daily')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted Perfection Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">{t('home.craftedTitle', 'Crafted Perfection')}</h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                {t('home.craftedDesc', 'Every product in our store is a result of meticulous craftsmanship. From the rich layers of our cakes to the traditional heritage of our Kullaj, we ensure every bite is a celebration.')}
              </p>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <Link 
                    key={cat.name} 
                    to="/store" 
                    className="flex items-center justify-between p-4 border border-stone-700 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <ImageWithFallback src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/555998607_122182675634552292_5156581614799105808_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sklcFLTF9iIQ7kNvwE4aCjl&_nc_oc=AdmtUukcnHaz6sWsJ7q-URCXXyyyXZVWV6qb_KTKQNIph0q-aP-psmwRekj5pQnUqTSbhkAk6Wrn_EZcmUnLvklc&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=IAGTmOxCrAGjIbJ4NPPMLg&oh=00_Afu_HqroMHr4KW4fRUrXkCt6-UdeoWrtDya-Q7J1rosnhw&oe=698AD297" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/607636527_1299798438851211_4761616371627611317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qsh7R8izH60Q7kNvwHmMitg&_nc_oc=AdlsBz5-7JjYiiG0V5cp29zY3VhJZX8TeU8Kbr6iQ7gJDJlboErS52ElYLOGhfRv3APxKUVrWItoiPMbCn9nz5nk&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=kkRkxATpRujSI9pfS6ktlQ&oh=00_AfvT1Q4TANa7kZCslGJSVSI7RI5BfT4PITLPiINUtTsPuw&oe=698AD45C" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-48">
                  <ImageWithFallback src="https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/556084524_122182416620552292_507253606308491181_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GGz3aVBp_3MQ7kNvwEWwT5o&_nc_oc=AdleuAe9AnVzdSTjmv5O-GE9JTu5CHEUAnAsf1SwzXP2Bb5AY2WvOZNsFHYklZhRmCu1phv5XX3S4o6PS5gOJoV1&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=dr_1nD4l4vRyqFwxijjyKA&oh=00_AfsWmXx0U-i5GD3tW2mVTPkXTS8dHTlT2j7jCiQubRvKyg&oe=698AACE7" />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/607030131_1299798782184510_6327599882514401662_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=esrCljBoENwQ7kNvwEOmfbD&_nc_oc=Adn0xxSgM2Om5p2foYUmsepkrwb41P6jgRS_2g63fM7RtUg5VNR4V3rI5DmQKO1SUf0141ZDqktkqlLU0ZI3QWmY&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=YQnssddhph2AfnggAQlkGw&oh=00_AfvlGnIM9bBUcPu0lCQPk2zs_Hnd6uZCszLFsAhdVfuffg&oe=698AD39F" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
