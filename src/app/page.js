"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter">Mechanik</div>
          <a href="tel:Brak telefonu" className="hidden md:flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition">
            <Phone size={16} /> Brak telefonu
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wide mb-6 uppercase"
          >
            mechanik w mieście Łódź
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Nowy standard jakości <br className="hidden md:block"/> dla Twojej wygody.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto"
          >
            Jesteśmy tu, by świadczyć usługi na najwyższym poziomie. Odkryj profesjonalizm firmy <strong>Mechanik</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="tel:Brak telefonu" className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 transition flex items-center justify-center gap-2 shadow-xl shadow-black/20">
              <Phone size={20} /> Zadzwoń teraz
            </a>
            <a href="#kontakt" className="px-8 py-4 bg-white border border-neutral-200 rounded-full font-semibold text-lg hover:bg-neutral-50 transition flex items-center justify-center gap-2">
              Dowiedz się więcej <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Dlaczego warto nas wybrać?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Profesjonalna Obsługa",
              "Szybkie terminy realizacji",
              "Gwarancja Satysfakcji"
            ].map((title, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-neutral-500">Zapewniamy najwyższą jakość usług w mieście Łódź. Każdy klient to nasz priorytet.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & CTA */}
      <section id="kontakt" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Skontaktuj się z nami</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-lg">
              <Phone className="text-neutral-400" /> Brak telefonu
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin className="text-neutral-400" /> Łódź
            </div>
          </div>
        </div>
      </section>

      {/* POWERED BY */}
      <footer className="py-8 text-center text-sm font-semibold text-neutral-400 bg-neutral-900 border-t border-neutral-800">
        Stworzone przez <a href="https://bartosz-web.pl" className="text-white hover:underline">Bartosz Web & AI Studio</a>
      </footer>
    </div>
  );
}
