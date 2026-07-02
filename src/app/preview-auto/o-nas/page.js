"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, ArrowRight, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Warianty animacji ──────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ─── Dane ───────────────────────────────────────────────────────────── */
const METRICS = [
  { value: "15+",    label: "Lat Doświadczenia",  desc: "Nieustanny rozwój i doskonalenie warsztatu" },
  { value: "OEM",    label: "Części Premium",      desc: "Wyłącznie oryginalne komponenty najwyższej klasy" },
  { value: "1 200+", label: "Napraw Rocznie",      desc: "Każda zrealizowana z najwyższą starannością" },
  { value: "★ 4.9",  label: "Ocena Klientów",     desc: "Zweryfikowana w Google Reviews" },
];

const VALUES = [
  {
    icon: Award,
    title: "Doskonałość",
    desc: "Nie akceptujemy niczego poza perfekcją — w każdej dokręconej śrubie i każdym sprawdzonym przewodzie elektrycznym.",
  },
  {
    icon: Users,
    title: "Uczciwość",
    desc: "Uczciwe oceny, przejrzyste ceny i klarowna komunikacja na każdym etapie obsługi — bez ukrytych kosztów.",
  },
  {
    icon: Clock,
    title: "Efektywność",
    desc: "Szanujemy Twój czas dzięki usprawnionym procesom i szybkim realizacjom, bez kompromisów w kwestii jakości.",
  },
];

/* ─── Komponent główny ───────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans">
      <Navbar slug="preview-auto" companyName="Podgląd Szablonu" dark={true} />

      {/* Dekoracyjne orby tła */}
      <div className="fixed top-1/4 right-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-[-10%] w-[40%] h-[40%] bg-zinc-800/40 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
                O Nas · Warszawa
              </span>
            </motion.div>

            {/* Tytuł */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight leading-none">
              Za Kierownicą{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Perfekcji
              </span>
            </h1>

            {/* Kreska akcentowa */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-20 h-[3px] bg-red-600 mb-8 origin-left"
            />

            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Napędzani pasją, zdefiniowani precyzją. Odkryj, co czyni Podgląd Szablonu wiodącym wyborem w świecie motoryzacyjnej doskonałości.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HISTORIA + METRYKI 2×2
      ════════════════════════════════════════════ */}
      <section className="py-20 z-10 relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Zdjęcie z floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Cień dekoracyjny za zdjęciem */}
              <div className="absolute inset-0 bg-red-600/20 translate-x-4 translate-y-4 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80"
                alt="Precyzja silnika"
                className="relative rounded-2xl z-10 w-full h-[500px] object-cover border border-zinc-800"
              />
              {/* Pływająca karta statystyk */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-2xl shadow-red-900/20 z-20 backdrop-blur-md"
              >
                <div className="text-5xl font-black text-red-500 mb-2">15+</div>
                <div className="text-zinc-400 font-semibold uppercase tracking-wider text-sm">Lat Mistrzostwa</div>
              </motion.div>
            </motion.div>

            {/* Tekst + metryki 2×2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Nasza Historia
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                BEZKOMPROMISOWA JAKOŚĆ W Warszawa
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                W Podgląd Szablonu nie tylko naprawiamy samochody — kreujemy spokój ducha. Opierając się na zasadach przejrzystości i technicznej wyższości, nasz obiekt jest wyposażony w diagnostykę na poziomie autoryzowanego serwisu i obsadzony przez mistrzów techniki.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Niezależnie od tego, czy poszukujesz rutynowej konserwacji, czy złożonej odbudowy silnika, nasze podejście pozostaje niezmienne: skrupulatna dbałość o szczegóły i niezachwiane dążenie do perfekcji motoryzacyjnej.
              </p>

              {/* Grid 2×2 z metrykami */}
              <div className="grid grid-cols-2 gap-4">
                {METRICS.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 rounded-xl p-5 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Subtelne tło na hover */}
                    <div className="absolute inset-0 bg-red-600/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="text-2xl md:text-3xl font-black text-red-500 mb-1 group-hover:text-red-400 transition-colors">
                      {metric.value}
                    </div>
                    <div className="text-zinc-200 text-sm font-semibold mb-1">{metric.label}</div>
                    <div className="text-zinc-600 text-xs leading-snug">{metric.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WARTOŚCI — numerowane karty z wielką cyfrą
      ════════════════════════════════════════════ */}
      <section className="py-32 relative z-10 px-6 bg-zinc-900/50 border-t border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">

          {/* Nagłówek sekcji */}
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Co nas wyróżnia
            </p>
            <h2 className="text-3xl md:text-5xl font-black mb-4">NASZE KLUCZOWE WARTOŚCI</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -10 }}
                className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Wielka cyfra w tle */}
                <div className="absolute -bottom-4 -right-2 text-[8rem] font-black text-zinc-800/40 leading-none select-none group-hover:text-red-900/20 transition-colors duration-500 pointer-events-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Pionowy czerwony border po lewej */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-transparent group-hover:bg-red-600 transition-all duration-500" />

                {/* Blask na hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] group-hover:bg-red-500/10 transition-colors" />

                <value.icon className="w-12 h-12 text-red-500 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA STRIP
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-10 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Dekoracyjny blask */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-2">Gotowy na wizytę?</h3>
              <p className="text-zinc-400">
                Skontaktuj się z Podgląd Szablonu i zarezerwuj swój termin w Warszawa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 relative z-10">
              <a
                href="/preview-auto/kontakt"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/30"
              >
                Zarezerwuj Teraz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+48 123 456 789"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                +48 123 456 789
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
