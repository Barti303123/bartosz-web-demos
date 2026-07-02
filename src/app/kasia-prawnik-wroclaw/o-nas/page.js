"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Award, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const team = [
    { name: "dr hab. Janusz Kowalski", role: "Partner Zarządzający / M&A", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
    { name: "Anna Nowak, LL.M.", role: "Partner / Prawo IT", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
    { name: "Michał Wiśniewski", role: "Senior Associate / Spory", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-[#060D1A] text-[#F3F4F6] font-sans selection:bg-[#C5A059] selection:text-white" ref={containerRef}>
      <Navbar slug="kasia-prawnik-wroclaw" companyName="kasia prawnik" dark={true} />

      {/* Elegant Header */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#C5A059] mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-8">
              Autorytet Budowany <br/>
              <span className="italic text-[#C5A059]">Przez Dekady.</span>
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-lg">
              Sukces w sprawach najwyższej wagi nie jest dziełem przypadku. Wynika z dogłębnej analizy, precyzyjnej strategii i bezwzględnej dyskrecji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Numbers / Stock Market Style */}
      <section className="py-16 border-y border-white/10 bg-[#0A1128] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10">
          {[
            { label: "Wygrane Sprawy", value: "98%" },
            { label: "Lata Praktyki", value: "25+" },
            { label: "Transakcje M&A", value: "€500M+" },
            { label: "Poufność", value: "100%" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-[#060D1A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2">
            <div className="relative aspect-[3/4] w-full border border-white/10 p-4">
              <div className="absolute inset-0 border border-[#C5A059]/30 translate-x-4 -translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop" 
                alt="Law Library" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">Ekspertyza, która zmienia zasady gry.</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mb-8"></div>
            <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
              Nasza kancelaria to miejsce, gdzie tradycja prawnicza spotyka się z dynamiką nowoczesnego biznesu. Nie piszemy jedynie umów i pism procesowych – tworzymy tarcze prawne, za którymi nasi klienci mogą bezpiecznie rozwijać swoje imperia.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-10">
              W kasia prawnik każdy detal ma znaczenie. Nasz zespół składa się wyłącznie z prawników posiadających rozległe doświadczenie w obsłudze najtrudniejszych transakcji na rynku.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Shield className="text-[#C5A059]" size={24} />
                <span className="text-sm uppercase tracking-widest text-white font-bold">Ochrona</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-[#C5A059]" size={24} />
                <span className="text-sm uppercase tracking-widest text-white font-bold">Prestiż</span>
              </div>
              <div className="flex items-center gap-3">
                <Scale className="text-[#C5A059]" size={24} />
                <span className="text-sm uppercase tracking-widest text-white font-bold">Równowaga</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Partners */}
      <section className="py-32 bg-[#0A1128] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Partnerzy Kancelarii</h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto">Filary naszej wiedzy i gwarancja najwyższego standardu obsługi prawnej.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden border border-white/10">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] to-transparent opacity-60"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
                  <p className="text-[#C5A059] text-sm uppercase tracking-widest font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="kasia prawnik" />
    </div>
  );
}
