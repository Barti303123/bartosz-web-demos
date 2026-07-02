"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Settings, Wrench, Shield, Zap, ArrowRight, Star, Phone, Quote, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Animowany licznik ──────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const totalSteps = 120; // ~2 sekundy przy 60fps
    const increment = target / totalSteps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min(target, increment * step);
      setCount(parseFloat(current.toFixed(decimals)));
      if (step >= totalSteps) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
}

/* ─── Warianty animacji ──────────────────────────────────────────────── */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

/* ─── Dane ───────────────────────────────────────────────────────────── */
const STATS = [
  { value: 15,  suffix: "+",  decimals: 0, label: "Lat Mistrzostwa",  sub: "Na lokalnym rynku" },
  { value: 1200, suffix: "+", decimals: 0, label: "Napraw Rocznie",    sub: "Zrealizowanych zadań" },
  { value: 98,  suffix: "%",  decimals: 0, label: "Zadowolenia",       sub: "Klientów" },
  { value: 4.9, suffix: "★",  decimals: 1, label: "Ocena Google",      sub: "Średnia z recenzji" },
];

const SERVICES = [
  { icon: Settings, title: "Precyzyjna Diagnostyka",      desc: "Najnowocześniejsza analiza komputerowa — zlokalizujemy każdą, nawet najdrobniejszą usterkę z niezrównaną precyzją." },
  { icon: Wrench,   title: "Optymalizacja Osiągów",       desc: "Profesjonalne strojenie i zaawansowane modyfikacje silnika dla maksymalnej mocy i responsywności." },
  { icon: Shield,   title: "Kompleksowa Konserwacja",     desc: "Wszechstronna obsługa serwisowa — Twój pojazd zachowa nienaganny stan i niezawodność przez lata." },
  { icon: Zap,      title: "Systemy Elektryczne",         desc: "Ekspercka naprawa i optymalizacja zaawansowanej elektroniki, gwarantująca perfekcyjne działanie każdego systemu." },
];

const REVIEWS = [
  {
    name: "Marek Wiśniewski",
    city: "Warszawa",
    rating: 5,
    text: "Najlepszy serwis, w jakim byłem. Błyskawiczna diagnoza, cena zgodna z wyceną i zero niespodzianek. Polecam każdemu kierowcy!",
  },
  {
    name: "Agnieszka Kowalska",
    city: "Warszawa",
    rating: 5,
    text: "Podgląd Szablonu to klasa sama w sobie. Mój samochód jest w ich rękach od 3 lat i nigdy mnie nie zawiedli. Profesjonalizm na każdym kroku.",
  },
  {
    name: "Tomasz Nowak",
    city: "Warszawa",
    rating: 5,
    text: "Diagnostyka na najwyższym poziomie. Znaleźli usterkę, której dwa inne serwisy nie wykryły. Szczere rekomendacje bez żadnych gwiazdek.",
  },
];

/* ─── Komponent główny ───────────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans selection:bg-red-600 selection:text-white"
      ref={containerRef}
    >
      <Navbar slug="preview-auto" companyName="Podgląd Szablonu" dark={true} />

      {/* Dekoracyjne orby tła */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ════════════════════════════════════════════
          HERO — editorial, wyrównany do lewej
      ════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center overflow-hidden z-10 pt-20">
        {/* Tło parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&q=80"
            alt="Ekskluzywny Serwis Samochodowy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Badge z pulsującą kropką */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
                Elitarne Osiągi Motoryzacyjne · Warszawa
              </span>
            </motion.div>

            {/* Tytuł */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4 leading-none uppercase"
            >
              PRE<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-800">
                CYZJA
              </span>
            </motion.h1>

            {/* Kreska akcentowa */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-20 h-[3px] bg-red-600 mb-8 origin-left"
            />

            {/* Lead */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed"
            >
              Podgląd Szablonu to synonim bezkompromisowej doskonałości motoryzacyjnej. Specjalizujemy się w Testowa Branża dla kierowców, którzy w Warszawa oczekują absolutnie najlepszych rozwiązań.
            </motion.p>

            {/* CTA przyciski */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/preview-auto/kontakt"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/40"
              >
                Zarezerwuj Usługę
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/preview-auto/o-nas"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800 backdrop-blur-md text-white font-bold rounded-xl border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
              >
                Poznaj Naszą Ekspertyzę
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Wskaźnik scrollowania */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Przewiń</span>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          STATS STRIP — animowane liczniki
      ════════════════════════════════════════════ */}
      <section className="relative z-10 border-t border-b border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* gap-px + tło rodzica tworzy linie podziału */
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/60"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-zinc-950 md:bg-transparent md:bg-zinc-900/40 flex flex-col items-center text-center px-6 py-12 group hover:bg-zinc-900/80 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-1 group-hover:text-red-400 transition-colors">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-zinc-600 text-xs">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES — editorial, numerowane 01–04
      ════════════════════════════════════════════ */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Nagłówek sekcji z linkiem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Co oferujemy
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                NASZE WYJĄTKOWE<br />SPECJALIZACJE
              </h2>
            </div>
            <a
              href="/preview-auto/kontakt"
              className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-medium shrink-0"
            >
              Umów wizytę
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ y: -8 }}
                className="group relative bg-zinc-900/60 border border-zinc-800 hover:border-red-500/40 rounded-2xl p-8 overflow-hidden transition-all duration-500 cursor-default"
              >
                {/* Duża liczba w tle */}
                <div className="absolute top-3 right-4 text-[7rem] font-black text-zinc-800/50 leading-none select-none group-hover:text-red-900/20 transition-colors duration-500 pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Pionowy akcentowy border po lewej */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-transparent group-hover:bg-red-600 transition-all duration-500" />

                {/* Subtelny gradient hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-zinc-800 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                  <p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-sm transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          REVIEWS — opinie klientów
      ════════════════════════════════════════════ */}
      <section className="py-24 relative z-10 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Nagłówek */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Opinie Klientów
            </p>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              CO MÓWIĄ O NAS<br />KIEROWCY
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="ml-3 text-zinc-400 text-sm">4.9 / 5 · Google Reviews</span>
            </div>
          </motion.div>

          {/* Karty recenzji */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant}
                whileHover={{ y: -6 }}
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 relative overflow-hidden transition-all duration-300"
              >
                {/* Ikona cudzysłowu w tle */}
                <div className="absolute top-6 right-6 opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-300 pointer-events-none">
                  <Quote className="w-14 h-14 text-red-400" />
                </div>

                {/* Gwiazdki */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Treść opinii */}
                <p className="text-zinc-300 leading-relaxed mb-6 text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Avatar + dane */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200 text-sm">{review.name}</div>
                    <div className="text-zinc-500 text-xs">{review.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA SECTION — pełna szerokość z tłem
      ════════════════════════════════════════════ */}
      <section className="relative z-10 overflow-hidden">
        <div className="relative min-h-[480px] flex items-center justify-center">
          {/* Tło z gradienty */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
              alt="Gotowy na wyższy poziom"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 text-center max-w-4xl mx-auto px-6 py-20"
          >
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Zrób kolejny krok
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              GOTOWY NA WYŻSZY<br />POZIOM DOSKONAŁOŚCI?
            </h2>
            <p className="text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
              Dołącz do elitarnego grona kierowców w Warszawa, którzy powierzają{" "}
              <span className="text-white font-semibold">Podgląd Szablonu</span> swoje
              najbardziej wymagające potrzeby motoryzacyjne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/preview-auto/kontakt"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-red-900/50"
              >
                Zarezerwuj Teraz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+48 123 456 789"
                className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800 text-white font-bold text-lg rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300"
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
