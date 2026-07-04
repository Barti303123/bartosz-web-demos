"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF2A2A] selection:text-white" ref={containerRef}>
      <Navbar slug="preview-fitness" companyName="Podgląd Szablonu" dark={true} />

      {/* Extreme Header */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between relative z-10 gap-8">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="w-12 h-[2px] bg-[#FF2A2A] block mb-6"></span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              {content.about.heading}
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="max-w-sm">
            <p className="text-gray-400 font-medium text-lg leading-relaxed border-l-2 border-[#FF2A2A] pl-6">
              {content.about.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Massive Image Block */}
      <section className="py-10 px-4 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop"
            alt="Motywacja"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-[#FF2A2A] mix-blend-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>

          <div className="absolute bottom-10 left-10 text-[#FF2A2A] font-black text-6xl md:text-9xl uppercase tracking-tighter opacity-50">
            0% B.S.
          </div>
        </div>
      </section>

      {/* Dlaczego my (why_us) */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">Dlaczego <span className="text-[#FF2A2A]">my</span></h2>
            <p className="text-xl text-gray-400 font-medium">To, co wyróżnia nasze podejście i sprawia, że osiągniesz cel.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.why_us.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="border-t-2 border-[#FF2A2A] pt-6"
              >
                <div className="text-[#FF2A2A] font-black text-5xl mb-4 tracking-tighter">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-3xl font-black uppercase text-white mb-3 tracking-tight">{reason.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
