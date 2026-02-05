import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        store: 'Store',
        about: 'About Us',
        contact: 'Contact Us',
      },
      home: {
        heroTitle: 'Indulge in Excellence',
        heroSub: 'Discover the finest cakes and sweets from Ferrero Cake and Cheese & Walnut Kullaj 1951.',
        brands: 'Our Brands',
        decorativeWindow: 'The Sweet Window',
        viewStore: 'View Store',
        craftedTitle: 'Crafted Perfection',
        craftedDesc: 'Every product in our store is a result of meticulous craftsmanship. From the rich layers of our cakes to the traditional heritage of our Kullaj, we ensure every bite is a celebration.',
        productCategories: {
          cakes: 'Cakes',
          molded: 'Kullaj',
        },
        decorative: {
          quality: 'Premium Quality',
          love: 'Made with Love',
          fresh: 'Fresh Daily',
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        store: 'المتجر',
        about: 'من نحن',
        contact: 'اتصل بنا',
      },
      home: {
        heroTitle: 'استمتع بالتميز',
        heroSub: 'اكتشف أفضل الكيك والحلويات من فيريرو كيك وكلاج جبنة وجوز ١٩٥١.',
        brands: 'علاماتنا التجارية',
        decorativeWindow: 'نافذة الحلويات',
        viewStore: 'عرض المتجر',
        craftedTitle: 'إبداع متقن',
        craftedDesc: 'كل منتج في متجرنا هو نتيجة لصناعة متقنة بعناية. من الطبقات الغنية في كيكنا إلى التراث التقليدي للكلاج، نضمن أن كل قضمة هي احتفال.',
        productCategories: {
          cakes: 'كيك',
          molded: 'كلاج',
        },
        decorative: {
          quality: 'جودة ممتازة',
          love: 'مصنوع بحب',
          fresh: 'طازج يوميًا',
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // اجعل العربية افتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
