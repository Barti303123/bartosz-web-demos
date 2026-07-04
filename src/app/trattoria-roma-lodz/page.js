"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Utensils, Star, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from './content.json';

// Ikony sekcji atutów — dekoracyjne, cyklowane po indeksie.
const WHY_ICONS = [Utensils, Star, Clock];

// Zdjęcia dań — dekoracyjne; nazwa/opis pochodzą z content.services.
const MENU_IMAGES = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar slug="trattoria-roma-lodz" companyName="Trattoria Roma" dark={true} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/85 z-10" />
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Wnętrze restauracji"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-amber-500 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 drop-shadow-md">restauracja włoska · Łódź</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="/trattoria-roma-lodz/kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-stone-950 px-8 py-4 rounded-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-amber-500 transition-colors w-full sm:w-auto justify-center"
              >
                {content.hero.cta} <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/trattoria-roma-lodz/#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-amber-600/50 text-amber-500 px-8 py-4 rounded-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-amber-600/10 transition-colors w-full sm:w-auto justify-center"
              >
                Przejrzyj Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Atuty Section */}
      <section className="py-24 relative overflow-hidden bg-stone-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {content.why_us.map((reason, idx) => {
              const Icon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="flex flex-col items-center p-8 glassmorphism border border-stone-800 rounded-2xl backdrop-blur-md bg-stone-900/30"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-950 flex items-center justify-center text-amber-500 mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-3">{reason.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu / Oferta Section */}
      <section id="menu" className="py-32 bg-stone-900 relative">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-amber-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nasza oferta</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Co dla Ciebie przygotujemy</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {content.services.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col sm:flex-row gap-6 p-4 rounded-2xl border border-stone-800/50 bg-stone-800/20 backdrop-blur-sm hover:bg-stone-800/40 transition-colors"
              >
                <div className="w-full sm:w-40 h-40 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={MENU_IMAGES[index % MENU_IMAGES.length]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow py-2">
                  <div className="mb-2 border-b border-stone-700/50 pb-2">
                    <h4 className="text-xl font-serif text-stone-100">{item.title}</h4>
                  </div>
                  <p className="text-stone-400 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <motion.a
              href="/trattoria-roma-lodz/kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-amber-500 border-b border-amber-500 pb-1 font-medium tracking-wide uppercase hover:text-amber-400 transition-colors"
            >
              Zarezerwuj stolik
            </motion.a>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
            alt="Atmosfera restauracji"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-stone-900/40 border border-stone-700/50 p-12 md:p-20 rounded-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{content.contact.heading}</h2>
            <p className="text-stone-300 mb-10 max-w-xl mx-auto font-light text-lg">
              {content.contact.cta}
            </p>
            <motion.a
              href="/trattoria-roma-lodz/kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-stone-950 px-10 py-4 rounded-sm font-semibold tracking-wider uppercase inline-flex items-center hover:bg-amber-500 transition-colors"
            >
              {content.hero.cta}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Trattoria Roma" />
    </div>
  );
}
