"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const gridBackground = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center'
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] font-sans selection:bg-[#B38B59] selection:text-white flex flex-col">
      <Navbar slug="janusz-pol-hydraulik-sieradz" companyName="Janusz-Pol Hydraulik" dark={true} />

      <main className="flex-grow pt-24 pb-0 flex flex-col lg:flex-row relative">
        {/* Left: Contact Info & Form */}
        <div className="w-full lg:w-1/2 flex flex-col pt-16 px-8 lg:px-20 z-10 bg-[#111111]" style={gridBackground}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-xl mx-auto lg:mx-0 w-full mb-16">
            <span className="uppercase tracking-[0.2em] text-[#B38B59] text-xs font-semibold mb-4 block">Zacznijmy</span>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-6">
              {content.contact.heading}
            </h1>
            <p className="text-gray-400 font-light mb-12 border-l border-white/10 pl-6">
              {content.contact.cta}
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#B38B59] peer placeholder-transparent"
                    placeholder="Imię i Nazwisko"
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#B38B59] uppercase tracking-widest font-semibold">Imię i Nazwisko</label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#B38B59] peer placeholder-transparent"
                    placeholder="Numer Telefonu"
                  />
                  <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#B38B59] uppercase tracking-widest font-semibold">Telefon</label>
                </div>
              </div>

              <div className="relative pt-4">
                <select
                  id="service"
                  className="block w-full px-0 py-3 text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#B38B59] peer font-light cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-900">Czego potrzebujesz?</option>
                  {content.services.map((service, idx) => (
                    <option key={idx} value={service.title} className="text-gray-900">{service.title}</option>
                  ))}
                  <option value="other" className="text-gray-900">Inne (opiszę w rozmowie)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-8 group flex items-center justify-center gap-4 bg-[#B38B59] text-white px-8 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#a07c50] transition-colors"
              >
                <span>{submitted ? 'Otrzymaliśmy Zapytanie' : 'Wyślij Wstępne Zapytanie'}</span>
                {!submitted && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

          <div className="max-w-xl mx-auto lg:mx-0 w-full grid grid-cols-2 gap-8 border-t border-white/10 pt-10 mt-auto pb-10">
            <div>
              <p className="text-[#B38B59] text-xs uppercase tracking-widest font-semibold mb-2">Telefon</p>
              <a href="tel:+48 555 111 222" className="text-white font-light hover:text-[#B38B59] transition-colors">+48 555 111 222</a>
            </div>
            <div>
              <p className="text-[#B38B59] text-xs uppercase tracking-widest font-semibold mb-2">E-mail</p>
              <a href="mailto:kontakt@janusz-pol-hydraulik.pl" className="text-white font-light hover:text-[#B38B59] transition-colors truncate block">kontakt@janusz-pol-hydraulik.pl</a>
            </div>
            <div className="col-span-2">
              <p className="text-[#B38B59] text-xs uppercase tracking-widest font-semibold mb-2">Siedziba</p>
              <p className="text-white font-light">ul. Warszawska 10, Sieradz</p>
            </div>
          </div>
        </div>

        {/* Right: Architectural Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[600px] relative">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            alt="Realizacja"
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-[#B38B59]/20 mix-blend-multiply"></div>

          <div className="absolute inset-0 border-[1px] border-white/20 m-8 pointer-events-none hidden lg:block"></div>
        </div>
      </main>

      <Footer companyName="Janusz-Pol Hydraulik" />
    </div>
  );
}
