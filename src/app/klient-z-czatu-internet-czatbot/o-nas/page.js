"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function BeautyAbout() {
  return (
    <main className="bg-[#FAF9F6] text-[#4A4A4A]">
      <Navbar slug="klient-z-czatu-internet-czatbot" companyName="Klient z czatu" />

      {/* Header */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} 
          className="text-xs font-medium tracking-widest uppercase text-[#A67C52] mb-4">
          Poznaj Nas
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} 
          className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-6">
          O salonie {"Klient z czatu"}
        </motion.h1>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} 
            className="aspect-[21/9] bg-[#F2E8DF] rounded-3xl overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-[#A67C52]/50 italic font-serif text-2xl">
              [Miejsce na urokliwe zdjęcie Twojego salonu]
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-serif text-[#2C2C2C] mb-4">Nasza Pasja do Piękna</h2>
              <p className="text-[#7A7A7A] leading-relaxed mb-4">
                W <strong>{"Klient z czatu"}</strong> wierzymy, że każda osoba posiada swoje unikalne piękno. Naszym celem nie jest zmienianie Ciebie, lecz podkreślenie tego, co w Tobie najpiękniejsze.
              </p>
              <p className="text-[#7A7A7A] leading-relaxed">
                Nasz zespół to wykwalifikowani specjaliści, dla których praca to przede wszystkim sztuka i pasja. Stale śledzimy światowe trendy i uczestniczymy w szkoleniach, aby oferować usługi na najwyższym poziomie.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-serif text-[#2C2C2C] mb-4">Dlaczego my?</h2>
              <ul className="space-y-4">
                {[
                  "Pracujemy wyłącznie na markowych produktach premium.",
                  "Oferujemy indywidualne podejście do każdego klienta.",
                  "Tworzymy atmosferę relaksu i pełnego wyciszenia.",
                  "Dbamy o najwyższe standardy higieny i bezpieczeństwa."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#7A7A7A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer companyName="Klient z czatu" />
    </main>
  );
}
