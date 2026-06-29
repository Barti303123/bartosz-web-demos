"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Utensils, Star, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const menuItems = [
    { name: "Truffle Beef Tartare", price: "$24", desc: "Jajko przepiórcze, kapary, chrupiący parmezan, domowa brioszka", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
    { name: "Lobster Linguine", price: "$42", desc: "Ręcznie wyrabiany makaron, pomidorki koktajlowe, sos maślany z białego wina", img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop" },
    { name: "Wagyu Ribeye", price: "$85", desc: "Grillowane szparagi, aksamitne purée ziemniaczane, sos z szpiku kostnego", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" },
    { name: "Dark Chocolate Delice", price: "$16", desc: "Pralina orzechowa, płatki złota, lody espresso", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop" }
  ];

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
      <Navbar slug="bartosz-warszawa" companyName="bartosz" dark={true} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-amber-500 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6">Odkryj Gastronomia</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              Symfonia <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 italic">Smaków</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light">
              Zanurz się w niezapomnianą podróż kulinarną w bartosz, gdzie każde danie opowiada historię pasji, precyzji i najszlachetniejszych składników.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                href="/reservations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-stone-950 px-8 py-4 rounded-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-amber-500 transition-colors w-full sm:w-auto justify-center"
              >
                Zarezerwuj Stolik <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="#menu"
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

      {/* Intro / Features Section */}
      <section className="py-24 relative overflow-hidden bg-stone-950">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center p-8 glassmorphism border border-stone-800 rounded-2xl backdrop-blur-md bg-stone-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-amber-950 flex items-center justify-center text-amber-500 mb-6">
                <Utensils size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Mistrzowska Kuchnia</h3>
              <p className="text-stone-400 font-light leading-relaxed">Dania stworzone z mistrzostwem, łączące klasyczne techniki z nowoczesną innowacją.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center p-8 glassmorphism border border-stone-800 rounded-2xl backdrop-blur-md bg-stone-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-amber-950 flex items-center justify-center text-amber-500 mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Wyrafinowana Atmosfera</h3>
              <p className="text-stone-400 font-light leading-relaxed">Nasza wyrafinowana jadalnia została zaprojektowana z myślą o niezapomnianych wieczorach i wyjątkowych uroczystościach.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center p-8 glassmorphism border border-stone-800 rounded-2xl backdrop-blur-md bg-stone-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-amber-950 flex items-center justify-center text-amber-500 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Ponadczasowa Obsługa</h3>
              <p className="text-stone-400 font-light leading-relaxed">Uważna, spersonalizowana gościnność, która przewiduje i spełnia każdą Twoją potrzebę.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-32 bg-stone-900 relative">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-amber-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4">Kulinarne Arcydzieła</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Specjalności Szefa Kuchni</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group flex flex-col sm:flex-row gap-6 p-4 rounded-2xl border border-stone-800/50 bg-stone-800/20 backdrop-blur-sm hover:bg-stone-800/40 transition-colors"
              >
                <div className="w-full sm:w-40 h-40 shrink-0 overflow-hidden rounded-xl">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center flex-grow py-2">
                  <div className="flex justify-between items-baseline mb-2 border-b border-stone-700/50 pb-2">
                    <h4 className="text-xl font-serif text-stone-100">{item.name}</h4>
                    <span className="text-amber-500 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <motion.a 
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-amber-500 border-b border-amber-500 pb-1 font-medium tracking-wide uppercase hover:text-amber-400 transition-colors"
            >
              Zobacz Pełne Menu
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
            alt="Restaurant Ambience" 
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
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Zapraszamy na Niezapomniany Wieczór</h2>
            <p className="text-stone-300 mb-10 max-w-xl mx-auto font-light text-lg">
              Zarezerwuj stolik już dziś i pozwól nam uraczyć Cię najwytworniejszymi smakami w Warszawa.
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-stone-950 px-10 py-4 rounded-sm font-semibold tracking-wider uppercase inline-flex items-center hover:bg-amber-500 transition-colors"
            >
              Dokonaj Rezerwacji
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="bartosz" />
    </div>
  );
}