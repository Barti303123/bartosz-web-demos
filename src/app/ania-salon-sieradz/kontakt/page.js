"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#3A332C] font-sans selection:bg-[#C1A88B] selection:text-white">
      <Navbar slug="ania-salon-sieradz" companyName="Ania Salon" dark={false} />

      {/* Header */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex justify-center items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#C1A88B]"></span>
            <span className="uppercase tracking-[0.2em] text-[#C1A88B] text-xs font-semibold">Twoja Wizyta</span>
            <span className="w-8 h-[1px] bg-[#C1A88B]"></span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-[#3A332C]">
            Zarezerwuj <span className="italic font-light text-[#C1A88B]">Czas</span> <br/>Dla Siebie.
          </motion.h1>
        </div>
      </section>

      {/* Main Content - Side by Side */}
      <section className="pb-32 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="w-full h-80 rounded-3xl overflow-hidden mb-12 shadow-xl shadow-black/5">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop" alt="Spa Reception" className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#C1A88B] font-semibold mb-4">Adres</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#3A332C] mt-1 shrink-0" size={18} />
                  <p className="text-gray-600 font-light">ul. Główna 1, Sieradz<br/>Sieradz</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#C1A88B] font-semibold mb-4">Godziny Otwarcia</h3>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#3A332C] mt-1 shrink-0" size={18} />
                  <p className="text-gray-600 font-light">Pon - Pt: 09:00 - 20:00<br/>Sobota: 10:00 - 16:00</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#C1A88B] font-semibold mb-4">Telefon</h3>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#3A332C] shrink-0" size={18} />
                  <a href="tel:+48 500 123 456" className="text-gray-600 font-light hover:text-[#C1A88B] transition-colors">+48 500 123 456</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-[#C1A88B] font-semibold mb-4">E-mail</h3>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#3A332C] shrink-0" size={18} />
                  <a href="mailto:farti303pg@gmail.com" className="text-gray-600 font-light hover:text-[#C1A88B] transition-colors">farti303pg@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Minimalist Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-black/5">
            <h2 className="text-3xl font-serif mb-2 text-[#3A332C]">Napisz do nas</h2>
            <p className="text-gray-500 font-light mb-12">Nasz concierge oddzwoni do Ciebie w ciągu 15 minut, aby dopasować idealny termin wizyty.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  className="block w-full px-0 py-4 text-[#3A332C] bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#C1A88B] peer"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#C1A88B]">Imię i Nazwisko</label>
              </div>

              <div className="relative group">
                <input 
                  type="tel" 
                  id="phone"
                  required
                  className="block w-full px-0 py-4 text-[#3A332C] bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#C1A88B] peer"
                  placeholder=" "
                />
                <label htmlFor="phone" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#C1A88B]">Numer Telefonu</label>
              </div>

              <div className="relative group">
                <select 
                  id="service"
                  className="block w-full px-0 py-4 text-[#3A332C] bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#C1A88B] peer font-light"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">Jakim zabiegiem jesteś zainteresowana?</option>
                  <option value="face">Kosmetologia na Twarz</option>
                  <option value="body">Rytuały Ciała & Masaże</option>
                  <option value="med">Medycyna Estetyczna</option>
                  <option value="other">Inne / Konsultacja</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full mt-10 group relative inline-flex items-center justify-center px-8 py-5 bg-[#3A332C] text-white rounded-full overflow-hidden transition-all hover:bg-[#C1A88B]"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs font-semibold">
                  {submitted ? 'Wysłano pomyślnie!' : 'Wyślij Zgłoszenie'}
                </span>
                {!submitted && <ArrowRight className="relative z-10 w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />}
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest">Twoje dane są bezpieczne</p>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer companyName="Ania Salon" />
    </div>
  );
}