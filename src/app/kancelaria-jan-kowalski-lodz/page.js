"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Shield, FileText, Award, Landmark, Phone, ArrowRight, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500/30">
      <Navbar slug="kancelaria-jan-kowalski-lodz" companyName="Kancelaria Jan Kowalski" dark={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Decorative Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md">
              <Shield className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium tracking-wide text-yellow-500 uppercase">Wsparcie Prawne Premium</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight">
              Sprawiedliwość, Uczciwość <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                i Doskonałość
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              W Kancelaria Jan Kowalski zapewniamy niezrównaną reprezentację w skomplikowanych sprawach prawnych. Nasz oddany zespół prawników walczy nieustępliwie, aby chronić Twoje prawa i zabezpieczyć Twoją przyszłość.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-bold rounded-lg flex items-center gap-2 transition-shadow hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              >
                Darmowa Konsultacja <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-700 hover:border-yellow-500/50 hover:bg-slate-800/50 rounded-lg text-white font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> +48 500 123 456
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/20 border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" 
                alt="Szala Sprawiedliwości"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-white font-serif text-xl font-bold">25+ Lat</p>
                  <p className="text-slate-400 text-sm">Doświadczenia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-yellow-500 uppercase">Nasza Ekspertyza</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Obszary Praktyki</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Prawo Korporacyjne", icon: Landmark, desc: "Nawigowanie po skomplikowanym zarządzaniu korporacyjnym, fuzjach i przejęciach." },
              { title: "Prawo Karne", icon: Shield, desc: "Agresywna reprezentacja chroniąca Twoją wolność i prawa konstytucyjne." },
              { title: "Sprawy Cywilne", icon: Scale, desc: "Rozwiązywanie sporów z precyzją, strategią i niezachwianym wsparciem." },
              { title: "Nieruchomości", icon: FileText, desc: "Kompleksowe wsparcie prawne dla transakcji komercyjnych i mieszkaniowych." },
              { title: "Prawo Rodzinne", icon: Award, desc: "Współczujące doradztwo w sprawach rozwodowych, opieki nad dziećmi i spraw rodzinnych." },
              { title: "Odszkodowania", icon: HeartPulse, desc: "Zapewnienie maksymalnych odszkodowań dla osób poszkodowanych przez zaniedbanie." }
            ].map((area, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/50 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="w-7 h-7 text-yellow-500" />
                </div>
                <h4 className="text-2xl font-serif text-white mb-3">{area.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">{area.desc}</p>
                <div className="flex items-center text-yellow-500 font-medium group-hover:gap-2 transition-all">
                  Więcej informacji <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Gotowy szukać sprawiedliwości?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby umówić się na poufną konsultację. Jesteśmy gotowi słuchać, doradzać i walczyć w Twoim imieniu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-colors text-lg">
                Umów Konsultację
              </button>
              <div className="text-slate-400 px-4">lub zadzwoń pod</div>
              <a href="tel:+48 500 123 456" className="text-2xl font-serif text-white hover:text-yellow-400 transition-colors">
                +48 500 123 456
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Kancelaria Jan Kowalski" />
    </div>
  );
}
