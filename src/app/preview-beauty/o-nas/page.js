"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Award, HeartHandshake, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

// Ikony sekcji atutów — dekoracyjne, cyklowane po indeksie.
const WHY_ICONS = [Leaf, Award, HeartHandshake, Sparkles];

export default function About() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#3A332C] font-sans selection:bg-[#C1A88B] selection:text-white overflow-hidden">
      <Navbar slug="preview-beauty" companyName="Podgląd Szablonu" dark={false} />

      {/* Header with Parallax */}
      <section className="relative pt-40 pb-32 px-4 lg:px-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[60vh] bg-[#F6F3ED] rounded-bl-[100px] -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="w-full lg:w-1/2">
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-[#C1A88B]"></span>
              <span className="uppercase tracking-[0.2em] text-[#C1A88B] text-xs font-semibold">Nasza Filozofia</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif leading-tight mb-8 text-[#3A332C]">
              {content.about.heading}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-gray-500 font-light leading-relaxed mb-8">
              {content.about.body}
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="w-full lg:w-1/2 relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
            <motion.img style={{ y: yImage }} src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop" alt="Salon" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm uppercase tracking-widest mb-1">Lokalnie</p>
              <p className="text-3xl font-serif italic">Warszawa</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Atuty (why_us) */}
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-6 text-[#3A332C]">Dlaczego my</h2>
            <div className="w-16 h-[1px] bg-[#C1A88B] mx-auto"></div>
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-12 top-10 bottom-10 w-[1px] bg-gray-200 hidden md:block z-0"></div>

            {content.why_us.map((reason, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn} className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-24 h-24 shrink-0 rounded-full bg-[#F6F3ED] border border-[#E3D4C4] flex items-center justify-center text-[#C1A88B] mx-auto md:mx-0 shadow-sm">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="pt-4 text-center md:text-left">
                    <h3 className="text-2xl font-serif mb-3 text-[#3A332C]">{reason.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed max-w-lg">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pełen zakres usług */}
      <section className="py-32 px-4 lg:px-12 bg-[#FBF9F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#3A332C]">Zakres <span className="italic text-[#C1A88B]">usług</span></h2>
            <p className="text-gray-500 font-light">Zabiegi dopasowane do Twoich potrzeb.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-3xl p-8 border border-[#EFE9E1] hover:border-[#C1A88B]/50 transition-colors shadow-sm">
                <div className="text-[#C1A88B] font-serif text-xl mb-3">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-2xl font-serif mb-3 text-[#3A332C]">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
