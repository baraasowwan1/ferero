import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Footer = () => {
  const { t } = useTranslation();

  // Using cleaner, more "actual logo" representational images for payment methods
  const paymentMethods = [
    { name: t('payment.visa'), img: 'https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png' }, // More realistic card/logo feel
    { name: t('payment.mastercard'), img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png' },
    { name: t('payment.click'), img: 'https://www.jopacc.com/sites/default/files/2023-11/final_cliq_logo-02_1_0.png' },
    { name: t('payment.cod'), img: 'https://png.pngtree.com/png-clipart/20210606/original/pngtree-cash-on-delivery-logo-design-with-illustation-png-image_6376011.jpg' },
  ];

  return (
    <footer className="bg-accent text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 overflow-hidden rounded-full border border-stone-700">
                  <ImageWithFallback 
                    src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/471173763_1015997517231306_628267136974182119_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UitFx4iNlkAQ7kNvwH9zOKe&_nc_oc=AdmqAayMIwoM4sLc0NhkRzM0Fl-sUqrEzzeIekuwZJzdLHuiIKLKrEnqUpD7s0cJLnejtsSkz5pUyOCYyga5SLT8&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=ezs5sZI2vL6nE6Q1oeQf6g&oh=00_Afv3kwTidFR-YLjtOl0jQsZIKt48il3-nKDUSZlFNg3g_A&oe=698A9D7E"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
               </div>
               <h3 className="text-xl font-serif font-bold text-white">Ferrero & Kullaj</h3>
            </div>
            <p className="text-stone-400 leading-relaxed text-sm">
              {t('about.description').substring(0, 100)}...
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('contact.location')}</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">
                  {t('contact.branches.husun')}: <br/>
                  <a href="https://share.google/aR3rvqtFVpG8gclIJ" className="hover:text-secondary underline text-xs">Open Map</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">
                  {t('contact.branches.culture')}: <br/>
                  <a href="https://share.google/hTh7wiadzI6GsFyGN" className="hover:text-secondary underline text-xs">Open Map</a>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('payment.title')}</h4>
            <div className="grid grid-cols-2 gap-3">
               {paymentMethods.map((method, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-1 p-2 bg-stone-800/50 rounded-lg border border-stone-800">
                    <div className="w-12 h-8 overflow-hidden rounded bg-white p-0.5">
                       <ImageWithFallback src={method.img} alt={method.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] text-stone-400">{method.name}</span>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('contact.phone')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-stone-400">
                <Phone className="w-4 h-4 text-secondary" />
                <span dir="ltr" className="text-sm font-medium">0799415250</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Phone className="w-4 h-4 text-secondary" />
                <span dir="ltr" className="text-sm font-medium">0787415250</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} Ferrero Cake & Kullaj 1951. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
