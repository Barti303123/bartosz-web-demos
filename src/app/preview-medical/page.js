"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, ShieldCheck, Clock, ArrowRight, Activity, Calendar, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar slug="preview-medical" companyName="Podgląd Szablonu" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/90 to-blue-50/50 mix-blend-multiply" />
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
              alt="Nowoczesna Placówka Medyczna" 
              className="w-full h-full object-cover opacity-40"
            />
        </div>
        
        {/* Decorative Orbs */}
        <motion.div 
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 pointer-events-none"
        />
        <motion.div 
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6 text-cyan-600 font-semibold tracking-wide uppercase text-sm">
                <HeartPulse className="w-5 h-5" />
                <span>Wiodąca Jakość w Testowa Branża</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-slate-900">
                Zaawansowana Opieka dla <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                  Zdrowszej Przyszłości
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                W Podgląd Szablonu redefiniujemy standardy opieki medycznej, łącząc innowacyjną technologię z głębokim zrozumieniem potrzeb pacjenta, by zapewnić Państwu w Warszawa przyszłość pełną zdrowia i witalności.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="/preview-medical/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Zarezerwuj Konsultację
                </a>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +48 123 456 789
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment/Emergency Cards - Glassmorphism */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Clock className="w-8 h-8 text-cyan-500" />, title: "Godziny Dostępności", desc: "Pon - Pt: 8:00 - 20:00\nSob: 9:00 - 17:00" },
            { icon: <Activity className="w-8 h-8 text-blue-500" />, title: "Pilna Pomoc Medyczna", desc: "Całodobowa, specjalistyczna opieka nagła, zapewniająca natychmiastową interwencję medyczną." },
            { icon: <Stethoscope className="w-8 h-8 text-cyan-600" />, title: "Nasi Eksperci Medyczni", desc: "Nasz zespół wybitnych specjalistów oferuje spersonalizowaną, kompleksową opiekę na najwyższym poziomie." }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
            >
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
              <p className="text-slate-600 whitespace-pre-line leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About/Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Zespół Medyczny"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="w-8 h-8 text-cyan-500" />
                  <span className="text-2xl font-bold text-slate-800">15+</span>
                </div>
                <p className="text-slate-600 font-medium">Lat wybitnej praktyki medycznej w Warszawa</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Pionierskie <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Rozwiązania dla Zdrowia</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Jako wiodący ośrodek w dziedzinie Testowa Branża, Podgląd Szablonu z dumą oferuje usługi medyczne na światowym poziomie. Nasza ultranowoczesna placówka, wyposażona w najnowsze technologie, gwarantuje niezrównaną precyzję diagnostyki i maksymalną skuteczność terapii.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Najnowocześniejszy sprzęt medyczny",
                  "Wysoce wykwalifikowani i wyspecjalizowani profesjonaliści",
                  "Kompleksowe, spersonalizowane plany opieki",
                  "Komfortowe i sterylne środowiska"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <HeartPulse className="w-3 h-3 text-cyan-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/preview-medical/contact" className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors group">
                Poznaj Pełnię Naszych Usług 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Państwa Zdrowie – Nasza Najwyższa Misja</h2>
            <p className="text-blue-100 text-lg mb-10">
              Zaplanuj swoją wizytę w Podgląd Szablonu już dziś i zainwestuj w przyszłość pełną zdrowia i witalności.
            </p>
            <a href="/preview-medical/contact" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl">
              Zarezerwuj Konsultację
            </a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}