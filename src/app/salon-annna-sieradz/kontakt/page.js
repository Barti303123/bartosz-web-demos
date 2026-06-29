"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-[#C5A880] selection:text-white">
      <Navbar slug="salon-annna-sieradz" companyName="Salon annna" dark={false} />

      <section className="pt-32 pb-16 px-4 relative">
        <motion.div 
          animate={{ y: [-20, 20, -20] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-48 h-48 bg-[#E8DCCB]/40 rounded-full blur-3xl z-0"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Nawiąż <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#C5A880] to-[#b0936c]">Kontakt</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
          >
            Z przyjemnością odpowiemy na Twoje pytania. Zarezerwuj swoją wizytę Salon Urody lub skontaktuj się z nami w celu uzyskania spersonalizowanej konsultacji.
          </motion.p>
        </div>
      </section>

      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8DCCB]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F3ECE4] to-transparent rounded-bl-full opacity-50" />
                
                <h3 className="text-2xl font-serif mb-8 text-[#4A3B32]">Informacje Kontaktowe</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#4A3B32] mb-1">Nasza Lokalizacja</h4>
                      <p className="text-gray-500 font-light text-sm">ul. Główna 1, Sieradz</p>
                      <p className="text-gray-500 font-light text-sm">Sieradz</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#4A3B32] mb-1">Telefon</h4>
                      <p className="text-gray-500 font-light text-sm">+48 500 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#4A3B32] mb-1">E-mail</h4>
                      <p className="text-gray-500 font-light text-sm">bartosz.waw@vp.pl</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#4A3B32] mb-1">Godziny Otwarcia</h4>
                      <p className="text-gray-500 font-light text-sm">Pon - Pt: 9:00 - 19:00</p>
                      <p className="text-gray-500 font-light text-sm">Sob: 10:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-3"
            >
              <div className="backdrop-blur-md bg-white/40 rounded-3xl p-8 md:p-10 shadow-lg border border-white/50">
                <h3 className="text-3xl font-serif mb-2">Napisz do nas</h3>
                <p className="text-gray-500 font-light mb-8">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>

                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#F3ECE4] text-[#4A3B32] p-6 rounded-2xl text-center border border-[#C5A880]/30"
                  >
                    <h4 className="text-xl font-serif mb-2 text-[#C5A880]">Dziękujemy!</h4>
                    <p className="font-light">Twoja wiadomość została odebrana. Skontaktujemy się z Tobą wkrótce.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Imię</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white/60 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-transparent transition-all shadow-sm"
                          placeholder="Anna"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nazwisko</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white/60 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-transparent transition-all shadow-sm"
                          placeholder="Kowalska"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Adres E-mail</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/60 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-transparent transition-all shadow-sm"
                        placeholder="anna@przyklad.pl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Wiadomość</label>
                      <textarea 
                        required
                        rows="4"
                        className="w-full bg-white/60 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-transparent transition-all resize-none shadow-sm"
                        placeholder="W czym możemy pomóc?"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full md:w-auto px-8 py-4 bg-[#4A3B32] text-white rounded-xl hover:bg-[#3A2E27] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 shadow-md hover:shadow-lg"
                    >
                      <span className="tracking-wide">{formStatus === 'sending' ? 'Wysyłanie...' : 'Wyślij Wiadomość'}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer companyName="Salon annna" />
    </div>
  );
}