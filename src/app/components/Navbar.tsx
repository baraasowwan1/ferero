import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageProvider';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Navbar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.store'), path: '/store' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-4">
             <div className="h-14 w-14 overflow-hidden rounded-full border border-pink-200 shadow-sm">
                <ImageWithFallback 
                  src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/471173763_1015997517231306_628267136974182119_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UitFx4iNlkAQ7kNvwH9zOKe&_nc_oc=AdmqAayMIwoM4sLc0NhkRzM0Fl-sUqrEzzeIekuwZJzdLHuiIKLKrEnqUpD7s0cJLnejtsSkz5pUyOCYyga5SLT8&_nc_zt=23&_nc_ht=scontent.famm6-1.fna&_nc_gid=ezs5sZI2vL6nE6Q1oeQf6g&oh=00_Afv3kwTidFR-YLjtOl0jQsZIKt48il3-nKDUSZlFNg3g_A&oe=698A9D7E"
                  alt="Ferrero Logo"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-accent leading-tight">Ferrero Cake</span>
                <span className="text-[10px] text-secondary font-medium uppercase tracking-widest">& Kullaj 1951</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary underline decoration-2 underline-offset-8' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 hover:bg-pink-50 transition-colors text-sm font-medium text-secondary"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-full hover:bg-pink-50 text-secondary"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium ${
                    location.pathname === link.path ? 'bg-pink-50 text-secondary' : 'text-stone-600 hover:bg-pink-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
