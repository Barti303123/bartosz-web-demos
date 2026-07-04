"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Award, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "../content.json";

// Ikony pozycji usług — dekoracyjne, cyklowane po indeksie.
const SERVICE_ICONS = [Scale, Shield, Award];

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

  return (
    <div className="min-h-screen bg-[#060D1A] text-[#F3F4F6] font-sans selection:bg-[#C5A059] selection:text-white" ref={containerRef}>
      <Navbar slug="kancelaria-adwokacka-lex-sieradz" companyName="Kancelaria Adwokacka Lex" dark={true} />

      {/* Elegant Header */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#C5A059] mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-8">
              {content.about.heading}
            </h1>
            <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-lg">
              {content.about.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Atuty (why_us) */}
      <section className="py-16 border-y border-white/10 bg-[#0A1128] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.why_us.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-2xl font-serif text-white mb-3">{reason.title}</div>
              <div className="text-sm text-gray-400 font-light leading-relaxed">{reason.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Zakres usług (obraz + lista) */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-[#060D1A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2">
            <div className="relative aspect-[3/4] w-full border border-white/10 p-4">
              <div className="absolute inset-0 border border-[#C5A059]/30 translate-x-4 -translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop"
                alt="Biblioteka prawnicza"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">Zakres usług</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mb-10"></div>

            <ul className="space-y-8">
              {content.services.map((service, idx) => {
                const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
                return (
                  <li key={idx} className="flex gap-5">
                    <Icon strokeWidth={1} className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0A1128] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{content.contact.heading}</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto mb-12 text-lg">{content.contact.cta}</p>
            <a href="/kancelaria-adwokacka-lex-sieradz/kontakt" className="group relative inline-flex px-12 py-6 bg-white text-[#060D1A] text-sm uppercase tracking-widest font-bold overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#C5A059] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
                {content.hero.cta} <ArrowRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Kancelaria Adwokacka Lex" />
    </div>
  );
}
