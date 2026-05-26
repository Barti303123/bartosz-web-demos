"use client";
import { motion } from "framer-motion";
import { Wrench, Car, ShieldCheck, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

const services = [
  { icon: Wrench, title: "Naprawa silnika", desc: "Pełna diagnostyka i naprawy prowadzone przez certyfikowanych mechaników, którzy traktują każdy silnik jak swój własny." },
  { icon: Car, title: "Pełen serwis", desc: "Od wymiany oleju po naprawę skrzyni biegów — jedno miejsce dla każdej potrzeby Twojego pojazdu." },
  { icon: ShieldCheck, title: "Przeglądy bezpieczeństwa", desc: "Rygorystyczne wielopunktowe kontrole, abyś za każdym razem prowadził z pełną pewnością." },
];

export default function AutoHome() {
  return (
    <>
      <Navbar slug="warsztat-mariusz-sieradz" companyName="Warsztat Mariusz" />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80" alt="garage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-neutral-950" />
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center max-w-3xl px-6">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[.25em] uppercase bg-red-600 text-white rounded-full">Warsztat</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">Precyzyjny serwis.<br /><span className="text-red-500">Solidne&nbsp;wykonanie.</span></h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-xl mx-auto">{"Warsztat Mariusz"} — gdzie surowa ekspertyza spotyka się z nieustanną troską o Twój pojazd.</p>
          <a href={`/site/warsztat-mariusz-sieradz/contact`} className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all text-lg shadow-lg shadow-red-600/30">
            Zarezerwuj wizytę <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-neutral-950 py-28 px-6">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-4xl md:text-5xl font-black text-white mb-4">Co <span className="text-red-500">robimy</span></motion.h2>
        <p className="text-center text-neutral-400 mb-16 max-w-lg mx-auto">Każda usługa poparta dekadami praktycznego doświadczenia i oryginalnymi częściami.</p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-red-600/60 transition-colors">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-600/10 text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 bg-red-600 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-40" />
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Gotowy wyruszyć w drogę?</h2>
          <p className="text-red-100 text-lg mb-10 max-w-xl mx-auto">Umów się na wizytę już dziś i poczuj różnicę z {"Warsztat Mariusz"} — szybko, uczciwie i solidnie.</p>
          <a href={`/site/warsztat-mariusz-sieradz/contact`} className="inline-flex items-center gap-2 px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors text-lg shadow-xl">
            Skontaktuj się z nami <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      <Footer companyName="Warsztat Mariusz" />
    </>
  );
}
