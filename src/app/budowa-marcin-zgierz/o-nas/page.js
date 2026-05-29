"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Users, CheckSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const hazardStripe = "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(250, 204, 21, 0.1) 10px, rgba(250, 204, 21, 0.1) 20px)";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-400 selection:text-slate-950 overflow-hidden">
      <Navbar slug="budowa-marcin-zgierz" companyName="Budowa Marcin" dark={true} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-8 border-yellow-400">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Architektura Budowlana" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
          <div className="absolute inset-0" style={{ backgroundImage: hazardStripe }}></div>
        </div>

        {/* Orbs */}
        <motion.div 
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px]"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-4 px-4 py-1 border-l-4 border-yellow-400 bg-slate-900/80 backdrop-blur-md">
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">O Naszej Firmie</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white leading-tight">
              Kształtujemy <span className="text-yellow-400">Doskonałość</span> <br/>w Każdej Konstrukcji
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium border-l-2 border-slate-700 pl-4 max-w-2xl">
              Budowa Marcin to wiodąca firma Usługi Budowlane w Zgierz, dedykowana integralności strukturalnej i wizji architektonicznej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <div className="relative p-2 border-4 border-slate-800 bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Zespół Budowlany" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -right-8 bg-yellow-400 p-8 border-4 border-slate-950 hidden md:block">
                  <span className="block text-5xl font-black text-slate-950 mb-1">20+</span>
                  <span className="block text-slate-900 font-bold uppercase tracking-wider text-sm">Lat Doświadczenia w Branży</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Fundament <span className="text-yellow-400">Naszego Sukcesu</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                Założona z niezłomną determinacją, by na nowo zdefiniować branżę Usługi Budowlane, firma Budowa Marcin stała się potęgą innowacji budowlanych w Zgierz. Nie tylko wznosimy konstrukcje; budujemy dziedzictwo.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                Nasze podejście łączy solidne wykonanie z drobiazgowym planowaniem. Od pierwszego projektu po ostatni nit, nasz zespół dba o to, by każdy detal spełniał najwyższe standardy bezpieczeństwa, trwałości i designu.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t-2 border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-950 p-3 border-2 border-slate-800 text-yellow-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Precyzja</h4>
                    <p className="text-sm text-slate-500">Dokładne pomiary, zero kompromisów.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-950 p-3 border-2 border-slate-800 text-yellow-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Trwałość</h4>
                    <p className="text-sm text-slate-500">Materiały wybrane, by przetrwać próbę czasu.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative bg-slate-950">
        <div className="absolute inset-0" style={{ backgroundImage: hazardStripe, opacity: 0.3 }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Nasze Kluczowe <span className="text-yellow-400">Wartości</span></h2>
            <p className="text-lg text-slate-400 font-medium">Działamy w oparciu o rygorystyczne zasady, które gwarantują sukces projektu i pełne zadowolenie klienta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Niezachwiana Praca Zespołowa", desc: "Współpraca to nasz fundament. Nasze zespoły działają bezbłędnie, zapewniając wydajność i bezpieczeństwo na placu budowy." },
              { icon: Zap, title: "Niezłomna Realizacja", desc: "Dążymy do dotrzymywania terminów z niezachwianą determinacją. Gdy zobowiązujemy się do harmonogramu, realizujemy go bez wymówek." },
              { icon: CheckSquare, title: "Absolutna Integralność", desc: "Uczciwe wyceny, przejrzyste procesy i brak kompromisów w jakości. Nasze słowo jest tak solidne jak beton." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-900 border-4 border-slate-800 p-8 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <div className="absolute -top-6 left-8 bg-yellow-400 p-4 border-4 border-slate-950 text-slate-950">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white mt-6 mb-4">{value.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Budowa Marcin" />
    </div>
  );
}