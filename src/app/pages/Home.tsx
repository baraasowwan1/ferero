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
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JYpSB-fxDokQ7kNvwEol8eR&_nc_oc=Adnro-l0KgwjiO9puIhFLJ8b9YgVFsnGqT-dHBogSgJoez4VVHPUSSf2W5TP7h3IYFKp_NjFMKFeLtf_YrfwuAY-&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=LLhEoU_m-gVS9CUggZQxTg&oh=00_AfsCwV-ZJ23Bq6tCyM1uE2q6XikTyWD37mFiAnFSqdODCQ&oe=698EC58C',
    },
    {
      name: 'Cheese and Walnut Kullaj 1951',
      description: t('home.kullajDesc', 'Traditional artisanal kullaj'),
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/490705348_122154620498552292_7629996614415224572_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ol-zUTH38QgQ7kNvwGaPt3N&_nc_oc=AdlW7WuHdSamPUEB-54WNWIAwqEysHuiygTL5B9Rei5u4KdJUNabcPlUQLUhnJdUBcF8FnmGS8XaUjIhop4wocu8&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=d9M8ooW3kK1U7nfGoEGZaw&oh=00_Aful6MAYyduBTHD984h3jTfAb6Z9u3TolVocKFT4DNvx7w&oe=698EDA52',
    },
  ];

  const categories = React.useMemo(
    () => [
      {
        name: t('store.categories.cakes'),
        img: 'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/352382050_622778522920898_4607408828112141834_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rS4rdP-sQJwQ7kNvwEGDgQM&_nc_oc=AdnihdCiiLNIqJHgLk7W9WMee4dbjpJUNHTcDsrZnG-nDbzMyjcq9w0mMlhOXN8hMPxDy1Fc_gPtPEQXZ0UQbTvh&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=mkZQrY2PqesFaDm3rdJYMQ&oh=00_AftIdU5J1ygue_0ZLG8n9LnLfFwmPngi4lTtkOjJTJ2crg&oe=698EB975',
      },
      {
        name: t('store.categories.molded'),
        img: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/463869455_122114133488552292_3676113582017752048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZCi-mWswkw4Q7kNvwE-slDf&_nc_oc=AdmU18T1G5DlV93FRLm6-_hOuT8Um-IbJWwE8D1_iFHj3Y4-j6WcXxidnuD6Xwck4qAJnGHBrwTwJhFE5RY35s7v&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=UjuNbhvSnkh3w2nep3S0uA&oh=00_AfvLVmTaO2B5wZEme-eS-zBvUUtZ4UiW36vbuQlXebkX0Q&oe=698EBC8F',
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
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-secondary/80">
                    {brand.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Icons (كانت أسفل نافذة الحلويات سابقًا) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Star className="w-6 h-6 text-secondary" />
              <span className="font-medium text-accent">
                {t('home.premiumQuality', 'Premium Quality')}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="w-6 h-6 text-secondary" />
              <span className="font-medium text-accent">
                {t('home.madeWithLove', 'Made with Love')}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-secondary" />
              <span className="font-medium text-accent">
                {t('home.freshDaily', 'Fresh Daily')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted Perfection Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">
                {t('home.craftedTitle', 'Crafted Perfection')}
              </h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                {t(
                  'home.craftedDesc',
                  'Every product in our store is a result of meticulous craftsmanship. From the rich layers of our cakes to the traditional heritage of our Kullaj, we ensure every bite is a celebration.'
                )}
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
                        <ImageWithFallback
                          src={cat.img}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                  </Link>
                ))}
              </div>
            </div>

            {/* الصور – بدون أي تغيير */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64">
                  <ImageWithFallback
                    src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/611827048_1306368678194187_6872564038331745294_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=edqWZY5_bdUQ7kNvwEzLE7r&_nc_oc=AdlRjTFAr2T0_fujSA0MVnyEZnG5ur0eG6Y_Y5hIcKZ3J_NEu6LSq4TX9KzybuAoKly3kRtNt7sgQWoQZ-xYeD0g&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=yjXXmM3g5AhOQ1NsGlKKQw&oh=00_AfuNYCAwfI-5gMLcVdPtbY2RvIxemBUv59HmPd0tU61xjg&oe=698EA96E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48">
                  <ImageWithFallback
                    src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/616013146_1316543953843326_5408818414923851489_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xjkNHdJjCXMQ7kNvwFkD_6R&_nc_oc=AdlLcmtRkq3fqo3H38kIFkpsgNjEgvbFaeda7KaGDMn_AryFfxOsj8RCaLmxKJx0Gp5MwsIY-u7lH6FXNgHhvfdM&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=3Q_CC0mUV2ukCQpYhS7jvw&oh=00_AfuZpE-d-9tIOB-zJEZrCCEQXXt2rx5Xwlz1-9AAzF3cdg&oe=698ECD28"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-48">
                  <ImageWithFallback
                    src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/561917571_122185384598552292_7265611449628162282_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2KnuVavStDcQ7kNvwE_EdIf&_nc_oc=AdntEiCN1gPsjWer_bqVeu-YLSJ419V2amMQxNxkumlW-BjnHDoAvE0jZ_fc_LJkQPLnvkYdUIF0OV9zlID8Toor&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=01Y5HyUa9k7gHdhnDZd2mg&oh=00_Aftsp2dGXf_eEWxE5l-fTA8LVdgRmlUgiFP3KVrj0yCthg&oe=698EBBFB"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <ImageWithFallback
                    src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/626432085_122201078354552292_7736825017065677994_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3108ot4-n_8Q7kNvwGHo-Oa&_nc_oc=AdmjQDfyrGI-ZcvU6ip1LDQEV3QBK3MECQE6nVyUnaapDejeZO8suOpWbb1DazvGPVALjFTM-YWlYc9Pv_VONFEl&_nc_zt=23&_nc_ht=scontent.famm11-1.fna&_nc_gid=xhdrtkTKc97hrw47uUD3EQ&oh=00_AfsK-OixHrApb0FPR5JuR0nu6ddfUc2wqnQGgk38Tfj_tQ&oe=698EBFA3"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
