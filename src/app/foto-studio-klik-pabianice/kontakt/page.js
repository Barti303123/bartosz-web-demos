"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "../content.json";

export default function DefaultContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden flex flex-col">
      <Navbar slug="foto-studio-klik-pabianice" companyName="Foto Studio Klik" dark={true} />

      {/* Header */}
      <section className="pt-40 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
              <MessageSquare size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              {content.contact.heading}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              {content.contact.cta}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 pb-32 flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Info Side */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-5/12 space-y-8">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[50px]" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Centrala Główna</h3>
                    <p className="text-slate-400 leading-relaxed font-light">ul. Zamkowa 12<br/>Pabianice</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[50px]" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 shrink-0 border border-fuchsia-500/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Wsparcie Telefonicjne</h3>
                    <a href="tel:+48 555 200 002" className="text-slate-400 leading-relaxed font-light hover:text-fuchsia-400 transition-colors">+48 555 200 002</a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Wsparcie Mailowe</h3>
                    <a href="mailto:kontakt@fotoklik.pl" className="text-slate-400 leading-relaxed font-light hover:text-cyan-400 transition-colors">kontakt@fotoklik.pl</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-7/12">
              <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Imię i Nazwisko</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-light placeholder-slate-600"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Numer Telefonu</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-light placeholder-slate-600"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Adres E-mail</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-light placeholder-slate-600"
                      placeholder="twoj@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">O czym chcesz porozmawiać?</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-light placeholder-slate-600 resize-none"
                      placeholder="Opisz krótko swój projekt lub wyzwanie..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-white hover:bg-slate-200 text-slate-950 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] mt-8"
                  >
                    {submitted ? (
                      <>Wiadomość Wysłana <ArrowRight size={20} /></>
                    ) : (
                      <>Wyślij Wiadomość <Send size={20} /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">Odpowiadamy zazwyczaj w ciągu 24 godzin roboczych.</p>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      <Footer companyName="Foto Studio Klik" />
    </main>
  );
}
