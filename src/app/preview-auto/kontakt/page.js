"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Dane kontaktowe ────────────────────────────────────────────────── */
const CONTACT_ITEMS = [
  { icon: Phone,  label: "Telefon",          value: "+48 123 456 789" },
  { icon: Mail,   label: "E-mail",           value: "test@podglad.pl" },
  { icon: MapPin, label: "Lokalizacja",      value: "ul. Deweloperska 1, Warszawa, Warszawa" },
  { icon: Clock,  label: "Godziny Otwarcia", value: "Pon–Pt: 8:00–18:00  ·  Sob: 9:00–14:00" },
];

/* ─── Komponent główny ───────────────────────────────────────────────── */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Obsługa wysyłki formularza */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    /* Tutaj podłączyć właściwe API/endpoint */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans">
      <Navbar slug="preview-auto" companyName="Podgląd Szablonu" dark={true} />

      {/* Dekoracyjne orby tła */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="fixed top-1/4 left-1/4 w-[40vw] h-[40vw] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="fixed bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* ════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-12 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">Nawiąż Kontakt</span>
          </motion.div>

          {/* Tytuł */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 leading-none"
          >
            Zleć{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Usługę
            </span>
          </motion.h1>

          {/* Kreska akcentowa */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-20 h-[3px] bg-red-600 mx-auto mb-8 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Gotowy, by doświadczyć niezrównanej jakości Podgląd Szablonu? Skontaktuj się z nami i umów swoją kolejną wizytę.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          GŁÓWNA SIATKA: INFO + FORMULARZ
      ════════════════════════════════════════════ */}
      <section className="relative py-12 px-6 pb-24 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Lewa kolumna: dane kontaktowe ───── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {CONTACT_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 hover:border-red-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-1">
                    {item.label}
                  </h3>
                  <p className="text-zinc-100 font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp quick-link */}
            <a
              href="https://wa.me/+48 123 456 789"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-green-900/20 border border-green-800/40 hover:border-green-600/60 hover:bg-green-900/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-800/30 group-hover:bg-green-700/40 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-green-400/80 text-xs uppercase tracking-wider font-semibold mb-1">
                  WhatsApp
                </h3>
                <p className="text-zinc-100 font-medium">Napisz szybką wiadomość</p>
              </div>
              <ArrowRight className="w-4 h-4 text-green-400/60 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mapka placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 flex-1 min-h-[180px]">
              <img
                src="https://images.unsplash.com/photo-1553290322-a4bc22aa3a0f?auto=format&fit=crop&q=80&w=800"
                alt="Lokalizacja serwisu"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-xl px-5 py-3 text-center">
                  <MapPin className="w-5 h-5 text-red-500 mx-auto mb-1" />
                  <p className="text-zinc-200 font-semibold text-sm">ul. Deweloperska 1, Warszawa</p>
                  <p className="text-zinc-500 text-xs">Warszawa</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Prawa kolumna: formularz ─────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-3 bg-zinc-900/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden"
          >
            {/* Dekoracyjny blask w rogu */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/5 rounded-full blur-[90px] pointer-events-none" />

            <AnimatePresence mode="wait">

              {/* ── Stan sukcesu ──────────────────── */}
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 flex flex-col items-center justify-center text-center min-h-[480px] gap-6"
                >
                  {/* Ikona sukcesu z animacją */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>

                  <div>
                    <h3 className="text-3xl font-black mb-3">Wiadomość Wysłana!</h3>
                    <p className="text-zinc-400 text-lg max-w-sm">
                      Dziękujemy za kontakt. Nasz zespół odezwie się do Ciebie najszybciej, jak to możliwe.
                    </p>
                  </div>

                  {/* Przycisk powrotu do formularza */}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-zinc-500 hover:text-zinc-300 text-sm underline underline-offset-4 transition-colors"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </motion.div>

              ) : (

                /* ── Formularz ───────────────────── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  <div className="mb-2">
                    <h2 className="text-2xl font-black mb-1">Wyślij Zapytanie</h2>
                    <p className="text-zinc-500 text-sm">Odpiszemy w ciągu 24 godzin roboczych.</p>
                  </div>

                  {/* Imię + Nazwisko */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Imię</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all placeholder-zinc-700"
                        placeholder="Jan"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Nazwisko</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all placeholder-zinc-700"
                        placeholder="Kowalski"
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all placeholder-zinc-700"
                      placeholder="jan@przyklad.com"
                    />
                  </div>

                  {/* Telefon kontaktowy */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Telefon kontaktowy</label>
                    <input
                      type="tel"
                      className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all placeholder-zinc-700"
                      placeholder="+48 600 000 000"
                    />
                  </div>

                  {/* Rodzaj usługi */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Wymagana Usługa</label>
                    <select
                      className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Wybierz usługę…</option>
                      <option value="diagnostics">Diagnostyka</option>
                      <option value="maintenance">Przegląd Okresowy</option>
                      <option value="repair">Kompleksowa Naprawa</option>
                      <option value="performance">Modyfikacje Osiągów</option>
                      <option value="electrical">Systemy Elektryczne</option>
                    </select>
                  </div>

                  {/* Wiadomość */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Wiadomość</label>
                    <textarea
                      rows="4"
                      className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all placeholder-zinc-700 resize-none"
                      placeholder="Opisz problem lub zakres prac…"
                    />
                  </div>

                  {/* Przycisk wysyłki */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900/60 text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      /* Spinner ładowania */
                      <>
                        <svg className="animate-spin w-5 h-5 text-white/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Wysyłanie…
                      </>
                    ) : (
                      <>
                        Wyślij Zapytanie
                        <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  {/* Alternatywa telefoniczna */}
                  <p className="text-center text-zinc-600 text-sm">
                    Wolisz zadzwonić?{" "}
                    <a href="tel:+48 123 456 789" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                      +48 123 456 789
                    </a>
                  </p>
                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
