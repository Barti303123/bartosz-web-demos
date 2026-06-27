"use client";
import { motion } from "framer-motion";
import { Target, Heart, Shield, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: Target, title: "Nasza misja", desc: "Zapewnianie wyjątkowych usług, które wspierają firmy i społeczności w Internet (Czatbot na Vercelu)." },
  { icon: Heart, title: "Pasja", desc: "Każdy projekt otrzymuje nasze pełne zaangażowanie i dążenie do doskonałości." },
  { icon: Shield, title: "Uczciwość", desc: "Budujemy zaufanie poprzez przejrzystość, szczerość i spójne wyniki." },
  { icon: TrendingUp, title: "Rozwój", desc: "Pomagamy naszym klientom się skalować dzięki strategiom stworzonym z myślą o długoterminowym sukcesie." },
];

const stats = [
  { value: "500+", label: "Obsłużonych klientów" },
  { value: "10+", label: "Lat doświadczenia" },
  { value: "98%", label: "Poziom satysfakcji" },
  { value: "24/7", label: "Wsparcie" },
];

export default function DefaultAbout() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar slug="klient-z-czatu-auto-fallback-vercel-internet-czatbot-na-vercelu" companyName="Klient z czatu (Auto-Fallback Vercel)" />

      {/* Hero Split */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-white">
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">O nas</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Historia <span className="text-blue-600">{"Klient z czatu (Auto-Fallback Vercel)"}</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Jako zaufany dostawca z branży {"nieznana"} w {"Internet (Czatbot na Vercelu)"}, zbudowaliśmy naszą reputację na jakości, niezawodności i prawdziwej pasji do tego, co robimy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Znajdujemy się przy {"ul. Główna 1, Internet (Czatbot na Vercelu)"}, {"Internet (Czatbot na Vercelu)"} — zawsze jesteśmy tu dla naszej społeczności. Skontaktuj się z nami pod numerem {"+48 500 123 456"}.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/10 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Nasze biuro"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="text-3xl md:text-4xl font-bold text-center mb-16">Nasze wartości</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {stats.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-blue-200 text-sm font-medium tracking-wide uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer companyName="Klient z czatu (Auto-Fallback Vercel)" />
    </main>
  );
}
