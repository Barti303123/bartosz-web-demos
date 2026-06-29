"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Dumbbell, Zap, Flame, Trophy } from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, skewX: -10 },
    show: { opacity: 1, y: 0, skewX: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <Navbar slug="bartosz-silownia-krakow" companyName="Bartosz siłownia" dark={true} />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Wizytówka siłowni" 
            className="w-full h-[120%] object-cover opacity-40 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <motion.div 
            animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ccff00] rounded-full blur-[150px] opacity-20 pointer-events-none" 
          />
        </div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-16"
        >
          <motion.div variants={itemVars} className="mb-4">
            <span className="inline-block py-1 px-3 border border-[#ccff00] text-[#ccff00] uppercase tracking-widest text-xs font-bold -skew-x-12 shadow-[0_0_10px_rgba(204,255,0,0.5)] bg-black/50 backdrop-blur-sm">
              Odkryj Swój Niezwykły Potencjał
            </span>
          </motion.div>
          <motion.h1 variants={itemVars} className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-none mb-6">
            Przekrocz <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-lime-600 drop-shadow-[0_0_20px_rgba(204,255,0,0.6)]">
              Swoje Granice
            </span>
          </motion.h1>
          <motion.p variants={itemVars} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light drop-shadow-lg">
            Dołącz do Bartosz siłownia w kraków i odmień swoje ciało dzięki elitarnym trenerom oraz najnowocześniejszemu sprzętowi.
          </motion.p>
          <motion.div variants={itemVars}>
            <a href="/bartosz-silownia-krakow/contact" className="inline-flex items-center gap-2 bg-[#ccff00] text-black px-8 py-4 font-bold text-lg uppercase -skew-x-12 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.6)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] relative group overflow-hidden">
              <span className="skew-x-12">Rozpocznij Swoją Przemianę</span>
              <ChevronRight className="skew-x-12 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats / Features Marquee */}
      <section className="py-12 border-y border-white/5 bg-zinc-950 relative overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-16 text-[#ccff00] font-black text-4xl md:text-6xl uppercase tracking-tighter opacity-40"
        >
          <span>Siła</span> <Zap size={48} className="inline" />
          <span>Wytrzymałość</span> <Flame size={48} className="inline" />
          <span>Moc</span> <Trophy size={48} className="inline" />
          <span>Mobilność</span> <Dumbbell size={48} className="inline" />
          <span>Siła</span> <Zap size={48} className="inline" />
          <span>Wytrzymałość</span> <Flame size={48} className="inline" />
          <span>Moc</span> <Trophy size={48} className="inline" />
          <span>Mobilność</span> <Dumbbell size={48} className="inline" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -left-32 top-1/3 w-64 h-64 bg-lime-500 rounded-full blur-[150px] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              Dlaczego Wybrać <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-lime-500">Bartosz siłownia</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Dumbbell, title: "Elitarny Sprzęt", desc: "Korzystaj z najlepszych narzędzi, by perfekcyjnie ukształtować swoją sylwetkę." },
              { icon: Zap, title: "Trening Wysokiej Intensywności", desc: "Zwiększ tętno i spalaj tkankę tłuszczową z niespotykaną efektywnością." },
              { icon: Trophy, title: "Mentoring Ekspertów", desc: "Czerp wiedzę od czołowych profesjonalistów fitness w kraków." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, skewX: 5 }}
                whileInView={{ opacity: 1, y: 0, skewX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feat.icon size={48} className="text-[#ccff00] mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold uppercase mb-4">{feat.title}</h3>
                <p className="text-gray-400">{feat.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ccff00] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-zinc-950 overflow-hidden border-t border-zinc-900">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#ccff00]/5 -skew-x-12 translate-x-20 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Gotowy, by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Zdominować?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Odwiedź nas pod adresem ul. Główna 1, kraków lub skontaktuj się telefonicznie pod numerem +48 500 123 456, aby odebrać swój ekskluzywny karnet próbny już dziś.
            </p>
            <a href="/bartosz-silownia-krakow/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-[#ccff00] text-[#ccff00] px-8 py-4 font-bold text-lg uppercase -skew-x-12 hover:bg-[#ccff00] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.8)] group relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-[#ccff00] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="skew-x-12 relative z-10">Dołącz do Rewolucji</span>
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto -skew-x-6 overflow-hidden border-4 border-zinc-800 shadow-[0_0_50px_rgba(204,255,0,0.15)] group">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" alt="Motywacja do Treningu" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#ccff00] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Bartosz siłownia" />
    </div>
  );
}