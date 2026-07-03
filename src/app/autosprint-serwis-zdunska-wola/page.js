"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Wrench, Shield, Zap, ArrowRight, Phone, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from './content.json';

// Ikony usług — dekoracyjne, cyklowane po indeksie (treść z content.json).
const SERVICE_ICONS = [Settings, Wrench, Shield, Zap];

/* ─── Warianty animacji ──────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ─── Komponent główny ───────────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans selection:bg-red-600 selection:text-white"
      ref={containerRef}
    >
      <Navbar slug="autosprint-serwis-zdunska-wola" companyName="AutoSprint Serwis" dark={true} />

      {/* Dekoracyjne orby tła */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative h-screen flex items-center overflow-hidden z-10 pt-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&q=80"
            alt="Serwis samochodowy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
                mechanik samochodowy · Zduńska Wola
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500"
            >
              {content.hero.title}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-20 h-[3px] bg-red-600 mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed"
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/autosprint-serwis-zdunska-wola/kontakt"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/40"
              >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/autosprint-serwis-zdunska-wola/o-nas"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800 backdrop-blur-md text-white font-bold rounded-xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
              >
                Poznaj Naszą Ekspertyzę
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Przewiń</span>
        </motion.div>
      </section>

      {/* ════════════════ DLACZEGO MY (atuty) ════════════════ */}
      <section className="relative z-10 border-t border-b border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/60"
          >
            {content.why_us.map((reason, i) => (
              <div
                key={i}
                className="bg-zinc-950 md:bg-zinc-900/40 flex flex-col px-6 py-12 group hover:bg-zinc-900/80 transition-colors duration-300"
              >
                <div className="text-red-500 font-black text-lg mb-3">{String(i + 1).padStart(2, '0')}</div>
                <div className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{reason.title}</div>
                <div className="text-zinc-500 text-sm leading-relaxed">{reason.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ USŁUGI ════════════════ */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">Co oferujemy</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">ZAKRES<br />USŁUG</h2>
            </div>
            <a
              href="/autosprint-serwis-zdunska-wola/kontakt"
              className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-medium shrink-0"
            >
              Umów wizytę
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {content.services.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  whileHover={{ y: -8 }}
                  className="group relative bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-500 cursor-default"
                >
                  <div className="absolute top-3 right-4 text-[7rem] font-black text-zinc-800/50 leading-none select-none group-hover:text-red-900/20 transition-colors duration-500 pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-transparent group-hover:bg-red-600 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-zinc-800 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                    <p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ O NAS (statement) ════════════════ */}
      <section className="py-24 relative z-10 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">O nas</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-snug">{content.about.heading}</h2>
            <div className="w-16 h-[3px] bg-red-600 mx-auto mb-8" />
            <p className="text-zinc-400 text-lg leading-relaxed">{content.about.body}</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="relative z-10 overflow-hidden">
        <div className="relative min-h-[480px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
              alt="Umów wizytę"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 text-center max-w-4xl mx-auto px-6 py-20"
          >
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Zrób kolejny krok</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{content.contact.heading}</h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">{content.contact.cta}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/autosprint-serwis-zdunska-wola/kontakt"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-red-900/50"
              >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+48 555 222 333"
                className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 text-white font-bold text-lg rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                +48 555 222 333
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="AutoSprint Serwis" />
    </div>
  );
}
