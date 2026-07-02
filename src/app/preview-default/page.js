"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Zap, Cpu, ArrowRight, Layers, Layout, Globe, Command } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DefaultHome() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden" ref={containerRef}>
      <Navbar slug="preview-default" companyName="Podgląd Szablonu" dark={true} />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-12">
        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px]" 
          />
        </div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8">
              <SparkleIcon />
              <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">Witaj w Przyszłości</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-8 leading-[1.1]">
              Tworzymy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
                Innowacje.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              W Podgląd Szablonu przekształcamy złożone wyzwania w eleganckie, skalowalne rozwiązania, napędzając cyfrową transformację dla liderów branży.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="/preview-default/kontakt"
                className="group relative px-8 py-4 bg-white text-slate-950 rounded-xl font-bold transition-all shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">Rozpocznij Projekt <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </a>
              <a 
                href="/preview-default/o-nas"
                className="px-8 py-4 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Dowiedz się więcej
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-32 relative z-10 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Zbudowane na Przewadze</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Nasza technologia wyprzedza konkurencję, zapewniając fundament, na którym możesz oprzeć globalny sukces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Bento Item 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/60 p-8 relative overflow-hidden group hover:bg-slate-800/40 transition-colors backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors" />
              <div className="h-14 w-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <Zap size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Niesamowita Szybkość</h3>
              <p className="text-slate-400 text-lg leading-relaxed">Optymalizujemy każdy mikrosekundę. Nasza architektura została stworzona od podstaw, aby dostarczać dane w ułamku sekundy, bez żadnych kompromisów dotyczących jakości.</p>
              
              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 left-0 h-40 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" className="absolute -bottom-20 -right-10 w-3/4 opacity-20 mix-blend-screen rounded-tl-3xl filter blur-[2px] group-hover:blur-none transition-all duration-700" alt="Tech Abstract" />
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800/60 p-8 relative overflow-hidden hover:bg-slate-800/40 transition-colors backdrop-blur-xl group"
            >
              <div className="h-12 w-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4 border border-fuchsia-500/20">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sztuczna Inteligencja</h3>
              <p className="text-slate-400">Integracja najnowszych modeli AI pozwala automatyzować żmudne procesy, uwalniając pełen potencjał Twojego zespołu w Warszawa.</p>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-3xl bg-slate-900/40 border border-slate-800/60 p-8 relative overflow-hidden hover:bg-slate-800/40 transition-colors backdrop-blur-xl"
            >
               <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Globalny Zasięg</h3>
              <p className="text-slate-400">Gotowość do obsługi rynków na całym świecie od pierwszego dnia.</p>
            </motion.div>

            {/* Bento Item 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-3xl bg-slate-900/40 border border-slate-800/60 p-8 relative overflow-hidden hover:bg-slate-800/40 transition-colors backdrop-blur-xl bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"
            >
              <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 border border-white/20 backdrop-blur-sm">
                  <Command size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pełna Kontrola</h3>
                <p className="text-slate-300">Zarządzaj każdym aspektem działalności w jednym miejscu.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-20 rounded-[3rem] border border-indigo-500/20 bg-slate-900/50 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Gotowy na Przeskok?</h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Dołącz do firm, które wyznaczają trendy na rynku. Zarezerwuj darmową sesję strategiczną z zespołem Podgląd Szablonu.
            </p>
            <a 
              href="/preview-default/kontakt"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] hover:-translate-y-1"
            >
              Rozpocznij z nami <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </main>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400">
      <path d="M10 2L12 12L22 14L12 16L10 26L8 16L-2 14L8 12L10 2Z" fill="currentColor"/>
    </svg>
  );
}
