"use client";
import { motion } from "framer-motion";
import { Star, Users, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const features = [
  { icon: Star, title: "Najwyższa jakość", desc: "Dostarczamy doskonałość w każdym calu, zapewniając rezultaty najwyższej klasy, które przekraczają oczekiwania." },
  { icon: Users, title: "Zorientowani na klienta", desc: "Twój sukces nas napędza. Budujemy trwałe partnerstwa oparte na zaufaniu i przejrzystości." },
  { icon: Zap, title: "Szybko i wydajnie", desc: "Usprawnione procesy i nowoczesne narzędzia oznaczają szybszą realizację bez kompromisów." },
];

export default function DefaultHome() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar slug="klient-z-czatu-internet-czatbot" companyName="Klient z czatu" />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-28 relative z-10">
          <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">
            {"nieznana"}
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-3xl">
            Witamy w <span className="text-blue-600">{"Klient z czatu"}</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
            Profesjonalne rozwiązania dopasowane do Twoich potrzeb. Odkryj, dlaczego firmy w {"Internet (Czatbot)"} ufają nam w dostarczaniu rezultatów.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex gap-4 flex-wrap">
            <a href={`/klient-z-czatu-internet-czatbot/kontakt`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
              Zacznij już dziś <ArrowRight size={18} />
            </a>
            <a href={`/klient-z-czatu-internet-czatbot/o-nas`} className="inline-flex items-center gap-2 border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3.5 rounded-full font-semibold transition-all">
              Dowiedz się więcej
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4">Dlaczego warto nas wybrać</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-center mb-16 max-w-lg mx-auto">Zaufali nam klienci w całym {"Internet (Czatbot)"} za wybitną obsługę i wyniki.</motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-100 bg-gradient-to-b from-white to-slate-50/50 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <f.icon size={22} />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Gotowy do startu?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">Skontaktuj się z {"Klient z czatu"} już dziś i porozmawiajmy o tym, jak możemy pomóc Twojej firmie rosnąć.</p>
          <a href={`/klient-z-czatu-internet-czatbot/kontakt`}
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold transition-all shadow-lg">
            Skontaktuj się z nami <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      <Footer companyName="Klient z czatu" />
    </main>
  );
}
