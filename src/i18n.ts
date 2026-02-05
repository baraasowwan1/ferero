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
        brandsDesc: {
          ferrero: 'Elegant chocolate creations',
          kullaj: 'Traditional artisanal kullaj',
        },
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
        },
      },
      store: {
        title: 'Our Sweet Collection',
        description: 'Browse our exquisite collection of handcrafted sweets and cakes. Each piece is made with the finest ingredients and artistic precision.',
        categories: {
          all: 'All',
          cakes: 'Cakes',
          molded: 'Kullaj',
          pastries: 'Other',
        },
        noPrice: 'Price on request',
      },
      about: {
        title: 'About Ferrero Cake & Kullaj 1951',
        storyTitle: 'Our Story',
        quote: "Sweetness is not just a taste, it's an experience we create with passion.",
        description: 'Welcome to our world of sweetness. Ferrero Cake and Cheese & Walnut Kullaj 1951 represent the pinnacle of artisanal baking.',
        brandText: 'Ferrero Cake focuses on rich indulgent desserts, while Colage represents artistic molded cake creations.',
        features: {
          artisan: {
            title: 'Artisan Baking',
            desc: 'Handcrafted with traditional techniques',
          },
          quality: {
            title: 'Premium Quality',
            desc: 'Only the finest ingredients sourced globally',
          },
          fresh: {
            title: 'Fresh Daily',
            desc: 'Baked fresh every morning in our shop',
          },
          team: {
            title: 'Passionate Team',
            desc: 'Expert pâtissiers dedicated to excellence',
          },
        },
      },
      contact: {
        title: 'Contact Us',
        phone: 'Phone',
        email: 'Email',
        location: 'Our Locations',
        direct: 'Direct Contact',
        viewMap: 'View on Map',
        branches: {
          husun: 'Al-Husun Branch',
          culture: 'North Culture Square, Irbid',
        },
      },
      payment: {
        title: 'Payment Methods',
        click: 'CliQ',
        visa: 'Visa',
        mastercard: 'Mastercard',
        cod: 'Cash on Delivery',
      },
      delivery: {
        title: 'Delivery Service',
        available: 'Delivery available through our partners.',
      },
    },
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
        brandsDesc: {
          ferrero: 'حلويات الشوكولاتة الفاخرة',
          kullaj: 'كلاج تقليدي وحرفي',
        },
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
        },
      },
      store: {
        title: 'مجموعتنا الحلوة',
        description: 'تصفح مجموعتنا الرائعة من الحلويات والكيك المصنوع يدويًا. كل قطعة مصنوعة من أفضل المكونات وبأقصى درجات الإتقان.',
        categories: {
          all: 'الكل',
          cakes: 'كيك',
          molded: 'كلاج',
          pastries: 'اخرى',
        },
        noPrice: 'السعر عند الطلب',
      },
      about: {
        title: 'من نحن',
        storyTitle: 'قصتنا',
        quote: 'الحلاوة ليست مجرد طعم، بل تجربة نصنعها بشغف.',
        description: 'فيريرو كيك وكلاج جبنة وجوز ١٩٥١ يجسدان قمة الإبداع في عالم الحلويات.',
        brandText: 'فيريرو كيك يركز على الحلويات الغنية والفاخرة، بينما كلاج يجسد الحلويات الفنية والإبداعية.',
        features: {
          artisan: {
            title: 'صناعة حرفية',
            desc: 'مصنوع يدويًا باستخدام تقنيات تقليدية أصيلة',
          },
          quality: {
            title: 'جودة عالية',
            desc: 'نستخدم أفضل المكونات المختارة بعناية',
          },
          fresh: {
            title: 'طازج يوميًا',
            desc: 'يتم الخَبز يوميًا لضمان أفضل طعم',
          },
          team: {
            title: 'فريق شغوف',
            desc: 'خبراء حلويات يعملون بشغف وإتقان',
          },
        },
      },
      contact: {
        title: 'تواصل معنا',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        location: 'مواقعنا',
        direct: 'تواصل مباشر',
        viewMap: 'عرض على الخريطة',
        branches: {
          husun: 'فرع الحصن',
          culture: 'إربد – دوار الثقافة',
        },
      },
      payment: {
        title: 'طرق الدفع',
        click: 'كليك',
        visa: 'فيزا',
        mastercard: 'ماستر كارد',
        cod: 'الدفع عند الاستلام',
      },
      delivery: {
        title: 'خدمة التوصيل',
        available: 'خدمة التوصيل متاحة عبر شركائنا.',
      },
    },
  },
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
