"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, HardHat, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const hazardStripe = "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(250, 204, 21, 0.1) 10px, rgba(250, 204, 21, 0.1) 20px)";

export default function Contact() {
  const slamIn = {
    hidden: { opacity: 0, scale: 1.1, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-400 selection:text-slate-950">
      <Navbar slug="budowa-marcin-zgierz" companyName="Budowa Marcin" dark={true} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0" style={{ backgroundImage: hazardStripe }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slamIn}
          >
            <div className="inline-flex items-center justify-center mb-6 px-4 py-2 border-2 border-yellow-400 bg-slate-950/80 backdrop-blur-md">
              <HardHat className="text-yellow-400 w-5 h-5 mr-2" />
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Złóż Zapytanie Ofertowe</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">
              Twórzmy <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Razem</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Zapraszamy do przedstawienia szczegółów Państwa projektu. Zespół Budowa Marcin niezwłocznie przygotuje dla Państwa kompleksową i precyzyjną wycenę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 border-b-4 border-slate-800 pb-4">Dane Kontaktowe</h3>
              
              {[
                { icon: MapPin, title: "Siedziba Główna", content: "ul. Główna 1, Zgierz, Zgierz" },
                { icon: Phone, title: "Bezpośrednia Linia", content: "+48 500 123 456" },
                { icon: Mail, title: "Adres E-mail", content: "bartosz.waw@vp.pl" },
                { icon: Clock, title: "Godziny Działania", content: "Pon-Pt: 6:00 - 18:00" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="bg-slate-900 p-4 border-2 border-slate-800 group-hover:border-yellow-400 transition-colors mr-6">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-lg font-medium text-white">{item.content}</p>
                  </div>
                </div>
              ))}

              <div className="mt-12 p-8 bg-yellow-400 border-4 border-slate-800 text-slate-950 relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: hazardStripe, opacity: 0.1 }}></div>
                <h4 className="text-2xl font-black uppercase mb-2 relative z-10">Pilne Naprawy?</h4>
                <p className="font-bold mb-4 relative z-10">Zapewniamy całodobowe wsparcie w nagłych przypadkach konstrukcyjnych.</p>
                <a href="tel:+48 500 123 456" className="inline-flex items-center text-lg font-black uppercase border-b-2 border-slate-950 relative z-10 hover:text-white hover:border-white transition-colors">
                  Zadzwoń pod +48 500 123 456 <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-slate-900 border-4 border-slate-800 p-8 md:p-12 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Zapytanie o Projekt</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Imię i Nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border-2 border-slate-800 px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-colors font-medium rounded-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Adres E-mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-950 border-2 border-slate-800 px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-colors font-medium rounded-none"
                      placeholder="jan@przyklad.pl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Numer Telefonu</label>
                    <input 
                      type="tel" 
                      className="w-full bg-slate-950 border-2 border-slate-800 px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-colors font-medium rounded-none"
                      placeholder="(123) 456-789"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Rodzaj Projektu</label>
                    <select className="w-full bg-slate-950 border-2 border-slate-800 px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-colors font-medium rounded-none appearance-none">
                      <option>Budownictwo Komercyjne</option>
                      <option>Renowacje Rezydencyjne</option>
                      <option>Infrastruktura Przemysłowa</option>
                      <option>Inne</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Szczegóły Projektu</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-950 border-2 border-slate-800 px-4 py-4 text-white focus:outline-none focus:border-yellow-400 transition-colors font-medium rounded-none resize-none"
                    placeholder="Prosimy o opisanie zakresu, harmonogramu i budżetu..."
                  ></textarea>
                </div>

                <button type="submit" className="group w-full md:w-auto px-10 py-5 bg-yellow-400 text-slate-950 font-black uppercase tracking-widest text-lg flex items-center justify-center hover:bg-yellow-300 transition-colors">
                  Wyślij Zapytanie <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer companyName="Budowa Marcin" />
    </div>
  );
}