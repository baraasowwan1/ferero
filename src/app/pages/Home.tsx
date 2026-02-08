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
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/488253898_9886438498056854_141848626228315824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JYpSB-fxDokQ7kNvwEol8eR&_nc_oc=Adnro-l0KgwjiO9puIhFLJ8b9YgVFsnGqT-dHBogSgJoez4VVHPUSSf2W5TP7h3IYFKp_NjFMKFeLtf_YrfwuAY-&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=iMuMKIF7kM2XCOFRDS_S2A&oh=00_Afsl4wqLPleIBTVx_rqCJPc-bepLqH_h7Y_s2-CwqJrzSw&oe=698EC58C',
    },
    {
      name: 'Cheese and Walnut Kullaj 1951',
      path: '/kullaj',
      description: t('home.kullajDesc', 'Traditional artisanal kullaj'),
      image:
        'https://scontent.famm10-1.fna.fbcdn.net/v/t39.30808-6/491559332_122154450566552292_1901582120724717764_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=PxNj33cVDdYQ7kNvwF_sgid&_nc_oc=AdkgtuVNSAIu3iEkmhxPgPSexQP-BJl0kD2yxp4les8YHe_NApWAZqZF33Y8B8p7yMHa_3lVOaa7VAbH3oEiD-ST&_nc_zt=23&_nc_ht=scontent.famm10-1.fna&_nc_gid=hFjGEImMYQQP7CC9YesiOg&oh=00_Afu839izbpj262tXYINExM6e2qAVpeX8hax3X7HVylrLcA&oe=698EC1D8',
    },
  ];

  const categories = React.useMemo(
    () => [
      {
        name: t('store.categories.cakes'),
        img: 'https://instagram.famm13-1.fna.fbcdn.net/v/t51.2885-19/82444459_215139809630697_790629369532907520_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.famm13-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGn2lASQwQo-EY1RuBQGXd4B7bOwbaLuGa0tfz1CpfOnOwD__nQ5CE5t1BPXpOPQBBKn16wtdFN3saqLkqZ5QyH&_nc_ohc=BIS2sHCKJnQQ7kNvwGPCjXd&_nc_gid=GLJIpNVdsYN8NQcHtMY_PQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afu1-NalGo9vnpK34IgXnmhq92qEwIzzJCJQwsavLWKMFg&oe=698EC99D&_nc_sid=7a9f4b',
      },
      {
        name: t('store.categories.molded'),
        img: 'https://instagram.famm7-1.fna.fbcdn.net/v/t51.2885-19/464738703_1537686983787349_3949811633865506413_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.famm7-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QEXyfz_ry05nw4ag2zKsGIaOFwv2-YIu7au5SMgDELZC1Uq0-4l0Ro6pkRZ7KWHPjP-BvQl1oIcyIopRgcOmucm&_nc_ohc=Wj_2j2Bhev0Q7kNvwGDR82G&_nc_gid=QGm3E8z6ABoqkyHEnOc__w&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfuSRm537TFSUe_QWl5FCfbvJERMU3UicG57D-LUiHkcuA&oe=698EC954&_nc_sid=7a9f4b',
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
            <img className="rounded-2xl h-64 object-cover" src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/616013146_1316543953843326_5408818414923851489_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xjkNHdJjCXMQ7kNvwFkD_6R&_nc_oc=AdlLcmtRkq3fqo3H38kIFkpsgNjEgvbFaeda7KaGDMn_AryFfxOsj8RCaLmxKJx0Gp5MwsIY-u7lH6FXNgHhvfdM&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=5B7jwB1agNqaC2GbWWFJ-w&oh=00_AfsORpuxk6f3JxA9fmYfoTkbbhQXVbS5addcIfgxO338aA&oe=698ECD28" />
            <img className="rounded-2xl h-64 object-cover" src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/626432085_122201078354552292_7736825017065677994_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3108ot4-n_8Q7kNvwGHo-Oa&_nc_oc=AdmjQDfyrGI-ZcvU6ip1LDQEV3QBK3MECQE6nVyUnaapDejeZO8suOpWbb1DazvGPVALjFTM-YWlYc9Pv_VONFEl&_nc_zt=23&_nc_ht=scontent.famm11-1.fna&_nc_gid=DZ_4hnJ4pnoCqPkO8h1P5A&oh=00_AftNr25ggY3BxO8ryfSUKwxGaeL8eotPsJn_wziJ2FpTDQ&oe=698EBFA3" />
          </div>
        </div>
      </section>
    </div>
  );
};
