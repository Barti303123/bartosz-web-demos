"use client";
import { motion } from "framer-motion";
import { Award, Users, Clock, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { icon: Clock, value: "15+", label: "Lata praktyki" },
  { icon: Award, value: "2,400+", label: "Wygrane sprawy" },
  { icon: Users, value: "98%", label: "Zadowolenie klientów" },
  { icon: Briefcase, value: "50+", label: "Ekspertów prawnych" },
];

export default function LawAbout() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar slug="kancelaria-andrzej-bydgoszcz" companyName="kancelaria Andrzej" dark />

      {/* Header */}
      <section className="pt-32 pb-12 text-center px-6">
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} className="text-[#D4A853] tracking-[.3em] uppercase text-sm mb-4">O Kancelarii</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold">{"kancelaria Andrzej"}</motion.h1>
      </section>

      {/* Split Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight">Dziedzictwo sprawiedliwości<br />w <span className="text-[#D4A853]">{"Bydgoszcz"}</span></h2>
            <p className="text-slate-300 leading-relaxed mb-5">Od ponad 15 lat {"kancelaria Andrzej"} jest zaufaną nazwą w dziedzinie {"prawnik"} w {"Bydgoszcz"}. Nasi prawnicy łączą głęboką wiedzę prawniczą z niezachwianym zaangażowaniem w sprawy każdego klienta.</p>
            <p className="text-slate-400 leading-relaxed mb-8">Od skomplikowanych sporów sądowych po delikatne negocjacje, wnosimy strategiczną jasność i nieustępliwe przygotowanie. Nasze biuro przy {"ul. Główna 1, Bydgoszcz"} stanowi fundament naszej praktyki społecznej.</p>
            <a href={`/site/kancelaria-andrzej-bydgoszcz/contact`} className="inline-block border-2 border-[#D4A853] text-[#D4A853] hover:bg-[#D4A853] hover:text-slate-950 font-semibold px-8 py-3 rounded transition-colors">Skontaktuj się z nami</a>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Office" className="rounded-2xl w-full h-[480px] object-cover" />
            {/* Glassmorphism overlay card */}
            <div className="absolute -bottom-8 -left-6 md:-left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl max-w-[240px]">
              <p className="text-3xl font-serif font-bold text-[#D4A853] mb-1">2,400+</p>
              <p className="text-sm text-slate-200">Sprawy pomyślnie rozwiązane dla naszych klientów</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-[#D4A853]/30 transition-colors">
              <s.icon className="w-6 h-6 text-[#D4A853] mx-auto mb-3" />
              <p className="text-3xl font-serif font-bold mb-1">{s.value}</p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission CTA */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.8 }}
        className="mx-6 mb-20 max-w-4xl lg:mx-auto bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-12 md:p-16 text-center">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nasza misja</h3>
        <p className="text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">Zapewnienie każdemu klientowi takiego samego kalibru reprezentacji prawnej, jaki niegdyś był zarezerwowany dla nielicznych uprzywilejowanych — z przejrzystością, uczciwością i determinacją.</p>
      </motion.section>

      <Footer companyName="kancelaria Andrzej" />
    </main>
  );
}
