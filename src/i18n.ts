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
      },
      store: {
        title: 'Our Sweet Collection',
        categories: {
          all: 'All',
          cakes: 'Cakes',
          molded: 'Kullaj',
          pastries: 'Pastries',
        },
        noPrice: 'Price on request',
      },
      about: {
        title: 'About Ferrero Cake & Kullaj 1951',
        description:
          'Welcome to our world of sweetness. Ferrero Cake and Cheese & Walnut Kullaj 1951 represent the pinnacle of artisanal baking.',
      },
      contact: {
        title: 'Contact Us',
        phone: 'Phone',
        email: 'Email',
        location: 'Our Locations',
        direct: 'Direct Contact',
        viewMap: 'View on Map',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send',
        },
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
        decorativeWindow: 'نافذة الحلويات',
        viewStore: 'عرض المتجر',
      },
      store: {
        title: 'مجموعتنا الحلوة',
        categories: {
          all: 'الكل',
          cakes: 'كيك',
          molded: 'كلاج',
          pastries: 'معجنات',
        },
        noPrice: 'السعر عند الطلب',
      },
      about: {
        title: 'حول فيريرو كيك وكلاج جبنة وجوز ١٩٥١',
        description:
          'مرحبًا بكم في عالمنا المليء بالحلويات. نقدم لكم أروع أنواع الكيك والكلاج بنكهات مميزة وتصاميم أنيقة.',
      },
      contact: {
        title: 'تواصل معنا',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        location: 'مواقعنا',
        direct: 'تواصل مباشر',
        viewMap: 'عرض على الخريطة',
        form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          send: 'إرسال',
        },
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
    lng: 'ar',        // ⭐ اجعل العربية افتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
