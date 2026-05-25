"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star, Zap, Shield, ChevronRight, ArrowRight } from "lucide-react";
import content from "./content.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] mix-blend-screen opacity-20"
          style={{ backgroundColor: content.theme.primary }} 
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] mix-blend-screen opacity-20"
          style={{ backgroundColor: content.theme.secondary }}
        />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            {content.companyName}
          </div>
          <a href={`tel:${content.companyPhone}`} className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-semibold">
            <Phone size={16} style={{ color: content.theme.primary }} /> Skontaktuj się
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide mb-8"
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: content.theme.primary }} />
            {content.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto font-light"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href={`tel:${content.companyPhone}`} className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2"><Phone size={20} /> Zadzwoń: {content.companyPhone}</span>
            </a>
            <a href="#uslugi" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-white">
              Odkryj możliwości <ChevronRight size={20} className="text-neutral-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID SERVICES */}
      <section id="uslugi" className="relative z-10 py-32 px-6 bg-black/40 border-y border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Rozwiązania bez<br/>kompromisów.</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">Zaprojektowane, by spełniać najwyższe standardy w Twojej branży.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Box 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="md:col-span-2 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-all" 
                style={{ backgroundColor: content.theme.primary }}
              />
              <Zap size={40} className="mb-8" style={{ color: content.theme.primary }} />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">{content.services[0].title}</h3>
              <p className="text-neutral-400 text-lg max-w-md leading-relaxed">{content.services[0].description}</p>
            </motion.div>

            {/* Bento Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-colors"
            >
              <Shield size={40} className="mb-8" style={{ color: content.theme.secondary }} />
              <h3 className="text-2xl font-bold mb-4 text-white">{content.services[1].title}</h3>
              <p className="text-neutral-400 leading-relaxed">{content.services[1].description}</p>
            </motion.div>

            {/* Bento Box 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-colors"
            >
              <Star size={40} className="mb-8 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4 text-white">{content.services[2].title}</h3>
              <p className="text-neutral-400 leading-relaxed">{content.services[2].description}</p>
            </motion.div>

            {/* Bento Box 4 - Large Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-2 p-10 md:p-14 rounded-[2.5rem] bg-white text-black flex flex-col justify-center relative overflow-hidden"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{content.cta.title}</h3>
              <p className="text-neutral-600 text-xl max-w-lg mb-10">{content.cta.subtitle}</p>
              <a href={`tel:${content.companyPhone}`} className="inline-flex items-center gap-2 text-black font-extrabold text-lg hover:opacity-70 transition-opacity">
                Umów bezpłatną wycenę <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tighter text-white">
            {content.companyName}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-neutral-400">
            <span className="flex items-center justify-center gap-2"><MapPin size={16} /> {content.companyAddress}</span>
            <span className="flex items-center justify-center gap-2"><Phone size={16} /> {content.companyPhone}</span>
          </div>
          <div className="text-sm text-neutral-600 font-medium">
            Projekt i wykonanie: <span className="text-neutral-400">Bartosz Web & AI Studio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
