"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, ChevronRight, Flower2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-[#C5A880] selection:text-white overflow-hidden">
      <Navbar slug="salon-annna-sieradz" companyName="Salon annna" dark={false} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
            alt="Ekskluzywny Salon Piękności" 
            className="w-full h-[120%] object-cover -top-[10%] relative"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <Flower2 className="w-12 h-12 text-[#C5A880] mx-auto animate-pulse" strokeWidth={1.5} />
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-wide"
            >
              Odkryj Swój <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#C5A880] to-[#E8DCCB]">Promienny Blask</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
            >
              Witamy w Salon annna, wiodącym miejscu w Sieradz oferującym wyrafinowane doświadczenia w dziedzinie piękna i relaksu.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a 
                href="/salon-annna-sieradz/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C5A880] text-white rounded-full overflow-hidden transition-all hover:bg-[#b0936c]"
              >
                <span className="relative z-10 tracking-widest text-sm uppercase">Zarezerwuj Wizytę</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Shapes */}
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-[#C5A880]/30 rounded-full blur-3xl z-10"
        />
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#E8DCCB]/30 rounded-full blur-3xl z-10"
        />
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 relative bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Nasze Ekskluzywne Usługi</h2>
            <div className="w-24 h-1 bg-[#C5A880] mx-auto rounded-full" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-light text-lg">
              Zanurz się w naszej starannie wyselekcjonowanej ofercie luksusowych zabiegów upiększających, stworzonych, by podkreślić Twoje naturalne piękno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Zabiegi na Twarz",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop",
                desc: "Odmłodź i rozświetl swoją skórę dzięki naszym autorskim, luksusowym zabiegom na twarz, dopasowanym do Twoich indywidualnych potrzeb."
              },
              {
                title: "Rytuały Masażu",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
                desc: "Uwolnij napięcie, przywróć harmonię swojemu ciału i umysłowi, doświadczając głębokiego relaksu w naszych kojących rytuałach masażu."
              },
              {
                title: "Perfekcyjna Pielęgnacja Paznokci",
                image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop",
                desc: "Podkreśl swoją elegancję dzięki precyzyjnym manicure i pedicure, które zapewnią nieskazitelny wygląd i długotrwałe piękno Twoich dłoni i stóp."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-96 mb-6 overflow-hidden rounded-2xl shadow-md">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                <p className="text-gray-500 font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Glassmorphism Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2670&auto=format&fit=crop" 
            alt="Relaksujące Tło Spa" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7]/90 to-[#FDFBF7]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif mb-6">
                Historie Naszych Klientów
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 font-light mb-8">
                Nie wierz nam na słowo. Przeczytaj, co nasze zachwycone klientki mówią o swoich transformacjach i niezapomnianych chwilach spędzonych w Salon annna.
              </motion.p>
              <motion.div variants={fadeIn} className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#C5A880] text-[#C5A880]" />)}
              </motion.div>
            </div>

            <motion.div 
              variants={fadeIn}
              className="relative p-8 md:p-12 rounded-3xl backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl"
            >
              <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[#C5A880] opacity-50" />
              <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-8 leading-relaxed">
                "To było najbardziej luksusowe i relaksujące doświadczenie, jakie kiedykolwiek miałam. Dbałość o każdy detal i kojąca atmosfera w Salon annna sprawiły, że poczułam się jak królowa. Wyszedłam stamtąd promienna i całkowicie odświeżona."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop" 
                    alt="Zadowolona Klientka" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eleanor Vance</h4>
                  <p className="text-sm text-gray-500 font-light">Wierna Klientka, Sieradz</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Salon annna" />
    </div>
  );
}