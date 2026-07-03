"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Ruler, Home as HomeIcon, Box } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from './content.json';

// Ikony sekcji usług — dekoracyjne, cyklowane po indeksie (treść pochodzi z content.json).
const SERVICE_ICONS = [HomeIcon, Ruler, Box];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Grid / Blueprint style lines
  const gridBackground = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center'
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] font-sans selection:bg-[#B38B59] selection:text-white overflow-hidden">
      <Navbar slug="janusz-pol-hydraulik-sieradz" companyName="Janusz-Pol Hydraulik" dark={true} />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-[#111111]" style={gridBackground}>
        {/* Abstract Blueprint Grid Border */}
        <div className="absolute inset-0 border-[1px] border-white/5 m-4 md:m-8 pointer-events-none z-20">
          <div className="absolute top-0 left-10 w-[1px] h-full bg-white/10"></div>
          <div className="absolute top-0 right-10 w-[1px] h-full bg-white/10"></div>
          <div className="absolute top-20 left-0 w-full h-[1px] bg-white/10"></div>
        </div>

        <div className="absolute right-0 top-0 w-full lg:w-[65%] h-[70vh] lg:h-screen z-0">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
              alt="Realizacja"
              className="w-full h-full object-cover grayscale-[30%] opacity-40 lg:opacity-70"
            />
            {/* Linear overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-8 md:px-20 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#B38B59]"></span>
              <span className="uppercase tracking-[0.2em] text-[#B38B59] text-xs font-semibold">hydraulik · Sieradz</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-light leading-[1.1] mb-8 text-white uppercase tracking-tight">
              {content.hero.title}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light mb-12 leading-relaxed max-w-lg border-l border-white/10 pl-6">
              {content.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-6">
              <a href="/janusz-pol-hydraulik-sieradz/kontakt" className="group flex items-center gap-4 bg-[#B38B59] text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[#a07c50] transition-colors">
                <span>{content.hero.cta}</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/janusz-pol-hydraulik-sieradz/o-nas" className="group flex items-center gap-4 text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold border border-white/20 hover:border-[#B38B59] hover:text-[#B38B59] transition-colors">
                <span>Poznaj Nas</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-8 md:px-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-20 flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-xl">
              <span className="uppercase tracking-[0.2em] text-white/30 text-xs font-semibold mb-4 block">01 // Zakres Usług</span>
              <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tight">Co dla <span className="text-[#B38B59] font-bold">Ciebie zrobimy</span></h2>
            </div>
            <p className="text-gray-400 font-light max-w-sm mt-6 md:mt-0">Każde zlecenie traktujemy jak wizytówkę naszego rzemiosła. Nie uznajemy kompromisów w jakości.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {content.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.15 }}
                  className="group p-10 md:p-14 border-b border-r border-white/10 hover:bg-[#111111] transition-colors relative"
                >
                  <div className="text-[#B38B59]/20 font-bold text-6xl absolute top-6 right-8 group-hover:text-[#B38B59]/40 transition-colors">{String(idx + 1).padStart(2, '0')}</div>
                  <Icon className="w-10 h-10 text-white mb-10 opacity-50 group-hover:opacity-100 group-hover:text-[#B38B59] transition-colors" strokeWidth={1} />
                  <h3 className="text-xl font-bold uppercase mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy / Statement Section */}
      <section className="py-32 bg-[#111111] relative overflow-hidden" style={gridBackground}>
        <div className="container mx-auto px-8 md:px-20 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp}>
              <span className="w-[1px] h-20 bg-[#B38B59] mx-auto block mb-8"></span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-light text-white leading-snug mb-10 tracking-tight">
              {content.about.body}
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center">
              <p className="uppercase tracking-[0.2em] text-white/50 text-xs font-semibold mb-2">Zespół</p>
              <p className="font-bold text-white tracking-widest uppercase text-sm">Janusz-Pol Hydraulik</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#B38B59]">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-[#111111]">
            {content.contact.heading}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[#111111]/80 font-medium mb-10 max-w-xl mx-auto">
            {content.contact.cta}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            href="/janusz-pol-hydraulik-sieradz/kontakt"
            className="inline-flex items-center gap-4 bg-[#111111] text-white px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] transition-colors"
          >
            <span>Przejdź do formularza</span>
            <ChevronRight size={16} />
          </motion.a>
        </div>
      </section>

      <Footer companyName="Janusz-Pol Hydraulik" />
    </div>
  );
}
