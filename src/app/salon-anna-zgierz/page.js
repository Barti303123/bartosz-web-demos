"use client";
import { motion } from "framer-motion";
import { Sparkles, CalendarHeart, Droplet, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const services = [
  { icon: Sparkles, title: "Stylizacja Włosów", desc: "Nowoczesne cięcia i koloryzacje dobrane do Twojej urody." },
  { icon: Droplet, title: "Pielęgnacja Twarzy", desc: "Zabiegi odmładzające i nawilżające na bazie luksusowych kosmetyków." },
  { icon: CalendarHeart, title: "Manicure & Pedicure", desc: "Perfekcyjne paznokcie z najnowszymi trendami." },
];

export default function BeautyHome() {
  return (
    <main className="bg-[#FAF9F6] text-[#4A4A4A]">
      <Navbar slug="salon-anna-zgierz" companyName="Salon anna" />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#F2E8DF]/50 to-[#FAF9F6]">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.6 }} 
            className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase bg-[#E8D5C4]/30 text-[#A67C52] rounded-full">
            Eksperci od Urody
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.1 }} 
            className="text-5xl md:text-7xl font-serif text-[#2C2C2C] mb-6 leading-tight">
            Odkryj swoje <span className="italic text-[#A67C52]">prawdziwe</span> piękno
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-lg md:text-xl text-[#7A7A7A] max-w-2xl mx-auto mb-10 leading-relaxed">
            Witaj w <strong>{"Salon anna"}</strong>. Zaufaj profesjonalistom w {"zgierz"} i pozwól sobie na chwilę relaksu.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fade} transition={{ duration: 0.8, delay: 0.3 }}>
            <a href="/salon-anna-zgierz/kontakt" className="inline-flex items-center gap-2 bg-[#A67C52] hover:bg-[#8F6A45] text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-[#A67C52]/20">
              Umów Wizytę <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">Nasze Usługi</h2>
            <div className="w-16 h-0.5 bg-[#A67C52] mx-auto mt-6"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: i * 0.1 }} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#F2E8DF] hover:shadow-md transition-shadow group text-center">
                <div className="w-16 h-16 bg-[#F2E8DF]/50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#A67C52] group-hover:scale-110 transition-transform">
                  <srv.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[#2C2C2C] mb-3">{srv.title}</h3>
                <p className="text-[#7A7A7A] leading-relaxed text-sm">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F2E8DF]/30 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-[#A67C52] mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-[#2C2C2C] italic mb-8 leading-relaxed">
            "Najlepszy salon w mieście! Obsługa jest niezwykle profesjonalna, a efekty przeszły moje najśmielsze oczekiwania. Zdecydowanie polecam!"
          </h3>
          <p className="font-medium text-[#7A7A7A] uppercase tracking-widest text-sm">— Zadowolona Klientka</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <h2 className="text-3xl font-serif text-[#2C2C2C] mb-6">Czas zadbać o siebie.</h2>
          <a href="/salon-anna-zgierz/kontakt" className="inline-flex items-center gap-2 bg-[#2C2C2C] hover:bg-black text-white px-8 py-4 rounded-full font-medium transition-colors">
            Zarezerwuj Termin
          </a>
        </motion.div>
      </section>

      <Footer companyName="Salon anna" />
    </main>
  );
}
