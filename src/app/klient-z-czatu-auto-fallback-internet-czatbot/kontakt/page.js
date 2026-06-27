"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const info = [
  { icon: Phone, label: "Telefon", value: "+48 500 123 456" },
  { icon: MapPin, label: "Adres", value: "ul. Główna 1, Internet (Czatbot), Internet (Czatbot)" },
  { icon: Mail, label: "Email", value: "biuro@klient-z-czatu-auto-fallback-internet-czatbot.pl" },
  { icon: Clock, label: "Godziny pracy", value: "Pon — Pt: 9:00 — 17:00" },
];

export default function DefaultContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-gray-900">
      <Navbar slug="klient-z-czatu-auto-fallback-internet-czatbot" companyName="Klient z czatu (Auto-Fallback)" />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">Kontakt</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Skontaktuj się z <span className="text-blue-600">{"Klient z czatu (Auto-Fallback)"}</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-lg mx-auto">
            Masz pytanie lub jesteś gotowy zacząć? Chętnie Cię wysłuchamy.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          {/* Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            transition={{ duration: 0.5 }} className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold mb-2">Informacje kontaktowe</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Skontaktuj się z {"Klient z czatu (Auto-Fallback)"} — twoim zaufanym partnerem w branży {"nieznana"} w {"Internet (Czatbot)"}.</p>
            <div className="space-y-6 pt-2">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-0.5">{item.label}</p>
                    <p className="text-gray-700 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            transition={{ duration: 0.5, delay: 0.15 }} className="md:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-50/70 border border-gray-100 rounded-2xl p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Imię i nazwisko</label>
                    <input type="text" required placeholder="Jan Kowalski"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input type="email" required placeholder="jan@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Wiadomość</label>
                  <textarea rows={5} required placeholder="Opowiedz nam o swoim projekcie..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-500 transition-all text-sm resize-none" />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
                  Wyślij wiadomość <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">Sukces! Formularz działa.</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  To jest testowa strona DEMO wygenerowana przez AI. W docelowej pełnej wersji, wszystkie zapytania od klientów będą błyskawicznie trafiać prosto na Twoją skrzynkę pocztową: <br/>
                  <strong className="text-gray-900 text-base mt-2 block">{"testowylol@gmail.com"}</strong>
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-500 transition-colors">Wyślij ponownie</button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer companyName="Klient z czatu (Auto-Fallback)" />
    </main>
  );
}
