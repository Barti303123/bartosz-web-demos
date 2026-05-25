"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar slug="kancelaria-testowa-warszawa" companyName="Kancelaria Testowa" />
      <main className="flex-grow">
        
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Skontaktuj się z nami</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Nie czekaj, aż Twój problem prawny eskaluje. Napisz lub zadzwoń. Zapewniamy pełną dyskrecję i błyskawiczną reakcję.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Informacje kontaktowe */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Dane Kontaktowe</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-6">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Siedziba Główna</h4>
                      <p className="text-slate-600 mt-1">ul. Złota 44, 00-120 Warszawa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-6">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Telefon Całodobowy</h4>
                      <p className="text-slate-600 mt-1 text-2xl font-semibold">+48 500 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mr-6">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">E-mail</h4>
                      <p className="text-slate-600 mt-1">biuro@kancelaria-testowa.pl</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Formularz Glassmorphism */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Napisz wiadomość</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Imię i Nazwisko</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Adres E-mail</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="jan@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Twoja Wiadomość</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Opisz krótko swój problem..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                    Wyślij Zapytanie
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer companyName="Kancelaria Testowa" />
    </div>
  );
}