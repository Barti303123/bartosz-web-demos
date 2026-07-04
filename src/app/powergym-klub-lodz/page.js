"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Target, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from './content.json';

// Ikony i zdjęcia kafli — dekoracyjne; tytuły pochodzą z content.services.
const SERVICE_ICONS = [Zap, Activity, Target];
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop"
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF2A2A] selection:text-white overflow-hidden">
      <Navbar slug="powergym-klub-lodz" companyName="PowerGym Klub" dark={true} />

      {/* Hero Section: Oversized Typography */}
      <section className="relative w-full h-[100svh] flex flex-col justify-end pb-20 overflow-hidden px-4 md:px-12 z-10">
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <motion.div style={{ y: yParallax, opacity: opacityFade }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
              alt="Trening"
              className="w-full h-full object-cover object-top grayscale-[50%] opacity-40 mix-blend-luminosity"
            />
            {/* Hard gradient to blend with absolute black */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#FF2A2A]"></span>
            <span className="text-[#FF2A2A] font-bold tracking-[0.2em] uppercase text-sm">siłownia · Łódź</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[12vw] sm:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF2A2A]"
          >
            {content.hero.title}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mt-12 border-t border-white/10 pt-8 max-w-7xl">
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-lg leading-relaxed">
              {content.hero.subtitle}
            </p>

            <a href="/powergym-klub-lodz/kontakt" className="group flex items-center gap-4 bg-[#FF2A2A] text-white px-10 py-5 text-sm uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors duration-300 shrink-0">
              <span>{content.hero.cta}</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* High-Octane Marquee */}
      <section className="py-6 border-y border-white/5 bg-[#0A0A0A] relative overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex items-center gap-12 text-[#FF2A2A] font-black text-6xl uppercase tracking-tighter opacity-80"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FF2A2A' }}>SIŁA</span>
              <span className="w-4 h-4 bg-white rounded-full"></span>
              <span>DETERMINACJA</span>
              <span className="w-4 h-4 bg-white rounded-full"></span>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FF2A2A' }}>DYSCYPLINA</span>
              <span className="w-4 h-4 bg-white rounded-full"></span>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* Massive Services Grid */}
      <section className="py-32 relative px-4 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">Nasza <br/><span className="text-[#FF2A2A]">Oferta</span>.</h2>
            </div>
            <p className="text-gray-400 font-medium max-w-md text-lg">Zapewniamy warunki i wsparcie, dzięki którym osiągniesz swój cel — niezależnie od poziomu.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.15 }}
                  className="group relative h-[500px] overflow-hidden bg-[#0A0A0A] cursor-pointer"
                >
                  <img
                    src={SERVICE_IMAGES[idx % SERVICE_IMAGES.length]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform transition-transform duration-500">
                    <div className="w-14 h-14 bg-[#FF2A2A] rounded-full flex items-center justify-center mb-6 text-white group-hover:-translate-y-2 transition-transform duration-500">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-[#FF2A2A] transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-medium text-sm">{service.description}</p>
                    <div className="h-[2px] w-0 bg-[#FF2A2A] group-hover:w-full transition-all duration-500 mt-4"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 relative overflow-hidden bg-[#050505]">
        <div className="w-full bg-[#FF2A2A] py-24 px-4 md:px-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6"
          >
            {content.contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-black/80 font-medium max-w-xl mb-10 text-lg"
          >
            {content.contact.cta}
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/powergym-klub-lodz/kontakt"
            className="group flex items-center gap-4 bg-black text-white px-12 py-6 text-xl uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors shadow-2xl"
          >
            <span>{content.hero.cta}</span>
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </section>

      <Footer companyName="PowerGym Klub" />
    </div>
  );
}
