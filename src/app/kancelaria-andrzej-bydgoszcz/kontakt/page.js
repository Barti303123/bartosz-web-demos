"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const info = [
  { icon: MapPin, label: "Odwiedź nas", value: "ul. Główna 1, Bydgoszcz, Bydgoszcz" },
  { icon: Phone, label: "Zadzwoń do nas", value: "+48 500 123 456" },
  { icon: Mail, label: "Napisz do nas", value: "kontakt@kancelaria-andrzej-bydgoszcz.com" },
];

export default function LawContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-950 text-white">
      <Navbar slug="kancelaria-andrzej-bydgoszcz" companyName="kancelaria Andrzej" dark />

      {/* Header */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/5 to-transparent" />
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} className="relative text-[#D4A853] tracking-[.3em] uppercase text-sm mb-4">Skontaktuj się</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} className="relative font-serif text-5xl md:text-6xl font-bold mb-4">Kontakt z {"kancelaria Andrzej"}</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.2 }} className="relative text-slate-400 text-lg max-w-md mx-auto">Umów się na bezpłatną konsultację — odpowiadamy w ciągu 24 godzin.</motion.p>
      </section>

      {/* Two-Column */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }} className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-2xl font-semibold mb-2">Skontaktuj się z naszym zespołem</h2>
            <p className="text-slate-400 leading-relaxed">Niezależnie od tego, czy potrzebujesz pilnej porady prawnej, czy chcesz szczegółowo omówić swoją sprawę, nasi specjaliści ds. {"prawnik"} w {"Bydgoszcz"} są gotowi pomóc.</p>
            <div className="space-y-6 pt-4">
              {info.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">{item.label}</p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Imię i nazwisko</label>
                    <input type="text" required placeholder="Jan Kowalski" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Adres email</label>
                    <input type="email" required placeholder="jan@example.com" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">W czym możemy pomóc?</label>
                  <textarea rows={5} required placeholder="Opisz swoją sprawę..." className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#D4A853] hover:bg-[#c49a48] text-slate-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
                  Wyślij wiadomość <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="bg-emerald-950/30 border border-emerald-900/50 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Sukces! Formularz działa.</h3>
                <p className="text-slate-300 text-lg max-w-md">
                  To jest strona DEMO wygenerowana przez AI. W pełnej wersji systemu, wszystkie wiadomości z tego formularza będą błyskawicznie trafiać prosto na Twoją skrzynkę: <br/>
                  <strong className="text-white">{"farti303pg@gmail.com"}</strong>
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-[#D4A853] hover:underline">Wyślij kolejną testową wiadomość</button>
              </div>
            )}
        </div>
      </section>

      <Footer companyName="kancelaria Andrzej" />
    </main>
  );
}
