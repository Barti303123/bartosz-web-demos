"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Shield, FileText, Award, Landmark, Phone, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "./content.json";

// Ikony obszarów praktyki — dekoracyjne, cyklowane po indeksie.
const SERVICE_ICONS = [Landmark, Shield, Scale, FileText, Award, BookOpen];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-[#F3F4F6] font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar slug="preview-law" companyName="Podgląd Szablonu" dark={true} />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img
              src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2670&auto=format&fit=crop"
              alt="Symbol prawa"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/80 to-[#060D1A]/30" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <span className="w-16 h-[1px] bg-[#C5A059]"></span>
              <span className="text-xs tracking-[0.3em] text-[#C5A059] uppercase font-semibold">Testowa Branża · Warszawa</span>
              <span className="w-16 h-[1px] bg-[#C5A059]"></span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.1] mb-8 tracking-tight">
              {content.hero.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-12">
              {content.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a
                href="/preview-law/kontakt"
                className="group relative px-10 py-5 bg-[#C5A059] text-[#060D1A] text-sm uppercase tracking-widest font-bold overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {content.hero.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="tel:+48 123 456 789"
                className="group px-10 py-5 border border-white/20 text-white text-sm uppercase tracking-widest font-bold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors flex items-center justify-center gap-3"
              >
                <Phone size={16} /> +48 123 456 789
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Obszary praktyki (usługi) */}
      <section className="py-32 bg-[#060D1A] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 pb-10 border-b border-white/10"
          >
            <div className="max-w-xl">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-4">Nasze Kompetencje</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Zakres <br/>Usług</h3>
            </div>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Zapewniamy rzetelne wsparcie prawne i indywidualne podejście do każdej sprawy naszych klientów.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 relative">
            {content.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="p-10 group relative border-b border-r border-white/10 hover:bg-[#C5A059]/5 transition-colors duration-500"
                >
                  <Icon strokeWidth={1} className="w-12 h-12 text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-2xl font-serif text-white mb-4 pr-4">{service.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#0A1128]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at center, #C5A059 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="w-12 h-12 border border-[#C5A059] flex items-center justify-center rotate-45 mb-10">
            <div className="w-6 h-6 bg-[#C5A059]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 tracking-tight">{content.contact.heading}</h2>
          <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl">
            {content.contact.cta}
          </p>

          <a href="/preview-law/kontakt" className="group relative px-12 py-6 bg-white text-[#060D1A] text-sm uppercase tracking-widest font-bold overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#C5A059] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
              {content.hero.cta} <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
