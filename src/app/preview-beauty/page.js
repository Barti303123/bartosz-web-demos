"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Droplets, Sparkles, Wind } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] text-[#3A332C] font-sans selection:bg-[#E3D4C4] selection:text-[#3A332C] overflow-hidden">
      <Navbar slug="preview-beauty" companyName="Podgląd Szablonu" dark={false} />

      {/* Hero: Asymmetric Split Screen */}
      <section className="relative min-h-[100vh] flex flex-col lg:flex-row pt-20 lg:pt-0">
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-20 py-20 z-10 bg-[#FBF9F6]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-xl">
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#C1A88B]"></span>
              <span className="uppercase tracking-[0.3em] text-[#C1A88B] text-xs font-semibold">Haute Beauté</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-8">
              Prawdziwe <br/>
              <span className="italic font-light text-[#C1A88B]">Piękno</span> <br/>
              To Twój Czas.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 font-light mb-12 leading-relaxed max-w-md">
              Witamy w Podgląd Szablonu. W sercu Warszawa stworzyliśmy sanktuarium spokoju, w którym rzemiosło spotyka się z luksusem.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a href="/preview-beauty/kontakt" className="group inline-flex items-center gap-6 text-sm uppercase tracking-widest font-medium">
                <span className="relative overflow-hidden pb-1">
                  Rezerwacja
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3A332C] transform origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
                </span>
                <span className="w-10 h-10 rounded-full border border-[#C1A88B] flex items-center justify-center text-[#C1A88B] group-hover:bg-[#C1A88B] group-hover:text-white transition-colors duration-500">
                  <ChevronRight size={16} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop" 
              alt="Modelka spa" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
          {/* Aesthetic Vertical Text */}
          <div className="absolute top-1/2 -left-6 lg:left-8 -translate-y-1/2 -rotate-90 origin-left hidden md:block">
            <p className="text-white/40 uppercase tracking-[1em] text-xs font-bold mix-blend-overlay">Est. 2026</p>
          </div>
        </div>
      </section>

      {/* The Bento Grid Services */}
      <section className="py-32 px-4 lg:px-12 bg-[#F6F3ED] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-serif mb-6 leading-tight">Rytuały, które <br/><span className="italic text-[#C1A88B]">zatrzymują</span> czas.</h2>
            </div>
            <a href="/preview-beauty/o-nas" className="text-sm uppercase tracking-widest border-b border-[#C1A88B] text-[#C1A88B] pb-1 hover:text-[#3A332C] hover:border-[#3A332C] transition-colors mt-8 md:mt-0">Odkryj Nasze Podejście</a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
            {/* Box 1 (Large) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop" alt="Kosmetologia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <Wind className="text-[#C1A88B] mb-4 w-8 h-8" />
                <h3 className="text-3xl font-serif mb-2">Kosmetologia Hi-Tech</h3>
                <p className="text-white/70 font-light max-w-md">Bezkompromisowa technologia połączona z precyzją. Redukcja zmarszczek i głęboki lifting na poziomie komórkowym.</p>
              </div>
            </motion.div>

            {/* Box 2 (Small) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-4 relative rounded-3xl overflow-hidden group cursor-pointer bg-[#3A332C] text-white p-10 flex flex-col justify-end hover:bg-[#2A231C] transition-colors">
              <Sparkles className="text-[#E3D4C4] mb-auto w-8 h-8" />
              <h3 className="text-2xl font-serif mb-2">Medycyna Estetyczna</h3>
              <p className="text-white/60 font-light text-sm">Subtelne korekty, które budzą podziw, a nie pytania. Bezpieczeństwo pod okiem lekarzy specjalistów.</p>
            </motion.div>

            {/* Box 3 (Small) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-5 relative rounded-3xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop" alt="Spa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white z-10">
                <Droplets className="text-[#C1A88B] mb-4 w-8 h-8" />
                <h3 className="text-2xl font-serif">Rytuały Ciała & Spa</h3>
              </div>
            </motion.div>

            {/* Box 4 (Medium) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:col-span-7 relative rounded-3xl overflow-hidden bg-[#E3D4C4] p-10 flex flex-col justify-center items-start group">
              <p className="text-[#3A332C] font-serif text-3xl md:text-4xl leading-snug mb-8">"Twoje ciało to świątynia. Pozwól nam zadbać o każdy jej detal z największą czcią."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" alt="Klient" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest text-[#3A332C]">Eleanor V.</p>
                  <p className="text-xs text-[#3A332C]/60">Recenzja z Google</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-32 px-4 relative overflow-hidden bg-white flex justify-center items-center">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center z-10"
        >
          <span className="uppercase tracking-[0.3em] text-[#C1A88B] text-xs font-semibold mb-6 block">Rozpocznij Podróż</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-10 text-[#3A332C]">Zasługujesz na <br/><span className="italic">Luksus</span>.</h2>
          <a href="/preview-beauty/kontakt" className="inline-flex items-center justify-center px-12 py-5 bg-[#3A332C] text-white rounded-full uppercase tracking-widest text-sm hover:bg-[#C1A88B] transition-colors duration-500 shadow-xl shadow-black/10">
            Umów Konsultację
          </a>
        </motion.div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}