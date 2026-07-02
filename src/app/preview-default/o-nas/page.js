"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Target, Zap, ChevronRight, Hexagon, Code, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DefaultAbout() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const values = [
    { icon: Code, title: "Perfekcja Technologiczna", desc: "Nie idziemy na kompromisy w kwestii jakości kodu i architektury systemu." },
    { icon: Target, title: "Orientacja na Cel", desc: "Nasze działania są zawsze zbieżne z celami biznesowymi naszych klientów." },
    { icon: Globe2, title: "Skala Globalna", desc: "Tworzymy rozwiązania z myślą o użytkownikach na całym świecie, bez granic." },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <Navbar slug="preview-default" companyName="Podgląd Szablonu" dark={true} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
              Pionierzy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Cyfrowej Przyszłości</span>
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              Jesteśmy zespołem pasjonatów technologii, inżynierów i strategów z Warszawa. Naszym celem jest budowanie oprogramowania, które zmienia zasady gry w cyfrowym świecie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl transform -rotate-3" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1500&auto=format&fit=crop" 
                  alt="Nasz zespół" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technologia to tylko narzędzie. <br/>Liczy się wizja.</h2>
              <div className="w-16 h-1 bg-indigo-500 rounded-full mb-8" />
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Wierzymy, że najlepsze produkty cyfrowe powstają na styku głębokiego zrozumienia biznesu i perfekcyjnego wykonania technicznego. Nasze podejście łączy zwinność startupu z dojrzałością korporacyjnych standardów bezpieczeństwa.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Współpracujemy z wizjonerami, którzy nie boją się kwestionować status quo. Dostarczamy im infrastrukturę i narzędzia niezbędne do rzucenia wyzwania liderom rynku.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Innowacja jako standard operacyjny",
                  "Architektura zorientowana na wydajność",
                  "Etyka i przejrzystość w relacjach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <Hexagon className="text-indigo-400 fill-indigo-400/20" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative bg-[#030712]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-fuchsia-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nasze DNA</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Wartości, które napędzają każdą linijkę naszego kodu i każdą decyzję biznesową.</p>
          </div>
          
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 p-10 rounded-3xl hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <val.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team / Join Us CTA */}
      <section className="py-20 border-t border-slate-800/60 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Szukasz partnera technologicznego?</h2>
          <p className="text-xl text-slate-400 mb-10 font-light">Skontaktuj się z naszymi inżynierami i sprawdź, jak możemy przyspieszyć Twój rozwój.</p>
          <a href="/preview-default/kontakt" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-xl shadow-white/5">
            Skontaktuj się z Zespołem <ChevronRight size={20} />
          </a>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </main>
  );
}
