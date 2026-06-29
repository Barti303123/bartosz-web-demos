"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -30, skewX: 5 },
    show: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring' } }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <Navbar slug="bartosz-sieradz" companyName="bartosz" dark={true} />

      <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center">
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ccff00] rounded-full blur-[150px] opacity-10 pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
              Przekrocz Próg <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-green-500 drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]">Areny</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Nie ma już na co czekać. Skontaktuj się z nami, zadzwoń lub przekrocz próg naszej ekskluzywnej przestrzeni w <span className="text-white font-bold">bartosz</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              variants={containerVars}
              initial="hidden"
              animate="show"
              className="space-y-10"
            >
              {[
                { icon: MapPin, label: "Lokalizacja", value: "ul. Główna 1, Sieradz, Sieradz" },
                { icon: Phone, label: "Telefon", value: "+48 500 123 456" },
                { icon: Mail, label: "E-mail", value: "bartosz.waw@vp.pl" }
              ].map((info, idx) => (
                <motion.div key={idx} variants={itemVars} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border-2 border-zinc-800 bg-white/5 backdrop-blur-sm flex items-center justify-center -skew-x-12 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all duration-300">
                    <info.icon className="text-[#ccff00] skew-x-12 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div className="mt-1">
                    <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-1">{info.label}</h3>
                    <p className="text-2xl font-semibold text-gray-200 group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVars} className="pt-8">
                <div className="relative w-full h-64 border-2 border-zinc-800 -skew-x-3 overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Nasza Ekskluzywna Lokalizacja" className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-[#ccff00] mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-6 skew-x-3">
                    <span className="bg-[#ccff00] text-black text-xs font-bold px-2 py-1 uppercase tracking-widest">Siedziba Główna</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 relative shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00] blur-[100px] opacity-20 pointer-events-none" />
              
              <h2 className="text-3xl font-bold uppercase mb-8 tracking-tight">Wyślij Wiadomość</h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 border border-green-500/50 text-green-400 p-8 flex flex-col items-center text-center gap-4 rounded-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Send className="text-green-400" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">Wiadomość Wysłana</h3>
                  <p className="text-lg font-light text-green-200">Nasz zespół skontaktuje się z Tobą niezwłocznie, aby zaplanować Twoją podróż do sukcesu. Przygotuj się na intensywną pracę.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Imię i Nazwisko</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-black/50 border border-zinc-800 text-white px-5 py-4 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all font-light rounded-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Adres E-mail</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-black/50 border border-zinc-800 text-white px-5 py-4 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all font-light rounded-none"
                      placeholder="jan@przyklad.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Wiadomość</label>
                    <textarea 
                      required
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-black/50 border border-zinc-800 text-white px-5 py-4 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.2)] transition-all resize-none font-light rounded-none"
                      placeholder="Jestem gotowy/a na transformację..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#ccff00] text-black font-extrabold uppercase tracking-widest py-5 flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] disabled:opacity-50 -skew-x-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="skew-x-6 relative z-10">{isSubmitting ? 'Wysyłanie...' : 'Wyślij'}</span>
                    {!isSubmitting && <Send size={20} className="skew-x-6 relative z-10 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer companyName="bartosz" />
    </div>
  );
}