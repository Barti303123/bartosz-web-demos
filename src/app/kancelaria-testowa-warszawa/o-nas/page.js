"use client";
import { motion } from "framer-motion";
import { Award, Users, Clock, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { icon: Clock, value: "15+", label: "Years of Practice" },
  { icon: Award, value: "2,400+", label: "Cases Won" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: Briefcase, value: "50+", label: "Legal Experts" },
];

export default function LawAbout() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar slug="kancelaria-testowa-warszawa" companyName="Kancelaria Testowa" dark />

      {/* Header */}
      <section className="pt-32 pb-12 text-center px-6">
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} className="text-[#D4A853] tracking-[.3em] uppercase text-sm mb-4">About the Firm</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-5xl md:text-6xl font-bold">{"Kancelaria Testowa"}</motion.h1>
      </section>

      {/* Split Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight">A Legacy of Justice<br />in <span className="text-[#D4A853]">{"Warszawa"}</span></h2>
            <p className="text-slate-300 leading-relaxed mb-5">For over 15 years, {"Kancelaria Testowa"} has been the trusted name in {"prawnik"} across {"Warszawa"}. Our attorneys combine deep legal knowledge with an unwavering commitment to every client.</p>
            <p className="text-slate-400 leading-relaxed mb-8">From complex litigation to sensitive negotiations, we bring strategic clarity and relentless preparation. Our office at {"ul. Testowa 1"} serves as the cornerstone of our community practice.</p>
            <a href={`/site/kancelaria-testowa-warszawa/contact`} className="inline-block border-2 border-[#D4A853] text-[#D4A853] hover:bg-[#D4A853] hover:text-slate-950 font-semibold px-8 py-3 rounded transition-colors">Contact Us</a>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Office" className="rounded-2xl w-full h-[480px] object-cover" />
            {/* Glassmorphism overlay card */}
            <div className="absolute -bottom-8 -left-6 md:-left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl max-w-[240px]">
              <p className="text-3xl font-serif font-bold text-[#D4A853] mb-1">2,400+</p>
              <p className="text-sm text-slate-200">Cases successfully resolved for our clients</p>
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
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
        <p className="text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">To provide every client with the same caliber of legal representation once reserved for the privileged few — with transparency, integrity, and resolve.</p>
      </motion.section>

      <Footer companyName="Kancelaria Testowa" />
    </main>
  );
}
