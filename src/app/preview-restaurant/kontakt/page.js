"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar slug="preview-restaurant" companyName="Podgląd Szablonu" dark={true} />

      {/* Hero Section */}
      <section ref={headerRef} className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/80 z-10" />
          <img 
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Elegancki stół w restauracji" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Rezerwacje & <span className="text-amber-500 italic">Kontakt</span></h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-serif text-white mb-6">Nawiąż z Nami Kontakt</h2>
                <p className="text-stone-400 font-light text-lg mb-8">
                  Z ogromną przyjemnością powitamy Państwa w Podgląd Szablonu. W sprawie organizacji wydarzeń prywatnych lub realizacji wyjątkowych życzeń, uprzejmie prosimy o bezpośredni kontakt.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <MapPin className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Adres</h4>
                    <p className="text-stone-400 font-light">ul. Deweloperska 1, Warszawa<br/>Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <Phone className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefon</h4>
                    <p className="text-stone-400 font-light">+48 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <Mail className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Adres E-mail</h4>
                    <p className="text-stone-400 font-light">test@podglad.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <Clock className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Godziny Otwarcia</h4>
                    <p className="text-stone-400 font-light">
                      Poniedziałek - Czwartek: 17:00 - 22:30<br/>
                      Piątek - Sobota: 17:00 - 23:30<br/>
                      Niedziela: 16:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form Column */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glassmorphism p-8 md:p-12 rounded-3xl border border-stone-700/50 backdrop-blur-xl bg-stone-900/40 relative shadow-2xl">
                <h3 className="text-2xl font-serif text-white mb-8">Złóż Zapytanie o Rezerwację</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Imię i Nazwisko</label>
                      <input 
                        type="text" 
                        className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        placeholder="Twoje imię i nazwisko"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Adres E-mail</label>
                      <input 
                        type="email" 
                        className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                        placeholder="Twój adres e-mail"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Data</label>
                      <input 
                        type="date" 
                        className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Godzina</label>
                      <input 
                        type="time" 
                        className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-300 mb-2">Liczba Gości</label>
                      <select className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors appearance-none">
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Osoba' : 'Osób'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-300 mb-2">Specjalne Życzenia</label>
                    <textarea 
                      rows="4" 
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                      placeholder="Alergie, specjalne okazje..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-600 text-stone-950 py-4 rounded-lg font-semibold tracking-wider uppercase hover:bg-amber-500 transition-colors mt-4 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
                  >
                    Potwierdź Rezerwację
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}