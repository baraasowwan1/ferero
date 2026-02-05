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
        description: 'Welcome to our world of sweetness. Ferrero Cake and Cheese & Walnut Kullaj 1951 represent the pinnacle of artisanal baking. We combine traditional techniques with modern creativity to bring you the most exquisite cakes and traditional Kullaj. Our passion is to make every celebration memorable with our unique flavors and elegant designs.',
      },
      contact: {
        title: 'Contact Us',
        phone: 'Phone',
        location: 'Our Locations',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message',
        },
        branches: {
          husun: 'Al-Husun Branch',
          culture: 'North Culture Square, Irbid',
        }
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
      }
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
        description: 'مرحبًا بكم في عالمنا المليء بالحلويات. يمثل فيريرو كيك وكلاج جبنة وجوز ١٩٥١ قمة صناعة الحلويات الحرفية. نحن نجمع بين التقنيات التقليدية والإبداع الحديث لنقدم لكم أروع أنواع الكيك، والكلاج التقليدي. شغفنا هو جعل كل احتفال لا يُنسى بنكهاتنا الفريدة وتصاميمنا الأنيقة.',
      },
      contact: {
        title: 'اتصل بنا',
        phone: 'الهاتف',
        location: 'مواقعنا',
        form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          send: 'إرسال الرسالة',
        },
        branches: {
          husun: 'فرع الحصن',
          culture: 'إربد - ميدان الثقافة الشمالي',
        }
      },
      payment: {
        title: 'طرق الدفع',
        click: 'CliQ',
        visa: 'فيزا',
        mastercard: 'ماستر كارد',
        cod: 'الدفع عند الاستلام',
      },
      delivery: {
        title: 'خدمة التوصيل',
        available: 'خدمة التوصيل متاحة عبر شركائنا.',
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
