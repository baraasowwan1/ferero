import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Mail, Send, Facebook, Instagram } from 'lucide-react';

export const ContactUs = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 'husun',
      name: t('contact.branches.husun'),
      link: 'https://share.google/aR3rvqtFVpG8gclIJ',
      address: 'إربد – لواء الحصن',
    },
    {
      id: 'culture',
      name: t('contact.branches.culture'),
      link: 'https://share.google/hTh7wiadzI6GsFyGN',
      address: 'إربد – دوار الثقافة',
    },
  ];

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      {/* Header */}
      <div className="py-20 bg-pink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            هل لديك طلب خاص أو ترغب بمعرفة المزيد؟ تواصل معنا وسنقوم بالرد عليك في أقرب وقت.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">

          {/* Locations */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-accent mb-8">
              {t('contact.location')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc, i) => (
                <a
                  key={i}
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-stone-200 rounded-2xl hover:border-secondary hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-pink-100 text-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-stone-900 mb-2">
                    {loc.name}
                  </h3>

                  <p className="text-stone-500 text-sm mb-4">
                    {loc.address}
                  </p>

                  <span className="text-secondary text-sm font-medium flex items-center gap-1">
                    {t('contact.viewMap')} <Send className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-accent mb-8">
              {t('contact.direct')}
            </h2>

            <div className="space-y-4">
              {['0799415250', '0787415250'].map((phone, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100"
                  dir="ltr"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs font-bold tracking-widest">
                      {t('contact.phone')}
                    </p>
                    <p className="text-accent font-medium">
                      {phone}
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100"
                dir="ltr"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-bold tracking-widest">
                    {t('contact.email')}
                  </p>
                  <p className="text-accent font-medium">
                    hello@ferrerokullaj.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full">
              <Facebook className="w-5 h-5" />
              <span>فيسبوك</span>
            </a>
            <a className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full">
              <Instagram className="w-5 h-5" />
              <span>إنستغرام</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
