"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Activity, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40, skewY: 2 },
    show: { opacity: 1, y: 0, skewY: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <Navbar slug="bartosz-silownia-krakow" companyName="Bartosz siłownia" dark={true} />

      {/* Header */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <motion.div 
          animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ccff00] rounded-full blur-[200px] opacity-10 translate-x-1/2 -translate-y-1/4 pointer-events-none" 
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
          >
            Wykute w <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-green-600 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">Żelazie</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-zinc-950 relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] -skew-x-6 overflow-hidden border-2 border-[#ccff00]/30 shadow-[0_0_30px_rgba(204,255,0,0.15)] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Właściciel Klubu" 
                className="w-full h-full object-cover scale-110 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </motion.div>
            
            <motion.div 
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVars} className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                Nasza Historia
              </motion.h2>
              <motion.div variants={itemVars} className="w-24 h-2 bg-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.8)]" />
              <motion.p variants={itemVars} className="text-lg text-gray-400 leading-relaxed font-light">
                W samym sercu kraków, <span className="text-white font-bold">Bartosz siłownia</span> narodziło się z jedną, nadrzędną misją: stworzyć przestrzeń, gdzie wymówki przestają istnieć. To sanktuarium dla tych, którzy są oddani, zdeterminowani i nieustępliwi w dążeniu do perfekcji.
              </motion.p>
              <motion.p variants={itemVars} className="text-lg text-gray-400 leading-relaxed font-light">
                Jesteśmy znacznie więcej niż tylko elitarnym klubem fitness w segmencie Fitness i Sport. Jesteśmy wspólnotą wojowników. Dysponując sprzętem najwyższej klasy, strefami treningowymi o bezkompromisowej intensywności oraz kulturą, która inspiruje do wielkości, gwarantujemy spektakularne rezultaty.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-fixed z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Fundamentalne <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-green-500">Zasady</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precyzja", text: "Każde powtórzenie, każda seria – skrupulatnie dopracowane dla maksymalnego wzrostu i optymalnych rezultatów." },
              { icon: Activity, title: "Intensywność", text: "Nie uznajemy kompromisów. Robimy wszystko, co niezbędne, aby osiągnąć sukces i przekroczyć granice." },
              { icon: ShieldCheck, title: "Niezłomność", text: "Kształtowanie niezachwianej siły fizycznej i mentalnej, która przetrwa każdą próbę." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:border-[#ccff00] transition-colors duration-500 flex flex-col items-center text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#ccff00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ccff00] transition-colors duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                  <val.icon size={32} className="text-[#ccff00] group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide">{val.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Bartosz siłownia" />
    </div>
  );
}