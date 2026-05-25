"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const info = [
  { icon: MapPin, label: "Visit Us", value: "ul. Testowa 1, Warszawa" },
  { icon: Phone, label: "Call Us", value: "123 456 789" },
  { icon: Mail, label: "Email Us", value: "contact@kancelaria-testowa-warszawa.com" },
];

export default function LawContact() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar slug="kancelaria-testowa-warszawa" companyName="Kancelaria Testowa" />

      {/* Header */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/5 to-transparent" />
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} className="relative text-[#D4A853] tracking-[.3em] uppercase text-sm mb-4">Get in Touch</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} className="relative font-serif text-5xl md:text-6xl font-bold mb-4">Contact {"Kancelaria Testowa"}</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.2 }} className="relative text-slate-400 text-lg max-w-md mx-auto">Schedule your free consultation — we respond within 24 hours.</motion.p>
      </section>

      {/* Two-Column */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ duration: 0.7 }} className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-2xl font-semibold mb-2">Reach Our Team</h2>
            <p className="text-slate-400 leading-relaxed">Whether you need urgent legal advice or want to discuss your case in detail, our {"prawnik"} attorneys in {"Warszawa"} are ready to help.</p>
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
            <form className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">How Can We Help?</label>
                <textarea rows={5} placeholder="Describe your legal matter..." className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4A853]/60 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#D4A853] hover:bg-[#c49a48] text-slate-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Kancelaria Testowa" />
    </main>
  );
}
