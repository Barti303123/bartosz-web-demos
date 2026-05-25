"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar slug="kancelaria-testowa-warszawa" companyName="Kancelaria Testowa" />
      <main className="flex-grow">
        
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Więcej niż prawnicy. <br/> <span className="text-blue-600">Twoi stratedzy.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Kancelaria Testowa to zespół najwybitniejszych ekspertów w Warszawie. Od ponad 15 lat chronimy majątki, zabezpieczamy transakcje i wygrywamy najtrudniejsze procesy sądowe dla największych firm w Polsce.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Naszą misją jest zapewnienie Ci absolutnego spokoju. Kiedy powierzasz nam swoją sprawę, możesz spać spokojnie. Prawo to nasza broń, a my wiemy jak z niej korzystać.
                </p>
                
                <div className="flex gap-8 border-t border-slate-100 pt-8 mt-8">
                  <div>
                    <h4 className="text-4xl font-bold text-slate-900">15+</h4>
                    <p className="text-slate-500 font-medium">Lat na rynku</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-slate-900">2400</h4>
                    <p className="text-slate-500 font-medium">Wygranych spraw</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1505664177941-5bb71bf64c92?q=80&w=1000&auto=format&fit=crop" 
                    alt="Zespół Kancelarii" 
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Dekoracyjny kwadrat (Glassmorphism) */}
                <div className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white z-20 hidden md:block">
                  <h3 className="text-xl font-bold text-slate-900">Top 10 Forbes</h3>
                  <p className="text-slate-500">Ranking Kancelarii 2026</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

      </main>
      <Footer companyName="Kancelaria Testowa" />
    </div>
  );
}