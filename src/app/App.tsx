import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../i18n';
import { LanguageProvider } from './components/LanguageProvider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
