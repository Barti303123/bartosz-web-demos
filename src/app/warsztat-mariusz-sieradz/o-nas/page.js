"use client";
import { motion } from "framer-motion";
import { CalendarDays, CarFront, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

const stats = [
  { icon: CalendarDays, value: "25+", label: "Lat na rynku" },
  { icon: CarFront, value: "12,000+", label: "Obsłużonych aut" },
  { icon: Users, value: "8,500+", label: "Zadowolonych klientów" },
  { icon: Star, value: "4.9", label: "Średnia ocena" },
];

export default function AutoAbout() {
  return (
    <>
      <Navbar slug="warsztat-mariusz-sieradz" companyName="Warsztat Mariusz" />

      {/* Header */}
      <section className="bg-neutral-950 pt-32 pb-20 px-6 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 mb-5 text-xs font-bold tracking-[.25em] uppercase bg-red-600/15 text-red-500 rounded-full border border-red-600/30">Nasza historia</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-black text-white leading-tight">
          Zbudowani na <span className="text-red-500">pasji&nbsp;i&nbsp;doświadczeniu</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 text-neutral-400 text-lg max-w-2xl mx-auto">
          {"Warsztat Mariusz"} zaczynał jako mały warsztat z prostą obietnicą — uczciwa praca za uczciwą cenę. Dekady później ta obietnica wciąż napędza wszystko, co robimy.
        </motion.p>
      </section>

      {/* Story + Image */}
      <section className="bg-neutral-950 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Od małego garażu do<br /><span className="text-red-500">kompleksowego serwisu</span></h2>
            <p className="text-neutral-400 leading-relaxed mb-5">To, co zaczęło się jako projekt z pasji w {"Sieradz"}, przerodziło się w jeden z najbardziej zaufanych warsztatów Warsztat w regionie. Nasz certyfikowany zespół łączy staroszkolne rzemiosło z nowoczesną diagnostyką, aby Twój pojazd zawsze działał na najwyższych obrotach.</p>
            <p className="text-neutral-400 leading-relaxed">Znajdujemy się pod adresem {"ul. Główna 1, Sieradz"}, {"Sieradz"} — nasze drzwi są zawsze otwarte. Zadzwoń do nas na <span className="text-white font-semibold">{"+48 500 123 456"}</span> i zobacz, dlaczego tysiące klientów do nas wracają.</p>
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-red-600/5">
            <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=80" alt="workshop" className="w-full h-[400px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-red-600/10 text-red-500 mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white">{s.value}</p>
              <p className="text-neutral-500 text-sm mt-1 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-neutral-950 py-24 px-6 text-center">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-black text-white mb-4">Sprawmy, byś wrócił na drogę</h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10">Niezależnie od tego, czy to rutynowy przegląd, czy pełny remont, {"Warsztat Mariusz"} ma wszystko pod kontrolą.</p>
          <a href={`/site/warsztat-mariusz-sieradz/contact`} className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors text-lg shadow-lg shadow-red-600/25">Napisz do nas</a>
        </motion.div>
      </section>

      <Footer companyName="Warsztat Mariusz" />
    </>
  );
}
