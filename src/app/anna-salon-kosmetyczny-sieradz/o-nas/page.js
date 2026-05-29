"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-[#C5A880] selection:text-white">
      <Navbar slug="anna-salon-kosmetyczny-sieradz" companyName="Anna salon kosmetyczny" dark={false} />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-64 h-64 bg-[#E8DCCB]/40 rounded-full blur-3xl z-0"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Nasza <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#C5A880] to-[#b0936c]">Historia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
          >
            Poświęcamy się wydobywaniu Twojego naturalnego piękna poprzez sztukę, pasję i najwyższej jakości pielęgnację.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute inset-0 bg-[#C5A880] rounded-t-full transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2622&auto=format&fit=crop" 
                alt="Wnętrze Naszego Salonu" 
                className="w-full h-[600px] object-cover rounded-t-full shadow-xl"
              />
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-8 -left-8 backdrop-blur-md bg-white/70 p-6 rounded-2xl shadow-lg border border-white/40"
              >
                <Award className="w-10 h-10 text-[#C5A880] mb-2" />
                <p className="font-serif text-xl">Ponad 10 Lat</p>
                <p className="text-sm text-gray-500">Doskonałości</p>
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Oaza Piękna w Sieradz</h2>
                <div className="w-16 h-1 bg-[#C5A880] rounded-full mb-6" />
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Założony z wizją redefiniowania standardów usług Salon Urody, Anna salon kosmetyczny to coś więcej niż salon – to prawdziwa oaza spokoju. Wierzymy, że dbanie o siebie to konieczność, a nie luksus.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Nasz zespół mistrzów stylizacji i estetyków jest skrupulatnie szkolony w najnowszych technikach, gwarantując, że każdy zabieg jest dopasowany do Twoich unikalnych potrzeb. Używamy wyłącznie produktów premium, pozyskiwanych etycznie, które odżywiają Twoją skórę i duszę.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Indywidualna Pielęgnacja</h3>
                    <p className="text-sm text-gray-500 font-light">Spersonalizowane zabiegi, stworzone wyłącznie dla Ciebie.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE4] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Produkty Premium</h3>
                    <p className="text-sm text-gray-500 font-light">Składniki najwyższej jakości dla najlepszych rezultatów.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery / Vibe */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Doświadczenie Anna salon kosmetyczny</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">Wkrocz do świata, gdzie elegancja spotyka spokój.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" alt="Galeria 1" className="w-full h-80 object-cover rounded-xl shadow-sm" />
            <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2673&auto=format&fit=crop" alt="Galeria 2" className="w-full h-80 object-cover rounded-xl shadow-sm md:-translate-y-8" />
            <img src="https://images.unsplash.com/photo-1562086781-6113b28b49ce?q=80&w=2671&auto=format&fit=crop" alt="Galeria 3" className="w-full h-80 object-cover rounded-xl shadow-sm" />
          </div>
        </div>
      </section>

      <Footer companyName="Anna salon kosmetyczny" />
    </div>
  );
}