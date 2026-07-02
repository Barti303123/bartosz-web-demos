"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ShieldPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar slug="preview-medical" companyName="Podgląd Szablonu" />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldPlus className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-slate-900">
              Nawiąż <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Kontakt</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Jesteśmy tutaj, aby wspierać Państwa w trosce o zdrowie. Skontaktuj się z Podgląd Szablonu w celu umówienia wizyty, uzyskania informacji lub w nagłych przypadkach.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              {[
                { icon: <MapPin className="w-6 h-6" />, title: "Nasza Lokalizacja", content: "ul. Deweloperska 1, Warszawa\nWarszawa" },
                { icon: <Phone className="w-6 h-6" />, title: "Kontakt Telefoniczny", content: "+48 123 456 789" },
                { icon: <Mail className="w-6 h-6" />, title: "Adres E-mail", content: "test@podglad.pl" },
                { icon: <Clock className="w-6 h-6" />, title: "Godziny Otwarcia", content: "Pon-Pt: 8:00 - 20:00\nWeekend: 9:00 - 17:00" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500" />
              
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Napisz do nas</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Imię i Nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Numer Telefonu</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Adres E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="test@podglad.pl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">W czym możemy pomóc?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    placeholder="Opisz swoje objawy lub powód wizyty..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Wyślij Zapytanie
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Area */}
      <section className="h-96 bg-slate-200 relative">
        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
          <div className="text-center text-slate-500">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium">Nasza Lokalizacja na Mapie: Warszawa</p>
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}