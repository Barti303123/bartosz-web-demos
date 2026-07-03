"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Wrench, ArrowRight, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

// Ikony kart usług — dekoracyjne, cyklowane po indeksie.
const SERVICE_ICONS = [Award, Wrench, Users, Clock];

/* ─── Warianty animacji ──────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ─── Komponent główny ───────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans">
      <Navbar slug="autosprint-serwis-zdunska-wola" companyName="AutoSprint Serwis" dark={true} />

      {/* Dekoracyjne orby tła */}
      <div className="fixed top-1/4 right-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-[-10%] w-[40%] h-[40%] bg-zinc-800/40 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ════════════════ HEADER ════════════════ */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">O Nas · Zduńska Wola</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500">
              {content.about.heading}
            </h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-20 h-[3px] bg-red-600 mb-8 origin-left"
            />

            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Poznaj nasz warsztat, ludzi i podejście do każdego zlecenia — mechanik samochodowy w Zduńska Wola i okolicach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ HISTORIA + ATUTY ════════════════ */}
      <section className="py-20 z-10 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Zdjęcie z floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-600/20 translate-x-4 translate-y-4 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80"
                alt="Nasz warsztat"
                className="relative rounded-2xl z-10 w-full h-[500px] object-cover border border-zinc-800"
              />
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-zinc-900 border border-zinc-800 px-6 py-5 rounded-xl shadow-2xl shadow-red-900/20 z-20 backdrop-blur-md"
              >
                <div className="text-red-500 font-black uppercase tracking-wider text-sm mb-1">Lokalnie</div>
                <div className="text-zinc-300 font-semibold">Zduńska Wola i okolice</div>
              </motion.div>
            </motion.div>

            {/* Tekst + atuty */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">Nasza Historia</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">NASZE PODEJŚCIE</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                {content.about.body}
              </p>

              {/* Atuty 2×2 (why_us) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.why_us.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 rounded-xl p-5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-red-600/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="text-zinc-100 text-base font-bold mb-1 group-hover:text-red-400 transition-colors">{reason.title}</div>
                    <div className="text-zinc-600 text-xs leading-snug">{reason.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ USŁUGI ════════════════ */}
      <section className="py-32 relative z-10 px-6 bg-zinc-900/50 border-t border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">Co oferujemy</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4">ZAKRES USŁUG</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {content.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  variants={itemVariant}
                  whileHover={{ y: -10 }}
                  className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute -bottom-4 -right-2 text-[8rem] font-black text-zinc-800/40 leading-none select-none group-hover:text-red-900/20 transition-colors duration-500 pointer-events-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-transparent group-hover:bg-red-600 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] group-hover:bg-red-500/10 transition-colors" />
                  <Icon className="w-12 h-12 text-red-500 mb-6 relative z-10" />
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed relative z-10">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ CTA STRIP ════════════════ */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-10 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-2">{content.contact.heading}</h3>
              <p className="text-zinc-400">{content.contact.cta}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 relative z-10">
              <a
                href="/autosprint-serwis-zdunska-wola/kontakt"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/30"
              >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+48 555 222 333"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
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
