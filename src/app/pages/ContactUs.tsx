import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Send, Facebook, Instagram } from 'lucide-react';

export const ContactUs = () => {
  const { t } = useTranslation();

  const locations = [
    {
      id: 'husun',
      name: t('contact.branches.husun'),
      link: 'https://share.google/aR3rvqtFVpG8gclIJ',
      address: 'Irbid, Al-Husun District',
    },
    {
      id: 'culture',
      name: t('contact.branches.culture'),
      link: 'https://share.google/hTh7wiadzI6GsFyGN',
      address: 'Irbid, North Culture Square',
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20 bg-pink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">{t('contact.title')}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Have a special request or want to learn more? Reach out to us, and our team will get back to you shortly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-accent mb-8">{t('contact.location')}</h2>
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
                    <h3 className="font-bold text-stone-900 mb-2">{loc.name}</h3>
                    <p className="text-stone-500 text-sm mb-4">{loc.address}</p>
                    <span className="text-secondary text-sm font-medium flex items-center gap-1">
                      View on Map <Send className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
               <h2 className="text-2xl font-serif font-bold text-accent">Direct Contact</h2>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-stone-400 text-xs uppercase font-bold tracking-widest">{t('contact.phone')}</p>
                      <p className="text-accent font-medium" dir="ltr">0799415250</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-stone-400 text-xs uppercase font-bold tracking-widest">{t('contact.phone')}</p>
                      <p className="text-accent font-medium" dir="ltr">0787415250</p>
                    </div>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary">
                    <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-stone-400 text-xs uppercase font-bold tracking-widest">Email</p>
                   <p className="text-accent font-medium">hello@ferrerokullaj.com</p>
                 </div>
               </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100">
            <h2 className="text-2xl font-serif font-bold text-accent mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">{t('contact.form.name')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">{t('contact.form.email')}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">{t('contact.form.message')}</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-pink-200">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
