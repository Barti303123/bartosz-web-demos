"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar slug="kancelaria-mariusz-zloczew" companyName="Kancelaria Mariusz" dark={true} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase mb-4">Poufna Konsultacja</h2>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Skontaktuj się z <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Nami</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Twoja droga do sprawiedliwości zaczyna się od rozmowy. Skontaktuj się z naszym zespołem w Kancelaria Mariusz, aby umówić wstępną konsultację.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-3xl font-serif text-white mb-8">Informacje o Kancelarii</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0 border border-slate-800">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-1">Adres</h4>
                    <p className="text-white text-lg">ul. Główna 1, Złoczew</p>
                    <p className="text-slate-400">Złoczew</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0 border border-slate-800">
                    <Phone className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-1">Telefon</h4>
                    <p className="text-white text-lg">+48 500 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0 border border-slate-800">
                    <Mail className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-1">E-mail</h4>
                    <p className="text-white text-lg">bartosz.waw@vp.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shrink-0 border border-slate-800">
                    <Clock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-1">Godziny Otwarcia</h4>
                    <p className="text-white text-lg">Pon - Pt: 8:00 - 18:00</p>
                    <p className="text-slate-400">Weekend: Po umówieniu</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-xl h-full">
              <h3 className="text-3xl font-serif text-white mb-6">Wyślij Wiadomość</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Imię</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                      placeholder="Jan"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Nazwisko</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                      placeholder="Kowalski"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Adres E-mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                      placeholder="jan@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Numer Telefonu</label>
                    <input 
                      type="tel" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                      placeholder="500 123 456"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Krótko Opisz Swoją Sprawę</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none"
                    placeholder="W czym możemy pomóc?"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-950 font-bold rounded-xl px-8 py-4 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                >
                  <Send className="w-5 h-5" />
                  Wyślij Zapytanie
                </motion.button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  * Wysłanie tego formularza nie ustanawia stosunku adwokat-klient.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Kancelaria Mariusz" />
    </div>
  );
}
