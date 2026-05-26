"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };

const info = [
  { icon: MapPin, label: "Odwiedź nas", value: "ul. Główna 1, Sieradz, Sieradz" },
  { icon: Phone, label: "Zadzwoń do nas", value: "+48 500 123 456" },
  { icon: Mail, label: "Email", value: "biuro@warsztat-mariusz-sieradz.pl" },
  { icon: Clock, label: "Godziny otwarcia", value: "Pon - Sob: 8:00 - 18:00" },
];

const inputCls = "w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-colors text-sm";

export default function AutoContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar slug="warsztat-mariusz-sieradz" companyName="Warsztat Mariusz" />

      {/* Header */}
      <section className="bg-neutral-950 pt-32 pb-20 px-6 text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 mb-5 text-xs font-bold tracking-[.25em] uppercase bg-red-600/15 text-red-500 rounded-full border border-red-600/30">Kontakt</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-black text-white leading-tight">
          <span className="text-red-500">Porozmawiajmy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-6 text-neutral-400 text-lg max-w-xl mx-auto">
          Pytania, wyceny czy rezerwacje — zespół {"Warsztat Mariusz"} jest gotowy do pomocy.
        </motion.p>
      </section>

      {/* Two-column */}
      <section className="bg-neutral-950 pb-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Info */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-2">Bądźmy w kontakcie</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">Wpadnij do warsztatu lub napisz — zazwyczaj odpowiadamy w ciągu kilku godzin.</p>
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="md:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" required placeholder="Imię i nazwisko" className={inputCls} />
                  <input type="email" required placeholder="Adres email" className={inputCls} />
                </div>
                <input type="tel" required placeholder="Numer telefonu" className={inputCls} />
                <textarea rows={5} required placeholder="Opisz swój pojazd lub jakiej usługi potrzebujesz..." className={`${inputCls} resize-none`} />
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-red-600/25">
                  Wyślij wiadomość <Send className="w-4 h-4" />
                </button>
                <p className="text-neutral-600 text-xs text-center">Szanujemy Twoją prywatność. Żadnego spamu, nigdy.</p>
              </form>
            ) : (
              <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-500">Sukces! Formularz działa.</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                  To jest testowa strona DEMO wygenerowana przez AI. W docelowej pełnej wersji systemu, wszystkie zapytania od klientów będą błyskawicznie trafiać prosto na Twoją skrzynkę pocztową: <br/>
                  <strong className="text-white text-base mt-2 block">{"Twojego maila"}</strong>
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-semibold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors">Wyślij ponownie</button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer companyName="Warsztat Mariusz" />
    </>
  );
}
