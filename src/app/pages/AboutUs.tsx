import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChefHat, Award, Leaf, Users } from 'lucide-react';

export const AboutUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: t('about.features.artisan.title'),
      desc: t('about.features.artisan.desc'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('about.features.quality.title'),
      desc: t('about.features.quality.desc'),
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t('about.features.fresh.title'),
      desc: t('about.features.fresh.desc'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('about.features.team.title'),
      desc: t('about.features.team.desc'),
    },
  ];

  return (
    <div className="bg-white" dir="rtl">
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
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              {t('about.storyTitle')}
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed italic">
              {t('about.quote')}
            </p>

            <p className="text-stone-600 text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <p className="text-stone-600 text-lg leading-relaxed">
              {t('about.brandText')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/611827048_1306368678194187_6872564038331745294_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cf3psfaI5EMQ7kNvwEDSikc&_nc_oc=AdnAU3A1UnWK3FryYH1HJS__xe1fuxXnxWyXAmGxVBznb1hM-igbBrbJWKceA4-DUzAF8bRW-ntb8DimspOY-rlO&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=Mz7mwzeP5rsvs7w9pLUZkw&oh=00_AfvJSa_H4ZzwA4dl9BQm47hZN8Un48Wwg_Y4oYJMu9_M5g&oe=698AB4EE" />
            <ImageWithFallback src="https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/591939534_122192677280552292_2783571141389881115_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MrsxOUharLkQ7kNvwH6fkd5&_nc_oc=AdlSlqyW5jvxB5JPBwVtd-1r1ER4sqlit1IESTM9mpr1yOjAlkrJDr8fVDzr_b8iw201z_CcaXR27kgDouROAwBB&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=JytMZMD9VCONqmalJhkgJg&oh=00_AfuPGiy_zdfE2bngRrGFTxu3M3E8PtTS4bPUJJg7BBzgSQ&oe=698ACAFE" />
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
                <h3 className="text-xl font-bold text-stone-900">
                  {f.title}
                </h3>
                <p className="text-stone-500">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
