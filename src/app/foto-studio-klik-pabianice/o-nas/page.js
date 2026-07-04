"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, ChevronRight, Hexagon, Code, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "../content.json";

// Ikony kart atutów — dekoracyjne, cyklowane po indeksie.
const WHY_ICONS = [Code, Target, Globe2, Users];

export default function DefaultAbout() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <Navbar slug="foto-studio-klik-pabianice" companyName="Foto Studio Klik" dark={true} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
              {content.about.heading}
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              {content.about.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zakres usług (obraz + lista) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl transform -rotate-3" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop"
                  alt="Zdjęcie"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Zakres usług</h2>
              <div className="w-16 h-1 bg-indigo-500 rounded-full mb-8" />

              <ul className="space-y-6">
                {content.services.map((service, i) => (
                  <li key={i} className="flex gap-4">
                    <Hexagon className="text-indigo-400 fill-indigo-400/20 shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dlaczego my (why_us) */}
      <section className="py-32 relative bg-[#030712]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-fuchsia-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Dlaczego my</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">To, co wyróżnia naszą pracę i podejście do klientów.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {content.why_us.map((reason, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-10 rounded-3xl hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800/60 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{content.contact.heading}</h2>
          <p className="text-xl text-slate-400 mb-10 font-light">{content.contact.cta}</p>
          <a href="/foto-studio-klik-pabianice/kontakt" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-xl shadow-white/5">
            {content.hero.cta} <ChevronRight size={20} />
          </a>
        </div>
      </section>

      <Footer companyName="Foto Studio Klik" />
    </main>
  );
}
