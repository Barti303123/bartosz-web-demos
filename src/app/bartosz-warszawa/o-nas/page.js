"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChefHat, Leaf, Wine } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar slug="bartosz-warszawa" companyName="bartosz" dark={true} />

      {/* Hero Section */}
      <section ref={headerRef} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2000&auto=format&fit=crop" 
            alt="Szef kuchni przygotowujący danie" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Nasza <span className="text-amber-500 italic">Opowieść</span></h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Story Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-sm uppercase tracking-[0.3em] text-amber-500 font-semibold">Nasze Dziedzictwo</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Pasja do <br/>Kulinarnej <span className="italic text-stone-400">Doskonałości</span>
              </h3>
              <div className="space-y-4 text-stone-300 font-light text-lg leading-relaxed">
                <p>
                  Założona w sercu Warszawa, restauracja bartosz narodziła się z głębokiego szacunku dla sezonowych składników i ponadczasowych technik kulinarnych. Wierzymy, że posiłek to coś więcej niż tylko pożywienie – to doświadczenie, wspomnienie, chwila dzielona z bliskimi.
                </p>
                <p>
                  Nasi szefowie kuchni czerpią inspirację z tradycyjnych europejskich korzeni, łącząc je z nowoczesną innowacją gastronomiczną. Każde danie opuszczające naszą kuchnię jest świadectwem naszego poświęcenia, skrupulatnie zaprojektowanym, by zachwycać zmysły i rozpalać podniebienie.
                </p>
              </div>
              <div className="pt-6">
                <p className="font-serif text-2xl text-amber-500 italic">"Gotowanie jest jak miłość. Należy się w nie zanurzyć bez reszty albo wcale."</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating Image Composition */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop" 
                  alt="Doświadczenie wykwintnej kuchni" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{ y: [-15, 15, -15] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-950 hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop" 
                  alt="Ujęcie detalu" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Nasza Filozofia</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Leaf, title: "Lokalne Składniki", desc: "Współpracujemy z lokalnymi rolnikami w Warszawa, aby codziennie dostarczać Państwu najświeższe, ekologiczne produkty." },
              { icon: ChefHat, title: "Mistrzowie Kulinariów", desc: "Naszą kuchnią kierują nagradzani wizjonerzy, którzy z pasją przesuwają granice sztuki kulinarnej." },
              { icon: Wine, title: "Starannie Dobrane Kompozycje", desc: "Nasi sommelierzy stworzyli obszerną piwnicę win, aby idealnie uzupełnić każdy kęs." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center p-8 rounded-2xl glassmorphism bg-stone-800/20 border border-stone-700/30 hover:bg-stone-800/40 transition-colors"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-stone-950 border border-amber-900 flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-amber-500" />
                </div>
                <h3 className="text-2xl font-serif text-stone-100 mb-4">{feature.title}</h3>
                <p className="text-stone-400 font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="bartosz" />
    </div>
  );
}