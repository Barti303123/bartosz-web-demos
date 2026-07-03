"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layers, Zap, PenTool, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

// Ikony sekcji usług — dekoracyjne, cyklowane po indeksie.
const SERVICE_ICONS = [PenTool, Layers, CheckCircle2, Zap];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const gridBackground = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center'
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] font-sans selection:bg-[#B38B59] selection:text-white" ref={containerRef}>
      <Navbar slug="preview-construction" companyName="Podgląd Szablonu" dark={true} />

      {/* Header */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden" style={gridBackground}>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex justify-center items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#B38B59]"></span>
            <span className="uppercase tracking-[0.2em] text-[#B38B59] text-xs font-semibold">O Nas</span>
            <span className="w-8 h-[1px] bg-[#B38B59]"></span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-8 text-white">
            {content.about.heading}
          </motion.h1>
        </div>
      </section>

      {/* Image Block with Reasons */}
      <section className="pb-32 px-4 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-[600px] bg-[#1a1a1a] p-4">
            <div className="w-full h-full relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671&auto=format&fit=crop"
                alt="Wizualizacja"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 border-[1px] border-white/20 m-6"></div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center px-4 lg:px-10">
            <motion.h3 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-light uppercase tracking-tight text-white mb-6">Działamy lokalnie: Warszawa i okolice</motion.h3>
            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-400 font-light leading-relaxed mb-10">
              {content.about.body}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-8">
              {content.why_us.map((reason, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + idx * 0.1 }}>
                  <p className="text-lg font-bold text-[#B38B59] mb-2 uppercase tracking-tight">{reason.title}</p>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light uppercase tracking-tight text-white mb-4">Zakres <span className="font-bold text-[#B38B59]">Usług</span></h2>
            <div className="w-16 h-[1px] bg-[#B38B59] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-white/5 hidden md:block"></div>
                  <div className="pl-0 md:pl-8">
                    <Icon size={36} className="text-[#B38B59] mb-6" strokeWidth={1} />
                    <h3 className="text-xl font-bold uppercase text-white mb-4 tracking-tight">{String(idx + 1).padStart(2, '0')}. {service.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
