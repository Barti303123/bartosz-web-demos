"use client";
import { motion } from "framer-motion";
import { Shield, Scale, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const features = [
  { icon: Shield, title: "Skuteczna obrona", desc: "Nieustępliwie walczymy o Twoje prawa, reputację i przyszłość w każdej prowadzonej sprawie." },
  { icon: Scale, title: "Uczciwe rezultaty", desc: "Nasze doświadczenie udowadnia, że wymierzamy sprawiedliwość — maksymalizując ugody i wygrywając procesy." },
  { icon: Gavel, title: "Gotowi do procesu", desc: "Gdy negocjacje zawodzą, nasze doświadczenie na sali sądowej daje Ci decydującą przewagę." },
];

export default function LawHome() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar slug="prawnik-antek-zdunska-wola" companyName="prawnik antek" dark />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 1 }} className="relative z-10 text-center max-w-3xl px-6">
          <p className="text-[#D4A853] tracking-[.35em] uppercase text-sm font-medium mb-4">Kancelaria Prawna</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Niezłomna ochrona<br />prawna</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto mb-10">{"prawnik antek"} zapewnia stanowcze doradztwo i zaciekłą obronę, gdy stawka jest najwyższa.</p>
          <a href={`/site/prawnik-antek-zdunska-wola/contact`} className="inline-block bg-[#D4A853] hover:bg-[#c49a48] text-slate-950 font-semibold px-10 py-4 rounded transition-colors text-lg">Bezpłatna konsultacja</a>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }} className="font-serif text-4xl md:text-5xl text-center mb-4">Dlaczego klienci nas wybierają</motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7, delay: 0.15 }} className="w-16 h-1 bg-[#D4A853] mx-auto mb-16 rounded-full" />
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-[#D4A853]/40 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-[#D4A853]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A853]/20 transition-colors">
                <f.icon className="w-7 h-7 text-[#D4A853]" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.8 }}
        className="mx-6 mb-20 max-w-5xl lg:mx-auto rounded-3xl bg-gradient-to-br from-[#D4A853]/15 to-slate-900 border border-[#D4A853]/20 p-12 md:p-20 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5">Twoja przyszłość zasługuje na<br />potężnego obrońcę</h2>
        <p className="text-slate-300 max-w-lg mx-auto mb-10 text-lg">Zadzwoń pod numer {"+48 500 123 456"} lub umów się online — pierwsza konsultacja jest zawsze darmowa.</p>
        <a href={`/site/prawnik-antek-zdunska-wola/contact`} className="inline-block bg-[#D4A853] hover:bg-[#c49a48] text-slate-950 font-bold px-12 py-4 rounded transition-colors text-lg">Zacznij już dziś</a>
      </motion.section>

      <Footer companyName="prawnik antek" />
    </main>
  );
}
