"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const info = [
  { icon: MapPin, label: "Nasz Adres", value: "ul. Główna 1, karków, karków" },
  { icon: Phone, label: "Zadzwoń", value: "+48 500 123 456" },
  { icon: Mail, label: "Napisz", value: "hello@ania-salon-karkow.pl" },
  { icon: Clock, label: "Godziny", value: "Pon - Sob: 9:00 - 20:00" },
];

export default function BeautyContact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FAF9F6] text-[#4A4A4A]">
      <Navbar slug="ania-salon-karkow" companyName="ania salon" />

      {/* Header */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} 
          className="text-xs font-medium tracking-widest uppercase text-[#A67C52] mb-4">
          Kontakt
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} 
          className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
          Zarezerwuj swój czas
        </motion.h1>
      </section>

      {/* Two-Column */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-serif text-[#2C2C2C] mb-3">Witaj w naszej oazie</h2>
              <p className="text-[#7A7A7A] leading-relaxed text-sm">
                Masz pytania dotyczące zabiegów? Chcesz zarezerwować termin? Zadzwoń do nas lub napisz wiadomość.
              </p>
            </div>
            <div className="space-y-6">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2E8DF] text-[#A67C52] flex items-center justify-center shrink-0">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-medium uppercase tracking-widest text-[#A67C52] mb-0.5">{item.label}</p>
                    <p className="text-[#2C2C2C]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.15 }} className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white border border-[#F2E8DF] shadow-sm rounded-3xl p-8 md:p-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#7A7A7A] mb-2">Imię i nazwisko</label>
                    <input type="text" required className="w-full bg-[#FAF9F6] border border-[#F2E8DF] rounded-xl px-4 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#A67C52] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7A7A7A] mb-2">Telefon / Email</label>
                    <input type="text" required className="w-full bg-[#FAF9F6] border border-[#F2E8DF] rounded-xl px-4 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#A67C52] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#7A7A7A] mb-2">Wiadomość lub preferowany zabieg</label>
                  <textarea rows={4} required className="w-full bg-[#FAF9F6] border border-[#F2E8DF] rounded-xl px-4 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#A67C52] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#A67C52] hover:bg-[#8F6A45] text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Wyślij Wiadomość <Sparkles size={18} />
                </button>
              </form>
            ) : (
              <div className="bg-[#F2E8DF]/30 border border-[#F2E8DF] rounded-3xl p-8 md:p-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#F2E8DF] rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-[#A67C52]" />
                </div>
                <h3 className="text-2xl font-serif text-[#2C2C2C]">Wiadomość wysłana!</h3>
                <p className="text-[#7A7A7A] leading-relaxed max-w-sm">
                  To jest strona DEMO. W gotowej wersji dla Twojego salonu, wiadomości z tego pięknego formularza będą trafiać bezpośrednio na e-mail: <br/>
                  <strong className="text-[#2C2C2C] mt-2 block">{"farti303pg@gmail.com"}</strong>
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-[#A67C52] hover:underline">Wyślij ponownie</button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer companyName="ania salon" />
    </main>
  );
}
