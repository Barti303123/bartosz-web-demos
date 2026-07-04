"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "../content.json";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-[#F3F4F6] font-sans selection:bg-[#C5A059] selection:text-white flex flex-col">
      <Navbar slug="preview-law" companyName="Podgląd Szablonu" dark={true} />

      <main className="flex-grow flex flex-col lg:flex-row relative">
        
        {/* Left: Contact Details & Image */}
        <div className="w-full lg:w-1/2 relative bg-[#0A1128] pt-32 pb-16 px-6 lg:px-20 border-r border-white/10 flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2574&auto=format&fit=crop" 
              alt="Kancelaria" 
              className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-transparent to-[#0A1128]"></div>
          </div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-lg mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-semibold">Poufność i Bezpieczeństwo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-8">
              {content.contact.heading}
            </h1>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              {content.contact.cta}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative z-10 max-w-lg space-y-10">
            <div>
              <p className="text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">Główna Siedziba</p>
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-500 mt-1 shrink-0" size={20} />
                <p className="text-white text-lg font-light">ul. Deweloperska 1, Warszawa<br/>Warszawa</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">Telefon</p>
                <div className="flex items-center gap-4">
                  <Phone className="text-gray-500 shrink-0" size={20} />
                  <a href="tel:+48 123 456 789" className="text-white text-lg font-light hover:text-[#C5A059] transition-colors">+48 123 456 789</a>
                </div>
              </div>
              <div>
                <p className="text-[#C5A059] text-xs uppercase tracking-widest font-bold mb-2">Email</p>
                <div className="flex items-center gap-4">
                  <Mail className="text-gray-500 shrink-0" size={20} />
                  <a href="mailto:test@podglad.pl" className="text-white text-lg font-light hover:text-[#C5A059] transition-colors truncate">test@podglad.pl</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Elegant Form */}
        <div className="w-full lg:w-1/2 bg-[#060D1A] pt-16 lg:pt-32 pb-16 px-6 lg:px-20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="max-w-xl w-full relative z-10">
            <h2 className="text-3xl font-serif text-white mb-8">Zarezerwuj Spotkanie</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold block">Imię i Nazwisko / Firma</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-lg font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder-gray-700"
                  placeholder="Wpisz dane..."
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold block">Numer Kontaktowy</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-lg font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder-gray-700"
                  placeholder="+48..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold block">Temat Rozmowy</label>
                <select 
                  required
                  className="w-full bg-[#060D1A] border-b border-white/20 text-white py-3 text-lg font-light focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">Wybierz obszar praktyki</option>
                  {content.services.map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="other">Inna Sprawa</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="group mt-12 px-10 py-5 bg-white text-[#060D1A] text-sm uppercase tracking-widest font-bold overflow-hidden shadow-xl w-full flex justify-between items-center relative"
              >
                <div className="absolute inset-0 bg-[#C5A059] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 transition-colors group-hover:text-white">
                  {submitted ? 'Otrzymaliśmy Zapytanie' : 'Wyślij Formularz'}
                </span>
                {!submitted && <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-all group-hover:text-white" />}
              </button>
              
              <p className="text-xs text-gray-600 font-light mt-6 text-center">
                Wysyłając ten formularz, zgadzasz się na naszą Politykę Prywatności. Twoje dane są chronione tajemnicą adwokacką.
              </p>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
