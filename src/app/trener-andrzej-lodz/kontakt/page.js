"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF2A2A] selection:text-white flex flex-col">
      <Navbar slug="trener-andrzej-lodz" companyName="trener andrzej" dark={true} />

      <main className="flex-grow pt-32 pb-0 flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* Left: Aggressive Form */}
        <div className="w-full lg:w-1/2 flex flex-col pt-10 px-8 lg:px-20 z-10 bg-[#050505]">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-xl w-full mb-12">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              Zacznij <br/><span className="text-[#FF2A2A]">Teraz.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              Zostaw dane. Nasz zespół skontaktuje się z Tobą w ciągu 24h, by ustalić Twój plan ataku.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            onSubmit={handleSubmit} 
            className="w-full max-w-xl space-y-6"
          >
            <div>
              <input 
                type="text" 
                required
                className="w-full bg-[#111111] border-2 border-transparent focus:border-[#FF2A2A] text-white px-6 py-5 text-lg font-bold uppercase tracking-wider outline-none transition-colors placeholder-gray-600"
                placeholder="IMIĘ I NAZWISKO"
              />
            </div>
            <div>
              <input 
                type="tel" 
                required
                className="w-full bg-[#111111] border-2 border-transparent focus:border-[#FF2A2A] text-white px-6 py-5 text-lg font-bold uppercase tracking-wider outline-none transition-colors placeholder-gray-600"
                placeholder="NUMER TELEFONU"
              />
            </div>
            <div>
              <select 
                required
                className="w-full bg-[#111111] border-2 border-transparent focus:border-[#FF2A2A] text-white px-6 py-5 text-lg font-bold uppercase tracking-wider outline-none transition-colors appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-600">WYBIERZ CEL TRENINGOWY</option>
                <option value="strength">BUDOWA MASY MIĘŚNIOWEJ (SIŁA)</option>
                <option value="fatloss">REDUKCJA TKANKI TŁUSZCZOWEJ</option>
                <option value="performance">POPRAWA WYDOLNOŚCI (CROSSFIT)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 group flex items-center justify-between bg-[#FF2A2A] text-white px-8 py-6 text-xl uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              <span>{submitted ? 'ZGŁOSZENIE PRZYJĘTE' : 'DOŁĄCZ DO NAS'}</span>
              {!submitted && <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />}
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-auto pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 w-full max-w-xl">
            <div>
              <div className="flex items-center gap-3 mb-2 text-[#FF2A2A]">
                <MapPin size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Lokalizacja</span>
              </div>
              <p className="text-white font-medium text-lg">ul. Główna 1, Lodz<br/>Lodz</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 text-[#FF2A2A]">
                <Phone size={20} />
                <span className="font-bold uppercase tracking-widest text-xs">Kontakt</span>
              </div>
              <p className="text-white font-medium text-lg">+48 500 123 456</p>
              <p className="text-gray-500 font-medium">farti303pg@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Massive Bold Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[600px] relative overflow-hidden bg-black">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Trening" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full">
            <h2 className="text-[15vw] lg:text-[12vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(255,42,42,0.1)' }}>
              POWER
            </h2>
          </div>
        </div>
      </main>

      <Footer companyName="trener andrzej" />
    </div>
  );
}